
export default function CheckeredStripe({child}) {
    return (<div className="z-0">
        <div className="flex">
            <Square option="blank"/>
            <Square option="filled"/>
            <Square option="blank"/>
            <Square option="filled" lastOne={true}/>
        </div>
        <div className="flex">
            <Square option="filled" bottomSquares={true}/>
            <Square option="blank" bottomSquares={true}/>
            <Square option="filled" bottomSquares={true}/>
            <Square option="blank" lastOne={true} bottomSquares={true}/>
        </div>
    </div>);
}

function Square({option, lastOne=false, bottomSquares=false}) {
    return <div className={
        `${option === "filled"? "main-color" : ""} 
        w-96 h-64  border-b-4
        ${bottomSquares === false? "border-t-4": ""}
        ${lastOne === false? "border-r-4" : ""}`
    }/>;
}