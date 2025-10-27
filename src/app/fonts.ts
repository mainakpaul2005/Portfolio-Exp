import { Inter, Space_Grotesk, Poppins } from 'next/font/google'

// Space Grotesk for headers - Modern, geometric, excellent for headlines
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

// Inter for body text - Clean, readable, professional
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

// Alternative: Poppins (commented out - uncomment to use)
// export const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-heading',
//   display: 'swap',
// })
