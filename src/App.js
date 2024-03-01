import PatientCard from "./PatientCard";

const patientList = [
    {
        id: 0,
        firstName: "Deb",
        lastName: "Lin",
        dateOfBirth: "25/08/1995",
        email: "deb.patient@example.com",
    },
    {
        id: 1,
        firstName: "Jon",
        lastName: "Lee",
        dateOfBirth: "22/03/1994",
        email: "jon.patient@example.com",
    },
    {
        id: 2,
        firstName: "Phil",
        lastName: "Devdas",
        dateOfBirth: "25/05/1963",
        email: "phil.patient@example.com",
    },
    {
        id: 3,
        firstName: "Mel",
        lastName: "Lim",
        dateOfBirth: "11/06/1961",
        email: "mel.patient@example.com",
    }
]

function App() {
    return (
        <div>
            <h1>My Patients</h1>
            {patientList.map( p => (
                <PatientCard patient={p}/>
            ))}
        </div>
    );
}

export default App;
