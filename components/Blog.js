import React from 'react';

const blog = (props) => (
	<div onClick={props.clicked}>
		<style jsx>{`
			div {
			    width: 200px;
			    height: 200px;
			    padding: 16px;
			    text-align: center;
			    border: 1px solid #eee;
			    box-shadow: 0 2px 3px #ccc;
			    margin: 10px;
			    box-sizing: border-box;
			    cursor: pointer;
			    overflow: hidden;
			}
			div:hover,
			div:active {
			    background-color: #CCCCCC;
			}
			div img {
			    width: 150px;
			    max-height: 150px;
			    min-height: 150px;
			}
			div .Name {
			    margin: 0;
			    color: #000;
			}
		`}</style>
   		<img src={props.imageUrl} alt={props.name} />
    	<p className="Name">{props.name}</p>
    </div>
);

export default blog;