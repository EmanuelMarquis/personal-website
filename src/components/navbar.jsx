import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import menuIcon from "../assets/menu_icon.svg";
import { Menu, Transition} from "@headlessui/react"

export default function Navbar() {
    const navigate = useNavigate();

    return (<nav className="fixed z-10 top-0 w-full flex justify-between main-color border-b-4 text-3xl">
        <LogoBtn/>
        <span id="navbarBtns">
            <HomeBtn navigate={() => navigate("/")}/>
            <PortifolioBtn navigate={() => navigate("/portfolio")}/>
            <ContactBtn navigate={() => navigate("/contact")}/>
        </span>
        <NavMenu navigate={{
            toHome: () => navigate("/"),
            toPortfolio: () => navigate("/portfolio"),
            toContact: () => navigate("/contact")
        }}/>
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

function NavMenu({navigate={toHome, toPortfolio, toContact}}) {
    const menuItems = (<Menu.Items className="absolute grid origin-top-right right-0 my-2 divide-y-4 border-t-4 border-b-4">
        <Menu.Item>{() => <HomeBtn navigate={navigate.toHome}/>}</Menu.Item>
        <Menu.Item>{() => <PortifolioBtn navigate={navigate.toPortfolio}/>}</Menu.Item>
        <Menu.Item>{() => <ContactBtn navigate={navigate.toContact}/>}</Menu.Item>
    </Menu.Items>)

    return <div id="menu"><Menu>
        <Menu.Button><img width={"72px"} alt="menu btn" src={menuIcon}/></Menu.Button>
        <Transition>{menuItems}</Transition>
    </Menu></div>
}
