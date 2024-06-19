import type { Meta, StoryObj } from "@storybook/angular"
import { TeamComponent } from "../app/components/team.component"

const meta: Meta<TeamComponent> = {
  title: 'Lib/Team',
  component: TeamComponent,
}

export default meta
type Story = StoryObj<TeamComponent>

export const flamengo: Story = {
  args: {
    id: 'fla',
    flag: 'left',
  },
}

export const bahia: Story = {
  args: {
    id: 'bah',
    flag: 'right',
  },
}

export const gremio: Story = {
  args: {
    id: 'gre',
  },
}
