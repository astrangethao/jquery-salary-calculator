$(document).ready(init);

const employeeForm = [];

function init() {
  console.log("JQ");
  $(".js-add-employee-form").on("submit", submitEmployeeForm);
  $(".js-table-body").on("click", ".js-btn-delete", deleteEmployee);
}

function deleteEmployee() {
  console.log(this);
  $(".js-table-body-row").remove();
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

  $(".js-input-firstName").val("");
  $(".js-input-lastName").val("");
  parseFloat($(".js-input-id").val(""));
  $(".js-input-title").val("");
  parseFloat($(".js-input-annualSalary").val(""));

  render();
}

function render() {
  $(".js-table-body").empty();

  let totalMonthly = 0;

  for (let i = 0; i < employeeForm.length; i++) {
    let individualEmployee = employeeForm[i];

    totalMonthly += individualEmployee.employeeAnnualSalary / 12;

    $(".js-table-body").append(`
    <tr>
    <td>${individualEmployee.employeeFirstName}</td>
    <td>${individualEmployee.employeeLastName}</td>
    <td>${individualEmployee.employeeID}</td>
    <td>${individualEmployee.employeeTitle}</td>
    <td>${individualEmployee.employeeAnnualSalary}</td>
    <td><button class="js-btn-delete">Delete</button></td>
    </tr>
    `);
  }
  $(".js-total-monthly").text(totalMonthly);
}
