<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class Controller
{
    public function index(): Response
    {
        return Inertia::render('Index');
    }
}
