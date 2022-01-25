import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>TOP</title>
      </Head>
      <span className="font-bold text-[red]">Hello world!</span>
    </Layout>
  );
};

export default Home;
