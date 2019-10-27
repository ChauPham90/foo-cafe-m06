'use strict';
/* global Util, Repository, Contributor */
class App {
    constructor(url) {
        this.initialize(url);
    }

    async initialize(url) {
        const root = document.getElementById('root');
        const header = Util.createAndAppend('header', root, { class: 'header' }); // TODO: replace with your own code
        const h1 = Util.createAndAppend('h1', header, { text: ' FOO M06' });

        const main = Util.createAndAppend('main', root, { class: 'main' });
        const divNav = Util.createAndAppend('div', main, { class: 'divNav' });
        const nav = Util.createAndAppend('nav', divNav, { class: 'nav' });
        const ul = Util.createAndAppend('ul', nav, { class: 'ul' });
        const li = Util.createAndAppend('li', ul, { class: 'li' });
        const a = Util.createAndAppend('a', li, { href: '#home', text: 'Home' });

        const divConten = Util.createAndAppend('div', main, { class: 'content' });
        const section = Util.createAndAppend('section', divConten, { id: 'home' });
        const img = Util.createAndAppend('img', section, { src: "https://i.pinimg.com/564x/8b/d2/c8/8bd2c8e6223c5fa06347defaa3a83d82.jpg", alt: 'picture' });

        const footer = Util.createAndAppend('footer', root);
        const p = Util.createAndAppend('p', footer, { text: 'And I am still alive *-*' });

        try {
            const repos = await Util.fetchJSON(url);
            this.repos = repos.map(repo => new Repository(repo));
            this.repos.forEach(function(e, index) {
                console.log(e)
                const ulE = nav.querySelector('.ul')
                const liE = Util.createAndAppend('li', ulE, {
                    class: 'li'
                });
                const aHref = Util.createAndAppend('a', liE, {
                    text: e.repository.name,
                    href: `#${e.repository.name}`
                });
                aHref.addEventListener('click', event => {
                    history.pushState(null, null, event.target.href)
                    event.stopPropagation();
                    let val = document.querySelector('#' + e.repository.name);
                    if (val == null) {
                        val = createListE(e.repository, ulE);
                        onReposLoaded(index)

                    }

                });
            })
        } catch (error) {
            console.log(error)
            this.renderError(error);
        }
    }

    async fetchContributorsAndRender(index) {
        try {
            const repo = this.repos[index];
            const contributors = await repo.fetchContributors();
            let val = document.querySelector('#' + repo.repository.name);
            contributors
                .map(contributor => new Contributor(contributor))
                .forEach(contributor => {
                    const divContri = val.querySelector('.contri');
                    const divLinkAndImg = Util.createAndAppend('div', divContri, {
                        class: 'divLinkAndImg'
                    });
                    Util.createAndAppend('img', divLinkAndImg, {
                        class: 'img',
                        src: contributor.contributor.avatar_url,
                    });
                    Util.createAndAppend('a', divLinkAndImg, {
                        id: 'a',
                        text: contributor.contributor.login,
                        href: contributor.contributor.html_url,
                    });
                });
        } catch (error) {
            this.renderError(error);
        }
    }

    renderError(error) {
        console.log(error);
    }
}

const createListE = (data, element) => {
    const divContentE = document.querySelector('.content')
    const sectionE = Util.createAndAppend('section', divContentE, {
        id: data.name
    });
    const h2E = Util.createAndAppend('h2', sectionE, {
        text: 'MODULE ',
        class: 'h2'
    });
    Util.createAndAppend('span', h2E, {
        text: data.name,
        id: 'span'
    });
    const divE = Util.createAndAppend('div', sectionE, {
        id: 'repoInfo',
    });
    const moduleDetail = Util.createAndAppend('div', divE, {
        class: 'moduleDetail'

    });
    Util.createAndAppend('a', moduleDetail, {
        class: data.name,
        href: data.html_url,
        text: 'Github link'
    });
    Util.createAndAppend('p', moduleDetail, {
        text: `Description: ${data.description}`
    });
    Util.createAndAppend('p', moduleDetail, {
        text: `Forks : ${data.forks_count}`
    });
    Util.createAndAppend('p', moduleDetail, {
        text: `Updated : ${data.updated_at}`
    });
    Util.createAndAppend('div', divE, {
        class: 'contri',
    });

}


let app
const REPOS_URL = 'https://api.github.com/orgs/foocoding/repos?per_page=100';

function onReposLoaded(index) {
    app.fetchContributorsAndRender(index)
}

function showContent() {
    if (document.querySelectorAll("section:target").length == 0) {
        window.location = "#home";
    }
}
window.onload = () => {
    app = new App(REPOS_URL);
    showContent()
}