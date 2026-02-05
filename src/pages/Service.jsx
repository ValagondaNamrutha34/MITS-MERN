import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Service = () => {
  const theme = useContext(ThemeContext);

  return <div>Current theme: {theme}</div>;
};

export default Service;
