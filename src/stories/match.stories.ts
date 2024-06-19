import type { Meta, StoryObj } from "@storybook/angular"
import { MatchComponent } from "../app/components/match.component"

const meta: Meta<MatchComponent> = {
  title: 'Lib/Match',
  component: MatchComponent,
}

export default meta
type Story = StoryObj<MatchComponent>

export const vasco_x_gremio: Story = {
  args: {
    teamA: 'vas',
    teamB: 'gre',
  },
}
