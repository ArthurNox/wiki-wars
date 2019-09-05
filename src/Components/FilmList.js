import React from 'react';
import axios from 'axios';

export default class FilmList extends React.Component {
    
    state = {
        films: [],
        showMe: false
    }
    
    componentDidMount () {
        axios.get('https://swapi.co/api/films').then(res => {
            this.setState({ films: res.data.results.sort(function(a, b){
                if (a.episode_id < b.episode_id) return -1;
            }) })
        })
    }
    operation(){
        if(this.state.showMe == false){
            this.setState({showMe: true})
        }else{
            this.setState({showMe: false})
        }
      }

    render() {
        return(
            <div id="layout">
                <div id="menu">
                    <div className="pure-menu">
                        <a className="pure-menu-heading" href="#">Wiki Wars</a>

                        <ul className="pure-menu-list">
                            <div className="button_cont" onClick={()=>this.operation()}><a href="#" class="pure-menu-link">Openig Crawl</a></div>
                            <div className="button_cont" onClick={()=>this.operation()}><a href="#" class="pure-menu-link">Director</a></div>
                            <div className="button_cont" onClick={()=>this.operation()}><a href="#" class="pure-menu-link">Release Date</a></div>
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
                            <h3>{film.title}</h3>
                            {this.state.showMe 
                                ? <p>{film.opening_crawl}</p>
                                : null
                            }
                            <p><strong>Director:</strong> {film.director}</p>
                            <p><strong>Release Date:</strong> {film.release_date}</p>
                        </div>
                    ))}

                    </div>
                </div>
            </div>

        )
    }
}