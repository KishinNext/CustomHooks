import React, {useState, useEffect, useRef} from 'react'

export const useFetch = (url) => {
    
    const isMounted = useRef(true)
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {
        return () =>{
            isMounted.current = false
        }
    }, [])

    useEffect( () => {

        setState({
            data: null,
            loading: true,
            error: null
        })
        const tareas = async () =>{
            try {
                const res = await fetch(url)
                const data = await res.json()
                
 
                if(isMounted.current){
                    setState({
                        loading: false,
                        error: null,
                        data: data
                    })
                }
                    
 
            } catch (error) {
                setState({
                    loading: false,
                    error: 'No se pudo cargar la info',
                    data: null
                })
            }
        }
        tareas()

    }, [url])

    return state
}
