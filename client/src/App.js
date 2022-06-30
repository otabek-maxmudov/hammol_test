import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { getCategories, getProducts } from "./Redux/Actions/Actions";
import Navbar from "./Components/Navbar";
import "./App.css";
import ProductList from "./Pages/ProductList";
import SelectedProduct from "./Pages/SelectedProduct";
import { Content } from "antd/lib/layout/layout";

const App = ({ categories, getCategories, selectedCategory, getProducts, product }) => {
  useEffect(() => {
    getCategories("category");
    getProducts("product", { category: selectedCategory });
  }, []);

  return (
    <>
      <Navbar />
      <Content className="px-10 py-5">
        <Routes>
          <Route path={"/"} element={<ProductList />} />
          <Route path={`/category/${selectedCategory}`} element={<ProductList />} />
          <Route path={`/item/${product.id}`} element={<SelectedProduct />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Content>
    </>
  );
};

export default connect(
  ({ app }) => ({
    categories: app.categories,
    selectedCategory: app.selectedCategory,
    product: app.selectedProduct,
  }),
  {
    getCategories,
    getProducts,
  }
)(App);
