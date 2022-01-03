import { useEffect, useState } from "react";
import "./Displaymax.css";
export const Displaymax = ({ max }) => {
  const [dataid, setDataid] = useState(null);
  useEffect(() => {
    if (max != null) {
      getDataId(max);
    }
  }, [max]);
  const getDataId = (id) => {
    fetch(`http://localhost:3001/recipes/${id}`)
      .then((e) => e.json())
      .then((e) => setDataid(e));
  };
  if (dataid == null) {
    return null;
  } else {
    return (
      <>
        <div className="maxclass">
          <div>
            <img src={dataid?.image} alt="food"></img>
          </div>
          <div>
            <h1>{dataid?.title}</h1>
            <h4>Ingredients : {dataid?.ingredients}</h4>
            <h4>Cooking Time : {dataid?.timetocook} Minutes</h4>
            <h4>Instructions : {dataid?.instructions}</h4>
          </div>
        </div>
      </>
    );
  }
};
