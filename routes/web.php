<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\GalleryController;
use App\Http\Controllers\Admin\GalleryImageController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\PublicController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PublicController::class, 'index']);

Route::middleware(['auth', 'verified'])->group(function () {

    /*
    |--------------------------------------------------------------------------
    | Dashboard
    |--------------------------------------------------------------------------
    */

    Route::get('/dashboard', [DashboardController::class, 'index'])
        ->name('dashboard');

    /*
    |--------------------------------------------------------------------------
    | News
    |--------------------------------------------------------------------------
    */

    Route::resource('news', NewsController::class);

    /*
    |--------------------------------------------------------------------------
    | Gallery Album
    |--------------------------------------------------------------------------
    */

    Route::resource('gallery', GalleryController::class);

    /*
    |--------------------------------------------------------------------------
    | Gallery Images
    |--------------------------------------------------------------------------
    */

    Route::post(
        'gallery/{gallery}/images',
        [GalleryImageController::class, 'store']
    )->name('gallery.images.store');

    Route::delete(
        'gallery-images/{galleryImage}',
        [GalleryImageController::class, 'destroy']
    )->name('gallery.images.destroy');
});

require __DIR__ . '/auth.php';