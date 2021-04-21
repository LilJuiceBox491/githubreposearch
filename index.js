// Import
const axios = require('axios');

// Function Definition
const getRepos = async({
    username = 'LilJuiceBox491',
    page = 1,
    per_page = 30
} = {}) => {
    try {
        const repos = await axios.get(`https://api.github.com/users/${username}/repos?page=${page}&per_page=${per_page}&sort=updated`);
        return repos.data.map((repo) => {
            return {
                name: repo.name,
                url: repo.html_url,
                description: repo.description,
                stars: repo.stargazers_count
            };
        }).sort((first, second) => second.stars - first.stars);
    } catch (error) {
        return [];
    }
};

// Export
module.exports = { getRepos };