// change these to your own links
const baseURL = "https://hailycamp.github.io/wdd230/"
const linksURL = "https://hailycamp.github.io/wdd230/data/links.json";
const ul = document.querySelector('#lessons')


const displayLinks = (weeks) => {
    weeks.forEach((week) => {
      // Create elements to add to the div.cards element
      let li = document.createElement('li');

      li.textContent = `${week.lesson}: `;

      let links_number = week.links;
      links_number.forEach((link) => {
        let lesson_link = document.createElement('a');

        lesson_link.setAttribute('href', `${link.url}`);
        lesson_link.textContent = `${link.title} | `;

        // Append the section(card) with the created elements
        li.appendChild(lesson_link);
      })


      ul.appendChild(li);
    }); // end of arrow function and forEach loop
}


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data.lessons);
    displayLinks(data.lessons);
}

getLinks();
