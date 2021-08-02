function Submit(){
    AddProductAndAmount();
    AddBtn();
    addElement();
}

function addElement() {
    // create a new div element
    const newDiv = document.createElement("div");
  
    // and give it some content
    const newContent = document.createTextNode("");
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

function AddBtn(){
    // create 2 buttons
    let btn = document.createElement('button'); 
    let btn2 = document.createElement('button'); 

    // add the symbol
    btn.innerHTML = "+";
    btn2.innerHTML = "-";

    // add classes
    btn.className = "btn btn-success custom-btn";
    btn2.className = "btn btn-danger custom-btn";

    // add content into DOM
    document.body.appendChild(btn);
    document.body.appendChild(btn2);
}

function AddProductAndAmount(){
    // only if content are in inputs
    if (document.getElementById('product').value && document.getElementById('amount').value) {

        // add hyperlink
        var aProduct = document.createElement('a');
        var linkTextProduct = document.createTextNode(document.getElementById('product').value+" ");
        var aAmount = document.createElement('a');
        var linkTextAmount = document.createTextNode(document.getElementById('amount').value+" ");

        aProduct.appendChild(linkTextProduct);
        aProduct.className = "submit-ans-product";
        document.body.appendChild(aProduct);   

        aAmount.appendChild(linkTextAmount);
        aAmount.className = "submit-ans-amt";
        document.body.appendChild(aAmount);   
    }
}