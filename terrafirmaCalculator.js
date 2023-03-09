const passos = [2, 7, 13, 16, -3, -6, -9, -15];

const calcula = (destino, pos = 0) => {
  const moves = {};
  let steps = 0;
  let posicao = pos;
  while(posicao !== destino) {
    const movimento = passos.reduce((acc, cur) => {
      if (Math.abs(cur + posicao - destino) < Math.abs(acc + posicao - destino)) {
        return cur;
      }
      return acc;
    });
    posicao += movimento;
    steps += 1;
    if(!moves[movimento]) {
      moves[movimento] = 1;
    } else {
      moves[movimento] += 1;
    }
  }
  return {steps, moves}
}

console.log(calcula(98));