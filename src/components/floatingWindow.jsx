/**
 * 
 * @param {React.SVGProps<SVGTextElement>} msg
 * @returns 
 */
export default function FloatingWindow({msg}) {
    return (<div className="inline-block floating-window-shadow text-3xl">
        <div className="relative border-4 green" style={{top: "-10px", left: "-10px"}}>
            <div className="flex py-2 pr-2 border-b-4 justify-end gap-2">
                <span className="floating-window-dot"/>
                <span className="floating-window-dot"/>
                <span className="floating-window-dot"/>
            </div>
            <div className="pt-8 pb-6 px-6">
                {msg}
            </div>
        </div>
    </div>);
}