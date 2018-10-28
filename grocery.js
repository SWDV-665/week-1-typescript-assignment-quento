var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, brand, category) {
        this.name = name;
        this.quantity = quantity;
        this.brand = brand;
        this.category = category;
        //this.groceryItem = {name, quantity, brand, category};
        this.name = name;
        this.quantity = quantity;
        this.brand = brand;
        this.category = category;
    }
    return Grocery;
}());
function showGroceries(groceryList) {
    var groceryListOutput = "";
    var groceryHeader = "<h3>Grocery List</h3>" +
        "<table><tr><th>Name</th><th>Qty</th><th>Brand</th><th>Category</th><tr>";
    var groceryFooter = "</table>";
    for (var i = 0; i < groceryList.length; i++) {
        groceryListOutput += "<tr>" +
            "<td>" + groceryList[i].name + "</td>" +
            "<td>" + groceryList[i].quantity + "</td>" +
            "<td>" + groceryList[i].brand + "</td>" +
            "<td>" + groceryList[i].category + "</td>" +
            "</tr>";
    }
    return groceryHeader + groceryListOutput + groceryFooter;
}
var listOfGroceries = [
    new Grocery("milk", 3, "Great Value", "Dairy"),
    new Grocery("Bread", 2, "Sara Lee", "Grain"),
    new Grocery("Eggs", 4, "Nice Farm", "Dairy")
];
document.body.innerHTML = showGroceries(listOfGroceries);
