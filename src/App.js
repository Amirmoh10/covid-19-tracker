import React from "react";
import "./App.css";
import TableInfos from "./TableInfos";

function App() {
  const [coronaStats, setCoronaStats] = React.useState([]);
  const [filteredStats, setFilteredStats] = React.useState([]);

  const inputHandler = (event) => {
    if (event.key === "Enter") {
      console.log(coronaStats[1].Country);
      setFilteredStats(
        coronaStats.filter(
          (stat) => stat.Country.toLowerCase() === event.target.value
        )
      );
    }
  };

  const fetchData = () => {
    fetch(`https://api.covid19api.com/summary`)
      .then((response) => response.json())
      .then((data) => setCoronaStats(data.Countries));
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" sm:flex sm:flex-col sm:items-center lg:flex lg:flex-col lg:items-center md:flex md:flex-col md:items-center">
      <h1 className="sm:text-xs lg:text-4xl md:text-2xl my-10">COVID-19 Database</h1>
      <input
        type="text"
        placeholder=" Search"
        onKeyDown={inputHandler}
        className="py-2 px-2 mb-5 outline-none border-black border-2"
      />
      {filteredStats.length === 0 ? (
        <TableInfos coronaStats={coronaStats} />
      ) : (
        <TableInfos coronaStats={filteredStats} />
      )}
    </div>
  );
}

export default App;
