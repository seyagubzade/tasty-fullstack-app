import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss"
const Header = () => {
  return (
    <div className="header ">
      <div className="container">
        <header class="d-flex flex-wrap  py-3 ">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span class="fs-4 border p-2">Tasty</span>
          </a>

          <ul class="nav nav-pills">
            <li class="nav-item">
              <Link to={"/"} class="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/add"} class="nav-link">
                Add New
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/wishlist"} class="nav-link">
                Wishlist
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Header;
