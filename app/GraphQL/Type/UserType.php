<?php
// app/GraphQL/Type/UserType.php
namespace App\GraphQL\Type;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;
use App\Models\User;

class UserType extends GraphQLType
{
    protected $attributes = [
        'name'        => 'User',
        'description' => 'A user',
        'model'       => User::class
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of a user'
            ],
            'name' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The name of a user'
            ],
            'email' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The email address of a user'
            ],
            'password' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The password of a user'
            ],
            'status' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The status of a user'
            ],
            'nivel_acesso' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O nível de acesso do usuário'
            ],
            'imagem' => [
                'type' => GraphQL::type('Imagem'),
                'description' => 'A imagem do lançamento'
            ],
            'created_at' => [
                'type' => Type::string(),
                'description' => 'Date a was created'
            ],
            'updated_at' => [
                'type' => Type::string(),
                'description' => 'Date a was updated'
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
