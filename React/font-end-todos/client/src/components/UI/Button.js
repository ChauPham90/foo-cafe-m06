import React from 'react'

export default function Button(pros) {
    return (
        <button onClick={pros.clicked}>{pros.children}</button>
    )
}
