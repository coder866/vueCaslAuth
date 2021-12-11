<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Vue Authorization With CASL</title>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>
        <link rel="stylesheet" href="{{mix('css/app.css')}}">
    </head>
    <body class="antialiased">
        <div class="bg-white-100 w-full px-1">
            <div id="app"></div>
        </div>
        <script type="text/javascript" src="{{mix('js/app.js')}}"></script>
    </body>
</html>
