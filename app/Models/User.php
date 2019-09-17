<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'nivel_acesso',
        'id_imagem',
        'status'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function imagem()
    {
        return $this->belongsTo(Imagem::class, 'id_imagem');
    }

    public function atividades(){
        return $this->hasMany(Atividade::class, 'id_usuario', 'id');
    }
    
    public function respostas(){
        return $this->hasMany(Resposta::class, 'id_usuario', 'id');
    }

    public function avaliacoes(){
        return $this->hasMany(Avaliacao::class, 'id_usuario', 'id');
    }
}
