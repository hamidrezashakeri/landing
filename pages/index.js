import Chart from '@/components/Chart';
import ComparativePlan from '@/components/ComparativePlan';
import Counseling from '@/components/Counseling';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Properties from '@/components/Properties';
import Questions from '@/components/Questions';
import StartInvesting from '@/components/StartInvesting';
import StaticHeader from '@/components/StaticHeader';
import Head from 'next/head';
import Image from 'next/image';

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>تامین سرمایه کاردان</title>
        <meta name="description" content="kardan website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Header */}
        <Header />

        {/* static header */}
        <StaticHeader />

        {/* comparative plan */}
        <ComparativePlan />

        {/* Start Investing */}
        <StartInvesting />

        {/* Chart */}
        <Chart data={data} />

        {/* Properties */}
        <Properties />

        {/* questions */}
        <Questions />

        {/* Counseling */}
        <Counseling />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('https://server.kardan.ir/api/v1/home/getHomeChart?year=10');
  const data = await res.json();
  return{
    props:{
      data
    }
  } 
}
