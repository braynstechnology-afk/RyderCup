// Store Ryder Cup data
let ryderCupYears = [];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadYears();
    displayYears();
    updateStats();
    
    // Form submission
    document.getElementById('year-form').addEventListener('submit', handleFormSubmit);
});

// Load years from localStorage or use sample data
function loadYears() {
    const stored = localStorage.getItem('ryderCupYears');
    if (stored) {
        ryderCupYears = JSON.parse(stored);
    } else {
        // Sample data for demonstration
        ryderCupYears = [
            {
                year: 2023,
                winner: 'Taiwan',
                score: '14-10',
                story: 'The inaugural Ryder Cup saw Team Taiwan take an early lead with Bryan Leong\'s impressive putting game. Rich Tsai\'s consistent drives kept the momentum going. Team Korea fought hard, with Jamin Cho making a remarkable comeback on the back nine, but it wasn\'t enough to overcome the Taiwanese advantage.',
                highlight: 'Bryan Leong\'s eagle on the 12th hole',
                image: ''
            },
            {
                year: 2024,
                winner: 'Korea',
                score: '13-11',
                story: 'Team Korea came back with a vengeance this year. Tae Kyung\'s precision shots and Jamin Cho\'s strategic play proved to be the winning combination. The match went down to the wire, with the final holes deciding the champion. A truly epic battle that showcased the best of both teams.',
                highlight: 'Jamin Cho\'s clutch birdie on the 18th to secure the win',
                image: ''
            }
        ];
        saveYears();
    }
}

// Save years to localStorage
function saveYears() {
    localStorage.setItem('ryderCupYears', JSON.stringify(ryderCupYears));
}

// Display all years
function displayYears() {
    const container = document.getElementById('years-container');
    
    if (ryderCupYears.length === 0) {
        container.innerHTML = '<div class="empty-state">No Ryder Cup years added yet. Be the first to add a year!</div>';
        return;
    }
    
    // Sort years in descending order (most recent first)
    const sortedYears = [...ryderCupYears].sort((a, b) => b.year - a.year);
    
    container.innerHTML = sortedYears.map(year => createYearCard(year)).join('');
}

// Create year card HTML
function createYearCard(data) {
    const winnerClass = data.winner.toLowerCase();
    const winnerEmoji = data.winner === 'Taiwan' ? '🇹🇼' : '🇰🇷';
    
    return `
        <div class="year-card ${winnerClass}-winner">
            <div class="year-header">
                <h3 class="year-title">Ryder Cup ${data.year}</h3>
                <span class="winner-badge ${winnerClass}">${winnerEmoji} Team ${data.winner} Wins!</span>
            </div>
            ${data.score ? `<div class="year-score">Final Score: ${data.score}</div>` : ''}
            ${data.image ? `
                <div class="year-image">
                    <img src="${data.image}" alt="Ryder Cup ${data.year}" onerror="this.parentElement.style.display='none';">
                </div>
            ` : ''}
            <div class="year-story">${data.story}</div>
            ${data.highlight ? `
                <div class="year-highlight">
                    <strong>⚡ Highlight Moment:</strong> ${data.highlight}
                </div>
            ` : ''}
        </div>
    `;
}

// Update statistics
function updateStats() {
    const totalCups = ryderCupYears.length;
    const taiwanWins = ryderCupYears.filter(y => y.winner === 'Taiwan').length;
    const koreaWins = ryderCupYears.filter(y => y.winner === 'Korea').length;
    const recentYear = ryderCupYears.length > 0 
        ? Math.max(...ryderCupYears.map(y => y.year))
        : '-';
    
    document.getElementById('total-cups').textContent = totalCups;
    document.getElementById('taiwan-wins').textContent = taiwanWins;
    document.getElementById('korea-wins').textContent = koreaWins;
    document.getElementById('recent-year').textContent = recentYear;
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = {
        year: parseInt(document.getElementById('year').value),
        winner: document.getElementById('winner').value,
        score: document.getElementById('score').value.trim(),
        story: document.getElementById('story').value.trim(),
        highlight: document.getElementById('highlight').value.trim(),
        image: document.getElementById('image').value.trim()
    };
    
    // Check if year already exists
    const existingIndex = ryderCupYears.findIndex(y => y.year === formData.year);
    
    if (existingIndex >= 0) {
        // Update existing year
        ryderCupYears[existingIndex] = formData;
    } else {
        // Add new year
        ryderCupYears.push(formData);
    }
    
    // Save and refresh
    saveYears();
    displayYears();
    updateStats();
    
    // Reset form
    document.getElementById('year-form').reset();
    
    // Show success message
    alert(`Successfully ${existingIndex >= 0 ? 'updated' : 'added'} Ryder Cup ${formData.year}!`);
}
