// handling the tasks which have no deadlines
var date_values = document.querySelectorAll("#task-date-value");
for (let i = 0; i < date_values.length; i++) {
  if (date_values[i].innerText == "") {
    date_values[i].innerText = " No Deadline";
  }
}
// handling the tasks with category 'other'
for (i = 0; i < category_boxes.length; i++) {
  if (category_boxes[i].innerText == "Other") {
    category_boxes[i].style.display = "none";
  }
}
//handling hover on li
var listItems = document.querySelectorAll("li");
for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("mouseover", function () {
    listItems[i].style.backgroundColor = "whitesmoke";
    listItems[i].style.boxShadow = "0px 0px 5px 3px #f08a5d";
  });
  listItems[i].addEventListener("mouseout", function () {
    listItems[i].style.backgroundColor = "#e8e4e1";
    listItems[i].style.boxShadow = "none";
  });
}
