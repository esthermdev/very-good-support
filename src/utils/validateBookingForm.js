export const validateBookingForm = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!values.email.includes('@')) {
        errors.email = 'Email should contain @.'
    }

    if (isNaN(values.phoneNumber)) {
        errors.phoneNumber = 'Should contain only numbers.'
    }

    return errors;
};