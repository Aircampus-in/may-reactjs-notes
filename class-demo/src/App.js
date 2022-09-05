import "./App.css";
import { WelcomeFn } from "./components/WelcomeFn";
import { WelcomeClass } from "./components/WelcomeClass";
// Named export
export function App() {
  return (
    <section>
      <h1 className="head">Welcome to react class</h1>
      <p>This is a paragraph</p>
      <WelcomeFn />
      <WelcomeClass name="sameer" age="20" />
      <WelcomeClass name="anjali" age="17" />
      <WelcomeClass name="amit" age="19" />
    </section>
  );
}

// export function App2() {
//   return <h2>app 2</h2>;
// }

// export default App;
