import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Zen_Maru_Gothic } from "@next/font/google";
import Layout from "../components/layout";

const zenMaruGothic = Zen_Maru_Gothic({
  weight: "700",
  subsets: ["japanese"],
  display: "swap",
});

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>TOP</title>
      </Head>
      <span className={`${zenMaruGothic.className} text-3xl text-[red]`}>
        Hello world! おはよう世界！
      </span>
    </Layout>
  );
};

export default Home;
