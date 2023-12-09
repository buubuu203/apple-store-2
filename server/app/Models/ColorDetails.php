<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ColorDetails extends Model
{
    use HasFactory;

    protected $table = 'color_details';
    protected $primaryKey = 'id';
    protected $fillable = ['product_color_id', 'imgURL'];

    public function product_color()
    {
        return $this->belongsTo(ProductColors::class, 'product_color_id');
    }
}
