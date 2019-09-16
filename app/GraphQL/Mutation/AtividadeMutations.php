<?php
// app/GraphQL/Mutation/AtividadeMutations.php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ResolveInfo;
use Rebing\GraphQL\Support\Mutation;
use GraphQL\Type\Definition\InputObjectType;
use App\Models\Atividade;
use App\Models\AtividadeImagens;
use GraphQL;


class NovaAtividade extends Mutation
{
    protected $attributes = [
        'name' => 'novaAtividade'
    ];

    public function type(): Type
    {
        return GraphQL::type('Atividade');
    }

    public function args(): array
    {
        $imagens = new InputObjectType([
            'name' => 'ImagensInput',
            'fields' => [
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
            ]
        ]);
        return [
            'id_usuario' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'O id do usuário que cadastrou o lançamento',
                'rules' => ['required']
            ],
            'id_professor' => [
                'type' => Type::int(),
                'description' => 'O id do professor responsável pela atividade'
            ],
            'titulo' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'O titulo da atividade',
                'rules' => ['required']
            ],
            'texto' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'O texto da atividade',
                'rules' => ['required']
            ],
            'descricao' => [
                'type' =>Type::string(),
                'description' => 'Descrição da atividade'
            ],
            'data_encerramento' => [
                'type' =>Type::string(),
                'description' => 'A data limite da atividade'
            ],
            'status' => [
                'type' =>Type::int(),
                'description' => 'O status da atividade'
            ],
            'imagens' => [
                'type' => Type::listOf($imagens),
                'description' => 'Lista de Imagens da Atividade'
            ],
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo)
    {
        \Cloudinary::config(array(
            'cloud_name' => 'projetoead',
            'api_key' => '617162164254321',
            'api_secret' => '_OO4q-k2kVsKRhCIcq67S8bPTFs'
        ));

        $fields = $resolveInfo->getFieldSelection();
        $id_imagens = [];
        foreach($args['imagens'] as $value){
            $imagem = new Imagem;
            $link = \Cloudinary\Uploader::upload($value['baixa_resolucao']);
            $imagem->link = $link['url'];
            $imagem->save();
            array_push($id_imagens, $imagem->id);
        }
        $args['id_imagem'] = $id_imagens[0];
        $atividade = new Atividade();
        $atividade->fill($args);
        $atividade->save();

        foreach($id_imagens as $id_imagem){
            $imagem_lancamento = new AtividadeImagens();
            $imagem_lancamento->id_imagem = $id_imagem;
            $imagem_lancamento->id_lancamentos = $atividade->id;
            $imagem_lancamento->save();
        }
    }
}
