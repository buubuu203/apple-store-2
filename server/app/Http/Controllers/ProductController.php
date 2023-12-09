<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductColors;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function getProductsByCatID($id)
    {

        try {

            $products = DB::table('products')->where('category_id', $id)->get();

            return response()->json($products);
        } catch (\Exception $e) {

            return $e->getMessage();
        }
    }

    public function getProductByID($id)
    {

        $products = Product::with('product_colors')->find($id);
        return response()->json($products);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'category_id' => 'required|exists:categories,id',
            'title' => 'required|string',
            'price' => 'required|numeric',
            'discount' => 'nullable|numeric',
            'colors' => 'required|array',
        ]);

        // Create the product
        $product = Product::create($request->except('colors'));

        // Add colors to the product with quantity
        foreach ($request->input('colors') as $color) {
            $product->product_colors()->create([
                'name' => $color['name'],
                'quantity' => $color['quantity'],
            ]);
        }

        return response()->json(['message' => 'Product created successfully'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }
    public function updateProduct(Request $request, $id)
    {
        // Validate incoming request data
        $validatedData = $request->validate([
            'category_id' => 'required',
            'title' => 'required',
            'price' => 'required',
            'historyCost' => 'nullable',
            'description' => 'nullable',
            'cpu' => 'nullable',
            'ram' => 'nullable',
            'resolution' => 'nullable',
            'display' => 'nullable',
            'batterylife' => 'nullable',
            'weight' => 'nullable',
            'size' => 'nullable',
            'capacities' => 'nullable',
            'thumbnail' => 'nullable',
            'deleted' => 'required',
        ]);

        // Find the product by ID
        $product = Product::findOrFail($id);

        // Update the product with the validated data
        $product->update($validatedData);

        $productColors = $request->input('product_colors', []); // Assuming product_colors is an array in the request

        // Loop through each product color and update or create as needed
        foreach ($productColors as $color) {
            $productColor = ProductColors::updateOrCreate(
                ['id' => $color['id']], // assuming each product color has an 'id' field
                [
                    'name' => $color['name'],
                    'hex_code' => $color['hex_code'],
                    'quantity' => $color['quantity'],
                ]
            );
        }

        // Return a JSON response with the status
        return response()->json(['status' => 'success', 'message' => 'Product updated successfully']);
    }
    public function deleteProductById($id)
    {
        try {
            $product = Product::findOrFail($id);
            $product->delete();

            return response()->json(['message' => 'Product deleted successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to delete product', 'error' => $e->getMessage()], 500);
        }
    }

    public function createProduct(Request $request)
    {
        try {
            // Validate incoming request data
            $validatedData = $request->validate([
                'category_id' => 'required',
                'historyCost' => 'nullable',
                'description' => 'nullable',
                'cpu' => 'nullable',
                'ram' => 'nullable',
                'resolution' => 'nullable',
                'display' => 'nullable',
                'batterylife' => 'nullable',
                'weight' => 'nullable',
                'size' => 'nullable',
                'capacities' => 'nullable',
                'title' => 'required',
                'price' => 'required',
                'thumbnail' => 'nullable',
                'deleted' => 'required',
                'product_colors.*.name' => 'required',
                'product_colors.*.hex_code' => 'required',
                'product_colors.*.quantity' => 'required|integer|min:0',
            ]);

            // Create the product
            $product = Product::create($validatedData);

            // Create associated product colors
            $productColors = $request->input('product_colors', []);

            foreach ($productColors as $colorData) {
                $productColor = new ProductColors($colorData);
                // Associate the product color with the product
                $product->product_colors()->save($productColor);
            }

            return response()->json(['message' => 'Product created successfully', 'data' => $product]);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to create product', 'error' => $e->getMessage()], 500);
        }
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
