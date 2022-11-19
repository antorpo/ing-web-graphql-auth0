import MainNavbar from 'components/molecules/MainNavbar/MainNavbar';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const ProfileView = () => {
  const { data: session } = useSession();
  return (
    <div>
      <MainNavbar />
      <div className='bg-gray-100 border border-gray-200 w-fit mx-auto py-2 px-8 mt-8 rounded-lg shadow'>
        <div className='flex justify-center my-4'>
          <Image
            src={session?.user?.image ?? ''}
            className="rounded-full"
            width={100}
            height={100}
            alt="profile picture"
          />
        </div>
        <h2 className='text-center text-4xl font-bold'>{session?.user?.name}</h2>
        <h3 className='text-center text-2xl text-gray-400 mt-2'>{session?.user?.email}</h3>
        <h4 className='text-center text-2xl font-semibold text-gray-600 mt-2'>Cliente</h4>
      </div>
    </div>
  );
};

export default ProfileView;
