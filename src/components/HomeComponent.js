import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cars({ id }) {
  const [items, setItems] = useState({ reminders_count: 0, cars: [] });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    let data = [];
    setLoading(true);
    while (true) {
      data = await fetch(
        `https://saveyourcar-api.herokuapp.com/api/v1.0/reminders/user/${id}`
      );
      const items = await data.json();
      console.log(items.data);
      if (data.status === 200) {
        setItems(items);
        setLoading(false);
        console.log(items.count);
        items.reminders_count > 0 &&
          alert(
            `Hai ${items.reminders_count} reminders in sospeso! Controlla le tue auto!`
          );
        break;
      }
    }
  };

  return (
    <div className="jumbotron mt-5 ">
      <h1>Le tue Auto:</h1>
      <div className="album py-5">
        <div className="row">
          {loading ? (
            <h1 className="col-lg-12">...loading content</h1>
          ) : (
            items.cars.map(item => {
              return (
                <div className="mb-4 col-lg-4 col-sm-12 " key={item.id}>
                  <Link to={`/users/${id}/cars/${item.id}`}>
                    <button
                      onClick={() => {
                        item.reminders &&
                          Object.values(item.reminders_text).map(text => {
                            alert(text);
                          });
                      }}
                      className="btn btn-block btn-secondary m-2 "
                    >
                      {item.name}
                    </button>
                    <span
                      onClick={() => {
                        item.reminders &&
                          Object.values(item.reminders_text).map(text => {
                            alert(text);
                          });
                      }}
                      className="badge badge-secondary"
                    >
                      {item.reminders}
                    </span>
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
