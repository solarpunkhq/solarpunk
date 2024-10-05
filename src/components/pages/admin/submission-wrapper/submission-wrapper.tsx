'use client';

import { useQuery } from '@tanstack/react-query';
import * as L from 'leaflet';
import 'leaflet.gridlayer.googlemutant/dist/Leaflet.GoogleMutant';

import Submission from './submission/submission';

console.log(L);

function SubmissionWrapper({ user_id }: { user_id: string }) {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['submissionData'],
    queryFn: async () => {
      const response = await fetch('/api/admin/get_submission/' + user_id);
      return await response.json();
    },
  });

  if (isPending) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        'An error has occurred: ' + {error.message}
      </div>
    );
  }

  return <Submission data={data} />;
}

export default SubmissionWrapper;
