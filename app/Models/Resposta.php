<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Resposta extends Model
{
    protected $table = 'respostas';

    protected $fillable = [
        'id_usuario',
        'id_atividade',
        'sintese',
        'frases',
        'data',
        'status',
    ];

    public function usuario(){
        return $this->belongsTo(User::class, 'id_usuario', 'id');
    }

    public function atividade(){
        return $this->belongsTo(Atividade::class, 'id_atividade', 'id');
    }

    public function imagens()
    {
        return $this->hasMany(RespostaImagens::class, 'id_resposta', 'id');
    }

    public function avaliacao(){
        return $this->hasOne(Avaliacao::class, 'id_resposta', 'id');
    }
}
