
/* Arvant.blog.ir */

var MainMenuLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();


        // ask the window size
        var size = cc.winSize;

        // add a "Play" Button
        var playItem = new cc.MenuItemImage(
        		res.BtnPlay_png,
        		res.BtnPlay_png,
            function () {
                cc.log("Play is clicked!");
                action1=cc.scaleTo(0.1, 1.2, 1.2);
                action2=cc.ScaleTo(0.1,1,1);
                action3=cc.sequence(action1,action2);
                playItem.runAction(action3);
                cc.director.runScene(new GameScense());
            }, this);
        playItem.attr({
            x:90,
            y: 230,
        });

        var playMenu = new cc.Menu(playItem);
        playMenu.x = 0;
        playMenu.y = 0;
        this.addChild(playMenu, 1);
        
        // add a "Score" Button
        var scoreItem = new cc.MenuItemImage(
        		res.BtnScore_png,
        		res.BtnScore_png,
        		function () {
        			cc.log("Score is clicked!");
        			action1=cc.scaleTo(0.1, 1.2, 1.2);
        			action2=cc.ScaleTo(0.1,1,1);
        			action3=cc.sequence(action1,action2);
        			scoreItem.runAction(action3);
        		}, this);
        scoreItem.attr({
        	x:230,
        	y: 230,
        });

        var scoreMenu = new cc.Menu(scoreItem);
        scoreMenu.x = 0;
        scoreMenu.y = 0;
        this.addChild(scoreMenu, 1);

       

        // add "MainMenu" BackGround "
        var backGround=new cc.Sprite(res.BackGround_png);
        backGround.attr({
        	x:size.width/2,
        	y:size.height/2,
        	scale:1.0,
        	rotation:0
        	
        });
        this.addChild(backGround,0);
        

        //add Bird
        var Bird=new cc.Sprite(res.Bird_png);
        Bird.attr({
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
        Bird.runAction(action);
        this.addChild(Bird,1);

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
        // add Logo sprite "
        var logo=new cc.Sprite(res.Logo_png);
        logo.attr({
        	x:size.width/2,
        	y:380

        });
        this.addChild(logo,1);
        
  
        return true;
    }
});

var MainMenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainMenuLayer();
        this.addChild(layer);
    }
});

