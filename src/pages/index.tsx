import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });
fetch('https://dummyjson.com/products')
	.then((res) => res.json())
	.then(console.log);
export default function Home() {
	return (
		<>
			<Head>
				<title>EZ-Commerce</title>
			</Head>
		</>
	);
}
