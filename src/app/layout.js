import './globals.css'
import { SwishjamProvider } from '@swishjam/react'

export const metadata = {
  title: 'Prompt Craft',
  description: 'AI Chatbot Prompt Builder for your amusement',
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
    <SwishjamProvider apiKey=''>
      <html lang="en">
        <head>
          <meta name="theme-color" content="#2e5e38" />
          <meta name="robots" content="noindex" />
        </head>
        <body className="bg-gray-900">{children}</body>
      </html>
    </SwishjamProvider>
  )
}
