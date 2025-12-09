import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";

import sectionData from "./data/sectionData";


const App = () => {
    let a = 10;
    let b = 50;


 
    return (
        <div>

            <Navbar />

            <About />


            {
                sectionData.map((item, index) => {
                    return (

                        <Section
                            title={item.title}
                            description={item.description}
                        />
                    )


                })
            }

            {a>b?(<h1>Greater number is a {a}</h1>):(<h1>Greater number is b {b}</h1>)}


        </div>
    )
}

export default App;