export interface Estados {
  estado: string;
  valor: number;
}

export class Percentuais {
  private _faturamentos: Estados[];
  constructor(faturamentos: Estados[]) {
    this._faturamentos = faturamentos;
  }

  percentuais() {
    const total = this._faturamentos.reduce((ac, fat) => ac + fat.valor, 0);

    const faturamentos = this._faturamentos.map(fat => {
      return {
        estado: fat.estado,
        percentual: (fat.valor / total) * 100
      }
    })
    return faturamentos;
  }
}