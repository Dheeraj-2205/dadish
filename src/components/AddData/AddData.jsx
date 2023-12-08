import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import style from "./addData.module.css";

const AddData = () => {
  const [data, setData] = useState([]);
  const [arr, setArr] = useState([]);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(0);
  const [twentyPercentDiscount, setTwentyPercentDiscount] = useState(0);

  const fetchSingleProduct = async (productId) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const productData = await res.json();
      return productData;
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    const storedArr = JSON.parse(localStorage.getItem("arr")) || [];
    setArr(storedArr);

    const fetchDataForProducts = async () => {
      const productDataArray = await Promise.all(
        storedArr.map(async (productId) => fetchSingleProduct(productId))
      );
      setData(productDataArray);
    };

    fetchDataForProducts();
  }, []);

  useEffect(() => {
    const calculateTotal = () => {
      const newTotal = data.reduce((acc, product) => {
        const price = product.price * 83;
        const discount = price > 300 ? price * 0.8 : 0;
        const discountData = price - discount;
        return acc + price;
      }, 0);

      setTotal(newTotal);
    };

    calculateTotal();

  }, [data]);

  return (
    <>
      <Navbar />
      <div className={style.cartItem}>
        {data.map((ele, index) => (
          <div key={index}>
            <img src={ele.image} alt="" />
            <h3>{ele.title}</h3>
            <p>Price {ele.price * 83}</p>
          </div>
        ))}
        <div id="amountData">
          <h3>Total Price :- {(amount).toFixed(2)}</h3>
          <h3>DisCount Price :- {amount > 300 ?(amount * 0.2).toFixed(2) : 0}</h3>
          <h3 className={style.heading}>Total {(amount - amount * 0.2).toFixed(2)}</h3>
        </div>
      </div>

    </>
  );
};

export default AddData;
