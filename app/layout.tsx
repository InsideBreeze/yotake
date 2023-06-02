import Link from "next/link"
import "./globals.css"
import { Roboto_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"

const roboto = Roboto_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Sotake's personal website",
  description: "personal website",
}

interface RootLayoutProps {
  children: React.ReactNode
}

const links = [
	{
		name: 'Home',
		ref: '/'
	},
	{
		name: 'Posts',
		ref: '/posts'
	},
	{
		name: 'Links',
		ref: '/links'
	},
	{
		name: "About",
		ref: '/about'
	}
]

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${roboto.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-3xl mx-auto py-4 px-4">
            <header className='relative'>
							<p className='text-lg font-light text-center'>Sotake</p>
							<span className='absolute right-0 top-[50%] translate-y-[-50%]'>
							<ModeToggle />
							</span>
						</header>
						<nav className='text-center space-x-4 my-3'>
							{
								links.map(link => (
									<Link key={link.name} href={link.ref} className='text-link_light dark:text-link_dark hover:underline'>
										{link.name}
									</Link>
								))
							}
						</nav>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
