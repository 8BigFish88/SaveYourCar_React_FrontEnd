import React, { useState, useRef, useEffect } from "react";
import { Form } from "react-advanced-form";
import { Input } from "react-advanced-form-addons";

const CarForm = () => {
  const [form, setForm] = useState({
    name: "string",
    fuel: "string",
    matriculation: "2020-03-11T10:14:41.534Z",
    image_file: "string",
    detected_kms: 0,
    review_date: "2020-03-11T10:14:41.534Z",
    check_km: 0,
    assurance_date: "2020-03-11T10:14:41.534Z",
    tax_date: "2020-03-11T10:14:41.534Z",
    avarage_km: 0
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    const d = new Date(form.matriculation);
    console.log(d.getFullYear(), d.getMonth() + 1, d.getDate());
  };

  //this.setState();
  const handleChange = e => {
    const { name, value } = e.target;
    console.log(form);
    const prevForm = { ...form };
    console.log(prevForm);
    prevForm[[name]] = value;
    setForm(prevForm);
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
      <input
        className="form-control"
        onChange={handleChange}
        name="matriculation"
        value={form.matriculation}
        placeholder="matriculation"
        type="date"
      />
      <button className="btn btn-secondary m-2" type="submit">
        Log In
      </button>
    </form>
  );
};

export default CarForm;
