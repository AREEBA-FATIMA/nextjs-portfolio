import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-roboto bg-gray-100">
        {/* Navbar */}
        <nav
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 lg:top-1/2 lg:right-0 lg:left-auto lg:transform lg:-translate-y-1/2 z-10 flex lg:flex-col items-center justify-center p-3 space-x-4 lg:space-x-0 lg:space-y-4 bg-gray-800 border border-purple-100 rounded-full"
        >
          <ul className="flex lg:flex-col items-center space-x-6 lg:space-x-0 lg:space-y-6">
            {[
              { icon: "fas fa-home", tooltip: "Home", link: "/" },
              { icon: "fas fa-folder-tree", tooltip: "Projects", link: "/projects" },
              { icon: "fas fa-laptop-code", tooltip: "Services", link: "/services" },
              { icon: "fas fa-code", tooltip: "Skills", link: "/skills" },
              { icon: "fas fa-comments", tooltip: "Contact", link: "/contact" },
            ].map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  href={item.link}
                  title={item.tooltip}
                  className="text-purple-100 text-2xl hover:text-purple-500"
                >
                  <i className={item.icon}></i>
                </Link>
                <span
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full lg:-translate-y-1/2 lg:left-full lg:ml-2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs rounded-md px-2 py-1 transition-opacity duration-300"
                >
                  {item.tooltip}
                </span>
              </li>
            ))}
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
}
