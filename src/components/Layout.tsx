import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="flex">
    <nav className="w-64 bg-gray-800 text-white h-screen p-4">
      <ul>
        <li className="mb-4">
          <Link href="/dashboard">
            <a className="text-white">Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/schools">
            <a className="text-white">Schools</a>
          </Link>
        </li>
      </ul>
    </nav>
    <main className="flex-1 p-4">{children}</main>
  </div>
);

export default Layout;
