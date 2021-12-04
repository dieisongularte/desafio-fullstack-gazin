<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NiveisTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('niveis')->delete();

        $currentDateTime = Carbon::now();

        DB::table('niveis')->insert([
            [
                'nivel' => 'Júnior',
                'created_at' => $currentDateTime,
                'updated_at' => $currentDateTime
            ],
            [
                'nivel' => 'Pleno',
                'created_at' => $currentDateTime,
                'updated_at' => $currentDateTime
            ],
            [
                'nivel' => 'Sênior',
                'created_at' => $currentDateTime,
                'updated_at' => $currentDateTime
            ]
        ]);
    }
}
