<?php

use App\Http\Controllers\DesenvolvedorController;
use App\Http\Controllers\NivelController;
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

Route::get('', fn () => response()->json([
    'name' => config('app.name'),
]));

Route::apiResources([
    'desenvolvedor' => DesenvolvedorController::class,
    'nivel' => NivelController::class
]);