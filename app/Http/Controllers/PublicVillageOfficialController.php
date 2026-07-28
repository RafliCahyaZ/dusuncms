<?php

namespace App\Http\Controllers;

use App\Models\VillageOfficial;
use Inertia\Inertia;
use Inertia\Response;

class PublicVillageOfficialController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Public/VillageOfficials/Index', [
            'officials' => VillageOfficial::where('is_active', true)
                ->orderBy('sort_order')
                ->orderBy('name')
                ->get(),
        ]);
    }
}