import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import NavBar from '../component/Navbar';

export const Route = createRootRoute({
  component: () => (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <Outlet /> {/* Renders the current page */}
      </main>
      <TanStackRouterDevtools />
    </>
  )
});
