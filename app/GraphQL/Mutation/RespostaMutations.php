<?php
// app/GraphQL/Mutation/RespostaMutations.php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Mutation;
use App\Models\Resposta;
use GraphQL;

class NovaResposta extends Mutation
{
    protected $attributes = [
        'name' => 'novaResposta'
    ];

    public function type(): Type
    {
        return GraphQL::type('Resposta');
    }

    public function fields(): array
    {
        return [
            'id_usuario' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id do usuário que cadastrou',
                'rules' => ['required']
            ],
            'id_atividade' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id da atividade',
                'rules' => ['required']
            ],
            'sintese' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'O texto da atividade',
                'rules' => ['required']
            ],
            'frases' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'O texto da atividade',
                'rules' => ['required']
            ],
            'data' => [
                'type' => Type::string(),
                'description' => 'A data limite da atividade'
            ],
            'status' => [
                'type' => Type::int(),
                'description' => 'O status da atividade'
            ],
        ];
    }
    public function resolve($root, $args, $context, ResolveInfo $resolveInfo)
    {
        $resposta = new Resposta();
        $resposta->fill($args);
        $resposta->save();
        if ($resposta)
            return $resposta;
        else
            response()->json(['message' => 'Error'], 500);
    }
}
