<?php
// app/GraphQL/Type/AtividadeImagensType.php
namespace App\GraphQL\Type;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;
use App\Models\AtividadeImagens;

class AtividadeImagensType extends GraphQLType
{
    protected $attributes = [
        'name'        => 'AtividadeImagens',
        'description' => 'Imagens da Atividade',
        'model'       => AtividadeImagens::class
    ];

    public function fields():array{
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id da relação'
            ],
            'id_atividade' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id da atividade da relação'
            ],
            'atividade' => [
                'type' => GraphQL::type('Atividade'),
                'description' => 'A atividade da relação'
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