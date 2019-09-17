<?php
// app/GraphQL/Mutation/AvaliacaoMutations.php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Mutation;
use App\Models\Avaliacao;
use GraphQL;

class NovaAvaliacao extends Mutation
{
    protected $attributes = [
        'name' => 'novaAvaliacao'
    ];

    public function type(): Type
    {
        return GraphQL::type('Avaliacao');
    }
    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id da imagem'
            ],
            'id_usuario' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id do usuário que cadastrou',
                'rules' => ['required']
            ],
            'id_resposta' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id da resposta',
                'rules' => ['required']
            ],
            'comentario_sintese' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'O comentário sobre a sintese',
                'rules' => ['required']
            ],
            'comentario_frases' => [
                'type' => Type::string(),
                'description' => 'O comentário sobre as frase'
            ],
            'data' => [
                'type' =>Type::string(),
                'description' => 'A data limite da atividade'
            ],
            'status' => [
                'type' =>Type::int(),
                'description' => 'O status da atividade'
            ],  
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo)
    {
        $avaliacao = new Avaliacao();
        $avaliacao->fill($args);
        $avaliacao->save();
        if ($avaliacao)
            return $avaliacao;
        else
            response()->json(['message' => 'Error'], 500);
    }
}