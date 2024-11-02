import { Link } from '@/i18n/routing';

const Header = () => {
  return (
    <h2 className="mb-20 mt-8 flex items-center text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
      {
        //@ts-ignore
        <Link href="/blog" className="hover:underline">
          SolarpunkHQ.
        </Link>
      }
    </h2>
  );
};

export default Header;
