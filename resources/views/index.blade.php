

@extends('layout')

@section('title', 'layout')

@section('content')

<body>
        <!--baner-->
        <div class="slider-area">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" style="background-image:url('{{asset('assets/img/10weligavida.jpg') }}')">
                        <div class="slider-content">
                            <h1>10 წელი დედამიწის <br> სადარაჯოზე</h1>
                            <p>კლუბი უკვე 10 წელია ზრუნავს გარემოზე.</p>
                        </div>
                    </div>
                    <div class="swiper-slide" style="background-image:url('{{asset('assets/img/baner.jpg') }}')">
                        <div class="slider-content">
                            <h1>დატოვე შენი <br> ეკოლოგიური ნაკვალევი</h1>
                            <p>გაუფრთხილდი გარემოს ჩვენთანერთად და დატოვე შენი ნაკვალევი.</p>
                        </div>
                    </div>
                    <div class="swiper-slide" style="background-image:url('{{asset('assets/img/gamofena.jpeg') }}')">
                        <div class="slider-content">
                            <h1>უამრავი აქტივობა</h1>
                            <p>კლუბი უამრავ მნიშვნელოვან აქტივობას ახორციელებს.</p>
                        </div>
                    </div>
                    <div class="swiper-slide" style="background-image:url('{{asset('assets/img/pikniki.jpeg') }}')">
                        <div class="slider-content">
                            <h1>შემოგვიერთდი დღესვე</h1>
                            <p>გახდი ჩვენი კლუბის აქტიური წევრი და გაუფრთხილდი გარემოს.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    <!--video-->
    <section class="eco-video-section">
        <div class="video-wrapper">
            <video id="ecoVideo" class="eco-video-bg">
                <source src="{{asset('assets/video/lumi.mp4') }}" type="video/mp4" />
                შენი ბრაუზერი არ უჭერს მხარს ვიდეოს
            </video>

            <div id="ecoContent" class="eco-video-content">
                <h2>ენერგო ეფექტურობა</h2>
                <p>ამასთან დაკავშირებით იხილეთ ვიდეო</p>
                <button id="playVideoBtn" class="eco-btn">▶️ ვიდეოს ჩართვა</button>
            </div>

            <button id="muteBtn" class="eco-btn mute-btn" style="display: none;">🔇 გამორთე ხმა</button>
        </div>
    </section>

    <!--siaxle-->
    <article>
        <div class="news-container">
            <div class="news-title">სიახლეები</div>

            <div class="news-item">
                <h3>გვერდის დიზაინი განახლდა</h3>
                <p>სრულიად განახლდა ვებგვერდი შეიცვალა დიზაინი და ლოგო მომხმარებელს უფრო მეტი შესაძლებლობა ექნება რომ
                    თვალი ადავნოს ეკო კლუბს.</p>
                <div class="news-date">25 ივნისი, 2025</div>
            </div>
        </div>
    </article>

    <div class="center-wrapper">
        <a href="./dowload/app-release.apk" download="./dowload/app-release.apk"><button class="modern-button"><i class="fas fa-download" style="margin-right: 8px;"></i> ჩამოტვირთვა
</button></a>
    </div>

</body>

@endsection