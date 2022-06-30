import { Button, InputNumber, Rate, Typography } from "antd";
import { useState } from "react";
import { connect } from "react-redux";
import ThumbSlider from "../Components/ThumbSlider";
import { TextFormater } from "../Functions/TextFormater";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import { getProducts } from "../Redux/Actions/Actions";

const { Title, Paragraph } = Typography;

const SelectedProduct = ({ selectedProduct, selectedCategory, getProducts }) => {
  const [amountOfProduct, setAmountOfProduct] = useState(1);
  const { title, description, price, discountPercentage, rating, stock, brand, category } = selectedProduct;

  const discount = price * (discountPercentage / 100);

  return (
    <div className="flex py-10 font-medium relative">
      <Link
        to={`/category/${selectedCategory}`}
        onClick={() => getProducts("category", { category: selectedCategory })}>
        <Button type="text" size="large" icon={<MdOutlineArrowBack />} className={"absolute top-8 left-12"} />
      </Link>

      <div className="w-1/2">
        <ThumbSlider product={selectedProduct} />
      </div>
      <div className="w-1/2">
        <Title>{title}</Title>
        <div className="grid grid-cols-2 gap-y-4 mb-10">
          <h1 className={"text-lg text-gray-400"}>
            Brand: <span className="text-gray-800">{brand}</span>
          </h1>
          <h1 className={"text-lg text-gray-400"}>
            Category: <span className="text-gray-800">{TextFormater(category)}</span>
          </h1>
          <h1 className={"text-lg text-gray-400"}>
            Stock: <span className="text-gray-800">{stock}</span>
          </h1>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <Title>$ {(price - discount).toFixed()} </Title>
            <Title level={4} type="secondary" className="flex justify-between w-56">
              <del>{price} USD</del> <span>&#183;</span> {discountPercentage}% OFF
            </Title>
          </div>
          <div className="h-full flex items-center">
            <InputNumber min={1} max={stock} value={amountOfProduct} onChange={e => setAmountOfProduct(e)} />
            <Button type="primary" shape="round" size="large" className="text-blue-500 ml-4">
              + Add to cart
            </Button>
          </div>
        </div>
        <Rate disabled defaultValue={rating} allowHalf className="my-7" />
        <div>
          <Title level={4}>Description</Title>
          <Paragraph type="secondary">{description}</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default connect(
  ({ app }) => ({ selectedProduct: app.selectedProduct, selectedCategory: app.selectedCategory }),
  { getProducts }
)(SelectedProduct);
