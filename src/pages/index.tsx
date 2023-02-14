import Head from 'next/head';
import { GetServerSideProps } from 'next';
import type { Name } from '@/pages/api/hello';

const Home = ({ name }: Name) => (
  <>
    <Head>
      <title>Next TypeScript Starter</title>
      <meta
        name="description"
        content="Get started instantly with Next, TypeScript and Tailwind CSS"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="flex min-h-[80vh] items-center justify-center">
      <h1 className="text-2xl font-bold">Hello, {name}</h1>
    </main>
  </>
);

const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.HOST}/api/hello`);
  const data = await res.json();

  return {
    props: {
      name: data.name,
    },
  };
};

export { getServerSideProps };
export default Home;
