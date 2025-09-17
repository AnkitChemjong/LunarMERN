import { createFileRoute } from '@tanstack/react-router'
import Profile from '../component/Profile'

export const Route = createFileRoute('/profile')({
  component: Profile,
})

