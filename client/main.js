// The following code appends a title to the page
// document.createElement creates an element that can be altered and then inserted into the DOM
// document.body.appendChild places a node as a child under the body element
var title = document.createElement("div");
title.innerHTML = "James Scaggs - Codesmith Calendar";
document.body.appendChild(title);
title.setAttribute("class", "title");

let table = document.createElement("table");
table.setAttribute("class", "table table-responsive");

table.innerHTML = `
  <thead class="thead-light">
    <tr>
      <th scope="col">Week</th>
      <th scope="col">Day</th>
      <th scope="col">Unit</th>
      <th scope="col">Challenge</th>
      <th scope="col">Goals</th>
    </tr>
  </thead>
  <tbody>
  ${schedule.map((week) => {
    const { challenge, day, goals, unit, week: weekNumber } = week;
    return `<tr>
      <th scope="row">${weekNumber}</th>
      <td>${day}</td>
      <td>${unit}</td>
      <td>${challenge}</td>
      <td>
        <ul class="list-group">
        <li class="list-group-item list-group-item-warning">${goals.join("")}</li>
        </ul>
      </td>
      </tr>
      `;
  })}
  </tbody>`;

document.body.appendChild(table);
// Your schedule can be accessed through the global object "schedule"
console.log(schedule);
