import Image from "next/image";
import Link from "next/link";
import Stylist from "@/styles/stylist.module.css";
import React from "react";
import SkeletonCard from "./skeletoncard";




export default function Card(props){

    const [skelly, setSkelly] = React.useState(true)


    setTimeout(()=>{
        setSkelly(false)
    }, 1000)

    return(
        (skelly)? <SkeletonCard/>:<div className={Stylist.card} >
        <Link href={"/detail/"+props.epoint}>
            <img src={props.thumb}/>
            <div className={Stylist.foreground}>
                <div className={Stylist.epske}>{props.epske}</div>
                <div className={Stylist.namanime}>{props.judul}</div>
            </div>
        </Link>
        </div>

    )
}