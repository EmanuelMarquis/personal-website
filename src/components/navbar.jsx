import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return (<nav className="fixed z-10 top-0 w-full flex justify-between main-color border-b-4 text-3xl">
        <LogoBtn/>
        <span>
            <PortifolioBtn navigate={navigate}/>
            <ContactBtn navigate={navigate}/>
        </span>
    </nav>);
}

function LogoBtn() {
    return <input className="border-r-4 border-color px-6 navbar-btn" type="button" value="EM" onClick={() => window.location.reload()}/>

}

function PortifolioBtn({navigate}) {
    const handleClick = () => navigate("/portifolio");
    return <input className="border-l-4 py-6 px-6 navbar-btn" type="button" value="portfolio" onClick={handleClick}/>
}

function ContactBtn({navigate}) {
    const handleClick = () => navigate("/contact");
    return <input className="border-l-4 py-6 px-6 navbar-btn" type="button" value="contact" onClick={handleClick}/>
}

