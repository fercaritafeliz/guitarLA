import Layout from '@/components/Layout'
import styles from '../styles/grid.module.css'
import Guitarra from '@/components/guitarra'
import Post from './post'
import Curso from '@/components/curso'

export default function Home({guitarras,posts,curso}) {
  return (
    <>
    <Layout
      title='Inicio'
      description='Blog de música, venta de guitarras y más'
    >
      <main className='contenedor'>
        <h1 className="heading">nuestra Colección</h1>
        <div className={styles.grid}>
        {guitarras.map((guitarra)=>
        (
            <Guitarra 
              key={guitarra.id}
              guita={guitarra.attributes}
            />
        )
        )}
        </div>
      </main>
      <Curso
        curso={curso.attributes}
      />
      <section className='contenedor'>
        <h2 className='heading'>Blog</h2>
      </section>
      <div className={styles.grid}>
          {posts.map(post=>(
            <Post
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>

    </Layout>
    </>
  )
}

export async function getStaticProps(){
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/blog?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`
  const [resGuitarras,resPosts,rescurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso),

  ])
  const [{data:guitarras},{data:posts},{data:curso}]=await Promise.all([
    
    resGuitarras.json(),
    resPosts.json(),
    rescurso.json()
  ])
  return {
    props:{
      guitarras,posts,curso
    }
  }

}