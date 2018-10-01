import React from 'react';
import axios from 'axios';

class Spotify extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            search_term: ''
        }
    }

    trackSearchTerm(event) {
        var search_term = event.target.value;
        // console.log(`[Spotify.jsx] ${search_term}`);

        this.setState({
            search_term: search_term
        });
    }

    searchSpotify() {
        axios.get(`/spotify/search/${this.state.search_term}`)
            .then(function(res) {
                // debugger;
                console.log(res.data);
            })
            .catch(function(err) {
                console.log(`[Spotify.jsx] search error: ${err}`);
            });
    }

    render() {
        return (
            <div className="spotify_modal">
                <div className="spotify_wrapper">
                    <div className="close_form">
                        <span onClick={this.props.hideSpotify}>[🗙]</span>
                    </div>
                    <h3>search Spotify</h3>
                    <div className="spotify_input">
                        <input type="text" onChange={ (event) => this.trackSearchTerm(event) }/>
                        <button onClick={() => this.searchSpotify()}>Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Spotify;