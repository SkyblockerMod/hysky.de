import Header from "./header"
import Footer from "./footer"
import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <body className="flex flex-col min-h-screen bg-base-200 text-base-content">
      <Head>
        <title>Hysky</title>
        <meta content="Hysky" property="og:title" />
        <meta content="Hysky" property="og:description" />
        <meta content="https://hysky.de" property="og:url" />
        <meta content="/icon.png" property="og:image" />
      </Head>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </body>
  )
}
