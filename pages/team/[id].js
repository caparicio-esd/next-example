import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


const id = () => {
    const todos = useSelector((state) => state.todo)
    const { query } = useRouter()

    useEffect(() => {
        console.log("hola...");
    }, [query])

    return (
        <div>
            estamos en el todo: {todos[query.id]}
        </div>
    )
}

export default id