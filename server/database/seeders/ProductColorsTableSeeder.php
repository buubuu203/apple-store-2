<?php

namespace Database\Seeders;

use App\Models\ProductColors;
use Illuminate\Database\Seeder;
//php artisan db:seed --class=ProductColorsTableSeeder

class ProductColorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $colors = [
            //Iphone
            //product_id=1
            [
                'product_id' => 1,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 1,
                'name' => 'Vàng',
                'hex_code' => '#B6BBC4',
                'quantity' => 25,
            ],
            [
                'product_id' => 1,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 20,
            ],
            //product_id=2
            [
                'product_id' => 2,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 2,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 15,
            ],
            [
                'product_id' => 2,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 2,
                'name' => 'Đen',
                'hex_code' => '#B6BBC4',
                'quantity' => 26,
            ],
            //product_id=3
            [
                'product_id' => 3,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 15,
            ],
            [
                'product_id' => 3,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 17,
            ],
            //product_id=4
            [
                'product_id' => 4,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 35,
            ],
            [
                'product_id' => 4,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 40,
            ],
            //product_id = 5
            [
                'product_id' => 5,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 27,
            ],
            [
                'product_id' => 5,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 10,
            ],
            //product_id = 6
            [
                'product_id' => 6,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 38,
            ],
            [
                'product_id' => 6,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            //product_id = 7
            [
                'product_id' => 7,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 20,
            ],
            [
                'product_id' => 7,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 7,
                'name' => 'Vàng',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 7,
                'name' => 'Xanh đen',
                'hex_code' => '#B6BBC4',
                'quantity' => 29,
            ],
            //product_id = 8
            [
                'product_id' => 8,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 19,
            ],
            [
                'product_id' => 8,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            //product_id = 9
            [
                'product_id' => 9,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 19,
            ],
            [
                'product_id' => 9,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            //product_id = 10
            [
                'product_id' => 10,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 18,
            ],
            [
                'product_id' => 10,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            //product_id = 11
            [
                'product_id' => 11,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 11,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            //Iphone
            //product_id = 12 //1
            [
                'product_id' => 12,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 40,
            ],
            [
                'product_id' => 12,
                'name' => 'Đen',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 12,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 20,
            ],
            [
                'product_id' => 12,
                'name' => 'Vàng',
                'hex_code' => '#B6BBC4',
                'quantity' => 57,
            ],
            [
                'product_id' => 12,
                'name' => 'Đỏ',
                'hex_code' => '#B6BBC4',
                'quantity' => 39,
            ],
            [
                'product_id' => 12,
                'name' => 'Xanh',
                'hex_code' => '#B6BBC4',
                'quantity' => 40,
            ],
            //product_id = 13 //2
            [
                'product_id' => 13,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 35,
            ],
            [
                'product_id' => 13,
                'name' => 'Đen',
                'hex_code' => '#B6BBC4',
                'quantity' => 40,
            ],
            [
                'product_id' => 13,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 13,
                'name' => 'Vàng',
                'hex_code' => '#B6BBC4',
                'quantity' => 20,
            ],
            [
                'product_id' => 13,
                'name' => 'Đỏ',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 13,
                'name' => 'Xanh',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            //product_id = 14 //3
            [
                'product_id' => 14,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 36,
            ],
            [
                'product_id' => 14,
                'name' => 'Đen',
                'hex_code' => '#B6BBC4',
                'quantity' => 32,
            ],
            [
                'product_id' => 14,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 14,
                'name' => 'Vàng',
                'hex_code' => '#B6BBC4',
                'quantity' => 49,
            ],
            [
                'product_id' => 14,
                'name' => 'Đỏ',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 14,
                'name' => 'Xanh',
                'hex_code' => '#B6BBC4',
                'quantity' => 31,
            ],
            //product_id = 15 //4
            [
                'product_id' => 15,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 15,
                'name' => 'Đen',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 15,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 49,
            ],
            [
                'product_id' => 15,
                'name' => 'Vàng',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 15,
                'name' => 'Đỏ',
                'hex_code' => '#B6BBC4',
                'quantity' => 24,
            ],
            [
                'product_id' => 15,
                'name' => 'Xanh',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            //product_id = 16 //5
            [
                'product_id' => 16,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 16,
                'name' => 'Đen',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 16,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 36,
            ],
            [
                'product_id' => 16,
                'name' => 'Vàng',
                'hex_code' => '#B6BBC4',
                'quantity' => 29,
            ],
            [
                'product_id' => 16,
                'name' => 'Đỏ',
                'hex_code' => '#B6BBC4',
                'quantity' => 38,
            ],
            [
                'product_id' => 16,
                'name' => 'Xanh',
                'hex_code' => '#B6BBC4',
                'quantity' => 25,
            ],
            //product_id = 17 //6
            [
                'product_id' => 17,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 17,
                'name' => 'Vàng',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 17,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 20,
            ],
            [
                'product_id' => 17,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 20,
            ],
            //product_id = 18 //7
            [
                'product_id' => 18,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 26,
            ],
            [
                'product_id' => 18,
                'name' => 'Vàng',
                'hex_code' => '#B6BBC4',
                'quantity' => 29,
            ],
            [
                'product_id' => 18,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 40,
            ],
            [
                'product_id' => 18,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            //product_id = 19 //8
            [
                'product_id' => 19,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 28,
            ],
            [
                'product_id' => 19,
                'name' => 'Vàng',
                'hex_code' => '#B6BBC4',
                'quantity' => 20,
            ],
            [
                'product_id' => 19,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 20,
            ],
            [
                'product_id' => 19,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 24,
            ],
            //product_id = 20 //9
            [
                'product_id' => 20,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 20,
            ],
            [
                'product_id' => 20,
                'name' => 'Vàng',
                'hex_code' => '#B6BBC4',
                'quantity' => 28,
            ],
            [
                'product_id' => 20,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 42,
            ],
            [
                'product_id' => 20,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 31,
            ],
            //product_id = 21 //10
            [
                'product_id' => 21,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 31,

            ],
            [
                'product_id' => 21,
                'name' => 'Vàng',
                'hex_code' => '#B6BBC4',
                'quantity' => 33,
            ],
            [
                'product_id' => 21,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 32,
            ],
            [
                'product_id' => 21,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 33,
            ],
            //product_id = 22 //11
            [
                'product_id' => 22,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 33,
            ],
            [
                'product_id' => 22,
                'name' => 'Vàng',
                'hex_code' => '#B6BBC4',
                'quantity' => 32,
            ],
            [
                'product_id' => 22,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 31,
            ],
            [
                'product_id' => 22,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 32,
            ],
            //product_id = 23 //12
            [
                'product_id' => 23,
                'name' => 'Titan Xanh',
                'hex_code' => '#B6BBC4',
                'quantity' => 32,
            ],
            [
                'product_id' => 23,
                'name' => 'Titan Đen',
                'hex_code' => '#B6BBC4',
                'quantity' => 27,
            ],
            [
                'product_id' => 23,
                'name' => 'Titan Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 32,
            ],
            [
                'product_id' => 23,
                'name' => 'Titan tự nhiên',
                'hex_code' => '#B6BBC4',
                'quantity' => 38,
            ],
            //product_id = 24 //13
            [
                'product_id' => 24,
                'name' => 'Xanh dương',
                'hex_code' => '#B6BBC4',
                'quantity' => 32,
            ],
            [
                'product_id' => 24,
                'name' => 'Vàng',
                'hex_code' => '#B6BBC4',
                'quantity' => 27,
            ],
            [
                'product_id' => 24,
                'name' => 'Đen',
                'hex_code' => '#B6BBC4',
                'quantity' => 38,
            ],
            [
                'product_id' => 24,
                'name' => 'Xanh lá',
                'hex_code' => '#B6BBC4',
                'quantity' => 39,
            ],
            [
                'product_id' => 24,
                'name' => 'Hồng',
                'hex_code' => '#B6BBC4',
                'quantity' => 35,
            ],
            //Ipad
            //product_id = 25 //1
            [
                'product_id' => 25,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 25,
            ],
            [
                'product_id' => 25,
                'name' => 'Xanh',
                'hex_code' => '#B6BBC4',
                'quantity' => 25,
            ],
            [
                'product_id' => 25,
                'name' => 'Hồng',
                'hex_code' => '#B6BBC4',
                'quantity' => 38,
            ],
            [
                'product_id' => 25,
                'name' => 'Vàng',
                'hex_code' => '#B6BBC4',
                'quantity' => 38,
            ],
            //product_id = 26 //2
            [
                'product_id' => 26,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 23,
            ],
            [
                'product_id' => 26,
                'name' => 'Xanh',
                'hex_code' => '#B6BBC4',
                'quantity' => 38,
            ],
            [
                'product_id' => 26,
                'name' => 'Hồng',
                'hex_code' => '#B6BBC4',
                'quantity' => 39,
            ],
            [
                'product_id' => 26,
                'name' => 'Vàng',
                'hex_code' => '#B6BBC4',
                'quantity' => 25,
            ],
            //product_id = 27 //3
            [
                'product_id' => 27,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 38,
            ],
            [
                'product_id' => 27,
                'name' => 'Xanh',
                'hex_code' => '#B6BBC4',
                'quantity' => 48,
            ],
            [
                'product_id' => 27,
                'name' => 'Hồng',
                'hex_code' => '#B6BBC4',
                'quantity' => 28,
            ],
            [
                'product_id' => 27,
                'name' => 'Vàng',
                'hex_code' => '#B6BBC4',
                'quantity' => 25,
            ],
            //product_id = 28 //4
            [
                'product_id' => 28,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 38,
            ],
            [
                'product_id' => 28,
                'name' => 'Xanh',
                'hex_code' => '#B6BBC4',
                'quantity' => 31,
            ],
            [
                'product_id' => 28,
                'name' => 'Hồng',
                'hex_code' => '#B6BBC4',
                'quantity' => 38,
            ],
            [
                'product_id' => 28,
                'name' => 'Vàng',
                'hex_code' => '#B6BBC4',
                'quantity' => 29,
            ],
            //product_id = 29 //5
            [
                'product_id' => 29,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 40,
            ],
            [
                'product_id' => 29,
                'name' => 'Xanh',
                'hex_code' => '#B6BBC4',
                'quantity' => 38,
            ],
            [
                'product_id' => 29,
                'name' => 'Hồng',
                'hex_code' => '#B6BBC4',
                'quantity' => 35,
            ],
            [
                'product_id' => 29,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 38,
            ],
            [
                'product_id' => 29,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 38,
            ],
            //product_id = 30 //6
            [
                'product_id' => 30,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 30,
                'name' => 'Xanh',
                'hex_code' => '#B6BBC4',
                'quantity' => 38,
            ],
            [
                'product_id' => 30,
                'name' => 'Hồng',
                'hex_code' => '#B6BBC4',
                'quantity' => 27,
            ],
            [
                'product_id' => 30,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 34,
            ],
            [
                'product_id' => 30,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 38,
            ],
            //product_id = 31 //7
            [
                'product_id' => 31,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 31,
            ],
            [
                'product_id' => 31,
                'name' => 'Xanh',
                'hex_code' => '#B6BBC4',
                'quantity' => 38,
            ],
            [
                'product_id' => 31,
                'name' => 'Hồng',
                'hex_code' => '#B6BBC4',
                'quantity' => 38,
            ],
            [
                'product_id' => 31,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 28,
            ],
            [
                'product_id' => 31,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 31,
            ],
            //product_id = 32 //8
            [
                'product_id' => 32,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 32,
            ],
            [
                'product_id' => 32,
                'name' => 'Xanh',
                'hex_code' => '#B6BBC4',
                'quantity' => 38,
            ],
            [
                'product_id' => 32,
                'name' => 'Hồng',
                'hex_code' => '#B6BBC4',
                'quantity' => 34,
            ],
            [
                'product_id' => 32,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 33,
            ],
            [
                'product_id' => 32,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 33,
            ],
            //product_id = 33 //9
            [
                'product_id' => 33,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 34,
            ],
            [
                'product_id' => 33,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 33,
            ],
            //product_id = 34 //10
            [
                'product_id' => 34,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 33,
            ],
            [
                'product_id' => 34,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 35,
            ],
            //product_id = 35 //11
            [
                'product_id' => 35,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 33,
            ],
            [
                'product_id' => 35,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 25,
            ],
            //product_id = 36 //12
            [
                'product_id' => 36,
                'name' => 'Xám',
                'hex_code' => '#B6BBC4',
                'quantity' => 14,
            ],
            [
                'product_id' => 36,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 33,
            ],
            //product_id = 37 //13
            [
                'product_id' => 37,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 15,
            ],
            //product_id = 38 //14
            [
                'product_id' => 38,
                'name' => 'Hồng',
                'hex_code' => '#B6BBC4',
                'quantity' => 15,
            ],
            [
                'product_id' => 38,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 13,
            ],
            [
                'product_id' => 38,
                'name' => 'Xám đen',
                'hex_code' => '#B6BBC4',
                'quantity' => 43,
            ],
            [
                'product_id' => 38,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 20,
            ],
            //product_id = 39 //15
            [
                'product_id' => 39,
                'name' => 'Hồng',
                'hex_code' => '#B6BBC4',
                'quantity' => 24,
            ],
            [
                'product_id' => 39,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 20,
            ],
            [
                'product_id' => 39,
                'name' => 'Xám đen',
                'hex_code' => '#B6BBC4',
                'quantity' => 20,
            ],
            [
                'product_id' => 39,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 20,
            ],
            //product_id = 40 //16
            [
                'product_id' => 40,
                'name' => 'Hồng',
                'hex_code' => '#B6BBC4',
                'quantity' => 22,
            ],
            [
                'product_id' => 40,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 35,
            ],
            [
                'product_id' => 40,
                'name' => 'Xám đen',
                'hex_code' => '#B6BBC4',
                'quantity' => 20,
            ],
            [
                'product_id' => 40,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 20,
            ],
            //product_id = 41 //17
            [
                'product_id' => 41,
                'name' => 'Hồng',
                'hex_code' => '#B6BBC4',
                'quantity' => 20,
            ],
            [
                'product_id' => 41,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 49,
            ],
            [
                'product_id' => 41,
                'name' => 'Xám đen',
                'hex_code' => '#B6BBC4',
                'quantity' => 32,
            ],
            [
                'product_id' => 41,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            //product_id = 42 //18
            [
                'product_id' => 42,
                'name' => 'Hồng',
                'hex_code' => '#B6BBC4',
                'quantity' => 42,
            ],
            [
                'product_id' => 42,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 42,
                'name' => 'Xám đen',
                'hex_code' => '#B6BBC4',
                'quantity' => 48,
            ],
            [
                'product_id' => 42,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 42,
            ],
            //product_id = 43 //19
            [
                'product_id' => 43,
                'name' => 'Hồng',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 43,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 26,
            ],
            [
                'product_id' => 43,
                'name' => 'Xám đen',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 43,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 28,
            ],
            //product_id = 44 //20
            [
                'product_id' => 44,
                'name' => 'Hồng',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 44,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 60,
            ],
            [
                'product_id' => 44,
                'name' => 'Xám đen',
                'hex_code' => '#B6BBC4',
                'quantity' => 59,
            ],
            [
                'product_id' => 44,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 33,
            ],
            //product_id = 45 //21
            [
                'product_id' => 45,
                'name' => 'Hồng',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 45,
                'name' => 'Bạc',
                'hex_code' => '#B6BBC4',
                'quantity' => 49,
            ],
            [
                'product_id' => 45,
                'name' => 'Xám đen',
                'hex_code' => '#B6BBC4',
                'quantity' => 30,
            ],
            [
                'product_id' => 45,
                'name' => 'Tím',
                'hex_code' => '#B6BBC4',
                'quantity' => 29,
            ],
            //Airpod
            //product_id = 46 //1
            [
                'product_id' => 46,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 19
            ],
            //product_id = 47 //2
            [
                'product_id' => 47,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 23
            ],
            //product_id = 48 //3
            [
                'product_id' => 48,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 30
            ],
            //Watch
            //product_id = 49 //1
            [
                'product_id' => 49,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 25
            ],
            //product_id = 50 //2
            [
                'product_id' => 50,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 19
            ],
            //product_id = 51 //3
            [
                'product_id' => 51,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 29
            ],
            //product_id = 52 //4
            [
                'product_id' => 52,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 27
            ],
            //product_id = 53 //5
            [
                'product_id' => 53,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 19
            ],
            //product_id = 54 //6
            [
                'product_id' => 54,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 25
            ],
            //product_id = 55 //7
            [
                'product_id' => 55,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 19
            ],
            //product_id = 56 //8
            [
                'product_id' => 56,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 29
            ],
            //product_id = 57 //9
            [
                'product_id' => 57,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 27
            ],
            //product_id = 58 //10
            [
                'product_id' => 58,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 19
            ],
            //product_id = 59 //11
            [
                'product_id' => 59,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 25
            ],
            //product_id = 60 //12
            [
                'product_id' => 60,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 19
            ],
            //product_id = 61 //13
            [
                'product_id' => 61,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 29
            ],
            //product_id = 62 //14
            [
                'product_id' => 62,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 27
            ],
            //product_id = 63 //15
            [
                'product_id' => 63,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 19
            ],
            // //product_id = 64 //16
            // [
            //     'product_id' => 64,
            //     'name' => 'Trắng',
            // 'hex_code'=> '#B6BBC4',
            // 'quantity' => 25
            // ],
            //product_id = 65 //17
            [
                'product_id' => 65,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 19
            ],
            //product_id = 66 //18
            [
                'product_id' => 51,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 29
            ],
            //product_id = 67 //19
            [
                'product_id' => 52,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 27
            ],
            //product_id = 68 //20
            [
                'product_id' => 68,
                'name' => 'Trắng',
                'hex_code' => '#B6BBC4',
                'quantity' => 19
            ],

        ];
        foreach ($colors as $color) {
            ProductColors::create($color);
        }
    }
}
