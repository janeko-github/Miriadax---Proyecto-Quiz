var models = require('../models/models.js');

var titulo = 'Quiz';

exports.question = function(req,res) {
	models.Quiz.findAll().then(function(quiz) {
  		res.render('quizes/show',{title:titulo,pregunta: quiz[0].pregunta});		
	})

};

// Autoload -factoriza el codigo si ruta incluye :quizId
exports.load = function(req, res, next, quizId){
	models.Quiz.find(quizId).then(
		function(quiz){
			if(quiz){
				req.quiz = quiz;
				next();
			} else { 
				next(new Error('No existe quizId=' + quizId));
			}
		}
	).catch(function(error){next(error);});
};

// GET /quizes
exports.index = function(req, res){
	models.Quiz.findAll().then(
		function(lista){
			res.render('quizes/index', {quizes: lista});
		}
	).catch(function(error){next(error);})
};


// GET /quizes/:id
exports.show = function(req, res){
	res.render('quizes/show', {quiz: req.quiz});
};

// GEt /quizes/:id/answer
exports.answer = function(req, res){
	var resultado = 'Incorrecto';
	if(req.query.respuesta.toLowerCase() === req.quiz.respuesta.toLowerCase()){
		resultado = 'Correcto';
	}
	res.render('quizes/answer', {quiz: req.quiz, respuesta: resultado});
};

/*
exports.author = function(req,res) {
  res.render('quizes/author',{title:titulo,author: 'Pedro Alarcón Sánchez'});
};
*/
