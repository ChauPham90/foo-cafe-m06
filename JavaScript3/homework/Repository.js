'use strict';

/* global Util */

// eslint-disable-next-line no-unused-vars
class Repository {
    constructor(repository) {
        this.repository = repository;
    }

    /**
     * Render the repository info to the DOM.
     * @param {HTMLElement} container The container element in which to render the repository.
     */

    static createListE(data, element) {
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
    static BuildPageStructure() {
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
    }


    fetchContributors() {
        return Util.fetchJSON(this.repository.contributors_url);
    }

    /**
     * Returns the name of the repository
     */
    name() {
        return this.repository.name;
    }
}