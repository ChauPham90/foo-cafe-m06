'use strict'; {
    function createAndAppend(name, parent, options = {}) {
        const elem = document.createElement(name);
        parent.appendChild(elem);
        Object.keys(options).forEach(key => {
            const value = options[key];
            if (key === 'text') {
                elem.textContent = value;
            } else {
                elem.setAttribute(key, value);
            }
        });
        return elem;
    }

    // const navItems = dataList.map(item => item.name)
    // const nav = navItems.map(item => ({
    //     // create html
    //     // include id's, href
    //     //add eventlistener
    //     // inside of eventlistener add the SPA logic to prevent browser f
    // }))


    async function fetchJSONByUsingAwait(url) {
        let response = await fetch(url);
        let dataList = await response.json();
        dataList.sort((a, b) => a.name.localeCompare(b.name));
        console.log(dataList)
        dataList.map((item) => {
            const ulE = document.querySelector('.ul')
            const liE = createAndAppend('li', ulE, {
                class: 'li'
            });
            const aHref = createAndAppend('a', liE, {
                text: item.name,
                href: `#${item.name}`
            });
            console.log(aHref.text)

            async function fetchContributorUrl(val) {
                let responseContributorList = await fetch(item.contributors_url);
                let dataListContributor = await responseContributorList.json();
                dataListContributor.map((contributor) => {
                    const divContri = val.querySelector('.contri');
                    const divLinkAndImg = createAndAppend('div', divContri, {
                        class: 'divLinkAndImg'
                    });
                    createAndAppend('img', divLinkAndImg, {
                        class: 'img',
                        src: contributor.avatar_url,
                    });
                    createAndAppend('a', divLinkAndImg, {
                        id: 'a',
                        text: contributor.login,
                        href: contributor.html_url,
                    });

                })
            }
            aHref.addEventListener('click', event => {
                let val = document.querySelector('#' + item.name)
                if (val == null) {
                    val = createListE(item);
                    fetchContributorUrl(val)
                }
                history.pushState(null, null, event.target.href)
                event.stopPropagation();
            });
        })
    }

    const createListE = (data) => {
        const divContentE = document.querySelector('.content')
        const sectionE = createAndAppend('section', divContentE, {
            id: data.name
        });
        const h2E = createAndAppend('h2', sectionE, {
            text: 'MODULE ',
            class: 'h2'
        });
        const spanE = createAndAppend('span', h2E, {
            text: data.name,
            id: 'span'
        });
        const divE = createAndAppend('div', sectionE, {
            id: 'repoInfo',
        });
        const moduleDetail = createAndAppend('div', divE, {
            class: ' moduleDetail'

        });
        const aE = createAndAppend('a', moduleDetail, {
            class: data.name,
            href: data.html_url,
            text: 'Github link'
        });
        const pEDes = createAndAppend('p', moduleDetail, {
            text: `Description: ${data.description}`
        });
        const pEF = createAndAppend('p', moduleDetail, {
            text: `Forks : ${data.forks_count}`
        });
        const pEU = createAndAppend('p', moduleDetail, {
            text: `Updated : ${data.updated_at}`
        });
        const divE2 = createAndAppend('div', divE, {
            class: 'contri',
        });
        return sectionE
    }

    function main(url) {
        const root = document.getElementById('root');
        fetchJSONByUsingAwait(url);

    }

    const REPOS_URL = 'https://api.github.com/orgs/foocoding/repos?per_page=100';

    function showContent() {
        if (document.querySelectorAll("section:target").length == 0) {
            window.location = "#home";
        }
    }
    window.onload = () => {
        showContent()
        main(REPOS_URL)
    };
}