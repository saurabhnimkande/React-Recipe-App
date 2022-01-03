import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form";
import { Display } from "./components/Display";
import { Displaymax } from "./components/Displaymax";
import { Button } from "./components/Button.jsx";

function App() {
  const [data, setData] = useState([]);
  const [max, setMax] = useState(null);

  const fetchData = (dataarr) => {
    setData(dataarr);
  };

  const timeSort = (val) => {
    fetch(`http://localhost:3001/recipes?_sort=timetocook&_order=${val}`)
      .then((e) => e.json())
      .then((e) => setData(e));
  };

  const maxData = (item) => {
    setMax(item);
  };
  return (
    <div className="App">
      <div>
        <Form fetchData={fetchData} />
      </div>
      <div>
        <Button onClick={() => timeSort("asc")}>Time Low to High</Button>
        <Button onClick={() => timeSort("desc")}>Time High to Low</Button>
        <div>
          <Display data={data} maxData={maxData} />
        </div>
      </div>
      <div>
        <Displaymax max={max} />
      </div>
    </div>
  );
}

export default App;
