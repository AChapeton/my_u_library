import React from "react";
import { useForm } from "react-hook-form";
import useLogin from "../api/useLogin";

const LoginForm = () => {
  const {fetchLogin} = useLogin()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data, errors) => {
    console.log("data: ", data);
    fetchLogin(data)
    
  });

  return (
    <div className="card">
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
