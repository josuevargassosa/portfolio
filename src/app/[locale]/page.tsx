import dynamic from 'next/dynamic';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/home/Hero';
import { StatsSection } from '@/components/home/StatsSection';
import { SocialSidebar } from '@/components/layout/SocialSidebar';
import { Footer } from '@/components/layout/Footer';

const SkillsGrid = dynamic(
  () => import('@/components/home/SkillsGrid').then((m) => m.SkillsGrid),
);
const ProjectsPreview = dynamic(
  () => import('@/components/projects/ProjectsPreview').then((m) => m.ProjectsPreview),
);
const ResumePreview = dynamic(
  () => import('@/components/resume/ResumePreview').then((m) => m.ResumePreview),
);
const CertificatesPreview = dynamic(
  () => import('@/components/certificates/CertificatesPreview').then((m) => m.CertificatesPreview),
);
const ContactSection = dynamic(
  () => import('@/components/contact/ContactSection').then((m) => m.ContactSection),
);

export default function Home() {
  return (
    <>
      <Header />
      <SocialSidebar />
      <main className="relative z-10">
        <Hero />
        <StatsSection />
        <SkillsGrid />
        <ProjectsPreview />
        <ResumePreview />
        <CertificatesPreview />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
