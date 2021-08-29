<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Person extends Model {

    protected $table = 'person'; 
    public $timestamps = false;

    protected $fillable = [
        'name', 
        'email', 
        'phone_number',
        'created_date'
    ];

    public function categories() {
        return $this->belongsToMany(Category::class);
    }   
}