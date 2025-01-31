async function fetchRandomUserData() { 
    try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        const user = data.results[0];
        const name = `${user.name.first} ${user.name.last}`;
        const email = user.email;
        return { name, email };
    }
    catch (error) {
        console.error('Error fetching user data:', error);
    }
}

async function displayUserData() {
    const userData = await fetchRandomUserData();
    if (userData) {
        console.log(`User Name: ${userData.name}`);
        console.log(`User Email: ${userData.email}`);
    }
}
displayUserData();
