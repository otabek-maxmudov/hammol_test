import { Card, Pagination } from "antd";
import Meta from "antd/lib/card/Meta";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getProducts, setProduct } from "../Redux/Actions/Actions";

const ProductList = ({ getProducts, productsList, setProduct }) => {
  const pageSize = 5;

  const [state, setState] = useState({
    data: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: pageSize,
  });

  const { data, totalPage, current, minIndex, maxIndex } = state;

  const location = useLocation();

  useEffect(() => {
    location.pathname === "/"
      ? getProducts("product")
      : getProducts("product", { category: location.pathname.split("/")[2] });
  }, []);

  useEffect(() => {
    productsList.products &&
      setState({
        ...state,
        data: productsList?.products,
        totalPage: productsList?.count / pageSize,
      });
  }, [productsList]);

  const pageChange = page =>
    setState({ ...state, current: page, minIndex: (page - 1) * pageSize, maxIndex: page * pageSize });

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-4">
        {data?.map(
          (item, index) =>
            index >= minIndex &&
            index < maxIndex && (
              <Link to={`/item/${item.id}`} key={index} className="w-56 h-96">
                <Card
                  onClick={() => setProduct(item)}
                  hoverable
                  key={item.id}
                  cover={<img alt="example" src={item.thumbnail} className="w-full h-52 object-cover" />}
                  className="w-full h-full rounded-md overflow-hidden">
                  <Meta title={item.title} description={item.description} className={"text-sm"} />
                </Card>
              </Link>
            )
        )}
      </div>
      <Pagination
        className="row-span-2"
        defaultCurrent={current}
        current={current}
        total={totalPage}
        defaultPageSize={pageSize}
        onChange={pageChange}
      />
    </div>
  );
};

export default connect(({ app }) => ({ productsList: app.productsList }), {
  getProducts,
  setProduct,
})(ProductList);
