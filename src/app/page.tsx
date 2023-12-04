"use client"
import { Navbar } from "flowbite-react";
import Navegacao from "../../components/Navegacao";
import Secao from "../../components/Secao";
import Footerbtm from "../../components/Footerbtm";
import Head from "next/head";
import Ajudas from "../../components/Ajudas";
import Divisor from "../../components/Divisor";
import Skeleton from "../../components/Skeleton";


export default function Home() {

  <Head>
  </Head>

  return (

    <>
      <Navegacao></Navegacao>
      <Secao></Secao>
      
      <Divisor></Divisor>
      
      <Ajudas></Ajudas>

      <Divisor></Divisor>

      <Skeleton></Skeleton>

      <Footerbtm></Footerbtm>

    </>
  )
}
