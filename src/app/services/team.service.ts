import teamsJSON from "../../assets/teams.json"

export type TeamId = 'cap' | 'acg' | 'cam' | 'bah' | 'bot' | 'rbb' | 'cor' | 'cri' | 'cru' | 'cui' | 'fla' | 'flu' | 'for' | 'gre' | 'int' | 'juv' | 'pal' | 'sao' | 'vas' | 'vit'

export interface TeamI {
  id: TeamId
  name: string
  flag: string
}

export class TeamService {
  /** Todas as equipes. */
  readonly teams: TeamI[] = teamsJSON as TeamI[]

  /** Retorna os dados de uma equipe a partir de seu identificador (sigla). */
  getById(id?: TeamId) {
    return this.teams?.find(t => t.id === id)
  }
}