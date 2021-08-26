function Submit(){
    addElement_Div();
    AddProductAndAmount();
    AddBtn();
    addElement_Br();
}

function addElement_Div() {
    // create a new div element
    const newDiv = document.createElement("div");
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div");
    document.body.insertBefore(newDiv, currentDiv);
}

function addElement_Br() {
    // create a new div element
    const newDiv = document.createElement("br");
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

function AddBtn(){
    // create buttons
    let btn = document.createElement('button'); 

    // add the symbol
    btn.innerHTML = "<strong>"+"CHECK"+"</strong>";

    // add classes
    btn.className = "checked-button";

    // add content into DOM
    document.body.appendChild(btn);
}

function AddProductAndAmount(){
    // only if content are in inputs
    if (document.getElementById('product').value && document.getElementById('amount').value) {
        
        // create span
        var aProduct = document.createElement('span');
        var linkTextProduct = document.createTextNode(document.getElementById('product').value+" ");
        var aAmount = document.createElement('span');
        var linkTextAmount = document.createTextNode(document.getElementById('amount').value+" ");

        aProduct.appendChild(linkTextProduct);
        aProduct.className = "product";
        document.body.appendChild(aProduct);   

        aAmount.appendChild(linkTextAmount);
        aAmount.className = "amount";
        document.body.appendChild(aAmount);
    }
}