import Layout from "../components/Layout";
import DashboardMetrics from "../components/DashboardMetrics";
import PieChart from "../components/PieChart";
import BarGraph from "../components/BarGraph";
import InvoicesList from "../components/InvoicesList";
import mockData from "../data/mockData";

const Dashboard = () => (
    <Layout>
        <DashboardMetrics data={mockData.metrics}/>
        <PieChart data={mockData.pieChartData} />
        <BarGraph data={mockData.barGraphData} />
        <InvoicesList data={mockData.invoices} />
    </Layout>
);

export default Dashboard;