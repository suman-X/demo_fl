for(let i=0; i<=100; i++){
    let getname = document.createElement('p');
     getname.textContent = "Suman Tripathi" + i;
     document.body.appendChild(getname); 

     let length = getname.length;
     for(let i=0; i<=length; i++){
        let geth2 = getname[i];
        geth2.addEventListener('click',function(){
            
            alert("you have clicked on:"+ i+1)
            
        })
     }
}



let getSubHeading = document.createElement('h2');
getSubHeading.textContent="Here's my name 100-times";
getSubHeading.setAttribute('style',"background-color: yellow;")    
    
let getdiv = document.querySelector('#f-div');
getdiv.insertAdjacentElement("afterend",getSubHeading)

const getPara = document.querySelectorAll('p');


let len = getPara.length;
function alertpara(event){
    alert("You clicked on:" + event.target.textContent)
    
}


for(let i=0; i<=len; i++){
    let para = getPara[i];
    para.addEventListener('click',alertpara);
}



    
    





