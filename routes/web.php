<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\NewsController;

Route::get('/', function () {
    return Inertia::render('Dashboard');
});

Route::resource('news', NewsController::class);