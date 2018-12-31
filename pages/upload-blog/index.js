import React, { Component } from 'react';

import Router from 'next/router';

import axios from '../../axios';

class UploadBlog extends Component {
    state = {
        name: '',
        comment: '',
        yumFactor: 5,
        imageUrl: '',
        error: false,
        errorText: 'Something went wrong, try again!'
    }

    postDataHandler = () => {
        const data = {
            name: this.state.name,
            comment: this.state.comment,
            yumFactor: this.state.yumFactor,
            imageUrl: this.state.imageUrl
        };
        if (!this.state.name) {
            this.setState({error: true, errorText: 'Please supply a name!'});
        } else if (!this.state.imageUrl) {
            this.setState({error: true, errorText: 'Please supply an image!'});
        } else {
            axios.post('/cakes', data)
                .then(response => {
                    Router.push( '/' );
                })
                .catch(
                    error => {
                        this.setState({error: true});
                    }
                );
        }
    }

    render () {
        let title = <h1>Submit a Blog</h1>;
        if (this.state.error) {
            title = <h1 style={{color: 'red'}}>{this.state.errorText}</h1>;
        }
        return (
            <div>
                <style jsx>{`
                    div {
                        width: 80%;
                        margin: 20px auto;
                        border: 1px solid #eee;
                        box-shadow: 0 2px 3px #ccc;
                        text-align: center;
                    }

                    div label {
                        display: block;
                        margin: 10px auto;
                        text-align: center;
                        font-weight: bold;
                    }

                    div input,
                    div textarea,
                    div select {
                        display: block;
                        width: 80%;
                        box-sizing: border-box;
                        border: 1px solid black;
                        outline: none;
                        font: inherit;
                        margin: auto;
                    }

                    div button {
                        margin: 5px 0;
                        padding: 10px;
                        font: inherit;
                        border: 1px solid #fa923f;
                        background-color: transparent;
                        color: #fa923f;
                        cursor: pointer;
                    }

                    div button:hover,
                    div button:active {
                        color: white;
                        background-color: #fa923f;
                    }
                `}</style>
                {title}
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                <label>Comment</label>
                <textarea rows="4" value={this.state.comment} onChange={(event) => this.setState({comment: event.target.value})} />
                <label>URL</label>
                <input type="text" value={this.state.imageUrl} onChange={(event) => this.setState({imageUrl: event.target.value})} />
                <label>Yum Factor</label>
                <select value={this.state.yumFactor} onChange={(event) => this.setState({yumFactor: event.target.value})}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <button onClick={this.postDataHandler}>Submit</button>
            </div>
        );
    }
}

export default UploadBlog;
