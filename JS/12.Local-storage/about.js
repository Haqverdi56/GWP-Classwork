let userData = JSON.parse(localStorage.getItem("personObj"));


renderTable(userData);

function renderTable(userData) {
  // Create
  let table = document.querySelector("table");
  let tbody = document.querySelector("tbody");

  userData.forEach((data) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${data.id}</td>
        <td>${data.firstName}</td>
        <td>${data.lastName}</td>
        <td>${data.address}</td>
    `;
    tbody.append(tr);
  });

  // Table add to html
  table.appendChild(tbody);
}
