menuListArray = ["Pizza Vegetariana",
                    "Pizza de Frango",
                    "Pizza Portuguesa",
                    "Pizza Quatro Queijos",
                    "pizza de Calabresa",
                    "pizza Extravaganza"
];    

function getMenu()
{
    var htmldata;
    menuListArray.sort();
    for (var  i=0; i<menuListArray.lenght; i++)
    {
        htmldata = htmldata + menuListArray[i] + "<br"
    }
    document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem()
{
    var htmldata;
    var imgtags ='<img id= "imI" src="images/pizzaImg.png"/>'
    var item=document.getElementById("addItem").value;
    menuListArray.sort();
    htmldata = ""
    for (var i = 0; i<menuListArray.lenght; i++)
    {
        htmldata = htmldata + imgtags + menuListArray[i] + '<br>';
    }
    document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addTop()
{
    var item = document.getElementById("addItem").value;
    menuListArray.push(item);
    addItem();
}