import React from 'react'
import { useForm } from "react-hook-form";
import useAddBook from '../api/useAddBook';

const AddBookForm = ({currentYear}) => {
  const {fetchAddBook} = useAddBook()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data, errors) => {
    console.log("data: ", data);
    fetchAddBook(data)
    reset();
  });

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">Create a new Book</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <div>
              <label htmlFor="exampleInputEmail1">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter title"
                {...register("title", {
                  required: "Title is required",
                })}
              />
            </div>
            {errors.title ? (
              <>
                {errors.title.type === "required" && (
                  <span>{errors.title.message}</span>
                )}
              </>
            ) : null}
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="exampleInputEmail1">Author</label>
              <input
                type="text"
                className="form-control"
                name="author"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter author"
                {...register("author", {
                  required: "Author is required",
                })}
              />
            </div>
            {errors.author ? (
              <>
                {errors.author.type === "required" && (
                  <span>{errors.author.message}</span>
                )}
              </>
            ) : null}
          </div>
          
          <div className="form-group">
            <div>
              <label htmlFor="exampleInputEmail1">Published Year</label>
              <input
                type="number"
                className="form-control"
                name="publishedYear"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter published year"
                {...register("publishedYear", {
                  required: "Published Year is required",
                  min: {
                    value: 1000,
                    message: 'Year value cannot be smaller than 1000'
                  },
                  max: {
                    value: currentYear,
                    message: 'Year value cannot be bigger than current year'
                  }
                })}
              />
            </div>
            {errors.publishedYear ? (
              <>
                {errors.publishedYear.type === "required" && (
                  <span>{errors.publishedYear.message}</span>
                )}
                {errors.publishedYear.type === "min" && (
                  <span>{errors.publishedYear.message}</span>
                )}
                {errors.publishedYear.type === "max" && (
                  <span>{errors.publishedYear.message}</span>
                )}
              </>
            ) : null}
          </div>

          <div className="form-group">
            <div>
              <label htmlFor="exampleInputEmail1">Genre</label>
              <input
                type="text"
                className="form-control"
                name="genre"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter genre"
                {...register("genre", {
                  required: "Genre is required",
                })}
              />
            </div>
            {errors.genre ? (
              <>
                {errors.genre.type === "required" && (
                  <span>{errors.genre.message}</span>
                )}
              </>
            ) : null}
          </div>

          <div className="form-group">
            <div>
              <label htmlFor="exampleInputEmail1">Stock</label>
              <input
                type="stock"
                className="form-control"
                name="stock"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter stock"
                {...register("stock", {
                  required: "Stock is required",
                  min: {
                    value: 1,
                    message: 'Stock cannot be less than 1'
                  }
                })}
              />
            </div>
            {errors.stock ? (
              <>
                {errors.stock.type === "required" && (
                  <span>{errors.stock.message}</span>
                )}
                {errors.stock.type === "min" && (
                  <span>{errors.stock.message}</span>
                )}
              </>
            ) : null}
          </div>

          <button type="submit" className="btn btn-primary">
            Create book
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBookForm