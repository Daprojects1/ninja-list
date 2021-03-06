import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

const NotFound = () => {
    const Router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            Router.replace("/")
        }, 3000)
    }, [])
    return (
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>That page cannot be found ...</h2>
            <p>Go back to <Link href="/"><a className="home-link">HomePage</a></Link></p>
        </div>
    )
}

export default NotFound