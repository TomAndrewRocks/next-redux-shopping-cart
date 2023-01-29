import { IProduct } from "@/interfaces/IProduct";
import Image from "next/image";
import React from "react";
import {
  Buy,
  Description,
  ImageContainer,
  Info,
  Price,
  Prod,
  Title,
} from "./styles";
import bagIcon from "../../../public/bag.svg";
import { addToCart, cartItemsLength } from "@/contexts/counterReducer";
import { useDispatch } from "react-redux";
import formatMoney from "./../../services/formatMoney";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import Link from "next/link";

interface ProductProps {
  props: IProduct;
}

export default function Product({ props }: ProductProps) {
  const dispatch = useDispatch();
  const cartItems: IProduct[] = useSelector(cartItemsLength);

  const addingProduct = () => {
    dispatch(addToCart(props));
    const onCart = cartItems.find((item) => item.id === props.id);
    if (onCart) {
      toast(`${props.name} is already on your cart.`, {
        id: "already onCart!",
        icon: "🛒",
      });
    } else {
      toast.success(`${props.name} was added to your cart!`, {
        id: "added!",
      });
    }
  };

  return (
    <Prod>
      <ImageContainer>
        <Link
          href={{
            pathname: `/products/${props.name}`,
            query: { id: props.id, brand: props.brand },
          }}
        >
          <Image
            width={130}
            height={130}
            priority
            alt={`${props.name}`}
            src={`${props.photo}`}
          />
        </Link>
      </ImageContainer>
      <Info>
        <Title>{props.name}</Title>
        <Price>{formatMoney(props.price)}</Price>
      </Info>
      <Description>{props.description}</Description>
      <Buy onClick={addingProduct}>
        <Image priority height={17} width={22} alt="cart" src={bagIcon} />
        <span>Comprar</span>
      </Buy>
    </Prod>
  );
}
