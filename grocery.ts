class Grocery {        
    constructor ( public name: string, public quantity: number, public brand: string, public category: string){        
        this.name = name;
        this.quantity = quantity;
        this.brand = brand;
        this.category = category;
    }       
}


function showGroceries(groceryList){
    
    let groceryHeader = "<h3>Grocery List</h3>" + 
                        "<table>" + 
                        "<tr><th>Name</th><th>Qty</th><th>Brand</th><th>Category</th>" +                        "<tr>";
    let groceryFooter = "</table>";

    let groceryListOutput = "";

    for (let i = 0; i < groceryList.length; i++) {
        groceryListOutput += "<tr>" + 
                                "<td>" + groceryList[i].name + "</td>" + 
                                "<td>" + groceryList[i].quantity + "</td>" + 
                                "<td>" + groceryList[i].brand + "</td>" + 
                                "<td>" + groceryList[i].category + "</td>" +   
                             "</tr>"
    }
    
    return groceryHeader + groceryListOutput + groceryFooter;
}

// Create a list of Groceries
let listOfGroceries = [
    new Grocery("milk", 3, "Great Value", "Dairy"),
    new Grocery("Bread", 2, "Sara Lee", "Grain"),
    new Grocery("Eggs",  4, "Nice Farm", "Dairy")
];

document.body.innerHTML = showGroceries(listOfGroceries);