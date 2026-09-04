import { useState } from "react";
import "./Card.css";

//* 1. Must use in component top level
//* 2. Must use inside react component

export default function Card({ name, age }) {
  const [member, setMember] = useState("");

  const clickHandler = (memberName) => {
    setMember(memberName);
  };

  console.log(member);

  return (
    <div onClick={() => clickHandler(name)} className="card">
      <p> Name: {name}</p>
      <p> Age: {age}</p>
      {member && <p>Greetings {member}</p>}
    </div>
  );
}
