import "./css/index.css";

import cookieConsent from "./js/cookieConsent";

document.addEventListener("alpine:init", () => {
    window.Alpine.data("cookieConsent", cookieConsent);
});
