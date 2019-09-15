<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Imagem extends Model
{
    protected $table = 'imagens';
    
    protected $fillable = [
        "is_principal",
        "baixa_resolucao",
        "alta_resolucao",
        "link",
        "descricao_imagem"
    ];
    
    public function usuario(){
        return $this->hasMany(User::class, 'id_imagem', 'id');
    }
}
