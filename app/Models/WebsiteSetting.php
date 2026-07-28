<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class WebsiteSetting extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        // General
        'village_name',
        'logo',
        'hero_image',

        // Profile
        'history',
        'vision',
        'mission',

        // Head
        'head_name',
        'head_greeting',

        // Contact
        'address',
        'phone',
        'email',

        // Maps
        'maps_embed',

        // Statistics
        'population',
        'family_cards',
        'rt_count',
        'rw_count',
        'area_size',

        // Social Media
        'facebook',
        'instagram',
        'youtube',
    ];

    /**
     * Appended attributes.
     *
     * @var list<string>
     */
    protected $appends = [
        'logo_url',
        'hero_image_url',
    ];

    /**
     * Get logo URL.
     */
    protected function logoUrl(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->logo
                ? asset('storage/' . $this->logo)
                : null,
        );
    }

    /**
     * Get hero image URL.
     */
    protected function heroImageUrl(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->hero_image
                ? asset('storage/' . $this->hero_image)
                : null,
        );
    }
}