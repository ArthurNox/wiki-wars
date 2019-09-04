import React from 'react';
import axios from 'axios';

export default class FilmList extends React.Component {
    state = {
        films: []
    }
    
    componentDidMount () {
        axios.get('https://swapi.co/api/films').then(res => {
            const films = res.data.results
            this.setState({ films })
        })
    }

    render() {
        return(
            <div id="layout">
                <div id="menu">
                    <div class="pure-menu">
                        <a class="pure-menu-heading" href="#">Star Wars Wiki</a>

                        <ul class="pure-menu-list">
                            <li class="pure-menu-item"><a href="#" class="pure-menu-link">opening_crawl </a></li>
                            <li class="pure-menu-item"><a href="#" class="pure-menu-link">director </a></li>
                            <li class="pure-menu-item"><a href="#" class="pure-menu-link">release_date </a></li>
                        </ul>
                    </div>
                </div>
                   
                <div id="main">
                    <header>
                        <h1>Star Wars WIKI</h1>
                        <h2>A guide to Star Wars Franchise</h2>
                    </header>
                    <div class="content">
                    { this.state.films.map((film) =>(
                        <div className="Card-body">
                            <h5>{film.title}</h5>
                            <h6>{film.opening_crawl }</h6>
                        </div>
                    ))}

                    </div>
                </div>
            </div>

        )
    }
}