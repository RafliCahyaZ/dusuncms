<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use App\Models\News;
use App\Models\VillageOfficial;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard', [
            'stats' => [
                'news' => News::count(),
                'gallery' => Gallery::count(),
                'officials' => VillageOfficial::count(),
                'documents' => 0,
                'visitors' => 0,
            ],
        ]);
    }
}