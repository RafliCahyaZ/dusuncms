<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\News;
use Inertia\Inertia;
use Inertia\Response;

class PublicController extends Controller
{
    public function index(): Response
    {
        $news = News::query()
            ->where('status', 'published')
            ->latest('published_at')
            ->take(3)
            ->get();

        $galleries = Gallery::query()
            ->with('images')
            ->withCount('images')
            ->latest()
            ->take(6)
            ->get();

        return Inertia::render('Public/Home', [
            'news' => $news,
            'galleries' => $galleries,
        ]);
    }
}