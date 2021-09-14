import React from 'react'

function Card({anime}) {
    console.log(anime);
    return (
        <article class='card'>
            <a href={anime.url} target="_blank" rel="noreferer">
                <figure>
                    <img src={anime.image_url} alt="Image" />
                </figure>
                <h3 class='red'>{anime.title}</h3>
                <h3 class='blue'>MAL Score: {anime.score}</h3>
                <h3 class='blue'>Episodes: {anime.episodes}</h3>
                <h3 class='blue'>Rated: {anime.rated}</h3>
                <h3 class='blue'>MAL Fandom Size: {anime.members}</h3>    
            </a>
        </article>
    )
}

export default Card
