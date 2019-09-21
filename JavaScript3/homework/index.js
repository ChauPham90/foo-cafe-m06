/* eslint-disable prettier/prettier */
'use strict';

{
    function fetchJSON(url, cb) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.onload = () => {
            if (xhr.status < 400) {
                cb(null, xhr.response);
                //console.log(xhr.response);
            } else {
                cb(new Error(`Network error: ${xhr.status} - ${xhr.statusText}`));
            }
        };
        xhr.onerror = () => cb(new Error('Network request failed'));
        xhr.send();
    }

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

    function main(url) {
        fetchJSON(url, (err, data) => {
            const root = document.getElementById('root');
            createAndAppend('select', root, { class: 'select' });
            const container = createAndAppend('div', root, { id: 'container' });
            if (err) {
                createAndAppend('div', root, { text: err.message, class: 'alert-error' });
            } else {
                console.log(Object.keys(data[0]));
                const leftColumn = createAndAppend('div', container, {
                    class: 'leftColumn',
                    id: 'leftColumn',
                });
                const rightColumn = createAndAppend('div', container, {
                    class: 'rightColumn',
                    id: 'rightColumn',
                });
                const ulElement = createAndAppend('ul', rightColumn, {
                    id: 'ul',
                });
                printName(data);
                makeInfoRepos(data, ulElement);
            }
        });
    }

    // get repos
    const printName = name => {
        const select = document.querySelector('.select');
        for (let i = 0; i < name.length; i++) {
            createAndAppend('option', select, {
                value: name[i].name,
                text: name[i].name,
            });
        }
    };

    // column left

    const makeInfoRepos = (data, element) => {
        document.querySelector('.select').addEventListener('change', () => {
            var selectElement = document.querySelector('.select');
            const ulElement = document.querySelector('#ul');
            element.innerHTML = '';
            const leftColumn = document.querySelector('#leftColumn');
            leftColumn.innerHTML = '';
            for (var i = 0; i < data.length; i++) {
                if (data[i].name == selectElement.value) {
                    createAndAppend('p', leftColumn, {
                        class: 'p',
                        text: ` Description : ${data[i].description}`,
                    });
                    createAndAppend('p', leftColumn, {
                        class: 'p',
                        text: ` Forks : ${data[i].forks_count}`,
                    });
                    createAndAppend('p', leftColumn, {
                        class: 'p ',
                        text: ` Updated :  ${data[i].updated_at}`,
                    });
                    createAndAppend('p', leftColumn, { class: 'p', text: 'Repository : ' });
                    createAndAppend('a', leftColumn, {
                        class: 'a',
                        href: data[i].html_url,
                        text: data[i].name,
                    });

                    fetchJSON(data[i].contributors_url, (err, data) => {
                        if (err) {
                            createAndAppend('div', root, { text: err.message, class: 'alert-error' });
                        } else {
                            console.log(data);
                            for (let i = 0; i < data.length; i++) {
                                const elem = createAndAppend('li', ulElement, { class: 'li' });

                                createAndAppend('a', elem, {
                                    id: 'a',
                                    text: data[i].login,
                                    href: data[i].html_url,
                                });
                                createAndAppend('img', elem, { class: 'img', src: data[i].avatar_url });
                                addCSS();
                            }
                        }
                    });
                }
            }
        });
    };

    const addCSS = () => {
        document.querySelector('#container .leftColumn').style.cssText = 'flex : 1';
        document.querySelector('.rightColumn').style.cssText = ' flex : 2';
    };

    const REPOS_URL = 'https://api.github.com/orgs/foocoding/repos?per_page=100';
    window.onload = () => main(REPOS_URL);
}