import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Edit from "../../assets/icons/edit-32.png";
import No from "../../assets/icons/no-32.png";
import Yes from "../../assets/icons/yes-32.png";
import api from "../../services/api";
import CurrencyFormatter from "../../utils/currencyFormatter";
import { Container, Image, Img, Button } from "./styles";

export function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get("products");
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <Container>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "var(--auxiliary-color)",
          maxHeight: "95vh",
          overflowX: "auto",
        }}
      >
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell align="center">In offer</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell>{CurrencyFormatter(product.price)}</TableCell>
                <TableCell align="center">
                  {product.offer ? (
                    <Img isYes src={Yes} alt="yes-icon" />
                  ) : (
                    <Img isYes={false} src={No} alt="no-icon" />
                  )}
                </TableCell>
                <TableCell align="center">
                  <Image src={product.url} alt="product-image" />
                </TableCell>
                <TableCell>
                  <Button>
                    <img
                      src={Edit}
                      alt="edit-icon"
                      onClick={() =>
                        navigate(`/edit-store-product/${product.id}`)
                      }
                    />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
