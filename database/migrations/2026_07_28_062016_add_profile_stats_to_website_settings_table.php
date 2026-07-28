<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('website_settings', function (Blueprint $table) {
            $table->integer('population')->nullable()->after('maps_embed');
            $table->integer('family_cards')->nullable()->after('population');
            $table->integer('rt_count')->nullable()->after('family_cards');
            $table->integer('rw_count')->nullable()->after('rt_count');
            $table->string('area_size')->nullable()->after('rw_count');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('website_settings', function (Blueprint $table) {
            $table->dropColumn([
                'population',
                'family_cards',
                'rt_count',
                'rw_count',
                'area_size',
            ]);
        });
    }
};