/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from "react";
import CloseIcon from "../CloseIcon";
import {
  CartItems,
  CartStyled,
  Checkout,
  CartMain,
  Submit,
  Total,
  Wrapper,
  HeaderCart,
  EmptyStyled,
} from "./styles";
import { useSelector, useDispatch } from "react-redux";
import {
  closeCart,
  cartItemsLength,
  removeFromCart,
} from "@/contexts/counterReducer";
import { CartItem } from "./CartItem";
import { IProduct } from "@/interfaces/IProduct";
import cartIcon from "../../../public/shop-cart.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import formatMoney from "@/services/formatMoney";

const Cart = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems: IProduct[] = useSelector(cartItemsLength);
  const [checkingOut, setCheckout] = useState(false);

  const finalArray = useMemo(() => {
    return cartItems.filter(
      (item, element, arr) =>
        arr.findIndex((object) => object.id === item.id) === element
    ); //remove duplicates from []
  }, [cartItems]);

  const handleCheckout = async () => {
    setCheckout(true);
    setTimeout(() => {
      dispatch(closeCart());
      router.push("/checkout");
    }, 1500);
    return finalArray.reverse();
  };

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cartItems.forEach((item: any) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    const formattedPrice = formatMoney(totalPrice);
    return { formattedPrice, totalQuantity };
  };

  return (
    <Wrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      onClick={() => dispatch(closeCart())}
    >
      <CartStyled
        initial={{ x: "5%" }}
        animate={{ x: "0%" }}
        onClick={(e: Event) => e.stopPropagation()}
      >
        {cartItems.length === 0 ? (
          <EmptyStyled
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1>Go shopping!</h1>
            <Image height={100} width={100} alt="cart" src={cartIcon} />
            <span onClick={() => dispatch(closeCart())}>Fechar Carrinho</span>
          </EmptyStyled>
        ) : (
          <>
            <CartMain id="cart">
              <HeaderCart>
                <span>
                  Carrinho <br /> de Compras
                </span>
                <CloseIcon onClick={() => dispatch(closeCart())} />
              </HeaderCart>
              <CartItems>
                {finalArray.reverse().map((item, index) => (
                  <div style={{ overflowY: "visible" }} key={index}>
                    <CartItem
                      props={item}
                      removeItem={() => dispatch(removeFromCart(item.id))}
                    />
                  </div>
                ))}
              </CartItems>
            </CartMain>
            <Submit>
              <Total>
                <span>Total: </span>
                <span>{getTotal().formattedPrice}</span>
              </Total>
              <Checkout onClick={handleCheckout}>
                {checkingOut ? "Carregando..." : "Finalizar Compra"}
              </Checkout>
            </Submit>
          </>
        )}
      </CartStyled>
    </Wrapper>
  );
};

export default Cart;
