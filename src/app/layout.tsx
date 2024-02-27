import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {Navbar} from '../components/navbar';
import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Navbar />
          <div className="grow">{children}</div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
