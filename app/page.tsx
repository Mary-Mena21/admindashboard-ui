import DashboardCard from '@/components/dashboard/DashboardCard';
import { Button } from '@/components/ui/button';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';
import PostTable from '@/components/posts/PostTable';
import type { NextPage } from 'next';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
export default function Home() {
  return (
    <>
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-5xl font-bold">Admin Dashboard</h1>
      <Button variant="secondary">Click me</Button>
    </div> */}
      {/* <h1 className="text-5xl font-bold">Admin Dashboard</h1> */}
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Posts"
          count={200}
          icon={<Newspaper className=" text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder className=" text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Users"
          count={750}
          icon={<User className=" text-slate-500" size={72} />}
        />
        <DashboardCard
          title="Comments"
          count={1280}
          icon={<MessageCircle className=" text-slate-500" size={72} />}
        />
      </div>
      <AnalyticsChart />
      <PostTable />
      {/* <Button variant="secondary">Click me</Button> */}
    </>
  );
}
