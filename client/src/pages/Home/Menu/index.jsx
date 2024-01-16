import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { DeleteById, GetAll } from "../../../store/menu/api_actions";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { addToWishlist } from "../../../store/wishlist/wishlistSlice";

const Menu = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();
  const { menu, loading, error } = useSelector((state) => state.menu);
  const getData = async () => {
    dispatch(GetAll());
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    setFilteredData(() =>
      menu.filter((menuItem) =>
        menuItem.title.toLowerCase().includes(searchValue.trim().toLowerCase())
      )
    );
  }, [menu, searchValue]);
  return (
    <div className="menu-section">
      <div className="container">
        <div className="section-header">
          <span>OUR MENU</span>
          <h3>Discover Our Exclusive Menu</h3>
        </div>
        <div className="filter-content">
          <div className="search-filter">
            <input
              type="text"
              placeholder="Search"
              className="form-control"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value.trim())}
            />
          </div>
        </div>
        <div className="menu-list ">
          <div className="row">
            {loading ? (
              <div class="spinner-border text-warning" role="status">
                <span class="sr-only">.</span>
              </div>
            ) : menu ? (
              filteredData.map((item) => (
                <div className="col-12 col-lg-6">
                  <div className="menu-card">
                    <div className="menu-item d-flex">
                      <div className="img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="menu-body">
                        <Link to={`/detail/${item._id}`}><p>{item.title}</p></Link>
                        <p>{item.desc}</p>
                      </div>
                      <div className="price">$ {item.price}</div>
                    </div>
                    <div className="actions mt-2">
                        <button className="btn btn-outline-dark" onClick={()=>{
                            dispatch(DeleteById(item._id))
                            toast.success("Item deleted!")
                        }}>Delete</button> {" "}
                        <button className="btn btn-dark" onClick={()=>{
                            dispatch(addToWishlist(item))
                        }}>Add to wishlist</button>
                    </div>
                  </div>
                </div>
              ))
            ) : error ? (
              <div class="alert alert-danger" role="alert">
                Error occured
              </div>
            ) : (
              <div class="alert alert-light" role="alert">
                Not found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
