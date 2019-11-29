<?php

declare(strict_types=1);

namespace App\Providers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Session;

class InertiaServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register(): void
    {
        $this->registerMixVersion();
        $this->shareUser();
        $this->shareFlashes();
    }

    /**
     * Share the mix version from the manifest.
     *
     * @return void
     */
    public function registerMixVersion(): void
    {
        Inertia::version(function () {
            return md5_file(public_path('mix-manifest.json'));
        });
    }

    /**
     * Share user data.
     *
     * @return void
     */
    public function shareUser(): void
    {
        Inertia::share([
            'auth' => function () {
                $user = Auth::user();

                return [
                    'user' => [
                        'id' => $user->id ?? null,
                        'name' => $user->name ?? null,
                        'email' => $user->email ?? null
                    ]
                ];
            },
        ]);
    }

    /**
     * Share flashes and errors.
     *
     * @return void
     */
    public function shareFlashes(): void
    {
        Inertia::share([
            'flash' => function () {
                return [
                    'message' => Session::get('message'),
                ];
            },
            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object) [];
            },
        ]);
    }
}
