import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
    const navigate = useNavigate();

    return (<nav className="fixed z-10 top-0 w-full flex justify-between main-color border-b-4 text-3xl">
        <LogoBtn/>
        <span>
            <HomeBtn navigate={() => navigate("/")}/>
            <PortifolioBtn navigate={() => navigate("/portfolio")}/>
            <ContactBtn navigate={() => navigate("/contact")}/>
        </span>
    </nav>);
}

function LogoBtn() {
    return <a href="." className="border-r-4 border-color px-6 navbar-btn">
        <img alt="" width={"82rem"} src={logo}/>
    </a>
}

function HomeBtn({navigate}) {
    return <input className="border-l-4 py-6 px-6 navbar-btn" type="button" value="Home" onClick={navigate}/>
}

function PortifolioBtn({navigate}) {
    return <input className="border-l-4 py-6 px-6 navbar-btn" type="button" value="portfolio" onClick={navigate}/>
}

function ContactBtn({navigate}) {
    return <input className="border-l-4 py-6 px-6 navbar-btn" type="button" value="contact" onClick={navigate}/>
}

