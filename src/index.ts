import { Faturamento } from "./faturamento/Faturamento";
import { Fibonacci } from "./fibonacci/Fibonacci";
import { Estados, Percentuais } from "./percentuais/Percentuais";
import { Soma } from "./soma/Soma";
import { Reverse } from "./string/Reverse";

const soma = new Soma(13, 0, 0).somar();
console.log(`Resultado da soma: ${soma}`)
console.log('------------------------------------------------');

const fib = new Fibonacci(21).isFibonacci();
console.log(`É fibonaccci? ${fib}`);
console.log('------------------------------------------------');

const faturamento = new Faturamento([20, 10, 30, 50, 40, 1000]).calcular();
console.log(faturamento);

console.log('--------------------------------------------------');
const reverter = new Reverse('teste').reverse();
console.log(reverter);

console.log('---------------------------------------------------');

const faturamentos: Estados[] = [
  { estado: 'SP', valor: 67836.43 },
  { estado: 'RJ', valor: 36678.66 },
  { estado: 'MG', valor: 29229.88 },
  { estado: 'ES', valor: 27165.48 },
  { estado: 'Outros', valor: 19849.53 }
];

console.log('Percentuais:');

const percentuais = new Percentuais(faturamentos).percentuais();
console.log(percentuais);