import { useEffect, useState } from "react";
const apiUrl = "https://randomfox.ca/floof/";

function App() {
  const [foxes, setFoxes] = useState([]);

  console.log(foxes);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setFoxes(data))
      .catch((error) => error);
  }, []);

  return (
    <div>
      <h1>foxes</h1>
      <div>
        <img src={foxes.image} alt="" />
        <div> {foxes.link}</div>
      </div>
    </div>
  );
}
export default App;

  
  
