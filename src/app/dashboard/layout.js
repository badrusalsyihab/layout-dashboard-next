import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col lg:flex-row">
            <Sidebar />
            <div className="flex-1 p-4 lg:p-8">{children}</div>
        </div>
    );
}