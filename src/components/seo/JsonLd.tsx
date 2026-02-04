export function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Josue Vargas',
    jobTitle: 'Full Stack Developer',
    url: 'https://josuevargassosa.com',
    sameAs: [
      'https://www.linkedin.com/in/josuevargas98',
      'https://github.com/josuevargassosa',
      'https://www.instagram.com/josuevargassosa/',
    ],
    knowsAbout: [
      'Angular', 'React', 'Next.js', 'TypeScript', 'Node.js',
      'NestJS', 'Flutter', 'Ionic', 'SQL Server', 'Git',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Josue Vargas Portfolio',
    url: 'https://josuevargassosa.com',
    inLanguage: ['es', 'en'],
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
