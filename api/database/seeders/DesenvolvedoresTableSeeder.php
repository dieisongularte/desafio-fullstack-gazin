<?php

namespace Database\Seeders;

use App\Models\Desenvolvedor;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DesenvolvedoresTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('desenvolvedores')->delete();

        Desenvolvedor::factory()->count(5)->create();
    }
}
