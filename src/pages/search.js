import Layout from "./components/layout"
import Stylist from "@/styles/stylist.module.css";
import Card from "./components/card";


export async function getServerSideProps({query}){
    const res = await fetch('https://otakudesuapieksa.vercel.app/search/'+query.slug)
    const posts = await res.json()

    return {
        props:{
            posts
        }
    }
}

export default function Search({posts}){
    return(
        <>
            <Layout title="Search">
            <div className={Stylist.home}>
                <div className={Stylist.title}>
                    Pencarian:
                </div>
                <div className={Stylist.daftarnime}>
                    {posts.data.arr.map((anime)=>{
                      return <Card epoint={anime.endpoint} key={anime.id} thumb={anime.thumb} judul={anime.nama} epske={anime.rating}/>
                    })}
                </div>
            </div>
            </Layout>
        </>
    )
}