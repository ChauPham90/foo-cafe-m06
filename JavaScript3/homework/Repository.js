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