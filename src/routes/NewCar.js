import React, { useState, useEffect } from "react";
import NewCarForm from "../components/NewCarForm";

function NewCar({ match }) {
  //function that trasforms the sql date tape in a js understandable date
  const cutDate = str => {
    let date = str;
    typeof str === "string" && (date = date.slice(0, 10));
    return date;
  };

  // function for chacking the existence of the objects inside car_data.
  //Return and int if the car data type is int and a date if its date
  const handleInt = (obj, n) => {
    let value = obj;
    typeof obj === "object" &&
      (n === 1 || n === 3 || n === 6
        ? (value = obj.dataInt)
        : (value = obj.dataDate));
    return value;
  };

  return (
    <div className="jumbotron mt-5">
      <div>
        <h1>Inserisci Nuova Auto:</h1>
        <NewCarForm
          user_id={match.params.id}
          cutDate={cutDate}
          handleInt={handleInt}
        />
      </div>
    </div>
  );
}

export default NewCar;
