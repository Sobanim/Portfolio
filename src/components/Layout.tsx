import Head from 'next/head';
import React from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
};

function Layout({ children, title }: Props) {
  return (
    <div className="flex flex-col min-h-screen py-0 justify-center items-center">
      <Head>
        <title>{title}</title>
      </Head>

      <header className="flex justify-between px-14 lg:px-24 items-center h-16 w-full bg-customWhite">
        <div className="w-16">
          <img src="/images/Logo_DS.svg" />
        </div>
        <nav>
          <span>Main Page</span>
          <span>Main Page</span>
          <span>Main Page</span>
          <span>Main Page</span>
        </nav>
      </header>

      <main className="my-8 mx-14 lg:my-16 lg:mx-24">{children}</main>

      <footer className="flex w-full h-24 bg-customGreen justify-center text-white text-xl font-bold items-center">
        <span>Kôlnička 2021</span>
      </footer>
    </div>
  );
}

export default Layout;
