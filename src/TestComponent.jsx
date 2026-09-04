//* 1. File extension must be .jsx
//* 2. Component name must start with capital letter
//* 3. There must be a default export / export
//* 4. There must be a single root returned

// const TestComponent = () => {
//   return <h1>Test Component</h1>;
// };

// export default TestComponent;

const name = "Mizan";

export default function TestComponent() {
  return (
    <>
      <div>
        <h1>Hello World</h1>
        <p>My name is {name}</p>
        <span>I am from Bangladesh</span>
      </div>
      <div>
        <h1>Programming Hero</h1>
      </div>
    </>
  );
}
