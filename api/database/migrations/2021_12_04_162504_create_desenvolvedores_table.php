<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDesenvolvedoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('desenvolvedores', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('nivel');
            $table->string('nome');
            $table->char('sexo', 1)->comment('M - masculino; F - Feminino; O - Outros');
            $table->date('datanascimento');
            $table->integer('idade');
            $table->string('hobby');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('desenvolvedores', function (Blueprint $table) {
            $table->dropIfExists();
        });
    }
}
