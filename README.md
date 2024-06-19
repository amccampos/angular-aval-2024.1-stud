# Tabela do Brasileirão

Solução da avaliação da 3ª ferramenta da disciplina de frameworks javascript para frontend, edição 2024.1 (Angular).

A atividade consiste em reproduzir o storybook apresentado na pasta storybook-static. Para consultá-la, execute o script abaixo:

```
npm run demo
```

Para isso, você deve:

1) Transformar as classes presentes nos arquivos da pasta `services` em serviços Angular.

2) Injetar nos componentes abaixo os serviços que eles utilizam:
  - TeamComponent: TeamService
  - MatchComponent: MatchService
  - RoundComponent: MatchService
  - RankingComponent: RankingService
  - Championship: MatchService

3) Definir no componente TeamComponent duas propriedades:
  - `id`: obrigatória e do tipo `TeamId`;
  - `flag` opcional e do tipo string, podendo assumir os valores 'left' ou 'right'.

4) Ainda no componenten TeamComponent, apresentar a imagem da bandeira apenas se a propriedade `flag` for passada.

5) Defina no componente MatchComponent um dado reativo chamado `match` que representa a partida entre as equipes passadas nas propriedades `teamA` e `teamB`. Utilize o método `getMatch()` do serviço `matches`.

6) Ainda no componente MatchComponent, apresente a partida somente se o dado descrito acima (`match`) existir. Se não existir, apresente a mensagem "Partida inválida".

7) Em RoundComponent, apresente todas as partidas da rodada que o componente recebe na propriedade `num`.

8) Em RoundsComponent, declare uma propriedade opcional chamada `max`. Se não passarem o valor dessa propriedade, ela deve assumir o valor 1.

9) Defina um dado reativo chamado `round` com valor inicial de 1.

10) Use essa dado reativo para apresentar a rodada (usando o componente RoundComponent no local marcado) e para indicar o número da atual rodada (também indicado no arquivo).