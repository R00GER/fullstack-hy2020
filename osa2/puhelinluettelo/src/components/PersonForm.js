import React from 'react'

const PersonForm = (props) => {
    
    return (
        <form>
        <div>
          name:
          <input
            id="nameInput"
            onChange={props.nameChange}
            value={props.nameValue}
            onClick={props.clear}
          />
        </div>
        <div style={{ marginTop: 5 }}>
          number:
          <input
            id="numberInput"
            onChange={props.numberChange}
            value={props.numberValue}
            onClick={props.clear}
          />
        </div>
        <div>
          <button type="submit" onClick={props.click}>
            add
          </button>
        </div>
      </form>
    )
};

export default PersonForm