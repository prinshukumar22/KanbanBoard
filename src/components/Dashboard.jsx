// import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";
import { ElementIcon } from "./ElementIcon";
import dots from "../assets/3_dot_menu.svg";
import add from "../assets/add.svg";

const Dashboard = () => {
  // Select data from the Redux store
  const { dataSelected, user, users, tickets } = useSelector(
    (state) => state.dataSlice
  );

  if (tickets.length === 0) {
    return (
      <div
        className="container"
        style={{
          paddingTop: "10px",
          justifyContent: "space-around",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Yay!! No tasks Right now</h1>
      </div>
    );
  }

  return (
    <>
      {/* Dashboard component */}
      <div
        className="container"
        style={{
          paddingTop: "10px",
          justifyContent: "flex-start",
        }}
      >
        {/* Loop through the dataSelected array */}
        {dataSelected?.map((item, index) => {
          return (
            <>
              <div key={index} className="dashboardContainer">
                <div className="flex-sb">
                  <div>
                    {!user ? (
                      <ElementIcon element={item[index]?.title} />
                    ) : (
                      <>
                        <div
                          style={{
                            position: "relative",
                            width: "15px",
                            height: "15px",
                            display: "inline-block",
                            paddingRight: "5px",
                          }}
                        >
                          <img
                            style={{
                              borderRadius: "50%",
                            }}
                            src={`https://ui-avatars.com/api/?name=${item[
                              index
                            ]?.title
                              .split(" ")
                              .map((n) => n[0].toUpperCase())
                              .join(
                                ""
                              )}&size=10&background=random&color=fff&rounded=true&font-size=0.7`}
                            alt="User"
                          />
                        </div>
                      </>
                    )}
                    <span style={{ fontWeight: "600" }}>
                      {" "}
                      {item[index]?.title}{" "}
                      <span
                        style={{
                          color: "grey",
                          marginLeft: "5px",
                        }}
                      >
                        {item[index]?.value?.length}
                      </span>
                    </span>
                  </div>
                  <div>
                    <button
                      style={{
                        fontWeight: "bold",
                        paddingRight: "10px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <img src={add} alt="add"></img>
                    </button>
                    <button
                      style={{
                        letterSpacing: "2px",
                        fontWeight: "bold",
                        paddingRight: "10px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <img src={dots} alt="dots"></img>
                    </button>
                  </div>
                </div>
                {/* Render Card component */}
                <div className="flex-gap-10">
                  {item[index]?.value?.map((it, ind) => {
                    return (
                      <Card
                        id={it.id}
                        title={it.title}
                        tag={it.tag}
                        name={it.userId}
                        users={users}
                        key={ind}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
