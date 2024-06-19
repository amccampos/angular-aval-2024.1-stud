import type { Meta, StoryObj } from "@storybook/angular"
import { RankingComponent } from "../app/components/ranking.component"

const meta: Meta<RankingComponent> = {
  title: 'Lib/Ranking',
  component: RankingComponent,
}

export default meta
type Story = StoryObj<RankingComponent>

export const Default: Story = {}
