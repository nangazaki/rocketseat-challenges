import Head from "next/head";
import { stripe } from "@/lib/stripe";
import { useEffect, useState } from "react";
import { formatCurrency } from "@/helpers/formatCurrency";

import { Slider } from "@/components/Slider";
import { HomeContainer } from "@/styles/pages/home";
import type { GetStaticProps } from "next";
import type Stripe from "stripe";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}
export default function Home({ products }: HomeProps) {
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingData(false);
    }, 2000);
  });

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer>
        {isLoadingData && <Slider />}
        {!isLoadingData && <Slider products={products} />}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = res.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formatCurrency((price.unit_amount as number) / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
