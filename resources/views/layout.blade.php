<!DOCTYPE html>
<html lang="en">

<head>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />


    <script src="{{asset('assets/js/baner.js') }}" defer></script>
    <script src="{{asset('assets/js/function.js') }}" defer></script>
    <link rel="stylesheet" href="{{asset('assets/css/disain.css') }}" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="x-icon" href="./img/green1-logo.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <title>დედამიწის ქომაგები</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />

</head>

<body>

    <header>
        <!--nav-->
        <nav>
            <a href="./index.html">
                <div class="logo">
                    <img src="{{asset('assets/img/green1-logo.png') }}" alt="დედამიწის ქომაგების ლოგო" />
                </div>
            </a>


            <div class="burger" id="burger">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div class="nav-links" id="navLinks">
                <a href="/" class="link">მთავარი</a>
                <a href="/vinvart" class="link">ჩვენს შესახებ</a>
                <a href="/gazeti" class="link">გაზეთი</a>
                <a href="/gegma" class="link">სამოქმედო გეგმა</a>
                <a href="/aqtivobebi" class="link">აქტივობები</a>
                <a href="https://docs.google.com/forms/d/1O_WNAPv-fvRoFVty1GkeQlzXeoQhNZ0XkdCg9X5jY4g/edit" class="btn"
                    target="_blank">რეგისტრაცია</a>
            </div>
        </nav>

        </header>




            @yield('content')





        <!--footer-->
    <footer>
        <ul>
            <li><a href="https://www.facebook.com/profile.php?id=61566450675759&locale=ka_GE" class="facebook"
                    target="_blank"><i class="fab fa-facebook-f icon"></i></a></li>
            <li><a href="#" target="_blank" class="instagram"><i class="fab fa-instagram icon"></i></a></li>
            <li><a href="#" target="_blank" class="youtube"><i class="fab fa-youtube icon"></i></a></li>
        </ul>
    </footer>


    <!-- Swiper JS -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>

    <script src="{{asset('assets/js/nav.js"></script>
</body>

</html>