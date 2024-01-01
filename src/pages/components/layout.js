import Head from "next/head";
import Navbar from "./navbar";
import Stylist from "@/styles/stylist.module.css";
import { Instagram } from "react-feather";
import { GitHub } from "react-feather";
import Link from "next/link";
import { Analytics } from '@vercel/analytics/react';

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
        <footer className={Stylist.footer}>
            <div className={Stylist.socmed}>
                <Link href={"https://instagram.com/eksrifaa"}><Instagram/></Link>
                <Link href={"https://github.com/eksa-arifa"}><GitHub/></Link>
            </div>
            <div className={Stylist.foot}>Copyright eksrifaa 2023</div>
        </footer>

        <Analytics/>
        </>
    )
}
