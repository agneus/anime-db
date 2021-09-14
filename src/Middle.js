import React from 'react'
import Card from './Card'

function Middle(props) {
    return (
    <main>
        <div className="main-head">
            <form action="" className="search-box" onSubmit={props.HandleSearch}>
                <input type="search" 
                placeholder='search for something'
                required
                value= {props.search}
                onChange={e => props.SetSearch(e.target.value)}
                />
                <button type='submit' class='real_button'>Search</button>
            </form>
        </div>
        <div className="anime-list">
            {props.animeList.map(anime =>(
                <div className="anime-card">
                    <Card
                            anime= {anime}
                            key={anime.mal_id}
                            />
                </div>
            ))}
        </div>
    </main>
    )
}

export default Middle
