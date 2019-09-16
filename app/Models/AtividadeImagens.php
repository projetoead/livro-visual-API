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

    public function imagem()
    {
        return $this->belongsTo(Imagem::class, 'id_imagem');
    }

    public function atividade()
    {
        return $this->belongsTo(Atividade::class, 'id_atividade');
    }
}
