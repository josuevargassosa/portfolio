export function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Josue Vargas',
    jobTitle: 'Senior Software Engineer',
    description: 'Senior Software Engineer con más de 5 años de experiencia liderando desarrollo con Angular, NestJS, .NET y arquitectura limpia.',
    url: 'https://josuevargassosa.com',
    image: 'https://josuevargassosa.com/images/josueLogo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Guayaquil',
      addressCountry: 'EC',
    },
    sameAs: [
      'https://www.linkedin.com/in/josuevargas98',
      'https://github.com/josuevargassosa',
      'https://www.instagram.com/josuevargassosa/',
    ],
    knowsAbout: [
      'Angular', 'NestJS', '.NET', 'React', 'Next.js', 'TypeScript',
      'Node.js', 'Flutter', 'SQL Server', 'Azure', 'Docker',
      'Clean Architecture', 'CI/CD', 'Git',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Josue Vargas | Senior Software Engineer',
    url: 'https://josuevargassosa.com',
    inLanguage: ['es', 'en'],
    author: { '@type': 'Person', name: 'Josue Vargas' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(personSchema)}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(websiteSchema)}}
      />
    </>
  );
}
