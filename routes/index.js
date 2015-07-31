var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});
router.param('quizId',quizController.load); //autoload :quizId
//definición de rutas
router.get('/quizes', quizController.index);
router.get('/quizes/:quizld(\\d+)', quizController.show);
router.get('/quizes/:quizld(\\d+)/answer', quizController.answer);
router.get('/quizes/author', quizController.author);


module.exports = router;
