import Head from "next/head";
import Navbar from "./navbar";
import Stylist from "@/styles/stylist.module.css";


export default function Layout(props){
    
    return(
        <>
        <Head>
            <title>Animazaa | {props.title}</title>
        </Head>
        <Navbar/>
        <div style={{minHeight: 1000}} className={Stylist.body}>
        {props.children}
        </div>
        </>
    )
}