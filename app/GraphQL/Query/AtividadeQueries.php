<?php
    // app/GraphQL/Type/AtividadesQueries.php
    namespace App\GraphQL\Query;

    use GraphQL;
    use App\Models\Atividade;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use GraphQL\Type\Definition\ResolveInfo;
    use Rebing\GraphQL\Support\SelectFields;

    class BuscarAtividadesQuery extends Query {
        protected $atributes = [
            'name' => 'buscarAtividades'
        ];

        public function type(): Type{
            return Type::listOf(GraphQL::type('Atividade'));
        }

        public function resolve($root, $args, SelectFields $fields, ResolveInfo $info){
            $select = $fields->getSelect();
            $with = $fields->getRelations();

            $atividades = Atividade::query();

            return $atividades->with($with)->get();
        }
    }