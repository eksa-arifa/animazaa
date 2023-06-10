import Layout from "../components/layout";
import Stylist from "@/styles/stylist.module.css";


export async function getServerSideProps({query}){
    const res = await fetch('https://otakudesuapieksa.vercel.app/stream/'+query.endpoint)
    const posts = await res.json()

    return {
        props:{
            posts
        }
    }
}


export default function Stream({posts}){
    return(
        <>
        <Layout title="Stream">
            <div className={Stylist.iframe}>
                <iframe allowFullScreen src={posts.data.arr[0].iframe}></iframe>
            </div>
            <div className={Stylist.judul}>
                <h2>{posts.data.arr[0].judul}</h2>
            </div>
            <div className={Stylist.download} dangerouslySetInnerHTML={{__html: posts.data.arr[0].link}}>
                
            </div>
        </Layout>
        </>
    )
}