import { useState, useEffect } from 'react';
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom';
import OkezoneList from './OkezoneList'

const Okezone = () => {
    let match = useRouteMatch()

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
                console.log(res.listApi['Okezone News']);
                setList(res.listApi['Okezone News'].listType)
                setisLoading(false)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h2 className="text-center mt-3">Kategori Berita Okezone</h2>
            <nav>
                <ul className="nav justify-content-center">
                {/* <li><NavLink to={`${match.url}/economy`}>Ekonomi</NavLink></li>
                <li><NavLink to={`${match.url}/sport`}>Olahraga</NavLink></li>
                <li><NavLink to={`${match.url}/lifestyle`}>Lifestyle</NavLink></li> */}
                    {isLoading && <p>Loading...</p>}
                    {!isLoading && list && list.map((news, i) => (
                        <li key={i}><NavLink className="nav-link" to={`${match.url}/${news}`}>{news}</NavLink></li>
                    ))}
                </ul>
            </nav>
            <hr />
            <Switch>
                <Route path={`${match.path}/:type`}>
                <OkezoneList />
                </Route>
                {/* <Route path={match.path}>
                <p>Random Anime</p>
                </Route> */}
            </Switch>
        </div>
    )
}

export default Okezone
