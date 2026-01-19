//  # 2️⃣ Calculadora de partidas Rankeadas

function xp(vitorias, derrotas) {
   let saldoVitorias = vitorias - derrotas;

   if (vitorias >= 0 && vitorias <= 10) {
      console.log(`O Heroi tem saldo de ${saldoVitorias} e está no nivel de Ferro`);
   } else if (vitorias >= 11 && vitorias <= 20) {
      console.log(`O Heroi tem saldo de ${saldoVitorias} e está no nivel de Bronze`);
   } else if (vitorias >= 21 && vitorias <= 50) {
      console.log(`O Heroi tem saldo de ${saldoVitorias} e está no nivel de Prata`);
   } else if (vitorias >= 51 && vitorias <= 80) {
      console.log(`O Heroi tem saldo de ${saldoVitorias} e está no nivel de Ouro`);
   } else if (vitorias >= 81 && vitorias <= 90) {
      console.log(`O Heroi tem saldo de ${saldoVitorias} e está no nivel de Diamante`);
   } else if (vitorias >= 91 && vitorias <= 100) {
      console.log(`O Heroi tem saldo de ${saldoVitorias} e está no nivel de Lendário`);
   } else {
      console.log(`O Heroi tem saldo de ${saldoVitorias} e está no nivel de Imortal`);
   }
   return saldoVitorias;
}
xp(21, 10)


//  # Desafio concluído com sucesso ✅

