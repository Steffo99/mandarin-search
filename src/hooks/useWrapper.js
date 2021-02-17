import React, {useState} from "react"


export default function useWrapper(tag, func) {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function wrapped() {
        console.debug(`[${tag}] Starting search...`)
        setLoading(true)
        try {
            await func()
        } catch (err) {
            console.error(err)
            setError(err)
        } finally {
            console.debug(`[${tag}] Completed search.`)
            setLoading(false)
        }
    }

    return {wrapped, isLoading, error}
}