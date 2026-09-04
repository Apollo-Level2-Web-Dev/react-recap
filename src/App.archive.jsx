import "./App.css";
import Card from "./components/Card.jsx";

const members = [
  { name: "Mir", age: 20 },
  { name: "Mizan", age: 22 },
  { name: "Tanmoy", age: 2 },
  { name: "Firoz", age: 21 },
];

function App() {
  return (
    <div>
      {/* <Card name={members[0].name} age={members[0].age} />
      <Card name={members[1].name} age={members[1].age} />
      <Card name={members[2].name} age={members[2].age} />
      <Card name={members[3].name} age={members[3].age} /> */}

      {members
        .filter((member) => member.age > 18)
        .sort((a, b) => a.age - b.age)
        .map((member) => (
          <Card name={member.name} age={member.age} />
        ))}
    </div>
  );
}

export default App;
