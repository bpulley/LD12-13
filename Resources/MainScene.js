(function() {
	var platino = require('co.lanica.platino');
	var Bomb = require('entities/Bomb');
	var Shrapnel = require('entities/Shrapnel');
	var MainScene = function(window, game) {
		var scene = platino.createScene();
		scene.color(0,1,0);
		//pragma-mark - Scene Events
		var onSceneActivated = function(e) {
			game.startCurrentScene();
			testBomb.explode();
		};

		var onSceneDeactivated = function(e) {
		};

		scene.addEventListener('activated', onSceneActivated);
		scene.addEventListener('deactivated', onSceneDeactivated);
		// var canvas = platino.createCanvasSprite({
		// 	width : window.size.width,
		// 	height : window.size.height,
		// });
		// canvas.color(1,0,0);
		// canvas.fillRect(0,0,60,60);
		// canvas.color(0,1,0);
		// canvas.fillRect(60,60,140,70);
		// canvas.anchorPoint = {
		// 	x:0,
		// 	y:0
		// };
		// canvas.rotateFromAxis(30,.5,.5,0);
		// scene.add(canvas);

		var testBomb = new Bomb("images/testbomb.png",
			{
				x:game.screen.width/2,
				y:game.screen.height/2
			},{
				width : 70,
				height : 75
			}, new Shrapnel(
			80,
			200,
			10,
			"images/testbomb.png",
			{
				x:game.screen.width/2,
				y:game.screen.height/2
			},
			{
				width : 45,
				height : 47
			})
		);
		scene.add(testBomb.sprite);
		// scene.add(testShrap.sprite);

		return scene;
	};

	module.exports = MainScene;
}).call(this);