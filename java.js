// Fetch and display data from data.json
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Hobbies
    const hobbies = data.filter(item => item.type === 'hobby');
    const hobbiesList = document.getElementById('hobbies-list');
    if (hobbiesList) {
      hobbiesList.innerHTML = hobbies.map(h => `<li>${h.title}</li>`).join('');
    }

    // Favorite Books
    const books = data.filter(item => item.type === 'book');
    const booksList = document.getElementById('books-list');
    if (booksList) {
      booksList.innerHTML = books.map(b => `<li><strong>${b.title}</strong>: ${b.reason}</li>`).join('');
    }

    // Favorite Websites & Startups
    const sites = data.filter(item => item.type === 'website' || item.type === 'startup');
    const sitesList = document.getElementById('sites-list');
    if (sitesList) {
      sitesList.innerHTML = sites.map(s => `<li><strong>${s.title}</strong>: ${s.reason}</li>`).join('');
    }

    // Achievements
    const achievements = data.filter(item => item.type === 'achievement');
    const achievementsList = document.querySelector('#achievements ul');
    if (achievementsList) {
      achievementsList.innerHTML = achievements.map(a => 
        `<li>• ${a.title} (${a.year})</li>`
      ).join('');
    }
  });