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
            // [
            //     'fullname' => 'Châu Ngọc Bửu Đăng',
            //     'email' => 'chaungocbuudang2003@gmail.com',
            //     'phone_number' => '0917192680',
            //     'address' => 'UIT',
            //     'password' => 'chaungocbuudang',
            //     'role_id' => 1, // Assuming role_id 1 corresponds to a specific role
            //     'deleted' => 0, // Assuming 0 for not deleted
            // ],
            // [
            //     'fullname' => 'Nguyễn Phước Thiện',
            //     'email' => '21521462@gm.uit.edu.vn',
            //     'phone_number' => '9876543210',
            //     'address' => 'UIT, HCMC',
            //     'password' => 'thienenpi',
            //     'role_id' => 2, // Assuming role_id 2 corresponds to another role
            //     'deleted' => 0, // Assuming 0 for not deleted
            // ],
            [
                'fullname' => 'Huỳnh Phước Lân',
                'email' => '21521064@gm.uit.edu.vn',
                'phone_number' => '9776543210',
                'address' => 'UIT, HCMC',
                'password' => 'huynhphuoclan',
                'role_id' => 2, // Assuming role_id 2 corresponds to another role
                'deleted' => 0, // Assuming 0 for not deleted
            ],
        ];

        // Loop through the user data and insert them into the 'users' table
        foreach ($users as $user) {
            User::create($user);
        }
    }
}
