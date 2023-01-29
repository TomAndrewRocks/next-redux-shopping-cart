import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Icon, Text } from "../../styles/Success";
import check from "../../../public/success.png";
import { Footer } from "@/components/Footer/index";

const Success = () => {
  return (
    <>
      <Container>
        <Icon>
          <Image
            width={80}
            height={80}
            loading={"lazy"}
            alt={"success"}
            src={check}
          />
        </Icon>
        <Text>Obrigado por escolher a MKS Sistemas</Text>
        <span>Até a próxima!</span>
        <Link href={"/"}>
          <span>Voltar para o início</span>
        </Link>
      </Container>
      <Footer />
    </>
  );
};

export default Success;
