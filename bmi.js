const Calculate_btn = document.querySelector(".Calculate_btn");
const result_BMI = document.querySelector(".result_BMI");
const Description = document.querySelector(".Description");
function func_Weight() {
  var myProgress_Weight = document.getElementById("myProgress_Weight");

  myProgress_Weight.value = document.getElementById("value_Weight").value;
}

function func_Height() {
  var myProgress_Height = document.getElementById("myProgress_Height");

  myProgress_Height.value = document.getElementById("value_Height").value;
}

function result_Bmi() {
  // const result= myProgress_Height.value + myProgress_Weight.value;
  const result = Math.round(
    myProgress_Weight.value /
      ((myProgress_Height.value / 100) * (myProgress_Height.value / 100))
  );
  result_BMI.innerHTML = result;
  if (result <=17) {
    Description.innerHTML = "کم وزنی";
  }
  else if (result<=25){
    Description.innerHTML = "محدوده بهینه";
  }
  else if (result<=30){
    Description.innerHTML = "اضافه وزن ";
  }
  else if (result>=40){
    Description.innerHTML = "الفاتحه ";
  }
 


}

Calculate_btn.addEventListener("click", result_Bmi);
