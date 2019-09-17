<?php
// app/GraphQL/Type/AvaliacaoType.php
namespace App\GraphQL\Type;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;
use App\Models\Avaliacao;

class AvaliacaoType extends GraphQLType
{
    protected $attributes = [
        'name'        => 'Avaliacao',
        'description' => 'Uma Avaliacao de uma atividade',
        'model'       => Avaliacao::class
    ];

    public function fields(): array
    {
        return[
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id da imagem'
            ],
            'id_usuario' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id do usuário que cadastrou'
            ],
            'id_resposta' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id da resposta'
            ],
            'comentario_sintese' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'O comentário sobre a sintese'
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
            'created_at' => [
                'type' => Type::string(),
                'description' => 'Date a was created'
            ],
            'updated_at' => [
                'type' => Type::string(),
                'description' => 'Date a was updated'
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