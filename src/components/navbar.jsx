import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return (<nav className="fixed z-10 top-0 w-full flex justify-between main-color border-b-4 text-3xl">
        <LogoBtn/>
        <span>
            <PortifolioBtn navigate={() => navigate("/portifolio")}/>
            <ContactBtn navigate={() => navigate("/contact")}/>
        </span>
    </nav>);
}

function LogoBtn() {
    const logo = <img alt="" width={"82rem"} src={require("../assets/logo.png")}/>
    return <button className="border-r-4 border-color px-6 navbar-btn" onClick={() => window.location.reload()}>{logo}</button>
}

function PortifolioBtn({navigate}) {
    return <input className="border-l-4 py-6 px-6 navbar-btn" type="button" value="portfolio" onClick={navigate}/>
}

function ContactBtn({navigate}) {
    return <input className="border-l-4 py-6 px-6 navbar-btn" type="button" value="contact" onClick={navigate}/>
}

