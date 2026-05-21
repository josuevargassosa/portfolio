interface JsonLdProps {
  locale?: string;
}

const SITE_URL = 'https://josuevargassosa.com';

export function JsonLd({locale = 'es'}: JsonLdProps) {
  const isEn = locale === 'en';

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Josue Vargas',
    givenName: 'Josue',
    familyName: 'Vargas Sosa',
    jobTitle: isEn ? 'Senior Software Engineer' : 'Ingeniero de Software Senior',
    description: isEn
      ? 'Senior Software Engineer with 6+ years of experience leading development in Angular, NestJS, .NET and clean architecture.'
      : 'Senior Software Engineer con más de 6 años de experiencia liderando desarrollo con Angular, NestJS, .NET y arquitectura limpia.',
    url: SITE_URL,
    image: `${SITE_URL}/images/josueLogo.png`,
    email: 'mailto:josuevargass@hotmail.com',
    nationality: {'@type': 'Country', name: 'Ecuador'},
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Guayaquil',
      addressRegion: 'Guayas',
      addressCountry: 'EC',
    },
    sameAs: [
      'https://www.linkedin.com/in/josue-vargas-sosa',
      'https://github.com/josuevargassosa',
      'https://www.instagram.com/josuevargassosa/',
    ],
    knowsLanguage: [
      {'@type': 'Language', name: 'Spanish', alternateName: 'es'},
      {'@type': 'Language', name: 'English', alternateName: 'en'},
    ],
    knowsAbout: [
      'Angular', 'NestJS', '.NET', 'C#', 'React', 'Next.js', 'TypeScript',
      'Node.js', 'Flutter', 'Dart', 'SQL Server', 'PostgreSQL', 'MySQL',
      'Azure', 'Azure DevOps', 'Docker', 'Git', 'Clean Architecture',
      'CI/CD', 'REST APIs', 'Microservices', 'Web Development', 'Mobile Development',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: isEn ? 'Senior Software Engineer' : 'Ingeniero de Software Senior',
      occupationLocation: {
        '@type': 'City',
        name: 'Guayaquil',
      },
      skills: 'Angular, NestJS, .NET, React, Next.js, Flutter, TypeScript, Azure, Clean Architecture, CI/CD',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Josue Vargas | Senior Software Engineer',
    url: SITE_URL,
    inLanguage: isEn ? 'en-US' : 'es-ES',
    description: isEn
      ? 'Portfolio of Josue Vargas, Senior Software Engineer specializing in Angular, NestJS, .NET, React, Next.js and Flutter.'
      : 'Portfolio de Josue Vargas, Ingeniero de Software Senior especializado en Angular, NestJS, .NET, React, Next.js y Flutter.',
    publisher: {'@id': `${SITE_URL}/#person`},
    author: {'@id': `${SITE_URL}/#person`},
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/${locale}#profile`,
    url: `${SITE_URL}/${locale}`,
    inLanguage: isEn ? 'en-US' : 'es-ES',
    name: 'Josue Vargas | Senior Software Engineer',
    isPartOf: {'@id': `${SITE_URL}/#website`},
    about: {'@id': `${SITE_URL}/#person`},
    mainEntity: {'@id': `${SITE_URL}/#person`},
    dateModified: new Date().toISOString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: JSON.stringify(personSchema)}}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: JSON.stringify(websiteSchema)}}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: JSON.stringify(profilePageSchema)}}
      />
    </>
  );
}
