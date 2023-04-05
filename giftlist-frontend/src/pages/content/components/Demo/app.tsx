import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("Wishlist page loaded");
  }, []);

  return <div className="content-view">Append this perhaps?</div>;
}
