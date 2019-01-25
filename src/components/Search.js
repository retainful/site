import React, { Component } from 'react';
import {MdSearch} from 'react-icons/md';

class Search extends Component {
    render() {
        return (
            <div className="search-docs">
                <form>
                    <div className="input-text-wrap is-search">
                        <MdSearch className="search-icon" />
                        <input type="text" id="query" placeholder="What are you looking for?" autoComplete="off" className="form-control search-hero__query search-query st-default-search-input" name="q" />
                        <input type="button" value="Search" className="input-btn" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;