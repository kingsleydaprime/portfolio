import { SITE_URL } from '@/constants'

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kingsley Ihemelandu',
    url: SITE_URL,
    image: `${SITE_URL}/images/kingsley.jpg`,
    jobTitle: 'Systems Engineer & Software Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Nextvibe',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'University of Lagos',
    },
    sameAs: [
      'https://github.com/kingsleydaprime',
      'https://linkedin.com/in/kingsleydaprime',
      'https://x.com/kingsleydaprime',
      'https://medium.com/@kingsleydaprime',
      'https://instagram.com/kingsleydaprime',
    ],
    knowsAbout: [
      'Systems Engineering',
      'Backend Development',
      'Robotics',
      'Machine Learning',
      'Embedded Systems',
      'Full Stack Development',
    ],
    nationality: 'Nigerian',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lagos',
      addressCountry: 'NG',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}