<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Atividade extends Model
{
    protected $table = 'atividades';

    protected $fillable = [
        'id_usuario',
        'id_professor',
        'titulo',
        'texto',
        'descricao',
        'data_encerramento',
        'status',
    ];
    
    public function usuario(){
        return $this->hasMany(User::class, 'id_usuario', 'id');
    }

    public function professor(){
        return $this->hasMany(User::class, 'id_professor', 'id');
    }

    public function imagens()
    {
        return $this->hasMany(AtividadeImagens::class, 'id_atividade', 'id');
    }
    //
}
