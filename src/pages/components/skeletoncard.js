import Stylist from "@/styles/stylist.module.css";

export default function SkeletonCard(){
    return(
        <>
        <div className={Stylist.card}>
            <div className={Stylist.animator}></div>
        </div>
        </>
    )
}