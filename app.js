const product = document.getElementById('product');
const list = document.getElementById('list');
const btnSubmit = document.getElementById('submitButton');

product.addEventListener("keypress", (e)=>{
    if (e.key === 'Enter' && product.value) {
        AddItems();
    }
})

btnSubmit.addEventListener("click", () =>{
    // only if content are in inputs
    if (product.value) {
        AddItems();
    }
})

function AddItems(){
    // Create div
    const newDiv = document.createElement("div");
    newDiv.id = "items-container";
    list.appendChild(newDiv);

    // Create paragraph for product
    var pTag = document.createElement('p');
    pTag.innerText = product.value;
    pTag.className = "list-font";
    newDiv.appendChild(pTag);
    product.value = "";

    // Create button for removing item
    var btn = document.createElement("button");
    btn.innerText = "🗑️ DELETE"
    btn.className = "checked-button";
    newDiv.appendChild(btn);

    btn.addEventListener("click", () =>{
        newDiv.remove(newDiv);
    })
}