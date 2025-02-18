import { lusitana } from "@/app/ui/fonts";
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "../../lib/data";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import { Suspense } from 'react';
import { LatestInvoicesSkeleton, RevenueChartSkeleton, CardSkeleton } from '@/app/ui/skeletons';
import CardWrapper  from "@/app/ui/dashboard/cards";


export default async function Page() {
  const latestInvoices = await fetchLatestInvoices();

  
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <Suspense fallback={<CardSkeleton />}>
        <CardWrapper />
      </Suspense>
      
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />} >
          <RevenueChart/>
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices/>
        </Suspense>
      </div>
    </main>
  )
}