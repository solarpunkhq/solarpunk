import { Link } from '@/i18n/routing';
import { CircleHelp } from 'lucide-react';

function Schedule() {
  return (
    <div className="flex w-full items-start justify-start bg-gray-94 p-4 text-14">
      <CircleHelp />
      <div className="ml-2 flex flex-col items-start justify-start">
        <b>Have questions?</b>
        <Link href="https://cal.com/team/solarpunk" className="underline">
          Schedule a call
        </Link>
      </div>
    </div>
  );
}

export default Schedule;
