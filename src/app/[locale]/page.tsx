import {Header} from '@/components/layout/Header';
import {Hero} from '@/components/home/Hero';
import {WaveSVG} from '@/components/home/WaveSVG';
import {SkillsGrid} from '@/components/home/SkillsGrid';
import {SocialSidebar} from '@/components/layout/SocialSidebar';
import {ProjectsPreview} from '@/components/projects/ProjectsPreview';
import {ResumePreview} from '@/components/resume/ResumePreview';
import {CertificatesPreview} from '@/components/certificates/CertificatesPreview';
import {Footer} from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <SocialSidebar />
      <main>
        <Hero />
        <WaveSVG />
        <SkillsGrid />
        <ProjectsPreview />
        <ResumePreview />
        <CertificatesPreview />
      </main>
      <Footer />
    </>
  );
}
