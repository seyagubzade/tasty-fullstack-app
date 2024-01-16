import React from "react";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { AddNew } from "../../store/menu/api_actions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";


const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="add-form pt-5">
      <Helmet>
        <title>Add New Product</title>
      </Helmet>
      <div className="container bg-light p-4">
        <h3>Add new product</h3>
        <Formik
          initialValues={{
            title: "",
            desc: "",
            image: "",
            price: 0,
            category: "Main",
          }}
          onSubmit={async (values) => {
            dispatch(AddNew(values));
            navigate("/");
          }}
        >
          <Form>
            <div class="form-group mb-2">
              <label htmlFor="title">Title</label>
              <Field
                id="title"
                name="title"
                placeholder="Title"
                className="form-control"
              />
              {/* <small id="title" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small> */}
            </div>

            <div class="form-group mb-2">
              <label htmlFor="desc">Description</label>
              <Field
                id="desc"
                name="desc"
                placeholder="Description"
                className="form-control"
              />
              <small id="title" class="form-text text-muted">
                Specify ingredients here.
              </small>
            </div>
            <div class="form-group mb-2">
              <label htmlFor="image">Image URL</label>
              <Field
                id="image"
                name="image"
                placeholder="Image URL"
                className="form-control"
              />
              <small id="title" class="form-text text-muted">
                Paste Image URL here, only Link
              </small>
            </div>
            <div class="form-group mb-2">
              <label htmlFor="price">Price</label>
              <Field
                id="price"
                name="price"
                placeholder="Price"
                className="form-control"
                type="number"
                min="0"
              />
            </div>

            <button type="submit" class="btn btn-dark mt-3">
              Add new
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Add;
