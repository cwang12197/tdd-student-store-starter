import * as React from "react";
import "./Orders.css";

export default function Orders({ purchases }) {
  var filteredPurchases = [];

  for (let i = 0; i < purchases.length; i++) {
    filteredPurchases += {
      name: purchases[i][0].name,
      email: purchases[i][0].email,
      subtotal: purchase[i][0].subtotal,
      tax: purchases[i][0].tax,
      total: purchases[i][0].total,
      createdAt: purchases[i][0].createdAt,
    };
  }
  return (
    <div className="purchase-order-container">
      <h1>Purchase History</h1>
      <div className="header-row">
        <div className="numbers">Name</div>
        <div className="numbers">Email</div>
        <div className="numbers">Subtotal</div>
        <div className="numbers">Tax</div>
        <div className="numbers">Total</div>
        <div className="numbers">Created At</div>
      </div>

      {filteredPurchases.map((item) => {
        <div className="purchaseId" key={item.id}>
          <div className="purchase-detail"> {item.name}</div>
          <div className="purchase-detail"> {item.email}</div>
          <div className="purchase-detail"> {item.subtotal}</div>
          <div className="purchase-detail"> {item.tax}</div>
          <div className="purchase-detail"> {item.total}</div>
          <div className="purchase-detail"> {item.createdAt}</div>
        </div>;
      })}
    </div>
  );
}
