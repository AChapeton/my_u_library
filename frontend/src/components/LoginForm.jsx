import React from "react";
import { useForm } from "react-hook-form";
import useLogin from "../api/useLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const {fetchLogin} = useLogin()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = handleSubmit(async (data, errors) => {
    try{
      console.log("data: ", data);
      const response = await fetchLogin(data)
    }catch(error){
      toast.error("Invalid credentials. Please try again.", {
        position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
    }
    reset()
  });

  return (
    <div className="card">
      <ToastContainer/>
      <div className="card-body">
        <h3 className="card-title">Login</h3>
        <form onSubmit={onSubmit}>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
