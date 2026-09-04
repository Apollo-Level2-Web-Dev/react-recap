import "./Card.css";

//* props and children

// export default function Card(props) {
//   console.log(props);

//   return (
//     <div>
//       {props.children}
//       <p> First Name: {props.firstName}</p>
//       <p> Last Name: {props.lastName}</p>
//       <p> Age: {props.age}</p>
//     </div>
//   );
// }

// export default function Card({ name, age }) {
//   if (age < 18) {
//     return <div className="card">You are too young</div>;
//   }

//   return (
//     <div className="card">
//       <p> Name: {name}</p>
//       <p> Age: {age}</p>
//     </div>
//   );
// }

// export default function Card({ name, age }) {
//   return (
//     <>
//       {age > 18 && (
//         <div className="card">
//           <p> Name: {name}</p>
//           <p> Age: {age}</p>
//         </div>
//       )}
//     </>
//   );
// }

export default function Card({ name, age }) {
  return (
    <>
      {age > 18 ? (
        <div className="card">
          <p> Name: {name}</p>
          <p> Age: {age}</p>
        </div>
      ) : (
        <div className="card">You are too young</div>
      )}
    </>
  );
}
