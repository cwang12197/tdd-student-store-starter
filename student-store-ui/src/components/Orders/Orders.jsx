import * as React from "react";
import "./Orders.css";

export default function Orders({ purchases }) {
  let samplePurchase = [
    {
      id: 25,
      name: "aa",
      email: "d@gmail.com",
      subtotal: 12.25,
      tax: "1.07",
      total: "13.32",
      createdAt: "2022-06-30T08:32:32.256Z",
    },
    {
      id: 26,
      name: "d",
      email: "d@gmail.com",
      subtotal: 1.5,
      tax: "0.13",
      total: "1.63",
      createdAt: "2022-06-30T08:53:27.537Z",
    },
    {
      id: 27,
      name: "aa",
      email: "d@gmail.com",
      subtotal: 6.5,
      tax: "0.57",
      total: "7.07",
      createdAt: "2022-06-30T09:04:20.079Z",
    },
    {
      id: 28,
      name: "dd",
      email: "d@gmail.com",
      subtotal: 1.98,
      tax: "0.17",
      total: "2.15",
      createdAt: "2022-06-30T09:06:24.033Z",
    },
    {
      id: 29,
      name: "dd",
      email: "d@gmail.com",
      subtotal: 1.98,
      tax: "0.17",
      total: "2.15",
      createdAt: "2022-06-30T09:18:20.048Z",
    },
    {
      id: 30,
      name: "dd",
      email: "d@gmail.com",
      subtotal: 0.99,
      tax: "0.09",
      total: "1.08",
      createdAt: "2022-06-30T09:19:01.763Z",
    },
  ];
  return (
    <div className="purchase-order-container">
      <h1>Purchase History</h1>
      <div className="header-row">
        <div className="numbers">Name</div>
        <div className="numbers">Email</div>
        <div className="numbers">Total</div>
        <div className="numbers">Created At</div>
      </div>

      {samplePurchase.map((item) => {
        <div className="purchaseId" key={item.id}>
          <div className="purchase-detail"> {item.name}</div>
          <div className="purchase-detail"> {item.email}</div>
          <div className="purchase-detail"> {item.total}</div>
          <div className="purchase-detail"> {item.createdAt}</div>
        </div>;
      })}
    </div>
  );
}
