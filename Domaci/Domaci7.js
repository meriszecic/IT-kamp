// operacije = Number(prompt("Unesite broj za zeljenu operaciju: 1. sabiranje, 2. oduzimanje, 3. mnozenje, 4. deljenje i 5. prekid programa"))
// while (true) {
//     if (operacije === 5){
//         alert("Program se prekida")
//         break
//     }
// }

while (true) {
  operacija = prompt("Unesite broj: ");

  if (operacija == "p") {
    alert("prekid programa");
    break;
  }

  br1 = Number(prompt("Unesite prvi broj: "));
  br2 = Number(prompt("Unesite drugi broj"));

  switch (operacija) {
    case "+":
      alert(br1 + br2);
      break;
    case "-":
      alert(br1 - br2);
      break;
    case "*":
      alert(br1 * br2);
      break;
    case "/":
      alert(br1 / br2);
      break;

    default:
        alert("pogresan unos")
      break;
  }
}
