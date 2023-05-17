import Link from "next/link"
import Image from "next/image"
import ImagenNosotros from '../img/nosotros.jpg'
import Layout from "@/components/Layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros(){
  return (
    <Layout 
        title="Nosotros"
        description="sobre nosotros, guitarLA tienda de música"
    >
      <main>
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image alt="Imagen sobre nosotros" src={ImagenNosotros} width={1000} height={800}/>
          <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec magna velit. Aenean sed commodo dui. Nulla ac interdum lectus. Donec lobortis tellus id tincidunt faucibus. Phasellus lacus ante, dignissim ac suscipit ut, pretium vel dui. In ut varius erat. Donec et erat quis ante consectetur commodo. Donec at euismod ligula.
            </p>
            <p>
            Aliquam id lacinia sem, non imperdiet purus. Quisque commodo nibh eget enim placerat, eu facilisis libero tincidunt. Nunc ultrices mi non purus dignissim, vel luctus orci vehicula. Mauris ex metus, blandit in metus sit amet, hendrerit tristique ex. Etiam tortor purus, egestas in mauris non, maximus varius nulla.
            </p>
          </div>
        </div>
      </main>
      <Link href="/">regreso</Link>
    </Layout>
  )
}