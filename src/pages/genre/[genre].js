import Stylist from "@/styles/stylist.module.css"
import Layout from "../components/layout"
import Card from "../components/card"
import Link from "next/link"


export async function getServerSideProps({query}){
    const res = await fetch('https://otakudesuapieksa.vercel.app/genres/'+query.genre+'/page/'+query.page)
    const posts = await res.json()

    const cobs = {
        genre : query.genre,
        page : query.page
    }

    return {
        props:{
            posts,
            cobs
        }
    }
}

export default function Genre({posts, cobs}){
    return(
        <>
        <Layout title="Genres">
        <div className={Stylist.home}>
          <div className={Stylist.title}>Genre {cobs.genre}:</div>
          <div className={Stylist.daftarnime}>
            {(posts.data.arr.length != 0)?
            posts.data.arr.map((anime, index)=>{
                return  <Card epoint={anime.endpoint} key={index} thumb={anime.thumb} judul={anime.nama} epske={anime.rating}/>
            })
            :<h2>Halaman Melebihi Batas</h2>}
          </div>
          <div className={Stylist.routepage}>
            {(cobs.page != 1)?<Link href={"/genre/"+cobs.genre+"?page="+(cobs.page-1)}>{"<"}</Link>: ""}
            <h3>{cobs.page}</h3>
            <Link href={"/genre/"+cobs.genre+"?page="+(parseInt(cobs.page)+1)}>{">"}</Link>
          </div>
        </div>
        </Layout>
        </>
    )
}