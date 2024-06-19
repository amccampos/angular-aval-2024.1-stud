import { Component, computed } from "@angular/core"
import { TeamService } from "../services/team.service"

@Component({
  selector: 'team',
  standalone: true,
  template: `
    <div class="flex align-center w-fixed" [style]="{ flexDirection: flag() === 'left' ? 'row' : 'row-reverse'}">
      <img [src]="flagSrc()" width="20" height="20" class="mx-5" />
      <span>{{ team()?.name }}</span>
    </div>  
  `
})
export class TeamComponent {
  service!: TeamService // = ????

  team = computed(() => this.service.getById(this.id()))
  flagSrc = computed(() => `/flags/${ this.team()?.flag }`)
}