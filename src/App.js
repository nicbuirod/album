import Album from "./components/function/Album.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <Album
        src="./image/bob.jpg"
        title="One Love"
        alt="imagen canción"
        type="solista"
        autor="Bob Marley"
        year="(1977)"
        gener="Reggae"
        album="The Very Best of Bob Marley"
      ></Album>
    </div>
  );
}

export default App;
