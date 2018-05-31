import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component{

    state = { albums : [] };

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums(){
        return (

        <ScrollView>
            {
                this.state.albums.map(album =>
                <AlbumDetail key = {album.title} albumProps = {album}/>) 
            }
        </ScrollView>
    );
}

render(){
    console.log(this.state);
    return this.renderAlbums();
    }
}

export default AlbumList;