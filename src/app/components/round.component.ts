import { Component, input } from "@angular/core"
import { MatchComponent } from "./match.component"
import { MatchService } from "../services/match.service"

@Component({
  selector: 'round',
  standalone: true,
  imports: [ MatchComponent ],
  template: `
    <div class="flex col align-center">
      <!-- ??? -->
    </div>
  `
})
export class RoundComponent {
  matches!: MatchService // = ????
  num = input<number>(1)
}