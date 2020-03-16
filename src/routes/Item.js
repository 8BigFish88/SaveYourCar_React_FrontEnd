import React, { useState, useEffect } from "react";

function Item({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchItem = async () => {
    let data = [];
    while (true) {
      setLoading(true);
      data = await fetch(
        `https://saveyourcar-api.herokuapp.com/api/v1.0/users/${match.params.id}`
      );
      const item = await data.json();
      console.log(item);
      if (data.status !== 500) {
        setItem(item);
        setLoading(false);
        break;
      }
    }
  };

  return (
    <div className="jumbotron mt-5">
      {loading ? (
        <h1>...loading content</h1>
      ) : (
        <div className="container text-center">
          <h1>{item.username}</h1>
          <div className="container">{item.email}</div>
        </div>
      )}
    </div>
  );
}

export default Item;
