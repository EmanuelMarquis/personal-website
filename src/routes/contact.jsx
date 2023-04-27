import Navbar from "../components/navbar";

export default function Contact() {
    return <>
        <Navbar/>
        <p className="text-6xl font-bold mt-32 ml-24">How can i help? Tell me<br/>your ideas.</p>
        <div className="flex gap-4 ml-24 mt-12">
            <a href="mailto:emanuelmarquisdev@gmail.com">
            <input className="green px-8 py-4 border-4 text-3xl" type="button" value={"Email"}/>
            </a>
            <a href="https://linkedin.com/in/emanuelmarquis" target="_blank">
            <input className="green px-8 py-4 border-4 text-3xl" type="button" value={"Linkedin"}/>
            </a>
        </div>
    </>;
}