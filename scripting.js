data=""
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {data= json;
        dosomething(data)})


const bob= document.getElementById('text');
function dosomething(text){
    for(let i = 0; i < data.length; i++){
        text = data[i];
    for(let x in text){
        document.getElementById("text").innerHTML += " " +x +" :";
        document.getElementById("text").innerHTML += " " +text[x]+ " ";
        document.getElementById("text").innerHTML += "\n";

    }
    
    }
   
}
