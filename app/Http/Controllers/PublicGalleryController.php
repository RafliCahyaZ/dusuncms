<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Inertia\Inertia;
use Inertia\Response;

class PublicGalleryController extends Controller
{
    /**
     * Display a listing of gallery albums.
     */
    public function index(): Response
    {
        $galleries = Gallery::query()
            ->with([
                'images' => function ($query) {
                    $query->orderBy('sort_order')
                        ->orderBy('id');
                },
            ])
            ->withCount('images')
            ->latest()
            ->paginate(9)
            ->withQueryString();

        return Inertia::render('Public/Gallery/Index', [
            'galleries' => $galleries,
        ]);
    }

    /**
     * Display the specified gallery album.
     */
    public function show(Gallery $gallery): Response
    {
        $gallery->load([
            'images' => function ($query) {
                $query->orderBy('sort_order')
                    ->orderBy('id');
            },
        ]);

        $latestGalleries = Gallery::query()
            ->withCount('images')
            ->where('id', '!=', $gallery->id)
            ->latest()
            ->take(5)
            ->get();

        return Inertia::render('Public/Gallery/Show', [
            'gallery' => $gallery,
            'latestGalleries' => $latestGalleries,
        ]);
    }
}