import React, { useState, useEffect } from "react";
import Grid from "./Grid";
import { athlete_column_defs, car_column_defs } from "./columnDefs.js";
import { athlete_row_data, car_row_data } from "./rowData";
import "./App.css";

const App = () => {
  const [gridApiMap, setGridApiMap] = useState({});

  useEffect(() => {
    console.log("updated", gridApiMap);
  }, [gridApiMap]);

  const registerGridApi = (id, api) => {
    setGridApiMap((gridApiMap) => {
      console.log("registering grid api", gridApiMap);
      return {
        ...gridApiMap,
        [id]: api
      };
    });
  };

  const logFirstRows = () => {
    Object.entries(gridApiMap).forEach(([id, api]) => {
      console.log(id, api.getRowNode(0).data);
    });
  };

  return (
    <div>
      <button onClick={logFirstRows}>Log First Row from each Grid</button>
      <Grid
        rowData={car_row_data}
        columnDefs={car_column_defs}
        id="car_grid"
        registerGridApi={registerGridApi}
      />
      <Grid
        rowData={athlete_row_data}
        columnDefs={athlete_column_defs}
        id="athlete_grid"
        registerGridApi={registerGridApi}
      />
    </div>
  );
};

export default App;
