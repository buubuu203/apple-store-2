<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{id}/products', [ProductController::class, 'getProductsByCatID']);
Route::get('/products/{id}', [ProductController::class, 'getProductByID']);
Route::post('/users/register', [UserController::class, 'register']);
Route::post('/users/login', [UserController::class, 'login']);
// orders
Route::post('/order/create', [OrdersController::class, 'createOrders']);
//product
Route::put('/update/product/{id}', [ProductController::class, 'updateProduct']);
Route::delete('/delete/product/{id}', [ProductController::class, 'deleteProductById']);
Route::post('/create/product', [ProductController::class, 'createProduct']);
//category
Route::post('/create/category', [CategoryController::class, 'createCategory']);

//Users
Route::post('/create/users', [UserController::class, 'createUser']);
Route::get('/users', [UserController::class, 'getAllUsers']);
Route::get('/users/{id}', [UserController::class, 'getUserById']);
Route::put('/update/users/{id}', [UserController::class, 'updateUser']);
Route::delete('/delete/users/{id}', [UserController::class, 'deleteUser']);
Route::post('/login', [UserController::class, 'login']);
