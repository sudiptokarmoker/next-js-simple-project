import { server } from '../config';
import Head from 'next/head'
import ArticleList from '../components/ArticleList';
//const jwt = require('jsonwebtoken');

export default function Home({articles}) {
  //console.log(jwt.sign({ foo: 'bar' }, 'shhhhh'));
  return (
    <div> 
      <Head>
        <title>Welcome to Nextjs Apps - Sudipto</title>
        <meta name="keyword" content="web developing, programming"/>
      </Head>
      <ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
}

// here we are fetching data
/*
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
}
*/