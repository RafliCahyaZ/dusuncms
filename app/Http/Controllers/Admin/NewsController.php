<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/News/Index', [
            'news' => News::latest()->get(),
        ]);
    }
    public function edit(News $news)
    {
        return Inertia::render('Admin/News/Edit', [
            'news' => $news,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/News/Create');
    }

    public function update(Request $request, News $news)
    {
        $validated = $request->validate([
            'title' => ['required', 'max:255'],
            'excerpt' => ['nullable'],
            'content' => ['required'],
            'status' => ['required'],
        ]);

        $news->update([
            'title' => $validated['title'],
            'slug' => Str::slug($validated['title']),
            'excerpt' => $validated['excerpt'],
            'content' => $validated['content'],
            'status' => $validated['status'],
        ]);

        return redirect()
            ->route('news.index')
            ->with('success', 'Berita berhasil diperbarui.');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'max:255'],
            'excerpt' => ['nullable'],
            'content' => ['required'],
            'status' => ['required'],
        ]);

        News::create([
            'title' => $validated['title'],
            'slug' => Str::slug($validated['title']),
            'excerpt' => $validated['excerpt'],
            'content' => $validated['content'],
            'status' => $validated['status'],
            'user_id' => Auth::id() ?? 1,
        ]);

        return redirect()->route('news.index')
            ->with('success', 'Berita berhasil ditambahkan.');
    }

    public function destroy(News $news)
    {
        $news->delete();

        return redirect()
            ->route('news.index')
            ->with('success', 'Berita berhasil dihapus.');
    }
}