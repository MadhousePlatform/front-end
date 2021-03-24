import "./App.css";
import Homepage from "./Homepage";
import Header from "./Navigation";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Homepage />
      </main>
    </div>
  );
}

export default App;
