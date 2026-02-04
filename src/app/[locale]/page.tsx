import {Header} from '@/components/layout/Header';
import {Hero} from '@/components/home/Hero';
import {WaveSVG} from '@/components/home/WaveSVG';
import {SkillsGrid} from '@/components/home/SkillsGrid';
import {SocialSidebar} from '@/components/layout/SocialSidebar';

export default function Home() {
  return (
    <>
      <Header />
      <SocialSidebar />
      <main>
        <Hero />
        <WaveSVG />
        <SkillsGrid />
      </main>
    </>
  );
}
