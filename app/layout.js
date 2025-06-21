// app/layout.js
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My Product App',
  description: 'Browse beautiful products easily',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* NAVBAR */}
        <nav className="bg-white shadow sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-blue-600">
              MyShop
            </Link>
            <div className="space-x-4">
              <Link href="/products" className="text-gray-700 hover:text-blue-600">
                Products
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="bg-gray-100 text-center text-gray-500 py-4 text-sm mt-10 border-t">
          © {new Date().getFullYear()} MyShop. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
