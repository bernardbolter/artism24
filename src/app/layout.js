import { Mohave } from 'next/font/google'
import ArtProvider from '../providers/ArtProvider'
import '../styles/index.scss'

const mohave = Mohave({ subsets: ['latin'] })

export const metadata = {
  title: 'Artism.org | web-based AR for Artists',
  description: 'Discover web-based AR solutions for artists at Artism.org. Create immersive augmented reality experiences directly in web browsers, no separate apps needed.',
  referrer: 'origin-when-cross-origin',
  keywords: ['web-based AR', 'augmented reality for artists', 'browser-based AR', 'digital art enhancement', 'interactive web experiences'],
  authors: [{ name: 'Bernard John Bolter IV', url: 'https://bernardbolter.com' }],
  creator: 'Bernard John Bolter IV',
  metadataBase: new URL('https://artism.org'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <ArtProvider>
        <body className={mohave.className}>
          {children}
        </body>
      </ArtProvider>
    </html>
  )
}
