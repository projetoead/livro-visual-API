<?php
// app/GraphQL/Type/RespostaImagensType.php
namespace App\GraphQL\Type;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;
use App\Models\RespostaImagens;

class RespostaImagensType extends GraphQLType
{
    protected $attributes = [
        'name'        => 'RespostaImagens',
        'description' => 'Imagens da Atividade',
        'model'       => RespostaImagens::class
    ];

    public function fields():array{
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id da relação'
            ],
            'id_resposta' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id da resposta da relação'
            ],
            'resposta' => [
                'type' => GraphQL::type('Atividade'),
                'description' => 'A resposta da relação'
            ],
            'id_imagem' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id da imagem da relação'
            ],
            'imagem' => [
                'type' => GraphQL::type('Imagem'),
                'description' => 'A imagem da relação'
            ]
        ];
    }
    
    protected function resolveCreatedAtField($root, $args)
    {
        return (string) $root->created_at;
    }

    protected function resolveUpdatedAtField($root, $args)
    {
        return (string) $root->updated_at;
    }
}