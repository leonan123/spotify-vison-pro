import type { Metadata } from 'next'
import './globals.css'

import { circularSpotifyText, sfProDisplay } from '../fonts'

export const metadata: Metadata = {
  title: 'Spotify vision pro',
  description: 'This is a only demo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${circularSpotifyText.className} ${circularSpotifyText.variable} ${sfProDisplay.variable} relative flex h-dvh items-center justify-items-center bg-app bg-center bg-cover bg-no-repeat text-white antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
