<?php
    // app/GraphQL/Type/UsersQueries.php
    namespace App\GraphQL\Query;

    use GraphQL;
    use App\Models\User;
    use GraphQL\Type\Definition\Type;
    use Rebing\GraphQL\Support\Query;
    use GraphQL\Type\Definition\ResolveInfo;
    use Illuminate\Support\Facades\Auth;
    use Rebing\GraphQL\Support\SelectFields;
    
    class AllUsersQuery extends Query {
        protected $atributes = [
            'name' => 'allUsers'
        ];

        public function type(): Type{
            return Type::listOf(GraphQL::type('User'));
        }

        public function resolve($root, $args, $context, ResolveInfo $info){
            $fields = $info->getFieldSelection();

            $users = User::query();

            return $users->get();
        }
    }

    class LogInQuery extends Query
    {
        protected $atributes = [
            'name' => 'logIn'
        ];

        public function type(): Type
        {
            return Type::listOf(GraphQL::type('User'));
        }

        public function args(): array
        {
            return [
                'email' => [
                    'name' => 'email',
                    'type' => Type::nonNull(Type::string()),
                    'rules' => ['required', 'email'],
                ],
                'password' => [
                    'name' => 'password',
                    'type' => Type::nonNull(Type::string()),
                    'rules' => ['required'],
                ],
            ];
        }

        public function resolve($root, $args, $context, ResolveInfo $info)
        {
            $credentials = [
                'email' => $args['email'],
                'password' => $args['password']
            ];

            // $token = auth()->attempt($credentials);
            if (Auth::attempt($credentials)) {
                $fields = $info->getFieldSelection();
    
                $user = User::query()->where('email', 'LIKE', $args['email']);
    
                return $user->get();
            
            }
            
            throw new \Exception('Unauthorized!');


        }
    }

    class UserQuery extends Query {
        protected $atributes = [
            'name' => 'infoUsuario'
        ];
        
        public function type(): Type{
            return Type::listOf(GraphQL::type('User'));
        }

        public function args(): array
        {
            return [
                'id_usuario' => ['name' => 'id_usuario', 'type' => Type::nonNull(Type::int())]
            ];
        }

        public function resolve($root, $args, $context, ResolveInfo $info)
        {
            $fields = $info->getFieldSelection();
            // $select = $fields->getSelect();
            // $with = $fields->getRelations();

            $user = User::query()
                ->where('id', $args['id_usuario']);

            return $user->get();
        }
    }