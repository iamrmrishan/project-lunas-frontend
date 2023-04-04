import React from "react";
import SearchBar from "components/search";

export const Main: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingTop: 32,
        paddingBottom: 32,
      }}
    >
      <div>
        <h1 className="text-6xl mb-2 font-extrabold dark:text-white">
        <span className="block">Get to Know About</span>
        <span className="block">Products in Next Level</span>
        </h1>
        <div className="container mx-auto p-10">
        <SearchBar />
        </div>
      </div>
    </div>
  );
};
