'use client';

import { Route } from 'next';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent } from '@/components/ui/tabs';

function DashboardTab({ data, status, name }: { data: any; status: string; name: string }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const filteredData = data.filter((user: any) => status === 'All' || user.status === status);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = filteredData.slice(startIndex, endIndex);

  const getPaginationNumbers = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    } else if (page === 1) {
      return [1, 2, 3];
    } else if (page === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    } else {
      return [page - 1, page, page + 1];
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const router = useRouter();

  const handleClick = (user_id: string) => {
    router.push(('/admin/submission/' + user_id) as Route<string>);
  };

  return (
    <TabsContent value={name}>
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>Submissions</CardTitle>
          <CardDescription>Manage user acre submissions.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Projected Revenue</TableHead>
                <TableHead className="hidden md:table-cell">Created at</TableHead>
                <TableHead>Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((user: any) => (
                <TableRow key={user.id}>
                  <TableCell
                    className="cursor-pointer font-medium underline"
                    onClick={() => handleClick(user.id)}
                  >
                    {user.name}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{user.status}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{user.total_revenue}</TableCell>
                  <TableCell className="hidden md:table-cell">{user.created_at}</TableCell>
                  <TableCell className="hidden md:table-cell">{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-muted-foreground text-xs">
            Showing <strong>{startIndex + 1 + '-' + endIndex}</strong> of{' '}
            <strong>
              {data.filter((user: any) => status === 'All' || user.status === status).length}
            </strong>{' '}
            submissions
          </div>
        </CardFooter>
        <Pagination className="mb-4">
          <PaginationContent>
            <PaginationItem className="cursor-pointer">
              <PaginationPrevious onClick={handlePrevious} />
            </PaginationItem>
            {getPaginationNumbers().map((num) => (
              <PaginationItem key={num} className="cursor-pointer">
                <PaginationLink isActive={num === page} onClick={() => setPage(num)}>
                  {num}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem className="cursor-pointer">
              <PaginationNext onClick={handleNext} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Card>
    </TabsContent>
  );
}

export default DashboardTab;
