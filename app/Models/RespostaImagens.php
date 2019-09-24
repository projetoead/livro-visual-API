<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RespostaImagens extends Model
{
    protected $table = 'resposta_imagens';
    
    protected $fillable = [
        'id_resposta',
        'id_imagem'
    ];

    public function usuario()
    {
        return $this->belongsTo(User::class, 'id_usuario');
    }
    
    public function imagem()
    {
        return $this->belongsTo(Imagem::class, 'id_imagem');
    }

    public function resposta()
    {
        return $this->belongsTo(Resposta::class, 'id_resposta');
    }

    public function respostaImagens()
    {
        return $this->hasMany(RespostaImagens::class, 'id_resposta', 'id');
    }
}
