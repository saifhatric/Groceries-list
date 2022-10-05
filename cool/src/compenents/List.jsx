import React from 'react'

import { FaTrash } from "react-icons/fa"

const ListItems = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul className="li-item">
            {Array.from(items).map((item, index) => (
                <li className="item" key={index} >
                    <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => handleCheck(item.id)}
                    />
                    <label onDoubleClick={() => handleCheck(item.id)}
                        style={(item.checked) ?
                            { textDecoration: "line-through" } : null}
                    >{item.item}</label>

                    <FaTrash className="trash"
                        role="button"
                        tabIndex="0"
                        onClick={() => handleDelete(item.id)} />
                </li>
            ))}
        </ul>
    )
}

export default ListItems;