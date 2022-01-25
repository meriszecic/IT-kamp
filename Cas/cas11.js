function capitaliseString() {                      // pravljenje funkcije 
  let fox = "the quick brown fox";                 // pisanje varijable
  fox = fox.split(" ");                            // razdvanje reci na razmaku
  for (let i = 0; i < fox.length; i++) {           // for petlja i prolazenje kroz reci
    let rec = fox[i];                              // 'rec' predstavlja to prolazenje kroz odvojene reci 
    rec[0] = rec[0].toUpperCase();                 // prvo slovo reci ce se pisati veliko i bice veliko 
    rec = rec.join("");                            // spajanje reci normlno 
    fox[i] = rec;                                  // 
  }
  fox = fox.join(" ");                             // te spojene reci da se razdvoje razmakom
  console.log(fox);                                // ispisivanje reci
}

capitaliseString();                                // pozivanje funkcije


