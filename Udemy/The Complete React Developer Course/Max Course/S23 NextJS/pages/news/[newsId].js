import {useRouter} from 'next/router'
const Details = () => {
    const router = useRouter() ; 
    console.log(router.query.newsId)
    return <h1> Welcome in Details Page </h1>
}

export default Details ; 