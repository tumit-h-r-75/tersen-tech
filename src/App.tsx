import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { PricingPage } from './pages/PricingPage';
import { ProcessPage } from './pages/ProcessPage';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { JobDetailPage } from './pages/JobDetailPage';
import { TalentShowcasePage } from './pages/TalentShowcasePage';
import { JoinFreelancerPage } from './pages/JoinFreelancerPage';
import { EstimatePage } from './pages/EstimatePage';
import { BookConsultationPage } from './pages/BookConsultationPage';
import { ApplicationStatusPage } from './pages/ApplicationStatusPage';
import { SuccessStoriesPage } from './pages/SuccessStoriesPage';
import { PartnersPage } from './pages/PartnersPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostDetailPage } from './pages/BlogPostDetailPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { ClientPortalPage, TeamPortalPage } from './pages/PortalPages';

const RouterView: React.FC = () => {
  const { currentPath } = useNavigation();

  // Route matching
  if (currentPath === '/') {
    return <HomePage />;
  }
  if (currentPath === '/services') {
    return <ServicesIndexPage />;
  }
  if (currentPath.startsWith('/services/')) {
    const slug = currentPath.replace('/services/', '');
    return <ServiceDetailPage slug={slug} />;
  }
  if (currentPath === '/industries') {
    return <IndustriesPage />;
  }
  if (currentPath === '/case-studies') {
    return <CaseStudiesPage />;
  }
  if (currentPath.startsWith('/case-studies/')) {
    const slug = currentPath.replace('/case-studies/', '');
    return <CaseStudyDetailPage slug={slug} />;
  }
  if (currentPath === '/pricing' || currentPath === '/how-we-work') {
    return <PricingPage />;
  }
  if (currentPath === '/how-we-deliver') {
    return <ProcessPage />;
  }
  if (currentPath === '/about') {
    return <AboutPage />;
  }
  if (currentPath === '/careers') {
    return <CareersPage />;
  }
  if (currentPath.startsWith('/careers/')) {
    const slug = currentPath.replace('/careers/', '');
    return <JobDetailPage slug={slug} />;
  }
  if (currentPath === '/talent') {
    return <TalentShowcasePage />;
  }
  if (currentPath === '/join-freelancer-network') {
    return <JoinFreelancerPage />;
  }
  if (currentPath === '/estimate') {
    return <EstimatePage />;
  }
  if (currentPath === '/book-a-call') {
    return <BookConsultationPage />;
  }
  if (currentPath === '/application-status') {
    return <ApplicationStatusPage />;
  }
  if (currentPath === '/success-stories') {
    return <SuccessStoriesPage />;
  }
  if (currentPath === '/partners') {
    return <PartnersPage />;
  }
  if (currentPath === '/resources') {
    return <BlogPage />;
  }
  if (currentPath.startsWith('/resources/')) {
    const slug = currentPath.replace('/resources/', '');
    return <BlogPostDetailPage slug={slug} />;
  }
  if (currentPath === '/faqs') {
    return <FaqPage />;
  }
  if (currentPath === '/contact') {
    return <ContactPage />;
  }
  if (currentPath === '/portal/client') {
    return <ClientPortalPage />;
  }
  if (currentPath === '/portal/team') {
    return <TeamPortalPage />;
  }

  // Fallback to Home
  return <HomePage />;
};

export default function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <div className="min-h-screen bg-[#0E1330] text-slate-100 flex flex-col font-sans selection:bg-[#22D3D8] selection:text-[#0E1330] transition-colors duration-200">
          <Header />
          <main className="flex-grow">
            <RouterView />
          </main>
          <Footer />
        </div>
      </NavigationProvider>
    </ThemeProvider>
  );
}
