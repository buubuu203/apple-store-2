<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductColors extends Model
{
    use HasFactory;

    protected $table = 'product_colors';
    protected $primaryKey = 'id';
    protected $fillable = ['product_id', 'name', 'hex_code', 'quantity'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function colorDetails()
    {
        return $this->hasMany(ColorDetails::class, 'product_color_id');
    }
}
