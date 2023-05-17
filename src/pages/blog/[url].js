import Layout from '@/components/Layout'
import Image from 'next/image'
import styles from '../../styles/blog.module.css'
import { formatearFecha } from '@/utils/helpers'
const Post = ({post}) => {
    const {titulo,imagen,contenido,publishedAt} = post[0].attributes
  return (
      <Layout
        title={titulo}
      >
        <article className={`${styles.post} ${styles['nt-3']}`}>
      <Image src={imagen.data.attributes.url} width={600} height={400} alt={`imagen blog ${titulo}`} />
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{contenido}</p>
        </div>
    </article>
      </Layout>
  )
}

export async function getServerSideProps({query:{url}}){
    const respuesta = await fetch(`${process.env.API_URL}/blog?filters[url]=${url}&populate=imagen`)
    const {data:post} = await respuesta.json()
    return {
        props:{
            post
        }
    }
}

export default Post
