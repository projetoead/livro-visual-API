<?php
// app/GraphQL/Type/ImagemType.php
namespace App\GraphQL\Type;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;
use App\Models\Imagem;

class ImagemType extends GraphQLType
{
    protected $attributes = [
        'name'        => 'Imagem',
        'description' => 'Uma imagem',
        'model'       => Imagem::class
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id da imagem'
            ],
            'is_principal' => [
                'type' => Type::boolean(),
                'description' => 'Boolean para verificar se a imagem é principal'
            ],
            'baixa_resolucao' => [
                'type' => Type::string(),
                'description' => 'A imagem em baixa resolução'
            ],
            'alta_resolucao' => [
                'type' => Type::string(),
                'description' => 'A imagem em alta resolução'
            ],
            'link' => [
                'type' => Type::string(),
                'description' => 'O link da imagem'
            ],
            'descricao_imagem' => [
                'type' => Type::string(),
                'description' => 'Uma descrição da imagem'
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
