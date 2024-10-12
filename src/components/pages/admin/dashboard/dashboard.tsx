'use client';

import { useQuery } from '@tanstack/react-query';
import { File, PlusCircle } from 'lucide-react';

import Header from '@/components/pages/admin/header';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import DashboardTab from './dashboard-tab';

function Dashboard() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => {
      const response = await fetch('/api/admin/get_users');
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

  function handleExport() {
    function convertToCSV(objArray: any) {
      const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
      let str = '';
      let headerRow = '';
      for (let index in array[0]) {
        if (headerRow !== '') {
          headerRow += ',';
        }
        headerRow += `"${index}"`;
      }
      str += headerRow + '\r\n';

      for (let i = 0; i < array.length; i++) {
        let line = '';
        for (let index in array[i]) {
          if (line !== '') {
            line += ',';
          }
          let value = array[i][index];
          // Enclose values in double quotes to handle commas within values
          line += `"${value}"`;
        }
        str += line + '\r\n';
      }
      return str;
    }

    const csv = convertToCSV(data);

    const blob = new Blob([csv], { type: 'text/csv' });

    // programmatically click a link to download the CSV
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <Header breadcrumbs={[{ href: '/admin', label: 'Dashboard' }]} />
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList className="hidden md:flex">
              <TabsTrigger value="all" className="hidden md:flex">
                All
              </TabsTrigger>
              <TabsTrigger value="details" className="hidden md:flex">
                Details
              </TabsTrigger>
              <TabsTrigger value="review" className="hidden md:flex">
                In Review
              </TabsTrigger>
              <TabsTrigger value="planning" className="hidden md:flex">
                Planning
              </TabsTrigger>
              <TabsTrigger value="deployment" className="hidden md:flex">
                Deployment
              </TabsTrigger>
              <TabsTrigger value="finished" className="hidden md:flex">
                Finished
              </TabsTrigger>
              <TabsTrigger value="rejected" className="hidden md:flex">
                Rejected
              </TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <Button size="sm" variant="outline" className="h-8 gap-1" onClick={handleExport}>
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
              </Button>
              <Button
                size="sm"
                className="h-8 gap-1"
                onClick={() => (window.location.href = '/onboarding')}
              >
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Submission</span>
              </Button>
            </div>
          </div>
          <DashboardTab data={data} status={'All'} name="all" />
          <DashboardTab data={data} status={'Details'} name="details" />
          <DashboardTab data={data} status={'In Review'} name="review" />
          <DashboardTab data={data} status={'Planning'} name="planning" />
          <DashboardTab data={data} status={'Deployment'} name="deployment" />
          <DashboardTab data={data} status={'Finished'} name="finished" />
          <DashboardTab data={data} status={'Rejected'} name="rejected" />
        </Tabs>
      </main>
    </div>
  );
}

export default Dashboard;
