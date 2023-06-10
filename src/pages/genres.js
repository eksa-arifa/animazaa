import Layout from "./components/layout"
import Stylist from "@/styles/stylist.module.css";


export async function getServerSideProps(){
    const res = await fetch('https://otakudesuapieksa.vercel.app/genrelist')
    const posts = await res.json()

    return {
        props:{
            posts
        }
    }
}

export default function Genres({posts}){
    return(
        <>
        <Layout title="Genres">
        <div className={Stylist.home}>
                <div className={Stylist.title}>
                    Genre List:
                </div>
                <div className={Stylist.daftarnime}>
                    <h2>Dalam Perbaikan</h2>
                </div>
            </div>
        </Layout>
        </>
    )
}