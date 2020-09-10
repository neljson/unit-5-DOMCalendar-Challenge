class Calendar {
  //do something with the data here
  constructor(schedule) {}
}

class Event {
  constructor(data) {
    this.startTime = data.startTime;
    this.endTime = data.endTime;
    this.description = data.description;
  }
}

class Day {
  constructor(name) {
    this.name = name;
    this.events = [];
    this.addEvent = (eventData) => {
      this.events.push(new Event(eventData));
    };
    this.orderEvents = () => {
      //go through events and sort them by start and end time
    };
  }
}

class Week {
  constructor(number) {
    this.days = [];
    this.addDay = (name) => {
      const day = new Day(name);
      this.days.push(day);
    };
  }
}

$(document).on("ready", () => {
  const title = $("<h1>").text("Social Calendar");
  $("body").append(title);
  console.log(title);

  //build the table
  let table = document.createElement("table");
  table.setAttribute("class", "table table-responsive");
  table.innerHTML = `
    <thead class="thead-light">
      <tr>
        <th scope="col">Day</th>
        <th scope="col">Summary</th>
        <th scope="col">Link</th>
        <th scope="col">Goals</th>
      </tr>
    </thead>
    <tbody id="tableBody">
    </tbody>
  `;

  document.body.appendChild(table);

  fetch("http://slack-server-production.us-west-2.elasticbeanstalk.com/calendar/NY/21").then((data) =>
    data.json().then((data) => {
      //select the th
      const tableBody = document.querySelector("#tableBody");
      const dataArray = Object.entries(data);
      dataArray.map((el) => {
        const days = el[0]; // array of days
        const events = el[1];

        console.log("DAYS", days);
        console.log("EVENTDATA", events);
        // console.log("DAY", day);

        //create a new row
        const tableRow = document.createElement("tr");

        //create a td tag
        const tableData = document.createElement("td");

        //update html of the row
        tableRow.innerHTML = `
        <th scope="row">${days}</th>`;

        events.map((event) => {
          tableData.innerHTML = `
          <td id="${event.id}">${event.summary}</td>
          <td id="link"><a target="_blank" href=${event.htmlLink}>Link</a></td>
          `;
        });

        //append the new row to the table body
        tableBody.appendChild(tableRow).appendChild(tableData);
      });
    })
  );
});

//re-assign the value of our tableRow variable to the created Element
