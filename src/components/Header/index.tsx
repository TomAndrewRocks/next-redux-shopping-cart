import React, { useMemo } from "react";
import Cart from "../Cart";
import { CartContainer, HeaderItems, HeaderStyles, MKSSystems } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import {
  showCart,
  cartVisible,
  cartItemsLength,
} from "@/contexts/counterReducer";
import Image from "next/image";
import cartIcon from "../../../public/cart.svg";
import { IProduct } from "@/interfaces/IProduct";
import Link from "next/link";

export const Header = () => {
  const cartShown = useSelector(cartVisible);
  const cartItems: IProduct[] = useSelector(cartItemsLength);
  const dispatch = useDispatch();

  const filteredArr = useMemo(() => {
    return cartItems.filter(
      (item, element, arr) =>
        arr.findIndex((object) => object.id === item.id) === element
    ); //remove duplicates from []
  }, [cartItems]);

  return (
    <HeaderStyles>
      <Link href={"/"}>
        <MKSSystems>
          <strong>MKS</strong>
          <span>Sistemas</span>
        </MKSSystems>
      </Link>
      <HeaderItems onClick={() => dispatch(showCart())} style={{ top: 1.2 }}>
        <CartContainer>
          <Image priority height={22} width={22} alt="cart" src={cartIcon} />
          <span>{filteredArr.length}</span>
        </CartContainer>
      </HeaderItems>
      {cartShown && <Cart />}
    </HeaderStyles>
  );
};
