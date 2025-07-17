// components/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Meme Creator
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Create and Share Memes with Ease
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Our meme creator allows you to create, customize, and share hilarious memes with your friends and followers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// components/Navigation.tsx
import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-lg">
                Meme Creator
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/create"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Create Meme
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

// app/page.tsx
import React from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
    </div>
  );
};

export default Home;