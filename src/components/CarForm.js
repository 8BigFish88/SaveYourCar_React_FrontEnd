import React, { useState, useRef, useEffect } from "react";
//import { Form } from "react-advanced-form";
//import { Input } from "react-advanced-form-addons";

const CarForm = ({ id, car, cutDate, handleInt, user_id }) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: car.name,
    fuel: car.fuel,
    matriculation: cutDate(car.matriculation),
    image_file: car.image_file,
    detected_kms: car.detected_kms,
    review_date: cutDate(car.review_date),
    check_km: car.check_km,
    assurance_date: cutDate(car.assurance_date),
    tax_date: cutDate(car.tax_date),
    avarage_km: car.avarage_km
  });

  useEffect(() => {
    console.log(car, typeof car);
    console.log(form);
  }, []);
  /*
  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    const d = new Date(form.matriculation);
    console.log(d.getFullYear(), d.getMonth() + 1, d.getDate());
  };*/

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(form);
    setLoading(true);
    let response;
    while (true) {
      response = await fetch(
        `https://saveyourcar-api.herokuapp.com/api/v1.0/cars/${id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        }
      );
      const data = await response.json();
      if (response.status !== 500) {
        setLoading(false);
        alert("Your car has been updated");
        console.log(data);
        break;
      }
    }
  };

  //this.setState();
  const handleChange = e => {
    const { name, value, type } = e.target;
    console.log(form);
    const prevForm = { ...form };
    console.log(prevForm);
    type == "number"
      ? (prevForm[[name]] = Number(value))
      : (prevForm[[name]] = value);
    setForm(prevForm);
    console.log(Number(value), typeof Number(value));
  };

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <input
        className="form-control"
        onChange={handleChange}
        name="name"
        value={form.name}
        placeholder="Car Name"
        type="text"
      />
      <br />
      <br />
      <div className="form-inline form-check">
        <input
          className="form-check-input"
          type="radio"
          name="fuel"
          value="benzina"
          checked={form.fuel === "benzina"}
          onChange={handleChange}
        />
        <label className="form-check-label m-2">Benzina</label>

        <input
          className="form-check-input"
          type="radio"
          name="fuel"
          value="diesel"
          checked={form.fuel === "diesel"}
          onChange={handleChange}
        />
        <label className="form-check-label m-2">Diesel</label>
      </div>
      <br />
      <label className="form-check-label m-2">Data immatricolazione</label>
      <input
        className="form-control"
        onChange={handleChange}
        name="matriculation"
        value={form.matriculation}
        type="date"
      />
      <br />
      <label className="form-check-label m-2">km rilevati</label>
      <input
        className="form-control"
        onChange={handleChange}
        name="detected_kms"
        value={form.detected_kms}
        type="number"
      />
      <br />

      <label className="form-check-label m-2">data ultima revisione</label>
      <input
        className="form-control"
        onChange={handleChange}
        name="review_date"
        value={form.review_date}
        type="date"
      />
      <br />
      <label className="form-check-label m-2">km all'ultimo tagliando</label>
      <input
        className="form-control"
        onChange={handleChange}
        name="check_km"
        value={form.check_km}
        type="number"
      />
      <br />
      <label className="form-check-label m-2">Scadenza Assicurazione</label>
      <input
        className="form-control"
        onChange={handleChange}
        name="assurance_date"
        value={form.assurance_date}
        type="date"
      />
      <br />
      <label className="form-check-label m-2">Scadenza Bollo</label>
      <input
        className="form-control"
        onChange={handleChange}
        name="tax_date"
        value={form.tax_date}
        type="date"
      />
      <br />
      <label className="form-check-label m-2">km medi settimanali</label>
      <input
        className="form-control"
        onChange={handleChange}
        name="avarage_km"
        value={form.avarage_km}
        type="number"
      />
      <br />
      <button className="btn btn-secondary m-2" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CarForm;
