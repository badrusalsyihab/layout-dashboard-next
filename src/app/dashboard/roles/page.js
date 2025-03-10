const dummyRoles = [
    { id: 1, name: 'Admin', description: 'Full access to all features' },
    { id: 2, name: 'Editor', description: 'Can edit content but not manage users' },
    { id: 3, name: 'Viewer', description: 'Can only view content' },
];

export default function Roles() {
    return (
        <>
            <h2 className="text-2xl font-bold mb-6">Roles</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {dummyRoles.map((role) => (
                            <tr key={role.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{role.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{role.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}