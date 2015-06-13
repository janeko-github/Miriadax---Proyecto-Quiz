exports.question = function(req,res) {
  res.render('quizes/question',{title:titulo,pregunta: 'Capital de Italia'});
};

var titulo = 'Quiz';

exports.answer = function(req,res) {
  if(req.query.respuesta === 'Roma') {
    res.render('quizes/answer',{title:titulo,respuesta: 'Correcto'});
  }else {
    res.render('quizes/answer',{title:titulo,respuesta: 'Incorrecto'});
  }
};


exports.author = function(req,res) {
  res.render('quizes/author',{title:titulo,author: 'Pedro Alarcón Sánchez'});
};
