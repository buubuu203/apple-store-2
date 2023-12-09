<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

// php artisan db:seed
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->truncate();
        DB::table('color_details')->truncate();
        DB::table('feedback')->truncate();
        DB::table('orders')->truncate();
        DB::table('products')->truncate();
        DB::table('product_colors')->truncate();
        DB::table('roles')->truncate();
        DB::table('users')->truncate();

        $this->call([
            CategoriesTableSeeder::class,
            ColorDetailsTableSeeder::class,
            FeedbackTableSeeder::class,
            OrderDetailsTableSeeder::class,
            OrdersTableSeeder::class,
            ProductColorsTableSeeder::class,
            ProductsTableSeeder::class,
            RolesTableSeeder::class,
            UsersTableSeeder::class,
        ]);
    }
}
