import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Evin Electric | Licensed Electrician in Hatboro, PA',
  description: 'Evin Electric provides professional electrical services in Hatboro, PA and surrounding Bucks County areas. Panel installation, circuit breaker repair, wire installation, and more. Call (610) 864-3103.',
  keywords: 'electrician Hatboro PA, electrical repair Hatboro, panel installation Bucks County, circuit breaker repair, licensed electrician Pennsylvania, Evin Electric',
  openGraph: {
    title: 'Evin Electric | Licensed Electrician in Hatboro, PA',
    description: 'Professional electrical services in Hatboro, PA. Available 7 days a week. No job too big or too small.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="US-PA" />
        <meta name="geo.placename" content="Hatboro" />
        <link rel="canonical" href="https://evinelectric.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}