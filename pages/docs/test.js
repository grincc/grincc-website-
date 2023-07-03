import Head from 'next/head'
import '../styles.css'

export default function Test() {
    return (
        <div>
            <Head>
                <title>Test Page</title>
                <link rel="stylesheet" href="/styles.css" />
            </Head>

            {/* Your JSX content here */}
        </div>
    )
}
