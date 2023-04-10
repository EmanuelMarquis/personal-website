
export default function Navbar() {
    return (<nav className="fixed z-10 top-0 w-full flex justify-between main-color border-b-4 text-3xl">
        <input className="border-r-4 border-color px-6 navbar-btn" type="button" value="EM" onClick={function (){console.log("EM")}}/>
        <span>
            <input className="border-l-4 py-6 px-6 navbar-btn" type="button" value="portfolio" onClick={function (){console.log("portfolio")}}/>
            <input className="border-l-4 py-6 px-6 navbar-btn" type="button" value="contact" onClick={function (){console.log("contact")}}/>
        </span>
    </nav>);
}