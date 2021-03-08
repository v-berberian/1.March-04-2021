let myFunc = () => {
  let num1 = Number(prompt("enter first number"));
  let num2 = Number(prompt("enter second number"));
  if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
    let sum = num1 + num2;
    let floor = Math.floor(num1 / num2);
    document.getElementById("text").innerText = `Ответ: ${sum}, ${floor}`;
  } else {
    document.getElementById("text").innerText = "Некорректный ввод !";
  }
};
