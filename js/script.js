
 
const numbers = [1,2, 3, 4, 5];
console.log(numbers);

for(let i=1; i<6; i=i+1){
    const h1 = document.createElement('h5');
    h1.innerText = "Rad " + i;
    document.body.appendChild(h1);
    const hue = 150+i*10;
    console.log(hue);
    h1.style.backgroundColor =` hsl(${hue}, 100%, 50%)`;
    h1.style.marginBottom = `${1+i}px solid white`;
    h1.style.textAlign = "center";
    h1.style.color = "blue";
    h1.style.fontSize = i + "1px";
    console.log(i)
}

const box = document.createElement('div');
document.body.appendChild(box);
box.style.border = "2px solid black";
box.style.padding = "5px solid white";
box.style.display = "flex";
box.style.justifyContent = "space-around";




const olElement1 = document.createElement('ol');
box.appendChild(olElement1);
olElement1.style.border = "10px solid turquoise";
olElement1.style.padding = "0px";





for(let i=0; i<10;i++){

    
    const liElement = document.createElement('li');
    olElement1.appendChild(liElement);
    liElement.innerText = i ;
    liElement.style.listStyleType = "none";
    liElement.style.textAlign = "left";
    liElement.style.width = "50px";
    

    if(i==4){
        liElement.style.backgroundColor ="turquoise";
        liElement.style.color = "white";
    }
    else if (i % 2 ==0){
        liElement.style.backgroundColor ="black";
        liElement.style.color = "white";
    }

}


const olElement2 = document.createElement('ol');
box.appendChild(olElement2);
olElement2.style.border = "10px solid turquoise";
olElement2.style.padding = "0px";


for(let i=9; i>=0; i--){

    const liElement = document.createElement('li');
    olElement2.appendChild(liElement);
    liElement.innerText = i;
    liElement.style.listStyleType = "none";
    liElement.style.textAlign = "center";
    liElement.style.width = "50px";

    if(i==8){
        liElement.style.backgroundColor ="turquoise";
        liElement.style.color = "white";
    }
    else if (i % 2 ==0){
        liElement.style.backgroundColor ="black";
        liElement.style.color = "white";
    }
}

const olElement3 = document.createElement('ol');
box.appendChild(olElement3);
olElement3.style.border = "10px solid turquoise";
olElement3.style.padding = "0px";

const tal = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
console.log(tal);


for(let i=0; i<10;i++){


    const liElement = document.createElement('li');
    olElement3.appendChild(liElement);
    liElement.innerText = tal[i];
    liElement.style.listStyleType = "none";
    liElement.style.textAlign = "right";
    liElement.style.width = "50px";


    if(i==5){
        liElement.style.backgroundColor ="turquoise";
        liElement.style.color = "white";
    }
    else if (i % 2 ==0){
        liElement.style.backgroundColor ="black";
        liElement.style.color = "white";
    }
}
