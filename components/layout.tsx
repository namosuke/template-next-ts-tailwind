import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const siteTitle = "Hello world!";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      {children}
    </>
  );
};

export default Layout;
