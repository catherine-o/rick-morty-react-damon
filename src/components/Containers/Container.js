import React, {useState} from 'react'
import SavedContainer from './SavedContainer'
import CardContainer from './CardContainer'
import Card from '../Cards/Card'
import './Container.css'

export default function Container({characters, savedCharacters, saveCharacter, removeCharacter}) {
    const [activeCard, setActiveCard] = useState(null)

    return (
        <div className='container'>
            <SavedContainer 
                setActiveCard={setActiveCard}
                savedCharacters={savedCharacters} 
                characterAction={removeCharacter} />
            <CardContainer 
                characters={characters} 
                setActiveCard={setActiveCard} 
                characterAction={saveCharacter}
                savedCharacters={savedCharacters} />
            {activeCard ?  <Card character={activeCard}  activeCard={true} setActiveCard={setActiveCard} /> : null }
        </div>
    )
}
