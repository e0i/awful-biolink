function getDiscordPresence() {
    fetch('https://api.lanyard.rest/v1/users/553089222551142409')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const status = data.data.discord_status;
            const statusElement = document.getElementById('discord_status');
            statusElement.textContent = status || 'No status available';
            const statusClass = status ? status.toLowerCase() : 'offline';
            const avatarImage = document.querySelector('.avatarStack-2Dr8S9 img');
            avatarImage.style.borderColor = statusClass === 'online' ? '#43B581' :
                statusClass === 'idle' ? '#F0B232' :
                statusClass === 'dnd' ? '#ED4245' :
                '#808080'; 
        })
        .catch((error) => {
            console.error('Fetch error:', error);
        });
}

getDiscordPresence();
setInterval(getDiscordPresence, 1000);
