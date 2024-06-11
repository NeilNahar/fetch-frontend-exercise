import "./App.css";
import Header from "./Header";
import BreedSelector from "./BreedSelector";
import ViewSelectedBreeds from "./ViewSelectedBreeds";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [breedClickCollection, setBreedClickCollection] = useState([])
  console.log("App")
  function ClickHandler(click){
    setBreedClickCollection((prevItems) => {
      if (prevItems.includes(click)) {
        return prevItems.filter((i) => i !== click);
      } else {
        return [...prevItems, click];
      }
    });
  }
  return (
    <div className="App">
      <Header />
      <BreedSelector handleChange={ClickHandler} />
      {breedClickCollection.length!==0 && <ViewSelectedBreeds breedClickCollection={breedClickCollection} />}
      <Footer />
    </div>
  );
}

export default App;
