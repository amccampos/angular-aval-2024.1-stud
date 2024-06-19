import { Component } from "@angular/core"
import { RankingService } from "../services/ranking.service"
import { TeamComponent } from "./team.component"

@Component({
  selector: 'ranking',
  standalone: true,
  imports: [ TeamComponent ],
  template: `
    <div>
      <h2>Classificação</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Equipe</th>
            <th>Pt</th>
            <th>Jg</th>
            <th>Vi</th>
            <th>Em</th>
            <th>De</th>
            <th>Gp</th>
            <th>Gc</th>
            <th>Sg</th>
          </tr>
        </thead>
        <tbody>
          @for (elm of this.ranking.sorted(); track elm[0]) {
            <tr class="t-right">
              <td>{{ $index + 1 }}</td>
              <td><team [id]="elm[0]" flag="left" /></td>
              <td>{{ elm[1].pt }}</td>
              <td>{{ elm[1].jg }}</td>
              <td>{{ elm[1].vi }}</td>
              <td>{{ elm[1].em }}</td>
              <td>{{ elm[1].de }}</td>
              <td>{{ elm[1].gp }}</td>
              <td>{{ elm[1].gc }}</td>
              <td>{{ elm[1].sg }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `
})
export class RankingComponent {
  ranking!: RankingService // = ???
}