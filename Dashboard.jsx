import Navbar from "../components/layout/Navbar";
import SummaryCards from "../components/dashboard/SummaryCards";

import TransactionForm from "../components/transactions/TransactionForm";
import TransactionList from "../components/transactions/TransactionList";

import FinancialPieChart from "../components/charts/FinancialPieChart";
import MonthlyChart from "../components/charts/MonthlyChart";
import TopCategories from "../components/dashboard/TopCategories";
import FinancialInsights from "../components/dashboard/FinancialInsights";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
      <Navbar />

      <main className="max-w-7xl mx-auto p-6">
        {/* Page Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-slate-800">
            Track Your Expenses
          </h2>

          <p className="text-slate-500 mt-2">Welcome back 👋</p>
        </div>

        {/* Summary Cards */}
        <SummaryCards />

        {/* Form + Pie Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-1">
            <TransactionForm />
          </div>

          <div className="lg:col-span-2">
            <FinancialPieChart />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Left */}
          <div className="flex flex-col gap-6 h-full">
            <MonthlyChart />
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6 h-full">
            <TopCategories />
            <FinancialInsights />
          </div>
        </div>

        {/* Transactions */}
        <div className="mt-6">
          <TransactionList />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
