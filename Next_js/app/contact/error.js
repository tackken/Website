'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({error, reset}) {
    return (
        <div>
            This ain't loading up: {error.message}
            <button onClick={() => reset()}>reload</button>
        </div>
    )
}