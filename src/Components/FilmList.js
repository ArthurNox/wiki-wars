import React from 'react';

import axios from 'axios';

export default class FilmList extends React.Component {
    state = {
        films: []
    }
    
   async componentDidMount () {
        axios.get('https://swapi.co/api/films').then(res => {
            console.log(res)
            this.setState({ 
                films: [res.data] 
            })
        })
    }

    render() {
        return(
            <ul>
                { this.state.films.map(film => <li>{film.title}</li>)}
            </ul>
        )
    }
}