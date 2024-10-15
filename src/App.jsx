import { useEffect } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-js-loader";
import { fetchData } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.dataSlice);
  // const tickets = "";
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(tickets);
  return (
    <>
      {tickets.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Loader
            type="bubble-spin"
            bgColor={"#25D366"}
            color={"#25D366"}
            size={100}
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <Dashboard />
        </div>
      )}
    </>
  );
}

export default App;
