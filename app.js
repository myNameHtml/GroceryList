function Submit(){
    AddProductAndAmount();
    addElement_Br();
}

function addElement_Br() {
    // create a new div element
    const newDiv = document.createElement("br");
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}

function AddProductAndAmount(){
    // only if content are in inputs
    if (document.getElementById('product').value && document.getElementById('amount').value) {
        
        // Create span
        var aProduct = document.createElement('span');
        var aAmount = document.createElement('span');

        // Add text to span
        var linkTextProduct = document.createTextNode(document.getElementById('product').value+" ");
        var linkTextAmount = document.createTextNode(document.getElementById('amount').value+" ");
        
        // Create Div
        const newDiv = document.createElement("div");
        const currentDiv = document.getElementById("div");
        newDiv.id = "result";
        document.body.insertBefore(newDiv, currentDiv);

        // Append product span to div
        aProduct.appendChild(linkTextProduct);
        aProduct.className = "product";
        newDiv.appendChild(aProduct);   

        // Append amount span to div
        aAmount.appendChild(linkTextAmount);
        aAmount.className = "amount";
        newDiv.appendChild(aAmount);

        // Create Button
        let btn = document.createElement('button');
        btn.innerHTML = "<strong>"+"CHECK"+"</strong>";
        btn.className = "checked-button";
        btn.id = "check-btn";
        newDiv.appendChild(btn);
    }

    document.getElementById("check-btn").addEventListener("click", function(){
        const checkedDiv = document.getElementById('result');
        checkedDiv.remove();
    });
}