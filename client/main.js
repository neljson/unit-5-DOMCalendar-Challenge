// The following code appends a title to the page
// document.createElement creates an element that can be altered and then inserted into the DOM
// document.body.appendChild places a node as a child under the body element
var title = document.createElement("div");
title.innerHTML = "James Scaggs - Codesmith Calendar";
document.body.appendChild(title);
title.setAttribute("class", "title");

let table = document.createElement("table");
table.setAttribute("class", "table table-responsive");

//handle data

//map over

table.innerHTML = `
  <thead>
    <tr>
      <th scope="col">Week</th>
      <th scope="col">Day</th>
      <th scope="col">Unit</th>
      <th scope="col">Challenge</th>
      <th scope="col">Goals</th>
    </tr>
  </thead>
  <tbody>
  ${console.log("hey")}
  ${schedule.map((week) => {
    const { challenge, day, goals, unit, week: weekNumber } = week;
    return `<tr>
      <th scope="row">${weekNumber}</th>
      <td scope="col">${day}</td>
      <td scope="col">${unit}</td>
      <td scope="col">${challenge}</td>
      <td scope="col">
        <ul class="list-group ">
        ${goals.map((goal) => `<li class="list-group-item list-group-item-warning">${goal}</li>`)}
        </ul>
      </td>
      </tr>
      `;
  })}
  </tbody>`;

document.body.appendChild(table);
// Your schedule can be accessed through the global object "schedule"
console.log(schedule);

/*
<tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
*/
