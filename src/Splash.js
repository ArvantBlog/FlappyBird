var SplashScreenLayer=cc.Layer.extend({
    sprite:null,
    ctor:function () {
    this._super();
    var size=cc.winSize;
    var backGround=new cc.Sprite(res.Splash_png);
        backGround.attr({
        	x:size.width/2,
        	y:size.height/2,
        	scale:1.0,
        	rotation:0
        	
        });
        this.addChild(backGround,1);
        
        var timecount=0;
        this.schedule(delay,1);
        function delay(dt){
        	timecount++;
        	if(timecount>5){
        		cc.director.runScene(new MainMenuScene());
        	}
        	
        }
}
    
});

var SplshScene=cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer=new SplashScreenLayer();
        this.addChild(layer);
    }

});