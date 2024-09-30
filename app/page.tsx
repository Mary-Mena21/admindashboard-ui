import DashboardCard from '@/components/dashboard/DashboardCard';
import { Button } from '@/components/ui/button';
import type { NextPage } from 'next';
export default function Home() {
  return (
    <>
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-5xl font-bold">Admin Dashboard</h1>
      <Button variant="secondary">Click me</Button>
    </div> */}
      {/* <h1 className="text-5xl font-bold">Admin Dashboard</h1> */}
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard />
      </div>
      <Button variant="secondary">Click me</Button>
    </>
  );
}
