import Head from "next/head";
import Navbar from "./navbar";


export default function Layout(props){
    
    return(
        <>
        <Head>
            <title>Animazaa | {props.title}</title>
        </Head>
        <Navbar/>
        <div style={{minHeight: 1000, background: black}}>
        {props.children}
        </div>
        </>
    )
}