import FloatingWindow from "../components/floatingWindow";

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
        <span className="flex gap-16">
            <FloatingWindow msg={msgs[0]} haveTitleBar={false} width={"24rem"}/>
            <FloatingWindow msg={msgs[1]} haveTitleBar={false} width={"24rem"}/>
            {/* <FloatingWindow msg={msgs[2]}/> */}
        </span>
    </div>;
}