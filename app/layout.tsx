import React from 'react'

export const metadata = {
  title: 'Dental Practice',
  description: 'Your trusted partner in dental health',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 