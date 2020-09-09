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

  //declare a variable to store our table row
  let tableRow;

  // Make an AJAX request to the server, then do something with the result!

  let newObj;

  fetch("http://slack-server-production.us-west-2.elasticbeanstalk.com/calendar/NY/21").then((data) =>
    data.json().then((data) => (newObj = data))
  );

  console.log("DATA:", newObj);

  //build the table
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
    <tr>
      <th scope="row">weeknumber</th>
      <td>
      </td>
    </tr>
  </tbody>`;

  document.body.appendChild(table);
});

//re-assign the value of our tableRow variable to the created Element
