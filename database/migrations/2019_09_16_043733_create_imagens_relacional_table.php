<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateImagensRelacionalTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resposta_imagens', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('id_imagem');
            $table->foreign('id_imagem')->references('id')->on('imagens');
            $table->unsignedBigInteger('id_resposta');
            $table->foreign('id_resposta')->references('id')->on('respostas');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('resposta_imagens', function (Blueprint $table) {
            //
        });
    }
}
