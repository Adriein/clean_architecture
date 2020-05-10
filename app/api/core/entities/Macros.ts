export default class Macros {
  constructor(
    private carbohidrate: number,
    private protein: number,
    private fiber: number,
    private fat: number
  ) {
    this.carbohidrate = carbohidrate;
    this.protein = protein;
    this.fiber = fiber;
    this.fat = fat;
  }

  get macros() {
    return {
      carbohidrates: this.carbohidrate,
      protein: this.protein,
      fat: this.fat,
      fiber: this.fiber,
    };
  }
}
