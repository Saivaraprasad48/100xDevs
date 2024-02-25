/* eslint-disable react/prop-types */
import Loader from "../components/Loader";
const { BalanceLoader } = Loader;
export const Balance = ({ value, isLoading }) => {
  return (
    <div className="flex">
      <div className="font-bold text-lg">Your balance</div>
      {isLoading ? (
        <BalanceLoader isLoading={isLoading} />
      ) : (
        <div className="font-semibold ml-4 text-lg">Rs {value}/-</div>
      )}
    </div>
  );
};
