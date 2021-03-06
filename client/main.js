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
        <th scope="col">Event</th>
        <th scope="col">Zoom Room</th>
      </tr>
    </thead>
    <tbody id="tableBody">
    </tbody>
  `;
  document.body.appendChild(table);

  //fetch data
  fetch("http://slack-server-production.us-west-2.elasticbeanstalk.com/calendar/NY/21").then((data) =>
    data.json().then((data) => {
      const tableBody = document.querySelector("#tableBody");

      const dataArray = Object.entries(data);

      dataArray.map((el) => {
        const events = el[1];

        events.map((event) => {
          console.log({ event });

          //create table rows
          const tableRow = document.createElement("tr");
          const rowHeader = document.createElement("th");

          //set attributes
          tableRow.setAttribute("id", event.id);
          rowHeader.setAttribute("scope", "row");

          // helpers to handle date formatting
          let date = new Date(event.start.dateTime);
          const day = date.toDateString();
          const time = date.toLocaleString().split(",")[1];

          //set the content
          rowHeader.innerHTML = `
            ${day} @ ${time}
          `;

          //insert to DOM
          tableBody.appendChild(tableRow); //tr
          tableRow.appendChild(rowHeader); //th

          //iterate over properties and build td tags
          for (let key in event) {
            if (key === "summary") {
              const summary = document.createElement("td");
              summary.setAttribute("class", "summary");
              summary.innerText = event.summary;
              tableRow.appendChild(summary);
            } else if (key === "location") {
              const location = document.createElement("td");
              location.setAttribute("class", "location");
              location.innerHTML = `
              <a href=${event.location}>${event.location}</a>
              `;
              tableRow.appendChild(location);
            }
          }
        });
      });
    })
  );
});
