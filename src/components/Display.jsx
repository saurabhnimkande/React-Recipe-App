import "./Display.css";
export const Display = ({ data, maxData }) => {
  return (
    <>
      {data.map((e) => (
        <div key={e.id} className="mainDiv" onClick={() => maxData(e.id)}>
          <div>
            <img src={e.image} alt="foodimage"></img>
          </div>
          <div>
            <p>{e.title}</p>
            <p>Cooking Time: {e.timetocook} Minutes</p>
          </div>
        </div>
      ))}
    </>
  );
};
