import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";
import { dateFormatter } from "../../utils/dateFormatter";
import {
  Container,
  ProductImg,
  ReactSelectStyled,
  Menu,
  LinkMenu,
} from "./styles";

const status = [
  { id: 0, label: "all", value: "all" },
  { id: 1, label: "order placed", value: "order placed" },
  { id: 2, label: "order under review", value: "order under review" },
  { id: 3, label: "order accepted", value: "order accepted" },
  { id: 4, label: "order in preparation", value: "order in preparation" },
  { id: 5, label: "order out for delivery", value: "order out for delivery" },
  {
    id: 6,
    label: "order delivered and finalized",
    value: "order delivered and finalized",
  },
];

function Row({ row, onStatusUpdate }) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function setNewStatus(id, statusValue) {
    setIsLoading(true);
    try {
      await api.put(`orders/${id}`, { status: statusValue });
      toast.success("Status updated successfully!");
      onStatusUpdate(id, statusValue);
    } catch (err) {
      console.log(err);
      toast.error("Error updating status.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>
          <ReactSelectStyled
            options={status}
            menuPortalTarget={document.body}
            placeholder="status"
            defaultValue={
              status.find((option) => option.value === row.status) || null
            }
            onChange={(newStatus) => setNewStatus(row.orderId, newStatus.value)}
            isLoading={isLoading}
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Order
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Category</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((productRow) => (
                    <TableRow key={productRow.id}>
                      <TableCell component="th" scope="row">
                        {productRow.quantity}
                      </TableCell>
                      <TableCell>{productRow.name}</TableCell>
                      <TableCell>{productRow.category}</TableCell>
                      <TableCell>
                        <ProductImg src={productRow.url} alt="product-image" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onStatusUpdate: PropTypes.func.isRequired,
};

export function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [rows, setRows] = useState([]);
  const [currentFilter, setCurrentFilter] = useState(status[0]);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("orders");
      setOrders(data);
      setFilteredOrders(data);
    }
    loadOrders();
  }, []);

  useEffect(() => {
    const newRows = filteredOrders.map((currentOrder) =>
      createData(currentOrder)
    );
    setRows(newRows);
  }, [filteredOrders]);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: dateFormatter(order.createdAt),
      status: order.status,
      products: order.products,
    };
  }

  function handleStatus(statusItem) {
    setCurrentFilter(statusItem);
    if (statusItem.id === 0) {
      setFilteredOrders(orders);
    } else {
      const newOrders = orders.filter(
        (order) => order.status === statusItem.value
      );
      setFilteredOrders(newOrders);
    }
  }

  function handleStatusUpdate(orderId, newStatus) {
    const updatedOrders = orders.map((order) =>
      order._id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    if (currentFilter.id === 0) {
      setFilteredOrders(updatedOrders);
    } else {
      setFilteredOrders(
        updatedOrders.filter((order) => order.status === currentFilter.value)
      );
    }
  }

  return (
    <Container>
      <Menu>
        {status.map((item) => (
          <LinkMenu
            key={item.id}
            onClick={() => handleStatus(item)}
            isActive={currentFilter.id === item.id}
          >
            {item.label}
          </LinkMenu>
        ))}
      </Menu>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Order</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                onStatusUpdate={handleStatusUpdate}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
