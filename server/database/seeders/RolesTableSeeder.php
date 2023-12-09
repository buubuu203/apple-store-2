<?php
//php artisan db:seed --class=RolesTableSeeder
namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            ['name' => 'Administrator',],
            ['name' => 'User'],
            // Add more categories as needed
        ];

        // Loop through the categories and insert them into the 'categories' table
        foreach ($roles as $role) {
            Role::create($role);
        }
    }
}
