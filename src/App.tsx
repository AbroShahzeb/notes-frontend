import { useEffect } from "react";
import { AppRouter } from "./routes/AppRouter";
import { Toaster } from "sonner";

function App() {
  useEffect(() => {
    const font = localStorage.getItem("font");
    if (font === "sans-serif") {
      document.querySelector("body")!.classList.add("font-inter");
    } else if (font === "serif") {
      document.querySelector("body")!.classList.add("font-noto-serif");
    } else if (font === "monospace") {
      document.querySelector("body")!.classList.add("font-source-code-pro");
    } else {
      document.querySelector("body")!.classList.add("font-sans");
    }
  }, []);
  return (
    <>
      <Toaster />
      <AppRouter />
    </>
  );
}

export default App;
