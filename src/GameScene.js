
/* Arvant.blog.ir */

var GameLayer = cc.Layer.extend({
	sprite:null,
	_bird:null,
	ctor:function () {
		//////////////////////////////
		// 1. super init first
		this._super();


		// ask the window size
		var size = cc.winSize;


		var backGround=new cc.Sprite(res.BackGround_png);
		backGround.attr({
			x:size.width/2,
			y:size.height/2,
			scale:1.0,
			rotation:0

		});
		this.addChild(backGround,0);

		//add Bird
		//add Bird
		_bird=new cc.Sprite(res.Bird_png);
		_bird.attr({
			x:160,
			y:320

		});
		//
		// Manual animation
		//
		var animation = new cc.Animation();
		for (var i = 1; i <= 3; i++) {
			var frameName = "res/Flay" +i+ ".png";
			animation.addSpriteFrameWithFile(frameName);
		}
		animation.setDelayPerUnit(0.1);
		animation.setRestoreOriginalFrame(true);
		var action = cc.animate(animation).repeatForever();
		_bird.runAction(action);
		this.addChild(_bird,1);
		
		
		//add Ground
		var Ground=new cc.Sprite(res.Ground_png);
		Ground.attr({
			x:168,
			y:56

		});
		this.addChild(Ground,1);


		//add Ground1
		var Ground1=new cc.Sprite(res.Ground_png);
		Ground1.attr({
			x:Ground.x+Ground.width-1,
			y:56

		});
		this.addChild(Ground1,1);
		//run function scrollGround in loop with delay 0
		this.schedule(scrollGround,0);
		//scroll Ground Sprites and move it
		function scrollGround (dt){

			Ground.x=Ground.x-1;
			Ground1.x=Ground1.x-1;
			if(Ground.x+Ground.width/2<0){
				Ground.x=Ground1.x+Ground1.width-5;
			}

			if(Ground1.x+Ground1.width/2<0){
				Ground1.x=Ground.x+Ground.width-5;
			}
		};


		//touch event
		//Create a "one by one" touch event listener (processes one touch at a time)
		var listener1 = cc.EventListener.create({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			//onTouchBegan event callback function                      
			onTouchBegan: function (touch, event) { 
					return true;
			},
			//Trigger when moving touch
			onTouchMoved: function (touch, event) {         
			
			},
			//Process the touch end event
			onTouchEnded: function (touch, event) {         
				cc.log("Touch Layer... ");

			}
		});
		cc.eventManager.addListener(listener1, this);

		return true;
	}


});

var GameScense = cc.Scene.extend({
	onEnter:function () {
		this._super();
		var layer = new GameLayer();
		this.addChild(layer);
	}
});

