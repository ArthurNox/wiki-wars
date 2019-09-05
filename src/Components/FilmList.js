import React from 'react';
import axios from 'axios';

export default class FilmList extends React.Component {
    state = {
        films: []
    }
    
    componentDidMount () {
        axios.get('https://swapi.co/api/films').then(res => {
            this.setState({ films: res.data.results.sort(function(a, b){
                if (a.episode_id < b.episode_id) return -1;
            }) })
        })
    }

    render() {
        return(
            <div id="layout">
                <div id="menu">
                    <div className="pure-menu">
                        <a className="pure-menu-heading" href="#">Wiki Wars</a>

                        <ul className="pure-menu-list">
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">opening_crawl </a></li>
                            <li className="pure-menu-item"><a href="#" className="pure-menu-link">director </a></li>
                            <li className="pure-menu-item"><a href="#" value="release_date" className="pure-menu-link">release_date </a></li>
                        </ul>
                    </div>
                </div>
                   
                <div id="main">
                <div className="header">
                    <h1>Star Wars Wiki</h1>
                    <h2>A Guide to the Star Wars Film Franchise</h2>
                </div>

                    <div className="content">
                    { this.state.films.map((film) => (
                        <div className="Card-body" key={film.episode_id}>
                            <h4>Title: {film.title}</h4>
                            <h6>{film.opening_crawl}</h6>
                            <h6>Director: {film.director}</h6>
                            <h6>Release Date: {film.release_date}</h6>
                        </div>
                    ))}

                    </div>
                </div>
            </div>

        )
    }
}