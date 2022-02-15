
// top title color added
document.getElementById('top-players-title').style.color = '#ED6B4F';
document.getElementById('top-blogs-title').style.color = '#ED6B4F';

// add background color in players section div
const playersBgColor = document.getElementsByClassName('player');
for (const playersBg of playersBgColor) {
    playersBg.style.backgroundColor = 'rgba(57, 130, 233, 0.2)'
}