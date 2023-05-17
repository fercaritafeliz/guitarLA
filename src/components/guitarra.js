import Image from "next/image"
import Link from "next/link"
import styles from '../styles/guitarras.module.css'
const Guitarra = ({guita}) => {

  const {descripcion,imagen,nombre,precio,url}=guita
  // console.log(descripcion,imagen,nombre,precio,url,'hola')
  return (
    <div className={styles.guitarra}>
      <Image 
        src={imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Imagen guitarra ${nombre}`}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`}>
        <p className={styles.enlace}>
          ver producto
        </p>
        </Link>
      </div>
    </div>
  )
}

export default Guitarra

