/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../configs/urls";
import Loader from "../components/Loader";
const { MoneyLoader } = Loader;

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bulkApi = endpoints.getsearchusers;
  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      setIsLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "X-UserId": localStorage.getItem("userId"),
        },
      };
      try {
        const usersAPI = `${bulkApi}?filter=${filter}`;
        const response = await axios.get(usersAPI, config);
        setUsers(response.data.users);
        setIsLoading(false);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching users:", error);
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [filter]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">All Available Users</div>
      <div className="my-2">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        ></input>
      </div>
      <div>
        {isLoading ? (
          <div className="flex flex-row justify-center items-center h-[200px]">
            <MoneyLoader isLoading={isLoading} />
          </div>
        ) : (
          users
            .filter((each) => localStorage.getItem("userId") !== each._id)
            .sort((a, b) => a.firstName.localeCompare(b.firstName))
            .map((user) => <User key={user._id} user={user} />)
        )}
      </div>
    </>
  );
};

function User({ user }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between mt-3">
      <div className="flex items-center">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user?.firstName[0]?.toUpperCase()}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <h1 className="font-bold">
            {user.firstName} {user.lastName}
          </h1>
          <p>
            Bal: <b>{user.balance.toFixed(2)}</b>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button
          onClick={(e) => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}
