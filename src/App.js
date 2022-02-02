import React, { useState } from "react";
import "./style.scss";
import Card from "./components/card";
import Filter from "./components/filter";
import json from "./data/data.json";

const App = () => {
  const initialData = json.map((data) => {
    const tag = [data.role, data.level, ...data.languages, ...data.tools];
    data.tags = tag;
    return data;
  });
  const [data, setData] = useState(initialData);
  const [filterList, setFilterList] = useState([]);

  //ADD TO FILTER LISTE
  const addToFilter = (e) => {
    if (!filterList.includes(e)) setFilterList([...filterList, e]);
    setData(data.filter((el) => el.tags.includes(e)));
  };

  // REMOVE FROM THE LIST
  const removeToFilter = (e) => {
    let newList = filterList.filter((tag) => tag !== e);
    setFilterList(newList);

    let newData = initialData.filter(
      (item) =>
        item.tags.filter((el) => newList.indexOf(el) + 1).length >=
        newList.length
    );
    setData(newData);
  };

  // RESET FILTER
  const resetFilter = () => {
    setFilterList([]);
    setData(initialData);
  };

  return (
    <div className="App">
      <div className="container">
        <header></header>
        <main>
          <Filter
            filterList={filterList}
            removeToFilter={removeToFilter}
            resetFilter={resetFilter}
          />
          <Card data={data} addToFilter={addToFilter} filterList={filterList} />
        </main>
      </div>
    </div>
  );
};

export default App;
