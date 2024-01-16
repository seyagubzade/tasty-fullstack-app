import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../store/wishlist/wishlistSlice";
import { Helmet } from "react-helmet";

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  return (
    <div className="wishlist pt-5">
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <div className="container">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Desc</th>
              <th scope="col">Price</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlist?.map((item, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  <img
                    src={item.image}
                    alt=""
                    style={{
                      height: "60px",
                      width: "60px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.desc}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    className="btn btn-light"
                    onClick={() => dispatch(removeFromWishlist(item._id))}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
