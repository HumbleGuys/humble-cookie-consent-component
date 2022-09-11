<?php

namespace HumbleCookieConsentComponent;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider as SupportServiceProvider;

class ServiceProvider extends SupportServiceProvider
{
    public function register(): void
    {
        $this->loadViewsFrom(__DIR__.'/resources', 'cookieConsent');

        Blade::component('cookieConsent::components.base', 'cookieConsent');
    }

    public function boot(): void
    {
    }
}
