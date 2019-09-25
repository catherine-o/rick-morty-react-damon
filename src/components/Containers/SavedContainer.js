import React, { Component } from 'react'
import Card from '../Cards/Card'

export default function SavedContainer({savedCharacters, characterAction, setActiveCard}) {
    
    const characterCards = savedCharacters.map(character => (
        <Card 
            character={character} 
            characterAction={characterAction}
            savedCharacters={savedCharacters}
            setActiveCard={setActiveCard}
            key={Math.random() * savedCharacters.length} />
    ))

    return (
        <div className='card-container'>
            {characterCards}
        </div>
    )
}
