/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Image from "../assets/paytm.png";
import { toast } from "react-toastify";
import { endpoints } from "../configs/urls";
import Loader from "../components/Loader";
const { BufferLoader } = Loader;

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  console.log(endpoints);
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-90 text-center p-3 h-max px-4">
          <div className="flex flex-row justify-center items-center">
            <img className="w-[80px]" src={Image} alt="logo" />
            <h1 className="text-4xl font-bold"> Mini PayTM </h1>
          </div>
          <Heading label={"Login here! "} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            placeholder="sample@gmail.com"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            placeholder="123456"
            label={"Password"}
          />
          <BufferLoader isLoading={isLoading} />
          <div className="pt-4">
            <Button
              onClick={async () => {
                try {
                  setIsLoading(true);
                  const response = await axios.post(endpoints.login, {
                    username,
                    password,
                  });
                  localStorage.setItem("token", response.data.token);
                  localStorage.setItem("userId", response.data.user._id);
                  localStorage.setItem("user", response.data.user.firstName);
                  navigate("/dashboard");
                  toast.success("Login Successful", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                  setIsLoading(false);
                } catch (error) {
                  console.error("Error signing in:", error);
                  toast.error(
                    `Failed to sign in. ${error.response.data.message}`,
                    {
                      position: "top-left",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    }
                  );
                  setIsLoading(false);
                }
              }}
              label={"Sign in"}
            />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
