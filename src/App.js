import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";
import axios from "axios";

function App() {
  let [file, setFile] = useState();
  let partyName = useRef();

  let handle = (e) => {
    e.preventDefault();

    setFile(e.target.files[0]);
  };

  let submit = () => {
    console.log(file);

    // let data = {
    //   partyName: partyName.current.value,
    //   logo: file,
    // };

    let formdata = new FormData();
    formdata.append("partyName", partyName.current.value);
    formdata.append("logo", file);

    let option = {
      header: {
        "Content-Type": "multipart/form-data",
      },
    };

    axios.post("localhost:3001/posts",  {formdata, option});
  };

  return (
    <div className="App">
      <input type="text" ref={partyName} />
      <input type="file" onChange={handle} />
      <input type="submit" onClick={submit} />
    </div>
  );
}

export default App;
