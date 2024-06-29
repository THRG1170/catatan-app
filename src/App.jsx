import Navbar from "./components/Navbar";
import Perkenalan from "./components/Perkenalan";
import List from "./components/List";
import Made from "./components/Made";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Perkenalan />
        <List />
        <Made />
      </main>
    </>
  );
}

export default App;
