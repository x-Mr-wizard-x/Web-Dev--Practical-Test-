let nameInput = document.getElementById("expenseName");
let amountInput = document.getElementById("expenseAmount");
let categoryInput = document.getElementById("category");
let addBtn = document.getElementById("addBtn");
let expenseList = document.getElementById("expenseList");

addBtn.addEventListener("click", function() {

    let name = nameInput.value;
    let amount = amountInput.value;
    let category = categoryInput.value;

    if (name === "" || amount === "" || category === "") {
        alert("Please fill all fields!");
        return;
    }

    let li = document.createElement("li");

    let info = document.createElement("div");
    info.className = "expense-info";

    let title = document.createElement("strong");
    title.textContent = name + " - ₹" + amount;

    let details = document.createElement("br");

    let small = document.createElement("small");
    small.textContent = category;

    info.appendChild(title);
    info.appendChild(details);
    info.appendChild(small);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    // Add details and button to list
    li.appendChild(info);
    li.appendChild(deleteBtn);

    // Display expense
    expenseList.appendChild(li);

    // Clear input fields
    nameInput.value = "";
    amountInput.value = "";
    categoryInput.value = "";

});