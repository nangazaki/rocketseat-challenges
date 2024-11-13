import { Product } from "@/styles/pages/home";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";

import "keen-slider/keen-slider.min.css";
import { ProductSkeleton } from "../ProductSkeleton";

type ProductProps = {
  products?: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
};

export function Slider({ products }: ProductProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.1,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 1.6,
          spacing: 32,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 2.7,
          spacing: 48,
        },
      },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {products?.length &&
        products.map((product) => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Link href={`/products/${product.id}`} prefetch={false}>
                <Image src={product.imageUrl} width={520} height={480} alt="" />
              </Link>

              <footer>
                <Link href={`/products/${product.id}`} prefetch={false}>
                  {product.name}
                </Link>

                <span> {product.price} </span>
              </footer>
            </Product>
          );
        })}

      {!products?.length && (
        <>
          <ProductSkeleton className="keen-slider__slide" />
          <ProductSkeleton className="keen-slider__slide" />
          <ProductSkeleton className="keen-slider__slide" />
          <ProductSkeleton className="keen-slider__slide" />
          <ProductSkeleton className="keen-slider__slide" />
        </>
      )}
    </div>
  );
}
