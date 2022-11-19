import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import Router from 'next/router';

const MainNavbar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center bg-amber-600 px-8 py-2">
      <div className="flex items-center gap-2">
        <Image src="/appetite_logo.svg" width={100} height={50} alt="logo" className="rounded-full text-white" />
      </div>
      <div className="space-x-4 text-white w-auto">
        {session ? (
          <>
            {Router.pathname !== '/profile' ? (<Link href="/profile">
              <button className="button-smigolf font-bold text-white">Perfil</button>
            </Link>) : (<Link href="/dashboard">
              <button className="button-smigolf font-bold text-white">Dashboard</button>
            </Link>)}
            <button className="button-smigolf font-bold text-white" onClick={() => signOut({ callbackUrl: '/' })}>
              Sign out
            </button>
          </>
        ) : (
          <button
            className="button-smigolf font-bold text-white"
            onClick={() => signIn(undefined, { callbackUrl: '/dashboard' })}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default MainNavbar;
