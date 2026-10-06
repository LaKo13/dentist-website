import React from 'react'

export const metadata = {
  title: 'Beauty Dentistry Mallorca - Dr. Erik Koerge',
  description: 'Expert dental care in Bendinat, Mallorca. Aesthetic dentistry, implants, and comprehensive dental treatments.',
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Beauty Dentistry Mallorca",
  "image": "https://beautydentistrymallorca.com/images/dr-erik-koerge.png",
  "url": "https://beautydentistrymallorca.com",
  "telephone": "+34-971-123456",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plaza Bendinat Local B10",
    "addressLocality": "Bendinat",
    "postalCode": "07181",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.5401567,
    "longitude": 2.5831752
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "€€€"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
} 