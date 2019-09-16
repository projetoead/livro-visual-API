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
            $fields = $info->getFieldSelection();

            $atividades = Atividade::query();

            return $atividades->get();
        }
    }

    class RetornarAtividadeQuery extends Query {
        protected $atributes = [
            'name' => 'retornarAtividade'
        ];

        public function args(): array
        {
            return [
                'id_atividade' => ['name' => 'id_atividade', 'type' => Type::nonNull(Type::int())],
            ];
        }
    
        public function type(): Type{
            return GraphQL::type('Atividade');
        }

        public function resolve($root, $args, $context, ResolveInfo $info){
            $fields = $info->getFieldSelection();

            $atividade = Atividade::query()
                ->where('id', $args['id_atividade']);

            return $atividade->get()[0];
        }
    }