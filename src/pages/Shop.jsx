import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Data from "../products.json";
import ProductCards from "./UI/Shop UI/ProductCards";
import Pagination from "./UI/Shop UI/Pagination";
import Search from "./UI/Shop UI/Search";
import ShopCategory from "./UI/Shop UI/ShopCategory";
import PopularPost from "./UI/Shop UI/PopularPost";

const showRes = "Showing 01 - 12 of 139 Results";

const Shop = () => {
  const [gridList, setGridList] = useState();
  const [products, setProducts] = useState(Data);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPage = 12;

  const indexOfLastProduct = currentPage * productsPage;
  const firstProductPage = indexOfLastProduct - productsPage;
  const currentProducts = products.slice(firstProductPage, indexOfLastProduct);

  const paginate = (pgNum) => {
    setCurrentPage(pgNum);
  };

  const [selectCategory, setSelectCategory] = useState("All");
  const menuItems = [
    ...new Set(
      Data.map((val) => {
        val.category;
      })
    ),
  ];
  const filterItems = (curCate) => {
    const newItems = Data.filter((newVal) => {
      return newVal.category === curCate;
    });
    setSelectCategory(curCate);
    setProducts(newItems);
  };

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />

      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showRes}</p>
                  <div
                    className={`product-view-mode ${
                      gridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>

                <div>
                  <ProductCards
                    gridList={gridList}
                    products={currentProducts}
                  />
                </div>
                <Pagination
                  productsPage={productsPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>

            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} gridList={gridList} />
                {/* <ShopCategory
                  filterItems={filterItems}
                  setItem={setProducts}
                  menuItems={menuItems}
                  setProducts={setProducts}
                  selectCategory={selectCategory}
                /> */}
                <PopularPost />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
