
// top title color added
document.getElementById('top-players-title').style.color = '#ED6B4F';
document.getElementById('top-blogs-title').style.color = '#ED6B4F';

// add background color in players section div
const playersBgColor = document.getElementsByClassName('player');
for (const playersBg of playersBgColor) {
    playersBg.style.backgroundColor = 'rgba(57, 130, 233, 0.2)'
}

// create new list item
document.getElementById('list-btn').addEventListener('click', function () {
    const listItem = document.getElementById('list-item');
    const li = document.createElement('li');
    li.innerText = 'New Item';
    listItem.appendChild(li);
});


// creat input field and create button, when click the button the number will increase by one . when field value is 5 then the button will be disabled.

document.getElementById('count-input').setAttribute('value', '0');
let count = 0;
function countNumbers() {
    count = count + 1;
    if (count == 5) {
        document.getElementById('count-btn').setAttribute('disabled', true);
    }
    const countInput = document.getElementById('count-input');
    countInput.value = count;
}