<?php

namespace Database\Seeders;

use App\Models\ColorDetails;
use Illuminate\Database\Seeder;
//php artisan db:seed --class=ColorDetailsTableSeeder

class ColorDetailsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $details = [
            [
                'product_color_id' => '1',
                'imgURL' => 'http://127.0.0.1:8000/img/mac/macbook_air_m1_8gb_256gb_didongviet.webp'
            ],
            [
                'product_color_id' => '4',
                'imgURL' => 'http://127.0.0.1:8000/img/mac/macbook_air_m2_8gb_256gb_didongviet.webp'
            ],
            [
                'product_color_id' => '8',
                'imgURL' => 'http://127.0.0.1:8000/img/mac/macbook_air_m2_2023_512gb_sac_70w_didongviet.webp'
            ],
            [
                'product_color_id' => '10',
                'imgURL' => 'http://127.0.0.1:8000/img/mac/macbook_pro_14_inch_m2_max_2023_1tb_didongviet_2x.webp'
            ],
            [
                'product_color_id' => '13',
                'imgURL' => 'http://127.0.0.1:8000/img/mac/macbook_pro_m2_didongviet.webp'
            ],
            [
                'product_color_id' => '26',
                'imgURL' => 'http://127.0.0.1:8000/img/iphone/iphone_11_64gb_chinh_hang_3.webp'
            ],
            [
                'product_color_id' => '28',
                'imgURL' => 'http://127.0.0.1:8000/img/iphone/iphone_11_128gb_chinhhang_didongviet.webp'
            ],
            [
                'product_color_id' => '34',
                'imgURL' => 'http://127.0.0.1:8000/img/iphone/iphone_12_64gb_mau_tim_didongviet.webp'
            ],
            [
                'product_color_id' => '40',
                'imgURL' => 'http://127.0.0.1:8000/img/iphone/iphone_12_128gb_didongviet.webp'
            ],
            [
                'product_color_id' => '91',
                'imgURL' => 'http://127.0.0.1:8000/img/ipad/ipad_10_9inch_2022_64gb_wifi_didongviet.webp'
            ],
            [
                'product_color_id' => '95',
                'imgURL' => 'http://127.0.0.1:8000/img/ipad/ipad_10_9inch_2022_256gb_5G.webp'
            ],
            [
                'product_color_id' => '99',
                'imgURL' => 'http://127.0.0.1:8000/img/ipad/ipad_10_9inch_2022_256gb_wifi_didongviet.webp'
            ]
            ,
            [
                'product_color_id' => '103',
                'imgURL' => 'http://127.0.0.1:8000/img/ipad/ipad_air_5_2022_M1_64gb_wifi_5G.webp'
            ]
            // Add more categories as needed
        ];

        foreach ($details as $detail) {
            ColorDetails::create($detail);
        }
    }
}
