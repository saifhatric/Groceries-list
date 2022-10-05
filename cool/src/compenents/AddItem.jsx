import React from 'react'
import { useRef } from 'react';
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef()

    return (
        <form className='addForm'
            onSubmit={handleSubmit}>
            <label
                htmlFor='addItem'
                style={{ margin: "0 5px" }}>add item :</label>
            <input
                autoFocus
                ref={inputRef}
                type="text"
                className="inp"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="add an item"
                required />
            <button
                id="add-btn"
                type='submit'
                onClick={() => inputRef.current.focus()}>
                <FaPlus /></button>




        </form>
    )
}

export default AddItem;