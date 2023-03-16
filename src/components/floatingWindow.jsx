/**
 * 
 * @param {React.SVGProps<SVGTextElement>} msg
 * @returns 
 */
export default function FloatingWindow({msg}) {
    return (<div className="border-4 inline-block green text-3xl">
        <div className="flex py-2 pr-2 border-b-4 justify-end gap-2">
            <span className="floating-window-dot"/>
            <span className="floating-window-dot"/>
            <span className="floating-window-dot"/>
        </div>
        <div className="pt-8 pb-6 px-6">
            {msg}
        </div>
    </div>);
}