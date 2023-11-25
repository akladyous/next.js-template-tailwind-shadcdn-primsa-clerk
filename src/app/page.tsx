import { ThemeToggler } from '@/components/theme/ThemeToggler';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <main>
      <p className=''>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at eius eum, facere ipsa qui
        praesentium ab vero deleniti delectus eveniet doloribus minus ex pariatur reiciendis quos
        officia optio aliquid.
      </p>
      <ThemeToggler />
      <UserButton />
    </main>
  );
}
