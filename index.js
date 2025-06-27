let nameEl=document.getElementById("text")

function subName()
{
  let nameSub=nameEl.value
  if(nameSub===""){
    alert("ENTHAAN NAAN VANNO?..")
  }
  else {
    nameEl.value="";
    localStorage.setItem("rizzname",nameSub);
     document.body.innerHTML = `
    <div class="container"><pre>
      <h4>      Hehe Hii ${nameSub} 😚💘 
      don’t smile too much okay? You’ll melt me 😩💓</h4>
   </pre> 
  <label>
  <input type="radio" name="gender" value="F"> F
</label>

<label>
  <input type="radio" name="gender" value="M"> M
</label>
<button onclick="next()" id="next">NEXT</button></div>

    `;


  }

}
function next(){
  let gen;
  gen=document.querySelector('input[name="gender"]:checked')?.value;
if(!gen){
  alert("PARA SOUDHA..")
  
}
else if(gen==="F"){
  window.location.href="2.html"
}else{
  window.location.href="3.html"
}}
