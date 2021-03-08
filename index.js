let myFunc = () => {
  let num1 = Number(prompt("enter first number"));
  let num2 = Number(prompt("enter second number"));

  if (num2 >= 2 && num2 < 36 && !Number.isNaN(num1) && !Number.isNaN(num2)) {
    let result = num1.toString(num2);
    document.getElementById("text").innerText = result;
  } else {
    document.getElementById("text").innerText = "Некорректный ввод !";
  }
};
