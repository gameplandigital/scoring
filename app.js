var express =  require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

const server_port = process.env.PORT || this.SERVER_PORT || 6969;
const env = process.env.NODE_ENV || 'development';

//View Engine
app.set('view engine', 'ejs');
app.set('public', path.join(__dirname, 'public'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/input-score', function(req, res) {
	res.render('input');
});

var scoreData = [{
					g0: 0,
					g1: 0,
					g2: 0,
					g3: 0,
					g4: 0,
					g5: 0,
					g6: 0,
					g7: 0,
					g8: 0,
					g9: 0,
					total: 0
				}, 
				{
					p0: 0,
					p1: 0,
					p2: 0,
					p3: 0,
					p4: 0,
					p5: 0,
					p6: 0,
					p7: 0,
					p8: 0,
					p9: 0,
					total: 0
				},
				{
					m0: 0,
					m1: 0,
					m2: 0,
					m3: 0,
					m4: 0,
					m5: 0,
					m6: 0,
					m7: 0,
					m8: 0,
					m9: 0,
					total: 0
				},
				{
					s0: 0,
					s1: 0,
					s2: 0,
					s3: 0,
					s4: 0,
					s5: 0,
					s6: 0,
					s7: 0,
					s8: 0,
					s9: 0,
					total: 0
				}];

app.post('/score', function(req, res) {
	scoreData = JSON.parse(req.body.data);
	res.send ({ status: 'ok' });
});

app.get('/score', function(req, res) {
	res.send(scoreData);
});

app.listen(server_port, function() {
	console.log('Server started on port ' + server_port + ".");
});