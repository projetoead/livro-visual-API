<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Alterar Senha</title>
    </head>
</html>
<body>
    <p>Olá {{$user->name}}!</p>
    <br>
    <p>O seu código para alterar a senha é <b>{{$randomid}}</b></p>
    <p>Caso não tenha solicitado uma alteração de sua senha, ignore este e-mail.</p>
    <br>
    <p>Atenciosamente, </p>
    <p>Suporte</p>
</body>