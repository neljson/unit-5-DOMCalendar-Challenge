// The following code appends a title to the page
// document.createElement creates an element that can be altered and then inserted into the DOM
// document.body.appendChild places a node as a child under the body element
var title = document.createElement("div");
title.innerHTML = "James Scaggs - Codesmith Calendar";
document.body.appendChild(title);
title.setAttribute("class", "title");

let table = document.createElement("table");
table.setAttribute("class", "table");

//handle data

table.innerHTML = `
  <thead>
    <tr>
      <th scope="col">Week</th>
      <th scope="col">Day</th>
      <th scope="col">Unit</th>
      <th scope="col">Challenge</th>
    </tr>
  </thead>
  <tbody>
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
  </tbody>`;

document.body.appendChild(table);
// Your schedule can be accessed through the global object "schedule"
console.log(schedule);
