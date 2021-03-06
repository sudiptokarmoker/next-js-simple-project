import { server } from '../../../config';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Article = ({article}) => {
    const router = useRouter()
    const { id } = router.query

  return(
    <>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br/>
        <Link href='/'>Go back</Link>
    </>
  )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/posts/${context.params.id}`)
    const article = await res.json()
    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/posts`)
    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

export default Article