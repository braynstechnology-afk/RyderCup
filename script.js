// Store Ryder Cup data
let ryderCupYears = [];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadYears();
    displayYears();
    updateStats();
    
    // Form submission
    document.getElementById('year-form').addEventListener('submit', handleFormSubmit);
    
    // Delete button (event delegation)
    document.getElementById('years-container').addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-delete')) {
            const year = parseInt(e.target.dataset.year);
            deleteYear(year);
        }
    });
});

// Load years from localStorage
function loadYears() {
    const stored = localStorage.getItem('ryderCupYears');
    if (stored) {
        ryderCupYears = JSON.parse(stored);
        // Remove old example entry if it was saved
        ryderCupYears = ryderCupYears.filter(y => !(y.year === 2010 && y.winner === 'Tied'));
        if (ryderCupYears.length !== JSON.parse(stored).length) {
            saveYears();
        }
    } else {
        ryderCupYears = [];
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
            <button type="button" class="btn-delete" data-year="${data.year}" aria-label="Delete Ryder Cup ${data.year}">Delete</button>
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

// Delete a year
function deleteYear(year) {
    if (!confirm(`Delete Ryder Cup ${year}?`)) return;
    ryderCupYears = ryderCupYears.filter(y => y.year !== year);
    saveYears();
    displayYears();
    updateStats();
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
