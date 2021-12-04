<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToDesenvolvedoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('desenvolvedores', function (Blueprint $table) {
            $table->foreign('nivel', 'fk_desenvolvedores_niveis')
                ->references('id')
                ->on('niveis')
                ->onDelete('NO ACTION')
                ->onUpdate('NO ACTION');
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
            $table->dropForeign('fk_desenvolvedores_niveis');
        });
    }
}
