<?php
//php artisan db:seed --class=CategoriesTableSeeder
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategoriesTableSeeder extends Seeder
{
    public function run()
    {
        // Define the categories you want to seed
        $categories = [
            ['name' => 'Macbook'],
            ['name' => 'iPad'],
            ['name' => 'iPhone'],
            ['name' => 'Watch'],
            ['name' => 'AirPods'],
            // Add more categories as needed
        ];

        // Loop through the categories and insert them into the 'categories' table
        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
