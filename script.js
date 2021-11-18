let form=document.getElementById("formSubmission");

let table=document.getElementById('data');
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  submit();
})


const submit=()=>{
  let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let address = document.getElementById("address").value;
   let pincode = document.getElementById("pincode").value;
   let gender = document.getElementById("gender").value;
   let state = document.getElementById("state").value;
   let country = document.getElementById("country").value;


  let newArray = [firstname,lastname,address,gender,pincode,state,country];
  newArray.forEach((item)=>{
      var li = document.createElement("li");
  var text = document.createTextNode(item);
  li.appendChild(text);
  table.appendChild(li);
  })
  form.reset(); 
}
