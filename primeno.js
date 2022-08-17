var n, i, cheak=0;
n=document.getElementById("number");
for(i=2; i<n; i++)
{
  if(n%2==0)
  {
    cheak++;
    break;
  }
}
if(cheak==0){
  
  //store+=document.getElementById(n).innerText;
    // document.write(n.innerHTML + " is a Prime Number");
}
else{
    document.write(n + " is not a Prime Number");
}
  