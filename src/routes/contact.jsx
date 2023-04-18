import FloatingWindow from "../components/floatingWindow";
import Navbar from "../components/navbar";

export default function Contact() {
    const msgs = [
        `REST API study with 
        React.js and open 
        weather api.`,
        `Frontend dev study 
        with plain HTML, CSS 
        and JS.`
    ];

    return <div>
        <Navbar/>
        <span className="flex gap-16 mt-32 ml-8">
            <FloatingWindow header={"2023/ Weather App"} msg={msgs[0]} haveTitleBar={false} width={"24rem"}/>
            <FloatingWindow header={"2023/ Todo-List"} msg={msgs[1]} haveTitleBar={false} width={"24rem"}/>
            {/* <FloatingWindow msg={msgs[2]}/> */}
        </span>
    </div>;
}