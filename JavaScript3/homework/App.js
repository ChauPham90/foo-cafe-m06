'use strict';
/* global Util, Repository, Contributor */
class App {
    constructor(url) {
        this.initialize(url);
    }

    async initialize(url) {
        Repository.BuildPageStructure()
        try {
            const repos = await Util.fetchJSON(url);
            this.repos = repos.map(repo => new Repository(repo));
            this.repos.forEach(function(e, index) {
                console.log(e)
                const ulE = document.querySelector('.nav .ul')
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
                        val = Repository.createListE(e.repository, ulE);
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