import { ReactElement } from "react";
import "./App.css";
import Nav from "./components/Nav";

function App({ children }: { children?: ReactElement }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}

export default App;
