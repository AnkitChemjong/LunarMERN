import { createFileRoute } from '@tanstack/react-router'
import NotFound from '../component/NotFound';

export const Route = createFileRoute('/__notfound')({
  component: NotFound,
});
