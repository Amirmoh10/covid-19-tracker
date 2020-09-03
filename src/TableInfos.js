import React from "react";
import "./App.css";

function TableInfos({ coronaStats }) {
  return (
    <div className="h-screen overflow-y-auto shadow-2xl ">
      <table>
        <thead>
          <tr className="sm:text-xs">
            <th className="border px-3 py-2 sticky top-0 shadow-2xl bg-blue-600 text-white ">
              Country
            </th>

            <th className="border px-4 py-2 sticky top-0 shadow-2xl  bg-blue-600 text-white">
              NewConfirmed
            </th>

            <th className="border px-4 py-2 sticky top-0 shadow-2xl  bg-blue-600 text-white">
              TotalConfirmed
            </th>

            <th className="border px-4 py-2 sticky top-0 shadow-2xl  bg-blue-600 text-white">
              NewDeaths
            </th>

            <th className="border px-4 py-2 sticky top-0 shadow-2xl  bg-blue-600 text-white">
              TotalDeaths
            </th>

            <th className="border px-4 py-2 sticky top-0 shadow-2xl  bg-blue-600 text-white">
              NewRecovered
            </th>

            <th className="border px-4 py-2 sticky top-0 shadow-2xl  bg-blue-600 text-white">
              TotalRecovered
            </th>
          </tr>
        </thead>
        <tbody>
          {coronaStats.map((objectStat, index) => {
            return (
              <tr key={index}>
                <td className="border px-3 py-2">{objectStat.Country}</td>
                <td className="border px-4 py-2">{objectStat.NewConfirmed}</td>
                <td className="border px-4 py-2">
                  {objectStat.TotalConfirmed}
                </td>
                <td className="border px-4 py-2">{objectStat.NewDeaths}</td>
                <td className="border px-4 py-2">{objectStat.TotalDeaths}</td>
                <td className="border px-4 py-2">{objectStat.NewRecovered}</td>
                <td className="border px-4 py-2">
                  {objectStat.TotalRecovered}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableInfos;

