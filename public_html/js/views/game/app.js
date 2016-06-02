define(function(require) {
    var Backbone = require('backbone')

    return (function () {

        
        //ПЕРЕПИСАТЬ НА МОДЕЛИ
        //----------------------------
        function Question(song, opt1, opt2, opt3, opt4, correct) {
            this.song = song;
            this.options = [opt1, opt2, opt3, opt4];
            this.correct = this.options[correct];
        }

        var q1 = new Question("/songs/m.A.A.d%20City.mp3", "Kendrick Lamar", "Kanye West", "Mad Villain", "Outkast", 0);

        var q2 = new Question("/songs/Peach,%20Plum,%20Pear.mp3", "Animalcollective", "Devendrabanhart", "Joanna Newsom", "Marnie Stern", 2);

        var q3 = new Question("/songs/Every%20Single%20Night.mp3", "Catpower", "Fiona Apple", "Laura Marling", "Nekocase", 1);

        var q4 = new Question("/songs/Oblivion.mp3", "Choto-hz", "Jessie Ware", "Janelle Monae", "Grimes", 3);

        var q5 = new Question("/songs/05%20Gigantic.mp3", "Pavement", "Pjharvey", "Pixies", "The dismembermentpl", 2);
            
        var questionList = [q1, q2, q3, q4, q5];


        //----------------------------


        var qcount = 0,
            rightCount = 0,
            addOptions = function () {
                $('audio').attr('src', questionList[qcount].song);
                for (var i=0; i < questionList[i].options.length; i++) {
                    var num = i + 1;
                    $('.song-btn#' + num).text(questionList[qcount].options[i])
                    console.log(num)
            }
        };
        
        var correctCheck = function() {
            var choice = $('.selected').text();
            console.log(choice)
            if (choice === questionList[qcount].correct) {
                rightCount += 1;
            }
        }
        
        var showResults = function() {
            if (qcount > 4) {
                $('audio').each(function(){
                    this.pause();
                    this.currentTime = 0;
                }); 
                $('.song-btn').hide();
                $('.current-score').hide()
                $('#results').show();
                $('#results h1').text('You scored ' + rightCount + '/5. Play again?');
            }
            else {
                $('.current-score').text(rightCount)
            }
        }
        
        var restartGame = function() {
            $('#results').hide();
            $('.song-btn').show();
            qcount = 0;
            rightCount = 0;
            addOptions();
            $('.current-score').show()
            $('.current-score').text(rightCount)
        }

         
        $('.song-btn').on('click', function() {
            $(this).addClass('selected');
            correctCheck();
            $(this).removeClass('selected');
                    qcount +=1; 
            showResults();
            addOptions();

        })
        
        $('#restart').on('click', function() {
            restartGame();
        })


        $('#startplace').hide();
        $('#quizspot').show();
        addOptions();
    });
})

