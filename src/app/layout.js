import './globals.css'
import { SwishjamProvider } from '@swishjam/react'
import { Toaster } from "@/components/ui/sonner"

export const metadata = {
  title: 'Promptcraft',
  description: 'An Open-Source Hackable AI Prompt Builder',
  openGraph: {
    title: 'Promptcraft', 
    description: 'An Open-Source Hackable AI Prompt Builder',
    images: ['https://promptcraft.swishjam.com/og-x-fb.png'], 
  }
}

export default function RootLayout({ children }) {
  return (
    <SwishjamProvider apiKey='swishjam-1b73e1bd-c8b19919'>
      <html lang="en">
        <head>
          <meta name="theme-color" content="#2e5e38" />
          <meta name="robots" content="noindex" />
        </head>
        <body className="bg-gray-900">{children}</body>
        <Toaster richColors position="top-right"/>
      </html>
    </SwishjamProvider>
  )
}
