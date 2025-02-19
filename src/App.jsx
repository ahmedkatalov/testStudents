import { Routes, Route, Link } from "react-router-dom";
import { HCintermediate } from "./HTMLCSS/HCintermediate";
import { HCadvanced } from "./HTMLCSS/HCadnvanced";
import { HCbeginner } from "./HTMLCSS/HCbeginner";


import {JSintermediate} from "./JS/JSintermediate"
import { JSbeginner } from "./JS/JSbeginner";
const App = () => {
  return (
    <div style={{ color: "black", fontFamily: "Arial, sans-serif", padding: "20px" }}>

      <nav style={{ marginBottom: "20px" }}>

      <Link
          to="/hcbeginner"
          style={{
            padding: "10px",
            textDecoration: "none",
            color: "white",
            backgroundColor: "green",
            borderRadius: "5px",
          }}
        >
          HTML beginner
        </Link>
        
        <Link
          to="/hcintermediate"
          style={{
            padding: "10px",
            marginRight: "10px",
            textDecoration: "none",
            color: "white",
            backgroundColor: "blue",
            borderRadius: "5px",
          }}
        >
          HTML Intermediate
        </Link>
        <Link
          to="/hcadvanced"
          style={{
            padding: "10px",
            textDecoration: "none",
            color: "white",
            backgroundColor: "green",
            borderRadius: "5px",
          }}
        >
          HTML advanced
        </Link>
        {/* ---------------------------------------------------------------------------------------------------------------------------- */}
        {/* ---------------------------------------------------------------------------------------------------------------------------- */}

        <Link
          to="/jsBeginner"
          style={{
            padding: "10px",
            textDecoration: "none",
            color: "white",
            backgroundColor: "green",
            borderRadius: "5px",
          }}
        >
          JS beginner
        </Link> 
        <Link
          to="/jsIntermediate"
          style={{
            padding: "10px",
            textDecoration: "none",
            color: "white",
            backgroundColor: "green",
            borderRadius: "5px",
          }}
        >
          JS intermediate
        </Link> 


      </nav>
      <Routes>
        <Route path="/hcbeginner" element={<HCbeginner/>} />
         <Route path="/hcintermediate" element={<HCintermediate/>} /> 
         <Route path="/hcadvanced" element={<HCadvanced/>} /> 

         <Route path="/jsBeginner" element={<JSbeginner/>}/>
         <Route path="/jsIntermediate" element={<JSintermediate/>}/>



        <Route path="/" element={<div>Выберай</div>} /> 
      </Routes>
    </div>
  );
};

export default App;
