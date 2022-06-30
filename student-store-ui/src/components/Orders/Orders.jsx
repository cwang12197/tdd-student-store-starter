import * as React from "react";
import "./Orders.css";

export default function Orders({ purchases }) {
  return (
    <div className="purchase-order-container">
      <h1 className="purchase-title">Purchase History</h1>
      <div className="header-row">
        <div className="numbers">Name</div>
        <div className="numbers">Email</div>
        <div className="numbers">Total</div>
        <div className="numbers">Created At</div>
      </div>
      {purchases.map((item) => {
        return (
          <div className="purchaseId" key={item.id}>
            <div className="purchase-detail"> {item.name}</div>
            <div className="purchase-detail"> {item.email}</div>
            <div className="purchase-detail"> {item.total}</div>
            <div className="purchase-detail"> {item.createdAt}</div>
          </div>
        );
      })}
      ;
    </div>
  );
}
