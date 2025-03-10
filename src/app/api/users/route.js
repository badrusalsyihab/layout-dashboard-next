const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, role }),
        });
        if (response.ok) {
            alert('User added successfully!');
            // Redirect to the users list page
            window.location.href = '/dashboard/users';
        } else {
            alert('Failed to add user.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred.');
    }
};