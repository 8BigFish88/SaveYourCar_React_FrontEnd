import React, { useState, useEffect } from "react";

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
        `https://save-your-car-api.herokuapp.com/api/v1.0/cars/${match.params.car_id}`
      );
      const car_data = await data.json();
      if (data.status == 200) {
        setCar(car_data.car);
        setLoading(false);
        console.log(car_data);
        break;
      }
    }
  };

  return (
    <div className="jumbotron mt-5">
      {loading ? (
        <h1>...loading content</h1>
      ) : (
        <div>
          <h1>{car.name}</h1>
          <h1>{car.fuel}</h1>
          <h1>{car.matriculation}</h1>
        </div>
      )}
    </div>
  );
}

export default Car;
