'use client';

import {Instagram, Linkedin, Github} from 'lucide-react';
import {socialLinks} from '@/data/social-links';

const iconMap = {
  instagram: Instagram,
  linkedin: Linkedin,
  github: Github,
} as const;

export function SocialSidebar() {
  return (
    <nav className="fixed left-0 top-1/4 z-40 hidden md:block" aria-label="Social media">
      <ul className="flex flex-col shadow-lg">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <li key={link.name} className="group relative h-[60px] w-[70px] hover:w-[200px] transition-all duration-300">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center h-full w-full text-white border-b border-black/20"
                style={{backgroundColor: link.color}}
                aria-label={link.name}
              >
                <Icon className="absolute left-5 top-1/2 -translate-y-1/2 w-7 h-7" />
                <span className="opacity-0 group-hover:opacity-100 ml-16 font-bold text-sm uppercase tracking-wider transition-opacity duration-200">
                  {link.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
