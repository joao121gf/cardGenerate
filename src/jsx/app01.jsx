import React, { use } from "react";
import { useState } from "react";
export default function App01() {
  const [number, setNumber] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [name, setName] = useState("");
  const [mounth, setMounth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  let getInputName = (event) => {
    setName(event.target.value);
  };
  let numbValue = () => {
    setNumber(numberInput);
  };
  let getInputNumber = (event) => {
    let value = event.target.value;
    if (value.length <= 16) {
      setNumber(value);
    } else {
      setNumber(value.slice(0, 16));
    }
  };
  const formatNumber = (num) => {
    return num.replace(/(\d{4})/g, "$1 ").trim();
  };

  const getInputMounth = (event) => {
    setMounth(event.target.value);
  };

  const getInputYear = (event) => {
    setYear(event.target.value);
  };
  const getCvc = (event) => {
    setCvc(event.target.value);
  };
  return (
    <>
      <div className="bodyy">
        <div className="cards">
          <div className="card-1">
            <div className="dvi">
              <p className="number">{formatNumber(number)}</p>
              <div className="infos">
                <p>{name}</p>
                <div className="flx">
                  <p>{mounth}</p>
                  <p>{year}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-2">
            <p>{cvc}</p>
          </div>
        </div>
        <div className="box-body">
          <div className="box-cards">
            <div className="inputs">
              <p className="tittle-input">Card Number</p>
              <input
                type="number"
                inputMode="numeric"
                onChange={(event) => getInputNumber(event)}
                value={number}
              />
              <p className="tittle-input">Card Holder</p>
              <input type="text" maxLength="21" onChange={getInputName} />
            </div>
            <div className="dates">
              <div>
                <p>EXP.DATE (MM/YY)</p>
                <div className="flex">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    maxLength="2"
                    onChange={getInputMounth}
                  />
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    maxLength="4"
                    onChange={getInputYear}
                  />
                </div>
              </div>
              <div className="cvc-box">
                <p>CVC</p>
                <input maxLength="3" onChange={getCvc} className="cvc" type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
