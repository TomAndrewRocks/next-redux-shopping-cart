/* eslint-disable react-hooks/exhaustive-deps */
import { Loader } from "@/components/Loader/index";
import { IProduct } from "@/interfaces/IProduct";
import { api } from "@/services/api";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useMemo, useState, Fragment, useEffect } from "react";
import formatMoney from "./../../services/formatMoney";
import {
  Product,
  ProductArea,
  Price,
  Title,
  Description,
  Buy,
  Info,
  ImgContainer,
  FinalStep,
} from "./styles";
import bagIcon from "../../../public/bag.svg";
import { useDispatch } from "react-redux";
import { addToCart, cartItemsLength } from "@/contexts/counterReducer";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

export default function Products() {
  const { query } = useRouter();
  const cartItems: IProduct[] = useSelector(cartItemsLength);
  const [data, setData] = useState<IProduct[]>([]);
  const [pending, setPending] = useState(true);
  const [productId, setProductId] = useState<any>();
  const [product, setProduct] = useState<IProduct[]>([]);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await api.get(
      `/products?page=1&rows=8&sortBy=id&orderBy=ASC`
    );
    setPending(false);
    setData(response.data.products);
  };

  useMemo(() => {
    fetchData();
    setProductId(query.id);
  }, []);

  useEffect(() => {
    const result: any = data.filter(
      (item) => item.id === JSON.parse(productId)
    );
    setProduct(result);
  }, [data, query, productId]);

  const addingProduct = (prop: any) => {
    dispatch(addToCart(prop));
    const onCart = cartItems.find((item) => item.id === prop.id);
    if (onCart) {
      toast(`${prop.name} is already on your cart.`, {
        id: "already onCart!",
        icon: "🛒",
      });
    } else {
      toast.success(`${prop.name} was added to your cart!`, {
        id: "added!",
      });
    }
  };

  return (
    <Product>
      <div>
        {pending ? (
          <div style={{ paddingTop: 85 }}>
            <Loader />
          </div>
        ) : (
          <Fragment>
            {product.map((prod) => (
              <ProductArea key={prod.id}>
                <ImgContainer>
                  <Image
                    priority
                    width={300}
                    height={300}
                    src={`${prod.photo}`}
                    alt={`${prod.name}`}
                  />
                </ImgContainer>
                <Info>
                  <Title>{prod.name}</Title>
                  <Description>{prod.description}</Description>
                  <FinalStep>
                    <Price>
                      Valor: <strong>{formatMoney(prod.price)}</strong>
                    </Price>
                    <Buy onClick={() => addingProduct(prod)}>
                      <Image
                        priority
                        height={17}
                        width={22}
                        alt="cart"
                        src={bagIcon}
                      />
                      <span>Comprar</span>
                    </Buy>
                  </FinalStep>
                </Info>
              </ProductArea>
            ))}
          </Fragment>
        )}
      </div>
    </Product>
  );
}
