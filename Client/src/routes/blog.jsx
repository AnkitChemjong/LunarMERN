import { createFileRoute } from '@tanstack/react-router'
import MakeBlog from '../component/MakeBlog'

export const Route = createFileRoute('/blog')({
  component:MakeBlog,
});

