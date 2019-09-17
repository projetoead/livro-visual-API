<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Avaliacao extends Model
{
    protected $table = 'avaliacoes';

    protected $fillable = [
        'id_usuario',
        'id_resposta',
        'comentario_sintese',
        'comentario_frases',
        'data',
        'status'
    ];

    public function usuario(){
        return $this->belongsTo(User::class, 'id_usuario', 'id');
    }

    public function resposta(){
        return $this->belongsTo(Resposta::class, 'id_resposta', 'id');
    }
}
