const form = document.getElementsByTagName("form")[0];


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name");
    let number = document.getElementById("number");

    createContact(name.value,number.value);

    name.value = "";
    number.value = ""; 
})

function createContact(name,number) {
    const tbody = document.getElementsByTagName("tbody")[0];
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${name}</td><td>${number}</td>`;

    tbody.appendChild(tr);

}