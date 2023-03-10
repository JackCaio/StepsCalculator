# StepsCalculator

## Introdução

Projeto inspirado pelo puzzle para forja apresentado no mod [Terrafirmacraft](https://www.curseforge.com/minecraft/mc-mods/terrafirmacraft#:~:text=TerraFirmaCraft%20(TFC)%20is%20a%20total,a%20brand%20new%20immersive%20setting.) do jogo [Minecraft](https://www.minecraft.net/pt-pt).

O puzzle consiste basicamente em sair do ponto 0 e chegar a um ponto alvo aleatório utilizando passos de valores `+2, +7, +13, +16, -3, -6, -9 e -15`, sendo os três últimos passos predeterminados e havendo melhores recompensas, se forem usados menos passos.

## Modo de uso

Pelo que pude descobrir pesquisando, em cada seed, os "centros", que são os pontos de alinhamento da sua posição com sua posição alvo, muda, e o jogador deve descobrir sozinho o "centro" da parte que está tentando criar.

Após o centro estar descoberto, o jogador deve preencher os campos `Target` com o centro descoberto, e os `selects` com os passos estabelecidos pelo jogo, e, então, apertar o botão `Calculate`.

O site então irá, então, tentar encontrar o menor número de passos necessários, para que o usuário precise apenas adicionar os passos pré-selecionados, e chegar ao resultado do puzzle.