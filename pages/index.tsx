import Head from 'next/head';
import Button from '../components/button';
import globalStyles from '../styles/global';

const HomePage = () => {
    return <>
        <Head><style jsx global>
            {globalStyles}
        </style>
        </Head>
        <div>Welcome to Next.js!<Button /></div>
    </>
}

export default HomePage;
