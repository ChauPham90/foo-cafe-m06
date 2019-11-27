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
        let response;
        try {
            response = await fetch(url);
            let dataList = await response.json();
            dataList.sort((a, b) => a.name.localeCompare(b.name));
            console.log(dataList)
            dataList.map((item) => {
                const ulE = document.querySelector('.ul')
                const val = createListE(item, ulE);
                async function fetchContributorUrl() {
                    // let responseContributorList = await fetch(item.contributors_url);
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
                fetchContributorUrl()
            })
        } catch (err) {
            console.log('found errs' + err.message)
        }

    }




    const createListE = (data, element) => {

        const divContentE = document.querySelector('.content')
        const liE = createAndAppend('li', element, {
            class: 'li'
        });
        createAndAppend('a', liE, {
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
        createAndAppend('span', h2E, {
            text: data.name,
            id: 'span'
        });
        const divE = createAndAppend('div', sectionE, {
            id: 'repoInfo',
        });
        const moduleDetail = createAndAppend('div', divE, {
            class: ' moduleDetail'

        });
        createAndAppend('a', moduleDetail, {
            class: data.name,
            href: data.html_url,
            text: 'Github link'
        });
        createAndAppend('p', moduleDetail, {
            text: `Description: ${data.description}`
        });
        createAndAppend('p', moduleDetail, {
            text: `Forks : ${data.forks_count}`
        });
        createAndAppend('p', moduleDetail, {
            text: `Updated : ${data.updated_at}`
        });
        createAndAppend('div', divE, {
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
        document.getElementById('root');
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