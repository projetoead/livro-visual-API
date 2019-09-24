<?php
// app/GraphQL/Type/AtividadeType.php
namespace App\GraphQL\Type;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;
use App\Models\Atividade;

class AtividadeType extends GraphQLType
{
    protected $attributes = [
        'name'        => 'Atividade',
        'description' => 'Uma atividade',
        'model'       => Atividade::class
    ];

    public function fields():array{
        return [ 
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id da imagem'
            ],
            'id_usuario' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id do usuário que cadastrou'
            ],
            'id_professor' => [
                'type' => Type::int(),
                'description' => 'O id do professor responsável'
            ],
            'titulo' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'O titulo da atividade'
            ],
            'texto' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'O texto da atividade'
            ],
            'autor' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'O autor do texto da atividade'
            ],
            'descricao' => [
                'type' =>Type::string(),
                'description' => 'Descrição da atividade'
            ],
            'data_encerramento' => [
                'type' =>Type::string(),
                'description' => 'A data limite da atividade'
            ],
            'status' => [
                'type' =>Type::int(),
                'description' => 'O status da atividade'
            ],
            'respostas' => [
                'type' => Type::listOf(GraphQL::type('Resposta')),
                'description' => 'As respostas da Atividade'
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