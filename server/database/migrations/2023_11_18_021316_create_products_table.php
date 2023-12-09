<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /** 
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->integer('category_id');
            $table->string('title');
            $table->integer('price');
            $table->integer('historyCost')->nullable();
            $table->longText('description')->nullable();
            $table->string('cpu')->nullable();
            $table->integer('ram')->nullable();
            $table->string('resolution')->nullable();
            $table->string('display')->nullable();
            $table->string('batterylife')->nullable();
            $table->string('weight')->nullable();
            $table->string('size')->nullable();
            $table->string('capacities')->nullable();
            $table->string('thumbnail')->nullable();
            $table->timestamps();
            $table->integer('deleted');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
