/* eslint-disable react/prop-types */
import { useState } from "react";
import Image from "../assets/paytm.png";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Appbar = ({ user }) => {
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="shadow h-16 flex justify-between">
      <div
        className="flex flex-row items-center justify-center h-full ml-8 cursor-pointer"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        <img className="w-[40px]" src={Image} alt="icon" />
        <span className="text-2xl">
          <b>Mini PayTM</b>
        </span>
      </div>
      <div
        className="flex items-center pr-4 cursor-pointer"
        onClick={() => setDropDown((p) => !p)}
      >
        <div className="flex flex-col justify-center h-full mr-4">
          👋 {user}
        </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl font-bold">
            {user[0]}
          </div>
        </div>
        {dropDown && (
          <div className="w-[200px] absolute top-16 right-5 bg-[#bfbfbf] p-2 rounded">
            <Button
              label={"Profile"}
              onClick={() => {
                navigate("/user-profile");
              }}
            />
            <Button
              label={"Log Out"}
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
                navigate("/signin");
                toast.info("You're successufully Logged out!", {
                  position: "top-center",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
