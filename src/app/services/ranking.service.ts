import { computed, inject } from "@angular/core"
import { MatchService } from "./match.service"
import { TeamId, TeamService } from "./team.service"

export interface TeamsTable {
  pt: number // pontos ganhos
  jg: number // jogos realizados
  vi: number // número de vitórias
  em: number // número de empates
  de: number // número de derrotas
  gp: number // gols a favor
  gc: number // gols contra
  sg: number // saldo de gols
}

export class RankingService {
  private matchesService = inject(MatchService)
  private teamsService = inject(TeamService)

  sorted = computed(() => {
    // transforma o objeto com as equipes em um dicionário com valores iniciais para cada equipe.
    const dic = new Map<TeamId,TeamsTable>()
    this.teamsService.teams.forEach(team => dic.set(team.id as TeamId, {
      // cada equipe tem sua tabela zerada
      pt: 0, jg: 0, vi: 0, em: 0, de: 0, gp: 0, gc: 0, sg: 0
    }))

    // atualiza o dicionário com os dados dos jogos (quem ganhou, perdeu, empatou...)
    this.matchesService.matches().forEach(match => {
      if (match.score) { // só atualiza se a partida já foi jogada
        const teamA = dic.get(match.teams[0])
        const teamB = dic.get(match.teams[1])
        if (teamA && teamB) {
          // caso de empate
          if (match.score[0] === match.score[1]) {
            this.draw(teamA, match.score[0])
            this.draw(teamB, match.score[0])
          }
          else {
            // teamA ganhou de teamB
            if (match.score[0] > match.score[1]) {
              this.win(teamA, match.score[0], match.score[1])
              this.lose(teamB, match.score[1], match.score[0])
            }
            // teamB ganhou de teamA
            else {
              this.win(teamB, match.score[1], match.score[0])
              this.lose(teamA, match.score[0], match.score[1])
            }
          }
        }
      }
    })
    // classifica as equipes em função dos critérios do campeonato
    return [...dic].sort(this.compareTeams)    
  })

  /** método utilitário para ajustar os dados da tabela da equipe vencedora */
  private win(team: TeamsTable, gp: number, gc: number) {
    team.pt += 3
    team.jg++
    team.vi++
    team.gp += gp
    team.gc += gc
    team.sg = team.gp - team.gc
  }

  /** método utilitário para ajustar os dados da tabela da equipe perdedora */
  private lose (team: TeamsTable, gp: number, gc: number) {
    team.jg++
    team.de++
    team.gp += gp
    team.gc += gc
    team.sg = team.gp - team.gc
  }

  /** método utilitário para ajustar os dados da tabela da equipe que empata */
  private draw (team: TeamsTable, goals: number) {
    team.pt++
    team.jg++
    team.em++
    team.gp += goals
    team.gc += goals
  }

  /** método utilitário para comparar/ordenar dois times */
  private compareTeams(a: [TeamId, TeamsTable], b: [TeamId, TeamsTable]) {
    const teamA = a[1]
    const teamB = b[1]
    
    // primeiro, pela pontuação
    if (teamA.pt !== teamB.pt) {
      return teamB.pt - teamA.pt
    }

    // segundo, pelo saldo de gols
    if (teamA.sg !== teamB.sg) {
      return teamB.sg - teamA.sg
    }

    // terceiro, pelo número de gols a favor
    if (teamA.gp !== teamB.gp) {
      return teamB.gp - teamA.gp
    }

    // por fim (deixando de lado os critérios de cartão), de forma aleatória
    return Math.random() - 0.5
  }

}