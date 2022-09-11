<template x-data="cookieConsent({
    policyUrl: '{{ $policyUrl }}',
    language: '{{ $language }}'
})"></template>

@once
    @push('head')
        <link rel="stylesheet" href="{{ asset('../vendor/humble-guys/humble-cookie-consent-component/public/resources/dist/style.css?v=0.0.1') }}">
        <script module defer src="{{ asset('../vendor/humble-guys/humble-cookie-consent-component/public/resources/dist/humble-cookie-consent-component.umd.js?v=0.0.1') }}"></script>
    @endpush
@endonce 