import { Component } from "@angular/core"
import { RoundsComponent } from "./rounds.component"
import { RankingComponent } from "./ranking.component"
import { MatchService } from "../services/match.service"

@Component({
  selector: 'championship',
  standalone: true,
  imports: [ RoundsComponent, RankingComponent ],
  template: `
    <h1 class="header">Brasileirão</h1>
    <div class="championship">
      <rounds [max]="matches.getMaxRounds()" />
      <ranking />
    </div>
  `,
  styles: [`
    .header {
      text-align: center;
      margin: 0;
    }
    .championship {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
  `]
})
export class ChampionshipComponent {
  matches!: MatchService // = ????
}