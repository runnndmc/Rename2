import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getOneMovie } from "../services/movies";
import "./MovieEdit.css";

const MovieEdit = (props) => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    producer: "",
    writer: "",
    screenplay_by: "",
    year_released: "",
    genre: "",
    img_url: "",
  });

  const {
    title,
    director,
    producer,
    writer,
    screenplay_by,
    year_released,
    genre,
    img_url,
  } = formData;

  console.log();

  let { id } = useParams();
  const { updateSubmit } = props;

  useEffect(() => {
    const prefillForm = async () => {
      const findOne = await getOneMovie(id);
      const {
        title,
        director,
        producer,
        writer,
        screenplay_by,
        year_released,
        genre,
        img_url,
      } = findOne;
      setFormData({
        title,
        director,
        producer,
        writer,
        screenplay_by,
        year_released,
        genre,
        img_url,
      });
    };
    prefillForm();
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="edit-form"
      onSubmit={(e) => {
        e.preventDefault();
        updateSubmit(id, formData);
      }}
    >
      <h2 className="edit-title">Edit Your Mistakes</h2>
      <label>Title:</label>
      <input name="title" type="text" value={title} onChange={handleChange} />
      <label>Director:</label>
      <input
        name="director"
        type="text"
        value={director}
        onChange={handleChange}
      />
      <label>Producer:</label>
      <input
        name="producer"
        type="text"
        value={producer}
        onChange={handleChange}
      />
      <label>Writer:</label>
      <input name="writer" type="text" value={writer} onChange={handleChange} />
      <label>Screenplay By:</label>
      <input
        name="screenplay_by"
        type="text"
        value={screenplay_by}
        onChange={handleChange}
      />
      <label>Year Released:</label>
      <input
        name="year_released"
        type="number"
        value={year_released}
        onChange={handleChange}
      />
      <label>Genre:</label>
      <input name="genre" type="text" value={genre} onChange={handleChange} />
      <label>Movie Image URL</label>
      <input
        name="img_url"
        type="text"
        value={img_url}
        onChange={handleChange}
      />
      <div className="save-button-container">
        <button className="hit-save">Save</button>
      </div>
    </form>
  );
};

export default MovieEdit;
