import React from 'react'

export default function Input(pros) {
    return (
        <input type='text' value={pros.value} onChange={pros.changed} ></input>
    )
}
