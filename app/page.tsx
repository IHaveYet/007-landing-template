import { Metadata } from 'next';
import Link from 'next/link';
import LaserText from './components/LaserText';

export const metadata: Metadata = {
  title: '007 - Step into the Future of Crypto Trading',
  description: 'Maximize your potential with a powerful platform built to shape the future of digital trading.',
};

export default function Home() {
  return (
    <>
      <header className="header">
        <Link href="/" className="logo">
          <span>007</span>
        </Link>
        <div className="header-buttons">
          <Link href="#" className="btn-sign-in">Sign In</Link>
          <Link href="#" className="btn-get-started">Get Started</Link>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-black">
        <div className="text-center">
          <LaserText text="Step into the Future" />
          <LaserText 
            text="of 007" 
            className="laser-line"
            animationDelay={200}
          />
          <div className="mt-8">
            <LaserText 
              text="Maximize your potential with a powerful platform built to shape the future" 
              className="laser-line-small"
              animationDelay={50}
            />
          </div>
        </div>
      </main>
    </>
  );
}