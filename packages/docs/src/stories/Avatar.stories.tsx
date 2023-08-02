import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@leorsc-ignite-ui/react'

const meta: Meta<AvatarProps> = {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/Leorsc.png',
    alt: 'Leonardo Cruz',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
