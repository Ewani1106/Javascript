var data = "sumit";
data += " more";

console.log(data);
console.log(data.length);
console.log(data.concat(" abc"));
console.log(data.toUpperCase());
console.log(data.toLowerCase());
console.log(data.indexOf("sum"));
console.log(data.indexOf("sum",4));//same as search
console.log(data.lastIndexOf("more"));
console.log(data.replace('sum','aum'));
console.log(data.search('sum'));
console.log(data.repeat(3));
console.log(data.startsWith('sum'));//give true or false
console.log(data.endsWith('sum'));
console.log(data.substring(0,4));
console.log(data.slice(0,6));
var data = "sumit,amit,demo";
console.log(data.split(','));

let pr = document.querySelector('p:first-child');
console.log(pr.innerText.split(' '));//count word
console.log(pr.innerText.split('.'));//count line /n
console.log(pr.innerText.length);//count character


//program
var para=document.querySelector('p:first-child');
let result=para.innerText.split(" ");
let key="sit";

//console.log(para.innerText.indexOf("<b>"+ key + "</b>"),para.innerText.indexOf(key ));
//console.log(para.innerText.replace(key,"<b>"+key+"</b>"));
//console.log(para.innerText.replace(para.innerText.substring(para.innerText.indexOf(key),para.innerText.indexOf(key)+key.length,'<b>'+key+'</b>')));

//let condi=para.innerText.indexOf("<b>"+ key + "</b>");
let start = para.innerText.indexOf(key);
para.innerText.replace("\key\g",start)
//end = start + key.length+1;

// while(start >= 0){
//     para.innerHTML = para.innerText.replace(key,"<b>"+key+"</b>");
//     start = para.innerText.indexOf(key,start+key.length+1);
//     console.log(start);
// }



//console.log(para.innerText.replace(key,"<b>"+key+"</b>"));
//console.log(para.innerText.replace(para.innerText.substring(para.innerText.indexOf(key),para.innerText.indexOf(key)+key.length,'<b>'+key+'</b>')));
// while(para.innerText.indexOf(key) >= 0)
// {
//     if(i===key){       
//         document.querySelector("p").innerHTML += "<b>"+key+"</b>"+" ";
//       //document.querySelector("p").innerHTML += "<b>"+result[i]+"</b>"+" ";
//     }else{
//         console.log('p');
//      // document.querySelector("p").innerHTML +=result[i]+" ";
//    }
//for(var i = 0; i<result.length; i++){
   // if(key.includes(result[i])){       
   //   document.querySelector("#p").innerHTML += "<b>"+result[i]+"</b>"+" ";
  //  }else{
  //    console.log("Data Mismatch");
  // }
 //}  
// }

//for(var i = 0; i<=result.length; i++){
  //  if(key.includes(result[i])){       
    //  document.querySelector("p").innerHTML += "<b>"+result[i]+"</b>"+" ";
    //}else{
      //  console.log("Data Mismatch");
   //}
 //}  
//let mm = ""; 

 //for (let i = 0; i < para.innerText.length; i++) {
   // let sub = para.innerText.substring(i,key.length+i);
    //if(sub === key){
      //  para.innerText[i] += "<b>" ;
   // }else{
     //   mm += para.innerText[i];
    //}
 //}
 // console.log(mm);