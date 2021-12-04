<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;

class Nivel extends Model
{
    use SoftDeletes;

    protected $table = 'niveis';

    protected $timestamps = true;

    protected $fillable = [
        'nivel'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];
}
