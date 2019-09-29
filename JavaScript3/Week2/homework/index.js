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


    async function fetchJSONByUsingAwait(url) {
        let response = await fetch(url);
        let dataList = await response.json();
        return dataList
    }

    const createListE = (data, element) => {

        const divContentE = document.querySelector('.content')
        const liE = createAndAppend('li', element, {
            class: 'li'
        });
        const aHref = createAndAppend('a', liE, {
            text: data.name,
            href: `#${data.name}`
        });
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
        const showHidenInfo = () => {
            const repoInfo =
                sectionE.querySelector('#repoInfo');
            repoInfo.classList.toggle("active")
        }
        sectionE.addEventListener('click', () => showHidenInfo());
        return sectionE
    }



    function main(url) {
        const root = document.getElementById('root');
        const ulE = document.querySelector('.ul')
        async function waitJson() {
            const data = await fetchJSONByUsingAwait(url);
            return data
        }
        waitJson().then((data) => {
            //data.sort((a, b) => a.data.localeCompare(b.data));
            data.map((item) => {
                const val = createListE(item, ulE);
                const fetchContributorUrl = () => {
                    return fetch(item.contributors_url)
                        .then((response) => { return response.json() })
                        .then((data) => {
                            data.map((contributor) => {
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
                        })
                }
                fetchContributorUrl()
            })
        })

    }

    const REPOS_URL = 'https://api.github.com/orgs/foocoding/repos?per_page=100';
    //const REPOS_URL = 'https://api.github.com/orgs/foocng/repos?per_page=100';
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