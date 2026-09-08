import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ApplicationSubmission } from '../types';
import { X } from 'lucide-react';

interface NavigationContextType {
  currentPath: string;
  navigate: (path: string) => void;
  applications: ApplicationSubmission[];
  submitApplication: (app: Omit<ApplicationSubmission, 'id' | 'status' | 'submittedAt'>) => string;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

// Initial seeded applications so users can immediately test the status tracker!
const INITIAL_APPLICATIONS: ApplicationSubmission[] = [
  {
    id: 'APP-7029',
    type: 'job',
    fullName: 'Alexander Wright',
    email: 'alex.wright@example.com',
    phone: '+1 (555) 234-5678',
    roleOrCategory: 'Senior Full-Stack Engineer (React & Go)',
    status: 'Shortlisted',
    submittedAt: '2 days ago',
    notes: 'Technical portfolio reviewed by Lead Architect. Screening interview scheduled.',
  },
  {
    id: 'NET-8841',
    type: 'freelancer',
    fullName: 'Sophia Ramirez',
    email: 'sophia.r@designcraft.io',
    phone: '+44 20 7946 0912',
    roleOrCategory: 'UI/UX & Design Systems',
    status: 'Under Review',
    submittedAt: 'Yesterday',
    notes: 'Submitted Figma portfolio and hourly rate specs. Team review in progress.',
  },
  {
    id: 'NET-4492',
    type: 'freelancer',
    fullName: 'Liam Patel',
    email: 'liam.patel@cloudstack.dev',
    phone: '+1 (555) 891-2345',
    roleOrCategory: 'Cloud Architecture & DevOps',
    status: 'Technical Screening',
    submittedAt: '5 days ago',
    notes: 'Completed 90-minute live architectural review. Verifying client references.',
  },
];

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [applications, setApplications] = useState<ApplicationSubmission[]>(() => {
    try {
      const saved = localStorage.getItem('tersan_tech_applications');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return INITIAL_APPLICATIONS;
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4500);
  };

  const submitApplication = (app: Omit<ApplicationSubmission, 'id' | 'status' | 'submittedAt'>): string => {
    const prefix = app.type === 'job' ? 'APP' : 'NET';
    const randNum = Math.floor(1000 + Math.random() * 9000);
    const newId = `${prefix}-${randNum}`;

    const newApp: ApplicationSubmission = {
      ...app,
      id: newId,
      status: 'Under Review',
      submittedAt: 'Just now',
      notes: 'Application received. Our talent operations team will review within 2 business days.',
    };

    const updated = [newApp, ...applications];
    setApplications(updated);
    try {
      localStorage.setItem('tersan_tech_applications', JSON.stringify(updated));
    } catch {
      // ignore
    }
    return newId;
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigate,
        applications,
        submitApplication,
        toastMessage,
        showToast,
      }}
    >
      {children}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#141A3E] border border-[#22D3D8]/40 text-white px-5 py-3.5 rounded-lg shadow-2xl animate-fade-in text-sm">
          <div className="w-2.5 h-2.5 rounded-full bg-[#22D3D8] animate-pulse"></div>
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-2 text-slate-400 hover:text-white p-1 transition-colors"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
