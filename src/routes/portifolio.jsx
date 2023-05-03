import FloatingWindow from "../components/floatingWindow";
import Navbar from "../components/navbar";

export default function Portifolio() {
    const msgs = [
        `REST API study with 
        React.js and open 
        weather api.`,
        `Frontend dev study 
        with plain HTML, CSS 
        and JS.`
    ];

    return <>
        <Navbar/>
        <div id="portfolio-list" className="flex gap-16 mt-48 ml-24">
            <a href="https://github.com/emanuelmarquis/weather-app">
            <FloatingWindow header={"2023/ Weather App"} msg={msgs[0]} haveTitleBar={false} isPortfolio={true}/>
            </a>
            
            <a href="https://github.com/emanuelmarquis/todo-list">
            <FloatingWindow header={"2023/ Todo-List"} msg={msgs[1]} haveTitleBar={false} isPortfolio={true}/>
            </a>
            {/* <FloatingWindow msg={msgs[2]}/> */}
        </div>
    </>;
}