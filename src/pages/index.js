import Card from "./components/card";
import Layout from "./components/layout";
import Stylist from "@/styles/stylist.module.css";
import SkeletonCard from "./components/skeletoncard";


export async function getServerSideProps(){
    const res = await fetch('https://otakudesuapieksa.vercel.app/terbaru')
    const posts = await res.json()

    return {
        props:{
            posts
        }
    }
}

export default function Home({posts}){
    
    return(
         <Layout title="Home">
            <div className={Stylist.home}>
                <div className={Stylist.title}>
                    Baru Rilis:
                </div>
                <div className={Stylist.daftarnime}>
                    {posts.data.arr.map((anime)=>{
                      return <Card epoint={anime.endpoint} key={anime.id} thumb={anime.thumb} judul={anime.judul} epske={anime.episodeBaru}/>
                    })}
                </div>
            </div>
         </Layout>
    )
}