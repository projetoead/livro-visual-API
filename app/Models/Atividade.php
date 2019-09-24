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
        'autor',
        'texto',
        'descricao',
        'data_encerramento',
        'status',
    ];
    
    public function usuario(){
        return $this->belongsTo(User::class, 'id_usuario', 'id');
    }

    public function professor(){
        return $this->hasOne(User::class, 'id_professor', 'id');
    }

    public function respostas(){
        return $this->hasMany(Resposta::class, 'id_atividade', 'id');
    }
    //
}
