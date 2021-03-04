
# useForm Hook

Ejemplo de uso:


```
    const initialForm = {
        name:'',
        age:0,
        email:''
    }
    const [value, handleInputChange, reset] = useForm(initialForm)
```

Example -- Simple form 

```

import React from 'react'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    // Call useForm Hook
    const [formValues, handleInputChange]  = useForm({
        email: 'nando@gmail.com',
        password: 123456
    })

    // Extrac form values and use it into JSX
    const {email, password} = formValues

    // Get values from the form...
    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email, password)
    }

    return (
        <div>
            <h3>Login</h3>
            <form onSubmit= {handleLogin}>
                <input
                    type='text'
                    placeholder='Email'
                    name='email'                        // Necessesary value to use Form!!
                    autoComplete='off'
                    value = { email }                   // Necessesary value to use Form!!
                    onChange = { handleInputChange }    // Necessesary value to use Form!!
                    />
                <input
                    type='password'
                    placeholder='Password'
                    name='password'                     // Necessesary value to use Form!!
                    value = { password }                // Necessesary value to use Form!!
                    onChange = { handleInputChange }    // Necessesary value to use Form!!
                />
                <button 
                    type='submit'
                >
                    Login
                </button>
            </form>
        </div>
    )
}

```

Form the above example the input has a atrivute name and value, these atributes should have the same name!!
