import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
};

function Layout({ children, title }: Props) {
  return (
    <div className="flex flex-col min-h-screen py-0 justify-center font-pt">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />

        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="flex justify-between px-14 lg:px-24 items-center h-20 w-full bg-customWhite">
        <div className="w-20">
          <Link href="/">
            <a href="/">
              <img src="/images/Logo_DS.svg" alt="My logo" />
            </a>
          </Link>
        </div>
        <nav>
          {/* <span>Main Page</span>
          <span>Main Page</span>
          <span>Main Page</span>
          <span>Main Page</span> */}
        </nav>
      </header>

      <main className="my-8 mx-14 lg:my-16 lg:mx-24">{children}</main>

      <footer className="flex w-full h-14 mt-auto bg-customGreen justify-center text-white text-base font-bold items-center">
        <span>Copyright © Dmytro Soboliev</span>
      </footer>
    </div>
  );
}

export default Layout;
