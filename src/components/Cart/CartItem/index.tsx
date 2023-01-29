import { IProduct } from "@/interfaces/IProduct";
import Image from "next/image";
import { Container, Length, Qty, Row, Title, Total } from "./styles";
import formatMoney from "./../../../services/formatMoney";
import CloseIcon from "@/components/CloseIcon/index";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { closeCart, decrement, increment } from "@/contexts/counterReducer";

interface CartItemProps {
  props: IProduct;
  removeItem?: () => void;
};

export const CartItem = ({ props, removeItem }: CartItemProps) => {
  const dispatch = useDispatch();

  const handleQtyPrice = () => {
    return <Total>{formatMoney(props.price * props.quantity)}</Total>;
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Container>
        <Link
          href={{
            pathname: `/products/${props.name}`,
            query: { id: props.id, brand: props.brand },
          }}
          onClick={() => dispatch(closeCart())}
        >
          <Image
            loading="lazy"
            width={70}
            height={70}
            alt={`${props.name}`}
            src={`${props.photo}`}
          />
        </Link>
        <Title>{props.name}</Title>
        <Qty>
          <h5>Qtd: </h5>
          <Row>
            <span onClick={() => dispatch(decrement(props.id))}>-</span>
            <small>|</small>
            <Length>{props.quantity}</Length>
            <small>|</small>
            <span onClick={() => dispatch(increment(props.id))}>+</span>
          </Row>
        </Qty>
        {handleQtyPrice()}
      </Container>
      <CloseIcon className="cart-close" onClick={removeItem} />
    </div>
  );
};
