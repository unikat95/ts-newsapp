import React from "react";

import { Link } from "react-router-dom";

import uc1 from "../assets/uc1.svg";
import uc2 from "../assets/uc2.svg";
import uc3 from "../assets/uc3.svg";
import uc4 from "../assets/uc4.svg";

export default function Xd() {
  return (
    <div className="w-full fixed top-0 left-0">
      <div className="w-full h-auto flex justify-between items-center border-b p-5">
        <div className="flex justify-start items-center gap-2">
          <img src={uc2} alt="" className="w-29" />
          <p className="text-xl font-bold text-primary">ULTIMATECOINS.PL</p>
        </div>
        <ul className="flex gap-5">
          <li>
            <Link to="">Link 1</Link>
          </li>
          <li>
            <Link to="">Link 2</Link>
          </li>
          <li>
            <Link to="">Link 3</Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-auto flex justify-between items-center border-b p-5">
        <div className="flex justify-start items-center gap-2">
          <img src={uc3} alt="" className="w-110" />
          <p className="text-xl font-bold text-primary">ULTIMATECOINS.PL</p>
        </div>
        <ul className="flex gap-5">
          <li>
            <Link to="">Link 1</Link>
          </li>
          <li>
            <Link to="">Link 2</Link>
          </li>
          <li>
            <Link to="">Link 3</Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-auto flex justify-between items-center border-b p-5">
        <div className="flex justify-start items-center gap-2">
          <img src={uc4} alt="" className="w-122" />
          <p className="text-xl font-bold text-primary">ULTIMATECOINS.PL</p>
        </div>
        <ul className="flex gap-5">
          <li>
            <Link to="">Link 1</Link>
          </li>
          <li>
            <Link to="">Link 2</Link>
          </li>
          <li>
            <Link to="">Link 3</Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-auto flex justify-between items-center border-b p-5">
        <div className="flex justify-start items-center gap-2">
          <img src={uc1} alt="" className="w-142" />
          <p className="text-xl font-bold text-primary">ULTIMATECOINS.PL</p>
        </div>
        <ul className="flex gap-5">
          <li>
            <Link to="">Link 1</Link>
          </li>
          <li>
            <Link to="">Link 2</Link>
          </li>
          <li>
            <Link to="">Link 3</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
