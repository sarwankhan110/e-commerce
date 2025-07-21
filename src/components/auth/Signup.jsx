import LOGO from "./Logo.png";
import GoogleIcon from "@mui/icons-material/Google";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router";

const schema = yup.object({
  email: yup.string().required(),
  name: yup.string().required(),
  password: yup.string().required(),
});

const Signup = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", email: "", password: "" },
    resolver: yupResolver(schema),
  });

  const signup = (data) => {
    console.log(data);
    reset();
    alert("Signin Successfull");
    navigate("/");
  };
  return (
    <Box className="d-flex justify-content-center align-items-cente p-5">
      <Card
        variant="outlined"
        className="p-4 m-5 w-25 rounded-4"
        sx={{ boxShadow: 1 }}
      >
        <div className="text-center">
          <img src={LOGO} alt="" />
          <div className="d-flex gap-2 justify-content-center my-4">
            <p className="text-secondary">By signing up, you agree to our</p>
            <p className="fw-normal primary-green text-decoration-underline">
              terms
            </p>
            <p className="text-secondary">&</p>
            <p className="fw-normal primary-green text-decoration-underline">
              policy
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit((data) => signup(data))}>
          <Box className="my-3">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField label="Name" type="name" {...field} fullWidth />
              )}
            />
            {errors.email && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </Box>
          <Box className="my-3">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField label="Email" type="email" {...field} fullWidth />
              )}
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </Box>
          <Box className="my-3">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Password"
                  type="password"
                  {...field}
                  fullWidth
                />
              )}
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </Box>

          <Button
            className="primary-green-bg py-2"
            variant="contained"
            type="submit"
            sx={{ textTransform: "none" }}
            fullWidth
          >
            Login
          </Button>
          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <p className="m-2 ">or</p>
            <hr className="flex-grow-1" />
          </div>

          <div className="d-flex gap-2 justify-content-center align">
            <p className="text-secondary">Already have an account?</p>
            <Link to={`/login`}>
              <p className="fw-bolder primary-green text-decoration-underline">
                Login
              </p>
            </Link>
          </div>
        </form>
      </Card>
    </Box>
  );
};

export default Signup;
