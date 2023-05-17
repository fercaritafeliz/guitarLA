import Link from "next/link"
import Layout from "@/components/Layout"
import Post from "./post"
import styles from '../styles/grid.module.css'

const Blog = ({posts}) => {
  return (
    <Layout 
        title="Blog"
        description="blog de musica, venta de guitarras, consejos, GuitarLA"
    >
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        <div className={styles.grid}>
          {posts.map(post=>(
            <Post
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>
      </main>
      <Link href="/">regreso</Link>
    </Layout>
  )
}
export async function getStaticProps(){
  const respuesta = await fetch(`${process.env.API_URL}/blog?populate=imagen`);
  const {data:posts} = await respuesta.json();
  return {
    props:{
      posts
    }
  }
}

export default Blog

