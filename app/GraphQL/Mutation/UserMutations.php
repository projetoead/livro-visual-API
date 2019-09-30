<?php
// app/GraphQL/Mutation/UserMutations.php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Mutation;
use App\Models\User;
use App\Models\Imagem;
use GraphQL;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMailUser;
use Illuminate\Support\Facades\DB;

class SignUpMutation extends Mutation
{
    protected $attributes = [
        'name' => 'signUp'
    ];

    public function type(): Type
    {
        return GraphQL::type('User');
    }

    public function args(): array
    {
        return [
            'name' => [
                'name' => 'name',
                'type' => Type::nonNull(Type::string()),
                'rules' => ['required'],
            ],
            'email' => [
                'name' => 'email',
                'type' => Type::nonNull(Type::string()),
                'rules' => ['required', 'email', 'unique:users'],
            ],
            'password' => [
                'name' => 'password',
                'type' => Type::nonNull(Type::string()),
                'rules' => ['required'],
            ],
            'thumbnail' => [
                'name' => 'thumbnail',
                'type' => Type::string(),
                'rules' => [],
            ],
            'nivel_acesso' => [
                'name' => 'nivel_acesso',
                'type' => Type::int(),
                'rules' => [],
            ],
            'is_principal' => [
                'name' => 'is_principal',
                'type' => Type::boolean()
            ],
            'baixa_resolucao' => [
                'name' => 'baixa_resolucao',
                'type' => Type::string()
            ],
            'alta_resolucao' => [
                'name' => 'alta_resolucao',
                'type' => Type::string()
            ],
            'link' => [
                'name' => 'link',
                'type' => Type::string()
            ],
            'descricao_imagem' => [
                'name' => 'descricao',
                'type' => Type::string()
            ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo)
    {
        $fields = $resolveInfo->getFieldSelection();
        $user = new User;
        if ($args['baixa_resolucao']) {
            $imagem = new Imagem;
            \Cloudinary::config(array(
                'cloud_name' => 'projetoead',
                'api_key' => '617162164254321',
                'api_secret' => '_OO4q-k2kVsKRhCIcq67S8bPTFs'
            ));
            $link = \Cloudinary\Uploader::upload($args['baixa_resolucao']);
            $imagem->link = $link['url'];
            $imagem->save();
            $user->id_imagem = $imagem->id;
        } else {
            $imagem = new Imagem;
            $imagem->save();
            $user->id_imagem = $imagem->id;
        }
        $user->fill($args);
        $user->password = bcrypt($args['password']);
        $user->save();
        // generate token for user and return the token
        if ($user)
            return auth()->login($user);
        else
            return response()->json(['message' => $user], 500);
    }
}

class SolicitarCodigo extends Mutation
{
    protected $attributes = [
        'name' => 'solicitarCodigo'
    ];

    public function type(): Type
    {
        return Type::string();;
    }

    public function args(): array
    {
        return [
            'email' => [
                'name' => 'email',
                'type' => Type::nonNull(Type::string()),
                'rules' => ['required', 'email'],
            ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo)
    {
        $user = User::query()->where('email', 'LIKE', $args['email'])->first();
        if (isset($user)) {
            $randomid = mt_rand(100000, 999999);
            DB::table('password_resets')->updateOrInsert(['email' => $args['email']], ['token' => $randomid]);
            Mail::to($args['email'])->send(new SendMailUser($user, $randomid));
        } else {
            return "not_found";
        }


        return "suc";
    }
}

class AlterarSenha extends Mutation
{
    protected $attributes = [
        'name' => 'alterarSenha'
    ];

    public function type(): Type
    {
        return GraphQL::type('User');
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
            'token' => [
                'name' => 'token',
                'type' => Type::nonNull(Type::string()),
                'rules' => ['required']
            ]
        ];
    }
    public function resolve($root, $args, $context, ResolveInfo $resolveInfo)
    {
        $recuperar = DB::table('password_resets')->where('email', $args['email'])->where('token', $args['token'])->first();
        if(isset($recuperar)){
            $user = User::query()->where('email', 'LIKE', $args['email'])->first();
            $user->password = bcrypt($args['password']);
            $user->save();
            // generate token for user and return the token
            if ($user)
                return auth()->login($user);
            else
                return response()->json(['message' => $user], 500);
        }
        return response()->json(['message' => 'validation'], 500);
    }
}
