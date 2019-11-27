// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"App.js":[function(require,module,exports) {
'use strict';
/* global Util, Repository, Contributor */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App =
/*#__PURE__*/
function () {
  function App(url) {
    _classCallCheck(this, App);

    this.initialize(url);
  }

  _createClass(App, [{
    key: "initialize",
    value: function initialize(url) {
      var root, header, h1, main, divNav, nav, ul, li, a, divConten, section, img, footer, p, repos;
      return regeneratorRuntime.async(function initialize$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              root = document.getElementById('root');
              header = Util.createAndAppend('header', root, {
                class: 'header'
              }); // TODO: replace with your own code

              h1 = Util.createAndAppend('h1', header, {
                text: ' FOO M06'
              });
              main = Util.createAndAppend('main', root, {
                class: 'main'
              });
              divNav = Util.createAndAppend('div', main, {
                class: 'divNav'
              });
              nav = Util.createAndAppend('nav', divNav, {
                class: 'nav'
              });
              ul = Util.createAndAppend('ul', nav, {
                class: 'ul'
              });
              li = Util.createAndAppend('li', ul, {
                class: 'li'
              });
              a = Util.createAndAppend('a', li, {
                href: '#home',
                text: 'Home'
              });
              divConten = Util.createAndAppend('div', main, {
                class: 'content'
              });
              section = Util.createAndAppend('section', divConten, {
                id: 'home'
              });
              img = Util.createAndAppend('img', section, {
                src: "https://i.pinimg.com/564x/8b/d2/c8/8bd2c8e6223c5fa06347defaa3a83d82.jpg",
                alt: 'picture'
              });
              footer = Util.createAndAppend('footer', root);
              p = Util.createAndAppend('p', footer, {
                text: 'And I am still alive *-*'
              });
              _context.prev = 14;
              _context.next = 17;
              return regeneratorRuntime.awrap(Util.fetchJSON(url));

            case 17:
              repos = _context.sent;
              this.repos = repos.map(function (repo) {
                return new Repository(repo);
              });
              this.repos.forEach(function (e, index) {
                console.log(e);
                var ulE = nav.querySelector('.ul');
                var liE = Util.createAndAppend('li', ulE, {
                  class: 'li'
                });
                var aHref = Util.createAndAppend('a', liE, {
                  text: e.repository.name,
                  href: "#".concat(e.repository.name)
                });
                aHref.addEventListener('click', function (event) {
                  history.pushState(null, null, event.target.href);
                  event.stopPropagation();
                  var val = document.querySelector('#' + e.repository.name);

                  if (val == null) {
                    val = Repository.createListE(e.repository, ulE);
                    onReposLoaded(index);
                  }
                });
              });
              _context.next = 26;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](14);
              console.log(_context.t0);
              this.renderError(_context.t0);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[14, 22]]);
    }
  }, {
    key: "fetchContributorsAndRender",
    value: function fetchContributorsAndRender(index) {
      var repo, contributors, val;
      return regeneratorRuntime.async(function fetchContributorsAndRender$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              repo = this.repos[index];
              _context2.next = 4;
              return regeneratorRuntime.awrap(repo.fetchContributors());

            case 4:
              contributors = _context2.sent;
              val = document.querySelector('#' + repo.repository.name);
              contributors.map(function (contributor) {
                return new Contributor(contributor);
              }).forEach(function (contributor) {
                var divContri = val.querySelector('.contri');
                var divLinkAndImg = Util.createAndAppend('div', divContri, {
                  class: 'divLinkAndImg'
                });
                Util.createAndAppend('img', divLinkAndImg, {
                  class: 'img',
                  src: contributor.contributor.avatar_url
                });
                Util.createAndAppend('a', divLinkAndImg, {
                  id: 'a',
                  text: contributor.contributor.login,
                  href: contributor.contributor.html_url
                });
              });
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              this.renderError(_context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[0, 9]]);
    }
  }, {
    key: "renderError",
    value: function renderError(error) {
      console.log(error);
    }
  }]);

  return App;
}();

var app;
var REPOS_URL = 'https://api.github.com/orgs/foocoding/repos?per_page=100';

function onReposLoaded(index) {
  app.fetchContributorsAndRender(index);
}

function showContent() {
  if (document.querySelectorAll("section:target").length == 0) {
    window.location = "#home";
  }
}

window.onload = function () {
  app = new App(REPOS_URL);
  showContent();
};
},{}],"../../../../../.npm/_npx/1200/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55539" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../.npm/_npx/1200/lib/node_modules/parcel/src/builtins/hmr-runtime.js","App.js"], null)
//# sourceMappingURL=/App.d36a57b6.js.map