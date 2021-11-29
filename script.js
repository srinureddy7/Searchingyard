const contactform = document.getElementById("contactform");
contactform.addEventListener("submit", function (e) {
  e.preventDefault();
  const myModal = document.getElementById("exampleModal");

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const sex = document.getElementById("sex").value;
  const address = document.getElementById("address").value;

  const data = {
    name: name,
    email: email,
    phone: phone,
    city: city,
    state: state,
    sex: sex,
    address: address,
  };
  console.log(data);
  alert("All data Has been Printed into Console !");
});
