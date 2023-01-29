/* eslint-disable react-hooks/exhaustive-deps */
import { IProduct } from "@/interfaces/IProduct";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Loader } from "../Loader";
import Product from "../Product";
import { Gallery, Grid } from "./styles";

const GridProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [pending, setPending] = useState(true);

  const fetchData = async () => {
    const response = await api.get(
      `/products?page=1&rows=8&sortBy=id&orderBy=ASC`
    );
    setProducts(response.data.products);
    setPending(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Grid>
        {pending ? (
          <Loader />
        ) : (
          <>
            <Gallery>
              {products.map((prod, index) => (
                <Product props={prod} key={index} />
              ))}
            </Gallery>
          </>
        )}
      </Grid>
    </>
  );
};

export default GridProducts;
