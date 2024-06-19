import type { Meta, StoryObj } from "@storybook/angular"
import { ChampionshipComponent } from "../app/components/championship.component"

const meta: Meta<ChampionshipComponent> = {
  title: 'Lib/Championship',
  component: ChampionshipComponent,
}

export default meta
type Story = StoryObj<ChampionshipComponent>

export const Default: Story = {}
