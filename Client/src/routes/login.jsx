import { createFileRoute } from '@tanstack/react-router'
import Login from '../component/UserForm'

export const Route = createFileRoute('/login')({
  component: Login,
});
