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
        Schema::table('users', function (Blueprint $table) {
            if (Schema::hasColumn('users', 'username')) {
                $table->dropColumn('username');
            }
            if (!Schema::hasColumns('user', ['first_name', 'last_name'])) {
                $table->string('first_name');
                $table->string('last_name');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            if (!Schema::hasColumn('users', 'username')) {
                $table->string('username');
            }
            if (Schema::hasColumns('user', ['first_name', 'last_name'])) {
                $table->dropColumn('first_name');
                $table->dropColumn('last_name');
            }
        });
    }
};
