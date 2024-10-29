import * as fs from 'fs';

export class Faturamento {
  private _faturamento: number[];
  constructor(faturamento: number[]) {
    this._faturamento = faturamento;
  }

  calcular() {
    if (this._faturamento.length == 0) return `Vetor vazio`;

    const menorValor = Math.min(...this._faturamento);
    const maiorValor = Math.max(...this._faturamento);
    const media = this._faturamento.reduce((ac, val) => ac + val, 0) / this._faturamento.length;

    const diasAcima = this._faturamento.filter(faturamento => faturamento > media).length;

    return {
      menorValor,
      maiorValor,
      diasAcimaDaMedia: diasAcima
    }
  }

  file(files: string) {
    const file = fs.readFileSync(files, 'utf-8');
    const json = JSON.parse(file);
    return json;
  }
}