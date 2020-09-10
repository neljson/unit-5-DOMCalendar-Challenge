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
        <th scope="col">Events</th>
        <th scope="col">Zoom Room</th>
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
        // console.log("DAYS:", days);
        // console.log("EVENTDATA:", events);
        // console.log("zoom:", zoomLinks);
        // console.log(el);
        events.map((event) => {
          console.log(event);
          //create our elements
          const tableRow = document.createElement("tr");
          const rowHeader = document.createElement("th");
          // helpers to handle date formatting
          let date = new Date(event.start.dateTime);
          date = date.toDateString();
          //set attribute let's us give each row a unique id that corresponds with the event that day
          // good practice like in React, creating multiple elements, unique id element will be useful to identify
          // the right row
          tableRow.setAttribute("id", event.id);
          rowHeader.innerText = date;
          rowHeader.setAttribute("scope", "row");
          //appending
          tableBody.appendChild(tableRow); //tr
          //populating row with summary  (our events descriptions)
          tableRow.appendChild(rowHeader); //th
          //Zoom room link
          //iterate over the keys in our event object, create a new td tag for each
          // property ("location") we want to render.
          // for (let key in event) {
          //   //create two td tags
          //   //summary
          //   if (key === "summary") {
          //     const summary = document.createElement("td");
          //     summary.innerText = event.summary;
          //     tableRow.appendChild(summary);
          //   }
          //   //zoom link
          //   else if (key === "location") {
          //     const location =  document.createElement("td");
          //     location.innerText = event.location;
          //     tableRow.appendChild(location);
          //   }
          // }
        });
      });
    })
  );
});
//re-assign the value of our tableRow variable to the created Element
