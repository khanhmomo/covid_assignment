import { RegisterInput } from "../RegisterInput";

export const validateRegisterInput = (registerInput: RegisterInput) => {
    if (!registerInput.email.includes('@'))
    return {
        message: 'Invalid Email',
        errors: [
            {field: 'email', message: 'Email must include @'}
        ]
    }

    if (registerInput.username.length <= 2)
    return {
        message: 'Invalid username',
        errors: [
            {field: 'username', message: 'Length must be greater than 2'}
        ]
    }
    if (registerInput.username.includes('@'))
    return {
        message: 'Invalid username',
        error: [
            {field: 'username', message: 'Username cannot include @'}
        ]
    }

    if (registerInput.password.length <= 2)
    return {
        message: 'Invalid password',
        errors: [
            {field: 'password', message: 'Length must be greater than 2'}
        ]
    }

    return null
}