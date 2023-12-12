import { useEffect, useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "Mai",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function Searchfunction() {
  const [res, setRes] = useState(months);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setRes(months.filter((month) => month.includes(query)));
  }, [query]);

  return (
    <div className="search-container">
      <h3>Search for a month!</h3>
      <p>Attention! The search is capital sensitive...</p>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <p>{res.join(", ")}</p>
    </div>
  );
}
