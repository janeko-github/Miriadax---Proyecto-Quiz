var models = require('../models/models.js');

var titulo = 'Quiz';

exports.question = function(req,res) {
	models.Quiz.findAll().then(function(quiz) {
  		res.render('quizes/show',{title:titulo,pregunta: quiz[0].pregunta});		
	})

};

exports.load = function(req,res, next, quizId) {
	models.Quiz.find(quizId).then(
		function(quiz) {
			if (quiz) {
				req.quiz = quiz;
				next();
			}else
			{
				next(new Error('No existe quizId=' + quizId));
			}

    	}
	).catch(function(error) {next(error);});

};

exports.index = function(req,res) {
	models.Quiz.findAll().then(function(quizes) {
	    res.render('quizes/index.ejs',{quizes: quizes});
	}).catch(function(error) {next(error);});

};

exports.show = function(req,res) {
	models.Quiz.findAll(req.params.quizId).then(function(quiz) {
	    res.render('quizes/show',{quiz: req.quiz});
	})

};


exports.answer = function(req,res) {
	models.Quiz.findAll(req.params.quizId).then(function(quiz) {
		var resultado = 'Incorrecto';
	  if(req.query.respuesta === req.quiz.respuesta) {
	    resultado = 'Correcto';
	  }
	    res.render('quizes/answer',{quiz: req.quiz,respuesta: resultado});
	  		
	})

};


exports.author = function(req,res) {
  res.render('quizes/author',{title:titulo,author: 'Pedro Alarcón Sánchez'});
};
