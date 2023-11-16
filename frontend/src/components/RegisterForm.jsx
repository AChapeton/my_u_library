import React from "react";
import { useForm } from "react-hook-form";
import useRegister from "../api/useRegister";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { fetchRegister } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (data, errors) => {
    try{
      delete data.confirm_password
      await fetchRegister(data);
      reset();
      navigate("/?new_user=true");
    }catch(error){
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  });

  return (
    <div className="card">
      <ToastContainer />
      <div className="card-body">
        <h3 className="card-title">Register a new Student</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <div>
              <label htmlFor="exampleInputEmail1">Role:</label>
              <select
                className="form-control"
                name="role"
                {...register("role", {
                  required: "Role is required",
                })}
              >
                <option value="" hidden>
                  Choose a role
                </option>
                <option value="student">Student</option>
                <option value="librarian">Librarian</option>
              </select>
            </div>
            {errors.role ? (
              <>
                {errors.role.type === "required" && (
                  <span>{errors.role.message}</span>
                )}
              </>
            ) : null}
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="exampleInputEmail1">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter username"
                {...register("username", {
                  required: "Username is required",
                })}
              />
            </div>
            {errors.username ? (
              <>
                {errors.username.type === "required" && (
                  <span>{errors.username.message}</span>
                )}
              </>
            ) : null}
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                {...register("email", {
                  required: "Email Address is required",
                })}
              />
            </div>
            {errors.email ? (
              <>
                {errors.email.type === "required" && (
                  <span>{errors.email.message}</span>
                )}
              </>
            ) : null}
          </div>

          <div className="form-group">
            <div>
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
            </div>
            {errors.password ? (
              <>
                {errors.password.type === "required" && (
                  <span>{errors.password.message}</span>
                )}
              </>
            ) : null}
          </div>

          <div className="form-group">
            <div>
              <label htmlFor="exampleInputPassword1">Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Confirm Password"
                {...register("confirm_password", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value !== getValues("password")
                      ? "Passwords must match"
                      : null,
                })}
              />
            </div>
            {errors.confirm_password ? (
              <>
                {errors.confirm_password.type === "required" && (
                  <span>{errors.confirm_password.message}</span>
                )}
                {errors.confirm_password.type === "validate" && (
                  <span>{errors.confirm_password.message}</span>
                )}
              </>
            ) : null}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
