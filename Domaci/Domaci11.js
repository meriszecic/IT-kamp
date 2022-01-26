function coins() {
  operacija = Number(prompt("Unesite broj:"));
  br = [25, 10, 5, 2, 1];
  for (let i = 0; i < br.length; i++) {
    // br[i] = operacija;
    // switch (operacija) {
    //   case "+":
    //     alert(br[i] + br[i]);
    //     break;
    //   case "-":
    //     alert(br[i] - br[i]);
    //     break;
    //   case "*":
    //     alert(br[i] * br[i]);
    //     break;
    //   case "/":
    //     alert(br[i] / br[i]);
    //     break;

     //   default:
    //     alert("pogresan unos");
    //     break;
    // }
  }
  console.log(br)
}
coins()
