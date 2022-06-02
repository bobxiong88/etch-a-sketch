function getChild(node){
    return Array.from(node.childNodes);
}

const grid = document.querySelector("#grid");

const reset = document.querySelector("#reset");

reset.addEventListener('click', ()=>{
    let n;
    grid.innerHTML = "";
    let msg = "Enter grid size (1-100)";
    while (true){
        n = prompt(msg);
        if (1<=n&&n<=100) break;
        msg = "Please enter a valid size!";

    }
    let sz = 480/n;
    for (let i = 0; i<n; i++){
        const row = document.createElement("div");
        row.classList.add(i);
        row.style.display = "flex";
        row.style.flexDirection = "column";
        //row.style.border = "1px solid black";
    
        for (let j = 0; j<n; j++){
            const block = document.createElement("div");
            block.classList.add(j);
            block.style.display = "flex";
            //block.style.border = "1px solid black";
            block.style.padding = `${sz}px`
            block.style.backgroundColor = "grey";
            row.appendChild(block);
    
        }
        grid.appendChild(row);
    }
    reset.textContent = "Click to reset!";    
    getChild(grid).forEach((row)=>{
        getChild(row).forEach((block)=>{
            block.onmouseover = ()=>{
                block.style.backgroundColor = "black";
            }
        });
    });

});


