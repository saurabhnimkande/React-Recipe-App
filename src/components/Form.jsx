import { useEffect, useState } from "react";
import "./Form.css";
import { Button } from "./Button.jsx";

export const Form = ({ fetchData }) => {
  useEffect(() => {
    randomImage();
    getData();
  }, []);
  const [data, setData] = useState({
    title: "",
    ingredients: "",
    timetocook: "",
    instructions: "",
    image: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveData(data);
  };

  const randomImage = () => {
    fetch("https://foodish-api.herokuapp.com/api/")
      .then((e) => e.json())
      .then((e) =>
        setData({
          ...data,
          image: e.image,
        })
      );
  };

  const saveData = (formdata) => {
    fetch("http://localhost:3001/recipes", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      getData();
      randomImage();
    });
  };

  const getData = () => {
    fetch("http://localhost:3001/recipes")
      .then((e) => e.json())
      .then((e) => fetchData(e));
  };

  return (
    <>
      <h1>Add a new Recipe</h1>
      <form>
        <label>Title : </label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Title"
          name="title"
        ></input>
        <br />
        <label>Ingredients : </label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Ingredients"
          name="ingredients"
        ></input>
        <br />
        <label>Time to cook : </label>
        <input
          onChange={(e) => handleChange(e)}
          type="Number"
          placeholder="Time to cook"
          name="timetocook"
        ></input>
        <br />
        <label>Instructions : </label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Instructions"
          name="instructions"
        ></input>
        <br />
        <label>Image Link : </label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          placeholder="Random Image will be added if Empty"
          name="image"
        ></input>
        <br />
        <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
      </form>
    </>
  );
};
