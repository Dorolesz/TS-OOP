import { HasAge } from "./HasAge";
import { KisAllat } from "./KisAllat";

const kisAllatok = [
    new KisAllat('Lajos','aranyhal',3),
    new KisAllat('Csipesz','papagáj',5),
    new KisAllat('Bogáncs','puli',11),
  ]

  const a: HasAge = new KisAllat('Gyuszi', 'nyuszi', 4);
  const b: HasAge = {
    eletkor: 15,
    szulinap() {this.eletkor++}
  }

//console.log(`A kisállatok: ${kisAllatok}`);