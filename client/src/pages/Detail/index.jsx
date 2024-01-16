import React, { useEffect } from "react";
import { useParams } from "react-router";
import { DeleteById, GetById } from "../../store/menu/api_actions";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import "./styles.scss";
import { addToWishlist } from "../../store/wishlist/wishlistSlice";
import { Helmet } from "react-helmet";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentMenuItem, loading, error } = useSelector(
    (state) => state.menu
  );
  const getItemById = async () => {
    dispatch(GetById(id));
  };
  useEffect(() => {
    getItemById();
  }, [id]);
  return (
    <div className="detail-section">
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <div className="container pt-5">
        {loading ? (
          <div class="spinner-border text-warning" role="status">
            <span class="sr-only">.</span>
          </div>
        ) : currentMenuItem ? (
          <div className="row">
            <div className="col-12 col-lg-6">
              <img
                class="card-img-top"
                src={currentMenuItem.image}
                alt="Card image cap"
              />
            </div>
            <div className="col-12 col-lg-6">
              <div class="card-body">
                <h3 class="card-title mb-3">{currentMenuItem.title}</h3>
                <p class="card-text">About: {currentMenuItem.desc}</p>
                <p class="card-text">Price: ${currentMenuItem.price}</p>
                <p class="card-text">Category: {currentMenuItem.category}</p>
                <div className="actions mt-2">
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => {
                      dispatch(DeleteById(currentMenuItem._id));
                      toast.success("Item deleted!");
                    }}
                  >
                    Delete
                  </button>{" "}
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      dispatch(addToWishlist(currentMenuItem));
                    }}
                  >
                    Add to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Not Found</p>
        )}
      </div>
    </div>
  );
};

export default Detail;
