import "vanilla-cookieconsent";

export default ({ policyUrl, language }) => ({
    init() {
        const cc = initCookieConsent();

        const domain = window.location.hostname;

        const cookies = {
            analytics: [
                {
                    name: "_gid",
                    domain: domain,
                    path: "/",
                },
                {
                    name: "_ga",
                    domain: domain,
                    path: "/",
                },
                {
                    name: "_fbp",
                    domain: domain,
                    path: "/",
                },
                {
                    name: "_scid",
                    domain: domain,
                    path: "/",
                },
            ],
        };

        cc.run({
            current_lang: language,
            autoclear_cookies: true,
            page_scripts: true,
            delay: 500,
            remove_cookie_tables: true,

            gui_options: {
                consent_modal: {
                    layout: "cloud",
                    position: "bottom center",
                    transition: "slide",
                    swap_buttons: false,
                },
                settings_modal: {
                    layout: "box",
                    transition: "slide",
                },
            },

            onChange: function (cookie, changedPreferences) {
                changedPreferences.forEach(function (c) {
                    if (!cc.allowedCategory(c) && Array.isArray(cookies[c])) {
                        cookies[c].forEach(function (deleteCookie) {
                            cc.eraseCookies(
                                deleteCookie.name,
                                deleteCookie.path,
                                deleteCookie.domain
                            );
                        });
                    }
                });
            },

            languages: {
                sv: {
                    consent_modal: {
                        title: "Vi använder cookies",
                        description:
                            'Den här webbplatsen använder nödvändiga cookies för säkerställa webbplatsens funktion och cookies från tredje part för att spåra och analysera användningen av webbplatsen. De senare sätts bara efter ditt medgivande. <button type="button" data-cc="c-settings" class="cc-link">Låt mig välja</button>',
                        primary_btn: {
                            text: "Acceptera alla",
                            role: "accept_all",
                        },
                        secondary_btn: {
                            text: "Acceptera nödvändiga",
                            role: "accept_necessary",
                        },
                    },
                    settings_modal: {
                        title: "Inställningar för cookies",
                        save_settings_btn: "Spara inställningar",
                        accept_all_btn: "Acceptera alla",
                        reject_all_btn: "Neka alla",
                        close_btn_label: "Stäng",
                        cookie_table_headers: [
                            { col1: "Namn" },
                            { col2: "Domän" },
                            { col3: "Giltighet" },
                            { col4: "Beskrivning" },
                        ],
                        blocks: [
                            {
                                title: "Användning av cookies 📢",
                                description: `Vi använder cookies för att säkerställa webbplatsens grundläggande funktionalitet och för att förbättra din upplevelse när du navigerar genom webbplatsen. Du kan välja att acceptera eller neka varje kategori när du vill. För mer detaljer kring cookies och vår datapolicy, var god se vår <a href="${policyUrl}" class="cc-link">integritetspolicy</a>.`,
                            },
                            {
                                title: "Nödvändiga cookies",
                                description:
                                    "Nödvändiga cookies är absolut nödvändiga för att webbplatsen ska fungera korrekt. Dessa cookies säkerställer grundläggande funktioner och säkerhetsfunktioner på webbplatsen. Nödvändiga cookies placeras automatiskt och kräver inte ditt samtycke.",
                                toggle: {
                                    value: "necessary",
                                    enabled: true,
                                    readonly: true,
                                },
                            },
                            {
                                title: "Analytiska cookies",
                                description:
                                    "Analytiska cookies används för att förstå hur besökare interagerar med webbplatsen. Dessa cookies hjälper till att ge information om mätvärden, antal besökare, avvisningsfrekvens, trafikkälla etc.",
                                toggle: {
                                    value: "analytics",
                                    enabled: false,
                                    readonly: false,
                                },
                            },
                            {
                                title: "Cookies för marknadsföring",
                                description:
                                    "Cookies för marknadsföring används för att spåra besökare på webbplatser. Avsikten är att visa annonser som är relevanta och engagerande för enskilda användare, och därmed mer värdefull för utgivare och tredjepartsannonsörer.",
                                toggle: {
                                    value: "targeting",
                                    enabled: false,
                                    readonly: false,
                                },
                            },
                            {
                                title: "Ej strikt nödvändig funtionalitet",
                                description:
                                    "Dessa cookies är nödvändigaa för extra funktioner som exempelvis Google Maps och andra ej strikt nödvändiga externa tjänster och funktioner.",
                                toggle: {
                                    value: "nonessential",
                                    enabled: false,
                                    readonly: false,
                                },
                            },
                        ],
                    },
                },

                en: {
                    consent_modal: {
                        title: "We use cookies",
                        description:
                            'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
                        primary_btn: {
                            text: "Accept all",
                            role: "accept_all", // 'accept_selected' or 'accept_all'
                        },
                        secondary_btn: {
                            text: "Reject all",
                            role: "accept_necessary", // 'settings' or 'accept_necessary'
                        },
                    },
                    settings_modal: {
                        title: "Settings for cookies",
                        save_settings_btn: "Save settings",
                        accept_all_btn: "Accept all",
                        reject_all_btn: "Reject all",
                        close_btn_label: "Close",
                        cookie_table_headers: [
                            { col1: "Name" },
                            { col2: "Domain" },
                            { col3: "Expiration" },
                            { col4: "Description" },
                        ],
                        blocks: [
                            {
                                title: "Cookie usage 📢",
                                description: `We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="${policyUrl}" class="cc-link">privacy policy</a>.`,
                            },
                            {
                                title: "Strictly necessary cookies",
                                description:
                                    "These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly",
                                toggle: {
                                    value: "necessary",
                                    enabled: true,
                                    readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
                                },
                            },
                            {
                                title: "Performance and Analytics cookies",
                                description:
                                    "These cookies allow the website to remember the choices you have made in the past",
                                toggle: {
                                    value: "analytics", // there are no default categories => you specify them
                                    enabled: false,
                                    readonly: false,
                                },
                                cookie_table: [
                                    {
                                        col1: "^_ga",
                                        col2: "google.com",
                                        col3: "2 years",
                                        col4: "description ...",
                                        is_regex: true,
                                    },
                                    {
                                        col1: "_gid",
                                        col2: "google.com",
                                        col3: "1 day",
                                        col4: "description ...",
                                    },
                                ],
                            },
                            {
                                title: "Advertisement and Targeting cookies",
                                description:
                                    "These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you",
                                toggle: {
                                    value: "targeting",
                                    enabled: false,
                                    readonly: false,
                                },
                            },
                        ],
                    },
                },
            },
        });
    },
});
