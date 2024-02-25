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

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-90 text-center p-2 h-max px-4">
          <div className="flex flex-row justify-center items-center">
            <img className="w-[80px]" src={Image} alt="logo" />
            <h1 className="text-4xl font-bold"> Mini PayTM </h1>
          </div>
          <Heading label={"Register here!"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="John"
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Doe"
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="sample@gmail.com"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="123456"
            label={"Password"}
          />
          <BufferLoader isLoading={isLoading} />
          <div className="pt-4">
            <Button
              onClick={async () => {
                setIsLoading(true);
                try {
                  const response = await axios.post(endpoints.signup, {
                    username,
                    firstName,
                    lastName,
                    password,
                  });
                  navigate("/signin");
                  toast.success("Registration Successful, Please Login!", {
                    position: "top-right",
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
                  console.error("Error signing up:", error);
                  toast.error(
                    `Failed to sign up. ${error.response.data.message} `,
                    {
                      position: "top-left",
                      autoClose: 5000,
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
              label={"Sign up"}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/"}
          />
        </div>
      </div>
    </div>
  );
};
