import { useState } from "react"

export default function Player({ initialName, symbol, isActive }){
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(initialName)

    function flag(){
        setIsEditing((editing) => !editing);
    }

    function handleNameChange(event){
        console.log(event)
        setPlayerName(event.target.value)
    }

    return(
        <li className={isActive ? 'active' : undefined}>
            <span>
              {!isEditing ? <span className="player-name">{playerName}</span> : <input type="text" value={playerName} onChange={handleNameChange} required />}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={flag}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}