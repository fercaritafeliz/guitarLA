import Layout from "@/components/Layout"
import Link from "next/link"

const pagina404 = () => {
  return (
    <Layout
        title="Página no encontrada"
    >
        <p className="error">Página no encontrada</p>
        <Link className="error-enlace" href={'/'}>
            Ir a inicio
        </Link>
    </Layout>
  )
}

export default pagina404
