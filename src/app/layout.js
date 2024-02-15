import './globals.css'
import { SwishjamProvider } from '@swishjam/react'
import { Toaster } from "@/components/ui/sonner"

export const metadata = {
  title: 'Promptcraft',
  description: 'An Open-Source Hackable AI Chatbot Prompt Builder',
  openGraph: {
    title: 'Prompt Craft', 
    images: [{
      url: '',
      width: 1972,
      height: 1274,
    },], 
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
        <Toaster richColors />
      </html>
    </SwishjamProvider>
  )
}
