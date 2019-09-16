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

        public function args(): array
        {
            return [
                'texto' => ['name' => 'texto', 'type' => Type::string()]
            ];
        }
    
        public function type(): Type{
            return Type::listOf(GraphQL::type('Atividade'));
        }

        public function resolve($root, $args, $context, ResolveInfo $info){
            // $select = $fields->getSelect();
            // $with = $fields->getRelations();

            // if (isset($args['texto'])) {
            //     $atividade = Atividade::query()
            //         ->where('titulo', 'LIKE', '%' . $args['texto'] . '%');
    
            //     return $atividade->with($with)->get();
            // }

            $atividades = Atividade::query();

            return $atividades->get();
        }
    }