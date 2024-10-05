'use client';

import { useQuery } from '@tanstack/react-query';

import Header from '@/components/pages/admin/header';

function Analytics() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => {
      const response = await fetch('/api/admin/get_user_list');
      return await response.json();
    },
    refetchInterval: 1000 * 3,
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

  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <Header breadcrumbs={[{ href: '/admin/analytics', label: 'Analytics' }]} />
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8" />
    </div>
  );
}

export default Analytics;
