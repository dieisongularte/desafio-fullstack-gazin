<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;

class Desenvolvedor extends Model
{
    use SoftDeletes;

    protected $table = 'desenvolvedores';

    public $timestamps = true;

    protected $fillable = [
        'nivel_id',
        'nome',
        'sexo',
        'datanascimento',
        'idade',
        'hobby'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    protected $dates = [
        'datanascimento'
    ];
}
