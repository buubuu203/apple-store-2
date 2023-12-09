<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $table = 'orders';
    protected $primaryKey = 'id';
    protected $fillable = ['user_id', 'note', 'order_date', 'status', 'total_money', 'selected', 'product_id']; // Add 'product_id' to the fillable array.

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
