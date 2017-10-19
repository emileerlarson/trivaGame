var questions = [{
	question: "Who was NOT a memember of TLC?",
	answer: [" Left Eye ", " T-Boz ", " Cool "],
	correctAnswer: " Cool "
	},
	{
		question: "Hanson was Famous for what song?",
	 	answer:[" Get the Girl Back ", " MMMBop ", " Weird "],	
	 	correctAnswer:" MMMBop "
	},
	{
		question: "Graduation was a song by what band?",
		answer:[" Vitamin C ", " Eve 6 ", " Garbage "],
		correctAnswer: " Vitamin C "
	},
	{
		question: "Genie in a bottle was a song by what Artist?",
		answer: [" Mandy Moore ", " Britney Spears ", " Christina Aguilera "],
		correctAnswer: " Christina Aguilera "
	},
	{
		question: "Which song title is NOT a Spice Girls Song?",
		answer: [" 2 become 1 ", " Creep ", " WannaBe "],
		correctAnswer: " Creep "
	}]

$('#start').on("click", function () {
 game.start();	
})
$(document).on('click','#done',function(){
	game.done();
})
var game = {
	correct: 0,
	incorrect: 0,
	counter: 120,
	countdown: function(){
		game.counter--;
		$('#counter').html(game.counter);
		if(game.counter <= 0){
			console.log("time is up");
			game.done();
		}
	},
	start: function(){
		timer = setInterval(game.countdown,1000);
		$('#title').append('<br><h2> Time Remaing: <span id="counter">120</span> Seconds</h2>');
		$('#start').remove();
		for(var i = 0; i < questions.length; i++) {
			$('#wrapper').append('<h3>' + questions[i].question + '</h3>');
		
			for(var j = 0; j < questions[i].answer.length; j++){
				$('#wrapper').append("<input type='radio' name='question-" + i + "' value='" + questions[i].answer[j] + "'>" + questions[i].answer[j] + "</input>");
			}
		}
				$('#wrapper').append('<br><br><button id="done">DONE</button>')
	},
	done: function(){
		$.each($('input[name="question-0"]:checked'), function(){
			if($(this).val() == questions[0].correctAnswer){
				game.correct++;
			} else{
				game.incorrect++;
			}
		});
				$.each($('input[name="question-1"]:checked'), function(){
			if($(this).val() == questions[1].correctAnswer){
				game.correct++;
			} else{
				game.incorrect++;
			}
		});
						$.each($('input[name="question-2"]:checked'), function(){
			if($(this).val() == questions[2].correctAnswer){
				game.correct++;
			} else{
				game.incorrect++;
			}
		});
								$.each($('input[name="question-3"]:checked'), function(){
			if($(this).val() == questions[3].correctAnswer){
				game.correct++;
			} else{
				game.incorrect++;
			}
		});
				$.each($('input[name="question-4"]:checked'), function(){
			if($(this).val() == questions[4].correctAnswer){
				game.correct++;
			} else{
				game.incorrect++;
			}
		});

		this.result();		
	},
	result: function(){
		clearInterval(timer);
		$('#wrapper h2').remove();

		$('#wrapper').html('<h2>All Done!!!</h2>');
		$('#wrapper').append('<h3>Correct Answers: '+this.correct+"</h3>");
		$('#wrapper').append('<h3>Incorrect Answers: '+this.incorrect+"</h3>");
		$('#wrapper').append('<h3>Unanswerd: '+(questions.length-(this.incorrect+this.correct))+"</h3>");
	}
}