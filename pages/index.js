import Home from "./home";
import { useEffect } from "react";
import { initAction } from "@/configs";

export default function App() {
  useEffect(() => {
    initAction();
  }, []);
  return <Home />;
}
