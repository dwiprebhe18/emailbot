let data = [];

// form submit
document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  // validation
  if(email === "" || subject === "" || date === "" || time === ""){
    alert("Please fill all fields");
    return;
  }

  data.push({email, subject, date, time});
  display();
  this.reset();
});

// display data
function display(){
  let body = document.getElementById("tableBody");
  body.innerHTML = "";

  data.forEach((item, i)=>{
    body.innerHTML += `
      <tr>
        <td>${item.email}</td>
        <td>${item.subject}</td>
        <td>${item.date}</td>
        <td>${item.time}</td>
        <td>
          <button onclick="del(${i})">Delete</button>
        </td>
      </tr>`;
  });
}

// delete function
function del(i){
  data.splice(i,1);
  display();
}