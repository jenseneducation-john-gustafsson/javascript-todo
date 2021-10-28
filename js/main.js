// selektorer
let createHeader = document.getElementById("create-h1");
let input1 = document.getElementById("input1");
let addButton = document.getElementById("add");
let todoList = document.getElementById("todo-list");
let doneList = document.getElementById("done-list");

// globala variabler
let taskList = "";

// felmeddelande
let errorMessage = document.createElement("p");
errorMessage.className = "error-msg";

// Lägg till knappens event
addButton.addEventListener("click", function () {
    // kolla om fält är tomt
    if (input1.value === "") {
        errorMessage.innerText = "Du måste skriva in nåt";
        createHeader.appendChild(errorMessage);
    } else {
        // skapa lista i Att göra
        errorMessage.remove();
        taskList = document.createElement("li");
        todoList.appendChild(taskList);

        // skapa input
        let input2 = document.createElement("input");
        input2.value = input1.value;
        input2.readOnly = true;
        taskList.appendChild(input2);

        // Metoder som anropas via objekt
        myButton.changeSaveButton();
        myButton.doneButton();
        myButton.deleteButton();

        // nollställer Skapa syssla rutans innehåll
        input1.value = "";
    };
});

// Object med metoder för alla knappar
let myButton = {
    changeSaveButton: function () {
        let changeSaveButton = document.createElement("button");
        changeSaveButton.className = "change-btn"
        changeSaveButton.innerText = "Ändra";
        taskList.appendChild(changeSaveButton);

        changeSaveButton.addEventListener("click", function () {
            if (this.parentNode.firstElementChild.readOnly == true) {
                this.parentNode.firstElementChild.readOnly = false;
                this.innerText = "Spara";
                this.style.backgroundColor = "lightyellow";
            } else if (this.parentNode.firstElementChild.value == "") {
                this.parentNode.firstElementChild.readOnly = false;
                errorMessage.innerText = "Du måste skriva in nåt och spara";
                createHeader.appendChild(errorMessage);
            } else {
                errorMessage.remove();
                this.parentNode.firstElementChild.readOnly = true;
                this.innerText = "Ändra";
                this.style.backgroundColor = "lightgrey";
            };
        });
    },
    doneButton: function () {
        let doneButton = document.createElement("button");
        doneButton.className = "done-btn";
        doneButton.innerText = "Färdig";
        taskList.appendChild(doneButton);

        doneButton.addEventListener("click", function () {
            if (this.parentNode.firstElementChild.value == "" && this.parentNode.firstElementChild.readOnly == false) {
                errorMessage.innerText = "Du måste skriva in nåt och spara";
                createHeader.appendChild(errorMessage);
            } else if (this.parentNode.firstElementChild.readOnly == false) {
                errorMessage.innerText = "Du måste spara först";
                createHeader.appendChild(errorMessage);
            } else {
                doneList.appendChild(this.parentNode);
                this.remove();
            }
        });
    },
    deleteButton: function () {
        let deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.innerText = "Radera";
        taskList.appendChild(deleteButton);

        deleteButton.addEventListener("click", function () {
            this.parentNode.remove();
            errorMessage.remove();
        });
    }
};