<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AtividadeImagens extends Model
{
    protected $table = 'atividade_imagens';
    
    protected $fillable = [
        'id_atividade',
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

    public function atividade()
    {
        return $this->belongsTo(Atividade::class, 'id_atividade');
    }

    public function atividadeImagens()
    {
        return $this->hasMany(AtividadeImagens::class, 'id_atividade', 'id');
    }
}
