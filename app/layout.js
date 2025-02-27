import localFont from "next/font/local";
import Navbar from './components/Navbar'
import About from './about/page'
import Projects from './projects/Page'
import Contact from './contact/Page'
import Skills1 from './test/skills'
import Speeddial from './components/speeddial'

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
         <Speeddial />
        <div id="Divide1" className="divider"></div>
        {children}
        <div id="Divide2" className="divider"></div>
        <About />
        <div id="Divide3" className="divider"></div>
        <Skills1 />
        {/* <Skills /> */}
        <div id="Divide4" className="divider"></div>
        <Projects />
        <div id="Divide5" className="divider"></div>
        <Contact />
      </body>
    </html >
  );
}
