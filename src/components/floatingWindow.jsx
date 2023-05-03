/**
 * 
 * @param {React.SVGProps<SVGTextElement>} msg
 * @returns 
 */
export default function FloatingWindow({msg, title, isPosAbsolute, haveTitleBar=true, isPortfolio, header=""}) {
    const titleBar = <>
        <p className="text-xl font-bold ml-4 mr-16">{title}</p>
        <span className="flex gap-2">
            <span className="floating-window-dot"/>
            <span className="floating-window-dot"/>
            <span className="floating-window-dot"/>
        </span>
    </>
        
    return (<div className={`${isPosAbsolute === true&& "absolute"} 
    ${isPortfolio === true? "w-96" : "md:w-1/2"} 
    floating-window-shadow text-3xl`}
    >
        <div className="relative border-4 green" style={{top: "-10px", left: "-10px"}}>
            {haveTitleBar === true && <div className="flex py-2 text-sml pr-2 border-b-4 justify-between ">{titleBar}</div>}
            { header !== "" && <p className="font-bold pt-8 pb-2 px-6">{header}</p>}
            <div className="pt-8 pb-6 px-6">{msg}</div>
        </div>
    </div>);
}