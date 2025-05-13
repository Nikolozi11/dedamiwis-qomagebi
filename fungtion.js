const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // ღილაკზე დაჭერისას მენიუ გამოჩნდება ან დაიმალება
});



document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.read-more-btn').forEach(button => {
      button.addEventListener('click', function() {
          const fullArticle = this.nextElementSibling;  // მოძებნოს .full-article, რომელიც ამ ღილაკის შემდეგ მოდის
          
          if (fullArticle.classList.contains('show')) {
              fullArticle.classList.remove('show');  // იმალება
              this.textContent = 'დახურვა';  // ტექსტი იცვლება
          } else {
              fullArticle.classList.add('show');  // ჩანს
             
          }
      });
  });
});









document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function() {
      const fullArticle = this.nextElementSibling;  // full-article-ს მივუდგებით
      fullArticle.style.display = fullArticle.style.display === 'none' ? 'block' : 'none';
      this.textContent = fullArticle.style.display === 'none' ? 'იხილეთ მეტი' : 'დახურა';
    });
  });




  //---------------------------------------------------------//


  




//------------------------------------------------------------//



let fireworksInstance;
    let music = document.getElementById("myAudio");

    window.onload = function () {
        const balloonsContainer = document.getElementById("balloons");
        const cake = document.getElementById("cake");
        const text = document.getElementById("anniversaryText");

        // ბუშტები
        for (let i = 0; i < 10; i++) {
            let balloon = document.createElement("div");
            balloon.classList.add("balloon");
            balloon.style.left = `${Math.random() * 100}%`;
            balloon.style.animationDuration = `${Math.random() * 4 + 4}s`;
            balloon.style.animationDelay = `${Math.random() * 2}s`;
            balloonsContainer.appendChild(balloon);
        }

        // პარტიკლები
        for (let i = 0; i < 50; i++) {
            let particle = document.createElement("div");
            particle.classList.add("particle");
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
            particle.style.animationDelay = `${Math.random() * 3}s`;
            particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
            document.body.appendChild(particle);
        }

        // ტექსტი
        setTimeout(() => {
            text.style.display = 'block';
            setTimeout(() => {
                text.style.opacity = '0';
            }, 20000);
        }, 1000);

        // ტორტის გამოჩენა
        setTimeout(() => {
            cake.style.bottom = '10%';
        }, 500);

        // ფეერვერკი
        setTimeout(() => {
            fireworksInstance = new Fireworks(document.body, {
                speed: 4,
                acceleration: 1.05,
                friction: 0.97,
                gravity: 1.5,
                particles: 80,
                trace: 3,
                explosion: 5,
                intensity: 30,
                traceSpeed: 10,
                flickering: 50,
                lineStyle: 'round',
                hue: { min: 0, max: 360 },
                delay: { min: 20, max: 30 },
                rocketsPoint: { min: 0, max: 100 },
                lineWidth: {
                    explosion: { min: 1, max: 3 },
                    trace: { min: 1, max: 2 }
                },
                autoresize: true
            });
            fireworksInstance.start();

            // მუსიკა ჩართვა
            music.play().catch(e => {
                console.log("Autoplay failed:", e);
            });
        }, 1000);
    };

    // stopMusic ფუნქცია, რომ ყველაფერი გაითიშოს
    function stopMusic() {
        music.pause();
        music.currentTime = 0;
    }

    // ეკრანზე დაჭერით ყველაფერი გაქრება
    function clearEverything() {
        if (fireworksInstance) fireworksInstance.stop();
        music.pause();
        music.currentTime = 0;
        document.getElementById("balloons").innerHTML = "";
        document.querySelectorAll('.particle').forEach(p => p.remove());
        document.getElementById("anniversaryText").style.display = "none";
        document.getElementById("cake").style.display = "none";
        stopMusic();
        document.body.removeEventListener("click", clearEverything);
        document.body.removeEventListener("touchstart", clearEverything);
    }

    // პირველი ინტერაქციის მოსმენა
    document.addEventListener('click', function startAudio() {
        music.play().catch(e => {
            console.log("Autoplay failed:", e);
        });
        document.removeEventListener('click', startAudio);
        document.removeEventListener('keydown', startAudio);
        document.removeEventListener('mousemove', startAudio);
    });

    document.addEventListener('touchstart', function startAudio() {
        music.play().catch(e => {
            console.log("Autoplay failed:", e);
        });
        document.removeEventListener('touchstart', startAudio);
    });

    document.body.addEventListener("click", clearEverything);
    document.body.addEventListener("touchstart", clearEverything);




    document.getElementById("gati").addEventListener("click", function () {
        const audio = document.getElementById("myAudio");
        audio.pause(); // 🎯 აჩერებს აუდიოს
      });