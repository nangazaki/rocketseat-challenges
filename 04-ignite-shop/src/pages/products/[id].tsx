import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { stripe } from "@/lib/stripe";
import { formatCurrency } from "@/helpers/formatCurrency";

import type { GetStaticPaths, GetStaticProps } from "next";
import type Stripe from "stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/products";

type ProductProps = {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    defaultPriceId: string;
  };
};

export default function Products({ product }: ProductProps) {
  const [isCreatingCheckout, setIsCreatingCheckout] = useState(false);

  async function handleCheckoutProduct() {
    try {
      setIsCreatingCheckout(true);

      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckout(false);
      alert("Falha ao redirecionar ao checkout: " + error);
    }
  }

  return (
    <>
      <Head>
        <title>{product?.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image
            src={product?.imageUrl}
            width={520}
            height={480}
            alt={product?.name}
          />
        </ImageContainer>

        <ProductDetails>
          <h1>{product?.name}</h1>

          <span> {product?.price} </span>

          <p>{product?.description}</p>

          <button onClick={handleCheckoutProduct} disabled={isCreatingCheckout}>
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = String(params?.id);

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: formatCurrency((price.unit_amount as number) / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
