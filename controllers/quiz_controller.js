var models = require('../models/models.js');

var titulo = 'Quiz';

exports.question = function(req,res) {
	models.Quiz.findAll().success(function(quiz) {
  		res.render('quizes/question',{title:titulo,pregunta: quiz[0].pregunta});		
	})

};



exports.answer = function(req,res) {
	models.Quiz.findAll().success(function(quiz) {
	  if(req.query.respuesta === quiz[0].respuesta) {
	    res.render('quizes/answer',{title:titulo,respuesta: 'Correcto'});
	  }else {
	    res.render('quizes/answer',{title:titulo,respuesta: 'Incorrecto'});
	  }		
	})

};


exports.author = function(req,res) {
  res.render('quizes/author',{title:titulo,author: 'Pedro Alarcón Sánchez'});
};
