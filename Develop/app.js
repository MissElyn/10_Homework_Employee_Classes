const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const htmlRenderer = require('./lib/htmlRenderer')

const employeeList = []
const addEmployee = 

start();

function start() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Manager name?"
        },
        {
            name: "id",
            type: "input",
            message: "Manager id?"
        },
        {
            name: "email",
            type: "input",
            message: "Manager email?"
        },
        {
            name: "officeNumber",
            type: "input",
            message: "Manager office number?"
        },
    ]).then(({ name, id, email, officeNumber }) => {
        var newMan = new Manager(name, id, email, officeNumber)
        employeeList.push(newMan)
        console.log(employeeList)

        addEmployee()
    });
}
function addEngineer() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Engineer's name?"
        },
        {
            name: "id",
            type: "input",
            message: "Engineer's's id?"
        },
        {
            name: "email",
            type: "input",
            message: "Engineer's email?"
        },
        {
            name: "github",
            type: "input",
            message: "Engineer's github?"
        },
    ]).then(({ name, id, email, github }) => {
        var emp = new Engineer(name, id, email, github)
        employeeList.push(emp)
        console.log(employeeList)

        addEmployee()
    });

    function addIntern() {
        inquirer.prompt([
            {
                name: "name",
                type: "input",
                message: "Intern's name?"
            },
            {
                name: "id",
                type: "input",
                message: "Intern's id?"
            },
            {
                name: "email",
                type: "input",
                message: "Intern's email?"
            },
            {
                name: "school",
                type: "input",
                message: "Inter's school?"
            },
        ]).then(({ name, id, email, school }) => {
            var emp = new Intern(name, id, email, school)
            employeeList.push(emp)
            console.log(employeeList)

            addEmployee()
        })
    }

    function addEmployee() {
        inquirer.prompt({
            name: "choice",
            type: "list",
            message: "What employee would you like to add?",
            choices: ["Engineer", "Intern", "Exit"]
        })
            .then(({ choice }) => {
                console.log(choice)
                if (choice === "Exit") {
                    var html = htmlRenderer(employeeList)
                    console.log(html)
                }
                else if (choice === "Engineer") {
                    addEngineer()
                    // Build function for gettin information about engineer
                    // then ask whether they would like to add more employees
                }
                else if (choice === "Intern") {
                    // Build function for gettin information about intern
                    // then ask whether they would like to add more employees
                    addIntern()
                }
            })
    }}