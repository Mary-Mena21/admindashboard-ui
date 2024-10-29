import cuteUL from '../img/cuteUL.png';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
// import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ThemeToggler } from './ThemeToggler';

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white pay-2 px-5 flex justify-between">
      <Link href="/">
        <Image
          src={cuteUL}
          alt="cuteU"
          width={40}
          height={40}
          style={{ borderRadius: '50%', border: '2px solid orange' }}
        />
      </Link>
      <Link href="/login">Login</Link> | <Link href="/register">Register</Link>
      <ThemeToggler />
      <DropdownMenu>
        <DropdownMenuTrigger
          style={{ borderRadius: '50%', border: '2px solid orange' }}
        >
          {/* <DropdownMenuTrigger className="focus:outline-none"> */}{' '}
          <Avatar>
            {/* <AvatarImage src="https://i.pravatar.cc/150?img=32" />
          <AvatarFallback>UL</AvatarFallback> */}
            <AvatarImage
              src="https://github.com/shadcn.png"
              width={40}
              height={40}
              style={{ borderRadius: '50%' }}
            />
            <AvatarFallback className="text-black">CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/logout">Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
