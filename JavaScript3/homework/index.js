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
                doSort(data);
            }
        });
    }

    // get repos
    const printName = name => {
        const select = document.querySelector('.select');
        name = name.sort((a, b) => a.name.localeCompare(b.name));
        for (let i = 0; i < name.length; i++) {
            //console.log(name);
            createAndAppend('option', select, {
                value: name[i].name,
                text: name[i].name,
            });
        }
    };

    const doSort = data => {
        let da = [];
        for (let i = 0; i < data.length; i++) {
            da.push(data[i].name);
            // console.log(da);
            da.sort((a, b) => a > b);
        }
        console.log(da)
        return da;
    };
    //console.log(doSort(b));

    // const doSort = data => {
    //     let da;
    //     for (let i = 0; i < data.length; i++) {
    //         da = Object.keys(data[i].name);
    //         var sortable = [];
    //         for (var name in da) {
    //             sortable.push([name, data.name]);
    //         }

    //         sortable.sort(function(a, b) {
    //             return a[1] - b[1];
    //         });
    //     }
    // };

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
                                // elem.querySelector('.img').style.cssText =
                                //     ' width: 128px; -webkit-border-radius: 50% ; -moz-border-radius: 50% ; border-radius: 50% ;';
                                // addCSS();
                            }
                        }
                    });
                }
            }
        });
    };

    const addCSS = () => {
        document.querySelector('#ul').style.cssText =
            '-webkit-column-count: 4; -moz-column-count: 4; column-count: 2; list-style-type: none;';
        document.querySelector('#ul .li').style.cssText =
            '  text-align: center; display: inline-block; width: 100%;padding-bottom: 20px;';
        // document.querySelector('.img').style.cssText =
        //     ' width: 128px; -webkit-border-radius: 50% ; -moz-border-radius: 50% ; border-radius: 50% ;';
        document.querySelector('#container').style.cssText =
            'display : flex; justify-content : space-between';
        document.querySelector('#ul').style.cssText =
            '-webkit-column-count: 4; -moz-column-count: 4; column-count: 2; list-style-type: none;';
        document.querySelector('#container .leftColumn').style.cssText = 'flex : 1';
        document.querySelector('.rightColumn').style.cssText = ' flex : 2';
        document.querySelector('#a').style.cssText =
            'display: block; font-size: 0.9em; text-decoration: none; font-family: "Open Sans", helvetica, arial, sans-serif;';
    };

    const REPOS_URL = 'https://api.github.com/orgs/foocoding/repos?per_page=100';
    window.onload = () => main(REPOS_URL);
}