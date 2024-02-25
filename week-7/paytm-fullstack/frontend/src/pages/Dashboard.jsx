/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
import { endpoints } from "../configs/urls";

export const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const user = localStorage.getItem("user");
  const fetchBalance = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(endpoints.currentuserbalance, config);
      setBalance(response.data.balance);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching account balance:", error);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <div>
      <Appbar user={user} />
      <div className="m-8">
        <Balance isLoading={isLoading} value={balance.toFixed(2)} />
        <Users />
      </div>
    </div>
  );
};
