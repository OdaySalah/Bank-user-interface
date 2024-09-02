import { useState } from "react";
import "./App.css";
import Alertt from "./Alertt";

export default function Header() {
  const [showModel, setShowmodel] = useState(false);
  const [showcolor, setShowcolor] = useState("green");
  const [massaage, setmassage] = useState("the sucess");
  const [formInputs, setFormInput] = useState({
    name: "",

    numberphon: "",
    age: "",
    checkenployee: "true",
    salary: ""
  });

  const isFormaVaalifd = Object.entries(formInputs).every(([key, value]) => {
    if (typeof value === "boolean") {
      return value;
    }

    return value.trim() !== "";
  });

  const handelSubmit = event => {
    event.preventDefault();
    const { numberphon } = formInputs;
    const { age } = formInputs;
    if (age < 18 || age > 100 || !(!isNaN(age) && age.trim() !== "")) {
      setShowcolor("red");
      setmassage("the error age");
    } else if (
      numberphon.length < 8 ||
      numberphon.length > 13 ||
      !(!isNaN(numberphon) && numberphon.trim() !== "")
    ) {
      setShowcolor("red");
      setmassage("the error number");
    } else {
      setShowcolor("green");
      setmassage("the success");
    }
    setShowmodel(true);
  };
  function hanssel() {
    setShowmodel(false);
  }
  return (
    <div id="all" onClick={hanssel}>
      <form class="headerm" onSubmit={handelSubmit}>
        <h3>Requesting a loan</h3>

        <hr></hr>
        <label>name</label>
        <form>
          <input
            type="text"
            class="name"
            value={formInputs.name}
            onChange={event => {
              setFormInput({ ...formInputs, name: event.target.value });
            }}
          ></input>
        </form>
        <label>phonNumber</label>

        <form>
          <input
            type="text"
            class="name"
            value={formInputs.numberphon}
            onChange={event => {
              setFormInput({ ...formInputs, numberphon: event.target.value });
            }}
          ></input>
        </form>
        <label>Age</label>
        <form>
          <input
            type="text"
            class="name"
            value={formInputs.age}
            onChange={event => {
              setFormInput({ ...formInputs, age: event.target.value });
            }}
          ></input>
        </form>

        <label>Are you an employee?</label>
        <form>
          <input
            class="ch1"
            type="checkbox"
            value={formInputs.checkenployee}
            onChange={event => {
              setFormInput({
                ...formInputs,
                checkenployee: event.target.checked
              });
            }}
          ></input>
        </form>
        <label>Salary</label>

        <form>
          <input
            type="text"
            class="name"
            value={formInputs.salary}
            onChange={event => {
              setFormInput({ ...formInputs, salary: event.target.value });
            }}
          ></input>
        </form>
        <div class="buttonSubmit">
          <button disabled={!isFormaVaalifd}>submit</button>
        </div>
        <Alertt isvisABLE={showModel} errMAssage={massaage} cOLor={showcolor} />
      </form>
    </div>
  );
}
