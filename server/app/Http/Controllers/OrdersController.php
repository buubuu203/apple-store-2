<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\User;

class OrdersController extends Controller
{
    // ...

    /**
     * Store multiple orders in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createOrders(Request $request)
    {
        // Validate the request data for each order
        $request->validate([
            '*.user_id' => 'required|exists:users,id',
            '*.note' => 'nullable|string',
            '*.status' => 'required|numeric',
            '*.total_money' => 'required|numeric',
            '*.selected' => 'required|numeric',
            '*.product_id' => 'required|exists:products,id',
        ]);

        $createdOrders = [];

        // Process each order in the array
        foreach ($request->json() as $orderData) {
            $order = Order::create([
                'user_id' => $orderData['user_id'],
                'note' => $orderData['note'],
                'order_date' => $orderData['order_date'],
                'status' => $orderData['status'],
                'total_money' => $orderData['total_money'],
                'selected' => $orderData['selected'],
                'product_id' => $orderData['product_id'],
            ]);

            // Optionally, you can attach the order to the user
            $user = User::find($orderData['user_id']);
            $user->orders()->save($order);

            $createdOrders[] = $order;
        }

        // Return a response or redirect as needed
        return response()->json(['message' => 'Orders created successfully', 'orders' => $createdOrders], 201);
    }

    // ...
}
