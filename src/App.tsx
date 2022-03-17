import { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { DiaryViewer } from "./screens";

function App() {
  const [count, setCount] = useState(0);
  const [foxUrl, setFoxUrl] = useState("");
  const fetchFoxUrl = useCallback(async () => {
    try {
      const res = await fetch("https://randomfox.ca/floof/");
      const imgUrl = (await res.json()).image;
      console.log(imgUrl);
      setFoxUrl(imgUrl as string);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  useEffect(() => {
    // fetchFoxUrl();
  }, [fetchFoxUrl]);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={foxUrl} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header> */}
      <DiaryViewer />
    </div>
  );
}

export default App;
