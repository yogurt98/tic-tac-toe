import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //   setIsEditing(isEditing? false : true);
    // setIsEditing(!isEditing);
    setIsEditing((editing) => !editing);
    onChangeName(symbol, playerName)
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
    console.log(playerName);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = "Edit";
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
      ></input>
    );
    // btnCaption = 'Save';
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {/* {!isEditing && <span className="player-name">{name}</span>}
          {isEditing && <input></input>} */}
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      {/* <button onClick={() => {handleEditClick()}}>Edit</button> */}
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
