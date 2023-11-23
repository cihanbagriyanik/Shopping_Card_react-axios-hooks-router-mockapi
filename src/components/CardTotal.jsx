import React from "react";

const CardTotal = ({ products }) => {
  // console.log(products);

  const taxRate = 0.18;

  const subTotal = products
    .reduce((acc, i) => acc + i.price * i.dampingRate * i.amount, 0)
    .toFixed(2);

  const shipping = subTotal >= 200 ? 0 : 25;

  const tax = (subTotal * taxRate).toFixed(2);

  const total = (Number(subTotal) + Number(tax) + shipping).toFixed(2);

  return (
    <table className="table w-100">
      {+subTotal === 0 ? (
        <p className="text-center text-danger w-100">Cart is empty......</p>
      ) : (
        <tbody>
          <tr className="text-end">
            <th className="text-start">Subtotal</th>
            <td>
              $<span className="subtotal"> {subTotal} </span>
            </td>
          </tr>
          <tr className="text-end">
            <th className="text-start">Tax(18%)</th>
            <td>
              $<span className="tax"> {tax} </span>
            </td>
          </tr>
          <tr className="text-end">
            <th className="text-start">Shipping</th>
            <td>
              $<span className="shipping">{shipping} </span>
            </td>
          </tr>
          <tr className="text-end">
            <th className="text-start">Total</th>
            <td>
              $<span className="total"> {total} </span>
            </td>
          </tr>
        </tbody>
      )}
    </table>
  );
};

export default CardTotal;
