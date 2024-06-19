import { Component, input, signal } from "@angular/core"
import { RoundComponent } from "./round.component"

@Component({
  selector: 'rounds',
  standalone: true,
  imports: [RoundComponent],
  template: `
    <div>
      <h2 class="flex justify-center">
        <button class="mx-10 bg-none b-none pointer" (click)="dec()"> &lt; </button>
        <!-- Rodada /* apresentar a rodada aqui */ -->
        <button class="mx-10 bg-none b-none pointer" (click)="inc()"> &gt; </button>
      </h2>
      <!-- Apresentar a rodada aqui -->
    </div>
  `
})
export class RoundsComponent {
  max = input<number>(1)
  round = signal(1)

  dec() {
    if (this.round() > 1) {
      this.round.update(v => v - 1)
    }
  }

  inc() {
    if (this.round() < this.max()) {
      this.round.update(v => v + 1)
    }
  }
}