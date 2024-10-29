export class Soma {
  private _indice: number;
  private _soma: number;
  private _k: number;

  constructor(indice: number, soma: number, k: number) {
    this._indice = indice;
    this._soma = soma;
    this._k = k;
  }

  somar() {
    while (this._k < this._indice) {
      this._k += 1;
      this._soma = this._soma + this._k;
    }
    return this._soma;
  }

}