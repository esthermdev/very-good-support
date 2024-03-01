function PatientCard(props) {
    
    return (
        <div className="bg-light border p-4 m-2">
            <h5>Patient ID: {props.patient.id}</h5>
            <h5>Name: {props.patient.firstName} {props.patient.lastName}</h5>
            <p>D.O.B: {props.patient.dateOfBirth}</p>
            <p>Email: {props.patient.email}</p>
        </div>
    );

}

export default PatientCard