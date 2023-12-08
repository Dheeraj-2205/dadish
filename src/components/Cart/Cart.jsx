import React, { useState, useEffect } from "react";
import style from "../Cart/cart.module.css";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [arr, setArr] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products`);
      const products = await res.json();
      setData(products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCart = (id) => {
    toast.success("Product Added Successfully...")
    setCount(count + 1);
    setArr((prevArr) => [...prevArr, id]);
    localStorage.setItem("arr", JSON.stringify(arr));
  };

  useEffect(() => {
    localStorage.setItem("arr", JSON.stringify(arr));
  }, [arr]);
  

  useEffect(() => {
    getData();
  }, []);

  return loading ? (
    <>
      <p style={{ color: "black" }}></p>
    </>
  ) : (
    <>
      <Navbar props={count} />
      <Toaster/>
      <div className={style.container}>
        {data.map((ele) => (
          <div key={ele.id}>
            <img src={ele.image} alt="image" />
            <h3>Title :- {ele.title}</h3>
            <p>Price :- &#8377;{ele.price * 83}</p>
            <p>Rate :- {ele.rating.rate}</p>
            <button onClick={() => handleCart(ele.id)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;

// category
// :
// "men's clothing"
// description
// :
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// :
// 1
// image
// :
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price
// :
// 109.95
// rating
// :
// {rate: 3.9, count: 120}
// title
// :
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
