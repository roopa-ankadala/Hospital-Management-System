
const form = document.getElementById("patientForm");
const table = document.getElementById("patientTable");

let patients = [];
let patientId = 1;

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const disease = document.getElementById("disease").value;

    patients.push({
        id: patientId++,
        name: name,
        age: age,
        gender: gender,
        disease: disease
    });

    displayPatients();

    form.reset();
});

function displayPatients() {

    table.innerHTML = "";

    patients.forEach((patient, index) => {

        table.innerHTML += `
            <tr>
                <td>${patient.id}</td>
                <td>${patient.name}</td>
                <td>${patient.age}</td>
                <td>${patient.gender}</td>
                <td>${patient.disease}</td>
                <td>
                    <button
                        class="delete-btn"
                        onclick="deletePatient(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

function deletePatient(index) {

    patients.splice(index, 1);

    displayPatients();
}
