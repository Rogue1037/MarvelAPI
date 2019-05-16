import React from "react";
import "./ResultList.css"

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
        <div>
        <img alt={result.name} className="img-fluid" src={result.thumbnail.path + "/portrait_fantastic.jpg"} />
        </div>
        <div className="name">{result.name}</div>
        <br />
        <div className="description">{result.description}</div>
        <div className="comics">
        <a href="https://www.marvel.com/explore">{result.comics.items[0].name}</a>
        </div>
      </li>
      ))}
    </ul>
  );
}

export default ResultList;