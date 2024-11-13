import { Global } from "@/styles/global";
import type { AppProps } from "next/app";

import logo from "../../public/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import Image from "next/image";
import Link from "next/link";

Global();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header> 
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
