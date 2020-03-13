import React, { useState, useRef, useEffect } from "react";

const NewCarForm = ({ cutDate, handleInt, user_id, history }) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    fuel: "",
    image_file: "",
    detected_kms: "",
    review_date: "",
    check_km: "",
    assurance_date: "",
    tax_date: "",
    avarage_km: ""
  });

  useEffect(() => {
    console.log(form);
    console.log(user_id);
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
        `https://saveyourcar-api.herokuapp.com/api/v1.0/cars?id_user=${user_id}`,
        {
          method: "POST",
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
        history.push(`/users/${user_id}/cars`);
        //alert("Your car has been saved");
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
        placeholder="nome auto"
        type="text"
      />
      <br />
      <br />
      <div className="form-check form-check-inline ">
        <input
          className="form-check-input"
          type="radio"
          name="fuel"
          value="benzina"
          checked={form.fuel === "benzina"}
          onChange={handleChange}
        />
        <label className="form-check-label m-2">Benzina</label>
      </div>
      <div className="form-check form-check-inline ">
        <input
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
        placeholder="data immatricolazione"
      />
      <br />
      <label className="form-check-label m-2">km rilevati</label>
      <input
        className="form-control"
        onChange={handleChange}
        name="detected_kms"
        value={form.detected_kms}
        type="number"
        placeholder="km attuali rilevati"
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
        placeholder="km rilevati all'ultimo tagliando"
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
        placeholder="stima km settimanali"
      />
      <br />
      <button className="btn btn-secondary m-2" type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewCarForm;
