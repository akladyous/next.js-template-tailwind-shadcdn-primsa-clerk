import { ThemeToggler } from '@/components/theme/ThemeToggler';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <main className=' border m-2'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at eius eum, facere ipsa qui praesentium ab vero deleniti delectus eveniet doloribus minus
        ex pariatur reiciendis quos officia optio aliquid.
      </p>
      <p>xx</p>
      <DropdownMenu />
    </main>
  );
}
