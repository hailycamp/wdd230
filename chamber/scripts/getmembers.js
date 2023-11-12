const url = 'https://hailycamp.github.io/wdd230/chamber/data/members.json';
const directorySection = document.getElementById('member-directory');

function displayMembers(membersArray) {
    membersArray.forEach(member => {

        const memberCard = document.createElement('section');
        const fullName = document.createElement('h2');
        const subtitle = document.createElement('h3');
        const photo = document.createElement('img');
        const address = document.createElement('p');
        const phoneNum = document.createElement('p');
        const website = document.createElement('a');

        fullName.textContent = `${member.name}`;
        subtitle.textContent = `${member.businessType}`;
        photo.setAttribute('src', member.imageFile);
        photo.setAttribute('loading', 'lazy');
        photo.setAttribute('alt', `Photo at ${member.name}`);
        photo.setAttribute('width', '300');
        photo.setAttribute('height', '300');
        address.textContent = `Address: ${member.address}`;
        phoneNum.textContent = `Phone Number: ${member.phoneNumber}`

        if ((member.websiteUrl) != "") {
            website.setAttribute('src', member.websiteUrl);
            website.textContent = 'Website';
        }
        else {
            website.textContent = 'No Website Available'
        }
        
        memberCard.appendChild(fullName);
        memberCard.appendChild(subtitle);
        memberCard.appendChild(photo);
        memberCard.appendChild(address);
        memberCard.appendChild(phoneNum);
        memberCard.appendChild(website);

        directorySection.appendChild(memberCard);
    });
}

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members); 
    // displayMembers(data.members); 
}

getMemberData();