import { ChartBarIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const dummyData = [
    {
        id: 1,
        name: 'Project Alpha',
        status: 'In Progress',
        progress: 65,
        color: 'bg-blue-500',
        icon: <ChartBarIcon className="w-8 h-8 text-blue-500" />,
    },
    {
        id: 2,
        name: 'Project Beta',
        status: 'Completed',
        progress: 100,
        color: 'bg-green-500',
        icon: <CheckCircleIcon className="w-8 h-8 text-green-500" />,
    },
    {
        id: 3,
        name: 'Project Gamma',
        status: 'Pending',
        progress: 20,
        color: 'bg-yellow-500',
        icon: <ClockIcon className="w-8 h-8 text-yellow-500" />,
    },
];

export default function Dashboard() {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dummyData.map((project) => (
                    <div
                        key={project.id}
                        className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="p-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    {project.icon}
                                </div>
                                <h3 className="text-xl font-semibold">{project.name}</h3>
                            </div>
                            <p className="text-gray-600 mb-4">Status: {project.status}</p>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className={`${project.color} h-2 rounded-full`}
                                    style={{ width: `${project.progress}%` }}
                                ></div>
                            </div>
                            <p className="text-sm text-gray-500 mt-2">{project.progress}% Complete</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-500">📝</span>
                            </div>
                            <div>
                                <p className="font-semibold">New Task Assigned</p>
                                <p className="text-sm text-gray-500">You have been assigned a new task.</p>
                            </div>
                        </li>
                        <li className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-green-500">✅</span>
                            </div>
                            <div>
                                <p className="font-semibold">Task Completed</p>
                                <p className="text-sm text-gray-500">Project Beta has been completed.</p>
                            </div>
                        </li>
                        <li className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                <span className="text-yellow-500">⚠️</span>
                            </div>
                            <div>
                                <p className="font-semibold">Task Delayed</p>
                                <p className="text-sm text-gray-500">Project Gamma is behind schedule.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}