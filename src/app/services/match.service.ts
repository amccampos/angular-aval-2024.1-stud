import { signal } from '@angular/core'
import { TeamId } from './team.service'
import matchesJSON from '../../assets/matches.json'

export interface MatchInterface {
  teams: TeamId[]
  round: number
  score?: number[]
}

export class MatchService {
  /** Todas as partidas (dado reativo) */
  matches = signal(matchesJSON as MatchInterface[])

  /** Retorna a partida de duas equipes. */
  getMatch(teamA: TeamId, teamB: TeamId) {
    return this.matches().find(match => match.teams[0] === teamA && match.teams[1] === teamB)
  }

  /** Retorna as partidas de uma dada rodada. */
  getRoundMatches(round: number) {
    return this.matches().filter(match => match.round === round)
  }

  /** Retorna o valor da maior rodada cadastrada nas partidas. */
  getMaxRounds() {
    return this.matches().reduce((prev, curr) => curr.round > prev ? curr.round : prev, 0)
  }

  /** Atualiza o placar de uma partida. */
  updateScore(match: MatchInterface) {
    this.matches.update(matches => {
      const idx = matches.findIndex(m => m.teams[0] === match.teams[0] && m.teams[1] === match.teams[1])
      return [
        ...matches.slice(0, idx),
        match,
        ...matches.slice(idx + 1)
      ]
    })
  }

}