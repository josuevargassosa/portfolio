import { Linkedin, Github, Mail } from 'lucide-react';
import { socialLinks } from '@/data/social-links';

const iconMap: Record<string, React.ElementType> = {
  linkedin: Linkedin,
  github: Github,
};

export function Footer() {
  const year = new Date().getFullYear();
  const version = process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0';

  return (
    <footer className="border-t border-border/50 py-12 px-6 lg:px-52">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold font-heading mb-1">Josue Vargas</p>
            <p className="text-sm text-muted-foreground max-w-xs">
              Senior Full Stack Engineer building solid digital products.
            </p>
            <span className="inline-block mt-3 text-xs font-medium px-2.5 py-1 rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
              Available for projects
            </span>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                >
                  {Icon && <Icon size={18} strokeWidth={1.8} />}
                </a>
              );
            })}
            <a
              href="mailto:josuevargass@hotmail.com"
              aria-label="Email"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary border border-border/50 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
            >
              <Mail size={18} strokeWidth={1.8} />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6 border-t border-border/30 text-xs text-muted-foreground">
          <p>&copy; {year} Josue Vargas. All rights reserved.</p>
          <p>v{version}</p>
        </div>
      </div>
    </footer>
  );
}
