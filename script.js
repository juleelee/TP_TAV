const AUDIO = {
    exo1: new Audio('./my_audio/je_la_exo1.wav'),
    exo2_pb: new Audio('./my_audio/je_la_exo2_passe_bas.wav'),
    exo2_ph: new Audio('./my_audio/je_la_exo2_passe_haut.wav'),
    exo2_comp: new Audio('./my_audio/je_la_exo2_compression.wav'),
    exo4: new Audio('./my_audio/je_la_exo4.wav'),
    exo3_mignon: new Audio('./my_audio/je_la_exo3_mignon.wav'),
    exo3_hacker: new Audio('./my_audio/je_la_exo3_hacker.wav'),

    };

    function play(soundName) {
        if (AUDIO.hasOwnProperty(soundName)) {
            AUDIO[soundName].play();
        } else {
            console.error('Sound not found:', soundName);
        }
    }