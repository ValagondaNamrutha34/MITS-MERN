import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";

import { Route, Routes } from "react-router-dom";

import UseState from "./pages/Hooks/UseState";   
import Hook from "./pages/Hooks/Hook";          

import Login from "./Auth/Login";
import UseEffect from "./pages/Hooks/UseEffect";
import UseEffectApi from "./pages/Hooks/UseEffectApi";


const App = () => {
  const element = <h1>Hello</h1>;

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home name="Namrutha" />} />

        <Route
          path="/about"
          element={<About name="Namrutha" age={20} dept="CS&DS" />}
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />

        <Route path="/useState" element={<UseState />} />
        <Route path="/hook" element={<Hook />} />

        <Route path="/login" element={<Login />} />
        <Route path='/useEffect' element={<UseEffect/>}/>
        <Route path='/useEffectApi' element={<UseEffectApi/>}/>
      </Routes>
    </>
  );
};

export default App;






