import Link from "next/link";
import Layout from "../components/layout";
import Stylist from "@/styles/stylist.module.css";


export async function getServerSideProps({query}){
    const res = await fetch('https://otakudesuapieksa.vercel.app/detail/'+query.endpoint)
    const posts = await res.json()

    return {
        props:{
            posts
        }
    }
}

export default function Detail({posts}){
    return(
        <>
            <Layout title="Detail">
                <div className={Stylist.detail}>
                    <div className={Stylist.gambar}>
                        <img src={posts.data.arr[0].fotonime}/>
                    </div>
                    <div className={Stylist.info}>
                        <h2>
                            {posts.data.arr[0].judul}
                        </h2>
                        <p>{posts.data.arr[0].skor}</p>
                        <p>{posts.data.arr[0].produser}</p>
                        <p>{posts.data.arr[0].status}</p>
                        <p>{posts.data.arr[0].totaleps}</p>
                        <p>{posts.data.arr[0].studio}</p>
                        <p>{posts.data.arr[0].genre}</p>
                    </div>
                </div>
                <div className={Stylist.sinopsis}>
                    {posts.data.arr[0].sinopsis}
                </div>
                <div className={Stylist.epslist}>
                    {posts.data.arr[0].episodelist.map((eps)=>{
                        return <div className={Stylist.box} key={eps.id}>
                        <Link href={"/stream/"+eps.endpoint}>
                            <p>{eps.title}</p>
                        </Link>
                    </div>
                    })}
                </div>
            </Layout>
        </>
    )
}