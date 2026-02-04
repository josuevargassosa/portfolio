import {useTranslations} from 'next-intl';
import {experiences, education} from '@/data/experience';
import {TimelineItem} from '@/components/resume/TimelineItem';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {Download} from 'lucide-react';

function formatPeriod(start: string, end: string | null, presentLabel: string): string {
  const fmt = (d: string) => (d.length > 4 ? d.slice(0, 7) : d);
  return `${fmt(start)} - ${end ? fmt(end) : presentLabel}`;
}

export default function ResumePage() {
  const t = useTranslations('resume');

  return (
    <>
      <Header />
      <main className="pt-24 pb-20 px-6 lg:px-52">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h1 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
              {t('title')}
            </h1>
            <p className="text-4xl font-bold font-heading uppercase tracking-wider">
              {t('subtitle')}
            </p>
          </div>
          <a
            href="/cv/cv-es.pdf"
            download
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider bg-foreground text-background px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            <Download size={16} />
            {t('downloadCV')}
          </a>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold font-heading mb-8">{t('experience')}</h2>
          <div className="max-w-2xl">
            {experiences.map((exp) => (
              <TimelineItem
                key={exp.id}
                title={exp.position}
                subtitle={exp.company}
                period={formatPeriod(exp.period.start, exp.period.end, t('present'))}
                description={exp.description}
                tags={exp.techStack}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold font-heading mb-8">{t('education')}</h2>
          <div className="max-w-2xl">
            {education.map((edu) => (
              <TimelineItem
                key={edu.id}
                title={edu.degree}
                subtitle={edu.institution}
                period={`${edu.period.start} - ${edu.period.end}`}
                description={edu.description}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
