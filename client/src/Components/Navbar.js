import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { getProducts, setSelectedCategory } from "../Redux/Actions/Actions";
import { RiHome2Line } from "react-icons/ri";
import { Menu, Layout } from "antd";
import Search from "antd/lib/input/Search";
import { TextFormater } from "../Functions/TextFormater";
import { MdOutlineClear } from "react-icons/md";

const { Header } = Layout;

const Navbar = ({ categories, selectedCategory, setSelectedCategory, getProducts }) => {
  const onSearch = value => {
    getProducts("product", { name: value, category: selectedCategory ? selectedCategory : "" });
    <Navigate to="/category" replace />;
  };

  const getCategoryProducts = category => {
    getProducts("product", { category });
    setSelectedCategory(category);
  };

  return (
    <Header className="flex items-center">
      <Menu mode="horizontal" theme="dark" className="w-2/3">
        <Menu.Item>
          <Link
            to="/"
            onClick={() => {
              getProducts("product");
              setSelectedCategory("");
            }}>
            <span className="text-2xl">
              <RiHome2Line className="my-4" />
            </span>
          </Link>
        </Menu.Item>
        {categories?.map((item, index) => (
          <Menu.Item key={item}>
            <Link key={index} to={`/category/${item}`} onClick={() => getCategoryProducts(item)}>
              {TextFormater(item)}
            </Link>
          </Menu.Item>
        ))}
      </Menu>

      <Search
        placeholder="Search product ..."
        onSearch={onSearch}
        className="w-1/3"
        allowClear={{ clearIcon: <MdOutlineClear /> }}
      />
    </Header>
  );
};

export default connect(({ app }) => ({ categories: app.categories, selectedCategory: app.selectedCategory }), {
  setSelectedCategory,
  getProducts,
})(Navbar);
