for (let i = 1; i <= 100; i++) {

    if(i % 5 == 0 && i % 3 == 0){
        const node = document.createElement("li");
        const textnode = document.createTextNode("fizzbuzz");
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
        node.classList.add("col-2");
        continue;
    }
    
    if(i % 3 == 0){
        const node = document.createElement("li");
        const textnode = document.createTextNode("fizz");
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
        node.classList.add("col-2");
        continue;
    }
    
    if(i % 5 == 0){
        const node = document.createElement("li");
        const textnode = document.createTextNode("buzz");
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
        node.classList.add("col-2");
        continue;
    }
    
    const node = document.createElement("li");
    const textnode = document.createTextNode(i);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    node.classList.add("col-2");
 }