import * as Framer from "framer";
import * as React from "react";
import { createPortal } from "react-dom";
import * as ReactDOM from "react-dom/client";

const routes = {
    XkK_ATcoR: {
        elements: {},
        page: Framer.lazy(() => import("https://framerusercontent.com/modules/DeALJJrybKEZWB4v8V10/tWIdWCPQGQGI4Nrc9X26/XkK_ATcoR.js")),
        path: "/"
    }
};

const locales = [{ code: "en-US", id: "default", name: "English", slug: "" }];
const collectionUtils = {};
const framerSiteId = "7cafa23c01722295f03180fcfe45aca3c6218a193bcc2270b4901e034b57eb95";

export async function getPageRoot({ routeId, pathVariables, localeId }) {
    if (typeof window !== "undefined") {
        void (async () => {
            const route = routes[routeId];
            const defaultLocaleId = "default";
            const framerLocale = locales.find(({ id }) => !localeId ? id === defaultLocaleId : id === localeId).code;

            let collectionItemId = null;
            if (route?.collectionId && collectionUtils) {
                const utils = await collectionUtils[route.collectionId]?.();
                const [slug] = Object.values(pathVariables);
                if (utils && typeof slug === "string") {
                    collectionItemId = (await utils.getRecordIdBySlug(slug, framerLocale || undefined)) ?? null;
                }
            }

            const resolvedDateTimeOptions = Intl.DateTimeFormat().resolvedOptions();
            const timezone = resolvedDateTimeOptions.timeZone;
            const locale = resolvedDateTimeOptions.locale;

            window.__framer_events.push([
                "published_site_pageview",
                {
                    framerSiteId: framerSiteId ?? null,
                    routePath: route?.path || "/",
                    collectionItemId,
                    framerLocale: framerLocale || null,
                    webPageId: routeId,
                    referrer: document.referrer || null,
                    url: window.location.href,
                    hostname: window.location.hostname || null,
                    pathname: window.location.pathname || null,
                    hash: window.location.hash || null,
                    search: window.location.search || null,
                    timezone,
                    locale,
                }
            ]);
        })();
    }

    await routes[routeId].page.preload();

    const content = React.createElement(
        Framer.PageRoot,
        {
            isWebsite: true,
            routeId,
            pathVariables,
            routes,
            collectionUtils,
            framerSiteId,
            notFoundPage: Framer.lazy(() => import("__framer-not-found-page")),
            isReducedMotion: undefined,
            localeId,
            locales,
            preserveQueryParams: undefined,
            siteCanonicalURL: "https://diegoymaria.framer.website",
            EditorBar: typeof window === "undefined" ? undefined : Framer.lazy(async () => {
                const { createEditorBar } = await import("https://edit.framer.com/init.mjs");
                return {
                    default: createEditorBar({
                        dependencies: {
                            __version: 1,
                            framer: {
                                useCurrentRoute: Framer.useCurrentRoute,
                                useLocaleInfo: Framer.useLocaleInfo,
                                useRouter: Framer.useRouter
                            },
                            react: {
                                createElement: React.createElement,
                                memo: React.memo,
                                useCallback: React.useCallback,
                                useEffect: React.useEffect,
                                useRef: React.useRef,
                                useState: React.useState
                            },
                            'react-dom': { createPortal }
                        }
                    })
                }
            }),
        }
    );

    const contentWithFeaturesContext = React.createElement(
        Framer.LibraryFeaturesProvider,
        {
            children: content,
            value: { codeBoundaries: true, editorBarSubtle: false, enableAsyncURLUpdates: true, newTrackingEvents: true, pauseOffscreen: true, replaceNestedLinks: true, useGranularSuspense: true, wrapUpdatesInTransitions: true }
        }
    );

    const contentWithGracefullyDegradingErrorBoundary = React.createElement(Framer.GracefullyDegradingErrorBoundary, {
        children: contentWithFeaturesContext
    });

    const page = React.createElement(Framer.PageEffectsProvider, {
        children: contentWithGracefullyDegradingErrorBoundary,
        value: { routes: {} }
    });

    return page;
}

const isBrowser = typeof document !== "undefined";
if (isBrowser) {
    window.__framer_importFromPackage = (packageAndFilename, exportIdentifier) => () => {
        return React.createElement(Framer.ErrorPlaceholder, { error: 'Package component not supported: "' + exportIdentifier + '" in "' + packageAndFilename + '"' });
    }

    window.process = {
        ...window.process,
        env: {
            ...(window.process ? window.process.env : undefined),
            NODE_ENV: "production"
        }
    };

    window.__framer_events = window.__framer_events || [];

    Framer.installFlexboxGapWorkaroundIfNeeded();

    const container = document.getElementById("main");
    if ("framerHydrateV2" in container.dataset) main(true, container);
    else main(false, container);
}

function track() {
    if (!isBrowser) return;
    window.__framer_events.push(arguments);
}

async function main(shouldHydrate, container) {
    function handleError(error, errorInfo, recoverable = true) {
        if (error.caught || window.__framer_hadFatalError) return;

        const componentStack = errorInfo?.componentStack;
        if (recoverable) {
            console.warn("Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches:\n", error, componentStack);
            if (Math.random() > 0.01) return;
        } else {
            console.error("Fatal crash during hydration. If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/");
        }
        track(recoverable ? "published_site_load_recoverable_error" : "published_site_load_error", {
            message: String(error),
            componentStack,
            stack: componentStack ? undefined : error instanceof Error && typeof error.stack === "string" ? error.stack : null,
        });
    }

    try {
        let routeId, localeId, pathVariables, breakpoints;
        if (shouldHydrate) {
            const routeData = JSON.parse(container.dataset.framerHydrateV2);
            routeId = routeData.routeId;
            localeId = routeData.localeId
