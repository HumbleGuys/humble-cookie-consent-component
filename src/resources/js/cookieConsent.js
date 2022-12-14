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
                        title: "Vi anv??nder cookies",
                        description:
                            'Den h??r webbplatsen anv??nder n??dv??ndiga cookies f??r s??kerst??lla webbplatsens funktion och cookies fr??n tredje part f??r att sp??ra och analysera anv??ndningen av webbplatsen. De senare s??tts bara efter ditt medgivande. <button type="button" data-cc="c-settings" class="cc-link">L??t mig v??lja</button>',
                        primary_btn: {
                            text: "Acceptera alla",
                            role: "accept_all",
                        },
                        secondary_btn: {
                            text: "Acceptera n??dv??ndiga",
                            role: "accept_necessary",
                        },
                    },
                    settings_modal: {
                        title: "Inst??llningar f??r cookies",
                        save_settings_btn: "Spara inst??llningar",
                        accept_all_btn: "Acceptera alla",
                        reject_all_btn: "Neka alla",
                        close_btn_label: "St??ng",
                        cookie_table_headers: [
                            { col1: "Namn" },
                            { col2: "Dom??n" },
                            { col3: "Giltighet" },
                            { col4: "Beskrivning" },
                        ],
                        blocks: [
                            {
                                title: "Anv??ndning av cookies ????",
                                description: `Vi anv??nder cookies f??r att s??kerst??lla webbplatsens grundl??ggande funktionalitet och f??r att f??rb??ttra din upplevelse n??r du navigerar genom webbplatsen. Du kan v??lja att acceptera eller neka varje kategori n??r du vill. F??r mer detaljer kring cookies och v??r datapolicy, var god se v??r <a href="${policyUrl}" class="cc-link">integritetspolicy</a>.`,
                            },
                            {
                                title: "N??dv??ndiga cookies",
                                description:
                                    "N??dv??ndiga cookies ??r absolut n??dv??ndiga f??r att webbplatsen ska fungera korrekt. Dessa cookies s??kerst??ller grundl??ggande funktioner och s??kerhetsfunktioner p?? webbplatsen. N??dv??ndiga cookies placeras automatiskt och kr??ver inte ditt samtycke.",
                                toggle: {
                                    value: "necessary",
                                    enabled: true,
                                    readonly: true,
                                },
                            },
                            {
                                title: "Analytiska cookies",
                                description:
                                    "Analytiska cookies anv??nds f??r att f??rst?? hur bes??kare interagerar med webbplatsen. Dessa cookies hj??lper till att ge information om m??tv??rden, antal bes??kare, avvisningsfrekvens, trafikk??lla etc.",
                                toggle: {
                                    value: "analytics",
                                    enabled: false,
                                    readonly: false,
                                },
                            },
                            {
                                title: "Cookies f??r marknadsf??ring",
                                description:
                                    "Cookies f??r marknadsf??ring anv??nds f??r att sp??ra bes??kare p?? webbplatser. Avsikten ??r att visa annonser som ??r relevanta och engagerande f??r enskilda anv??ndare, och d??rmed mer v??rdefull f??r utgivare och tredjepartsannons??rer.",
                                toggle: {
                                    value: "targeting",
                                    enabled: false,
                                    readonly: false,
                                },
                            },
                            {
                                title: "Ej strikt n??dv??ndig funtionalitet",
                                description:
                                    "Dessa cookies ??r n??dv??ndigaa f??r extra funktioner som exempelvis Google Maps och andra ej strikt n??dv??ndiga externa tj??nster och funktioner.",
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
                                title: "Cookie usage ????",
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
