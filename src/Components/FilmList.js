import React from 'react';
import {get} from '../services/API.js';

export default class FilmList extends React.Component {
    
    state = {
        films: [],
        showMeOpening: true,
        showMeDate: true,
        showMeDirector: true,
        showMeProducer: true
    }
    
    componentDidMount () {
        get('https://swapi.co/api/films').then(res => {
            this.setState({ films: res.data.results.sort(function(a, b){
                if (a.episode_id < b.episode_id) return -1;
            }) })
        })
        
    }
    toggleInfo(info){
        switch(info){
            case 1:
                return this.setState({
                    showMeOpening:!this.state.showMeOpening
                })
            case 2:
                return this.setState({
                    showMeDate:!this.state.showMeDate
                })
            case 3:
                    return this.setState({
                        showMeDirector:!this.state.showMeDirector
                    })
            case 4:
                    return this.setState({
                        showMeProducer:!this.state.showMeProducer
                    })
        }
      }

    render() {
        return(
            <div id="layout">
                <div id="menu">
                    <div className="pure-menu">
                        <a className="pure-menu-heading" href="#">Wiki Wars</a>
                        <ul className="pure-menu-list">
                            <div className="button_cont" onClick={()=>this.toggleInfo(1)}><a href="#" className="pure-menu-link">Openig Crawl</a></div>
                            <div className="button_cont" onClick={()=>this.toggleInfo(2)}><a href="#" className="pure-menu-link">Release Date</a></div>
                            <div className="button_cont" onClick={()=>this.toggleInfo(3)}><a href="#" className="pure-menu-link">Director</a></div>
                            <div className="button_cont" onClick={()=>this.toggleInfo(4)}><a href="#" className="pure-menu-link">Producer</a></div>
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
                        <div id="Card-body" key={film.episode_id}>
                            <h3>{film.title}</h3>
                            {this.state.showMeOpening 
                                && <p>{film.opening_crawl}</p>
                            }
                            {this.state.showMeDate 
                                && <p><strong>Release Date:</strong> {film.release_date}</p>
                            }
                            {this.state.showMeDirector 
                                && <p><strong>Director:</strong> {film.director}</p>
                            }
                            {this.state.showMeProducer 
                                && <p><strong>Producer:</strong> {film.producer}</p>
                            }
                        </div>
                    ))}

                    </div>
                </div>
            </div>

        )
    }
}