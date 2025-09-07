<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LinkControler;

Route::get('/', [LinkControler::class, 'index']);

Route::get('/vinvart', [LinkControler::class, 'vinvart']);

Route::get('/gegma', [LinkControler::class, 'gegma']);

Route::get('/gazeti', [LinkControler::class, 'gazeti']);

Route::get('/aqtivobebi', [LinkControler::class, 'aqtivoba']);
