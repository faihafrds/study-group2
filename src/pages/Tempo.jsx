import { useState, useEffect } from 'react';
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom';
import TempoList from './TempoList'

const Tempo = () => {
    let match = useRouteMatch();

    const [list, setList] = useState(null)
    const [isLoading, setisLoading] = useState(false)

    const url = `https://berita-indo-api.vercel.app/`

    useEffect(()=>{
        getData(url)
    }, [url])
    
    const getData = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res.listApi['Tempo News']);
                setList(res.listApi['Tempo News'].listType)
                setisLoading(false)
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <h2 className="text-center mt-3">Kategori Berita Tempo</h2>
            <nav>
                <ul className="nav justify-content-center">
                    {/* <li className="nav-item"><NavLink className="nav-link" to={`${match.url}/nasional`}>Nasional</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to={`${match.url}/bisnis`}>Bisnis</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to={`${match.url}/metro`}>Metro</NavLink></li> */}
                    {isLoading && <p>Loading...</p>}
                    {!isLoading && list && list.map((news, i) => (
                        <li key={i}><NavLink className="nav-link" to={`${match.url}/${news}`}>{news}</NavLink></li>
                    ))}
                </ul>
            </nav>
            <hr />
            <Switch>
                <Route path={`${match.path}/:type`}>
                <TempoList />
                </Route>
                {/* <Route path={match.path}>
                <p>Random Anime</p>
                </Route> */}
            </Switch>

        </>
    )
}

export default Tempo
