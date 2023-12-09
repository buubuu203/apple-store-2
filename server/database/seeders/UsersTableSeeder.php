<?php
//php artisan db:seed --class=UsersTableSeeder
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        // Define the user data you want to seed
        $users = [
            [
                'fullname' => 'John Doe',
                'email' => 'johndoe@example.com',
                'phone_number' => '1234567890',
                'address' => '123 Main St',
                'password' => Hash::make('password123'),
                'role_id' => 1, // Assuming role_id 1 corresponds to a specific role
                'deleted' => 0, // Assuming 0 for not deleted
            ],
            [
                'fullname' => 'Jane Smith',
                'email' => 'janesmith@example.com',
                'phone_number' => '9876543210',
                'address' => '456 Elm St',
                'password' => Hash::make('secret123'),
                'role_id' => 2, // Assuming role_id 2 corresponds to another role
                'deleted' => 0, // Assuming 0 for not deleted
            ],
            // Add more users as needed
        ];

        // Loop through the user data and insert them into the 'users' table
        foreach ($users as $user) {
            User::create($user);
        }
    }
}
