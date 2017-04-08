import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

//Libraries installed with NPM don't need a relative path
//Otherwise, for files that we create we have to give it the relative path
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//allows us to make requests to get videos from YouTube
const API_KEY = 'AIzaSyDcflYPSzfSuC0nRRvPcpAqJMGbHrwLkNQ';

class App extends Component
{
    constructor(props)
    {
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null
        };
        
        this.videoSearch('cats being funny');
    }
    
    videoSearch(term)
    {
        YTSearch({key: API_KEY, term: term}, (videos) =>
        {
            //when the property and the key name are the same you can 
            //condense the reference...it is similar to videos: videos.
            this.setState({
                videos : videos,
                selectedVideo: videos[0]
            });
        });
    }
    
    render()
    {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        
        return (
            <div className="search-bar">
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video= {this.state.selectedVideo}/>
                <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                videos= {this.state.videos} />
            </div>
        );   
    }
   
}

// Take this component's generated HTML and put it in the DOM (on the page.)
ReactDom.render(<App />, document.querySelector('.container'));



// "const" is an ES6 syntax - const means constant, similar to static  
// where the function or value DOES NOT change.

//"fat arrow" or => denotes assignment to a function
//Functional component means it does not track state