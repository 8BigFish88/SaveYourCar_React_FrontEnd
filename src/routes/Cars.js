import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cars({ match }) {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchItems = async () => {
    let data = [];
    setLoading(true);
    while (true) {
      data = await fetch(
        `https://save-your-car-api.herokuapp.com/api/v1.0/cars?id_user=${match.params.id}`
      );
      const items = await data.json();
      console.log(items.data);
      if (data.status === 200) {
        setItems(items.data);
        setLoading(false);
        break;
      }
    }
  };

  return (
    <div className="jumbotron mt-5 ">
      <h1>Cars Page</h1>
      <div className="album py-5">
        <div className="row">
          {loading ? (
            <h1 className="col-lg-12">...loading content</h1>
          ) : (
            items.map(item => {
              return (
                <div className="mb-4 col-lg-3" key={item.id}>
                  <Link to={`/users/${match.params.id}/cars/${item.id}`}>
                    <button className="btn btn-block btn-secondary m-2 ">
                      {item.name}
                    </button>
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Cars;
