import { createFileRoute } from '@tanstack/react-router'
import SignIn from '../component/SignIn'

export const Route = createFileRoute('/signin')({
  component: SignIn,
});
