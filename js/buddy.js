const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data));
}

loadBuddies()

const displayBuddies = data => {
    const buddyElement = document.getElementById('buddies');
    const buddies = data.results;

    for (const buddy of buddies) {
        const { title, first, last } = buddy.name;
        const fullName = `${title} ${first} ${last}`
        const { cell, email } = buddy;

        const div = document.createElement('div')
        div.classList.add('buddyStyle');
        div.innerHTML = `
        <h3>Name: ${fullName}</h3>
        <h4>Cell: ${cell}</h4>
        <h4>Email: ${email}</h4>
        `;

        buddyElement.appendChild(div);
    }



}