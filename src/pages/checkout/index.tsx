/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from "react";
import {
  InitialState,
  PayPalButtons,
  PayPalButtonsComponentProps,
} from "@paypal/react-paypal-js";
import {
  Button,
  CartItem,
  Container,
  ImageContainer,
  Payment,
  Price,
  PriceContainer,
  Qty,
  SubTotal,
  Title,
} from "./styles";
import { useSelector } from "react-redux";
import { cartItemsLength, clearCart } from "@/contexts/counterReducer";
import { CheckoutInfo } from "./styles";
import { IProduct } from "@/interfaces/IProduct";
import Image from "next/image";
import formatMoney from "@/services/formatMoney";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems: IProduct[] = useSelector(cartItemsLength);

  const [getOver, setGetOver] = useState(false);
  const [totalValue, setTotalValue] = useState("");

  const handleQty = (prop: number) => {
    if (prop === 1) {
      return `${prop} unidade`;
    } else {
      return `${prop} unidades`;
    }
  };

  const handleGetOver = () => {
    setGetOver(true);
    setTimeout(() => {
      router.push("/success");
      dispatch(clearCart());
    }, 1500);
  };

  const getTotals = useMemo(() => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cartItems.forEach((item: any) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    const formattedPrice = formatMoney(totalPrice);
    const rawPrice = totalPrice / 100;
    return { formattedPrice, rawPrice, totalQuantity };
  }, []);

  return (
    <>
      <Container>
        <h2>Checkout</h2>
        <CheckoutInfo>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <ImageContainer>
                <Image
                  loading="lazy"
                  width={100}
                  height={100}
                  alt={`${item.name}`}
                  src={`${item.photo}`}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    marginLeft: 10,
                  }}
                >
                  <Title>{item.name}</Title>
                  <Qty>
                    Quantidade: <span>{handleQty(item.quantity)}</span>
                  </Qty>
                </div>
              </ImageContainer>
              <PriceContainer>
                Total:
                <Price>{formatMoney(item.price * item.quantity)}</Price>
              </PriceContainer>
            </CartItem>
          ))}
        </CheckoutInfo>

        <Payment>
          <SubTotal>
            Valor total da compra: <strong>{getTotals.formattedPrice}</strong>
          </SubTotal>
          <Button onClick={handleGetOver}>
            {getOver ? "Finalizando..." : "Finalizar!"}
          </Button>
          <PayPalButtons
            forceReRender={[totalValue]}
            onClick={() => setTotalValue(getTotals.rawPrice.toString())}
            fundingSource="paypal"
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: totalValue,
                    },
                  },
                ],
              });
            }}
          />
          <PayPalButtons
            disabled
            fundingSource="card"
            style={{ layout: "vertical" }}
          />
        </Payment>
      </Container>
    </>
  );
};

export default Checkout;
