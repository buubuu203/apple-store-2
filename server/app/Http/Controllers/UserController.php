<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
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

    function login(Request $req)
    {
        $req->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        $user = User::where('email', $req->input('email'))->first();

        if ($user) {
            if (Hash::check($req->input('password'), $user->password)) {
                // Exclude the 'password' field from the response
                $userData = $user->makeHidden('password');

                return response()->json(['message' => 'Đăng nhập thành công', 'user' => $userData], 200);
            } else {
                return response()->json(['message' => 'Mật khẩu không đúng'], 401);
            }
        } else {
            return response()->json(['message' => 'Email không đúng'], 401);
        }
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

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

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateUser(Request $request, $id)
    {
        $validatedData = $request->validate([
            'fullname' => 'required|string',
            'email' => 'required|email|unique:users,email,' . $id,
            'phone_number' => 'required|string|unique:users,phone_number,' . $id,
            'password' => 'nullable|string|min:6', // Password is optional for updates
        ]);

        // Find the user by ID
        $user = User::findOrFail($id);

        // Update the user with the validated data
        $user->fill($validatedData);

        // Hash the password if present
        if ($request->filled('password')) {
            $user->password = Hash::make($request->input('password'));
        }

        // Save the updated user
        $user->save();

        return response()->json(['message' => 'User updated successfully', 'data' => $user]);
    }
    public function getAllUsers()
    {
        try {
            // Retrieve all users
            $users = User::all();

            return response()->json(['message' => 'Users retrieved successfully', 'data' => $users]);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to retrieve users', 'error' => $e->getMessage()], 500);
        }
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
    public function deleteUser($id)
    {
        try {
            // Find the user by ID
            $user = User::findOrFail($id);

            // Delete the user
            $user->delete();

            return response()->json(['message' => 'User deleted successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to delete user', 'error' => $e->getMessage()], 500);
        }
    }
    public function createUser(Request $request)
    {
        $request->validate([
            'fullname' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'phone_number' => 'required|string|unique:users,phone_number',
            'password' => 'required|string|min:6',
        ]);

        // Hash the password before creating the user
        $hashedPassword = Hash::make($request->input('password'));

        // Create the user with the hashed password
        $user = User::create([
            'fullname' => $request->input('fullname'),
            'email' => $request->input('email'),
            'phone_number' => $request->input('phone_number'),
            'role_id' => $request->input('role_id'),
            'password' => $hashedPassword,
            'deleted' => 0,

            // Add other fields as needed
        ]);

        return response()->json(['message' => 'User created successfully', 'data' => $user]);
    }

    public function getUserById($id)
    {
        try {
            // Find the user by ID
            $user = User::findOrFail($id);

            return response()->json(['message' => 'User retrieved successfully', 'data' => $user]);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to retrieve user', 'error' => $e->getMessage()], 404);
        }
    }
}
