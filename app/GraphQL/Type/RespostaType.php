<?php
// app/GraphQL/Type/RespostaType.php
namespace App\GraphQL\Type;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;
use App\Models\Resposta;

class RespostaType extends GraphQLType
{
    protected $attributes = [
        'name'        => 'Resposta',
        'description' => 'Uma resposta de uma atividade',
        'model'       => Resposta::class
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id da imagem'
            ],
            'id_usuario' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id do usuário que cadastrou'
            ],
            'id_atividade' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id da atividade'
            ],
            'sintese' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'O texto da atividade'
            ],
            'frases' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'O texto da atividade'
            ],
            'data' => [
                'type' =>Type::string(),
                'description' => 'A data limite da atividade'
            ],
            'status' => [
                'type' =>Type::int(),
                'description' => 'O status da atividade'
            ],
            'atividade' => [
                'type' => GraphQL::type('Atividade'),
                'description' => 'A atividade da resposta'
            ],
            
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
