<?php
// app/GraphQL/Mutation/ImagemMutations.php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Mutation;
use App\Models\Imagem;
use GraphQL;


class NovaImagem extends Mutation
{
    protected $attributes = [
        'name' => 'novaImagem'
    ];

    public function type()
    {
        return GraphQL::type('Imagem');
    }

    public function args()
    {
        return [
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
            ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo)
    {

        $fields = $resolveInfo->getFieldSelection();
        $imagem = new Imagem;
        $imagem->fill($args);

        $imagem->save();

        return $imagem;
    }
}
class AlterarImagem extends Mutation
{
    protected $attributes = [
        'name' => 'alterarImagem'
    ];

    public function type(): Type
    {
        return GraphQL::type('Imagem');
    }
    public function args(): array
    {
        return [
            'id' => [
                'name' => 'id',
                'type' => Type::nonNull(Type::int()),
                'rules' => ['required'],
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
        \Cloudinary::config(array(
            'cloud_name' => 'projetoead',
            'api_key' => '617162164254321',
            'api_secret' => '_OO4q-k2kVsKRhCIcq67S8bPTFs'
        ));
        $imagem = Imagem::find($args['id']);
        if(!$imagem) {
            return null;
        }
        $link = \Cloudinary\Uploader::upload($args['baixa_resolucao']);
        $imagem = Imagem::where('id', $args['id'])->first();
        if ($imagem) {
            $imagem->link = $link['url'];
            $imagem->save();
        }

        return $imagem;
    }
}