$(document).ready(init);

const employeeForm = [];

function init() {
  console.log("JQ");
  $(".js-add-employee-form").on("submit", submitEmployeeForm);
}

function submitEmployeeForm(event) {
  console.log(event);
  event.preventDefault();

  const employeeInfo = {
    employeeFirstName: $(".js-input-firstName").val(),
    employeeLastName: $(".js-input-lastName").val(),
    employeeID: parseFloat($(".js-input-id").val()),
    employeeTitle: $(".js-input-title").val(),
    employeeAnnualSalary: parseFloat($(".js-input-annualSalary").val())
  };

  employeeForm.push(employeeInfo);
  console.log(employeeForm);
}
