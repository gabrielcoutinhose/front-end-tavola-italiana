import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";
import { dateFormatter } from "../../utils/dateFormatter";
import { Container, Orders } from "./styles";

export function OrderCard() {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await api.get(`/orders/`);
        setOrder(response.data);
      } catch {
        toast.error("Failed to fetch orders.");
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  if (loading) {
    return <p>Loading order details...</p>;
  }

  if (!order || order.length === 0) {
    return <p>No orders found</p>;
  }

  return (
    <Container>
      <h2>Order Tracking</h2>
      <Orders>
        <h3 className="title">
          Hello, {order[0]?.user?.name || "Customer"}! Your orders:
        </h3>
        {order.map((orderItem, index) => (
          <div key={index}>
            <div>
              <h4 className="order-id-head">
                Order ID:{" "}
                <span className="order-id-body">{orderItem?._id}</span>
              </h4>
            </div>
            <div>
              {/* <p className="order-made-on">
                Order made on:{" "}
                <span className="made-on">
                  {orderItem?.createdAt
                    ? new Intl.DateTimeFormat("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        weekday: "long",
                        hour12: false,
                      }).format(new Date(orderItem.createdAt))
                    : "N/A"}
                </span>
              </p>
              <p className="order-update-on">
                Updated on:{" "}
                <span className="update-on">
                  {orderItem?.updatedAt
                    ? new Intl.DateTimeFormat("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        weekday: "long",
                        hour12: false,
                      }).format(new Date(orderItem.updatedAt))
                    : "N/A"}
                </span>
              </p> */}
              <p className="order-made-on">
                Order made on:{" "}
                <span className="made-on">
                  {dateFormatter(orderItem?.createdAt)}
                </span>
              </p>
              <p className="order-update-on">
                Updated on:{" "}
                <span className="update-on">
                  {dateFormatter(orderItem?.updatedAt)}
                </span>
              </p>
              <p className="order-status-head">
                Status:{" "}
                <span className="order-status-body">{orderItem?.status}</span>
              </p>
              <p className="items-head">Items:</p>
              <ul className="items-list">
                {orderItem?.products?.map((product, productIndex) => (
                  <li className="items-body" key={productIndex}>
                    {product.name} - {product.quantity}x
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Orders>
    </Container>
  );
}
