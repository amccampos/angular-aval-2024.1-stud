import type { Meta, StoryObj } from "@storybook/angular"
import { RoundsComponent } from "../app/components/rounds.component"

const meta: Meta<RoundsComponent> = {
  title: 'Lib/Rounds',
  component: RoundsComponent,
}

export default meta
type Story = StoryObj<RoundsComponent>

export const Default: Story = {
  args: {
    max: 2
  },
}
