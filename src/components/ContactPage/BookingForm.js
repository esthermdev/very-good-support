import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Label, Col, FormGroup } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';


const BookingForm = () => {

    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                agree: false,
                contactType: '',
                messageField: '',
                date: new Date(),
                time: '',
                period: 'AM'
            }}
            onSubmit={handleSubmit}
        >
            <Form>

                <FormGroup row className="justify-content-center">
                    <Col lg='5'>
                        <Label htmlFor='firstName'>
                            <strong>First Name</strong>
                        </Label>
                        <Field
                            name='firstName'
                            placeholder='First Name'
                            className='form-control'    
                        />
                    </Col>
                    <Col lg='5'>
                        <Label htmlFor='lastName'>
                        <strong>Last Name</strong>
                        </Label>
                        <Field
                            name='lastName'
                            placeholder='Last Name'
                            className='form-control'    
                        />
                    </Col>
                </FormGroup>

                <FormGroup row className="justify-content-center">
                    <Col lg='5'>
                        <Label htmlFor='email'>
                            <strong>Email</strong>
                        </Label>
                        <Field
                            name='email'
                            type='email'
                            placeholder='example@email.com'
                            className='form-control'    
                        />
                    </Col>
                    <Col lg='5'>
                        <Label htmlFor='phoneNumber'>
                            <strong>Phone Number</strong>
                        </Label>
                        <Field
                            name='phoneNumber'
                            placeholder='123-321-1234'
                            className='form-control'    
                        />
                    </Col>
                </FormGroup>

                <FormGroup row className="justify-content-center">
                    <Col lg='5' className='mt-3 text-end'>
                        <Label check>
                            <Field 
                                name='agree'
                                type='checkbox'
                                className='form-check-input'
                            />{' '}
                            May I reach you?
                        </Label>
                    </Col>
                    <Col lg='5'>
                        <Field
                            name='contactType'
                            as='select'
                            className='form-control'
                        >
                            <option>By Phone</option>
                            <option>By Email</option>
                        </Field>
                    </Col>
                </FormGroup>

                <FormGroup row className="justify-content-center">
                    <Col lg='10' className='mb-2'>
                        <strong>Schedule</strong>
                    </Col>
                    <Col lg='5'>
                        <Label htmlFor='date'>
                            Date
                        </Label>
                        <Field
                            name='date'
                            type='date'
                            className='form-control'    
                        />
                    </Col>
                    <Col lg='5'>
                        <Label htmlFor='time'>
                                Time
                        </Label>
                        <Field
                            name='time'
                            type='time'
                            className='form-control'    
                        />
                    </Col>
                </FormGroup>

                <FormGroup row className="justify-content-center">
                    <Col lg='10'>
                        <Label>
                            <strong>Leave a Message</strong>
                        </Label>
                    </Col>
                    <Col lg='10'>
                        <Field 
                            name='messageField'
                            as='textarea'
                            rows='8'
                            className='form-control'
                        />
                    </Col>
                </FormGroup>

                <FormGroup row className="justify-content-center">
                    <Col lg='10'>
                        <Button type='submit' color='primary'>
                            Submit
                        </Button>
                    </Col>
                </FormGroup>

            </Form>
        </Formik>
    );
}

export default BookingForm;