const passos = [2, 7, 13, 16, -3, -6, -9, -15];
const pNames = ['Punch', 'Bend', 'Upset', 'Shrink', 'Light Hit', 'Medium Hit', 'Heavy Hit', 'Draw'];

const calcula = (destino, pos = 0) => {
  if(!destino) return {steps: 0, moves: {}}
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
    const movimentoIndex = passos.indexOf(movimento)
    if(!moves[pNames[movimentoIndex]]) {
      moves[pNames[movimentoIndex]] = 1;
    } else {
      moves[pNames[movimentoIndex]] += 1;
    }
  }
  return {steps, moves}
}

const createMoveList = (valArr) => {
  const moveList = document.getElementById('moveList');
  moveList.innerHTML = '';
  valArr.forEach(value => {
    const li = document.createElement('li');
    li.innerHTML = `${value[0]}: ${value[1]}x`;
    moveList.appendChild(li);
  });
}

const test = () => {
  const stepsP = document.getElementById('steps');
  const center = parseInt(document.getElementById('target').value);
  const offsets = [
    parseInt(document.getElementById('move1').value),
    parseInt(document.getElementById('move2').value),
    parseInt(document.getElementById('move3').value),
  ];
  const offset = offsets.reduce((acc, cur) => cur + acc, 0);
  const target = center + offset;
  const result = calcula(target);
  stepsP.innerHTML = result.steps
  const movesArr = Object.entries(result.moves);
  createMoveList(movesArr);
}
