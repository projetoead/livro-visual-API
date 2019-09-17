<?php
// app/GraphQL/Type/RespostasQueries.php
namespace App\GraphQL\Query;

use GraphQL;
use App\Models\Resposta;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\SelectFields;

class BuscarRespostasQuery extends Query
{
    protected $atributes = [
        'name' => 'buscarRespostas'
    ];

    public function type(): Type
    {
        return Type::listOf(GraphQL::type('Resposta'));
    }

    public function args(): array
    {
        return [
            'id_resposta' => ['name' => 'id_resposta', 'type' => Type::int()],
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $fields = $info->getFieldSelection();

        if ($args['id_resposta']) {
            $resposta = Resposta::query()
                ->where('id', $args['id_resposta']);
            return $resposta->get()[0];
        }

        $respostas = Resposta::query();
        return $respostas->get();
    }
}
