import {Layout} from "../src/components/Layout";
import '/src/styles/global.css'
import {Inter} from '@next/font/google'

const inter = Inter()

function MyApp({Component, pageProps}) {
    return (
        <>
            <style jsx global>{`
              html {
                font-family: ${inter.style.fontFamily};
              }
            `}</style>
            <Layout className={inter.className}>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
