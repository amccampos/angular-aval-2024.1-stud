import { Component, input } from "@angular/core"
import { TeamComponent } from "./team.component"
import { TeamId } from "../services/team.service"
import { MatchService } from "../services/match.service"

@Component({
  selector: 'match',
  standalone: true,
  imports: [ TeamComponent ],
  template: `
    <div class="flex align-center m-3">
      <team [id]="teamA()" flag="right"/>
      <input #scoreA type="text" maxlength="2"
        class="mx-5 small t-center b-none b-bottom"
        [value]="match()?.score?.[0]"
        (change)="updateScore(0, scoreA.value)"
      />
      X
      <input #scoreB type="text" maxlength="2"
        class="mx-5 small t-center b-none b-bottom"
        [value]="match()?.score?.[1]"
        (change)="updateScore(1, scoreB.value)"
      />
      <team [id]="teamB()" flag="left"/>
    </div>
  `
})
export class MatchComponent {
  matches!: MatchService // = ????
  teamA = input.required<TeamId>()
  teamB = input.required<TeamId>()

  updateScore(index: number, score: string) {
    const match = this.match()
    if (match) {
      match.score ??= [0, 0]
      match.score[index] = parseInt(score)
      this.matches.updateScore(match)
    }
  }
}