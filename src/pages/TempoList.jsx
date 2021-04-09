import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Card, Button, CardTitle, CardText, Spinner} from 'reactstrap';


const TempoList = () => {
    let params = useParams();

    const [tempoList, setTempoList] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const url = `https://berita-indo-api.vercel.app/v1/tempo-news/${params.type}`

    useEffect(() => {  
        getData(url)
    }, [url])

    const getData = (url) => {
        setIsLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setTempoList(res.data)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <h4>Kategori: {params.type}</h4>
            {/* <ul>
                {isLoading && <p>Loading......</p>}
                {!isLoading && tempoList && tempoList.map((news, i) => (
                <li key={i}>{news.title}</li>
                ))}
            </ul> */}
            <div className="row">
            {isLoading && <Spinner color="primary" />}
            {!isLoading && tempoList && tempoList.map((news, i) => (
                <div className="col-3" key={i}>
                    <Card body>
                        <CardTitle tag="h5">{news.title}</CardTitle>
                        <CardText>{news.content}</CardText>
                        <Button href={news.link} color="primary">See more</Button>
                    </Card>
                </div>
            ))}
            </div>
        </>
    )
}

export default TempoList
