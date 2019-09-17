<?php
// app/GraphQL/Type/AvaliacoesQueries.php
namespace App\GraphQL\Query;

use GraphQL;
use App\Models\Avaliacao;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\SelectFields;

class BuscarAvaliacoesQuery extends Query
{
    protected $atributes = [
        'name' => 'buscarAvaliacoes'
    ];

    public function type(): Type
    {
        return Type::listOf(GraphQL::type('Avaliacao'));
    }

    public function args(): array
    {
        return [
            'id_avaliacao' => ['name' => 'id_avaliacao', 'type' => Type::int()],
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $info)
    {
        $fields = $info->getFieldSelection();

        if (isset($args['id_avaliacao'])) {
            $avaliacao = Avaliacao::query()
                ->where('id', $args['id_avaliacao']);
            return $avaliacao->get();
        }

        $avaliacoes = Avaliacao::query();
        return $avaliacoes->get();
    }
}
