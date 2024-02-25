/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { endpoints } from "../configs/urls";
import Loader from "../components/Loader";
const { MoneyLoader, BalanceLoader, TransferLoader } = Loader;

export const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();
  const [balance, setBalance] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [balanceLoading, setBalanceLoading] = useState(false);
  const user = localStorage.getItem("user");

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        setBalanceLoading(true);
        const response = await axios.get(
          `${endpoints.getbalance}?userId=${id}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setBalance(response.data.balance);
        setBalanceLoading(false);
      } catch (error) {
        setBalanceLoading(false);
        // Set error message if request fails
      }
    };

    if (id) {
      fetchBalance();
    }
  }, [id, balance]);

  const initiateTransfer = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        endpoints.transferbalance,
        {
          to: id,
          amount,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      setBalance(response.data.balance);
      setAmount("");
      toast.success("Money successfully sent!", {
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
    } catch (e) {
      toast.error(
        "There might be issue! Please go back & try again after while!",
        {
          position: "top-center",
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
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <Appbar user={user} />
      <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
          {isLoading ? (
            <TransferLoader isLoading={isLoading} />
          ) : (
            <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
              <div className="flex flex-col space-y-1.5 p-6">
                <h2 className="text-3xl font-bold text-center">Send Money</h2>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-2xl text-white">
                      {name[0]?.toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{name}</h3>
                    <span> Balance: </span>
                    <p className="inline">
                      {balanceLoading ? (
                        <BalanceLoader isLoading={balanceLoading} />
                      ) : (
                        balance?.toFixed(2)
                      )}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2 mt-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="amount"
                    >
                      Amount (in Rs)
                    </label>
                    <input
                      onChange={handleChange}
                      type="number"
                      value={amount}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      id="amount"
                      placeholder="Enter amount"
                    />
                  </div>
                  <button
                    onClick={initiateTransfer}
                    className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
                  >
                    Initiate Transfer
                  </button>
                  <button
                    onClick={() => navigate("/dashboard")}
                    className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-black text-white"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
