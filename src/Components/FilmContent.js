import React from 'react';

import { get } from '../services/API.js';

import SideMenu from './SideMenu'

export default class FilmContent extends React.Component {
    
    state = {
        films: [],
        showMeOpening: true,
        showMeDate: true,
        showMeDirector: true,
        showMeProducer: true,
        loading: false
    }
    
    componentDidMount () {
        this.requestFilms()
    }

    requestFilms = async () => {
        this.setState({ loading: true })

        try {
            const { data } = await get('https://swapi.co/api/films');

            this.setState({
                films: data.results.sort(function(a, b) {
                    if (a.episode_id < b.episode_id) return -1;
                }),
                loading: false
            })
        } catch (err) {

        }
    }

    toggleInfo = (info) => {
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
            <div className="content"> 
                <SideMenu toggleInfo={this.toggleInfo} />

                {this.state.loading && <p>Loading...</p>}

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
        )
    }
}