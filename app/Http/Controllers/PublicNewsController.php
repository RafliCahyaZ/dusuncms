<?php

namespace App\Http\Controllers;

use App\Models\News;
use Inertia\Inertia;
use Inertia\Response;

class PublicNewsController extends Controller
{
    /**
     * Display a listing of published news.
     */
    public function index(): Response
    {
        $news = News::query()
            ->where('status', 'published')
            ->latest('published_at')
            ->paginate(9)
            ->withQueryString();

        return Inertia::render('Public/News/Index', [
            'news' => $news,
        ]);
    }

    /**
     * Display the specified published news.
     */
    public function show(string $slug): Response
    {
        $news = News::query()
            ->with('author')
            ->where('status', 'published')
            ->where('slug', $slug)
            ->firstOrFail();

        $latestNews = News::query()
            ->with('author')
            ->where('status', 'published')
            ->where('id', '!=', $news->id)
            ->latest('published_at')
            ->take(5)
            ->get();

        return Inertia::render('Public/News/Show', [
            'news' => $news,
            'latestNews' => $latestNews,
        ]);
    }
}