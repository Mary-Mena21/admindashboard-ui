import cuteUL from '../img/cuteUL.png';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white pay-2 px-5 flex justify-between">
      <Link href="/">
        <Image
          src={cuteUL}
          alt="cuteU"
          width={40}
          height={40}
          style={{ borderRadius: '50%' }}
        />
      </Link>
      <Link href="/login">Login</Link> | <Link href="/register">Register</Link>
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
    </div>
  );
};

export default Navbar;
