import type { Meta, StoryObj } from "@storybook/angular"
import { RoundComponent } from "../app/components/round.component"

const meta: Meta<RoundComponent> = {
  title: 'Lib/Round',
  component: RoundComponent,
};

export default meta
type Story = StoryObj<RoundComponent>

export const Default: Story = {}

export const rodada_1: Story = {
  args: {
    num: 1
  },
}
