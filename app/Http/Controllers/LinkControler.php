<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LinkControler extends Controller
{
    public function index() {
        return view('index');
    }

    public function vinvart() {
        return view('vinvart');
    }

    public function gegma() {
        return view('gegma');
    }

    public function gazeti() {
        return view('gazeti');
    }

    public function aqtivoba() {
        return view('aqtivoba');
    }
}
