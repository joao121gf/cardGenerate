import React from "react";
export default function App01() {
  return (
    <>
      <div className="bodyy">
        <div className="cards">
          <div className="card-1">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis officia architecto,
            </p>
          </div>
          <div className="card-2">
            <p>123</p>
          </div>
        </div>
        <div className="box-body">
          <div className="box-cards">
            <div className="inputs">
              <p className="tittle-input">Card Holder</p>
              <input type="text" />
              <p className="tittle-input">Card Number</p>
              <input type="text" />
            </div>
            <div className="dates">
              <div>
                <p>EXP.DATE (MM/YY)</p>
                <div className="flex">
                  <input type="text" />
                  <input type="text" />
                </div>
              </div>
              <div className="cvc-box">
                <p>CVC</p>
                <input className="cvc" type="text" />
              </div>
            </div>
            <button>CONFIRM</button>
          </div>
        </div>
      </div>
    </>
  );
}
