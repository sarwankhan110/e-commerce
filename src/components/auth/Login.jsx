import LOGO from "./Logo.png";
import GoogleIcon from "@mui/icons-material/Google";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Card, TextField } from "@mui/material";

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

const Login = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(schema),
  });

  const login = (data) => {
    console.log(data);
    reset();
    alert("Login Successfull");
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
          <p className="text-secondary my-4">
            Login with your email & password
          </p>
        </div>

        <form onSubmit={handleSubmit((data) => login(data))}>
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
          <p className="primary-green text-end ">Forgot password?</p>
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

          <Button
            className="py-2 my-3"
            variant="contained"
            type="submit"
            sx={{ textTransform: "none" }}
            fullWidth
            startIcon={<GoogleIcon />}
          >
            Login with Google
          </Button>

          <Button
            className="py-2"
            variant="contained"
            type="submit"
            sx={{ textTransform: "none", backgroundColor: "#6B7280" }}
            fullWidth
            startIcon={<PhoneAndroidIcon />}
          >
            Login with Mobile number
          </Button>
          <hr className="my-3" />
          <div className="d-flex gap-2 justify-content-center align">
            <p className="text-secondary">Don't have an acccount?</p>
            <p className="fw-bolder primary-green text-decoration-underline">
              Register
            </p>
          </div>
        </form>
      </Card>
    </Box>
  );
};

export default Login;
