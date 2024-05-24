
    // 4ª Tarefa - Função botaoAnimacao - procurei usar o jquery
    $(".a.drum").on("click", function() {
        $(".a.drum").animate({ scale: '0.9' }, 100).animate({ scale: '1' }, 100);
        })

    $(".s.drum").on("click", function() {
        $(".s.drum").animate({ scale: '0.9' }, 100).animate({ scale: '1' }, 100);
        })

    $(".d.drum").on("click", function() {
        $(".d.drum").animate({ scale: '0.9' }, 100).animate({ scale: '1' }, 100);
        })

    $(".j.drum").on("click", function() {
        $(".j.drum").animate({ scale: '0.9' }, 100).animate({ scale: '1' }, 100);
        })

    $(".k.drum").on("click", function() {
        $(".k.drum").animate({ scale: '0.9' }, 100).animate({ scale: '1' }, 100);
        })

    $(".l.drum").on("click", function() {
        $(".l.drum").animate({ scale: '0.9' }, 100).animate({ scale: '1' }, 100);
        })


// Tocar som

$(".a.drum").on("click", function() {
    var audio = new Audio("./Assets/sounds/leftCrash.mp3");
    audio.play();
});

$(".s.drum").on("click", function() {
    var audio = new Audio("./Assets/sounds/tom1.mp3");
    audio.play();
});

$(".d.drum").on("click", function() {
    var audio = new Audio("./Assets/sounds/snare.mp3");
    audio.play();
});

$(".j.drum").on("click", function() {
    var audio = new Audio("./Assets/sounds/tom3.mp3");
    audio.play();
});

$(".k.drum").on("click", function() {
    var audio = new Audio("./Assets/sounds/tom2.mp3");
    audio.play();
});

$(".l.drum").on("click", function() {
    var audio = new Audio("./Assets/sounds/kickbass.mp3");
    audio.play();
});

// tocar ao pressionar botão do teclado

$(document).on('keydown', function(event) {
    if (event.key == 'a') {
        var audio = new Audio("./Assets/sounds/leftCrash.mp3");
        audio.play();
    }else if (event.key == 's') {
        var audio = new Audio("./Assets/sounds/tom1.mp3");
        audio.play();
    }else if (event.key == 'd') {
        var audio = new Audio("./Assets/sounds/snare.mp3");
        audio.play();
    }else if (event.key == 'j') {
        var audio = new Audio("./Assets/sounds/tom3.mp3");
        audio.play();
    }else if (event.key == 'k') {
        var audio = new Audio("./Assets/sounds/tom2.mp3");
        audio.play();
    }else if (event.key == 'l') {
        var audio = new Audio("./Assets/sounds/kickbass.mp3");
        audio.play();
    } else {
        
    }
    }
);




    // // 1ª Tarefa - Detectar Cliques do Mouse - OBS: feito com ajuda do chatgpt
    // mas usando jquery ficou mais legal xD

    // document.addEventListener('DOMContentLoaded', function() {
        
    //     const drumButtons = document.querySelectorAll('.drum');
    //     drumButtons.forEach(button => {
    //         button.addEventListener('click', function() {
    //             const buttonClass = button.classList[0];
    //             fazerSom(buttonClass);
    //             botaoAnimacao(buttonClass);
    //         });
    //     });

