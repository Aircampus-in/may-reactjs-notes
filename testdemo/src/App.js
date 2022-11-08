// import { Counter } from "./components/counter/Counter";
// import { Greet } from "./components/greet/Greet";
import { Skills } from "./components/skills/Skills";

function App() {
  const skills = ["HTML", "CSS", "JavaScript"];
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Greet /> */}
      {/* <Skills /> */}
      <Skills skills={skills} />
    </div>
  );
}

export default App;
