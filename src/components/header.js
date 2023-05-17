import Link from 'next/link'
import logo from '../img/logo.svg'
import Image from 'next/image'
import styles from '../styles/header.module.css'
import { useRouter } from 'next/router'
import imagencarrito from '../img/carrito.png'

const Header = () => {
  const router = useRouter()
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
      <Link href='/'>
      <Image className='logo' src={logo} alt='imagen logotipo'/>

        </Link>


        <nav className={styles.navegacion}>
          <Link href='/' className={router.pathname === '/'?styles.active:''}>Inicio</Link>
          <Link href='/nosotros' className={router.pathname === '/nosotros'?styles.active:''}>Nosotros</Link>
          <Link href='/tienda' className={router.pathname === '/tienda'?styles.active:''}>Tienda</Link>
          <Link href='/blog' className={router.pathname === '/blog'?styles.active:''}>Blog</Link>
          <Link href={'/carrito'}>
            <Image width={30} height={25} src={imagencarrito} alt="imagen carrito"/>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
