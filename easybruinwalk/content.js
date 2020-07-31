! function(e)
{
    var t = {};

    function r(n)
    {
        if (t[n]) return t[n].exports;
        var a = t[n] = {
            i: n,
            l: !1,
            exports:
            {}
        };
        return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, n)
    {
        r.o(e, t) || Object.defineProperty(e, t,
        {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e)
    {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag,
        {
            value: "Module"
        }), Object.defineProperty(e, "__esModule",
        {
            value: !0
        })
    }, r.t = function(e, t)
    {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default",
            {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) r.d(n, a, function(t)
            {
                return e[t]
            }.bind(null, a));
        return n
    }, r.n = function(e)
    {
        var t = e && e.__esModule ? function()
        {
            return e.default
        } : function()
        {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t)
    {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 4)
}([function(e, t, r)
{
    var n, a, o;
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self && self, a = [e], void 0 === (o = "function" == typeof(n = function(e)
    {
        "use strict";
        if ("undefined" == typeof browser || Object.getPrototypeOf(browser) !== Object.prototype)
        {
            const t = "The message port closed before a response was received.",
                r = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                n = e =>
                {
                    const n = {
                        alarms:
                        {
                            clear:
                            {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            clearAll:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get:
                            {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getAll:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        bookmarks:
                        {
                            create:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            get:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getChildren:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getRecent:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getSubTree:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTree:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            move:
                            {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            remove:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeTree:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update:
                            {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        browserAction:
                        {
                            disable:
                            {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            enable:
                            {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            getBadgeBackgroundColor:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getBadgeText:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getPopup:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            openPopup:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setBadgeBackgroundColor:
                            {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setBadgeText:
                            {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setIcon:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup:
                            {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setTitle:
                            {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        browsingData:
                        {
                            remove:
                            {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            removeCache:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCookies:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeDownloads:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFormData:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeHistory:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeLocalStorage:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePasswords:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePluginData:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            settings:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        commands:
                        {
                            getAll:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        contextMenus:
                        {
                            remove:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeAll:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update:
                            {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        cookies:
                        {
                            get:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAllCookieStores:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        devtools:
                        {
                            inspectedWindow:
                            {
                                eval:
                                {
                                    minArgs: 1,
                                    maxArgs: 2,
                                    singleCallbackArg: !1
                                }
                            },
                            panels:
                            {
                                create:
                                {
                                    minArgs: 3,
                                    maxArgs: 3,
                                    singleCallbackArg: !0
                                }
                            }
                        },
                        downloads:
                        {
                            cancel:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            download:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            erase:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFileIcon:
                            {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            open:
                            {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            pause:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFile:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            resume:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            show:
                            {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        extension:
                        {
                            isAllowedFileSchemeAccess:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            isAllowedIncognitoAccess:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        history:
                        {
                            addUrl:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteAll:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            deleteRange:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteUrl:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getVisits:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        i18n:
                        {
                            detectLanguage:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAcceptLanguages:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        identity:
                        {
                            launchWebAuthFlow:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        idle:
                        {
                            queryState:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        management:
                        {
                            get:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getSelf:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setEnabled:
                            {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            uninstallSelf:
                            {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        notifications:
                        {
                            clear:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            create:
                            {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPermissionLevel:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update:
                            {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        pageAction:
                        {
                            getPopup:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            hide:
                            {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setIcon:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup:
                            {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setTitle:
                            {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            show:
                            {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        permissions:
                        {
                            contains:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            request:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        runtime:
                        {
                            getBackgroundPage:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPlatformInfo:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            openOptionsPage:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            requestUpdateCheck:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            sendMessage:
                            {
                                minArgs: 1,
                                maxArgs: 3
                            },
                            sendNativeMessage:
                            {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            setUninstallURL:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        sessions:
                        {
                            getDevices:
                            {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getRecentlyClosed:
                            {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            restore:
                            {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        storage:
                        {
                            local:
                            {
                                clear:
                                {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get:
                                {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse:
                                {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove:
                                {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set:
                                {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            managed:
                            {
                                get:
                                {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse:
                                {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            sync:
                            {
                                clear:
                                {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get:
                                {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse:
                                {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove:
                                {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set:
                                {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            }
                        },
                        tabs:
                        {
                            captureVisibleTab:
                            {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            create:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            detectLanguage:
                            {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            discard:
                            {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            duplicate:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            executeScript:
                            {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            get:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getCurrent:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getZoom:
                            {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getZoomSettings:
                            {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            highlight:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            insertCSS:
                            {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            move:
                            {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            query:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            reload:
                            {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            remove:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCSS:
                            {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            sendMessage:
                            {
                                minArgs: 2,
                                maxArgs: 3
                            },
                            setZoom:
                            {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            setZoomSettings:
                            {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            update:
                            {
                                minArgs: 1,
                                maxArgs: 2
                            }
                        },
                        topSites:
                        {
                            get:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        webNavigation:
                        {
                            getAllFrames:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFrame:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        webRequest:
                        {
                            handlerBehaviorChanged:
                            {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        windows:
                        {
                            create:
                            {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            get:
                            {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll:
                            {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getCurrent:
                            {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getLastFocused:
                            {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update:
                            {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        }
                    };
                    if (0 === Object.keys(n).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                    class a extends WeakMap
                    {
                        constructor(e, t)
                        {
                            super(t), this.createItem = e
                        }
                        get(e)
                        {
                            return this.has(e) || this.set(e, this.createItem(e)), super.get(e)
                        }
                    }
                    const o = (t, r) => (...n) =>
                        {
                            e.runtime.lastError ? t.reject(e.runtime.lastError) : r.singleCallbackArg || n.length <= 1 && !1 !== r.singleCallbackArg ? t.resolve(n[0]) : t.resolve(n)
                        },
                        i = e => 1 == e ? "argument" : "arguments",
                        s = (e, t, r) => new Proxy(t,
                        {
                            apply: (t, n, a) => r.call(n, e, ...a)
                        });
                    let l = Function.call.bind(Object.prototype.hasOwnProperty);
                    const m = (e, t = {}, r = {}) =>
                        {
                            let n = Object.create(null),
                                a = {
                                    has: (t, r) => r in e || r in n,
                                    get(a, c, g)
                                    {
                                        if (c in n) return n[c];
                                        if (!(c in e)) return;
                                        let u = e[c];
                                        if ("function" == typeof u)
                                            if ("function" == typeof t[c]) u = s(e, e[c], t[c]);
                                            else if (l(r, c))
                                        {
                                            let t = ((e, t) => function(r, ...n)
                                            {
                                                if (n.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${i(t.minArgs)} for ${e}(), got ${n.length}`);
                                                if (n.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${i(t.maxArgs)} for ${e}(), got ${n.length}`);
                                                return new Promise((a, i) =>
                                                {
                                                    if (t.fallbackToNoCallback) try
                                                    {
                                                        r[e](...n, o(
                                                        {
                                                            resolve: a,
                                                            reject: i
                                                        }, t))
                                                    }
                                                    catch (o)
                                                    {
                                                        console.warn(e + " API method doesn't seem to support the callback parameter, falling back to call it without a callback: ", o), r[e](...n), t.fallbackToNoCallback = !1, t.noCallback = !0, a()
                                                    }
                                                    else t.noCallback ? (r[e](...n), a()) : r[e](...n, o(
                                                    {
                                                        resolve: a,
                                                        reject: i
                                                    }, t))
                                                })
                                            })(c, r[c]);
                                            u = s(e, e[c], t)
                                        }
                                        else u = u.bind(e);
                                        else if ("object" == typeof u && null !== u && (l(t, c) || l(r, c))) u = m(u, t[c], r[c]);
                                        else
                                        {
                                            if (!l(r, "*")) return Object.defineProperty(n, c,
                                            {
                                                configurable: !0,
                                                enumerable: !0,
                                                get: () => e[c],
                                                set(t)
                                                {
                                                    e[c] = t
                                                }
                                            }), u;
                                            u = m(u, t[c], r["*"])
                                        }
                                        return n[c] = u, u
                                    },
                                    set: (t, r, a, o) => (r in n ? n[r] = a : e[r] = a, !0),
                                    defineProperty: (e, t, r) => Reflect.defineProperty(n, t, r),
                                    deleteProperty: (e, t) => Reflect.deleteProperty(n, t)
                                },
                                c = Object.create(e);
                            return new Proxy(c, a)
                        },
                        c = e => (
                        {
                            addListener(t, r, ...n)
                            {
                                t.addListener(e.get(r), ...n)
                            },
                            hasListener: (t, r) => t.hasListener(e.get(r)),
                            removeListener(t, r)
                            {
                                t.removeListener(e.get(r))
                            }
                        });
                    let g = !1;
                    const u = new a(e => "function" != typeof e ? e : function(t, n, a)
                        {
                            let o, i, s = !1,
                                l = new Promise(e =>
                                {
                                    o = function(t)
                                    {
                                        g || (console.warn(r, (new Error).stack), g = !0), s = !0, e(t)
                                    }
                                });
                            try
                            {
                                i = e(t, n, o)
                            }
                            catch (e)
                            {
                                i = Promise.reject(e)
                            }
                            const m = !0 !== i && (c = i) && "object" == typeof c && "function" == typeof c.then;
                            var c;
                            if (!0 !== i && !m && !s) return !1;
                            const u = e =>
                            {
                                e.then(e =>
                                {
                                    a(e)
                                }, e =>
                                {
                                    let t;
                                    t = e && (e instanceof Error || "string" == typeof e.message) ? e.message : "An unexpected error occurred", a(
                                    {
                                        __mozWebExtensionPolyfillReject__: !0,
                                        message: t
                                    })
                                }).catch(e =>
                                {
                                    console.error("Failed to send onMessage rejected reply", e)
                                })
                            };
                            return u(m ? i : l), !0
                        }),
                        d = (
                        {
                            reject: r,
                            resolve: n
                        }, a) =>
                        {
                            e.runtime.lastError ? e.runtime.lastError.message === t ? n() : r(e.runtime.lastError) : a && a.__mozWebExtensionPolyfillReject__ ? r(new Error(a.message)) : n(a)
                        },
                        f = (e, t, r, ...n) =>
                        {
                            if (n.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${i(t.minArgs)} for ${e}(), got ${n.length}`);
                            if (n.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${i(t.maxArgs)} for ${e}(), got ${n.length}`);
                            return new Promise((e, t) =>
                            {
                                const a = d.bind(null,
                                {
                                    resolve: e,
                                    reject: t
                                });
                                n.push(a), r.sendMessage(...n)
                            })
                        },
                        p = {
                            runtime:
                            {
                                onMessage: c(u),
                                onMessageExternal: c(u),
                                sendMessage: f.bind(null, "sendMessage",
                                {
                                    minArgs: 1,
                                    maxArgs: 3
                                })
                            },
                            tabs:
                            {
                                sendMessage: f.bind(null, "sendMessage",
                                {
                                    minArgs: 2,
                                    maxArgs: 3
                                })
                            }
                        },
                        A = {
                            clear:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            get:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set:
                            {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        };
                    return n.privacy = {
                        network:
                        {
                            "*": A
                        },
                        services:
                        {
                            "*": A
                        },
                        websites:
                        {
                            "*": A
                        }
                    }, m(e, p, n)
                };
            if ("object" != typeof chrome || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
            e.exports = n(chrome)
        }
        else e.exports = browser
    }) ? n.apply(t, a) : n) || (e.exports = o)
}, function(e, t, r)
{
    /*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */
    e.exports = function()
    {
        "use strict";
        var e = Object.hasOwnProperty,
            t = Object.setPrototypeOf,
            r = Object.isFrozen,
            n = Object.keys,
            a = Object.freeze,
            o = Object.seal,
            i = "undefined" != typeof Reflect && Reflect,
            s = i.apply,
            l = i.construct;
        s || (s = function(e, t, r)
        {
            return e.apply(t, r)
        }), a || (a = function(e)
        {
            return e
        }), o || (o = function(e)
        {
            return e
        }), l || (l = function(e, t)
        {
            return new(Function.prototype.bind.apply(e, [null].concat(function(e)
            {
                if (Array.isArray(e))
                {
                    for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r
                }
                return Array.from(e)
            }(t))))
        });
        var m = E(Array.prototype.forEach),
            c = E(Array.prototype.indexOf),
            g = E(Array.prototype.join),
            u = E(Array.prototype.pop),
            d = E(Array.prototype.push),
            f = E(Array.prototype.slice),
            p = E(String.prototype.toLowerCase),
            A = E(String.prototype.match),
            h = E(String.prototype.replace),
            y = E(String.prototype.indexOf),
            v = E(String.prototype.trim),
            b = E(RegExp.prototype.test),
            x = T(RegExp),
            w = T(TypeError);

        function E(e)
        {
            return function(t)
            {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
                return s(e, t, n)
            }
        }

        function T(e)
        {
            return function()
            {
                for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                return l(e, r)
            }
        }

        function C(e, n)
        {
            t && t(e, null);
            for (var a = n.length; a--;)
            {
                var o = n[a];
                if ("string" == typeof o)
                {
                    var i = p(o);
                    i !== o && (r(n) || (n[a] = i), o = i)
                }
                e[o] = !0
            }
            return e
        }

        function k(t)
        {
            var r = {},
                n = void 0;
            for (n in t) s(e, t, [n]) && (r[n] = t[n]);
            return r
        }
        var S = a(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
            N = a(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "audio", "canvas", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "video", "view", "vkern"]),
            M = a(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
            L = a(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
            _ = a(["#text"]),
            O = a(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns"]),
            R = a(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
            D = a(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
            j = a(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
            P = o(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
            I = o(/<%[\s\S]*|[\s\S]*%>/gm),
            B = o(/^data-[\-\w.\u00B7-\uFFFF]/),
            F = o(/^aria-[\-\w]+$/),
            H = o(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
            U = o(/^(?:\w+script|data):/i),
            z = o(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),
            $ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e)
            {
                return typeof e
            } : function(e)
            {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function W(e)
        {
            if (Array.isArray(e))
            {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
            }
            return Array.from(e)
        }
        var q = function()
            {
                return "undefined" == typeof window ? null : window
            },
            G = function(e, t)
            {
                if ("object" !== (void 0 === e ? "undefined" : $(e)) || "function" != typeof e.createPolicy) return null;
                var r = null;
                t.currentScript && t.currentScript.hasAttribute("data-tt-policy-suffix") && (r = t.currentScript.getAttribute("data-tt-policy-suffix"));
                var n = "dompurify" + (r ? "#" + r : "");
                try
                {
                    return e.createPolicy(n,
                    {
                        createHTML: function(e)
                        {
                            return e
                        }
                    })
                }
                catch (e)
                {
                    return console.warn("TrustedTypes policy " + n + " could not be created."), null
                }
            };
        return function e()
        {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q(),
                r = function(t)
                {
                    return e(t)
                };
            if (r.version = "2.0.11", r.removed = [], !t || !t.document || 9 !== t.document.nodeType) return r.isSupported = !1, r;
            var o = t.document,
                i = !1,
                s = t.document,
                l = t.DocumentFragment,
                E = t.HTMLTemplateElement,
                T = t.Node,
                V = t.NodeFilter,
                Z = t.NamedNodeMap,
                K = void 0 === Z ? t.NamedNodeMap || t.MozNamedAttrMap : Z,
                Y = t.Text,
                X = t.Comment,
                J = t.DOMParser,
                Q = t.trustedTypes;
            if ("function" == typeof E)
            {
                var ee = s.createElement("template");
                ee.content && ee.content.ownerDocument && (s = ee.content.ownerDocument)
            }
            var te = G(Q, o),
                re = te ? te.createHTML("") : "",
                ne = s,
                ae = ne.implementation,
                oe = ne.createNodeIterator,
                ie = ne.getElementsByTagName,
                se = ne.createDocumentFragment,
                le = o.importNode,
                me = {};
            r.isSupported = ae && void 0 !== ae.createHTMLDocument && 9 !== s.documentMode;
            var ce = P,
                ge = I,
                ue = B,
                de = F,
                fe = U,
                pe = z,
                Ae = H,
                he = null,
                ye = C(
                {}, [].concat(W(S), W(N), W(M), W(L), W(_))),
                ve = null,
                be = C(
                {}, [].concat(W(O), W(R), W(D), W(j))),
                xe = null,
                we = null,
                Ee = !0,
                Te = !0,
                Ce = !1,
                ke = !1,
                Se = !1,
                Ne = !1,
                Me = !1,
                Le = !1,
                _e = !1,
                Oe = !1,
                Re = !1,
                De = !1,
                je = !0,
                Pe = !0,
                Ie = !1,
                Be = {},
                Fe = C(
                {}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
                He = null,
                Ue = C(
                {}, ["audio", "video", "img", "source", "image", "track"]),
                ze = null,
                $e = C(
                {}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]),
                We = null,
                qe = s.createElement("form"),
                Ge = function(e)
                {
                    We && We === e || (e && "object" === (void 0 === e ? "undefined" : $(e)) || (e = {}), he = "ALLOWED_TAGS" in e ? C(
                    {}, e.ALLOWED_TAGS) : ye, ve = "ALLOWED_ATTR" in e ? C(
                    {}, e.ALLOWED_ATTR) : be, ze = "ADD_URI_SAFE_ATTR" in e ? C(k($e), e.ADD_URI_SAFE_ATTR) : $e, He = "ADD_DATA_URI_TAGS" in e ? C(k(Ue), e.ADD_DATA_URI_TAGS) : Ue, xe = "FORBID_TAGS" in e ? C(
                    {}, e.FORBID_TAGS) :
                    {}, we = "FORBID_ATTR" in e ? C(
                    {}, e.FORBID_ATTR) :
                    {}, Be = "USE_PROFILES" in e && e.USE_PROFILES, Ee = !1 !== e.ALLOW_ARIA_ATTR, Te = !1 !== e.ALLOW_DATA_ATTR, Ce = e.ALLOW_UNKNOWN_PROTOCOLS || !1, ke = e.SAFE_FOR_JQUERY || !1, Se = e.SAFE_FOR_TEMPLATES || !1, Ne = e.WHOLE_DOCUMENT || !1, _e = e.RETURN_DOM || !1, Oe = e.RETURN_DOM_FRAGMENT || !1, Re = e.RETURN_DOM_IMPORT || !1, De = e.RETURN_TRUSTED_TYPE || !1, Le = e.FORCE_BODY || !1, je = !1 !== e.SANITIZE_DOM, Pe = !1 !== e.KEEP_CONTENT, Ie = e.IN_PLACE || !1, Ae = e.ALLOWED_URI_REGEXP || Ae, Se && (Te = !1), Oe && (_e = !0), Be && (he = C(
                    {}, [].concat(W(_))), ve = [], !0 === Be.html && (C(he, S), C(ve, O)), !0 === Be.svg && (C(he, N), C(ve, R), C(ve, j)), !0 === Be.svgFilters && (C(he, M), C(ve, R), C(ve, j)), !0 === Be.mathMl && (C(he, L), C(ve, D), C(ve, j))), e.ADD_TAGS && (he === ye && (he = k(he)), C(he, e.ADD_TAGS)), e.ADD_ATTR && (ve === be && (ve = k(ve)), C(ve, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && C(ze, e.ADD_URI_SAFE_ATTR), Pe && (he["#text"] = !0), Ne && C(he, ["html", "head", "body"]), he.table && (C(he, ["tbody"]), delete xe.tbody), a && a(e), We = e)
                },
                Ve = function(e)
                {
                    d(r.removed,
                    {
                        element: e
                    });
                    try
                    {
                        e.parentNode.removeChild(e)
                    }
                    catch (t)
                    {
                        e.outerHTML = re
                    }
                },
                Ze = function(e, t)
                {
                    try
                    {
                        d(r.removed,
                        {
                            attribute: t.getAttributeNode(e),
                            from: t
                        })
                    }
                    catch (e)
                    {
                        d(r.removed,
                        {
                            attribute: null,
                            from: t
                        })
                    }
                    t.removeAttribute(e)
                },
                Ke = function(e)
                {
                    var t = void 0,
                        r = void 0;
                    if (Le) e = "<remove></remove>" + e;
                    else
                    {
                        var n = A(e, /^[\r\n\t ]+/);
                        r = n && n[0]
                    }
                    var a = te ? te.createHTML(e) : e;
                    try
                    {
                        t = (new J).parseFromString(a, "text/html")
                    }
                    catch (e)
                    {}
                    if (i && C(xe, ["title"]), !t || !t.documentElement)
                    {
                        var o = (t = ae.createHTMLDocument("")).body;
                        o.parentNode.removeChild(o.parentNode.firstElementChild), o.outerHTML = a
                    }
                    return e && r && t.body.insertBefore(s.createTextNode(r), t.body.childNodes[0] || null), ie.call(t, Ne ? "html" : "body")[0]
                };
            r.isSupported && function()
            {
                try
                {
                    var e = Ke("<x/><title>&lt;/title&gt;&lt;img&gt;");
                    b(/<\/title/, e.querySelector("title").innerHTML) && (i = !0)
                }
                catch (e)
                {}
            }();
            var Ye = function(e)
                {
                    return oe.call(e.ownerDocument || e, e, V.SHOW_ELEMENT | V.SHOW_COMMENT | V.SHOW_TEXT, (function()
                    {
                        return V.FILTER_ACCEPT
                    }), !1)
                },
                Xe = function(e)
                {
                    return !(e instanceof Y || e instanceof X || "string" == typeof e.nodeName && "string" == typeof e.textContent && "function" == typeof e.removeChild && e.attributes instanceof K && "function" == typeof e.removeAttribute && "function" == typeof e.setAttribute && "string" == typeof e.namespaceURI)
                },
                Je = function(e)
                {
                    return "object" === (void 0 === T ? "undefined" : $(T)) ? e instanceof T : e && "object" === (void 0 === e ? "undefined" : $(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
                },
                Qe = function(e, t, n)
                {
                    me[e] && m(me[e], (function(e)
                    {
                        e.call(r, t, n, We)
                    }))
                },
                et = function(e)
                {
                    var t = void 0;
                    if (Qe("beforeSanitizeElements", e, null), Xe(e)) return Ve(e), !0;
                    var n = p(e.nodeName);
                    if (Qe("uponSanitizeElement", e,
                        {
                            tagName: n,
                            allowedTags: he
                        }), ("svg" === n || "math" === n) && 0 !== e.querySelectorAll("p, br").length) return Ve(e), !0;
                    if (!he[n] || xe[n])
                    {
                        if (Pe && !Fe[n] && "function" == typeof e.insertAdjacentHTML) try
                        {
                            var a = e.innerHTML;
                            e.insertAdjacentHTML("AfterEnd", te ? te.createHTML(a) : a)
                        }
                        catch (e)
                        {}
                        return Ve(e), !0
                    }
                    return "noscript" === n && b(/<\/noscript/i, e.innerHTML) || "noembed" === n && b(/<\/noembed/i, e.innerHTML) ? (Ve(e), !0) : (!ke || e.firstElementChild || e.content && e.content.firstElementChild || !b(/</g, e.textContent) || (d(r.removed,
                    {
                        element: e.cloneNode()
                    }), e.innerHTML ? e.innerHTML = h(e.innerHTML, /</g, "&lt;") : e.innerHTML = h(e.textContent, /</g, "&lt;")), Se && 3 === e.nodeType && (t = e.textContent, t = h(t, ce, " "), t = h(t, ge, " "), e.textContent !== t && (d(r.removed,
                    {
                        element: e.cloneNode()
                    }), e.textContent = t)), Qe("afterSanitizeElements", e, null), !1)
                },
                tt = function(e, t, r)
                {
                    if (je && ("id" === t || "name" === t) && (r in s || r in qe)) return !1;
                    if (Te && b(ue, t));
                    else if (Ee && b(de, t));
                    else
                    {
                        if (!ve[t] || we[t]) return !1;
                        if (ze[t]);
                        else if (b(Ae, h(r, pe, "")));
                        else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== y(r, "data:") || !He[e])
                            if (Ce && !b(fe, h(r, pe, "")));
                            else if (r) return !1
                    }
                    return !0
                },
                rt = function(e)
                {
                    var t = void 0,
                        a = void 0,
                        o = void 0,
                        i = void 0,
                        s = void 0;
                    Qe("beforeSanitizeAttributes", e, null);
                    var l = e.attributes;
                    if (l)
                    {
                        var m = {
                            attrName: "",
                            attrValue: "",
                            keepAttr: !0,
                            allowedAttributes: ve
                        };
                        for (s = l.length; s--;)
                        {
                            var d = t = l[s],
                                A = d.name,
                                y = d.namespaceURI;
                            if (a = v(t.value), o = p(A), m.attrName = o, m.attrValue = a, m.keepAttr = !0, m.forceKeepAttr = void 0, Qe("uponSanitizeAttribute", e, m), a = m.attrValue, !m.forceKeepAttr)
                            {
                                if ("name" === o && "IMG" === e.nodeName && l.id) i = l.id, l = f(l, []), Ze("id", e), Ze(A, e), c(l, i) > s && e.setAttribute("id", i.value);
                                else
                                {
                                    if ("INPUT" === e.nodeName && "type" === o && "file" === a && m.keepAttr && (ve[o] || !we[o])) continue;
                                    "id" === A && e.setAttribute(A, ""), Ze(A, e)
                                }
                                if (m.keepAttr)
                                    if (ke && b(/\/>/i, a)) Ze(A, e);
                                    else if (b(/svg|math/i, e.namespaceURI) && b(x("</(" + g(n(Fe), "|") + ")", "i"), a)) Ze(A, e);
                                else
                                {
                                    Se && (a = h(a, ce, " "), a = h(a, ge, " "));
                                    var w = e.nodeName.toLowerCase();
                                    if (tt(w, o, a)) try
                                    {
                                        y ? e.setAttributeNS(y, A, a) : e.setAttribute(A, a), u(r.removed)
                                    }
                                    catch (e)
                                    {}
                                }
                            }
                        }
                        Qe("afterSanitizeAttributes", e, null)
                    }
                },
                nt = function e(t)
                {
                    var r = void 0,
                        n = Ye(t);
                    for (Qe("beforeSanitizeShadowDOM", t, null); r = n.nextNode();) Qe("uponSanitizeShadowNode", r, null), et(r) || (r.content instanceof l && e(r.content), rt(r));
                    Qe("afterSanitizeShadowDOM", t, null)
                };
            return r.sanitize = function(e, n)
            {
                var a = void 0,
                    i = void 0,
                    s = void 0,
                    m = void 0,
                    c = void 0;
                if (e || (e = "\x3c!--\x3e"), "string" != typeof e && !Je(e))
                {
                    if ("function" != typeof e.toString) throw w("toString is not a function");
                    if ("string" != typeof(e = e.toString())) throw w("dirty is not a string, aborting")
                }
                if (!r.isSupported)
                {
                    if ("object" === $(t.toStaticHTML) || "function" == typeof t.toStaticHTML)
                    {
                        if ("string" == typeof e) return t.toStaticHTML(e);
                        if (Je(e)) return t.toStaticHTML(e.outerHTML)
                    }
                    return e
                }
                if (Me || Ge(n), r.removed = [], "string" == typeof e && (Ie = !1), Ie);
                else if (e instanceof T) 1 === (i = (a = Ke("\x3c!--\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === i.nodeName || "HTML" === i.nodeName ? a = i : a.appendChild(i);
                else
                {
                    if (!_e && !Se && !Ne && De && -1 === e.indexOf("<")) return te ? te.createHTML(e) : e;
                    if (!(a = Ke(e))) return _e ? null : re
                }
                a && Le && Ve(a.firstChild);
                for (var g = Ye(Ie ? e : a); s = g.nextNode();) 3 === s.nodeType && s === m || et(s) || (s.content instanceof l && nt(s.content), rt(s), m = s);
                if (m = null, Ie) return e;
                if (_e)
                {
                    if (Oe)
                        for (c = se.call(a.ownerDocument); a.firstChild;) c.appendChild(a.firstChild);
                    else c = a;
                    return Re && (c = le.call(o, c, !0)), c
                }
                var u = Ne ? a.outerHTML : a.innerHTML;
                return Se && (u = h(u, ce, " "), u = h(u, ge, " ")), te && De ? te.createHTML(u) : u
            }, r.setConfig = function(e)
            {
                Ge(e), Me = !0
            }, r.clearConfig = function()
            {
                We = null, Me = !1
            }, r.isValidAttribute = function(e, t, r)
            {
                We || Ge(
                {});
                var n = p(e),
                    a = p(t);
                return tt(n, a, r)
            }, r.addHook = function(e, t)
            {
                "function" == typeof t && (me[e] = me[e] || [], d(me[e], t))
            }, r.removeHook = function(e)
            {
                me[e] && u(me[e])
            }, r.removeHooks = function(e)
            {
                me[e] && (me[e] = [])
            }, r.removeAllHooks = function()
            {
                me = {}
            }, r
        }()
    }()
}, , function(e, t, r) {}, function(e, t, r)
{
    "use strict";
    r.r(t);
    var n = r(0),
        a = r(1),
        o = r.n(a);

    function i(e)
    {
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator])
        {
            if (Array.isArray(e) || (e = function(e, t)
                {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, t)
                }(e)))
            {
                var t = 0,
                    r = function() {};
                return {
                    s: r,
                    n: function()
                    {
                        return t >= e.length ?
                        {
                            done: !0
                        } :
                        {
                            done: !1,
                            value: e[t++]
                        }
                    },
                    e: function(e)
                    {
                        throw e
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var n, a, o = !0,
            i = !1;
        return {
            s: function()
            {
                n = e[Symbol.iterator]()
            },
            n: function()
            {
                var e = n.next();
                return o = e.done, e
            },
            e: function(e)
            {
                i = !0, a = e
            },
            f: function()
            {
                try
                {
                    o || null == n.return || n.return()
                }
                finally
                {
                    if (i) throw a
                }
            }
        }
    }

    function s(e, t)
    {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function l(e, t)
    {
        if (!(e.getElementsByClassName("inst-button-bwalk").length > 0))
        {
            var r = e.innerText.split("\n");
            r.length > 0 && (e.textContent = ""), r.forEach((function(r)
            {
                var a = document.createElement("div");
                if (a.className = "instructor-name-paragraph", a.textContent = r, a.title = r, "TA" !== r && "The Staff" !== r)
                {
                    var s = document.createElement("a");
                    ! function(e, t, r)
                    {
                        e.className = "inst-button-bwalk", e.setAttribute("inst-name", t), e.setAttribute("course-name", r),
                            function(e)
                            {
                                var t = encodeURI(e.replace(/[,. ]+/g, " "));
                                return n.runtime.sendMessage(
                                {
                                    action: "get",
                                    url: "https://www.bruinwalk.com/search/?category=professors&q=".concat(t)
                                }).then((function(t)
                                {
                                    var r = document.createElement("div");
                                    r.innerHTML = o.a.sanitize(t);
                                    var n = r.getElementsByClassName("sr-info");
                                    if (0 === n.length) return {
                                        found: !1
                                    };
                                    for (var a = 0; a < n.length; a++)
                                    {
                                        var i = n[a].firstElementChild.firstElementChild.textContent,
                                            s = i.replace(/[.,]/g, "").match(/\s([\w-']+)$/)[0].replace(" ", ""),
                                            l = i.replace(/[.,]/g, "")[0];
                                        if (e.substring(0, e.indexOf(",")) === s && e[e.indexOf(" ") + 1] === l)
                                        {
                                            var m = {
                                                found: !0
                                            };
                                            m.fullName = i;
                                            var c = r.getElementsByClassName("professor-result")[a].getElementsByClassName("rating")[0].firstElementChild.textContent;
                                            m.overallRating = c;
                                            var g = r.getElementsByClassName("sr-info")[a].lastElementChild,
                                                u = "https://www.bruinwalk.com".concat(g.href.substring(g.href.indexOf("/professors")), "all/");
                                            return m.instAllPage = u, m
                                        }
                                    }
                                    return {
                                        found: !1
                                    }
                                }))
                            }(t).then((function(t)
                            {
                                var r;
                                ! function(e, t)
                                {
                                    t.found ? (e.setAttribute("found-tag", t.fullName), e.textContent = t.overallRating, t.overallRating < 2 ? e.className = "inst-button-bwalk inst-rating-bad" : t.overallRating > 3.5 && (e.className = "inst-button-bwalk inst-rating-good"), e.href = t.instAllPage, e.target = "_blank", e.setAttribute("inst-all-page", t.instAllPage)) : (e.textContent = "N/A", e.setAttribute("found-tag", "NOT_FOUND"))
                                }(e, t), e.addEventListener("mouseover", (r = e, function()
                                {
                                    var e = r.nextElementSibling;
                                    e ? (e.classList.remove("hide"), e.classList.add("show")) : function(e)
                                    {
                                        var t = document.createElement("div");
                                        t.className = "inst-rating-popup-cont popover clickover fade bottom in show";
                                        var r = document.createElement("div"),
                                            a = document.createElement("div");
                                        r.appendChild(a);
                                        var s, l = document.createElement("div");
                                        l.className = "inst-rating-footer-div", "NOT_FOUND" != e.getAttribute("found-tag") ? (s = e.getAttribute("inst-all-page"), n.runtime.sendMessage(
                                        {
                                            action: "get",
                                            url: s
                                        }).then((function(e)
                                        {
                                            var t = document.createElement("div");
                                            t.innerHTML = o.a.sanitize(e);
                                            var r, n = [],
                                                a = i(t.getElementsByClassName("rating row"));
                                            try
                                            {
                                                for (a.s(); !(r = a.n()).done;)
                                                {
                                                    var s = r.value.getElementsByClassName("value")[0].textContent;
                                                    n.push(s)
                                                }
                                            }
                                            catch (e)
                                            {
                                                a.e(e)
                                            }
                                            finally
                                            {
                                                a.f()
                                            }
                                            return n
                                        }))).then((function(t)
                                        {
                                            r.className = "inst-rating-popup popover-content", a.className = "inst-rating-title-div", a.append("Showing Bruinwalk results for: ".concat(e.getAttribute("found-tag")));
                                            var s = function(e)
                                            {
                                                var t = ["Overall:", "Easiness:", "Workload:", "Clarity:", "Helpfulness:"],
                                                    r = document.createElement("table");
                                                if (r.className = "inst-rating-table", 0 === e.length)
                                                {
                                                    var n = document.createElement("tr"),
                                                        a = document.createElement("td");
                                                    a.textContent = "No ratings recorded.", n.appendChild(a), r.appendChild(n)
                                                }
                                                else e.forEach((function(e, n)
                                                {
                                                    var a = document.createElement("tr"),
                                                        o = document.createElement("td"),
                                                        i = document.createElement("td");
                                                    o.textContent = t[n], i.textContent = e, n % 2 && (a.style.backgroundColor = "#EAEAEA"), a.appendChild(o), a.appendChild(i), r.appendChild(a)
                                                }));
                                                return r
                                            }(t);
                                            r.appendChild(s);
                                            var m = function(e)
                                            {
                                                var t, r = "https://www.bruinwalk.com/professors/".concat(e.getAttribute("found-tag").replace(/\s/g, "-").toLowerCase(), "/").concat(e.getAttribute("course-name").toLowerCase(), "/"),
                                                    a = document.createElement("table");
                                                return a.className = "grades-dist-table", (t = r, n.runtime.sendMessage(
                                                {
                                                    action: "get",
                                                    url: t
                                                }).then((function(e)
                                                {
                                                    var t = document.createElement("div");
                                                    t.innerHTML = o.a.sanitize(e);
                                                    var r = t.getElementsByClassName("graph-body");
                                                    if (0 === r.length) return {
                                                        scores: []
                                                    };
                                                    var n, a = [],
                                                        s = 0,
                                                        l = i(r[0].getElementsByClassName("bar-fill has-tip tip-left"));
                                                    try
                                                    {
                                                        for (l.s(); !(n = l.n()).done;)
                                                        {
                                                            var m = n.value,
                                                                c = parseInt(m.getAttribute("title"));
                                                            a.push(c), c > s && (s = c)
                                                        }
                                                    }
                                                    catch (e)
                                                    {
                                                        l.e(e)
                                                    }
                                                    finally
                                                    {
                                                        l.f()
                                                    }
                                                    return {
                                                        scores: a,
                                                        maxScore: s
                                                    }
                                                }))).then((function(e)
                                                {
                                                    var t = e.scores,
                                                        r = e.maxScore,
                                                        n = document.createElement("tr");
                                                    n.style.backgroundColor = "#3496E1";
                                                    var o = document.createElement("td");
                                                    if (o.className = "grades-dist-table-title-cell", n.appendChild(o), a.appendChild(n), 0 === t.length) o.textContent = "No grades recorded.";
                                                    else
                                                    {
                                                        o.textContent = "Grades for this course under this professor: ", o.colSpan = "13";
                                                        var i = document.createElement("tr");
                                                        i.className = "grades-dist-bar-graph", t.forEach((function(e)
                                                        {
                                                            var t = document.createElement("td"),
                                                                n = document.createElement("div");
                                                            n.style.height = "".concat(Math.floor(e / r * 30), "px"), n.className = "grades-dist-bar", t.appendChild(n), i.appendChild(t)
                                                        }));
                                                        var s = document.createElement("tr");
                                                        s.className = "grades-dist-grade-label", "+ A - + B - + C - + D - F".split(" ").forEach((function(e)
                                                        {
                                                            var t = document.createElement("td");
                                                            t.textContent = e, s.appendChild(t)
                                                        })), a.appendChild(i), a.appendChild(s)
                                                    }
                                                })), a
                                            }(e);
                                            r.appendChild(m), l.append("Click to see full Bruinwalk page"), r.appendChild(l)
                                        })) : (r.className = "inst-rating-popup popover-content inst-nonexistent", a.className = "inst-rating-title-div-nf", a.append("Sorry, this professor cannot be found at Bruinwalk."), l.append("Click to see search results"), r.appendChild(l), e.href = "https://www.bruinwalk.com/search/?category=professors&q=".concat(encodeURI(e.getAttribute("inst-name").replace(/[,. ]+/g, " "))), e.target = "_blank"), t.appendChild(r), e.insertAdjacentElement("afterend", t)
                                    }(r)
                                })), e.addEventListener("mouseout", function(e)
                                {
                                    return function()
                                    {
                                        var t = e.nextElementSibling;
                                        t.classList.remove("show"), t.classList.add("hide")
                                    }
                                }(e))
                            }))
                    }(s, r, t), a.appendChild(s)
                }
                e.appendChild(a)
            }))
        }
    }

    function m(e)
    {
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator])
        {
            if (Array.isArray(e) || (e = function(e, t)
                {
                    if (!e) return;
                    if ("string" == typeof e) return c(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, t)
                }(e)))
            {
                var t = 0,
                    r = function() {};
                return {
                    s: r,
                    n: function()
                    {
                        return t >= e.length ?
                        {
                            done: !0
                        } :
                        {
                            done: !1,
                            value: e[t++]
                        }
                    },
                    e: function(e)
                    {
                        throw e
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var n, a, o = !0,
            i = !1;
        return {
            s: function()
            {
                n = e[Symbol.iterator]()
            },
            n: function()
            {
                var e = n.next();
                return o = e.done, e
            },
            e: function(e)
            {
                i = !0, a = e
            },
            f: function()
            {
                try
                {
                    o || null == n.return || n.return()
                }
                finally
                {
                    if (i) throw a
                }
            }
        }
    }

    function c(e, t)
    {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function g(e)
    {
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator])
        {
            if (Array.isArray(e) || (e = function(e, t)
                {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(e, t)
                }(e)))
            {
                var t = 0,
                    r = function() {};
                return {
                    s: r,
                    n: function()
                    {
                        return t >= e.length ?
                        {
                            done: !0
                        } :
                        {
                            done: !1,
                            value: e[t++]
                        }
                    },
                    e: function(e)
                    {
                        throw e
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var n, a, o = !0,
            i = !1;
        return {
            s: function()
            {
                n = e[Symbol.iterator]()
            },
            n: function()
            {
                var e = n.next();
                return o = e.done, e
            },
            e: function(e)
            {
                i = !0, a = e
            },
            f: function()
            {
                try
                {
                    o || null == n.return || n.return()
                }
                finally
                {
                    if (i) throw a
                }
            }
        }
    }

    function u(e, t)
    {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }
    r(3);
    var d = null;
    document.addEventListener("DOMSubtreeModified", (function()
    {
        d && clearTimeout(d), d = setTimeout(f, 1e3)
    }), !1);
    var f = function()
    {
        window.location.href.includes("be.my.ucla.edu") ? (function()
        {
            var e = document.getElementsByClassName("ClassSearchList search_results")[0];
            if (e)
            {
                var t, r = e.getElementsByClassName("span9 hide-small"),
                    n = m(e.getElementsByClassName("head"));
                try
                {
                    for (n.s(); !(t = n.n()).done;)
                    {
                        var a = t.value.getElementsByTagName("a")[0].getAttribute("onclick"),
                            o = /"([^"]*)"/g;
                        o.exec(a), o.exec(a), o.exec(a);
                        var i = o.exec(a)[1].trim().replace(" ", "-"),
                            s = o.exec(a)[1].trim().replace(/^0*/g, "");
                        if (s.split(" ").length > 1)
                        {
                            var c = s.split(" ")[0],
                                g = s.split(" ").pop();
                            s = g + c
                        }
                        var u, d = "".concat(i, "-").concat(s),
                            f = m(r);
                        try
                        {
                            for (f.s(); !(u = f.n()).done;)
                            {
                                l(u.value, d)
                            }
                        }
                        catch (e)
                        {
                            f.e(e)
                        }
                        finally
                        {
                            f.f()
                        }
                    }
                }
                catch (e)
                {
                    n.e(e)
                }
                finally
                {
                    n.f()
                }
            }
        }(), function()
        {
            var e, t = window.location.href.includes("studylist"),
                r = document.getElementsByClassName("courseItem"),
                n = "planEnrolled",
                a = m(r);
            try
            {
                var o = function()
                {
                    var r = e.value;
                    if (!t)
                        for (var a = 0, o = ["Class", "Alternate", "Enrolled"]; a < o.length; a++)
                        {
                            var i = o[a];
                            if (r.classList.contains("item".concat(i)))
                            {
                                n = "plan".concat(i);
                                break
                            }
                        }
                    var s = r.getElementsByClassName(n)[0].getAttribute("data-classname").split(":")[1].trim().split(" ").join("-");
                    r.querySelectorAll("td.hide-small:not(.centerColumn)").forEach((function(e)
                    {
                        return l(e, s)
                    }))
                };
                for (a.s(); !(e = a.n()).done;) o()
            }
            catch (e)
            {
                a.e(e)
            }
            finally
            {
                a.f()
            }
        }()) : window.location.href.includes("sa.ucla.edu") && function()
        {
            var e, t = g(document.getElementsByClassName("primarySection"));
            try
            {
                for (t.s(); !(e = t.n()).done;)
                {
                    var r, n = e.value.id.split("-")[0],
                        a = document.getElementById("".concat(n, "-children")),
                        o = a.getElementsByClassName("summer_classes_data_rows")[0],
                        i = g((a = o || a).children);
                    try
                    {
                        for (i.s(); !(r = i.n()).done;)
                        {
                            var s = r.value,
                                m = s.getElementsByClassName("instructorColumn")[0],
                                c = s.getElementsByClassName("infoColumn")[0].children[1].getAttribute("data-poload"),
                                u = new URLSearchParams(c),
                                d = u.get("subj_area_cd").trim().replace(" ", "-"),
                                f = u.get("crs_catlg_no").trim().replace(/^0*/g, "");
                            if (f.split(" ").length > 1)
                            {
                                var p = f.split(" ")[0],
                                    A = f.split(" ").pop();
                                f = A + p
                            }
                            l(m, "".concat(d, "-").concat(f))
                        }
                    }
                    catch (e)
                    {
                        i.e(e)
                    }
                    finally
                    {
                        i.f()
                    }
                }
            }
            catch (e)
            {
                t.e(e)
            }
            finally
            {
                t.f()
            }
        }()
    }
}]);