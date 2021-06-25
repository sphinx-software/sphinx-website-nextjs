import Head from 'next/head'
import { Layout } from '../layout'
import {CommunicationSection} from "../ui";
import RequestContact from "../components/Contact/RequestContact";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Sphinx Software</title>
                <meta name='description' content='Sphinx Software' />
                <link rel='icon' href='/symbolSphinx.svg' />
            </Head>
            <main>
                <Layout>
                    <RequestContact />
                    <CommunicationSection />
                </Layout>
            </main>
        </div>
    )
}
