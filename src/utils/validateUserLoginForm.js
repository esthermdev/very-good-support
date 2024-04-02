export const validateUserLoginForm = (values) => {
    const errors = {}

    const regex = new RegExp('^(?=.*[0-9].*[0-9])[A-Za-z0-9]{6,}$');

    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length < 6) {
        errors.username = 'Username must be at least 6 characters long.'
    } else if (values.username.length > 15) {
        errors.username = 'Username must not be more than 15 characters long.'
    } 

    if (!values.password) {
        errors.password = 'Required'
    } else if (!regex.test(values.password)) {
        errors.password = 'Password must be at least 6 characters containing at least 2 numbers.'
    } 

    return errors;
}