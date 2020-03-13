import React, { useState, useEffect } from "react";
import CarForm from "../components/CarForm";

function Car({ match }) {
  useEffect(() => {
    fetchCar();
  }, []);

  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchCar = async () => {
    let data = {};
    while (true) {
      setLoading(true);
      data = await fetch(
        `https://saveyourcar-api.herokuapp.com/api/v1.0/cars/${match.params.car_id}`
      );
      const car_data = await data.json();
      if (data.status == 200) {
        setCar(car_data);
        setLoading(false);
        console.log(car_data);
        break;
      }
    }
  };

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
      {loading ? (
        <h1>...loading content</h1>
      ) : (
        <div>
          <h1>{car.name}</h1>
          <CarForm
            user_id={match.params.id}
            id={match.params.car_id}
            car={car}
            cutDate={cutDate}
            handleInt={handleInt}
          />
        </div>
      )}
    </div>
  );
}

export default Car;
