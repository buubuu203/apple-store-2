<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';
    protected $primaryKey = 'id';
    protected $fillable = ['category_id', 'title', 'price', 'historyCost', 'decription', 'cpu', 'ram', 'resolution', 'display', 'batterylife', 'weight', 'size', 'capacities', 'thumbnail', 'deleted'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function product_colors()
    {
        return $this->hasMany(ProductColors::class);
    }
}
