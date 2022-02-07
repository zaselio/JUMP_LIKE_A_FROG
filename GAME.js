(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
var rect; // used to reference frame bounds
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._continue = function() {
	this.initialize(img._continue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,82);


(lib.bankofariver = function() {
	this.initialize(img.bankofariver);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,83);


(lib.BlueFrogi = function() {
	this.initialize(img.BlueFrogi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,145);


(lib.brownborad = function() {
	this.initialize(img.brownborad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,310,113);


(lib.butterfly_open = function() {
	this.initialize(img.butterfly_open);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,136);


(lib.Cards = function() {
	this.initialize(img.Cards);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,366,316);


(lib.check_active = function() {
	this.initialize(img.check_active);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,82);


(lib.check_notActive = function() {
	this.initialize(img.check_notActive);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,82);


(lib.clock = function() {
	this.initialize(img.clock);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,464,574);


(lib.ComboBox = function() {
	this.initialize(img.ComboBox);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.continue_btn = function() {
	this.initialize(img.continue_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,105);


(lib.EndAnimitonBackground = function() {
	this.initialize(img.EndAnimitonBackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2050,1139);


(lib.endbuttuns = function() {
	this.initialize(img.endbuttuns);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,80);


(lib.finalborad = function() {
	this.initialize(img.finalborad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,690,570);


(lib.frogiHappy = function() {
	this.initialize(img.frogiHappy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,107);


(lib.FrogiSideLook = function() {
	this.initialize(img.FrogiSideLook);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,112);


(lib.Game_Name_Subject = function() {
	this.initialize(img.Game_Name_Subject);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,172);


(lib.GameBackground = function() {
	this.initialize(img.GameBackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1924,1259);


(lib.gm1 = function() {
	this.initialize(img.gm1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,164);


(lib.GreenFrogi = function() {
	this.initialize(img.GreenFrogi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,145);


(lib.Homescreenbackground = function() {
	this.initialize(img.Homescreenbackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1926,1070);


(lib.Howtoplayborad = function() {
	this.initialize(img.Howtoplayborad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,134);


(lib.img_temp_1 = function() {
	this.initialize(img.img_temp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4928,2772);


(lib.img_temp_2 = function() {
	this.initialize(img.img_temp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4000,5000);


(lib.img_temp_3 = function() {
	this.initialize(img.img_temp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6016,4016);


(lib.img_temp_4 = function() {
	this.initialize(img.img_temp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5905,4970);


(lib.jump = function() {
	this.initialize(img.jump);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,234);


(lib.jump2 = function() {
	this.initialize(img.jump2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,179);


(lib.jumpBlue = function() {
	this.initialize(img.jumpBlue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,190);


(lib.jumpeGreen = function() {
	this.initialize(img.jumpeGreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,190);


(lib.jumperGreen = function() {
	this.initialize(img.jumperGreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,190);


(lib.jumpingfrogi = function() {
	this.initialize(img.jumpingfrogi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,187);


(lib.jumpPink = function() {
	this.initialize(img.jumpPink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,190);


(lib.looksideBlue = function() {
	this.initialize(img.looksideBlue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,191);


(lib.looksidePink = function() {
	this.initialize(img.looksidePink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,191);


(lib.music = function() {
	this.initialize(img.music);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,67);


(lib.mute = function() {
	this.initialize(img.mute);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,67);


(lib.namegameH1 = function() {
	this.initialize(img.namegameH1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,661,103);


(lib.num0 = function() {
	this.initialize(img.num0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,126);


(lib.num1 = function() {
	this.initialize(img.num1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,123);


(lib.num2 = function() {
	this.initialize(img.num2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,123);


(lib.num3 = function() {
	this.initialize(img.num3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,127);


(lib.num4 = function() {
	this.initialize(img.num4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,125);


(lib.num5 = function() {
	this.initialize(img.num5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,125);


(lib.num6 = function() {
	this.initialize(img.num6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,128);


(lib.num7 = function() {
	this.initialize(img.num7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,122);


(lib.num8 = function() {
	this.initialize(img.num8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,127);


(lib.num9 = function() {
	this.initialize(img.num9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,119);


(lib.OpenanimitonBackground = function() {
	this.initialize(img.OpenanimitonBackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1923,1068);


(lib.PauseH1 = function() {
	this.initialize(img.PauseH1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,687,103);


(lib.PinkFrogi = function() {
	this.initialize(img.PinkFrogi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,145);


(lib.plant = function() {
	this.initialize(img.plant);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1282,1081);


(lib.sadfrogi = function() {
	this.initialize(img.sadfrogi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,191);


(lib.stopbutton = function() {
	this.initialize(img.stopbutton);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,67);


(lib.TimeoverH1png = function() {
	this.initialize(img.TimeoverH1png);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,661,103);


(lib.Viconpng = function() {
	this.initialize(img.Viconpng);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,48);


(lib.wave = function() {
	this.initialize(img.wave);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,82);


(lib.whiteline = function() {
	this.initialize(img.whiteline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1924,1);


(lib.Xicon = function() {
	this.initialize(img.Xicon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,45);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.an_ComboBox = function(options) {
	this.initialize();
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.raft_alone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AWUr9QgHhOgHhNQB0g/B0BUIAAAPQAAAVAAAXAZtsiQAAASAAATAW8lxQAAgBAAgBQgMh1gMh1AXyBcQgRiGgPiFQgBgPgCgOQgBgMgCgLAZml0QAAABAAACAZpofQAAAfgBAgQAAATAAAUQgBAigBAiAZjjYQgBAbAAAbQgBARAAASQgDBYgCBXAZrpwQgBAUAAAUAZdBcIgBgnIAAgFQgBAGAAAGIgBAgAZcA1IgBAHAZjF4IgDiOAYYF+QgKhKgKhKAYmHmQgEgagDgaQgBgHgBgHAZlHmIgChGAZFLCQgBgDAAgDAZqLKIABBZIgfhNAZoJzIABAuAMcuNQACAAABAAAMqr9QAAgDAAgDQgBgLAAgKAMypcQAAgKgBgKAMmtAQgEg+gBgKQA4g6CvAmIgGCUACwujQACgBACgBQB7hHB9BLQAAAAABAAIgCCLAGppKIgCDZAQAnfIAABuAM+lxQgBgQgBgRQAAgEgBgFQgBgUAAgUQgDg9gDg1ANvBcQgUiJgNh8QgCgTgCgSQgBgLgBgKAQBpaIAABdACzsKQgIhKgGhIAmfprQAAgCAAgDAi+sFIAAAIAi+pwIAAAYAmpuKQACgGACgFQAEgJAGgHQAyhBCrBjIAABXAi+osIAAC7AmPlxQAAgBAAgBQgCgVgBgUQgGhUgFhVAldBcQgTiJgOiPQgCgSgCgTQAAgBAAgBADglxQgBgNgCgNQgMhggKhdAEeBcQgUiIgRiGQgEgZgDgYIAAAAAFIFtQgBgDAAgDQgBgCAAgBQgKg+gJg8Ai/KfIAAC6QAAgBgBAAQgXhTgUhVQgGgWgFgXQgCgIgCgIAGcKpIgDCxQAAgCgBgDQgKg6gJg5QgCgKgCgKQgBgHgBgHAF5KcQgEgVgDgUAkZHmQgZh7gViBAi/DqIAADWAP+DqIAAAWAGeHPIAAAXAGcJzIAAAOAP8JzIgBDIQgXhmgUhiAGgDqIgCC+AOzHmQgZiDgUh5AP+E+IgCCoAGljjIgDE/AP/jjIgBE/Ai+jjIAAE/Am7uLIASABAmmsaQgBgegBgeQgBgaAAgaAwFuZQBwhOB0BLIAAARIgDB+AwFr9QAAgEgBgDAwLsnQgFgtgBgnAvvpNQAAgFAAgFAvVlxQgBgMgBgMQgCgSgCgSQgHg4gIg5AvBioQAAgDgBgDIgBgOA2IshIAAAkA5suFIDkACIAAA5A5tuFIABAAA2JpGIAAAJA2KoSIAAChA43lxQgNhkgKhoA5hr9QgGhDgFhFA2PHPIAAAXA2OEXIgBCRA3aHmQgKhUgNh2AsvA5QAAASABARAuAFtQgDgQgCgRAtuHmQgEgcgFgcQgBgKgCgJAtRKRQgBgCAAgCAs9MDQgGgggGghQgBgGgBgHAs0NiQgBgPgBgPQgCgWgBgYQgBAAAAAAIAAgCAsrHeQAAAEAAAEAsoKoQAAgHAAgIIAAAAAsoKyQAAACAAABQAAABAAABIABAKIgBAGAsnLBIgBgGAs5MlQACAiADAbAsrD8QABBegBBdA2Li0IgCEQA4EBcQgMh4gOiRAsxONQACAPABAMQAFA/gFg6QgCgOgBgSIgDgr");
	this.shape.setTransform(204.125,109.5453);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(0.1,1,1).p("AegAWIgOhbAcVhdIAlBcAdOADIgQhbAdahTIAoBiAcDAAIgmhfAajhKIA9BMAZ8gfIAxAvAZtAAIArAdAThAFIgQhbATshQIAoBhAUyAZIgNhcAVKg2IA9CBAe3g4IA8CBASWADIgnhfAQQgdIAwAwAQBACIAqAdAQ2hIIA9BMAKFAIIgPhbALXAbIgNhbAKRhOIApBiAI7AFIgnhfAG1gaIAwAvAHbhFIA8BMAGmAFIApAdAJNhYIAkBbALugzIA+CBAByAUIgNhcAAhAAIgQhbAAshVIApBhACKg7IAbCCAgpgBIgnhgAiwgiIAxAwAi/gCIArAcAiJhNIA8BNAgXhgIAkBcApIANIgRhbAnfguIA6B8IADAFAo9hJIAoBiAn3AgIgOhbAqTAKIgnhfAsoAKIApAdAr0hAIA+BMAsZgVIAwAvAqChTIAmBbAyuAPIgQhaIAAgBAxFgsIAsB9IAGARAxcAjIgOhcAyihGIAoBhAz4ANIgmheIgBgBA2OAMIAqAdA1/gTIAxAwA1Zg+IA9BMA7BAqIgKhfA6pgkIA8CBA8RhLIAyBuA9dAUIgnhfA/jgLIAwAvA/yAUIApAdA++g2IA9BMA8TAXIgbhhA9MhJIAlBbAznhRIAlBbASohbIAlBb");
	this.shape_1.setTransform(204.1,9.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AYJgEIgbAJAOMAEIgDABA3tgEIgbAJIAAAA");
	this.shape_2.setTransform(262.325,91.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#814229").ss(1,1,1).p("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");
	this.shape_3.setTransform(212.15,102.0645);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_4.setTransform(214.9457,132.23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#96A8B4").s().p("ABtCxIgBgBIAEgNIgEANIhLg6IhrhWIAXgZIgXAZIgxAoIAAgpIADgBIAcgYIgdgYIAAgkIAyArIgVARIAVgRIBKhBIAJgIIBJhEIABgCIAagYIALAOIgLAdIg6AzIhpBbICIBsIAnAgIgMAXIAAAJIgDgCg");
	this.shape_5.setTransform(12.925,41.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6E3B3").s().p("AY5CpQgKgRgGgTQgsiIAEgPQAzi3B9g8QAigSApgHQC9gnCXDCQAeB9guCBQgJAZgPAVQgyBHh2AjQgoALgwAHQi2gVg5hngAcQD9IAKgBQAtgBAsgLQAegIAegMQAsgUAXgfQAKgOAGgRQAghGAThGQACgQAAgPQAAg3gdgeQg4hBhOgaQBOAaA4BBQAdAeAAA3QAAAPgCAQQgTBGggBGQgGARgKAOQgXAfgsAUQgeAMgeAIQgsALgtABIgKABIAAAAIgBAAQgkAAgggOIgCgBIgDgCIgBgBQg2gdgcglQgOgSgIgVQgcg+gKhAQgCgOAAgOQAAgcAHgcQAMgvA2gsQAegaAogLIAAgBIABAAQAbgGAeAAIAAAAIAAAAQAgAAAjAHIAAAAIADABIAIACIACAAQBLAXAyA3QAcAkAGA0QAEAhAAAiIgBAoQgFA2hDAnIhLAdQgQAEgPAAIAAAAIgBAAQgggBgcgQIgKgIQgYgSgWgjIgTgxIATAxQAWAjAYASIAKAIQAcAQAgABIABAAIAAAAQAPAAAQgEIBLgdQBDgnAFg2IABgoQAAgigEghQgGg0gcgkQgyg3hLgXIgCAAIgIgCIgDgBIAAAAQgjgHggAAIAAAAIAAAAQgeAAgbAGIgBAAIAAABQgoALgeAaQg2AsgMAvQgHAcAAAcQAAAOACAOQAKBAAcA+QAIAVAOASQAcAlA2AdIABABIADACIACABQAgAOAkAAIABAAIAAAAgAc2CeIAFAAIACgBIAUgCQAtgIAkgdQAfgYAHgeQAEgNAAgNQAAgXgLgXQgTgug3glIgCgBIgCgBIAAgBQgngWg3AAIAAAAIAAAAIgZABIgBAAIgRADQgmAIgrAbQgcAnAAApIABARIgBgRQAAgpAcgnQArgbAmgIIARgDIABAAIAZgBIAAAAIAAAAQA3AAAnAWIAAABIACABIACABQA3AlATAuQALAXAAAXQAAANgEANQgHAegfAYQgkAdgtAIIgUACIgCABIgFAAIAAAAIgBAAQgUAAgBgOQABAOAUAAIABAAIAAAAgActB7IAWgGQAqgOAOgkQARgiAAgdQAAgRgGgPQgJgVgPgTIgCgBQgfgigngBIAAAAIgBAAQgJAAgKACIgBAAQgPADgPALQgIAFgIAJQgSAVAAAVQAAAGACAHQANAnAnAFIACABIABAAIACABIANABIAAAAIAAAAIAGAAIABgBQAUgCAPgQQANgMAAgOQAAgFgCgGQgGgVgagEIgBAAIgBAAIgGgBIAAAAIAAAAQgMABgLAKIgBABIAAAAIgCACIgEAFQgEAGAAAIQAAAFACAFIAAABIABABQAEALAHAAIABAAIAAAAIABAAIAAAAIABAAIABgBIAFgCIgFACIgBABIgBAAIAAAAIgBAAIAAAAIgBAAQgHAAgEgLIgBgBIAAgBQgCgFAAgFQAAgIAEgGIAEgFIACgCIAAAAIABgBQALgKAMgBIAAAAIAAAAIAGABIABAAIABAAQAaAEAGAVQACAGAAAFQAAAOgNAMQgPAQgUACIgBABIgGAAIAAAAIAAAAIgNgBIgCgBIgBAAIgCgBQgngFgNgnQgCgHAAgGQAAgVASgVQAIgJAIgFQAPgLAPgDIABAAQAKgCAJAAIABAAIAAAAQAnABAfAiIACABQAPATAJAVQAGAPAAARQAAAdgRAiQgOAkgqAOIgWAGIg7gfQgxgUgPgqQgMgeAAgcQAAgUAGgUQgGAUAAAUQAAAcAMAeQAPAqAxAUIA7AfgAPUCpQgKgRgGgTQgsiIAEgPQAzi3B9g8QAigSApgHQC9gnCXDCQAeB9guCBQgJAZgPAVQgyBHh2AjQgoALgwAHQi2gVg5hngASrD9IAKgBQAtgBAsgLQAegIAegMQAsgUAXgfQAKgOAGgRQAghGAThGQACgQAAgPQAAg3gdgeQg4hBhOgaQBOAaA4BBQAdAeAAA3QAAAPgCAQQgTBGggBGQgGARgKAOQgXAfgsAUQgeAMgeAIQgsALgtABIgKABIAAAAIgBAAQgkAAgggOIgCgBIgDgCIgBgBQg2gdgcglQgOgSgIgVQgcg+gKhAQgCgOAAgOQAAgcAHgcQAMgvA2gsQAegaAogLIAAgBIABAAQAbgGAeAAIAAAAIAAAAQAgAAAjAHIAAAAIADABIAIACIACAAQBLAXAyA3QAcAkAGA0QAEAhAAAiIgBAoQgFA2hDAnIhLAdQgQAEgPAAIAAAAIgBAAQgggBgcgQIgKgIQgYgSgWgjIgTgxIATAxQAWAjAYASIAKAIQAcAQAgABIABAAIAAAAQAPAAAQgEIBLgdQBDgnAFg2IABgoQAAgigEghQgGg0gcgkQgyg3hLgXIgCAAIgIgCIgDgBIAAAAQgjgHggAAIAAAAIAAAAQgeAAgbAGIgBAAIAAABQgoALgeAaQg2AsgMAvQgHAcAAAcQAAAOACAOQAKBAAcA+QAIAVAOASQAcAlA2AdIABABIADACIACABQAgAOAkAAIABAAIAAAAgATRCeIAFAAIACgBIAUgCQAtgIAkgdQAfgYAHgeQAEgNAAgNQAAgXgLgXQgTgug3glIgCgBIgCgBIAAAAQgmgXg3AAIgBAAIAAAAIgZABIgBAAIgRADQgmAIgrAbQgcAnAAApIABARIgBgRQAAgpAcgnQArgbAmgIIARgDIABAAIAZgBIAAAAIABAAQA3AAAmAXIAAAAIACABIACABQA3AlATAuQALAXAAAXQAAANgEANQgHAegfAYQgkAdgtAIIgUACIgCABIgFAAIAAAAIgBAAQgUAAgBgOQABAOAUAAIABAAIAAAAgATIB7IAWgGQAqgOAOgkQARgiAAgdQAAgRgGgPQgJgVgPgTIgCgBQgfgigngBIAAAAIgBAAQgJAAgKACIgBAAQgPADgPALQgIAFgIAJQgSAVAAAUQAAAHACAHQANAnAnAFIACABIABAAIACABIANABIAAAAIAAAAIAGAAIABgBQAUgCAPgQQANgMAAgOQAAgFgCgGQgGgVgagEIgBAAIgBAAIgGgBIAAAAIAAAAQgMABgLAKIgBABIAAAAIgCACIgEAFQgEAGAAAIQAAAFACAFQAEAMAIABIABAAIAAAAIABAAIAAAAIABAAIABgBIAFgCIgFACIgBABIgBAAIAAAAIgBAAIAAAAIgBAAQgIgBgEgMQgCgFAAgFQAAgIAEgGIAEgFIACgCIAAAAIABgBQALgKAMgBIAAAAIAAAAIAGABIABAAIABAAQAaAEAGAVQACAGAAAFQAAAOgNAMQgPAQgUACIgBABIgGAAIAAAAIAAAAIgNgBIgCgBIgBAAIgCgBQgngFgNgnQgCgHAAgHQAAgUASgVQAIgJAIgFQAPgLAPgDIABAAQAKgCAJAAIABAAIAAAAQAnABAfAiIACABQAPATAJAVQAGAPAAARQAAAdgRAiQgOAkgqAOIgWAGIg7gfQgxgUgPgqQgMgeAAgcQAAgUAGgUQgGAUAAAUQAAAcAMAeQAPAqAxAUIA7AfgAFxCpQgKgRgGgTQgsiIAEgPQAzi3B9g8QAigSApgHQC9gnCXDCQAeB9guCBQgJAZgPAVQgyBHh2AjQgoALgwAHQi2gVg5hngAJID9IAKgBQAtgBAsgLQAegIAegMQAsgUAXgfQAKgOAGgRQAghGAThGQACgQAAgPQAAg3gdgeQg4hBhOgaQBOAaA4BBQAdAeAAA3QAAAPgCAQQgTBGggBGQgGARgKAOQgXAfgsAUQgeAMgeAIQgsALgtABIgKABIAAAAIgBAAQgkAAgggOIgCgBIgDgCIgBgBQg2gdgcglQgOgSgIgVQgcg+gKhAQgCgOAAgOQAAgcAHgcQAMgvA2gsQAegaAogLIAAgBIABAAQAbgGAeAAIAAAAIAAAAQAgAAAjAHIAAAAIADABIAIACIACAAQBLAXAyA3QAcAkAGA0QAEAhAAAiIgBAoQgFA2hDAnIhLAdQgQAEgPAAIAAAAIgBAAQgggBgcgQIgKgIQgYgSgWgjIgTgxIATAxQAWAjAYASIAKAIQAcAQAgABIABAAIAAAAQAPAAAQgEIBLgdQBDgnAFg2IABgoQAAgigEghQgGg0gcgkQgyg3hLgXIgCAAIgIgCIgDgBIAAAAQgjgHggAAIAAAAIAAAAQgeAAgbAGIgBAAIAAABQgoALgeAaQg2AsgMAvQgHAcAAAcQAAAOACAOQAKBAAcA+QAIAVAOASQAcAlA2AdIABABIADACIACABQAgAOAkAAIABAAIAAAAgAJuCeIAFAAIACgBIAUgCQAtgIAkgdQAfgYAHgeQAEgNAAgNQAAgXgLgXQgTgug3glIgCgBIgCgBIAAgBQgngWg3AAIAAAAIAAAAIgZABIgBAAIgRADQgmAIgrAbQgcAnAAApIABARIgBgRQAAgpAcgnQArgbAmgIIARgDIABAAIAZgBIAAAAIAAAAQA3AAAnAWIAAABIACABIACABQA3AlATAuQALAXAAAXQAAANgEANQgHAegfAYQgkAdgtAIIgUACIgCABIgFAAIAAAAIgBAAQgUAAgBgOQABAOAUAAIABAAIAAAAgAJlB7IAWgGQAqgOAOgkQARgiAAgdQAAgRgGgPQgJgVgPgTIgCgBQgfgigngBIAAAAIgBAAQgJAAgKACIgBAAQgPADgPALQgIAFgIAJQgSAVAAAVQAAAGACAHQANAnAnAFIACABIABAAIACABIANABIAAAAIAAAAIAGAAIABgBQAUgCAPgQQANgMAAgOQAAgFgCgGQgGgVgagEIgBAAIgBAAIgGgBIAAAAIAAAAQgMABgLAKIgBABIAAAAIgCACIgEAFQgEAGAAAIQAAAFACAFIAAABIABABQAEALAHAAIABAAIAAAAIABAAIAAAAIABAAIABgBIAFgCIgFACIgBABIgBAAIAAAAIgBAAIAAAAIgBAAQgHAAgEgLIgBgBIAAgBQgCgFAAgFQAAgIAEgGIAEgFIACgCIAAAAIABgBQALgKAMgBIAAAAIAAAAIAGABIABAAIABAAQAaAEAGAVQACAGAAAFQAAAOgNAMQgPAQgUACIgBABIgGAAIAAAAIAAAAIgNgBIgCgBIgBAAIgCgBQgngFgNgnQgCgHAAgGQAAgVASgVQAIgJAIgFQAPgLAPgDIABAAQAKgCAJAAIABAAIAAAAQAnABAfAiIACABQAPATAJAVQAGAPAAARQAAAdgRAiQgOAkgqAOIgWAGIg7gfQgxgUgPgqQgMgeAAgcQAAgUAGgUQgGAUAAAUQAAAcAMAeQAPAqAxAUIA7AfgAjzCpQgKgRgGgTQgsiIAEgPQAzi3B9g8QAigSApgHQC8gnCXDCQAeB9guCBQgJAZgPAVQgyBHh2AjQgoALgvAHQi2gVg5hngAgcD9IAKgBQAsgBAsgLQAegIAegMQAsgUAXgfQAKgOAGgRQAghGAThGQACgQAAgPQAAg3gdgeQg4hBhOgaQBOAaA4BBQAdAeAAA3QAAAPgCAQQgTBGggBGQgGARgKAOQgXAfgsAUQgeAMgeAIQgsALgsABIgKABIAAAAIgBAAQgkAAgggOIgCgBIgDgCIgBgBQg2gdgcglQgOgSgIgVQgcg+gKhAQgCgOAAgOQAAgcAHgcQAMgvA2gsQAegaAogLIAAgBIABAAQAbgGAeAAIAAAAIAAAAQAgAAAiAHIAAAAIADABIAIACIACAAQBLAXAyA3QAcAkAGA0QAEAhAAAiIgBAoQgFA2hDAnIhLAdQgQAEgPAAIAAAAIgBAAQgfgBgcgQIgKgIQgYgSgWgjIgTgxIATAxQAWAjAYASIAKAIQAcAQAfABIABAAIAAAAQAPAAAQgEIBLgdQBDgnAFg2IABgoQAAgigEghQgGg0gcgkQgyg3hLgXIgCAAIgIgCIgDgBIAAAAQgigHggAAIAAAAIAAAAQgeAAgbAGIgBAAIAAABQgoALgeAaQg2AsgMAvQgHAcAAAcQAAAOACAOQAKBAAcA+QAIAVAOASQAcAlA2AdIABABIADACIACABQAgAOAkAAIABAAIAAAAgAAJCeIAFAAIACgBIAUgCQAtgIAkgdQAfgYAHgeQAEgNAAgNQAAgXgLgXQgTgug3glIgCgBIgCgBIAAAAQgmgXg2AAIgBAAIAAAAIgZABIgBAAIgRADQgmAIgrAbQgcAnAAApIABARIgBgRQAAgpAcgnQArgbAmgIIARgDIABAAIAZgBIAAAAIABAAQA2AAAmAXIAAAAIACABIACABQA3AlATAuQALAXAAAXQAAANgEANQgHAegfAYQgkAdgtAIIgUACIgCABIgFAAIAAAAIgBAAQgTAAgBgOQABAOATAAIABAAIAAAAgAAAB7IAWgGQAqgOAOgkQARgiAAgdQAAgRgGgPQgJgVgPgTIgCgBQgfgigmgBIAAAAIgBAAQgJAAgKACIgBAAQgPADgPALQgIAFgIAJQgSAVAAAUQAAAHACAHQANAnAnAFIACABIABAAIACABIANABIAAAAIAAAAIAGAAIABgBQATgCAPgQQANgMAAgOQAAgFgCgGQgGgVgagEIgBAAIAAAAIgGgBIAAAAIAAAAQgMABgLAKIgBABIAAAAIgCACIgEAFQgEAGAAAIQAAAFACAFQAEAMAIABIABAAIAAAAIABAAIAAAAIABAAIABgBIAFgCIgFACIgBABIgBAAIAAAAIgBAAIAAAAIgBAAQgIgBgEgMQgCgFAAgFQAAgIAEgGIAEgFIACgCIAAAAIABgBQALgKAMgBIAAAAIAAAAIAGABIAAAAIABAAQAaAEAGAVQACAGAAAFQAAAOgNAMQgPAQgTACIgBABIgGAAIAAAAIAAAAIgNgBIgCgBIgBAAIgCgBQgngFgNgnQgCgHAAgHQAAgUASgVQAIgJAIgFQAPgLAPgDIABAAQAKgCAJAAIABAAIAAAAQAmABAfAiIACABQAPATAJAVQAGAPAAARQAAAdgRAiQgOAkgqAOIgWAGIg6gfQgxgUgPgqQgMgeAAgcQAAgUAGgUQgGAUAAAUQAAAcAMAeQAPAqAxAUIA6AfgAtYCpQgKgRgGgTQgsiIAEgPQAzi3B9g8QAigSApgHQC9gnCXDCQAeB9guCBQgJAZgPAVQgyBHh2AjQgoALgwAHQi2gVg5hngAqBD9IAKgBQAtgBAsgLQAegIAegMQAsgUAXgfQAKgOAGgRQAghGAThGQACgQAAgPQAAg3gdgeQg4hBhOgaQBOAaA4BBQAdAeAAA3QAAAPgCAQQgTBGggBGQgGARgKAOQgXAfgsAUQgeAMgeAIQgsALgtABIgKABIAAAAIgBAAQgkAAgggOIgCgBIgDgCIgBgBQg2gdgcglQgOgSgIgVQgcg+gKhAQgCgOAAgOQAAgcAHgcQAMgvA2gsQAegaAogLIAAgBIABAAQAbgGAeAAIAAAAIAAAAQAgAAAjAHIAAAAIADABIAIACIACAAQBLAXAyA3QAcAkAGA0QAEAhAAAiIgBAoQgFA2hDAnIhLAdQgQAEgPAAIAAAAIgBAAQggAAgcgRIgKgIQgYgSgWgjIgTgxIATAxQAWAjAYASIAKAIQAcARAgAAIABAAIAAAAQAPAAAQgEIBLgdQBDgnAFg2IABgoQAAgigEghQgGg0gcgkQgyg3hLgXIgCAAIgIgCIgDgBIAAAAQgjgHggAAIAAAAIAAAAQgeAAgbAGIgBAAIAAABQgoALgeAaQg2AsgMAvQgHAcAAAcQAAAOACAOQAKBAAcA+QAIAVAOASQAcAlA2AdIABABIADACIACABQAgAOAkAAIABAAIAAAAgApbCeIAFAAIACgBIAUgCQAtgIAkgdQAfgYAHgeQAEgNAAgNQAAgXgLgXQgTgug3glIgCgBIgCgBIAAAAQgmgXg3AAIgBAAIAAAAIgZABIgBAAIgRADQgmAIgrAbQgcAnAAApIABARIgBgRQAAgpAcgnQArgbAmgIIARgDIABAAIAZgBIAAAAIABAAQA3AAAmAXIAAAAIACABIACABQA3AlATAuQALAXAAAXQAAANgEANQgHAegfAYQgkAdgtAIIgUACIgCABIgFAAIAAAAIgBAAQgUAAgBgOQABAOAUAAIABAAIAAAAgApkB7IAWgGQAqgOAOgkQARgiAAgdQAAgRgGgPQgJgVgPgTIgCgBQgfgigngBIAAAAIgBAAQgJAAgKACIgBAAQgPADgPALQgIAFgIAJQgSAVAAAUQAAAHACAHQANAnAnAFIACABIABAAIACABIANABIAAAAIAAAAIAGAAIABgBQAUgCAPgQQANgMAAgOQAAgFgCgGQgGgVgagEIgBAAIgBAAIgGgBIAAAAIAAAAQgMABgLAKIgBABIAAAAIgCACIgEAFQgEAGAAAIQAAAFACAFQAEAMAIABIABAAIAAAAIABAAIAAAAIABAAIABgBIAFgCIgFACIgBABIgBAAIAAAAIgBAAIAAAAIgBAAQgIgBgEgMQgCgFAAgFQAAgIAEgGIAEgFIACgCIAAAAIABgBQALgKAMgBIAAAAIAAAAIAGABIABAAIABAAQAaAEAGAVQACAGAAAFQAAAOgNAMQgPAQgUACIgBABIgGAAIAAAAIAAAAIgNgBIgCgBIgBAAIgCgBQgngFgNgnQgCgHAAgHQAAgUASgVQAIgJAIgFQAPgLAPgDIABAAQAKgCAJAAIABAAIAAAAQAnABAfAiIACABQAPATAJAVQAGAPAAARQAAAdgRAiQgOAkgqAOIgWAGIg7gfQgxgUgPgqQgMgeAAgcQAAgUAGgUQgGAUAAAUQAAAcAMAeQAPAqAxAUIA7AfgA29CpQgKgRgGgTQgsiIAEgPQAzi3B9g8QAigSApgHQC9gnCXDCQAeB9guCBQgJAZgPAVQgyBHh2AjQgoALgwAHQi2gVg5hngAzmD9IAKgBQAtgBAsgLQAegIAegMQAsgUAXgfQAKgOAGgRQAghGAThGQACgQAAgPQAAg3gdgeQg4hBhOgaQBOAaA4BBQAdAeAAA3QAAAPgCAQQgTBGggBGQgGARgKAOQgXAfgsAUQgeAMgeAIQgsALgtABIgKABIAAAAIgBAAQgkAAgggOIgCgBIgDgCIgBgBQg2gdgcglQgOgSgIgVQgcg+gKhAQgCgOAAgOQAAgcAHgcQAMgvA2gsQAegaAogLIAAgBIABAAQAbgGAeAAIAAAAIAAAAQAgAAAjAHIAAAAIADABIAIACIACAAQBLAXAyA3QAcAkAGA0QAEAhAAAiIgBAoQgFA2hDAnIhLAdQgQAEgPAAIAAAAIgBAAQggAAgcgRIgKgIQgYgSgWgjIgTgxIATAxQAWAjAYASIAKAIQAcARAgAAIABAAIAAAAQAPAAAQgEIBLgdQBDgnAFg2IABgoQAAgigEghQgGg0gcgkQgyg3hLgXIgCAAIgIgCIgDgBIAAAAQgjgHggAAIAAAAIAAAAQgeAAgbAGIgBAAIAAABQgoALgeAaQg2AsgMAvQgHAcAAAcQAAAOACAOQAKBAAcA+QAIAVAOASQAcAlA2AdIABABIADACIACABQAgAOAkAAIABAAIAAAAgAzACeIAFAAIACgBIAUgCQAtgIAkgdQAfgYAHgeQAEgNAAgNQAAgXgLgXQgTgug3glIgBgBIgBAAIgCgBIAAAAQgmgXg3AAIgBAAIAAAAIgZABIgBAAIgRADQgmAIgrAbQgcAnAAApIABARIgBgRQAAgpAcgnQArgbAmgIIARgDIABAAIAZgBIAAAAIABAAQA3AAAmAXIAAAAIACABIABAAIABABQA3AlATAuQALAXAAAXQAAANgEANQgHAegfAYQgkAdgtAIIgUACIgCABIgFAAIAAAAIgBAAQgTAAgCgNIAAgBIAAABQACANATAAIABAAIAAAAgAzJB7IAWgGQAqgOAOgkQARgiAAgdQAAgRgGgPQgJgVgPgTIgBgBQgfgigogBIAAAAIgBAAQgJAAgKACIgBAAQgPADgPALQgIAFgIAJQgSAVAAAUQAAAHACAHQANAnAnAFIACABIABAAIACABIANABIAAAAIAAAAIAGAAIABgBQAUgCAPgQQANgMAAgOQAAgFgCgGQgGgVgagEIgBAAIgBAAIgGgBIAAAAIAAAAQgMABgMALIAAAAIAAAAIgCACIgEAFQgEAGAAAIQAAAFACAFQAEAMAIABIABAAIAAAAIABAAIAAAAIABAAIABgBIAFgCIgFACIgBABIgBAAIAAAAIgBAAIAAAAIgBAAQgIgBgEgMQgCgFAAgFQAAgIAEgGIAEgFIACgCIAAAAIAAAAQAMgLAMgBIAAAAIAAAAIAGABIABAAIABAAQAaAEAGAVQACAGAAAFQAAAOgNAMQgPAQgUACIgBABIgGAAIAAAAIAAAAIgNgBIgCgBIgBAAIgCgBQgngFgNgnQgCgHAAgHQAAgUASgVQAIgJAIgFQAPgLAPgDIABAAQAKgCAJAAIABAAIAAAAQAoABAfAiIABABQAPATAJAVQAGAPAAARQAAAdgRAiQgOAkgqAOIgWAGIg7gfQgxgUgPgqQgMgeAAgcQAAgUAGgUQgGAUAAAUQAAAcAMAeQAPAqAxAUIA7AfgEggiACpQgKgRgGgTQgsiIAEgPQAzi3B9g8QAigSApgHQC9gnCXDCQAeB9guCBQgJAZgPAVQgyBHh2AjQgoALgwAHQi2gVg5hngA9LD9IAKgBQAtgBAsgLQAegIAegMQAsgUAXgfQAKgOAGgRQAghGAThGQACgQAAgPQAAg3gdgeQg4hBhOgaQBOAaA4BBQAdAeAAA3QAAAPgCAQQgTBGggBGQgGARgKAOQgXAfgsAUQgeAMgeAIQgsALgtABIgKABIAAAAIgBAAQgkAAgggOIgCgBIgDgCIgBgBQg2gdgcglQgOgSgIgVQgcg+gKhAQgCgOAAgOQAAgcAHgcQAMgvA2gsQAegaAogLIAAgBIABAAIAEgBIABAAQAZgFAbAAIAAAAIAAAAQAgAAAiAHIABAAIADABIAIACIACAAQBLAXAyA3QAcAkAGA0QAEAhAAAiIgBAoQgFA2hDAnIhLAdQgQAEgPAAIAAAAIgBAAQgggBgcgQIgKgIQgYgSgWgjIgTgxIATAxQAWAjAYASIAKAIQAcAQAgABIABAAIAAAAQAPAAAQgEIBLgdQBDgnAFg2IABgoQAAgigEghQgGg0gcgkQgyg3hLgXIgCAAIgIgCIgDgBIgBAAQgigHggAAIAAAAIAAAAQgbAAgZAFIgBAAIgEABIgBAAIAAABQgoALgeAaQg2AsgMAvQgHAcAAAcQAAAOACAOQAKBAAcA+QAIAVAOASQAcAlA2AdIABABIADACIACABQAgAOAkAAIABAAIAAAAgA8lCeIAFAAIACgBIAUgCQAtgIAkgdQAfgYAHgeQAEgNAAgNQAAgXgLgXQgTgug3glIgBgBIgBAAIgCgBIAAAAQgmgXg3AAIgBAAIAAAAIgZABIgBAAIgRADQgmAIgrAbQgcAnAAApIABARIgBgRQAAgpAcgnQArgbAmgIIARgDIABAAIAZgBIAAAAIABAAQA3AAAmAXIAAAAIACABIABAAIABABQA3AlATAuQALAXAAAXQAAANgEANQgHAegfAYQgkAdgtAIIgUACIgCABIgFAAIAAAAIgBAAQgTAAgCgNIAAgBIAAABQACANATAAIABAAIAAAAgA8uB7IAWgGQAqgOAOgkQARgiAAgdQAAgRgGgPQgJgVgPgTIgCgBQgfgjgnAAIAAAAIgBAAIgRACIAAAAIgCAAIgBAAQgPADgPALQgIAFgIAJQgSAVAAAUQAAAHACAHQANAnAnAFIACABIABAAIACABIANABIAAAAIAAAAIAGAAIABgBQAUgCAPgQQANgMAAgOQAAgFgCgGQgGgVgagEIgBAAIgBAAIgGgBIAAAAIAAAAQgMABgLAKIgDADIgEAFQgEAGAAAIQAAAFACAFQAEAMAIABIABAAIAAAAIABAAIAAAAIABAAIABgBIAFgCIgFACIgBABIgBAAIAAAAIgBAAIAAAAIgBAAQgIgBgEgMQgCgFAAgFQAAgIAEgGIAEgFIADgDQALgKAMgBIAAAAIAAAAIAGABIABAAIABAAQAaAEAGAVQACAGAAAFQAAAOgNAMQgPAQgUACIgBABIgGAAIAAAAIAAAAIgNgBIgCgBIgBAAIgCgBQgngFgNgnQgCgHAAgHQAAgUASgVQAIgJAIgFQAPgLAPgDIABAAIACAAIAAAAIARgCIABAAIAAAAQAnAAAfAjIACABQAPATAJAVQAGAPAAARQAAAdgRAiQgOAkgqAOIgWAGIg7gfQgxgUgPgqQgMgeAAgcQAAgUAGgUQgGAUAAAUQAAAcAMAeQAPAqAxAUIA7Afg");
	this.shape_6.setTransform(215.941,235.1062);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3E0AD").s().p("AgLErIAZgKIADgDIACBZgAgSELQALgiAHghIAQAAIAAAtIgiAaIAAgEgAACA6IgBgJQgCgjgGgjIAAgFIASAPIACBFgAgFhBIAEiAIAIAAIADCOgAAClPIAAAAIABgfIABgIIABAng");
	this.shape_7.setTransform(366.55,152.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFEFCA").s().p("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");
	this.shape_8.setTransform(204.175,109.5453);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#83A4AC").s().p("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");
	this.shape_9.setTransform(212.125,102.0379);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCB798").s().p("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");
	this.shape_10.setTransform(212.775,107.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BB9065").s().p("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");
	this.shape_11.setTransform(214.4417,117.7438);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DB7A4D").s().p("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");
	this.shape_12.setTransform(204.4197,10.155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,431.9,266.5);
p.frameBounds = [rect];


(lib.raft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.plant();
	this.instance.setTransform(142.1,40.1,0.1108,0.1489,0,0,180);

	this.instance_1 = new lib.plant();
	this.instance_1.setTransform(401,20,0.1316,0.1489);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAAAAIAAAA");
	this.shape.setTransform(139.775,337.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("ASfq9QgBgGgBgGAUHrJIAAAMAUJq9IAAgMATEmbQgKhKgJhKAUPmhIgDiOATSkzQgDgagEgaQgBgHgBgHAURkzIgBhGAKrrJIAAAMAIcq9QgBgGgBgGAKqovIAAAWAJgkzQgaiDgUh5AKqnbIgBCoAXYIRIATAxQAXAjAXASQAFAEAGAEQApAYAzgLIAAgBIBLgcQBCgnAFg2QAEg5gHgzQgFg0gdgkQgxg3hMgXQglgJgigBAXpD8QgBAAgBAAIgBABQgnALgfAaQg1AsgNAvQgKAqAFArQALBAAcA+QAHAVAPASQAbAlA2AdQAoAUAugDQAMAAAMgCAUWhPIACBYIgghMATxhXQAAgDgBgDAbDKwQAHgDAHgDQAtgUAWgfQALgOAFgRQAhhGAShHQAKhPglglQg2hAhOgaAKoimIgBDHQgXhlgUhiAUUimIABAuA9Yq9QAAgGgBgGA7grJIAAAMA7ilKIAAAXA8tkzQgLhUgMh2A7hoCIgBCRAg0q9QgBgGgBgGABPrJIgBAMAgLmsQAAgDgBgDQAAgCAAgBQgKg+gJg8ABLlKIgBAXABNovIgCC+Aqwq9QgBgGgBgGAoSrJIAAAMAyCrJQAAAGABAGAzUmsQgCgQgDgRAx+k7QAAAEAAAEAzBkzQgFgcgEgcQgCgKgBgJAx+odQABBegCBdAoSovIAADWApskzQgah7gViBAoSh6IgBC5QAAgBAAAAQgXhSgVhVQgFgWgFgXQgCgIgCgIAx7iAIAAAAAx7hnQAAACAAABQAAABAAABIAAAKIAAAGAyliIQAAgCgBgCAyQgWQgGgggGghQgBgGgBgHAx7hYIAAgGAyIBIQgBgPgBgPQgBgWgCgXQAAAAAAAAIAAgCAyNALQADAiACAbAyEBzQABAPABAMQAGA/gGg6QgBgOgBgSIgEgrABIhwIgCCwQgBgCAAgDQgKg6gKg4QgCgKgBgKQgCgHgBgHAAlh9QgDgVgEgUABJimIAAAO");
	this.shape_1.setTransform(295.0064,312.3892);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#814229").ss(1,1,1).p("AePnwIAThgQABgzgEgxQgFg4gMg2QgdgagEAZQgtAsguAqAd1r+IAGAlQAEATADASQAHA1gHArQgCAygKAyQgCAGgBAHAd1r+IhUBKIgPANAePnwIAAAAIgBAEQgBAHgCAHIgCALAcSovIBMA7IAVARQgEASgGASQAVARAIgYQABgEABgFAdpm/IhQhAIgHgFAdtsjIAIAlAXXG4QgIAHgHAIQgDADgCACQgwAugxAsQgFAEgFAFQgDADgDACQgZAWgZAVQgLAJgLAJIhOhCIhlhWQgEgRgDgRQgGgFgEgCQABgJAHADICaCFIA4AwAXuGxQABgMAHAEIAMAKIARAOIABACIBaBNIBSBHIADACIgBAAQgKAJgLAJIgBAAIgDAEIgtAvQgSAOgSAOQgFAEgEADQgRANgSANQgBABgBABQgJAHgIAGQgSANgSANQgBAAAAABAX/HYQgDgQgEgPQgFgFgFgDQgUgNgDAUIAIAlIAGAlQAEASACASQABAEABAFQAFAwgGAoQgBAWgCAWQgBAFAAAEQgBADAAAEQgEAagGAbQgEASgGASQAKAIAHgBQAKgDAEgUIACgGIAAgBIAAAAAatJrIhfhQIg5gwIgCgCIgTgQIgBgBAYMJJIgBgHQAAgKgBgJQAAgFgBgEQgDgkgGgjQgBgEAAgDAXfHdIgSAQIgFAEIhGA+IhOBEIBdBJIBMA8AYMJJQABAMAAAMQACApgGApQgBAFgBAEQgGAigMAiQAAABgBABIAAADAYFKyIAHgnQABghgBghAbXJsIAGAFICQByIAYAUIACABAbGKKIgGgFIAXgZAbFKLIABgBAatJrQAAAAAAAAIgBAAAbFKLIhLA8IhgBMIgEACIgaAKIgCABIgTAHQgFACACgGAd/G4IgEgGIgBgBQgBABAAABQgMALgMAMQgBABgBABQgkAiglAiQgEAEgEADQgBABgBABQglAggkAgAeCGwIAAgBQgDgYALAFIAOAMIChCLAeAG5IgBgBAeAG3QgBAAAAABAeAG3IAAACAeFHAIgFgHAeFHAIgCAGIgJAXIijCPAeFHAQgCgKgBgGQgCACAAAFAeHHcIAHAlQAEATACASQAHA1gGArQgDAxgJAwQAAABgBACQgBAGgCAHAeFHAQAOAlAHArQABAEAAAFQAEAcACAfQADBCgSBAQgFAQgFAQQgBABAAABEAhGAJjIgHgGEAhBAJoIgBAAQgLAJgLAKQgCACgDACQg3Asg3AqQgKAHgKAIIAShaQABgzgEgxQgEglgGgjIgjgeEAhGAJjIAAAqEAhGAJjIgNgwAeDHGIAEAWIiqCVEAg/AJdIiXh/AKtHXQgDgPgDgOQgFgFgFgDQAAgNAIADICcCHIA2AvQgLAJgKAJQgpAigqAhQgGAFgGAEQgDACgCACQgFAEgEADQgpAfgpAeAKdGyQgUgNgDAUIAIAlIAGAlQAEASACARQABAEABAFQAFAxgGAoQgBAWgCAVQgBAFAAAEQgFAfgGAeAK6I/QgBgIAAgIQgBgFAAgEQgEgogHgnAKkMAIAOhEIAJgwQABgngCgmQABAQABARQACAqgGApQgBAFgBAEQgGAigMAhgAKOHeIhcBRIhPBFIBcBIIA7AvIASAOQgEASgGASQAKAIAHgBQAKgCAEgVIACgJIABgEIAAAAAQvG2QgzAygzAvQgDACgCACQgGAFgGAGQgEADgEAEQgBABgBABQgbAYgcAXAN0KKIAXgZIBgBLIBJA6QgEASgFASIh3heIhAgyIg/AyIhwBZIgvARQgEACABgEANiJwIhNhBIhohYARGGwQgUgOgDAUIAHAlIAHAlQAEAUACASQABAEAAAFQAGAwgGAmQgBAXgDAXQgBAFAAAEQgEAegHAcARjJHQAAgMgBgMQgBgFAAgEQgEgngGgmARLMFIAPhJIAKgyQABgigCghQABANABAOQACApgGAoQgBAFgBAEQgHAlgNAkIAAABIAAAAQAxgkAygmQAFgEAGgFQApggAogiAQ2HbIhfBUIhMBCAUdKMIAXgZAUdKMIg9AwIhyBaIgXAJIgZAJQgFACAEgJQAJgDAEgUIABgEIAAAAIAAgBAQrMaQAKAJAIgCAKCMdIgKgJIhwhYIg8gvIAXgZAejLkQgMAJgNAIQgBABgCACAd2MVQABgDABgDQACgDACgDQAEgFAEgHQABgDACgCAd2MVQABABABAAQABABACADIgBAAQgDACABgEQAAgBAAgBAd8MbIgBgBIgDgCIg2grIgWgRIhnhRAd8MbQAUARAJgYIABgGIgeALQAAABAAABgEAhGAKNIh7BhIghAaIgQAGAd8MZIgBABAd2MVIiwiLAXTMcIh5hgIg9gwA9MsEIgLAdIg6AzIhqBcICJBsIAnAgEggSgI/IAXgZA9MsEIgLgPQgNANgNAMQgBABAAABQglAigkAiQgFAEgEADQglAigmAgQgLAJgKAJIgdgZIgBAAEghBgKXIAAABIAAAkIgBALEggkgJZQgOALgOAMQgCABgBABIgBApIAygoA9bmvQAAABABAAQABABACABA9bmvIhLg6IhshWEghBgKWIAyArA9MsEQgKgqAOAGIA4AwA9MsEQANAlAHArQAGAgABAkQADBCgSBAQgFARgGARA8Qn3QgFAEgGAEQgYASgYARA9Xm1QAEgIAIgPA8QnOIgYASIgvASQgEACABgGA8QrRIg8gzA9Xm8QgCAGgCAHA55J5IhYhKIhphZQAOAlAHArQABAEAAAFQAEAcACAfQADBCgSBAQgFAQgFAQQgBABAAABA55J5QgOAMgOAMQgCACgDACQg3Asg3AqQgWAQgXAQQgBABgCACA86HWIgLAdIhEA8IhfBTICtCKIADACA2sHAQgNAMgMANQgBAAgBABQgMAMgMALQgBABgBABQgcAagbAZQgFAEgFAFQghAdggAbQgLAJgLAJA2kHlIg7AzIgCACIgXAVIhXBMICbB6IAOALQgEASgGASQAKAIAHgBA5mKUIAXgZA86HWIgLgPQgNANgMAMQgBABgBABQgkAiglAiQgEAEgEADQgBABgBABQglAggkAgQgMAJgKAJIgyABIAAgSIAAgJIAAgaA86HWQgJgqAOAGICRB9IBBA4A2FHbQgDgNgDgNQgFgFgFgDQgBgQAJAEICXCCIA7AzQgLAJgKAJIhShFgA2VG5QgUgNgDAUIAIAlIAGAlQADAOACAOQABAEABAFQAHA1gHArQgCAngGAmQgCAMgDAMQgBAGgBAGA14JAQgBgJgBgIQAAgFgBgEQgDgmgHglA2NMBIADgPIAThfQABgqgCgpQABASABATQADA7gOA7QgDALgEAMQgCAHgDAIgAwDG7QghAggiAfQgBABgBABQgXAVgWAVQgFAEgFAFQgeAageAZAy+KPIAXgZICEBoIAlAdQgEASgFASIhPg+IhohSIh3BfIg4ArIgvASQgDABAAgBQAKgCAEgVIADgMAv8HgIhaBPIhRBHEggSAKBQgOALgOAMQgCABgUAGIABAqIBEguIAXgZEghFAJBIBJAuAzQJ0Qg+A0g/AwQgRANgQAMQgQALgQAMIABgHA9JMrQABgDABgDQACgDACgDQAFgHAGgKA9EMwIgBAAQgEACACgGA9JMrQABABABAAQABABACADA5mKUIiTB0IgcAWIgHADIgoAPA2wMkIg3gsIh/hkA9JMrIgkgcIiSh0AiZHfQgDgQgDgQQgMgKgHgCQgBgOAJADICbCHIA2AvAiyGzQgMgDgCAOQgeAdgdAcQgCABgBABQgIAIgJAIQgQAOgPAPQgFAEgFAFQggAcggAbQgLAJgKAJIhWhJIhEg6QADAYACAZQABAEAAAFQAEAugBAwIgKA1IgMA5AigL7IAMg/IAJgqQABgzgEgwQAAgFgBgEQgEgkgGgjAARJwIhLhBIhfhQAi5HjIAHAlQADAPACAPQABAEABAFQAGA0gGAqQgBATgCATQgBAFAAAEQgEAigIAgQgEASgFASIhLg6Ig2gsIg2gqIg4AtIh3BeIgpAPIgGACQgIAEALgUAARJwQgoAigqAhQgGAFgFAEQgqAhgqAeADeG2QgsAsgtApQgIAHgIAHQgHAGgHAHQgFAEgFAFQgbAYgbAXQgLAJgLAJAiqMhIAggMIBwhZIA+gyIAXgZIBfBLIBKA6QgEASgGASIh3heIg/gyADmHbIhfBUIhMBCAjAG+IAHAlIhUBMIhUBMIgaAXIAXgZIADACIBTBBIAWASIABABIA8AvAD1GvQgUgMgDATIAIAlIAGAlQAEAUADASQAAAEABAFQAFAwgGAmQgBAXgDAXQAAAFgBAEQgEAegGAcAD1GvQAAgBABgBQACgEAFACIBRBGIBIA+IA5AxQgLAJgLAJIhPhDIgcgXIhIg9QgDgSgEgSQgEgEgEgDQgBAAgBgBgAETJgIAAgCQAAAAAAgBQAAgBAAgBQAAgCAAgDQgBgUgBgTQAAgFgBgEQgDgmgHglAETJgQAAABABACQACAogGAoQgBAFgBAEQgGAlgOAlIAPhKIAKgyQABgWgBgUgAKGG5Qg5A4g7A1QgFAEgFAFQgdAZgcAYAG5JyQgnAigpAfQgDADgEADQgCACgCABQgHAGgHAFQgCABgCACQgSANgRAOQgCABgCABQgVAQgWAQIAAgBAHMKNIg8AvIg/AyIgFAEIgdAXIgCACIgQAMIgwASQgFADAEgLQAJgDAEgUIABgDAvlG6QgagXgEAYIAHAlIAHAlQADARADAQQAAAEABAFQAGAygGApQgCAggEAgQgCAIgBAJQgDAQgEAQAvdHTQgDgMgCgLQgCgBgBgBQgBgSAJAEIAMAKIABAAIBUBKIABAAIA2AvIA6AyQgLAJgKAJIhRhEIgKgIIAAgBIhPhCIgBgCgAvaHlQgCgJgBgJAwHMfQAXATAIgjIALg1IAPhMQABgwgEgvQAAgFgBgEQgDghgFggQAJAeAFAjQABAEABAFQADAZABAcQADAygKAyQgCAJgCAIQgGAXgJAYAsgJzQgiAdgjAcQgQAMgRANQgKAIgLAJQgDACgDACQgDACgCACQgdAVgdAVApTG6Qg5A3g6A1QgFAEgFAFQgdAageAYAsOKOIAXgZIBoBRIA/AyIACACQgBAGgCAHQgDALgDAMQAAAAABAAQACACACABQATANAHggIAEgTApMHfIhbBQIhQBGAowHHQgBgGgBgGQgWgTgHAJQgBAAgBABQgBADgBAFIAHAlIAHAlQADARADARQAAAEABAFQAGAygGAoQgBAXgDAYQgBAFAAAFQgEAcgHAcAmNJ4QggAbggAZQgFAEgEADQgDADgDACQgFAEgFAEQgnAegnAdAowHHIB5BoIA/A3AonH1QgEgXgFgXAsOKOIhWBFIgUAPAt4LiIgjAcIgEADIgeAXIgvASQgKAFAWgnApXMeIhshVIhLg7ADaMaQALAJAHgCAjEMiQARAPAJgQQADgGACgJIAFgX");
	this.shape_2.setTransform(269.1,225.6764);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(0.1,1,1).p("Adjg7IAeBLAefAYIgNhcAe3g3IA9CCA8TAYIgbhhA9MhIIAlBbA++g1IA9BMA9dAWIgnhfA/kgKIAxAwA/zAVIAqAdA7BAsIgKhgA8ShKIAzBu");
	this.shape_3.setTransform(261.05,133.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape_4.setTransform(271.8957,256.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#96A8B4").s().p("ABtCyIgBgBIAEgOIgEAOIhLg7IhrhVIAXgaICIBsIAnAgIgMAXIAAAJIgDgBgAh7AgIADgDIAcgXIAVgRIBKhBIAJgIIBJhEIABgCIAagZIALAPIgLAdIg6AzIhpBbIgXAaIgxAngAhKAhgAh5gSIAAgkIAyArIgVARg");
	this.shape_5.setTransform(69.875,164.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6E3B3").s().p("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");
	this.shape_6.setTransform(272.891,358.5562);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3E0AD").s().p("AgLEdIAZgKIAEgCIABBZgAgSD+QAMgjAGghIAQAAIABAuIgjAaIAAgEgAACAsIgBgJQgCgjgGgiIAAgGIASAQIABBEgAgGhOIAFiBIAJAAIACCPgAAClcIAAAAIAAgNIADAAIAAANg");
	this.shape_7.setTransform(423.5,277.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFEFCA").s().p("AtYGgIAAgFIACAiIgCgdgAFuFJIgTh0IgEgUIgDgNIAdgXIgCCxIgBgFgAjqFLQgXhSgVhWIgKgsIgEgQIAEAAIA3ArIgBC7IAAgCgAOlBnIAtAAIgBDIQgYhngUhhgAtzC2IgCgOIAjgbIAAAPIAAAKIAAACIAAADIAAAEIAAALIgVA8IgMhAgAYaCwIAAgBIABgBIgBABIAAgCIABgDIAAAEIAAAHIgBgFgAFIBnIAqAAIAAANIgkAbIgGgogAt9CBIAIgBIgHAFIgBgEgAX7gmIgGg0IgDgOIASgQIAHAlQAEATACARIACAJgAOJgmQgaiDgTh5IB3AAIAAAWIAAA+IgBCogAE3gmIgBgJQgDgmgHglIBIA9IAAAXgAlDgmQgZh7gWiBICJAAIAADWIgfAdIgKAJgAuYgmIgJg4IgDgTIBOBDIAAAIgA3SgmIAXgVIAAAQIAAAFgA4AgmIgJhAIgIg/IgJhLIBdgEIABCTIg3AyIgJAJgAtWhVIAAAAIAAAAIgCi7IACC7IhUhJIgGghIgKhMIBigFIADAAQABBegCBdIAAAGIAAgGgAEjiqQgGgCgBAEIgTh6IBtAAIgCC/gAYkh9IACACIAAAGIgCgIgAXakiIBSAAIgFCAIgLgKQgHgDgBALQgUgNgDAUIgPAQIgUiVgAXImvIgBgNIBpAAIAAAMIAAABgANFmvIgCgNICRAAIAAANgAD0mvIgCgNICGAAIAAANgAmHmvIgBgNICfAAIAAANgAtZmvIAAgNIAAANIh0AAIgBgNIB1AAIABAAIAAANgA4vmvIgBgNIBzAAIAAANg");
	this.shape_8.setTransform(265.3,285.4026);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCB798").s().p("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");
	this.shape_9.setTransform(269.725,230.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#83A4AC").s().p("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");
	this.shape_10.setTransform(269.075,225.6498);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BB9065").s().p("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");
	this.shape_11.setTransform(271.3917,241.1938);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DB7A4D").s().p("A/2A/QgFgTAFgYIACgGQAEgOAJgSIAfgfIAHgFQAfgSAbgCQAKgCAJABIAlACIAZAAIAFgBIAagBIACAAQApgCAUAOQAGAEAEAGIALAEIAABcIgBAAIgKhgIAKBgIgegIIgzhuIAzBuIg0gMIgbhhIAbBhIgUgFIglhbIAlBbIg2ACIgnheIAnBeIgkACIg9hMIA9BMIgZACQgOAFgLAHIgxgvIAxAvQgMAHgKAGIgqgdIAqAdIgDACQgRAMgJANIgEAEIgBABQgFgIgDgKgAfgBRQgIgBgJgHQgPgZgkgZIgOhcIAOBcIgegIIgfhLIAfBLIgfgHIAAhEIAAgVQAYAEAXAIIASAGIATAHQAaALATASQARAZAGAYQAGAYgNAbIg9iBIA9CBQgGAIgIAAIgCAAgAfwBJgA8qASg");
	this.shape_12.setTransform(261.3697,133.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,20,569.7,368.9);
p.frameBounds = [rect];


(lib.GEZA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("בחרו ברפסודה עם התשובה הנכונה באמצעות העכבר", "normal 700 14px 'Heebo'");
	this.text.textAlign = "right";
	this.text.lineHeight = 21;
	this.text.lineWidth = 465;
	this.text.parent = this;
	this.text.setTransform(826.05,18.3);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7D3F16").ss(3,0,1).p("EAmFgCmIAAFNMhMJAAAIAAlNg");
	this.shape.setTransform(587.75,25.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7D3F16").ss(5,1,1).p("EhCsgFIMCFZAAAIAAKSMiFZAAAg");
	this.shape_1.setTransform(426.875,91.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#7D3F16").ss(5,0,1).p("EBAVAEeIAAo7EhAUAEeIAAo7");
	this.shape_2.setTransform(427.85,28.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EhCsAJCIAAqSMCFZAAAIAAKSgAs7jyIAAlPMBMJAAAIAAFPg");
	this.shape_3.setTransform(426.875,66.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.5,-2.5,858.8,129.8);
p.frameBounds = [rect];


(lib.btn_continue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.continue_btn();
	this.instance.setTransform(0,0,0.7027,0.7142);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_continue, rect = new cjs.Rectangle(0,0,182,75), [rect]);


(lib.waves = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.wave();
	this.instance.setTransform(0,245.8,1.6614,1.0098,0,180,0);

	this.instance_1 = new lib.wave();
	this.instance_1.setTransform(15,0,1.5353,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.waves, rect = new cjs.Rectangle(0,0,413.7,245.8), [rect]);


(lib.butterfly_open_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.butterfly_open();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.butterfly_open_1, rect = new cjs.Rectangle(0,0,141,136), [rect]);


(lib.questionNumber = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,0,0,0)").s().p("AwBLwIAA3fMAgDAAAIAAXfg");
	this.shape.setTransform(102.6,75.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.questionNumber, rect = new cjs.Rectangle(0,0,205.2,150.4), [rect]);


(lib.mc_raft_MAIN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AWUuOQgHhNgHhNQB0g/B0BUIAAAOQAAAWAAAWAZtuyQAAASAAASAW8oBQAAgBAAgBQgMh2gMh1AZpqvQAAAfgBAfQAAAUAAATQgBAigBAiAZmoFQAAACAAACAXygzQgRiHgPiGQgBgOgCgPQgBgLgCgMAZjloQgBAaAAAbQgBASAAASQgDBYgCBYAZrsAQgBAUAAAUAZdgzIgBgoIAAgEQgBAGAAAGIgBAfAZchbIgBAIAYYDuQgKhLgKhKAZjDoIgDiPAZlFVIgChFAYmFVQgEgagDgaQgBgHgBgHAZFIxQgBgDAAgCAZqI5IABBZIgfhMAZoHjIABAuAMcweQACAAABAAAMquOQAAgDAAgDQgBgKAAgKAMyrsQAAgKgBgKAMmvRQgEg+gBgKQA4g5CvAlIgGCUACwwzQACgBACgBQB7hHB9BKQAAAAABABIgCCKAGprbIgCDaAQApvIAABuAM+oBQgBgRgBgQQAAgFgBgEQgBgVAAgTQgDg+gDg1ANvgzQgUiLgNh7QgCgTgCgSQgBgLgBgLAQBrrIAABeACzuaQgIhKgGhJAmpwbQACgGACgFQAEgJAGgHQAyhBCrBkIAABWAmmurQgBgegBgdQgBgbAAgaAm7wbIASAAAmfr7QAAgDAAgCAi+uWIAAAIAi+sAIAAAYAi+q9IAAC8AmPoBQAAgCAAgBQgCgUgBgVQgGhTgFhVAldgzQgTiKgOiQQgCgSgCgSQAAgBAAgCADgoBQgBgOgCgNQgMhggKhdAEegzQgUiKgRiGQgEgYgDgYIAAgBAi/IOIAAC7QAAgBgBgBQgXhSgUhWQgGgWgFgWQgCgIgCgIAkZFVQgZh7gViBAi/BZIAADWAP+BZIAAAWAFIDdQgBgDAAgDQgBgCAAgCQgKg9gJg9AGeE+IAAAXAGcIZIgDCxQAAgDgBgCQgKg7gJg5QgCgKgCgKQgBgHgBgGAGcHjIAAANAF5ILQgEgUgDgUAP8HjIgBDIQgXhngUhhAP+CtIgCCoAOzFVQgZiDgUh5AGgBZIgCC/Ai+l0IAAFBAGll0IgDFBAP/l0IgBFBAwFwpQBwhPB0BMIAAARIgDB+AwFuOQAAgDgBgDAwLu3QgFgugBgnAvvrdQAAgFAAgFAvVoBQgBgNgBgMQgCgSgCgRQgHg5gIg4AvBk6QAAgDgBgCIgBgNA5twWIABAAIDkADIAAA4A2IuxIAAAjA5huOQgGhDgFhFA2JrWIAAAIA2KqiIAAChA43oBQgNhkgKhpA2PE/IAAAWA2OCHIgBCQA3aFVQgKhTgNh3AsvhWQAAARABASAuADdQgDgRgCgQAsrFNQAAAEAAAEAtuFVQgEgcgFgcQgBgJgCgKAsoIYQAAgHAAgIIAAgBAsoIiQAAABAAABQAAACAAABIABAKIgBgGAsnIxIgBAFAs9JyQgGgggGggQgBgHgBgHAs0LRQgBgOgBgQQgCgVgBgYQgBAAAAgBIAAgBAs5KVQACAhADAbAtRIBQgBgCAAgCAsrBrQABBegBBdA2LlFIgCESA4EgzQgMh5gOiSAsxL9QACAPABALQAFBAgFg7QgCgNgBgSIgDgsAy8OGIAAAAAxSQiQgSgFgQARQgCADgCADQgGAKAEAOQAFAQALgDQACgCADgB");
	this.shape.setTransform(216.725,123.9914);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AYJgEIgbAJAOMAEIgDABA3tgEIgbAJIAAAA");
	this.shape_1.setTransform(274.925,91.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#814229").ss(1,1,1).p("AePnvIAThfQABgzgEgyQgFg4gMg2QgdgZgEAYIAIAlIAGAlQAEATACASQAIA2gHAqQgCAzgKAxQgCAHgCAGAd1r9IhUBKIhXBMICUB1IAUAQQgDASgGASQAVARAIgYQABgEABgFAePnuIAAgBIgBAEQgBAHgCAIIgCALAdpm+IhRg/IhlhRIAXgZAXssBQgDgPgDgQQgGgFgEgDQAAgLAIADIA1AuAXcsoQgUgNgEAUIAIAlIhNBEIgGAFIgFAEIAAABIhTBIIBSBBIBXBEQgEASgFASQAKAJAHgCQAJgCAFgVIABgHAX5qPIAAgIQgBgOgCgOQgDgngHgnAagpoIhYhLIgrgkIgxgqAXMr8IAHAlQAEATABARQAIA2gGArQgCAXgCAWQgEAigIAiAXyomIAIgnQABgigCggQABALABAMQACAqgHApQgGAngOAoIgBACAY3roIA3AwIAHAFIAGAGIA7AzQgMAJgKAJQgtAmguAkQgVAQgXARQAAABgCABQgaAUgcATAZsoVIAAAAIhTBBIgVARIgwARQgEACACgGAazpOIg/AyAdtsiQg6A6g8A1QghAdggAcAQzspQABgJAHADICPB8IBDA6QgLAJgLAJIhYhMIhbhMQgDgRgEgRQgFgFgFgDQgUgNgDAUIAIAlIAGAlQAEATADASQAHA2gHAqQgBAXgDAXQgEAigHAhQgEASgGASQALAJAHgDQAJgDAEgTIABgEIABgBIAAAAIAOhGIACgMIACgLIAGgfQABgigBghQABANAAAOQACApgGApQgHApgOApIgBAAIABAAQA3gnA3grQAoggAogiARRqSQgBgQgCgRQgDgngHglAXEshQg5A5g8A1QgIAIgIAHQgZAWgZAVAUKpNIgyAoIh9BjIgvARQgGADAEgKAXBm9IhthWIgGgEIgSgOIgygoIAXgZAXXG5QgIAIgHAIQgDACgCADQgxAugwArQgFAFgFAEQgDADgEADQgZAWgZAVQgKAJgLAJIhPhDIhkhVQgEgRgDgRQgGgFgEgDQABgJAGADICbCFIA3AxAXuGyQABgLAHADIAMAKIARAPIABABIBaBNIBSBHIADACIgBABQgKAIgLAJQAAAAAAABIgBgBIgDAEIgtAvQgTAPgRAOQgFADgEAEQgRANgSANQgBABgBABQgJAGgIAHQgSAMgSANQgBA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");
	this.shape_2.setTransform(224.75,102.0645);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(0.1,1,1).p("AegAWIgOhbAe3g4IA9CBAdOADIgQhbAcVhdIAlBcAajhKIA9BMAcDAAIgmhfAZuAAIAqAdAZ9gfIAwAvAUyAZIgNhcAVKg2IA9CBAThAFIgQhbASohbIAlBbAQ2hIIA9BMASWADIgnhfATshQIApBhAdahTIAoBiAQBACIAqAdALXAbIgNhbALvgzIA9CBAJNhYIAlBbAKGAIIgRhbAHahFIA+BMAI7AFIgnhfAGmAFIAqAdAG1gaIAwAvAKRhOIApBiAByAUIgNhcACKg7IAbCCAAhAAIgQhbAgXhgIAkBcAiJhNIA8BNAgpgBIgnhgAAshVIApBhAi+gCIAqAcAnfguIA7B8IACAFAn3AgIgOhbAivgiIAwAwAqChTIAmBbApIANIgQhbAqTAKIgnhfAsoAKIApAdAsZgVIAwAvArzhAIA9BMAxFgsIAsB9IAGARAxcAjIgNhcAyuAPIgQhaIAAgBAzmhRIAkBbAz4ANIgmheIgBgBAyihGIAoBhA1/gTIAxAwA2OAMIArAdA6pgkIA9CBA7BAqIgKhfA8SAXIgchhA9dAUIgnhfA9MhJIAmBbA/yAUIApAdA/jgLIAwAvA++g2IA+BMA8RhLIAyBuA1Zg+IA9BMAo9hJIAoBiAQQgdIAwAw");
	this.shape_3.setTransform(216.7,9.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("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AFgCAEgEQAAgBAAAAQANgbgGgYQgGgZgSgZQgJgJgLgHQgLgIgNgFQgHgFgFgEQgEgEgRgEQgEgGgGgEQgUgOgpACIgCAAIgaABIgFAAQABAAABAAQAOgCAPABEghWgR2QACgDACgCQAJgMARgMQABgBACgBQAKgHAMgGQALgHAOgGIAZgBIAkgCIA2gCIAUAFIA0AMIAeAHQAkAaAPAZQANAKALgDQAHBCAHBAIAHAAICGAAA7dvgIAJAAA33vgIADAAIAtAAA4dvgIABAAIAlAAQAAgRAAgQA+f0RIgZABQgSgCgTAAQgJgBgKABQgbADgfASQgDACgEADIgfAfQgJASgEAPQgBADgBADQgFAYAFATQADAJAFAJQAAgBABAAEghcgPgQAAgbABgaQABgpABgoQABgIACgIEghdgPDIABgXQAAgDAAgDICFAAEghfgNsIABgnIAAgLA+tvgIBZAAIBKAAA83sbIglABIgyACA/CsVIieAGA37skQAAgCAAgCIgFAAA3OsqIgnABIgGABA3+pUIAIAAIGyAAA3+pUQAAgCAAgCQAAgTABgTQAAg+ABg9A40smIiGAGIgGAAIg/ADIgBAAA6ppUIAGAAIClAAA7AsgQAMBrALBhA3/iGQgBiEABiDQAAgFAAgFEghjgJUIG6AAA5cA5IgBAAIoGAXQAAgFAAgFIgBjMIHwAAIAEAAIBxAAIAGAAIHqAAIB0AAQAAgRAAgSIADkKA/PEDIiSAAIAAASQAAgEAAgEQgChfAAheEghgAE/IAAgEEghdAHvIgBAAIgCiZQAAgFAAgFA9RHfIgCABIgEAAA+tLzQACgHABgFQAIg9ABgrQACgUgJghIgVhfA+JHjIjUAMA38EDIABAAIBIAAA4UEDIAYAAQgBgDABgDQgBgHAAgIA7AEDIB6AAIAEAAA+lEDIBlAAIBTAAA8dLKQgag1gFhEQgCgUADghIADgnA3AHIIgQABA4hHOQAAACABADIADAOQABACAAACIAAACIABABQAAACABACQAAACAAACQABAAAAABQAZBfABBUQAAAJAAAIQAABngCBlA4DHMIgeACIj0AOA39DHQgBhJAAhJAv7AdIAKBMQABANACANQAAADABAEA2WEDIBYAAA2KHFIgaABIgCAAA1ILzQACgHABgFQAIg9ABgrQACgUgJghIgVh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");
	this.shape_4.setTransform(227.5457,132.23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#96A8B4").s().p("ABtCxIgBgBIAEgNIgEANIhLg6IhrhWIAXgZIgXAZIgxAoIAAgpIADgBIAcgYIgdgYIAAgkIAyArIgVARIAVgRIBKhBIAJgIIBJhEIABgCIAagYIALAOIgLAdIg6AzIhpBbICIBsIAnAgIgMAXIAAAJIgDgCg");
	this.shape_5.setTransform(25.525,41.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6E3B3").s().p("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");
	this.shape_6.setTransform(228.541,235.1062);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3E0AD").s().p("AgLErIAZgKIADgDIACBZgAgSELQAMgiAGghIAPAAIABAtIgiAaIAAgEgAACA6IgBgJQgCgjgGgjIAAgFIASAPIACBFgAgFhBIAEiAIAIAAIADCOgAAClPIAAAAIABgfIABgIIABAng");
	this.shape_7.setTransform(379.15,152.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFEFCA").s().p("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");
	this.shape_8.setTransform(216.775,109.5453);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCB798").s().p("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");
	this.shape_9.setTransform(225.375,107.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#83A4AC").s().p("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");
	this.shape_10.setTransform(224.725,102.0379);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BB9065").s().p("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");
	this.shape_11.setTransform(227.0417,117.7438);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DB7A4D").s().p("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");
	this.shape_12.setTransform(217.0197,10.155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_raft_MAIN, rect = new cjs.Rectangle(11.6,-1,431.9,266.5), [rect]);


(lib.raft_alone_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AXuskQgHhOgHhNQB0g/B0BUIAAAPQAAAVAAAXAbHtJQAAASAAATAYWmYQAAgBAAgBQgMh1gMh1AZMA1QgRiGgPiFQgBgPgCgOQgBgMgCgLAbDpGQAAAfgBAgQAAATAAAUQgBAigBAiAbAmbQAAABAAACAa9j/QgBAbAAAbQgBARAAASQgDBYgCBXQgBAGAAAGIgBAgAbFqXQgBAUAAAUAa2AOIgBAHAa2AOIAAgFAa3A1IgBgnAa9FRIgDiOAZyFXQgKhKgKhKAaAG/QgEgagDgaQgBgHgBgHAa/G/IgChGAafKbQgBgDAAgDAbEKjIABBZIgfhNAbCJMIABAuAUvPvIAAABAN2u0QACAAABAAAOEskQAAgDAAgDQgBgLAAgKAOMqDQAAgKgBgKAOAtnQgEg+gBgKQA4g6CvAmIgGCUAEKvKQACgBACgBQB7hHB9BLQAAAAABAAIgCCLAIDpxIgCDZARaoGIAABuAOYmYQgBgQgBgRQAAgEgBgFQgBgUAAgUQgDg9gDg1APJA1QgUiJgNh8QgCgTgCgSQgBgLgBgKARbqBIAABdAENsxQgIhKgGhIAlFqSQAAgCAAgDAhkssIAAAIAhkqXIAAAYAlPuxQACgGACgFQAEgJAGgHQAyhBCrBjIAABXAhkpTIAAC7Ak1mYQAAgBAAgBQgCgVgBgUQgGhUgFhVAkDA1QgTiJgOiPQgCgSgCgTQAAgBAAgBAE6mYQgBgNgCgNQgMhggKhdAF4A1QgUiIgRiGQgEgZgDgYIAAAAAGiFGQgBgDAAgDQgBgCAAgBQgKg+gJg8AhlJ4IAAC6QAAgBgBAAQgXhTgUhVQgGgWgFgXQgCgIgCgIAH2KCIgDCxQAAgCgBgDQgKg6gJg5QgCgKgCgKQgBgHgBgHAHTJ1QgEgVgDgUAi/G/QgZh7gViBAhlDDIAADWARYDDIAAAWAH4GoIAAAXAH2JMIAAAOARWJMIgBDIQgXhmgUhiARYEXIgCCoAQNG/QgZiDgUh5AH6DDIgCC+AhkkKIAAE/AH/kKIgDE/ARZkKIgBE/AlMtBQgBgegBgeQgBgaAAgaAlhuyIASABAurvAQBwhOB0BLIAAARIgDB+AurskQAAgEgBgDAuxtOQgFgtgBgnAuVp0QAAgFAAgFAt7mYQgBgMgBgMQgCgSgCgSQgHg4gIg5AtnjQQAAgDgBgCIgBgOA0utIIAAAkA4SusIDkACIAAA5A4TusIABAAA0vptIAAAJA0wo5IAAChA3dmYQgNhkgKhoA4HskQgGhDgFhFA01GoIAAAXA00DwIgBCRA2AG/QgKhUgNh2ArVASQAAASABARAsmFGQgDgQgCgRAsUG/QgEgcgFgcQgBgKgCgJAr3JqQgBgCAAgCArjLcQgGgggGghQgBgGgBgHAraM7QgBgPgBgPQgCgWgBgYQgBAAAAAAIAAgCArRG3QAAAEAAAEArOKBQAAgHAAgIIAAAAArOKLQAAACAAABQAAABAAABIABAKIgBAGArNKaIgBgGArfL+QACAiADAbArRDVQABBegBBdA0xjbIgCEQA2qA1QgMh4gOiRAn9PvIAAABArXNmQACAPABAMQAFA/gFg6QgCgOgBgSIgDgrAxiPvIAAABA7HPvIAAABALMPvIAAABABnPvIAAAB");
	this.shape.setTransform(195.125,113.4427);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(0.1,1,1).p("AegAWIgOhbAdOADIgQhbAcVhdIAlBcAdahTIAoBiAcDAAIgmhfAZtAAIArAdAZ8gfIAxAvAajhKIA9BMAThAFIgQhbAUyAZIgNhcATshQIAoBhAVKg2IA9CBAe3g4IA8CBASWADIgnhfAQQgdIAwAwAQ2hIIA9BMAQBACIAqAdAKFAIIgPhbAKRhOIApBiALXAbIgNhbAI7AFIgnhfAG1gaIAwAvAGmAFIApAdAHbhFIA8BMAJNhYIAkBbALugzIA+CBAByAUIgNhcAAshVIApBhAAhAAIgQhbACKg7IAbCCAgpgBIgnhgAiwgiIAxAwAiJhNIA8BNAi/gCIArAcAgXhgIAkBcApIANIgRhbAn3AgIgOhbAo9hJIAoBiAnfguIA6B8IADAFAqTAKIgnhfAsoAKIApAdAsZgVIAwAvAr0hAIA+BMAqChTIAmBbAyuAPIgQhaIAAgBAxFgsIAsB9IAGARAyihGIAoBhAxcAjIgOhcAz4ANIgmheIgBgBA1/gTIAxAwA1Zg+IA9BMA2OAMIAqAdA7BAqIgKhfA8RhLIAyBuA6pgkIA8CBA9dAUIgnhfA/yAUIApAdA/jgLIAwAvA++g2IA9BMA9MhJIAlBbA8TAXIgbhhAznhRIAlBbASohbIAlBb");
	this.shape_1.setTransform(204.1,9.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AYJgEIgbAJAOMAEIgDABA3tgEIgbAJIAAAA");
	this.shape_2.setTransform(262.325,91.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#814229").ss(1,1,1).p("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BAYgDAXQgEAhgIAhQgEASgFASQAAABABAAAo4omIAHglQABg1gFgzQgCgYgDgYQgEgYgFgXIBNBCIAcAZAmgphIhhhSIg5gwApfr6IhRBHIhaBPIBXBFIBSBAApmsfIAHAlAvwsFQgDgMgCgMQgCgBgBgBQgagWgEAXQghAhgiAfQgBABgBABQgXAVgWAUQgjAfgjAeQgLAJgKAJIhdhPIhYhLQgDgNgDgNQgFgFgFgDQgUgNgDAUQgNANgMAMQgBABgBABQgoAmgpAlQgmAiglAgQgLAJgLAJQgOALgOAMQgCACgDACQg3Atg3ApQgYASgYARAwPr5IhGA+IgBACIgCABIgGAFIgGAFIhWBLIBvBXIACACIAIAGIACACIAuAkQgEASgFASQAXAUAIgkIAMg7IAEgWIAKgvQABg1gFg0QgDghgFggQAJAfAFAiQAFAeABAgQADAzgKAyQgHAggMAfAzRpKIAXgZA2osgQgBgQAJAEICMB5IBGA9AwPr5IAHAlQADARADAQQAHA4gGAsQgCAhgEAfQgEAZgGAYAszplIhchOIhhhSAvtr0QgCgJgBgIAwWseIAHAlAwam6IghgZIgBgBIhDg2IhShAIhUBDIgMAJIhPA/IgvARQgDACAAgCQAKgCAEgVIADgMIABgHIAGgbIACgLIADgNIALg6QABgqgCgpQgBgOgCgNQgDgmgHglA23r0IgiAeIgiAeIgGAFIgGAGIhbBPIB+BjIAFAEIABABIAHAGIAeAXQgEASgGASQAKAIAHgBA55pFIAXgZA23r0IAGAlQADAPACANQAJA7gHAuQgCAngGAmQgDASgEASA2LqYQABASABASQADA8gOA6QgFATgHATA2/sZIAIAlA9NsDIgLgOQgNAMgMANQgBAAgBABQgkAjglAhQgEAEgEAEQgmAhglAgQgLAJgLAJIgdgYIAAgBEghBgKVIAAAAIgBAlIAAALEgglgJYQgOAMgOAMQgBABgBABIgBAoIAygnIAXgZICJBsIAnAfA9NsDIgLAdIg6AzIhpBdEghBgKVIAyArA9NsDQAOAlAHArQAFAhACAjQADBCgSBBQgFARgGAQA6MpfIhihUIhfhQQgJgqAOAGICGB0IBMBCA55pFIhoBTIgDACIgDADIhBAzIgwARQgEACACgFA9cmtQABAAABABQABABABABA9Ym7QgCAHgCAHIhKg7IhshVA9YmzQAEgJAJgPA3Dm1IgXgSIgGgFIg4gsIhhhNAzjpkQg+A0g/AwQghAYggAXA2GHcQgCgNgDgNQgGgFgEgDQgBgQAJAEICWCCIA8A0QgLAJgLAJIhShGgA2VG6QgUgNgDAUQgNANgNAMQgBABAAABQgMALgMALQgBACgCABQgbAZgcAZQgFAFgFAEQggAdghAcQgLAJgKAJIhYhLIhphZIgLAdIhEA8IhgBUICuCJIACACA86HXIgLgOQgNAMgNANQgBAAAAABQglAjgkAhQgFAEgEAEQgBABAAAAQglAhglAfQgLAJgKAJIgyACIAAgSIgBgKIAAglIBIAtA86HXQANAlAHArQABAFABAEQAEAdABAeQADBCgSBBQgEAQgGAPQAAABgBABEggSAKCQgOAMgOAMQgCABgUAGIABAqIBDguIAXgZA5nKVIiSB0IgdAXIgHADIgoAOA55J7QgOALgOAMQgDACgCACQg3Atg4ApQgWARgWAQQgCABgCABA9JMtQABgEABgDQACgCACgDQAEgHAGgLA9IMuQABABACACIAAAAQgEACABgFgA9JMtQAAAAABABA9JMtIgkgdIiThzA15JCQAAgJgBgJQgBgEAAgFQgEgmgHglA2lHmIAHAlQADAPACANQAAAFABAEQAHA2gGAqQgCAngHAmQgCAMgCAMQgBAGgCAGQgEASgFASQAJAIAHgBQAKgCAFgVIACgMIACgHA2lHmIg6A0IgCABIgYAVIhXBMICbB6IAOALA15JCQACASABASQADA8gPA6QgDAMgDAMQgDAHgCAHIADgOIAThfQABgqgDgpgA5nKVIAXgZA86HXQgKgqAOAGICRB9IBBA5AzRJ2Qg+A0g/AwQgQAMgRAMQgQAMgQALAy+KQIh4BfIg3AsIgwARQgCACgBgCA2wMlIg4gsIh/hkA2sHBIAHAlAowHIQgBgGgCgGQgVgTgIAJQgBABAAABQgCACgBAFQg5A4g6A0QgFAFgFAEQgdAagdAZQgLAJgLAJIhRhFIgJgIIgBAAIhOhDIgCgBIgSgPQgCgMgDgMQgBgBgBgBQgbgWgEAXQghAhghAfQgCABgBABQgWAVgXAUQgFAFgFAEQgdAbgeAZAvlG7QgCgSAKAEIALAKIABABIBVBJIAAAAIA2AvIA7AzAvbHmQgBgJgCgIAvbHmQAJAfAGAiQAAAFABAEQADAaACAbQACAzgKAyQgCAIgCAIQgGAYgIAXAwIMgQAYAUAHgkIALg1IAPhLQABgxgDgvQgBgEAAgFQgDghgGggAv8HhIAGAlQAEARACAQQABAFAAAEQAGAzgGAoQgBAhgFAfQgBAJgCAJQgDAPgDAQQgEASgGASIhPg+IhnhSIAXgZICEBoIAlAdAv8HhIhaBPIhRBHAt4LkIgjAbIgEADIgeAYIgwARQgKAFAXgnAshJ1QgiAdgiAbQgRANgQANQgLAIgLAIQgDACgDADQgCABgCACQgdAVgdAVApMHgIAGAlQAEASACAQQABAFABAEQAFAygGAoQgBAYgDAXQAAAFgBAGQgEAbgGAcApMHgIhbBQIhQBGIBnBSIBAAyIACABQgCAHgBAGQgDAMgEALQABABAAAAAsOKPIAXgZAsOKPIhXBFIgTAPApYMfIhrhUIhLg8ApUG7IAIAlAooH3QgDgYgFgXAwEG8IAIAl");
	this.shape_3.setTransform(212.15,102.0645);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("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gR2QACgDACgCQAJgMARgMQABgBACgBQAKgHAMgGQALgHAOgGIAZgBIAkgCIA2gCIAUAFIA0AMIAeAHQAkAaAPAZQANAKALgDQAHBCAHBAA+f0RIgZABQgSgCgTAAQgJgBgKABQgbADgfASQgDACgEADIgfAfQgJASgEAPQgBADgBADQgFAYAFATQADAJAFAJQAAgBABAAA+f0RQABAAABAAQAOgCAPABIgaABgEghcgPgQAAgbABgaQABgpABgoQABgIACgIEghdgPDIABgXQAAgDAAgDICFAAEghfgNsIABgnIAAgLA7dvgIAJAAA+tvgIBZAAIBKAAA7AsgIg/ADIgBAAA83sbIglABIgyACA/CsVIieAGIgBAAIACg0A18suIg0ADIgDAAIgBAAA37soIgFAAA37skQAAgCAAgCA3OsqIgnABIgGABA3+pUIAIAAIGyAAA3+pUQAAgCAAgCQAAgTABgTQAAg+ABg9A7AsgQAMBrALBhIAGAAIClAAA40smIiGAGIgGAAEghjgJUIG6AAA3/iGIAGAAIHqAAIB0AAQAAgRAAgSIADkKA5cA5QAEAmAFAkQAEAhAEAfQAFAhAEAfA+lEDIBlAAIBTAAA/PEDIiSAAIAAASQAAgEAAgEQgChfAAheEghgAE/IAAgEEghdAHvIgBAAIgCiZQAAgFAAgFA+tLzQACgHABgFQAIg9ABgrQACgUgJghIgVhfA9RHfIgCABIgEAAA8dLKQgag1gFhEQgCgUADghIADgnA+JHjIjUAMA2WEDIBYAAA38EDIABAAIBIAAA38EDQgBgDABgDQgBgHAAgIA7AEDIB6AAIAEAAIAEAAA4hHOQAAACABADIADAOQABACAAACIAAACIABABQAAACABACQAAACAAACQABAAAAABQAZBfABBUQAAAJAAAIQAABngCBlQiXjCi9AnQgpAHgiASQh9A8gzC3QgEAPAsCJQAGATAKARQA5BnC2AVQAwgHAogLQB2gjAyhHQAPgVAJgZQAuiCgeh9A2KHFIgaABIgCAAA3AHIIgQABA1ILzQACgHABgFQAIg9ABgrQACgUgJghIgVhfA4DHMIgeACIj0AOA4UEDIAYAAA39DHQgBhJAAhJAv7AdIAKBMQABANACANQAAADABAEAvnC2QAAAHABAGQABADAAADQAEAeAEAcAvtEDIAH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");
	this.shape_4.setTransform(214.9457,132.23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#96A8B4").s().p("ABtCxIgBgBIAEgNIgEANIhLg6IhrhWIAXgZIgXAZIgxAoIAAgpIADgBIAcgYIgdgYIAAgkIAyArIgVARIAVgRIBKhBIAJgIIBJhEIABgCIAagYIALAOIgLAdIg6AzIhpBbICIBsIAnAgIgMAXIAAAJIgDgCg");
	this.shape_5.setTransform(12.925,41.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6E3B3").s().p("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");
	this.shape_6.setTransform(215.941,235.1062);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3E0AD").s().p("AgLErIAZgKIADgDIACBZgAgSELQALgiAHghIAQAAIAAAtIgiAaIAAgEgAACA6IgBgJQgCgjgGgjIAAgFIASAPIACBFgAgFhBIAEiAIAIAAIADCOgAAClPIAAAAIABgfIABgIIABAng");
	this.shape_7.setTransform(366.55,152.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFEFCA").s().p("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");
	this.shape_8.setTransform(204.175,109.5453);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BB9065").s().p("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");
	this.shape_9.setTransform(214.4417,117.7438);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCB798").s().p("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");
	this.shape_10.setTransform(212.775,107.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#83A4AC").s().p("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");
	this.shape_11.setTransform(212.125,102.0379);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DB7A4D").s().p("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");
	this.shape_12.setTransform(204.4197,10.155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.raft_alone_1, rect = new cjs.Rectangle(-1,-1,431.9,266.5), [rect]);


(lib.raft_alone_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AUuvsQgHhNgHhNQB0g/B0BTQAAAAAAABIAAAOQAAALAAALIAAAWAYHwQQAAASAAASAVWpfQAAgBAAgBQgMh2gMh1AWMiRQgRiHgPiGQgBgOgCgPQgBgLgCgMAYDsNQAAAfgBAfQAAAUAAATQgBAigBAiAYApjQAAACAAACAX9nGQgBAaAAAbQgBASAAASQgDBYgCBYQgBAGAAAGIgBAfAYFteQgBAUAAAUAX2i5IgBAIAX2i5IAAgEAX3iRIgBgoAX9CKIgDiOAWyCQQgKhLgKhJAXAD3QgEgagDgaQgBgHgBgHAX/D3IgChFAXfHTQgBgDAAgCAYEHbIABBZIgfhMAYCGFIABAuAbUMoIAAAAARvMoIAAAAAUIS3IBLgcAK2x8QACAAABAAALEvsQAAgDAAgDQgBgKAAgKALMtKQAAgKgBgKALAwvQgEg+gBgKQA4g5CvAlIgGCUABKyRQACgCACAAQB7hHB9BKQAAAAABABIgCCKAFDs5IgCDaAOarNIAABuALYpfQgBgRgBgQQAAgFgBgEQgBgVAAgTQgDg+gDg1AMJiRQgUiLgNh7QgCgTgCgSQgBgLgBgLAObtJIAABeABNv4QgIhKgGhJAoFtZQAAgDAAgCAkkv0IAAAIAkkteIAAAYAoPx5QACgGACgFQAEgJAGgHQAyhBCrBkIAABWAkksbIAAC8An1pfQAAgCAAgBQgCgUgBgVQgGhTgFhVAnDiRQgTiKgOiQQgCgSgCgSQAAgBAAgCAB6pfQgBgOgCgNQgMhggKhdAC4iRQgUiKgRiGQgEgYgDgYIAAgBADiB/QgBgDAAgDQgBgCAAgCQgKg9gJg8AklGwIAAC7QAAgBgBgBQgXhSgUhWQgGgWgFgWQgCgIgCgIAE2G7IgDCxQAAgDgBgCQgKg7gJg5QgCgKgCgKQgBgHgBgGAETGtQgEgUgDgUAl/D3QgZh7gViAAklgEIAADVAOYgEIAAAVAE4DgIAAAXAE2GFIAAANAOWGFIgBDIQgXhngUhhAOYBPIgCCoANND3QgZiDgUh4AE6gEIgCC+AkknSIAAFBAE/nSIgDFBAOZnSIgBFBAoMwJQgBgegBgdQgBgbAAgaAohx5IASAAAxryHQBwhPB0BMIAAARIgDB+AxrvsQAAgDgBgDAxxwVQgFgugBgnAxVs7QAAgFAAgFAw7pfQgBgNgBgMQgCgSgCgRQgHg5gIg4AwnmXQAAgDgBgDIgBgNA3uwPIAAAjA7Sx0IDkADIAAA4A7Tx0IABAAA3vs0IAAAIA3wsAIAAChA6dpfQgNhkgKhpA7HvsQgGhDgFhFA31DhIAAAWA30ApIgBCQA5AD3QgKhTgNh3AuVi0QAAARABASAvmB/QgDgRgCgQAvUD3QgEgcgFgcQgBgJgCgKAu3GjQgBgCAAgCAujIUQgGgggGggQgBgHgBgHAuaJzQgBgOgBgQQgCgVgBgYQgBAAAAgBIAAgBAuRDvQAAAEAAAEAuOG6QAAgHAAgIIAAgBAuOHEQAAABAAABQAAACAAABIABAKIgBAFAuNHTIgBgGAufI3QACAhADAbAuRANQABBegBBdA3xmjIgCESA5qiRQgMh5gOiSAuXKfQACAPABALQAFBAgFg7QgCgNgBgSIgDgsAhYMoIAAAA");
	this.shape.setTransform(214.325,133.3927);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(0.1,1,1).p("AegAWIgOhbAdOADIgQhbAcVhdIAlBcAdahTIAoBiAcDAAIgmhfAZtAAIABAAIAqAdAZ8gfIAxAvAajhKIA9BMAThAFIgQhbAUyAZIgNhcATshQIAoBhAVKg2IA9CBAe3g4IA8CBASWADIgnhfAQQgdIAwAwAQ2hIIA9BMAQBACIAqAdAKFAIIgPhbAKRhOIApBiALXAbIgNhbAI7AFIgnhfAG1gaIAwAvAGmAFIApAdAHbhFIA8BMAJNhYIAkBbALugzIA+CBAByAUIgNhcAAshVIApBhAAhAAIgQhbACKg7IAbCCAgpgBIgnhgAiwgiIAxAwAiJhNIA8BNAi/gCIArAcAgXhgIAkBcApIANIgRhbAn3AgIgOhbAo9hJIAoBiAnfguIA6B8IADAFAqTAKIgnhfAsoAKIApAdAsZgVIAwAvAr0hAIA+BMAqChTIAmBbAyuAPIgQhaIAAgBAxFgsIAsB9IAGARAyihGIAoBhAxcAjIgOhcAz4ANIgmheIgBgBA1/gTIAxAwA1Zg+IA9BMA2OAMIAqAdA7BAqIgKhfA8RhLIAyBuA6pgkIA8CBA9dAUIgnhfA/yAUIApAdA/jgLIAwAvA++g2IA9BMA9MhJIAlBbA8TAXIgbhhAznhRIAlBbASohbIAlBb");
	this.shape_1.setTransform(204.1,9.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AYJgEIgbAJAOMAEIgDABA3tgEIgbAJIAAAA");
	this.shape_2.setTransform(262.325,91.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#814229").ss(1,1,1).p("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");
	this.shape_3.setTransform(212.15,102.0645);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("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QgEgGgGgEQgUgOgpACIgCAAEghWgR2QACgDACgCQAJgMARgMQABgBACgBQAKgHAMgGQALgHAOgGIAZgBIAkgCIA2gCIAUAFIA0AMIAeAHQAkAaAPAZQANAKALgDQAHBCAHBAA+f0RIgZABQgSgCgTAAQgJgBgKABQgbADgfASQgDACgEADIgfAfQgJASgEAPQgBADgBADQgFAYAFATQADAJAFAJQAAgBABAAA+f0RQABAAABAAQAOgCAPABIgaABgEghcgPgQAAgbABgaQABgpABgoQABgIACgIEghdgPDIABgXQAAgDAAgDICFAAEghfgNsIABgnIAAgLA7dvgIAJAAA+tvgIBZAAIBKAAA7AsgIg/ADIgBAAA83sbIglABIgyACA/CsVIieAGIgBAAIACg0A18suIg0ADIgDAAIgBAAA37soIgFAAA37skQAAgCAAgCA3OsqIgnABIgGABA3+pUIAIAAIGyAAA3+pUQAAgCAAgCQAAgTABgTQAAg+ABg9A7AsgQAMBrALBhIAGAAIClAAA40smIiGAGIgGAAEghjgJUIG6AAA3/iGIAGAAIHqAAIB0AAQAAgRAAgSIADkKA5cA5QAEAmAFAkQAEAhAEAfQAFAhAEAfA+lEDIBlAAIBTAAA/PEDIiSAAIAAASQAAgEAAgEQgChfAAheEghgAE/IAAgEEghdAHvIgBAAIgCiZQAAgFAAgFA+tLzQACgHABgFQAIg9ABgrQACgUgJghIgVhfA9RHfIgCABIgEAAA8dLKQgag1gFhEQgCgUADghIADgnA+JHjIjUAMA2WEDIBYAAA38EDIABAAIBIAAA38EDQgBgDABgDQgBgHAAgIA7AEDIB6AAIAEAAIAEAAA4hHOQAAACABADIADAOQABACAAACIAAACIABABQAAACABACQAAACAAACQABAAAAABQAZBfABBUQAAAJAAAIQAABngCBlQiXjCi9AnQgpAHgiASQh9A8gzC3QgEAPAsCJQAGATAKARQA5BnC2AVQAwgHAogLQB2gjAyhHQAPgVAJgZQAuiCgeh9A2KHFIgaABIgCAAA3AHIIgQABA1ILzQACgHABgFQAIg9ABgrQACgUgJghIgVhfA4DHMIgeACIj0AOA4UEDIAYAAA39DHQgBhJAAhJAv7AdIAKBMQABANACANQAAADABAEAvnC2QAAAHABA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");
	this.shape_4.setTransform(214.9457,132.23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#96A8B4").s().p("ABtCxIgBgBIAEgNIgEANIhLg6IhrhWIAXgZIgXAZIgxAoIAAgpIADgBIAcgYIgdgYIAAgkIAyArIgVARIAVgRIBKhBIAJgIIBJhEIABgCIAagYIALAOIgLAdIg6AzIhpBbICIBsIAnAgIgMAXIAAAJIgDgCg");
	this.shape_5.setTransform(12.925,41.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6E3B3").s().p("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");
	this.shape_6.setTransform(215.941,235.1062);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3E0AD").s().p("AgLErIAZgKIADgDIACBZgAgSELQALgiAHghIAQAAIAAAtIgiAaIAAgEgAACA6IgBgJQgCgjgGgjIAAgFIASAPIACBFgAgFhBIAEiAIAIAAIADCOgAAClPIAAAAIABgfIABgIIABAng");
	this.shape_7.setTransform(366.55,152.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFEFCA").s().p("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");
	this.shape_8.setTransform(204.175,109.5453);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BB9065").s().p("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");
	this.shape_9.setTransform(214.4417,117.7438);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCB798").s().p("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");
	this.shape_10.setTransform(212.775,107.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#83A4AC").s().p("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");
	this.shape_11.setTransform(212.125,102.0379);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DB7A4D").s().p("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");
	this.shape_12.setTransform(204.4197,10.155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.raft_alone_2, rect = new cjs.Rectangle(-1,-1,431.9,266.5), [rect]);


(lib.MAINSCREEN_IslandB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bankofariver();
	this.instance.setTransform(155,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MAINSCREEN_IslandB, rect = new cjs.Rectangle(0,0,155,83), [rect]);


(lib.MAINSCREEN_IslandA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bankofariver();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MAINSCREEN_IslandA, rect = new cjs.Rectangle(0,0,155,83), [rect]);


(lib.clock_animiton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.clock();
	this.instance.setTransform(-144,0,0.1008,0.1007);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clock_animiton, rect = new cjs.Rectangle(-144,0,46.8,57.8), [rect]);


(lib.brown_borad = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Game_Name_Subject();
	this.instance.setTransform(0,0,0.9752,0.9802);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.brown_borad, rect = new cjs.Rectangle(0,0,149.2,168.6), [rect]);


(lib.ICON_X = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Xicon();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICON_X, rect = new cjs.Rectangle(0,0,45,45), [rect]);


(lib.ICON_V = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Viconpng();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICON_V, rect = new cjs.Rectangle(0,0,48,48), [rect]);


(lib.Game_boradkey = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("בחרו בתשובה הנכונה באמצעות העכבר", "bold 14px 'Heebo'");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 124;
	this.text.parent = this;
	this.text.setTransform(97.75,31.9);

	this.instance = new lib.Howtoplayborad();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Game_boradkey, rect = new cjs.Rectangle(0,0,186,134), [rect]);


(lib.startButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("התחל", "bold 40px 'Heebo ExtraBold'");
	this.text.lineHeight = 61;
	this.text.lineWidth = 105;
	this.text.alpha = 0.61568627;
	this.text.parent = this;
	this.text.setTransform(87.6,26);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("Aw8o0MAh5AAAQDqAACmCmQClClAADpQAADqilCmQimCljqAAMgh5AAAQjqAAimilQilimAAjqQAAjpClilQCmimDqAAg");
	this.shape.setTransform(136.5911,45.5954,0.828,0.8067);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(217,219,199,0.616)").s().p("Aw8I1QjqAAimilQilimAAjqQAAjpClimQCmilDqAAMAh5AAAQDqAAClClQCmCmAADpQAADqimCmQilCljqAAg");
	this.shape_1.setTransform(136.5911,45.5954,0.828,0.8067);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(194,248,1,0.616)").s().p("Aw8I1QjqAAimilQilimAAjqQAAjpClimQCmilDqAAMAh5AAAQDqAAClClQCmCmAADpQAADqimCmQilCljqAAg");
	this.shape_2.setTransform(136.5911,45.5954,0.828,0.8067);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-3,-3,279.2,97.2);
p.frameBounds = [rect, rect];


(lib.sad_frogi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sadfrogi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sad_frogi, rect = new cjs.Rectangle(0,0,179,191), [rect]);


(lib.jumperfrogi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jumpingfrogi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumperfrogi, rect = new cjs.Rectangle(0,0,188,187), [rect]);


(lib.jumper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jump();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumper, rect = new cjs.Rectangle(0,0,230,234), [rect]);


(lib.frogiwin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jump2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frogiwin, rect = new cjs.Rectangle(0,0,223,179), [rect]);


(lib.FrogiQuestionBoxY = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.FrogiSideLook();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FrogiQuestionBoxY, rect = new cjs.Rectangle(0,0,105,112), [rect]);


(lib.FrogiQuestionBoxR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FrogiQuestionBoxR, rect = null, [rect]);


(lib.HappyFrogi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.frogiHappy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HappyFrogi, rect = new cjs.Rectangle(0,0,108,107), [rect]);


(lib.frogiEnd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FrogiSideLook();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frogiEnd, rect = new cjs.Rectangle(0,0,105,112), [rect]);


(lib.frgiraft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FrogiSideLook();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frgiraft, rect = new cjs.Rectangle(0,0,105,112), [rect]);


(lib.lookside_pink = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.looksidePink();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lookside_pink, rect = new cjs.Rectangle(0,0,179,191), [rect]);


(lib.lookside_Green = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jumpeGreen();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lookside_Green, rect = new cjs.Rectangle(0,0,179,190), [rect]);


(lib.lookside_Blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.looksideBlue();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lookside_Blue, rect = new cjs.Rectangle(0,0,180,191), [rect]);


(lib.line1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9E5729").ss(6,1,1).p("AiNBOIEbib");
	this.shape.setTransform(14.15,7.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.line1, rect = new cjs.Rectangle(-3,-3,34.3,21.6), [rect]);


(lib.jumperPink = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jumpPink();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumperPink, rect = new cjs.Rectangle(0,0,189,190), [rect]);


(lib.jumperGreen_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jumperGreen();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumperGreen_1, rect = new cjs.Rectangle(0,0,189,190), [rect]);


(lib.jumperBlue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jumpBlue();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jumperBlue, rect = new cjs.Rectangle(0,0,190,190), [rect]);


(lib.GreenHappyFrogi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.GreenFrogi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.GreenHappyFrogi, rect = new cjs.Rectangle(0,0,147,145), [rect]);


(lib.ENDSCREEN_PinkFrog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.PinkFrogi();
	this.instance.setTransform(0,0,0.6775,0.6799);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ENDSCREEN_PinkFrog, rect = new cjs.Rectangle(0,0,99.6,98.6), [rect]);


(lib.ENDSCREEN_LOG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.brownborad();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ENDSCREEN_LOG, rect = new cjs.Rectangle(0,0,310,113), [rect]);


(lib.ENDSCREEN_BOARD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.finalborad();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ENDSCREEN_BOARD, rect = new cjs.Rectangle(0,0,690,570), [rect]);


(lib.ENDSCREEN_BlueFrog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BlueFrogi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ENDSCREEN_BlueFrog, rect = new cjs.Rectangle(0,0,147,145), [rect]);


(lib.green_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("EgiugG8MBFdAAAQBbAABOAbQAQAGAPAGQBLAhA+A6QCMCCAAC4QAAC4iMCCQhGBDhVAgQgHADgGACQhOAbhbAAMhFdAAAQhiAAhUggQhVgghHhDQiLiCAAi4QAAi4CLiCQA/g6BLghQBbgnBtAAg");
	this.shape.setTransform(97.35,-150.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D5E06A").s().p("EgiuAG9QhiAAhUggQhVgghGhCQiMiCAAi5QAAi3CMiDQA+g6BLggQBbgoBtAAMBFdAAAQBbAABOAbIAfANQBLAgA/A6QCLCDAAC3QAAC5iLCCQhHBChVAgIgNAFQhOAbhbAAg");
	this.shape_1.setTransform(97.35,-150.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.green_btn, rect = new cjs.Rectangle(-174.6,-196.6,544,93), [rect]);


(lib.end_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.endbuttuns();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.end_btn, rect = new cjs.Rectangle(0,0,176,80), [rect]);


(lib.stopbutton_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.stopbutton();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stopbutton_1, rect = new cjs.Rectangle(0,0,73,67), [rect]);


(lib.magnify = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAkAdQgbAWgiAAQgpAAgcgcQgXgXgEgcQgCgJAAgIQAAgpAdgcQAcgdApAAQAaAAAXAOQAKAGAJAJQAcAcAAApQAAAmgYAaQgCACgCACQgEADgDADgAB8CQIhYhz");
	this.shape.setTransform(12.375,14.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhEBFQgXgXgEgdIgCgRQABgoAcgcQAcgcAogBQAbAAAXAOQAKAGAJAJQAdAcAAAoQAAAmgZAbIgEAEIgHAGQgbAXgjAAQgoAAgcgdg");
	this.shape_1.setTransform(9.75,9.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.magnify, rect = new cjs.Rectangle(-1,-1,26.8,30.8), [rect]);


(lib.btn_continue_new = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._continue();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_continue_new, rect = new cjs.Rectangle(0,0,145,82), [rect]);


(lib.btn_check_active = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.check_active();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_check_active, rect = new cjs.Rectangle(0,0,145,82), [rect]);


(lib.main_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.check_notActive();

	this.instance_1 = new lib.check_active();

	this.instance_2 = new lib._continue();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,145,82);
p.frameBounds = [rect, rect, rect];


(lib.num_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num9();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_9, rect = new cjs.Rectangle(0,0,86,119), [rect]);


(lib.num_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num8();
	this.instance.setTransform(0,0,0.9247,0.937);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_8, rect = new cjs.Rectangle(0,0,86,119), [rect]);


(lib.num_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num7();
	this.instance.setTransform(0,0,0.9556,0.9754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_7, rect = new cjs.Rectangle(0,0,86,119), [rect]);


(lib.num_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num6();
	this.instance.setTransform(0,0,0.8687,0.9297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_6, rect = new cjs.Rectangle(0,0,86,119), [rect]);


(lib.num_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num5();
	this.instance.setTransform(0,0,0.9556,0.952);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_5, rect = new cjs.Rectangle(0,0,86,119), [rect]);


(lib.num_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num4();
	this.instance.setTransform(0,0,0.86,0.952);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_4, rect = new cjs.Rectangle(0,0,86,119), [rect]);


(lib.num_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num3();
	this.instance.setTransform(0,0,0.9053,0.937);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_3, rect = new cjs.Rectangle(0,0,86,119), [rect]);


(lib.num_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num2();
	this.instance.setTransform(0,0,1.0488,0.9675);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_2, rect = new cjs.Rectangle(0,0,86,119), [rect]);


(lib.num_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_1, rect = new cjs.Rectangle(0,0,52,123), [rect]);


(lib.num_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.num0();
	this.instance.setTransform(0,0,0.8958,0.9444);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num_0, rect = new cjs.Rectangle(0,0,86,119), [rect]);


(lib.mg_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gm1();
	this.instance.setTransform(0,0,0.625,0.4018);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mg_1, rect = new cjs.Rectangle(0,0,60,65.9), [rect]);


(lib.img_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_temp_4();
	this.instance.setTransform(0,0,0.0203,0.0132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_4, rect = new cjs.Rectangle(0,0,120,65.9), [rect]);


(lib.img_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_temp_3();
	this.instance.setTransform(0,0,0.0424,0.0339);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_3, rect = new cjs.Rectangle(0,0,255.1,136.1), [rect]);


(lib.img_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_temp_2();
	this.instance.setTransform(0,0,0.0638,0.0272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_2, rect = new cjs.Rectangle(0,0,255.1,136.1), [rect]);


(lib.img_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_temp_1();
	this.instance.setTransform(0,0,0.0518,0.0491);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_1, rect = new cjs.Rectangle(0,0,255.1,136.1), [rect]);


(lib.Cards_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Cards();
	this.instance.setTransform(0,0,0.2459,0.2085);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Cards_1, rect = new cjs.Rectangle(0,0,90,65.9), [rect]);


(lib.forCombo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.myCSS = new lib.an_CSS({'id': 'myCSS', 'href':'assets/cssCombo.css'});

	this.myCSS.name = "myCSS";
	this.myCSS.setTransform(208,-11,1,1,0,0,0,50,11);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר נושא, 0, גיאוגרפיה, 1, חשבון, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.name = "mycb";
	this.mycb.setTransform(50.1,11.1,1.5,1.5,0,0,0,33.4,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.myCSS}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.forCombo, rect = new cjs.Rectangle(-0.7,-22.5,259.3,56.3), [rect]);


(lib.timeUp_Screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HappyFrogi();
	this.instance.setTransform(625.3,553.45,1.3241,1.3037,0,0,0,54.1,53.5);

	this.instance_1 = new lib.mc_raft_MAIN();
	this.instance_1.setTransform(625.05,620,0.6792,0.6807,0,0,0,215,132.2);

	this.btn_continueTimeUp = new lib.btn_continue();
	this.btn_continueTimeUp.name = "btn_continueTimeUp";
	this.btn_continueTimeUp.setTransform(158,635.5,1,1,0,0,0,91,37.5);

	this.instance_2 = new lib.TimeoverH1png();
	this.instance_2.setTransform(292,140);

	this.timeovet_txt = new cjs.Text("לא נורא תהיה עוד הזדמנות לענות על השאלה", "normal 400 35px 'Heebo'");
	this.timeovet_txt.name = "timeovet_txt";
	this.timeovet_txt.textAlign = "center";
	this.timeovet_txt.lineHeight = 47;
	this.timeovet_txt.lineWidth = 648;
	this.timeovet_txt.parent = this;
	this.timeovet_txt.setTransform(627.15,337.65);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.timeovet_txt);
	}

	this.instance_3 = new lib.GameBackground();
	this.instance_3.setTransform(0,0,0.6691,0.5812);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.timeovet_txt},{t:this.instance_2},{t:this.btn_continueTimeUp},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.timeUp_Screen, rect = new cjs.Rectangle(0,0,1287.4,731.7), [rect]);


(lib.pause_screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HappyFrogi();
	this.instance.setTransform(625.3,553.45,1.3241,1.3037,0,0,0,54.1,53.5);

	this.pContinue_btn = new lib.btn_continue();
	this.pContinue_btn.name = "pContinue_btn";
	this.pContinue_btn.setTransform(152,635.5,1,1,0,0,0,91,37.5);

	this.instance_1 = new lib.mc_raft_MAIN();
	this.instance_1.setTransform(619.05,620,0.6792,0.6807,0,0,0,215,132.2);

	this.instance_2 = new lib.PauseH1();
	this.instance_2.setTransform(286,140);

	this.pausetime_txt = new cjs.Text("פרוגי לא אוהב לחכות יותר מידי אז חזרו מהר", "35px 'Heebo'");
	this.pausetime_txt.name = "pausetime_txt";
	this.pausetime_txt.lineHeight = 53;
	this.pausetime_txt.lineWidth = 637;
	this.pausetime_txt.parent = this;
	this.pausetime_txt.setTransform(308.85,363.05);

	this.instance_3 = new lib.GameBackground();
	this.instance_3.setTransform(0,0,0.6691,0.5812);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#55851D").s().p("AgMDfIgBhqQAAgNgEgHQgGgIgNgBIgYAAQgbAAgXgTQgWgTgIgcQgHgZAHgdQAGgaARgYQAcgnA5ggIAAhEIAVgFIALAzQALgKAPABQgCAnAWAgIAOAUQAIAMACAKQABAIgCANIgDAVQAAAMAGAJQAGAJAKABQAGAAAKgEQALgFAFAAQAMAAAHAMQAFALAAAPQABAwgbA3QgMAagQAKQgKAHgSAEIgfAGIgEAlQgKADgJAAQgKAAgKgEgAA/CBIgFAIIgGADIgVAFIAugEIgBgRQgBgKgHgFQAAAFgFAPgAgrhtIgKAJQgDADgQAIQgaANgLAfQgJAYAEAgQAEAeARAGQAFACAKAAIAuAAQAEgMgNgXQgOgUAHgNIAIgLQALgOgCgZIgCgVQAAgMABgJIgDAAQgEAAgEACg");
	this.shape.setTransform(251.2755,176.4315);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3},{t:this.pausetime_txt},{t:this.instance_2},{t:this.instance_1},{t:this.pContinue_btn},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pause_screen, rect = new cjs.Rectangle(0,0,1287.4,731.7), [rect]);


(lib.frogiProgress = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FrogiSideLook();
	this.instance.setTransform(-66,80,0.3067,0.3732);

	this.instance_1 = new lib.raft_alone("synched",0);
	this.instance_1.setTransform(-47.6,121,0.1698,0.2012,0,0,0,215,132.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frogiProgress, rect = new cjs.Rectangle(-85.1,80,75,68.6), [rect]);


(lib.frogiraft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.frogiEnd();
	this.instance.setTransform(0,9,0.8095,0.8045);

	this.FROGIGONE = new lib.raft_alone_1();
	this.FROGIGONE.name = "FROGIGONE";
	this.FROGIGONE.setTransform(81.9,81.7,0.6168,0.6181,0,0,0,215.1,132.2);

	this.instance_1 = new lib.raft_alone_1();
	this.instance_1.setTransform(81.9,81.7,0.6168,0.6181,0,0,0,215.1,132.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.FROGIGONE},{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-0.3,265.8,164.1);
p.frameBounds = [rect, rect];


(lib.FROGI_START_NEW = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.frogiEnd();
	this.instance.setTransform(0,9,0.8095,0.8045);

	this.FROGIGONE = new lib.raft_alone_1();
	this.FROGIGONE.name = "FROGIGONE";
	this.FROGIGONE.setTransform(74.75,72.5,0.5832,0.5483,0,0,0,215.1,132.2);

	this.instance_1 = new lib.raft_alone_1();
	this.instance_1.setTransform(74.75,72.5,0.5832,0.5483,0,0,0,215.1,132.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.FROGIGONE},{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-0.2,251.3,145.6);
p.frameBounds = [rect, rect];


(lib.FROGI_START = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.frogiEnd();
	this.instance.setTransform(0,9,0.8095,0.8045);

	this.FROGIGONE = new lib.raft_alone_1();
	this.FROGIGONE.name = "FROGIGONE";
	this.FROGIGONE.setTransform(81.9,81.7,0.6168,0.6181,0,0,0,215.1,132.2);

	this.instance_1 = new lib.raft_alone_1();
	this.instance_1.setTransform(81.9,81.7,0.6168,0.6181,0,0,0,215.1,132.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.FROGIGONE},{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-0.3,265.8,164.1);
p.frameBounds = [rect, rect];


(lib.FORGI_ENTER_MAIN_SCREEN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// BUBBLE
	this.instance = new lib.waves();
	this.instance.setTransform(493.4,70.6,1,1.1867,0,0,0,206.8,122.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:122.9,y:71.45},0).wait(1).to({regX:206.9,regY:122.2,x:363.15,y:70.55},0).wait(1).to({regX:206.8,regY:122.9,x:363.05,y:71.4},0).wait(2).to({regY:122.2,x:295.1,y:70.45},0).wait(1).to({regY:122.9,y:71.3},0).wait(2).to({regY:120.7,scaleY:1.1105,skewX:11.2415,x:299.1,y:69.95},0).wait(1).to({regY:122.9,scaleX:1.0207,scaleY:1.1102,skewX:0.0989,x:283.35,y:72.45},0).to({_off:true},1).wait(2));

	// RAFT
	this.instance_1 = new lib.frogiraft();
	this.instance_1.setTransform(508.05,72.55,0.9455,0.8871,0,0,0,132.1,81.8);

	this.instance_2 = new lib.FROGI_START();
	this.instance_2.setTransform(310.9,72.55,0.9455,0.8871,0,0,0,132.1,81.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:81.8,regY:81.7,x:366.45,y:72.45},0).wait(1).to({x:287.45},0).wait(1).to({x:275.8},0).wait(1).to({x:263.3},0).wait(5).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(286.6,-74.3,413.7,291.7);
p.frameBounds = [rect, new cjs.Rectangle(240.1,-74.2,460.2,291.7), new cjs.Rectangle(156.3,-74.4,413.7,291.7), new cjs.Rectangle(149.5,-74.3,420.5,291.7), new cjs.Rectangle(137,-74.3,433,291.7), new cjs.Rectangle(88.3,-74.5,413.7,291.7), rect=new cjs.Rectangle(88.3,-74.4,413.7,291.7), rect, new cjs.Rectangle(65.3,-61.4,450.5,267.8), new cjs.Rectangle(72.2,-63.8,422.4,272.9), new cjs.Rectangle(137.7,-0.2,251.3,145.5), null];


(lib.end_animiton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_120 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(120).call(this.frame_120).wait(1));

	// main
	this.instance = new lib.butterfly_open_1();
	this.instance.setTransform(-304.85,-134.8,0.2697,0.367,0,58.6522,95.8493);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120).to({_off:false},0).wait(1));

	// Bubbles
	this.instance_1 = new lib.waves();
	this.instance_1.setTransform(176,58.95,1,1.0732,0,0,0,206.8,122.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({regY:122.9,scaleY:1.0632,skewX:-1.5062,x:155,y:58.05},0).wait(1).to({scaleY:1.0532,skewX:-3.0123,x:133.9,y:56.75},0).wait(1).to({scaleY:1.0431,skewX:-4.5185,x:112.85,y:55.4},0).wait(1).to({scaleY:1.0331,skewX:-6.0247,x:91.8,y:54.05},0).wait(1).to({scaleY:1.023,skewX:-7.5308,x:75.65},0).wait(1).to({scaleY:1.013,skewX:-9.037,x:59.4},0).wait(1).to({scaleY:1.0029,skewX:-10.5432,x:43.2},0).wait(1).to({scaleY:0.9929,skewX:-12.0493,x:26.95},0).wait(1).to({scaleY:0.9829,skewX:-13.5555,x:10.75},0).wait(1).to({scaleY:0.9702,skewX:-8.774,x:-8.65,y:54.55},0).wait(1).to({scaleY:0.9576,skewX:-3.9925,x:-28.05,y:55.05},0).wait(1).to({scaleY:0.9449,skewX:0.789,x:-47.5,y:55.5},0).wait(1).to({scaleY:0.9323,skewX:5.5704,x:-66.9,y:56.05},0).wait(1).to({scaleY:0.9196,skewX:10.3519,x:-86.3,y:56.55},0).wait(1).to({scaleY:0.907,skewX:15.1334,x:-105.75,y:57.05},0).to({_off:true},1).wait(103));

	// frogi
	this.end_animiton = new lib.frogiraft();
	this.end_animiton.name = "end_animiton";
	this.end_animiton.setTransform(132.6,68.8,1,1,0,0,0,132.6,81.7);

	this.timeline.addTween(cjs.Tween.get(this.end_animiton).wait(1).to({regX:81.8,x:81.8},0).wait(2).to({x:67.3},0).wait(1).to({x:52.85},0).wait(1).to({x:38.35},0).wait(1).to({x:23.9},0).wait(1).to({x:9.4},0).wait(1).to({x:-5.05},0).wait(1).to({x:-19.55},0).wait(1).to({x:-34.05},0).wait(1).to({x:-48.5},0).wait(1).to({x:-63},0).wait(1).to({x:-77.45},0).wait(1).to({x:-91.95},0).wait(1).to({x:-106.4},0).wait(1).to({x:-120.9},0).wait(1).to({x:-135.4},0).wait(1).to({_off:true},1).wait(102));

	// jumper
	this.instance_2 = new lib.jumperfrogi();
	this.instance_2.setTransform(-221.5,39,0.4643,0.533,0,0,180,133.9,111.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(1).to({regX:94,regY:93.5,scaleX:0.4707,scaleY:0.5287,skewX:-2.3537,skewY:179.9732,x:-215.45,y:27.25},0).wait(1).to({scaleX:0.4771,scaleY:0.5245,skewX:-4.7075,skewY:179.9464,x:-228.05,y:24.9},0).wait(1).to({scaleX:0.4835,scaleY:0.5202,skewX:-7.0612,skewY:179.9197,x:-240.5,y:22.55},0).wait(1).to({scaleX:0.4899,scaleY:0.516,skewX:-9.4149,skewY:179.8929,x:-253,y:20.25},0).wait(1).to({scaleX:0.4963,scaleY:0.5117,skewX:-16.7691,skewY:174.8656,x:-274.1,y:15.45},0).wait(1).to({scaleX:0.5027,scaleY:0.5075,skewX:-24.1233,skewY:169.8384,x:-295.3,y:10.8},0).wait(1).to({scaleX:0.5091,scaleY:0.5033,skewX:-31.4775,skewY:164.8112,x:-316.65,y:6.3},0).wait(1).to({scaleX:0.5155,scaleY:0.4811,skewX:-33.6509,skewY:167.326,x:-329.5,y:7.6},0).wait(1).to({scaleX:0.5219,scaleY:0.4589,skewX:-35.8243,skewY:169.8407,x:-342.5,y:8.9},0).wait(1).to({scaleX:0.5283,scaleY:0.4368,skewX:-37.9977,skewY:172.3555,x:-355.35,y:10.3},0).wait(1).to({scaleX:0.5263,scaleY:0.4192,skewX:-29.7302,skewY:170.4835,x:-361.15,y:14.85},0).wait(1).to({scaleX:0.5243,scaleY:0.4017,skewX:-21.4627,skewY:168.6114,x:-366.9,y:19.55},0).wait(1).to({scaleX:0.5223,scaleY:0.3841,skewX:-13.1953,skewY:166.7393,x:-372.8,y:24.4},0).wait(1).to({scaleX:0.5203,scaleY:0.3666,skewX:-4.9278,skewY:164.8673,x:-378.65,y:29.45},0).wait(1).to({scaleX:0.5183,scaleY:0.3848,skewX:0.2649,skewY:164.8795,x:-383.55,y:37.55},0).wait(1).to({scaleX:0.5163,scaleY:0.4031,skewX:5.4576,skewY:164.8918,x:-388.4,y:45.65},0).wait(1).to({scaleX:0.5143,scaleY:0.4214,skewX:10.6502,skewY:164.9041,x:-393.2,y:53.75},0).wait(1).to({scaleX:0.5123,scaleY:0.4396,skewX:15.8429,skewY:164.9164,x:-397.85,y:62.05},0).wait(1).to({scaleX:0.4991,scaleY:0.5375,skewX:17.3004,skewY:164.9496,x:-407.95,y:70.4},0).wait(1).to({scaleX:0.4505,scaleY:0.4722,skewX:1.8505,skewY:164.9689,x:-422.65,y:81.35},0).wait(1).to({scaleX:0.402,scaleY:0.4068,skewX:-13.5994,skewY:164.9881,x:-436.7,y:92.95},0).wait(1).to({scaleX:0.5991,scaleY:0.403,skewX:1.7998,skewY:164.9173,x:-434.05,y:98.3},0).to({_off:true},1).wait(79));

	// raft_finalborad
	this.instance_3 = new lib.raft_alone_2();
	this.instance_3.setTransform(-84.45,68.7,0.6168,0.6181,0,0,0,214.9,132);

	this.text = new cjs.Text("!כל הכבוד פרוגי", "35px 'Heebo'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 53;
	this.text.lineWidth = 255;
	this.text.parent = this;
	this.text.setTransform(-17.05,-120.7);

	this.instance_4 = new lib.ENDSCREEN_LOG();
	this.instance_4.setTransform(-17.05,-108.45,0.878,0.7168,0,0,0,154.8,56.5);

	this.text_1 = new cjs.Text(":ציון סופי", "bold 20px 'Heebo'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 31;
	this.text_1.lineWidth = 87;
	this.text_1.parent = this;
	this.text_1.setTransform(70.45,82);

	this.text_2 = new cjs.Text(":שגיאות", "bold 20px 'Heebo'");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 31;
	this.text_2.lineWidth = 85;
	this.text_2.parent = this;
	this.text_2.setTransform(70.45,22);

	this.text_3 = new cjs.Text(":זמן ", "bold 20px 'Heebo'");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 31;
	this.text_3.lineWidth = 37;
	this.text_3.parent = this;
	this.text_3.setTransform(70.45,-38);

	this.instance_5 = new lib.ENDSCREEN_BOARD();
	this.instance_5.setTransform(-119.3,143.3,0.7757,0.8121,0,0,0,344.9,284.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},19).to({state:[{t:this.instance_5},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.instance_4},{t:this.text}]},49).wait(53));

	// walking_frogi
	this.instance_6 = new lib.jumper();
	this.instance_6.setTransform(-460.6,86.05,0.4159,0.4391,0,-3.1237,-13.0972,72.3,38.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(42).to({_off:false},0).wait(1).to({regX:115,regY:117,scaleX:0.4233,scaleY:0.446,skewX:0.8429,skewY:-8.0676,x:-442.9,y:133.1},0).wait(1).to({scaleX:0.4307,scaleY:0.453,skewX:4.8109,skewY:-3.0348,x:-444.65,y:149.55},0).wait(1).to({scaleX:0.4381,scaleY:0.4599,skewX:8.7789,skewY:1.998,x:-446.55,y:165.85},0).wait(1).to({scaleX:0.4455,scaleY:0.4669,skewX:12.7469,skewY:7.0308,x:-448.7,y:182},0).wait(1).to({scaleX:0.4244,scaleY:0.4738,skewX:16.8646,skewY:12.2085,x:-452.3,y:197.85},0).wait(1).to({scaleX:0.4032,scaleY:0.4807,skewX:20.9822,skewY:17.3862,x:-456.05,y:213.25},0).wait(1).to({scaleX:0.4072,scaleY:0.4687,skewX:10.9012,skewY:8.3712,x:-450.95,y:213.85},0).wait(1).to({scaleX:0.4113,scaleY:0.4566,skewX:0.8201,skewY:-0.6438,x:-446.45,y:213.1},0).wait(1).to({scaleX:0.4153,scaleY:0.4445,skewX:16.9894,skewY:16.5916,x:-459.1,y:218.2},0).wait(1).to({scaleX:0.3919,scaleY:0.5163,skewX:13.8487,skewY:14.5131,x:-461.6,y:225.6},0).wait(1).to({scaleX:0.4138,scaleY:0.4994,skewX:11.0876,skewY:12.8026,x:-460.9,y:230.2},0).wait(1).to({scaleX:0.4005,scaleY:0.4913,skewX:7.9347,skewY:10.7156,x:-461.55,y:234.9},0).wait(1).to({scaleX:0.3871,scaleY:0.4832,skewX:4.7818,skewY:8.6285,x:-462.25,y:239.55},0).wait(1).to({scaleX:0.3738,scaleY:0.4751,skewX:1.6289,skewY:6.5414,x:-463.05,y:244.05},0).wait(1).to({scaleX:0.3605,scaleY:0.4671,skewX:-1.5241,skewY:4.4543,x:-463.95,y:248.55},0).wait(1).to({scaleX:0.3471,scaleY:0.459,skewX:-4.677,skewY:2.3672,x:-464.9,y:252.95},0).wait(1).to({scaleX:0.3558,scaleY:0.4651,skewX:6.1407,skewY:2.416,x:-475.2,y:257.65},0).wait(1).to({scaleX:0.3646,scaleY:0.4811,skewX:-5.8269,skewY:2.4534,x:-470.9,y:263.25},0).wait(1).to({scaleX:0.3733,scaleY:0.4599,skewX:-7.3026,skewY:2.4777,x:-473.55,y:265.8},0).wait(1).to({scaleX:0.382,scaleY:0.4388,skewX:-8.7783,skewY:2.502,x:-476.3,y:268.35},0).wait(1).to({scaleX:0.3269,scaleY:0.4885,skewX:-9.9299,skewY:2.4292,x:-481.15,y:276.25},0).wait(1).to({scaleX:0.4252,scaleY:0.4259,skewX:1.923,skewY:2.4633,x:-484.7,y:272.1},0).wait(1).to({scaleX:0.4264,scaleY:0.4721,skewX:13.6676,skewY:2.3986,x:-492.3,y:274.65},0).wait(1).to({scaleX:0.4275,scaleY:0.4561,skewX:13.6788,skewY:2.4094,x:-492,y:273.45},0).wait(1).to({scaleX:0.4287,scaleY:0.4401,skewX:13.69,skewY:2.4202,x:-491.65,y:272.2},0).wait(1).to({scaleX:0.4298,scaleY:0.4241,skewX:13.7012,skewY:2.431,x:-491.25,y:271},0).wait(1).to({scaleX:0.4032,scaleY:0.4491,skewX:11.5957,skewY:2.6316,x:-491.65,y:273.2},0).to({_off:true},1).wait(51));

	// happyfrogs
	this.instance_7 = new lib.HappyFrogi();
	this.instance_7.setTransform(-490.6,279.85,0.9222,0.9215,0,0,0,54,79.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(70).to({_off:false},0).wait(51));

	// Pinkfrogi
	this.instance_8 = new lib.lookside_pink();
	this.instance_8.setTransform(-1036.3,240.9,0.2082,0.2299,0,5.159,-173.8073,87.8,141.8);

	this.instance_9 = new lib.ENDSCREEN_PinkFrog();
	this.instance_9.setTransform(-695.8,255.8,1,1,0,0,0,49.8,49.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},48).to({state:[]},3).to({state:[{t:this.instance_9}]},21).wait(49));

	// jumpPink
	this.instance_10 = new lib.jumperPink();
	this.instance_10.setTransform(-1015.2,206.4,0.3756,0.2975,0,0,0,94.2,69);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(51).to({_off:false},0).wait(1).to({regX:94.5,regY:95,scaleX:0.3729,scaleY:0.3262,skewX:-0.0324,skewY:1.9374,x:-998.85,y:204.6},0).wait(1).to({scaleX:0.3702,scaleY:0.3548,skewX:-0.0647,skewY:3.8747,x:-982.55,y:195.1},0).wait(1).to({scaleX:0.3675,scaleY:0.3835,skewX:-0.0971,skewY:5.8121,x:-966.3,y:185.6},0).wait(1).to({scaleX:0.3648,scaleY:0.4121,skewX:-0.1295,skewY:7.7495,x:-950.05,y:176.1},0).wait(1).to({scaleX:0.35,scaleY:0.3115,skewX:-0.1619,skewY:9.6869,x:-924.55,y:169.25},0).wait(1).to({scaleX:0.3352,scaleY:0.2108,skewX:-0.1942,skewY:11.6242,x:-899.05,y:162.4},0).wait(1).to({scaleX:0.3486,scaleY:0.2557,skewX:-0.7485,skewY:13.4389,x:-873.5,y:159.35},0).wait(1).to({scaleX:0.3619,scaleY:0.3006,skewX:-1.3027,skewY:15.2537,x:-847.9,y:156.25},0).wait(1).to({scaleX:0.3752,scaleY:0.3467,skewX:-5.2317,skewY:13.6936,x:-829.6,y:171.05},0).wait(1).to({scaleX:0.3886,scaleY:0.3928,skewX:-9.1608,skewY:12.1336,x:-811.1,y:185.85},0).wait(1).to({scaleX:0.4019,scaleY:0.4389,skewX:-13.0898,skewY:10.5735,x:-792.45,y:200.5},0).wait(1).to({scaleX:0.4102,scaleY:0.4203,skewX:-20.3917,skewY:9.0992,x:-785.6,y:212.55},0).wait(1).to({scaleX:0.4184,scaleY:0.4018,skewX:-27.6937,skewY:7.6249,x:-778.85,y:224.35},0).wait(1).to({scaleX:0.4267,scaleY:0.3832,skewX:-34.9957,skewY:6.1506,x:-772.25,y:236.1},0).wait(1).to({scaleX:0.435,scaleY:0.3646,skewX:-42.2976,skewY:4.6763,x:-765.95,y:247.8},0).wait(1).to({scaleY:0.4021,skewX:-36.0492,skewY:3.1542,x:-761.2,y:251.05},0).wait(1).to({scaleY:0.4395,skewX:-29.8007,skewY:1.6322,x:-756.75,y:254.3},0).wait(1).to({scaleY:0.477,skewX:-23.5523,skewY:0.1102,x:-752.55,y:257.55},0).wait(1).to({scaleY:0.4611,skewX:-6.1818,skewY:0.1093,x:-737.2,y:258.2},0).wait(1).to({scaleY:0.4452,skewX:11.1887,skewY:0.1084,x:-721.7,y:257.75},0).to({_off:true},1).wait(49));

	// Greenfrogi
	this.instance_11 = new lib.lookside_Green();
	this.instance_11.setTransform(-991.6,76.15,0.2658,0.2552,0,0,-172.7314,89.5,95);

	this.instance_12 = new lib.GreenHappyFrogi();
	this.instance_12.setTransform(-596.25,255.8,0.6776,0.68,0,0,0,73.4,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},48).to({state:[]},3).to({state:[{t:this.instance_12}]},21).wait(49));

	// jumpGreen
	this.instance_13 = new lib.jumperGreen_1();
	this.instance_13.setTransform(-961.65,86.75,0.3756,0.2976,14.9967,0,0,86.1,89.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(51).to({_off:false},0).wait(1).to({regX:94.5,regY:95,scaleX:0.3615,scaleY:0.2584,rotation:0,skewX:10.4136,skewY:17.5431,x:-922.5,y:85.55},0).wait(1).to({scaleX:0.3473,scaleY:0.2191,skewX:5.8291,skewY:20.0881,x:-886,y:81.9},0).wait(1).to({scaleX:0.3509,scaleY:0.2175,skewX:1.2446,skewY:22.6332,x:-858.7,y:83.8},0).wait(1).to({scaleX:0.3546,scaleY:0.2158,skewX:-3.3399,skewY:25.1782,x:-831.4,y:85.65},0).wait(1).to({scaleX:0.3582,scaleY:0.2142,skewX:-7.9244,skewY:27.7232,x:-804.05,y:87.55},0).wait(1).to({scaleX:0.3619,scaleY:0.2125,skewX:-12.5089,skewY:30.2682,x:-776.75,y:89.4},0).wait(1).to({scaleX:0.3655,scaleY:0.2482,skewX:-13.6839,skewY:29.0917,x:-756.1,y:99.55},0).wait(1).to({scaleX:0.3692,scaleY:0.2839,skewX:-14.8589,skewY:27.9152,x:-735.5,y:109.7},0).wait(1).to({scaleX:0.3728,scaleY:0.3196,skewX:-16.0338,skewY:26.7386,x:-714.9,y:119.85},0).wait(1).to({scaleX:0.3765,scaleY:0.3553,skewX:-17.2088,skewY:25.5621,x:-694.25,y:129.95},0).wait(1).to({scaleX:0.3802,scaleY:0.3495,skewX:-15.9107,skewY:24.4186,x:-676.85,y:151.5},0).wait(1).to({scaleX:0.3838,scaleY:0.3437,skewX:-14.6126,skewY:23.275,x:-659.45,y:173.05},0).wait(1).to({scaleX:0.3875,scaleY:0.3378,skewX:-13.3145,skewY:22.1315,x:-642.05,y:194.55},0).wait(1).to({scaleY:0.3475,skewX:-16.6317,skewY:20.8835,x:-624.5,y:216.1},0).wait(1).to({scaleY:0.3571,skewX:-19.9488,skewY:19.6355,x:-606.95,y:237.6},0).wait(1).to({scaleY:0.3872,skewX:-20.4524,skewY:18.453,x:-607.5,y:238.7},0).wait(1).to({scaleY:0.4173,skewX:-20.9559,skewY:17.2704,x:-608.1,y:239.75},0).wait(1).to({scaleY:0.4475,skewX:-21.4594,skewY:16.0879,x:-608.65,y:240.85},0).wait(1).to({scaleY:0.4776,skewX:-20.7128,skewY:16.1555,x:-594.8,y:248.4},0).wait(1).to({scaleY:0.5077,skewX:-19.9661,skewY:16.2232,x:-580.95,y:255.9},0).to({_off:true},1).wait(49));

	// Bluefrogi
	this.instance_14 = new lib.lookside_Blue();
	this.instance_14.setTransform(-1049.65,346.4,0.2442,0.2354,0,0,159.4318,89.2,94.7);

	this.instance_15 = new lib.ENDSCREEN_BlueFrog();
	this.instance_15.setTransform(-790.2,255.8,0.6776,0.68,0,0,0,73.5,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14,p:{regX:89.2,x:-1049.65}}]},58).to({state:[{t:this.instance_14,p:{regX:89.9,x:-1031.65}}]},1).to({state:[]},1).to({state:[{t:this.instance_15}]},10).wait(51));

	// jumpBlue
	this.instance_16 = new lib.jumperBlue();
	this.instance_16.setTransform(-1023.15,318.1,0.4,0.2952,-14.9972,0,0,89.6,90.8);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(61).to({_off:false},0).wait(1).to({regX:95,regY:95,scaleX:0.366,scaleY:0.2882,rotation:0,skewX:-10.377,skewY:-12.5559,x:-992.6,y:303.85},0).wait(1).to({scaleX:0.3319,scaleY:0.2811,skewX:-5.7551,skewY:-10.1129,x:-964.55,y:288.9},0).wait(1).to({scaleX:0.2979,scaleY:0.2739,skewX:-1.1332,skewY:-7.6699,x:-936.5,y:273.95},0).wait(1).to({scaleY:0.2805,skewX:3.5759,skewY:-5.1701,x:-917.9,y:269.3},0).wait(1).to({scaleY:0.2871,skewX:8.2849,skewY:-2.6703,x:-899.4,y:264.65},0).wait(1).to({scaleY:0.2937,skewX:12.9939,skewY:-0.1705,x:-880.75,y:259.9},0).wait(1).to({scaleY:0.3003,skewX:15.2031,skewY:-0.1705,x:-854.55,y:255.9},0).wait(1).to({scaleY:0.3069,skewX:17.4123,x:-828.2,y:251.9},0).to({_off:true},1).wait(51));

	// butterfly_open
	this.instance_17 = new lib.butterfly_open_1();
	this.instance_17.setTransform(-1039.7,-331.75,0.1765,0.3382,0,120.3355,134.979);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:70.5,regY:68,scaleX:0.1854,scaleY:0.3449,skewX:117.8959,skewY:134.3634,x:-1063.7,y:-322.65},0).wait(1).to({scaleX:0.1944,scaleY:0.3515,skewX:115.4528,skewY:133.7469,x:-1059.1,y:-310.7},0).wait(1).to({scaleX:0.2033,scaleY:0.3581,skewX:113.0097,skewY:133.1305,x:-1054.45,y:-298.75},0).wait(1).to({scaleX:0.2122,scaleY:0.3647,skewX:110.5667,skewY:132.5141,x:-1049.7,y:-286.65},0).wait(1).to({scaleX:0.2211,scaleY:0.3714,skewX:108.1236,skewY:131.8976,x:-1045,y:-274.6},0).wait(1).to({scaleX:0.23,scaleY:0.378,skewX:105.6805,skewY:131.2812,x:-1040.25,y:-262.4},0).wait(1).to({scaleX:0.2389,scaleY:0.3846,skewX:103.2375,skewY:130.6648,x:-1035.45,y:-250.2},0).wait(1).to({scaleX:0.242,scaleY:0.3824,skewX:100.6398,skewY:121.724,x:-1025.3,y:-237.9},0).wait(1).to({scaleX:0.245,scaleY:0.3802,skewX:98.0422,skewY:112.7832,x:-1014.9,y:-225.85},0).wait(1).to({scaleX:0.2481,scaleY:0.378,skewX:95.4446,skewY:103.8424,x:-1004.2,y:-214.25},0).wait(1).to({scaleX:0.2511,scaleY:0.3758,skewX:92.847,skewY:94.9016,x:-993.2,y:-203},0).wait(1).to({scaleX:0.2542,scaleY:0.3736,skewX:90.2493,skewY:85.9608,x:-982.15,y:-192.25},0).wait(1).to({scaleX:0.2354,scaleY:0.3713,skewX:83.7298,skewY:70.4603,x:-964.95,y:-187.8},0).wait(1).to({scaleX:0.2166,scaleY:0.3691,skewX:77.2103,skewY:54.9597,x:-948.55,y:-184.35},0).wait(1).to({scaleX:0.2231,scaleY:0.3669,skewX:70.8382,skewY:53.7777,x:-934.45,y:-177.7},0).wait(1).to({scaleX:0.2296,scaleY:0.3647,skewX:64.4661,skewY:52.5956,x:-920.15,y:-171.25},0).wait(1).to({scaleX:0.2361,scaleY:0.3625,skewX:58.094,skewY:51.4135,x:-905.5,y:-164.95},0).wait(1).to({scaleX:0.2426,scaleY:0.3603,skewX:54.7217,skewY:53.2313,x:-886.3,y:-165.5},0).wait(1).to({scaleX:0.2491,scaleY:0.358,skewX:51.3493,skewY:55.049,x:-867.05,y:-166.15},0).wait(1).to({scaleX:0.2556,scaleY:0.3558,skewX:47.977,skewY:56.8667,x:-847.75,y:-166.85},0).wait(1).to({scaleX:0.2621,scaleY:0.3536,skewX:44.6047,skewY:58.6844,x:-828.5,y:-167.65},0).wait(1).to({scaleX:0.2357,scaleY:0.3528,skewX:44.4806,skewY:63.438,x:-814.2,y:-173.9},0).wait(1).to({scaleX:0.2093,scaleY:0.3521,skewX:44.3564,skewY:68.1915,x:-799.75,y:-180.4},0).wait(1).to({scaleX:0.1828,scaleY:0.3513,skewX:44.2323,skewY:72.9451,x:-785.05,y:-187.15},0).wait(1).to({scaleX:0.1737,scaleY:0.3505,skewX:40.6195,skewY:69.4869,x:-763.7,y:-195.65},0).wait(1).to({scaleX:0.1646,scaleY:0.3497,skewX:37.0067,skewY:66.0287,x:-742.45,y:-204.25},0).wait(1).to({scaleX:0.1555,scaleY:0.349,skewX:33.3939,skewY:62.5705,x:-721.2,y:-213},0).wait(1).to({scaleX:0.1904,scaleY:0.3482,skewX:32.8855,skewY:62.2165,x:-709.55,y:-214.05},0).wait(1).to({scaleX:0.2253,scaleY:0.3474,skewX:32.377,skewY:61.8624,x:-697.85,y:-215.1},0).wait(1).to({scaleX:0.2602,scaleY:0.3467,skewX:31.8685,skewY:61.5084,x:-686.15,y:-216.2},0).wait(1).to({scaleX:0.2951,scaleY:0.3459,skewX:31.36,skewY:61.1543,x:-674.4,y:-217.25},0).wait(1).to({scaleX:0.2879,scaleY:0.3451,skewX:38.2721,skewY:70.418,x:-667.7,y:-218.05},0).wait(1).to({scaleX:0.2807,scaleY:0.3443,skewX:45.1842,skewY:79.6817,x:-660.75,y:-219.6},0).wait(1).to({scaleX:0.2736,scaleY:0.3436,skewX:52.0963,skewY:88.9454,x:-653.55,y:-221.9},0).wait(1).to({scaleX:0.2664,scaleY:0.3428,skewX:59.0084,skewY:98.2091,x:-645.9,y:-224.95},0).wait(1).to({scaleX:0.2417,scaleY:0.342,skewX:66.6396,skewY:103.7957,x:-635.2,y:-223.2},0).wait(1).to({scaleX:0.217,scaleY:0.3413,skewX:74.2707,skewY:109.3822,x:-623.9,y:-221.6},0).wait(1).to({scaleX:0.1923,scaleY:0.3405,skewX:81.9019,skewY:114.9688,x:-611.65,y:-220.2},0).wait(1).to({scaleX:0.2795,scaleY:0.3397,skewX:89.5228,skewY:120.554,x:-602.8,y:-212.05},0).wait(1).to({scaleX:0.2676,scaleY:0.3389,skewX:81.9408,skewY:113.8771,x:-588.6,y:-200.6},0).wait(1).to({scaleX:0.2556,scaleY:0.3382,skewX:74.3587,skewY:107.2003,x:-574.15,y:-189.65},0).wait(1).to({scaleX:0.2436,scaleY:0.3374,skewX:66.7767,skewY:100.5234,x:-559.35,y:-179.05},0).wait(1).to({scaleX:0.2316,scaleY:0.3366,skewX:59.1946,skewY:93.8465,x:-544.35,y:-168.95},0).wait(1).to({scaleX:0.1264,scaleY:0.3359,skewX:58.9586,skewY:62.0534,x:-526.45,y:-178.9},0).wait(1).to({scaleX:0.1301,scaleY:0.3351,skewX:59.0063,skewY:64.4284,x:-514.2,y:-180.15},0).wait(1).to({scaleX:0.1338,scaleY:0.3343,skewX:59.0541,skewY:66.8034,x:-501.9,y:-181.4},0).wait(1).to({scaleX:0.1375,scaleY:0.3335,skewX:59.1018,skewY:69.1783,x:-489.6,y:-182.7},0).wait(1).to({scaleX:0.1412,scaleY:0.3328,skewX:47.9003,skewY:60.3041,x:-478.2,y:-192.9},0).wait(1).to({scaleX:0.1448,scaleY:0.332,skewX:36.6988,skewY:51.4299,x:-466.25,y:-203.95},0).wait(1).to({scaleX:0.1758,scaleY:0.3312,skewX:40.5144,skewY:57.5752,x:-459.85,y:-215.8},0).wait(1).to({scaleX:0.2067,scaleY:0.3305,skewX:44.3299,skewY:63.7204,x:-453.85,y:-227.6},0).wait(1).to({scaleX:0.2376,scaleY:0.3297,skewX:39.7302,skewY:61.4504,x:-440.7,y:-229.55},0).wait(1).to({scaleX:0.2446,scaleY:0.3289,skewX:38.8878,skewY:62.9357,x:-430.3,y:-233.55},0).wait(1).to({scaleX:0.2515,scaleY:0.3281,skewX:28.0447,skewY:54.4203,x:-414.05,y:-237},0).wait(1).to({scaleX:0.2585,scaleY:0.3274,skewX:62.2005,skewY:90.9037,x:-423.6,y:-247.3},0).wait(1).to({scaleX:0.2655,scaleY:0.3266,skewX:96.3563,skewY:127.3871,x:-426.75,y:-268.3},0).wait(1).to({scaleX:0.2692,scaleY:0.3274,skewX:83.3876,skewY:114.4187,x:-404.3,y:-258.6},0).wait(1).to({scaleX:0.273,scaleY:0.3283,skewX:70.4189,skewY:101.4503,x:-380.2,y:-249.85},0).wait(1).to({scaleX:0.2768,scaleY:0.3291,skewX:57.4502,skewY:88.4818,x:-354.7,y:-242.4},0).wait(1).to({scaleX:0.2805,scaleY:0.3299,skewX:44.4814,skewY:75.5134,x:-328.1,y:-236.55},0).wait(1).to({scaleX:0.2665,scaleY:0.3307,skewX:56.4625,skewY:87.495,x:-329.9,y:-237.35},0).wait(1).to({scaleX:0.2524,scaleY:0.3316,skewX:68.4436,skewY:99.4766,x:-330.45,y:-239.45},0).wait(1).to({scaleX:0.2384,scaleY:0.3324,skewX:80.4247,skewY:111.4582,x:-329.6,y:-242.7},0).wait(1).to({scaleX:0.2244,scaleY:0.3332,skewX:92.4058,skewY:123.4398,x:-327.1,y:-246.65},0).wait(1).to({scaleX:0.2103,scaleY:0.334,skewX:104.3869,skewY:135.4214,x:-322.9,y:-250.95},0).wait(1).to({scaleX:0.2107,scaleY:0.3348,skewX:107.3506,skewY:138.3843,x:-317,y:-248.45},0).wait(1).to({scaleX:0.2111,scaleY:0.3357,skewX:110.3143,skewY:141.3472,x:-311,y:-245.9},0).wait(1).to({scaleX:0.2115,scaleY:0.3365,skewX:113.2779,skewY:144.3101,x:-304.95,y:-243.45},0).wait(1).to({scaleX:0.2119,scaleY:0.3373,skewX:116.2416,skewY:147.2729,x:-298.8,y:-241},0).wait(1).to({scaleX:0.2123,scaleY:0.3382,skewX:119.2053,skewY:150.2358,x:-292.6,y:-238.45},0).wait(1).to({scaleX:0.2126,scaleY:0.339,skewX:149.1681,skewY:180.1979,x:-286.15,y:-249.2},0).wait(1).to({scaleX:0.186,scaleY:0.3398,skewX:156.6927,skewY:187.7206,x:-281.3,y:-246.95},0).wait(1).to({scaleX:0.1594,scaleY:0.3406,skewX:164.2172,skewY:195.2433,x:-276.15,y:-243.95},0).wait(1).to({scaleX:0.2529,scaleY:0.3415,skewX:179.2096,skewY:210.2184,x:-281.25,y:-241.15},0).wait(1).to({scaleX:0.222,scaleY:0.3423,skewX:194.194,skewY:225.1992,x:-277.45,y:-233},0).wait(1).to({scaleX:0.1912,scaleY:0.3431,skewX:209.1785,skewY:240.1799,x:-274,y:-221.75},0).wait(1).to({scaleX:0.2433,scaleY:0.3439,skewX:227.4536,skewY:258.4536,x:-287.35,y:-214.8},0).wait(1).to({scaleX:0.2118,scaleY:0.3447,skewX:227.6559,skewY:258.6544,x:-309.25,y:-205.15},0).wait(1).to({scaleX:0.1802,scaleY:0.3456,skewX:227.8582,skewY:258.8552,x:-315.7,y:-200.55},0).wait(1).to({scaleX:0.1487,scaleY:0.3464,skewX:228.0606,skewY:259.0559,x:-322.15,y:-196.05},0).wait(1).to({scaleX:0.1172,scaleY:0.3472,skewX:228.2629,skewY:259.2567,x:-328.6,y:-191.5},0).wait(1).to({scaleX:0.1739,scaleY:0.348,skewX:228.4668,skewY:259.4565,x:-346.25,y:-174.7},0).wait(1).to({scaleX:0.2306,scaleY:0.3489,skewX:179.1709,skewY:210.1564,x:-356.15,y:-165.1},0).wait(1).to({scaleX:0.2004,scaleY:0.3497,skewX:156.5889,skewY:175.2691,x:-356.8,y:-150.4},0).wait(1).to({scaleX:0.1702,scaleY:0.3505,skewX:134.0069,skewY:140.3819,x:-351.15,y:-135.15},0).wait(1).to({scaleX:0.1695,scaleY:0.3513,skewX:128.9869,skewY:140.2881,x:-347.5,y:-129.95},0).wait(1).to({scaleX:0.1689,scaleY:0.3522,skewX:123.9668,skewY:140.1943,x:-343.75,y:-124.7},0).wait(1).to({scaleX:0.1682,scaleY:0.353,skewX:118.9468,skewY:140.1005,x:-339.85,y:-119.25},0).wait(1).to({scaleX:0.1411,scaleY:0.3538,skewX:119.0001,skewY:145.0762,x:-338.95,y:-121.2},0).wait(1).to({scaleX:0.1141,scaleY:0.3546,skewX:119.0534,skewY:150.0518,x:-337.8,y:-122.95},0).wait(1).to({scaleX:0.1296,scaleY:0.3555,skewX:119.0522,skewY:150.0498,x:-327.8,y:-115.95},0).wait(1).to({scaleX:0.1451,scaleY:0.3563,skewX:119.0509,skewY:150.0479,x:-317.8,y:-108.9},0).wait(1).to({scaleX:0.1606,scaleY:0.3571,skewX:114.0501,skewY:145.0463,x:-311.25,y:-105.65},0).wait(1).to({scaleX:0.1761,scaleY:0.3579,skewX:109.0492,skewY:140.0446,x:-304.25,y:-102.25},0).wait(1).to({scaleX:0.1916,scaleY:0.3588,skewX:104.0483,skewY:135.043,x:-296.95,y:-98.6},0).wait(1).to({scaleX:0.1859,scaleY:0.3596,skewX:89.025,skewY:120.0186,x:-287.75,y:-100.15},0).wait(1).to({scaleX:0.1802,scaleY:0.3604,skewX:74.0018,skewY:104.9942,x:-276.6,y:-102.55},0).wait(1).to({scaleX:0.1745,scaleY:0.3612,skewX:58.9785,skewY:89.9697,x:-263.8,y:-106.3},0).wait(1).to({scaleX:0.1689,scaleY:0.3621,skewX:36.4555,skewY:67.4456,x:-256.35,y:-112.95},0).wait(1).to({scaleX:0.1632,scaleY:0.3629,skewX:13.9326,skewY:44.9215,x:-247.55,y:-124.2},0).wait(1).to({scaleX:0.1575,scaleY:0.3637,skewX:-1.0903,skewY:29.8975,x:-247.4,y:-126.7},0).wait(1).to({scaleX:0.1518,scaleY:0.3646,skewX:-16.1131,skewY:14.8735,x:-248,y:-131.2},0).wait(1).to({scaleX:0.1659,scaleY:0.3654,skewX:-38.661,skewY:-1.2997,x:-245.8,y:-139.35},0).wait(1).to({scaleX:0.18,scaleY:0.3662,skewX:-61.2088,skewY:-17.473,x:-246.85,y:-151.05},0).wait(1).to({scaleX:0.1727,scaleY:0.367,skewX:-65.3024,skewY:-27.9432,x:-268.6,y:-172},0).wait(1).to({scaleX:0.1655,skewX:-72.082,skewY:-41.1028,x:-288,y:-174.2},0).wait(1).to({scaleX:0.1071,skewX:-96.9956,skewY:-66.0247,x:-319.5,y:-184.2},0).wait(1).to({scaleX:0.1646,skewX:-118.0543,skewY:-87.078,x:-324,y:-184.1},0).wait(1).to({scaleX:0.2221,skewX:-139.113,skewY:-108.1313,x:-334.4,y:-181},0).wait(1).to({scaleX:0.234,skewX:-160.1914,skewY:-127.6546,x:-346.55,y:-184.95},0).wait(1).to({scaleX:0.2459,skewX:-181.2697,skewY:-147.1778,x:-359,y:-183.9},0).wait(1).to({scaleX:0.2578,skewX:-203.8115,skewY:-168.1646,x:-351.8,y:-165.65},0).wait(1).to({scaleX:0.2697,skewX:-226.3533,skewY:-189.1513,x:-340.7,y:-142.8},0).wait(1).to({skewX:-233.8528,skewY:-196.6508,x:-334.7,y:-132.5},0).wait(1).to({skewX:-241.3523,skewY:-204.1503,x:-328.1,y:-122.1},0).wait(1).to({skewX:-248.8518,skewY:-211.6498,x:-331.35,y:-115.5},0).wait(1).to({skewX:-256.3513,skewY:-219.1493,x:-333.85,y:-109},0).wait(1).to({skewX:-278.8503,skewY:-241.6483,x:-333.55,y:-104.35},0).wait(1).to({skewX:-301.3493,skewY:-264.1473,x:-328.1,y:-102.9},0).wait(1).to({regX:0,regY:0,skewX:-301.3478,skewY:-264.1507,x:-304.85,y:-134.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1097,-355,1311.7,505.9);
p.frameBounds = [rect, new cjs.Rectangle(-1093.7,-343.1,1309.1,494.7), new cjs.Rectangle(-1090.2,-330.9,1473.1,522.3), new cjs.Rectangle(-1086.8,-318.8,1452.3,507.6), new cjs.Rectangle(-1083.1,-306.4,1430.8,492.5), new cjs.Rectangle(-1079.5,-294.1,1409.5,477.3), new cjs.Rectangle(-1075.8,-281.5,1387.9,461.9), new cjs.Rectangle(-1071.9,-268.9,1371,447.6), new cjs.Rectangle(-1059.9,-257.1,1345.9,434.1), new cjs.Rectangle(-1047.2,-245.4,1320,420.6), new cjs.Rectangle(-1033.9,-233.6,1293.4,407.1), new cjs.Rectangle(-1020.3,-221.8,1266.4,393.3), new cjs.Rectangle(-1008.8,-210.1,1225.4,382.5), new cjs.Rectangle(-995.6,-206.1,1182.7,378.5), new cjs.Rectangle(-981.7,-202.2,1140.7,374), new cjs.Rectangle(-967.4,-198.5,1103.9,368.6), new cjs.Rectangle(-952.4,-194.7,1077,362.4), new cjs.Rectangle(-936.8,-190.9,1050.7,355.6), new cjs.Rectangle(-916.5,-193.3,914.7,344.9), new cjs.Rectangle(-896.1,-195.7,944.6,346.5), new cjs.Rectangle(-875.6,-198.1,924.1,349), new cjs.Rectangle(-854.9,-200.5,903.4,351.4), new cjs.Rectangle(-838.5,-205.7,887,356.6), new cjs.Rectangle(-822,-211.1,870.5,362), new cjs.Rectangle(-805.4,-216.4,853.9,367.3), new cjs.Rectangle(-783.5,-225.1,832,376), new cjs.Rectangle(-761.5,-233.8,810,384.7), new cjs.Rectangle(-739.3,-242.4,787.8,393.3), new cjs.Rectangle(-728.6,-245.7,777.1,396.6), new cjs.Rectangle(-718,-248.9,766.5,399.8), new cjs.Rectangle(-707.3,-252.2,755.8,403.1), new cjs.Rectangle(-696.7,-255.4,745.2,406.3), new cjs.Rectangle(-689,-255.5,737.5,406.4), new cjs.Rectangle(-680.9,-255.4,729.4,406.3), new cjs.Rectangle(-672.3,-255.4,720.8,406.3), new cjs.Rectangle(-668.5,-255.4,717,406.3), new cjs.Rectangle(-660.7,-248.9,709.2,399.8), new cjs.Rectangle(-651.2,-242.3,699.7,393.2), new cjs.Rectangle(-640.5,-235.7,689,386.5), new cjs.Rectangle(-636,-229.1,684.5,380), new cjs.Rectangle(-619.1,-221,667.6,371.9), new cjs.Rectangle(-601.6,-212.9,650.1,363.8), new cjs.Rectangle(-583.6,-204.9,632.1,383.7), new cjs.Rectangle(-565.1,-196.9,613.6,389.1), new cjs.Rectangle(-550.2,-198.5,598.7,403.4), new cjs.Rectangle(-537.7,-200.1,586.2,420.9), new cjs.Rectangle(-525.1,-201.7,573.6,443.3), new cjs.Rectangle(-516.1,-203.3,564.6,464.6), new cjs.Rectangle(-1056.2,-216.6,1104.7,496.3), new cjs.Rectangle(-1056.2,-229.9,1104.7,504.4), new cjs.Rectangle(-1056.2,-243.3,1104.7,510.3), new cjs.Rectangle(-1050.6,-256.6,1099.1,538.1), new cjs.Rectangle(-1034.1,-261.4,1082.6,557.1), new cjs.Rectangle(-1017.6,-266.2,1066.1,564.2), new cjs.Rectangle(-1001,-271,1049.5,571.4), new cjs.Rectangle(-984.3,-275.7,1032.8,578.2), new cjs.Rectangle(-957.3,-285.5,1005.8,590.1), new cjs.Rectangle(-930.2,-278.3,978.7,584.8), new cjs.Rectangle(-1070.4,-276,1118.9,653), new cjs.Rectangle(-1052.2,-273.8,1100.7,650.7), new cjs.Rectangle(-867.1,-271.6,915.6,592.7), new cjs.Rectangle(-1064.6,-268.5,1113.1,624.2), new cjs.Rectangle(-1031.5,-265.2,1080,603.7), new cjs.Rectangle(-998.3,-262.1,1046.8,596.3), new cjs.Rectangle(-965,-260.7,1013.5,584.7), new cjs.Rectangle(-947.8,-266.9,996.3,597.3), new cjs.Rectangle(-931.5,-265,980,592.4), new cjs.Rectangle(-915.4,-263.1,963.9,587.4), new cjs.Rectangle(-890.3,-261.2,1038.8,636), new cjs.Rectangle(-865.3,-259.2,1013.8,634.1), new cjs.Rectangle(-840,-257.1,988.4,632), new cjs.Rectangle(-840,-269.1,988.4,643.9), new cjs.Rectangle(-840,-270,988.4,644.9), new cjs.Rectangle(-840,-269.2,988.4,644.1), new cjs.Rectangle(-840,-273.5,988.4,648.4), new cjs.Rectangle(-840,-266.8,988.4,641.7), new cjs.Rectangle(-840,-253.9,988.4,628.7), new cjs.Rectangle(-840,-247.5,988.4,622.3), new cjs.Rectangle(-840,-235.6,988.4,610.4), new cjs.Rectangle(-840,-229,988.4,603.8), new cjs.Rectangle(-840,-222.2,988.4,597), new cjs.Rectangle(-840,-215.4,988.4,590.3), new cjs.Rectangle(-840,-202.5,988.4,577.4), new cjs.Rectangle(-840,-197.1,988.4,572), new cjs.Rectangle(-840,-173.4,988.4,548.2), new cjs.Rectangle(-840,-159.3,988.4,534.2), new cjs.Rectangle(-840,-152.6,988.4,527.4), rect=new cjs.Rectangle(-840,-148.9,988.4,523.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-840,-156.1,988.4,531), new cjs.Rectangle(-840,-156.9,988.4,531.7), new cjs.Rectangle(-840,-157.6,988.4,532.5), new cjs.Rectangle(-840,-159,988.4,533.8), new cjs.Rectangle(-840,-166.7,988.4,541.6), new cjs.Rectangle(-840,-188.1,988.4,563), new cjs.Rectangle(-840,-189.5,988.4,564.4), new cjs.Rectangle(-840,-194.1,988.4,569), new cjs.Rectangle(-840,-207.4,988.4,582.3), new cjs.Rectangle(-840,-214.7,988.4,589.6), new cjs.Rectangle(-840,-221.5,988.4,596.3), new cjs.Rectangle(-840,-218.2,988.4,593.1), new cjs.Rectangle(-840,-192.1,988.4,567), new cjs.Rectangle(-840,-163,988.4,537.8), new cjs.Rectangle(-840,-152.7,988.4,527.6), rect=new cjs.Rectangle(-840,-148.9,988.4,523.8), rect, rect, rect, rect, rect];


(lib.mc_raft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.raft("synched",0);
	this.instance.setTransform(277.4,193.5,1,1,0,0,0,277.4,193.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAOgEIgbAJ");
	this.shape.setTransform(533.175,214.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#814229").ss(1,1,1).p("ADMnpIAThgQABgzgEgxQgFg4gMg2QgdgagEAZQg6A5g8A2QghAdgfAbQgLAJgLAJQgtAmguAkQgTAPgUAPIgjgYIAAAAIiyh/IgIgGACyr3IhUBKIhXBMICUB0IAVARQgEASgGASQAVARAIgYQABgEABgFACyr3IAGAlQAEATADASQAHA1gHArQgCAygKAyQgCAGgBAHAiPq/IgVgSIgKgLIAKgCIAZgFIA4AxIAGAFIAGAFIA7AzAiPq/IgVAEIhTAQIgBAAQg5ALg5ALIgEABIAAAAIgLACAgipjIhYhKIgVgSAhWoQIAAAAIhOA+IhNgzIAAAAIiKhaAgPpIIAWgZAgPpIIg/AyADMnpIgBAEQgBAHgCAHIgCALADMnpIAAAAACmm4IhQhAIhlhQACqscIAIAlAiurcIjNApIgHALAikHSQgZAcgZAbIgXAaIAGAaIAHASIAHAUAACKSIhKA8IhcBJIgphgIAAAAQgFgLgEgKIgFgLIACg0AgWJyIgDAEIgtAvQgSAOgSAOQgFAEgEADQgRANgSANQgBABgBABQgGAFgGAFIgSgwIgBgBIgihaAjbKXIgEgKAC8G/IgEgGIgBgBQgBABAAABQgMALgMAMQgBABgBABQgkAiglAiQgEAEgEADQgBABgBABQglAggkAgAC/G3IAAgBQgDgYALAFIAOAMIChCLADCHHIgFgHAC9G+QgBAAAAABADCHHIgCAGIgJAXIijCPIAGAFICQByIAYAUIACABAC9G+IAAACIgBgBAC/G3QgCACAAAFADCHHQgCgKgBgGAgVJyIhfhQIgwgpIAAgnIBQBFIBSBHIACACIAAAAQgKAJgLAJQAAAAAAAAIgBAAAADKRIgFgFIAWgZAACKSIABgBAgVJyIgBAAADEHjIAHAlQAEATACASQAHA1gGArQgDAxgJAwQAAABgBACQgBAGgCAHADCHHQAOAlAHArQABAEAAAFQAEAcACAfQADBCgSBAQgFAQgFAQQgBABAAABADlHlIgjgeADAHNIAEAWIiqCVAF+JvIgBAAQgLAJgLAKQgCACgDACQg3Asg3AqQgKAHgKAIIAShaQABgzgEgxQgEglgGgjAGDJqIgHgGAGDJqIAAAqAGDJqIgNgwAF8JkIiXh/ACzMcQABgDABgDQACgDACgDQAEgFAEgHQABgDACgCADgLrQgMAJgNAIQgBABgCACAC5MiIgBgBIgDgCIg2grIgWgRIhnhRAC4MhIgBAAQgDACABgEQAAgBAAgBACzMcQABABABAAQABABACADADXMVIgeALQAAABAAABQAUARAJgYgAGDKUIh7BhIghAaIgQAGAC5MgIgBABACzMcIiwiLAikH5IhDBE");
	this.shape_1.setTransform(502.925,224.9522);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.1,1,1).p("AAAgRIAAAOQAAAKAAAL");
	this.shape_2.setTransform(486.425,144.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("Ai7yLQACgDADgCQAJgNARgMQACgBABgBQAKgGAMgGQALgHAOgGIAZgCIAkgBIA2gDIATAFIA0AMIAeAIQAkAaAPAZQAJAGAIABQAJABAHgIQANgcgGgYQgGgZgRgZQgTgRgagMQgJgEgKgDQgJgDgJgDQgXgHgZgFQgEgBgEAAQgOgDgOgDQgTgCgVgDQgSgBgTgBQgJgBgKACQgVACgXALQgGAEgHAEQgEABgDADIggAfQgIASgFAPQAAADgBACAjCybQACAJAFAIIAAgBAjCxnQADgTAEgRABAviIBhAAAC+viIADAAIAXDPIgrgHAkVvgIBTgCIAqAAAhsviIABAAICBAAAibtNIgngHIgeALIgFABIgDABQAAABgBAAQAAAAgBAAQgTAHgSAGIgOAFIhvAmIgNiFIgGg5IgBgQICKgEACVseIgYgDAA4ssIipgbADYsTQALBjAKBbIAJBTQAHA6AGA1InFg0QhBAVhBAWQgDABgCAAIgVAHIgPAFAjCpVIGvAAACyx3QAIBNAHBIAjgtJIgFABIgDABAjptGIgmANIgOAFAl0pcIgBgFICzAMAmMsOIATCxIAFABAlOiJIARABIJfABIAaDTIAAAAIAAAAIAAAAIAcC5AlemUIAhEMAkYBAIgJAGIAWCoIAHA2AkYBAIgJAGIAAAAAkhBGIgaARAjrGDIgJgDIAKBSIAoCTIAAiDAjrGCIgJgCAkhBGIgcjOAEDmTQARCVAOB3ACaCFIAHgDAjCD/IAwgSAi9GPIgFAAIgSgGAi9GPIgFgCIgTgFAiRGUIgsgFAhyDiIEKhdAFeEwIACALAFeEvIABAMAFlFfIAAAEIAPBmQAFAXAEAPQAZBfABBVQAABwgCBtQiXjCi9AmQgpAIghARQh9A9gzC2QgFiigEigIAAhJAFlFgIAAADAE8BMIn+hFIhWA5AC3B7ICFgvADhLeIgIjJAF0HJIABAIIiLgQACoG5IgcgDAB5LIQgag0gFhEQgCgUADghIAGhbAgWLyQACgHABgGQAIg8ABgsQACgTgJghIgVhgAgERGIASAyQAWAjAYASQAFAEAFADQApAZAzgMIBLgcQBDgoAFg2QAEg4gHg0QgGg0gcgkQgyg2hLgYQhMgRg+AOIAAAAQgnALgeAaQg2AsgMAwQgLAqAGAqQAKBBAcA9QAIAVAOATQAcAlA1AdQAnATAugCQAtgCAsgLQAegIAegLQAsgUAXgfQAKgPAGgRQAghFAThHQAKhPglglQg4hBhOgaAgOO/QgNAwATAzQAOApAxAVIA7AfQALgDALgDQAqgPAOgkQAcg3gRgpQgJgUgPgTQgngtg2ALQgPADgPAKQgIAFgIAJQgYAcAIAbQANAoAnAGQAOADALgBQAUgDAPgPQATgTgIgTQgGgVgagEQgSgFgQARQgCADgCADQgGAKAEAOQAFAQALgDQACgCADgBAg8QYQgHg0AiguQAqgcAmgIQAJgBAIgBQBMgHAwAeQA3AlATAvQARAlgKAjQgHAfgfAXQgkAdgtAJQgKABgKABQgbACgCgPAi5PwQgEAQAsCIQAGAUAKARQA5BmC1AWQAwgIAogLQB2gjAyhGQAPgWAJgZQAuiCgeh8AjCG5IAAgqABLGuIixgVAjCD/Ig6AWAj+EbIA8gcAlemUIgWjIICyAH");
	this.shape_3.setTransform(505.9041,255.805);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(0.1,1,1).p("AgtAMIgmhgAizgUIAwAwAjCAMIAqAcAiNg+IA9BLAAdAOIgQhbAAphIIAoBiACGgtIA9CBABvAhIgOhbAgbhSIAkBb");
	this.shape_4.setTransform(505.875,132.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6E3B3").s().p("Aj0CpQgKgRgGgTQgsiIAEgPQAzi3B9g8QAigSApgHQC8gnCXDCQAeB9guCBQgJAZgPAVQgyBHh2AjQgoALgvAHQi2gVg5hngAgdD9IAKgBQAsgBAsgLQAegIAegMQAsgUAXgfQAKgOAGgRQAghGAThGQACgQAAgPQAAg3gdgeQg4hBhOgaQBOAaA4BBQAdAeAAA3QAAAPgCAQQgTBGggBGQgGARgKAOQgXAfgsAUQgeAMgeAIQgsALgsABIgKABIAAAAIgBAAQgkAAghgPIAAAAIgFgDQg2gdgcglQgOgSgIgVQgcg+gKhAQgCgOAAgOQAAgcAHgcQAMgvA2gsQAegaAogLIAAgBIABAAQAbgGAeAAIAAAAIAAAAQAgAAAiAHIAAAAIADABIAIACIACAAQBLAXAyA3QAcAkAGA0QAEAhAAAiIgBAoQgFA2hDAnIhLAdIgCAAIgBABQgPADgNAAIAAAAIgBAAQgdAAgZgOIgDgCIgBAAIgBgBIgKgIQgYgSgWgjIgTgxIATAxQAWAjAYASIAKAIIABABIABAAIADACQAZAOAdAAIABAAIAAAAQANAAAPgDIABgBIACAAIBLgdQBDgnAFg2IABgoQAAgigEghQgGg0gcgkQgyg3hLgXIgCAAIgIgCIgDgBIAAAAQgigHggAAIAAAAIAAAAQgeAAgbAGIgBAAIAAABQgoALgeAaQg2AsgMAvQgHAcAAAcQAAAOACAOQAKBAAcA+QAIAVAOASQAcAlA2AdIAFADIAAAAQAhAPAkAAIABAAIAAAAgAAICeIAFAAIACgBIAUgCQAtgIAkgdQAfgYAHgeQAEgNAAgNQAAgXgLgXQgTgug3glIgBgBIgBAAQgngYg3AAIgBAAIAAAAIgUABIgGAAIgRADQgmAIgrAbQgcAnAAApIABARIgBgRQAAgpAcgnQArgbAmgIIARgDIAGAAIAUgBIAAAAIABAAQA3AAAnAYIABAAIABABQA3AlATAuQALAXAAAXQAAANgEANQgHAegfAYQgkAdgtAIIgUACIgCABIgFAAIAAAAIgBAAQgSAAgCgNIAAgBIAAABQACANASAAIABAAIAAAAgAAAB7IAVgGQAqgOAOgkQARgiAAgdQAAgRgGgPQgJgVgPgTIAAAAQgggjgngBIAAAAIgBAAIgRACIAAAAIAAAAIgDAAQgPADgPALQgIAFgIAJQgSAVAAAUQAAAHACAHQANAnAnAFIADABIAAAAIAOACIABAAIAAAAIAHgBQATgCAPgQQANgMAAgOQAAgFgCgGQgGgVgagEIAAAAIgBAAIgGgBIAAAAIAAAAQgNABgLALIgBABIAAABIgBAAIgEAFQgEAGAAAIQAAAFACAFIAAACIABAAQAEALAIAAIAAAAIAAAAIADgBIAFgCIgFACIgDABIAAAAIAAAAQgIAAgEgLIgBAAIAAgCQgCgFAAgFQAAgIAEgGIAEgFIABAAIAAgBIABgBQALgLANgBIAAAAIAAAAIAGABIABAAIAAAAQAaAEAGAVQACAGAAAFQAAAOgNAMQgPAQgTACIgHABIAAAAIgBAAIgOgCIAAAAIgDgBQgngFgNgnQgCgHAAgHQAAgUASgVQAIgJAIgFQAPgLAPgDIADAAIAAAAIAAAAIARgCIABAAIAAAAQAnABAgAjIAAAAQAPATAJAVQAGAPAAARQAAAdgRAiQgOAkgqAOIgVAGIg7gfQgxgUgPgqQgMgeAAgcQAAgUAGgUQgGAUAAAUQAAAcAMAeQAPAqAxAUIA7Afg");
	this.shape_5.setTransform(517.441,358.5562);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCB798").s().p("AD8LJIB7hhIABAEIAPBlIABAJgACfK/IiQhzICqiVIAGAlIAHAlQAHA1gHArQgCAxgJAwgADmJlQABgzgEgxQgDgkgGgkICWB/IACALIgWATIgFAEQg3Atg4ApIgUAPgAhTKiIBLg8IBlBRgAiqKYIgGgCIgSgFIgihaIgHgTIA7gcIAxgSIBfBQIgBAAIgEAEIAEgEIAAABIgEADIgsAvIglAcIgJAHgAiwKYIAAgCIAGACgAgOIyIhShHIEKhdIgYAYIgBABIhJBEIgJAHIgBACIhJBAgADKGEICEgvIABAAIgBAAIn+hGIhWA6IgJAGIgbjQIJeABIAbDVIAbC5gACsGOIAIgDQgCADgBAEIAAABgAiwi+IiCAqIgFACIgUAHIgXjJICyAIIGvAAIAKBTIAMBvgAmHqLICKBaIgOAFIhvAmgADAoRIABgDIAAgBIAThfQABgzgEgyIADAAIAXDPgACPoZIiTh0IBWhMIBhAAQAHA2gGAqQgDAzgKAxgAhfo+IAGgEIA+gyIBlBRgAjTo/IAFgBIgEABgAmEq+IAKgCIABAAIADgBIBzgWIAAAAIBTgCIArAAIBYBLQgtAmguAjIgogGIgeALIgFABgAhTrUIgGgFIAAAAIAGAFIgGgFICBAAIhAA4gAhZrZg");
	this.shape_6.setTransform(504.075,229.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#83A4AC").s().p("AC5MiIABgCIgCABIgDgEIgCgBIACgGIAFgGIAIgMIACgFIADgDIAZgRIgZARIgDADIgBgBIABABIgCAFIgIAMIgFAGIgCAGIiwiLICwCLIACABIAAACIg2grIgWgRIhmhRIAAgBIAAABIhLA8IhcBJIgphgIAAAAIgJgVIgEgLIABg0IAjBaIAAABIASAwIAMgKIADgCIAigaIAJgHIAkgcIAtgvIAEgEIABAAIhghQIgwgpIhCBEIgHgaIAXgaIAyg3IAAAnIAAgnIBQBFIBSBHIACACIBJhAIACgCIAJgHIBJhEIABgCIAYgXIACgCIAAABIAEAGIABABIAAgCQAAgFADgCIADAQIgGgHIAGAHIgDAGIgIAXIikCPICkiPIAIgXIAEAWIiqCVICQByIAZAUIACgNIABgDQAKgwACgxQAHgrgHg1IgHglIgHglIgEgWIADgGQANAlAHArIABAJQAFAcABAfIAAATQAAA4gPA3IgKAgIgBACIABgCIAKggQAPg3AAg4IAAgTQgBgfgFgcIgBgJQgHgrgNglIAjAeIgjgeIgDgQIAAgBQgEgYALAFIAPAMICgCLIAAAAIAHAqIgBAAIiWh/QAFAjAEAlQAEAxgBAzIgSBaIAUgPQA4gqA3gsIAEgEIAXgTIAAAAIAFAlIAAAAIh7BhIghAaIgQAGIgdALIAdgLIgBAGQgFAOgJAAQgHAAgIgHgAgCKMIAFAFIgFgFIAWgZIgWAZgAAaJ4IgGgFgAAAJgIgUASIAUgSIAAAAgAC5MiIgBgBIACgBIgBACIAAAAgAC1MfIAAgCIADAEgAC1MdIAAAAgADEL/gAgVJyIABAAIgBAAgAikHSgADDHHgADDHHgAC8G/IABgBIAAACgAC8G/gAC9G+gADAG3IAAAAgACnm4IAJgkIADgNQAKgyADgyQAGgrgHg1IgGglIgHglIgIglIAIAlIhUBKIhXBMICUB0IAVARIgJAkIhRhAIhlhQIAWgZIgWAZIg+AyIgGAEIgCACIgBAAIhOA+IhNgzIAlgMIABgBIABAAIgBAAIgmANIiKhaIgGg5IAIAGICyB/IgDABIADgBIAjAYIAngeQAvgkAsgmIhXhKIgWgSIgVgSIAAgNIAAgaIAZAVIgZAFIAZgFIA4AxIAGAFIAGAFIA7AzIBAg4QA8g2A6g5QAFgZAdAaQALA2AGA4QADAxgBAzIgTBgIAAAEIAAgEIAAAAIAAAEIgDAOIgDALIgBAEIgBAJQgFAOgKAAQgGAAgIgHgAgipjIAWgSIgWASgAmBqYIgBgQICLgDIhzAWIgDABIgBAAIgLACgAmBqYgAmCqoIAHgLIDNgpIAKALIAAAWIhTAQIAAAAIiLADgAj3qrIAAAAgACyr3g");
	this.shape_7.setTransform(502.9,224.9522);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BB9065").s().p("AjHMbIAAhIIgniUIgLhSIAJADIApBfIBchJICxAWIAWARIA2AqIAAABIAAAAIAAACIABAAIAAAAIABAAIAAAAIAAAAIABgBIAAAAIABACQAVARAIgYIABgGIAQgGIAhgaICLAQIgBgIIAJAnQAZBfABBUQAABwgCBtQiXjCi9AnQgoAHgiASQh9A8gzC3IgJlDgAgPLrQgBArgIA8IgDANIADgNQAIg8ABgrIAAgIQAAgSgGgbIgWhgIAWBgQAGAbAAASIAAAIgADcNLIgIjJgABWK9QAEBEAaA1Qgag1gEhEIgBgSQAAgPACgUIAFhbIgFBbQgCAUAAAPIABASgAjHLTIAAiEgACSJaIAAgCIAAAAIAAgBIADACIAAAAIgBABIAAAAIAAAAIgBAAIAAAAIgBAAgACVJZgACHIjIAcAEIgBACIgCAOgAjZH2IASAGIAAArIAAgrIAGAAIArAFIgiAaIgDACIgMAKgAkJF2IBChEIAwAoIgwASIg6AXIA6gXIg8AcgAjHFsgAkmC0IAJgGIBWg6IH+BFIAAAAIiEAvIgPgMQgLgFAEAYIAAAAIgIADIAAgBIgCACIkKBdIhQhFIgyA2IgXAagAlCgbIggkLIAUgIIAFgBICCgrIHFA1IAfELgAjHnoIizgMIABAFIgFgBIgTixIBvgmIAOgFIBNAzIBOg+IABAAIACgDICpAbIBRA/QAUARAJgXIABgJIABgEIADgLIADgPIArAHIAUC+gAl5nvIgBgFICzAMgAB4q0IAYADIgDANgAjqrbIAFgBIAegKIAnAGIgnAegAC6t1QgGg4gLg2QgdgZgFAZQg6A5g8A1IiBAAIgGgEIg4gxIgZgVIAAgXIAAgWIAAgOQADgTAFgRIAEgFQAJgNARgMIAEgBIAVgNQAMgHAOgGIAZgBIAjgCIA2gDIAUAFIA0AMIAeAIQAjAaAQAZQAIAHAIABIAPCUgAA7t1IBUhKIAHAlIAGAlgAhwt1IgGgEIAGAEgAjHt1IAAgNIAAgXIAVASIgVAFIAVgFIAWASg");
	this.shape_8.setTransform(506.4,244.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DB7A4D").s().p("ACuBZQgIgBgJgHQgPgZgkgaIgOhbIAOBbIgegHIgohiIAoBiIg0gMIgQhbIAQBbIgTgFIglhbIAlBbIg2ACIgnhfIAnBfIgkACIg8hMIA8BMIgZABQgOAGgLAHIgxgvIAxAvIgWANIgpgdIApAdIgDACQgRAMgJAMIgFAGIAAAAQgFgIgCgIIAAgtIAAgBIABgFQAFgOAIgSIAggfIAHgFIANgHQAXgMAVgCQAKgBAJABIAlACIAoAFIAcAFIAIACQAZAEAXAIIASAFIATAIQAaALATASQARAYAGAZQAGAYgNAbIg9iBIA9CBQgGAIgIAAIgCAAgAC+BRgAAFAGg");
	this.shape_9.setTransform(506.3197,132.5853);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,20,569.7,368.9);
p.frameBounds = [rect, null];


(lib.MC_MAIN_GAME = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FORGI_ENTER_MAIN_SCREEN();
	this.instance.setTransform(1458.15,403.2,1,1,0,0,0,493.4,71.1);

	this.islandA = new lib.MAINSCREEN_IslandA();
	this.islandA.name = "islandA";
	this.islandA.setTransform(1228.5,678.5,1,1,0,0,0,77.5,41.5);

	this.islandB = new lib.MAINSCREEN_IslandB();
	this.islandB.name = "islandB";
	this.islandB.setTransform(59.5,678.5,1,1,0,0,0,77.5,41.5);

	this.instance_1 = new lib.whiteline();
	this.instance_1.setTransform(-5,637,0.6709,1);

	this.text = new cjs.Text("רפסודה", "14px 'Heebo'");
	this.text.textAlign = "center";
	this.text.lineHeight = 23;
	this.text.lineWidth = 114;
	this.text.parent = this;
	this.text.setTransform(1208.25,580.45);

	this.text_1 = new cjs.Text("מתוך", "14px 'Heebo'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 23;
	this.text_1.lineWidth = 35;
	this.text_1.parent = this;
	this.text_1.setTransform(1210.85,606.95);

	this.GEZA = new lib.GEZA();
	this.GEZA.name = "GEZA";
	this.GEZA.setTransform(825.05,62.65,1,1,0,0,0,433.7,62.4);

	this.instance_2 = new lib.Game_boradkey();
	this.instance_2.setTransform(1152.1,189.65,1,1,0,0,0,93,67);

	this.SubjectGame_txt = new cjs.Text("", "14px 'Heebo'", "#FFFFFF");
	this.SubjectGame_txt.name = "SubjectGame_txt";
	this.SubjectGame_txt.textAlign = "center";
	this.SubjectGame_txt.lineHeight = 23;
	this.SubjectGame_txt.lineWidth = 129;
	this.SubjectGame_txt.parent = this;
	this.SubjectGame_txt.setTransform(77.7,113.15);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAuQgKgGgGgLQgGgKAAgPIAAgHQAAgPAFgKQAFgLAKgGQAKgFAOAAQAMAAAJAEQAJAEAFAHQAEAHACAIIgPAAQgBgFgDgFQgDgEgFgDQgGgCgIAAQgKAAgGAEQgHAEgDAJQgDAIAAALIAAAHQAAALAEAJQAEAIAHAEQAHAEAJAAIAMgBQAFgBADgCIAEgDIAAgWIgaAAIAAgLIApAAIAAAlIgHAGQgEADgIADQgIACgNAAQgMAAgLgFg");
	this.shape.setTransform(98.825,59.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAtQgKgFgGgLQgGgLAAgPIAAgFQAAgPAGgLQAGgLAKgFQAKgGAMAAQAOAAAKAGQAKAFAFALQAGALAAAPIAAAFQAAAPgGALQgFALgKAFQgKAGgOAAQgMAAgKgGgAgPgjQgHAEgDAJQgEAIAAAMIAAAFQAAAMAEAIQADAJAHAEQAHAEAIAAQAKAAAGgEQAHgEADgJQAEgIAAgMIAAgFQAAgMgEgIQgDgJgHgEQgHgEgJAAQgIAAgHAEg");
	this.shape_1.setTransform(88.225,59.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYAyIgYgpIAFAAIAFgBIAEgBIgBgCIgPAAIACAEIgZAAIAAgJIgDAAIAAAJIADAAIAAApIgOAAIAAhjIAkAAQAMAAAJAEQAIADAFAHQAEAGAAAKQAAAHgDAGQgDAFgGADQgEADgFACIAaAqIAAABgAgCAAQAHAAAFgDQAFgCADgFQADgEAAgFQAAgJgGgFQgGgFgMAAIgWAAIAAAmgAAFAJIgFAAIgCgEIAPAAIABACIgEABIgFABgAgZAJgAgcAJIAAgJIADAAIAAAJgAgZAAIAAgmIAWAAQAMAAAGAFQAGAFAAAJQAAAFgDAEQgDAFgFACQgFADgHAAgAgZAAg");
	this.shape_2.setTransform(78.575,59.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghAyIAAhjIALAAIADAAIA1AAIAAALIg1AAIAAgLIAAALIgDAAIAAgLIAAALIADAAIAAAiIAuAAIAAAKIguAAIAAgKIgDAAIAAAKIADAAIAAAsgAgTAGIgDAAIAAgKIADAAIAAAKgAgTgmg");
	this.shape_3.setTransform(69.325,59.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiAyIgLgaIAJAAIAAgLIgNAAIAEALIgtAAIAFgLIAkAAIgTguIADgHIAAgJIAEAAIAqBjgAgwAyIAqhjIAEAAIAAAJIACAHIATAuIgkAAIARguIgRAuIgNAAIAAALIAIAAIgLAagAAXAYIgEgLIANAAIAAALgAAXAYgAgeAYIAAgLIANAAIgFALgAgRANgAgRANgAAAghIgCgHIAAgJIAFAAIAAAJIgDAHg");
	this.shape_4.setTransform(55.65,59.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAyIAAgLIgCAAIAAALIgMAAIAAhjIAMAAIACAAIA2AAIAAALIg2AAIAAgLIAAALIgCAAIAAgLIAAALIACAAIAAAgIgCAAIAAAKIACAAIAAAjIA3AAIAAALgAgWAyIAAgLIACAAIAAALgAgUAngAgUAEIAAgKIAvAAIAAAKgAgWAEIAAgKIACAAIAAAKgAgUgmg");
	this.shape_5.setTransform(112.075,36.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZAyIgmgvIAHgFIACgDIgDgDIgIAJIACACIgOANIAAgQIgIAHIADAOIAFgFIAAAiIgPAAIAAhjIAPAAIAAAxIAMgMIAkglIASAAIgrAsIAvA3gAgjAHIAIgHIAAAQIgFAFgAgNADgAgNADIgCgCIAIgJIADADIgCADIgHAFg");
	this.shape_6.setTransform(103,36.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAyIAAhjIAPAAIAABjg");
	this.shape_7.setTransform(95.35,36.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAyIAAgLIgDAAIAAALIgMAAIAAhjIAPAAIAABYIA0AAIAAALgAgVAyIAAgLIADAAIAAALgAgSAng");
	this.shape_8.setTransform(89.475,36.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnAyIAAhjIAoAAQAMAAAJAEQAJAEAFAHQAEAHAAAJQAAAJgEAHQgFAGgJADQgJAEgMAAIgaAAIAAgLIAaAAQAJAAAFgBQAFgDACgEQADgFAAgFQAAgFgDgFQgCgEgFgDQgFgDgJAAIgaAAIAAAmIgCAAIAAALIACAAIAAAngAgbALIAAgLIACAAIAAALgAABAAIgaAAIAAgmIAaAAQAJAAAFADQAFADACAEQADAFAAAFQAAAFgDAFQgCAEgFADQgFABgJAAgAgZAAgAgZAAg");
	this.shape_9.setTransform(76.35,36.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AApAyIAAgnIABgpIAJgTIgJATIgkBQIgLAAIgkhQIgBgTIAHAAIAjBRIAkhRIAHAAIgBATIABgTIAIAAIAEAAIAABjgAg2AyIAAhjIAEAAIAJATIABApIAAAngAgygxIAIAAIABATgAgygxg");
	this.shape_10.setTransform(64.225,36.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTAuQgJgDgGgIQgFgHAAgLIAAhCIAPAAIAABCQAAAHADAFQADAGAGACQAFADAHAAQAIAAAFgDQAGgCADgGQAEgFAAgHIAAhCIAOAAIAABCQAAALgFAHQgGAIgJADQgJAFgLAAQgKAAgJgFg");
	this.shape_11.setTransform(52.325,37.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAvQgIgDgEgHQgFgGAAgJIAPAAQAAAJAGAEQAFAEAIABQAGgBAEgCQAFgCACgEQADgFABgGIAAhFIAOAAIAABFQAAAKgEAGQgFAIgIADQgHADgLABQgJgBgIgDg");
	this.shape_12.setTransform(42.55,37.05);

	this.instance_3 = new lib.brown_borad();
	this.instance_3.setTransform(82.7,80.2,1,1,0,0,0,74.6,84.3);

	this.raft3 = new lib.mc_raft();
	this.raft3.name = "raft3";
	this.raft3.setTransform(387.55,506.6,0.7067,0.5182,0,0,0,277.3,193.5);

	this.raft1 = new lib.mc_raft();
	this.raft1.name = "raft1";
	this.raft1.setTransform(203.75,316.6,0.7067,0.5182,0,0,0,309.2,215.8);

	this.raft4 = new lib.mc_raft();
	this.raft4.name = "raft4";
	this.raft4.setTransform(905.2,483.65,0.7067,0.5182,0,0,0,277.5,193.7);

	this.raft2 = new lib.mc_raft();
	this.raft2.name = "raft2";
	this.raft2.setTransform(636.65,305.05,0.7067,0.5182,0,0,0,277.4,193.5);

	this.instance_4 = new lib.GameBackground();
	this.instance_4.setTransform(0,0,0.6653,0.5719);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AmSktIMlAAIAAJbIslAAg");
	this.shape_13.setTransform(431.65,92.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BB9065").s().p("AmSEuIAApbIMlAAIAAJbg");
	this.shape_14.setTransform(431.65,92.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.instance_4},{t:this.raft2},{t:this.raft4},{t:this.raft1},{t:this.raft3},{t:this.instance_3},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.SubjectGame_txt},{t:this.instance_2},{t:this.GEZA},{t:this.text_1},{t:this.text},{t:this.instance_1},{t:this.islandB},{t:this.islandA},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MC_MAIN_GAME, rect = new cjs.Rectangle(-18,-4.1,1683.1,724.1), [rect]);


(lib.MC_homePage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Game_boradkey();
	this.instance.setTransform(1133.55,566.75,1,1,0,0,0,93,67);

	this.instance_1 = new lib.HappyFrogi();
	this.instance_1.setTransform(548.1,461.75,1.0259,1.028,0,0,0,54,53.6);

	this.instance_2 = new lib.namegameH1();
	this.instance_2.setTransform(359,107);

	this.text = new cjs.Text("עזרו לי להצטרף אל החברים שלי\nפרוגי לא יודע לשחות והוא צריך לעבור בהצלחה את הנהר כדי להצטרף לחבריו", "bold 14px 'Heebo'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 385;
	this.text.parent = this;
	this.text.setTransform(916.7,269.95);

	this.instance_3 = new lib.green_btn();
	this.instance_3.setTransform(859.55,494.5,1,1,0,0,0,270,44.5);

	this.instance_4 = new lib.Homescreenbackground();
	this.instance_4.setTransform(0,0,0.6691,0.6929);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AG6FIQgogogMg0QhgAkiBAAQiSAAhnguQhKghgVgrQiKBcjEAAQjDAAiLhcQiKhcAAiBQAAiCCKhcQCLhcDDAAQDEAACKBcQCLBcAACCQAAAhgJAeQBcggB6AAQBWAABHAQIA2gBQD9AACyAiQCzAiAAAxQAAAwizAjIgdAFIAAAJQAABSg6A5Qg5A6hSAAQhRAAg6g6g");
	this.shape.setTransform(478.675,400.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_4},{t:this.instance_3},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MC_homePage, rect = new cjs.Rectangle(0,0,1288.6,741.4), [rect]);


(lib.FrogiSideLook_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14));

	// Layer_1
	this.instance = new lib.FrogiSideLook();

	this.instance_1 = new lib.sad_frogi();
	this.instance_1.setTransform(52.5,56.05,0.5866,0.5864,0,0,180,89.5,95.6);

	this.instance_2 = new lib.frogiwin();
	this.instance_2.setTransform(52.75,56.95,0.4362,0.5504,0,29.097,31.3941,136.2,120.2);
	this.instance_2._off = true;

	this.instance_3 = new lib.HappyFrogi();
	this.instance_3.setTransform(45.9,42.8,0.9722,1.0467,0,0,0,54,53.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({regX:111.5,regY:89.5,skewX:29.0974,skewY:31.3954,x:51.7,y:7.2},0).wait(1).to({y:2.8},0).wait(1).to({y:-1.65},0).wait(1).to({y:-6.1},0).wait(1).to({y:6.15},0).wait(1).to({y:18.4},0).wait(1).to({y:30.65},0).wait(1).to({y:42.9},0).wait(2).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,105,112);
p.frameBounds = [rect, rect, new cjs.Rectangle(-13.7,-31.8,131,136.8), new cjs.Rectangle(-13.6,-61.1,131,136.8), new cjs.Rectangle(-13.6,-65.5,131,136.8), new cjs.Rectangle(-13.6,-69.9,131,136.8), new cjs.Rectangle(-13.6,-74.4,131,136.8), new cjs.Rectangle(-13.6,-62.1,131,136.8), new cjs.Rectangle(-13.6,-49.9,131,136.8), new cjs.Rectangle(-13.6,-37.6,131,136.8), rect=new cjs.Rectangle(-13.6,-25.4,131,136.8), rect, rect, new cjs.Rectangle(-6.6,-13.2,105,112)];


(lib.FrogiAQ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.frgiraft();
	this.instance.setTransform(536.05,-43.95,0.6886,0.6808);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FrogiAQ, rect = new cjs.Rectangle(536.1,-43.9,72.3,76.3), [rect]);


(lib.FrogiQuestionBoxG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Layer_1
	this.instance = new lib.frogiwin();
	this.instance.setTransform(52.75,57,0.486,0.6177,0,29.0935,31.3914,135.3,120);

	this.instance_1 = new lib.HappyFrogi();
	this.instance_1.setTransform(60.75,33.45,1.1232,1.2809,0,0,0,54.1,53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:111.5,regY:89.5,skewX:29.0941,skewY:31.3915,x:52,y:5.15},0).wait(1).to({y:0.75},0).wait(1).to({y:-3.7},0).wait(1).to({y:-8.15},0).wait(1).to({y:4.1},0).wait(1).to({y:16.35},0).wait(1).to({y:28.6},0).wait(1).to({y:40.85},0).wait(2).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-21,-41.9,146.3,153.1);
p.frameBounds = [rect, new cjs.Rectangle(-20.9,-71.3,146.3,153.1), new cjs.Rectangle(-20.9,-75.7,146.3,153.1), new cjs.Rectangle(-20.9,-80.1,146.3,153.1), new cjs.Rectangle(-20.9,-84.6,146.3,153.1), new cjs.Rectangle(-20.9,-72.3,146.3,153.1), new cjs.Rectangle(-20.9,-60.1,146.3,153.1), new cjs.Rectangle(-20.9,-47.8,146.3,153.1), rect=new cjs.Rectangle(-20.9,-35.6,146.3,153.1), rect, rect, new cjs.Rectangle(0,-34.9,121.3,137.1)];


(lib.Playagain_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("שחקו שוב", "bold 20px 'Heebo'");
	this.text.textAlign = "right";
	this.text.lineHeight = 31;
	this.text.lineWidth = 94;
	this.text.parent = this;
	this.text.setTransform(125.3,22.1);

	this.instance = new lib.end_btn();
	this.instance.setTransform(87.85,39.85,1.0005,0.994,0,0,0,87.8,40.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Playagain_btn, rect = new cjs.Rectangle(0,0,176.1,79.5), [rect]);


(lib.MainMenu_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("תפריט ראשי", "bold 20px 'Heebo'");
	this.text.textAlign = "right";
	this.text.lineHeight = 31;
	this.text.lineWidth = 125;
	this.text.parent = this;
	this.text.setTransform(134.25,22.1);

	this.MainMenu_btn = new lib.end_btn();
	this.MainMenu_btn.name = "MainMenu_btn";
	this.MainMenu_btn.setTransform(87.85,39.85,1.0005,0.994,0,0,0,87.8,40.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MainMenu_btn},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MainMenu_btn, rect = new cjs.Rectangle(0,0,176.1,79.5), [rect]);


(lib.umute_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.line1();
	this.instance.setTransform(25.2,23.3,1,1,0,0,0,14.2,7.8);

	this.instance_1 = new lib.mute();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.umute_btn, rect = new cjs.Rectangle(0,0,72,67), [rect]);


(lib.umusic_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.line1();
	this.instance.setTransform(26.6,23.85,1,1,0,0,0,14.2,7.8);

	this.instance_1 = new lib.music();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.umusic_btn, rect = new cjs.Rectangle(0,0,73,67), [rect]);


(lib.music_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.music();

	this.umusic_btn = new lib.umusic_btn();
	this.umusic_btn.name = "umusic_btn";
	this.umusic_btn.setTransform(36.5,33.5,1,1,0,0,0,36.5,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.umusic_btn}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,73,67);
p.frameBounds = [rect, rect];


(lib.endAnimiton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.end_animiton();
	this.instance.setTransform(1173.6,428.6,1,1,0,0,0,132.6,81.6);

	this.SubjectGame_txt = new cjs.Text("", "14px 'Heebo'", "#FFFFFF");
	this.SubjectGame_txt.name = "SubjectGame_txt";
	this.SubjectGame_txt.textAlign = "center";
	this.SubjectGame_txt.lineHeight = 23;
	this.SubjectGame_txt.lineWidth = 129;
	this.SubjectGame_txt.parent = this;
	this.SubjectGame_txt.setTransform(76.8,113.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAuQgKgGgGgLQgGgKAAgPIAAgHQAAgPAFgKQAFgLAKgGQAKgFAOAAQAMAAAJAEQAJAEAFAHQAEAHACAIIgPAAQgBgFgDgFQgDgEgFgDQgGgCgIAAQgKAAgGAEQgHAEgDAJQgDAIAAALIAAAHQAAALAEAJQAEAIAHAEQAHAEAJAAIAMgBQAFgBADgCIAEgDIAAgWIgaAAIAAgLIApAAIAAAlIgHAGQgEADgIADQgIACgNAAQgMAAgLgFg");
	this.shape.setTransform(97.875,59.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAtQgKgFgGgLQgGgLAAgPIAAgFQAAgPAGgLQAGgLAKgFQAKgGAMAAQAOAAAKAGQAKAFAFALQAGALAAAPIAAAFQAAAPgGALQgFALgKAFQgKAGgOAAQgMAAgKgGgAgPgjQgHAEgDAJQgEAIAAAMIAAAFQAAAMAEAIQADAJAHAEQAHAEAIAAQAKAAAGgEQAHgEADgJQAEgIAAgMIAAgFQAAgMgEgIQgDgJgHgEQgHgEgJAAQgIAAgHAEg");
	this.shape_1.setTransform(87.275,59.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYAyIgYgpIAFAAIAFgBIAEgBIgBgCIgPAAIACAEIgZAAIAAgJIAXAAQAHAAAFgDQAFgCADgFQADgEAAgFQAAgJgGgFQgGgFgMAAIgWAAIAAAmIgDAAIAAAJIADAAIAAApIgOAAIAAhjIAkAAQAMAAAJAEQAIADAFAHQAEAGAAAKQAAAHgDAGQgDAFgGADQgEADgFACIAaAqIAAABgAAAAJIgCgEIAPAAIABACIgEABIgFABgAAAAJgAgZAJgAgcAJIAAgJIADAAIAAAJgAgCAAIgXAAIAAgmIAWAAQAMAAAGAFQAGAFAAAJQAAAFgDAEQgDAFgFACQgFADgHAAg");
	this.shape_2.setTransform(77.625,59.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghAyIAAhjIALAAIAAALIADAAIAAAiIAuAAIAAAKIguAAIAAgKIgDAAIAAAKIADAAIAAAsgAgTAGIgDAAIAAgKIADAAIAAAKgAgTgmIAAgLIA1AAIAAALgAgWgmIAAgLIADAAIAAALgAgWgxg");
	this.shape_3.setTransform(68.375,59.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiAyIgKgaIAIAAIAAgLIgNAAIANAAIAAALIgIAAIgFgLIAFALIguAAIAEgLIgEALIgHAAIAAgLIALAAIAlAAIgTguIgCgHIAAgJIAAAJIACAHIgSAuIgLAAIAAALIAHAAIgKAaIgQAAIArhjIADAAIAGAAIgBAJIgDAHIADgHIABgJIACAAIArBjgAATANgAgSANIASguIATAugAAAghg");
	this.shape_4.setTransform(54.7,59.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAyIAAgLIgCAAIAAALIgMAAIAAhjIAMAAIACAAIA2AAIAAALIg2AAIAAgLIAAALIgCAAIAAgLIAAALIACAAIAAAgIgCAAIAAAKIACAAIAAAjIA3AAIAAALgAgWAyIAAgLIACAAIAAALgAgUAngAgUAEIAAgKIAvAAIAAAKgAgWAEIAAgKIACAAIAAAKgAgUgmg");
	this.shape_5.setTransform(111.125,37.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZAyIgmguIAHgGIADgDIgDgDIgJAJIACADIgOAMIAAgQIgIAHIADAOIAFgFIAAAiIgOAAIAAhjIAOAAIAAAxIAMgMIAlglIARAAIgqAsIAtA3gAgjAHIAIgHIAAAQIgFAFgAgPABIAJgJIADADIgDADIgHAGgAgDgFg");
	this.shape_6.setTransform(102.05,37.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAyIAAhjIANAAIAABjg");
	this.shape_7.setTransform(94.4,37.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAyIAAgLIgDAAIAAALIgMAAIAAhjIAPAAIAABYIA0AAIAAALgAgVAyIAAgLIADAAIAAALgAgSAng");
	this.shape_8.setTransform(88.525,37.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnAyIAAhjIAoAAQANAAAIAEQAJAEAEAHQAFAHAAAJQAAAJgFAHQgEAGgJADQgIAEgNAAIgaAAIAAgLIgDAAIAAALIADAAIAAAngAABAAQAJAAAFgBQAFgDADgEQACgFAAgFQAAgFgCgFQgDgEgFgDQgFgDgJAAIgaAAIAAAmIAaAAgAgZALIgDAAIAAgLIADAAIAAALgAABAAIgaAAIAAgmIAaAAQAJAAAFADQAFADADAEQACAFAAAFQAAAFgCAFQgDAEgFADQgFABgJAAgAgZAAg");
	this.shape_9.setTransform(75.4,37.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AApAyIAAgnIABgpIAJgTIgJATIgkBQIgLAAIgkhQIgBgTIAHAAIAjBRIAkhRIAHAAIgBATIABgTIAIAAIAEAAIAABjgAg2AyIAAhjIAEAAIAJATIABApIAAAngAgygxIAIAAIABATgAgygxg");
	this.shape_10.setTransform(63.275,37.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTAuQgJgDgGgHQgFgIAAgLIAAhDIAPAAIAABDQAAAIADAEQADAFAGADQAFACAHAAQAIAAAFgCQAGgDADgFQAEgEAAgIIAAhDIAOAAIAABDQAAALgFAIQgGAHgJADQgJAEgLABQgKgBgJgEg");
	this.shape_11.setTransform(51.375,37.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAvQgIgDgFgHQgEgGAAgKIAPAAQAAAKAFAFQAGADAIAAQAGAAAFgCQAEgCADgEQACgEAAgHIAAhGIAPAAIAABGQAAAJgFAIQgEAGgHAEQgJAEgKAAQgJAAgIgEg");
	this.shape_12.setTransform(41.6,37.3);

	this.instance_1 = new lib.brown_borad();
	this.instance_1.setTransform(81.8,80.45,1,1,0,0,0,74.6,84.3);

	this.instance_2 = new lib.EndAnimitonBackground();
	this.instance_2.setTransform(0,0,0.628,0.6424);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.SubjectGame_txt},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.endAnimiton, rect = new cjs.Rectangle(-56,-8,1343.4,739.7), [rect]);


(lib.BetweenQA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(25).call(this.frame_25).wait(1));

	// Bubbles
	this.instance = new lib.waves();
	this.instance.setTransform(-21.2,81.9,1,1,0,0,0,206.8,122.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1).to({x:-70.2},0).wait(1).to({x:-119.25},0).wait(1).to({x:-168.25},0).wait(1).to({x:-217.3},0).wait(1).to({x:-233.45},0).wait(1).to({x:-249.65},0).wait(1).to({x:-265.8},0).wait(1).to({x:-282},0).wait(1).to({x:-335.8,y:82.25},0).wait(1).to({x:-389.65,y:82.55},0).wait(1).to({x:-433.75},0).wait(1).to({x:-477.9},0).wait(1).to({x:-552.4},0).wait(1).to({x:-626.9},0).wait(1).to({x:-651.7,y:78.95},0).wait(1).to({x:-676.5,y:75.35},0).wait(1).to({x:-721.6},0).wait(1).to({x:-766.7},0).wait(1).to({x:-807.85},0).wait(1).to({x:-862.75},0).wait(1).to({x:-917.65},0).wait(1).to({x:-972.6},0).wait(2));

	// raft
	this.instance_1 = new lib.frogiraft();
	this.instance_1.setTransform(132.6,81.7,1,1,0,0,0,132.6,81.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:81.8,x:4.8},0).wait(1).to({x:-72.25},0).wait(1).to({x:-122.45},0).wait(1).to({x:-172.7},0).wait(1).to({x:-222.95},0).wait(1).to({x:-273.2},0).wait(1).to({x:-287.85},0).wait(1).to({x:-302.5},0).wait(1).to({x:-317.15},0).wait(1).to({x:-331.85},0).wait(1).to({x:-382},0).wait(1).to({x:-432.2},0).wait(1).to({x:-481.1},0).wait(1).to({x:-530.05},0).wait(1).to({x:-608.3},0).wait(1).to({x:-686.55},0).wait(1).to({x:-704.85},0).wait(1).to({x:-723.2},0).wait(1).to({x:-769.25},0).wait(1).to({x:-815.3},0).wait(1).to({x:-842.2},0).wait(1).to({x:-897.9},0).wait(1).to({x:-953.6},0).wait(1).to({x:-1009.3},0).wait(1).to({regX:132.6,x:-958.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-51,-0.3,265.8,164.1);
p.frameBounds = [rect, new cjs.Rectangle(-128.7,-1,267.2,165.5), new cjs.Rectangle(-228,-41,413.7,245.8), new cjs.Rectangle(-277,-41,413.7,245.8), new cjs.Rectangle(-326,-41,413.7,245.8), new cjs.Rectangle(-375,-41,413.7,245.8), new cjs.Rectangle(-424.1,-41,413.7,245.8), new cjs.Rectangle(-440.2,-41,413.7,245.8), new cjs.Rectangle(-456.4,-41,413.7,245.8), new cjs.Rectangle(-472.6,-41,413.7,245.8), new cjs.Rectangle(-488.8,-41,413.7,245.8), new cjs.Rectangle(-542.6,-40.7,413.7,245.8), new cjs.Rectangle(-596.4,-40.3,413.7,245.8), new cjs.Rectangle(-640.5,-40.3,413.7,245.8), new cjs.Rectangle(-684.7,-40.3,413.7,245.8), new cjs.Rectangle(-759.2,-40.3,413.7,245.8), new cjs.Rectangle(-833.7,-40.3,413.7,245.8), new cjs.Rectangle(-858.5,-43.9,413.7,245.8), new cjs.Rectangle(-883.3,-47.5,413.7,245.8), new cjs.Rectangle(-928.4,-47.5,413.7,245.8), new cjs.Rectangle(-973.5,-47.5,413.7,245.8), new cjs.Rectangle(-1014.6,-47.5,413.7,245.8), new cjs.Rectangle(-1069.5,-47.5,413.7,245.8), new cjs.Rectangle(-1124.4,-47.5,413.7,245.8), rect=new cjs.Rectangle(-1179.4,-47.5,413.7,245.8), rect];


(lib.FrogiSideLook_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_65 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(65).call(this.frame_65).wait(1));

	// MAIN
	this.instance = new lib.FrogiSideLook_1();
	this.instance.setTransform(-161.7,114.35,0.7761,1,0,0,0,52.4,56);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(56));

	// raft
	this.instance_1 = new lib.mc_raft_MAIN();
	this.instance_1.setTransform(-142.3,163.5,0.5222,0.5231,0,0,0,227.6,132.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(66));

	// jumpingFrogi
	this.instance_2 = new lib.jumperfrogi();
	this.instance_2.setTransform(77.95,78.8,0.6539,0.3383,0,0,180,9.1,90.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({regX:94,regY:93.5,skewX:14.9997,skewY:194.9997,x:-20.65,y:6.6},0).wait(1).to({skewX:10.7141,skewY:190.7141,x:-33.9,y:7.05},0).wait(1).to({skewX:6.4284,skewY:186.4284,x:-46.8,y:7.65},0).wait(1).to({skewX:2.1428,skewY:182.1428,x:-59.4,y:8.2},0).wait(1).to({skewX:-2.1428,skewY:177.8572,x:-90.05,y:23.15},0).wait(1).to({skewX:-6.4284,skewY:173.5716,x:-120.55,y:38.15},0).wait(1).to({skewX:-10.7141,skewY:169.2859,x:-132.25,y:52.25},0).wait(1).to({skewX:-14.9997,skewY:165.0003,x:-143.65,y:66.4},0).to({_off:true},1).wait(56));

	// frogi
	this.instance_3 = new lib.FrogiSideLook_1();
	this.instance_3.setTransform(54.5,69.25,0.8768,0.8768,0,0,0,52.5,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(65));

	// butterfly
	this.instance_4 = new lib.butterfly_open_1();
	this.instance_4.setTransform(-1081.7,-459.35,0.2696,0.367,0,103.652,140.8479);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:70.5,regY:68,scaleX:0.3505,scaleY:0.3757,skewX:103.7472,skewY:140.9416,x:-1085.25,y:-414.75},0).wait(1).to({scaleX:0.3171,scaleY:0.3843,skewX:103.7124,skewY:140.9063,x:-1043.55,y:-381.25},0).wait(1).to({scaleX:0.2836,scaleY:0.393,skewX:103.6777,skewY:140.8711,x:-1019.4,y:-374.35},0).wait(1).to({scaleX:0.2501,scaleY:0.4017,skewX:103.6429,skewY:140.8358,x:-995.35,y:-367.5},0).wait(1).to({scaleX:0.2166,scaleY:0.4104,skewX:103.6081,skewY:140.8005,x:-971.3,y:-360.65},0).wait(1).to({scaleX:0.2726,scaleY:0.419,skewX:100.5907,skewY:137.7801,x:-955,y:-348.95},0).wait(1).to({scaleX:0.3285,scaleY:0.4277,skewX:97.5734,skewY:134.7598,x:-938.3,y:-336.85},0).wait(1).to({scaleX:0.3844,scaleY:0.4364,skewX:94.556,skewY:131.7394,x:-921.2,y:-324.45},0).wait(1).to({scaleX:0.4404,scaleY:0.4451,skewX:91.5387,skewY:128.7191,x:-903.6,y:-311.75},0).wait(1).to({scaleX:0.4963,scaleY:0.4537,skewX:88.5213,skewY:125.6987,x:-885.6,y:-298.85},0).wait(1).to({scaleX:0.4273,scaleY:0.4624,skewX:81.0308,skewY:118.2081,x:-859.6,y:-287.65},0).wait(1).to({scaleX:0.3584,scaleY:0.4711,skewX:73.5402,skewY:110.7175,x:-833.9,y:-277.45},0).wait(1).to({scaleX:0.2894,scaleY:0.4797,skewX:66.0497,skewY:103.2268,x:-808.65,y:-268.15},0).wait(1).to({scaleX:0.2204,scaleY:0.4884,skewX:58.5591,skewY:95.7362,x:-784.1,y:-259.6},0).wait(1).to({scaleX:0.2294,scaleY:0.4971,skewX:54.7527,skewY:91.9304,x:-761.75,y:-277.1},0).wait(1).to({scaleX:0.2384,scaleY:0.5057,skewX:50.9463,skewY:88.1247,x:-739.2,y:-294.7},0).wait(1).to({scaleX:0.2474,scaleY:0.5144,skewX:47.1399,skewY:84.3189,x:-716.4,y:-312.4},0).wait(1).to({scaleX:0.2564,scaleY:0.5231,skewX:43.3335,skewY:80.5131,x:-693.35,y:-330.25},0).wait(1).to({scaleX:0.2654,scaleY:0.514,skewX:42.8222,skewY:80.0019,x:-674.05,y:-343.45},0).wait(1).to({scaleX:0.2744,scaleY:0.5049,skewX:42.311,skewY:79.4907,x:-654.75,y:-356.75},0).wait(1).to({scaleX:0.2618,scaleY:0.4958,skewX:51.4501,skewY:88.6294,x:-624.7,y:-372.9},0).wait(1).to({scaleX:0.2491,scaleY:0.4867,skewX:60.5892,skewY:97.768,x:-594.9,y:-383.95},0).wait(1).to({scaleX:0.2364,scaleY:0.4776,skewX:69.7284,skewY:106.9067,x:-563.9,y:-395.7},0).wait(1).to({scaleX:0.2238,scaleY:0.4685,skewX:78.8675,skewY:116.0453,x:-531.7,y:-407.85},0).wait(1).to({scaleX:0.2111,scaleY:0.4594,skewX:88.0066,skewY:125.184,x:-498.2,y:-420.2},0).wait(1).to({scaleX:0.2498,scaleY:0.4503,skewX:90.178,skewY:127.3555,x:-482.25,y:-415.65},0).wait(1).to({scaleX:0.2886,scaleY:0.4412,skewX:92.3493,skewY:129.5269,x:-466.35,y:-411.2},0).wait(1).to({scaleX:0.3273,scaleY:0.432,skewX:94.5207,skewY:131.6984,x:-450.6,y:-406.8},0).wait(1).to({scaleX:0.3661,scaleY:0.4229,skewX:96.6921,skewY:133.8698,x:-434.9,y:-402.65},0).wait(1).to({scaleX:0.4049,scaleY:0.4138,skewX:98.8635,skewY:136.0413,x:-419.3,y:-398.55},0).wait(1).to({scaleX:0.4436,scaleY:0.4047,skewX:101.0348,skewY:138.2127,x:-403.75,y:-394.5},0).wait(1).to({scaleX:0.4824,scaleY:0.3956,skewX:103.2062,skewY:140.3842,x:-388.35,y:-390.7},0).wait(1).to({scaleX:0.4521,skewX:105.6836,skewY:142.8618,x:-364.5,y:-382.05},0).wait(1).to({scaleX:0.4219,skewX:108.1611,skewY:145.3393,x:-340.45,y:-373.35},0).wait(1).to({scaleX:0.3917,skewX:110.6385,skewY:147.8169,x:-316.25,y:-364.5},0).wait(1).to({scaleX:0.3615,skewX:113.1159,skewY:150.2945,x:-291.85,y:-355.4},0).wait(1).to({scaleX:0.3312,skewX:115.5934,skewY:152.772,x:-267.2,y:-346.2},0).wait(1).to({scaleX:0.301,skewX:118.0708,skewY:155.2496,x:-242.45,y:-336.9},0).wait(1).to({scaleX:0.3046,skewX:110.2953,skewY:148.0976,x:-229.1,y:-329.45},0).wait(1).to({scaleX:0.3081,skewX:102.5197,skewY:140.9457,x:-214.9,y:-321.9},0).wait(1).to({scaleX:0.3117,skewX:94.7442,skewY:133.7937,x:-199.95,y:-314.4},0).wait(1).to({scaleX:0.3153,skewX:86.9686,skewY:126.6417,x:-184.25,y:-307.1},0).wait(1).to({scaleX:0.3188,skewX:79.1931,skewY:119.4898,x:-167.75,y:-300.05},0).wait(1).to({scaleX:0.3224,skewX:79.017,skewY:119.9373,x:-154.25,y:-298.15},0).wait(1).to({scaleX:0.3259,skewX:78.841,skewY:120.3848,x:-140.65,y:-296.25},0).wait(1).to({scaleX:0.3295,skewX:78.6649,skewY:120.8323,x:-127.15,y:-294.3},0).wait(1).to({scaleX:0.333,skewX:78.4889,skewY:121.2799,x:-113.55,y:-292.45},0).wait(1).to({scaleX:0.3366,skewX:78.3128,skewY:121.7274,x:-100.05,y:-290.5},0).wait(1).to({scaleX:0.341,skewX:67.4624,skewY:110.877,x:-76.2,y:-297.85},0).wait(1).to({scaleX:0.3455,skewX:56.6121,skewY:100.0266,x:-51.15,y:-306.25},0).wait(1).to({scaleX:0.3499,skewX:45.7617,skewY:89.1762,x:-24.95,y:-316.1},0).wait(1).to({scaleX:0.3544,skewX:34.9113,skewY:78.3257,x:1.95,y:-327.45},0).wait(1).to({scaleX:0.3588,skewX:24.061,skewY:67.4753,x:29.4,y:-340.5},0).wait(1).to({scaleX:0.3632,skewX:13.2106,skewY:56.6249,x:57,y:-355.25},0).wait(1).to({scaleX:0.3677,skewX:20.6932,skewY:64.1074,x:72.7,y:-359.05},0).wait(1).to({scaleX:0.3721,skewX:28.1757,skewY:71.5899,x:88.4,y:-363.6},0).wait(1).to({scaleX:0.3765,skewX:35.6583,skewY:79.0724,x:104,y:-368.95},0).wait(1).to({scaleX:0.381,skewX:43.1408,skewY:86.5549,x:119.75,y:-375.1},0).wait(1).to({skewX:35.641,skewY:79.0551,x:142.75,y:-389.7},0).wait(1).to({skewX:28.1412,skewY:71.5553,x:165.85,y:-405.1},0).wait(1).to({skewX:20.6414,skewY:64.0555,x:189.05,y:-421.4},0).wait(1).to({skewX:13.1416,skewY:56.5557,x:212.25,y:-438.5},0).wait(1).to({x:229,y:-454.9},0).wait(1).to({x:245.75,y:-471.3},0).wait(1).to({x:262.5,y:-487.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1159.7,-471.1,1260.2,704.1);
p.frameBounds = [rect, new cjs.Rectangle(-1129.2,-436.4,1213.1,669.4), new cjs.Rectangle(-1086.2,-401.5,1133.2,634.5), new cjs.Rectangle(-1060.9,-393.4,1093.4,626.3), new cjs.Rectangle(-1035.6,-385.1,1053.6,618), new cjs.Rectangle(-1010.3,-376.9,1013.6,609.8), new cjs.Rectangle(-997.2,-367.1,969.9,600), new cjs.Rectangle(-983.5,-357.1,953.7,590.1), new cjs.Rectangle(-968.7,-347,939,580), new cjs.Rectangle(-953.3,-336.8,923.5,569.8), new cjs.Rectangle(-936.9,-328,907.2,560.9), new cjs.Rectangle(-904.9,-319.2,875.1,552.1), new cjs.Rectangle(-873.6,-310.2,843.8,543.1), new cjs.Rectangle(-843.2,-301.2,813.4,534.2), new cjs.Rectangle(-813.9,-292.3,784.2,525.2), new cjs.Rectangle(-789.9,-312.7,760.2,545.6), new cjs.Rectangle(-766.5,-333.1,736.7,566), new cjs.Rectangle(-743.8,-353.5,714,586.5), new cjs.Rectangle(-720.7,-373.9,691,606.8), new cjs.Rectangle(-701.1,-387.5,671.3,620.5), new cjs.Rectangle(-681.4,-401.1,651.6,634), new cjs.Rectangle(-651.6,-412.3,621.8,645.3), new cjs.Rectangle(-626.1,-417.6,596.3,650.5), new cjs.Rectangle(-599.2,-422.9,569.5,655.9), new cjs.Rectangle(-569.9,-428.1,540.2,661.1), new cjs.Rectangle(-538,-433.4,508.2,666.4), new cjs.Rectangle(-523.5,-429.8,493.7,662.8), new cjs.Rectangle(-509.3,-428.1,479.6,661.1), new cjs.Rectangle(-495.1,-426.5,465.4,659.4), new cjs.Rectangle(-481.3,-424.7,451.5,657.6), new cjs.Rectangle(-467.6,-422.7,437.9,655.6), new cjs.Rectangle(-454.1,-420.7,424.3,653.7), new cjs.Rectangle(-440.7,-418.5,411,651.5), new cjs.Rectangle(-415.7,-408.6,386,641.6), new cjs.Rectangle(-390.4,-398.7,360.7,631.6), new cjs.Rectangle(-364.8,-388.7,335,621.6), new cjs.Rectangle(-338.6,-378.6,308.8,611.6), new cjs.Rectangle(-312.1,-368.6,282.3,601.5), new cjs.Rectangle(-285.4,-358.5,255.7,591.4), new cjs.Rectangle(-272.6,-350.1,242.8,583), new cjs.Rectangle(-258,-341.4,228.3,574.3), new cjs.Rectangle(-254.8,-332.5,225.1,565.4), new cjs.Rectangle(-254.8,-326.3,225.1,559.3), new cjs.Rectangle(-254.8,-324.6,225.1,557.5), new cjs.Rectangle(-254.8,-322.9,225.1,555.9), new cjs.Rectangle(-254.8,-321.2,225.1,554.1), new cjs.Rectangle(-254.8,-319.5,225.1,552.5), new cjs.Rectangle(-254.8,-317.8,225.1,550.8), new cjs.Rectangle(-254.8,-316.1,225.1,549.1), new cjs.Rectangle(-254.8,-330.5,225.1,563.5), new cjs.Rectangle(-254.8,-345,230.4,577.9), new cjs.Rectangle(-254.8,-359.4,249.5,592.4), new cjs.Rectangle(-254.8,-373.9,277.2,606.9), new cjs.Rectangle(-254.8,-388.4,304.8,621.3), new cjs.Rectangle(-254.8,-402.8,332,635.8), new cjs.Rectangle(-254.8,-407.5,348.4,640.4), new cjs.Rectangle(-254.8,-412.2,364.2,645.1), new cjs.Rectangle(-254.8,-416.8,379.6,649.8), new cjs.Rectangle(-254.8,-421.5,394.5,654.4), new cjs.Rectangle(-254.8,-437.9,418.3,670.8), new cjs.Rectangle(-254.8,-454.3,441.8,687.2), new cjs.Rectangle(-254.8,-470.6,465.1,703.6), new cjs.Rectangle(-254.8,-487,488,720), new cjs.Rectangle(-254.8,-503.4,504.7,736.4), new cjs.Rectangle(-254.8,-519.8,521.5,752.8), new cjs.Rectangle(-254.8,-536.2,538.2,769.2)];


(lib.questionBox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this; //הגדרת הבמה וכל הרכיבים הנמצאים בה
		self.stop;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AT7qnIAAVPMgn2AAAIAA1Pg");
	this.shape.setTransform(127.55,68.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Az7KoIAA1PMAn2AAAIAAVPg");
	this.shape_1.setTransform(127.55,68.025);

	this.instance = new lib.FrogiQuestionBoxR();
	this.instance.setTransform(344.15,121.5,0.7095,0.7001,0,0,0,52.6,56.2);

	this.instance_1 = new lib.FrogiQuestionBoxG();
	this.instance_1.setTransform(279.25,147.65,0.7189,0.6384,0,0,0,52.6,56.3);

	this.instance_2 = new lib.ICON_V();
	this.instance_2.setTransform(132,-23,1,1,0,0,0,24,24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF00").ss(3,1,1).p("Az7qnMAn2AAAIAAVPMgn2AAAg");
	this.shape_2.setTransform(127.55,68.025);

	this.instance_3 = new lib.sad_frogi();
	this.instance_3.setTransform(288.55,139.7,0.4162,0.4104,0,0,180,89.5,95.7);

	this.instance_4 = new lib.ICON_X();
	this.instance_4.setTransform(133,-24,1,1,0,0,0,22.5,22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(3,1,1).p("Az7qnMAn2AAAIAAVPMgn2AAAg");
	this.shape_3.setTransform(127.55,68.025);

	this.instance_5 = new lib.FrogiQuestionBoxY();
	this.instance_5.setTransform(288.75,139.75,0.7096,0.7,0,0,0,52.8,56.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFF8C5").ss(3,1,1).p("Az7qnMAn2AAAIAAVPMgn2AAAg");
	this.shape_4.setTransform(127.55,68.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{x:344.15,y:121.5}}]},1).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.instance_4},{t:this.instance,p:{x:288.6,y:139.75}},{t:this.instance_3}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.instance_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.5,-1.5,258.1,139.1);
p.frameBounds = [rect, new cjs.Rectangle(-1.5,-47,333,229.7), new cjs.Rectangle(-1.5,-46.5,327.3,225.3), new cjs.Rectangle(-1.5,-1.5,327.3,180.3)];


(lib.mute_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.mute();

	this.umute_btn = new lib.umute_btn();
	this.umute_btn.name = "umute_btn";
	this.umute_btn.setTransform(36,33.5,1,1,0,0,0,36,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.umute_btn}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,72,67);
p.frameBounds = [rect, rect];


(lib.Q_Animiton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bankofariver();
	this.instance.setTransform(137,637,1,1,0,0,180);

	this.instance_1 = new lib.bankofariver();
	this.instance_1.setTransform(1152,637);

	this.instance_2 = new lib.BetweenQA();
	this.instance_2.setTransform(1227,405.55,0.9455,0.8871,0,0,0,132.6,81.8);

	this.SubjectGame_txt = new cjs.Text("", "normal 400 14px 'Heebo'", "#FFFFFF");
	this.SubjectGame_txt.name = "SubjectGame_txt";
	this.SubjectGame_txt.textAlign = "center";
	this.SubjectGame_txt.lineHeight = 20;
	this.SubjectGame_txt.lineWidth = 129;
	this.SubjectGame_txt.parent = this;
	this.SubjectGame_txt.setTransform(78.25,114.25);
	if(!lib.properties.webfonts['Heebo']) {
		lib.webFontTxtInst['Heebo'] = lib.webFontTxtInst['Heebo'] || [];
		lib.webFontTxtInst['Heebo'].push(this.SubjectGame_txt);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAuQgKgGgGgLQgGgKAAgPIAAgHQAAgPAFgKQAFgLAKgGQAKgFAOAAQAMAAAJAEQAJAEAFAHQAEAHACAIIgPAAQgBgFgDgFQgDgEgFgDQgGgCgIAAQgKAAgGAEQgHAEgDAJQgDAIAAALIAAAHQAAALAEAJQAEAIAHAEQAHAEAJAAIAMgBQAFgBADgCIAEgDIAAgWIgaAAIAAgLIApAAIAAAlIgHAGQgEADgIADQgIACgNAAQgMAAgLgFg");
	this.shape.setTransform(99.375,60.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWAtQgKgFgGgLQgGgLAAgPIAAgFQAAgPAGgLQAGgLAKgFQAKgGAMAAQAOAAAKAGQAKAFAFALQAGALAAAPIAAAFQAAAPgGALQgFALgKAFQgKAGgOAAQgMAAgKgGgAgPgjQgHAEgDAJQgEAIAAAMIAAAFQAAAMAEAIQADAJAHAEQAHAEAIAAQAKAAAGgEQAHgEADgJQAEgIAAgMIAAgFQAAgMgEgIQgDgJgHgEQgHgEgJAAQgIAAgHAEg");
	this.shape_1.setTransform(88.775,60.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYAyIgYgpIAFAAIAFgBIAEgBIgBgCIgPAAIACAEIgZAAIAAgJIgDAAIAAAJIADAAIAAApIgOAAIAAhjIAkAAQAMAAAJAEQAIADAFAHQAEAGAAAKQAAAHgDAGQgDAFgGADQgEADgFACIAaAqIAAABgAgCAAQAHAAAFgDQAFgCADgFQADgEAAgFQAAgJgGgFQgGgFgMAAIgWAAIAAAmIAXAAgAAAAJIgCgEIAPAAIABACIgEABIgFABgAgcAJIAAgJIADAAIAAAJgAgCAAIgXAAIAAgmIAWAAQAMAAAGAFQAGAFAAAJQAAAFgDAEQgDAFgFACQgFADgHAAgAgZAAg");
	this.shape_2.setTransform(79.125,60.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghAyIAAhjIALAAIAAALIADAAIAAAiIAuAAIAAAKIguAAIAAgKIgDAAIAAAKIADAAIAAAsgAgWAGIAAgKIADAAIAAAKgAgTgmIAAgLIA1AAIAAALgAgTgmIgDAAIAAgLIADAAIAAALgAgWgxg");
	this.shape_3.setTransform(69.875,60.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiAyIgKgaIAIAAIAAgLIgNAAIANAAIAAALIgIAAIgFgLIgTguIgCgHIAAgJIAAAJIACAHIATAuIgkAAIARguIgRAuIAkAAIAFALIguAAIAFgLIgMAAIAAALIAHAAIgHAAIAAgLIAMAAIgFALIgLAaIgPAAIAqhjIAEAAIAFAAIAAAJIgDAHIADgHIAAgJIAEAAIAqBjgAgRANg");
	this.shape_4.setTransform(56.2,60.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAyIAAgLIgCAAIAAALIAAgLIACAAIAAALIgCAAIgMAAIAAhjIAMAAIACAAIAAALIgCAAIAAgLIAAALIACAAIAAgLIA2AAIAAALIg2AAIAAAgIAvAAIAAAKIgvAAIAAgKIgCAAIAAAKIACAAIgCAAIAAgKIACAAIAAAKIAAAjIA3AAIAAALg");
	this.shape_5.setTransform(112.625,38.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZAyIgmgvIAHgFIADgDIAuA3gAgqAyIAAhjIAPAAIAAAxIAMgMIAkglIASAAIgqAsIgEgDIgIAJIACACIgOANIAAgQIgIAHIADAOIAFgFIAAAigAgjAHIAIgHIAAAQIgFAFgAgNADgAgNADIgCgCIAIgJIAEADIgDADIgHAFgAgDgFg");
	this.shape_6.setTransform(103.55,38.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAyIAAhjIAPAAIAABjg");
	this.shape_7.setTransform(95.9,38.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAyIAAgLIgDAAIAAALIgMAAIAAhjIAPAAIAABYIA0AAIAAALgAgVAyIAAgLIADAAIAAALgAgSAng");
	this.shape_8.setTransform(90.025,38.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnAyIAAhjIAoAAQAMAAAJAEQAJAEAFAHQAEAHAAAJQAAAJgEAHQgFAGgJADQgJAEgMAAIgaAAIAAgLIgCAAIAAALIACAAIAAAngAABAAQAJAAAFgBQAFgDACgEQADgFAAgFQAAgFgDgFQgCgEgFgDQgFgDgJAAIgaAAIAAAmIAaAAgAgZALIgCAAIAAgLIACAAIAAALgAABAAIgaAAIAAgmIAaAAQAJAAAFADQAFADACAEQADAFAAAFQAAAFgDAFQgCAEgFADQgFABgJAAgAgZAAg");
	this.shape_9.setTransform(76.9,38.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AApAyIAAgnIABgpIAJgTIgJATIABgTIgBATIgkBQIgLAAIgkhQIgBgTIAHAAIAjBRIAkhRIAHAAIAIAAIAEAAIAABjgAg2AyIAAhjIAEAAIAJATIABApIAAAngAAqgegAgygxIAIAAIABATgAgygxg");
	this.shape_10.setTransform(64.775,38.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTAvQgJgEgGgIQgFgHAAgLIAAhCIAPAAIAABCQAAAHADAGQADAFAGACQAFACAHABQAIgBAFgCQAGgCADgFQAEgGAAgHIAAhCIAOAAIAABCQAAALgFAHQgGAIgJAEQgJADgLABQgKgBgJgDg");
	this.shape_11.setTransform(52.875,38.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRAvQgIgDgFgGQgEgHAAgJIAPAAQAAAJAGAEQAFAFAIAAQAGAAAFgCQAEgDACgEQAEgEAAgHIAAhFIAOAAIAABFQAAAKgEAGQgFAIgIADQgHADgLABQgJgBgIgDg");
	this.shape_12.setTransform(43.1,38.15);

	this.instance_3 = new lib.brown_borad();
	this.instance_3.setTransform(83.25,81.3,1,1,0,0,0,74.6,84.3);

	this.instance_4 = new lib.GameBackground();
	this.instance_4.setTransform(0,0,0.6653,0.5719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.SubjectGame_txt},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Q_Animiton, rect = new cjs.Rectangle(-18,-3,1325,723), [rect]);


(lib.MC_Open = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.MC_animation01 = new lib.FrogiSideLook_2();
	this.MC_animation01.name = "MC_animation01";
	this.MC_animation01.setTransform(1004.25,410.3,0.8571,0.9182);

	this.instance = new lib.OpenanimitonBackground();
	this.instance.setTransform(0,0,0.6695,0.6851);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.MC_animation01}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MC_Open, rect = new cjs.Rectangle(0,-22.2,1287.4,754), [rect]);


// stage content:
(lib.GAME = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this; //הגדרת הבמה וכל הרכיבים הנמצאים בה
		self.stop(); //עצירת כל הפריימים
		
		createjs.Sound.registerSound("sounds/gameSound.mp3", "GameSound"); //פנייה לסאונד משחק
		createjs.Sound.registerSound("sounds/success.mp3", "Success"); //פנייה לסאונד הצלחה
		createjs.Sound.registerSound("sounds/Failure.mp3", "Failure"); //פנייה לסאונד כישלון
		createjs.Sound.registerSound("sounds/Endofgame.mp3", "Endofgame"); //פנייה לסאונד סיום משחק
		stopMusic();
		
		var myChoice = 0; //משתנה המכיל את הבחירה של נושא המשחק
		var myGame; //משתנה המכיל את המערכים הדו-ממדיים של המשחק
		var positionX; //X-משתנה שמכיל מערך של ציר ה
		var positionY; //Yמשתנה שמכיל מערך של ציר ה
		var positionX3; // משתנה שמכיל מערך של ציר ה-X במצב של 3 מסיחים
		var positionY3; // משתנה שמכיל מערך של ציר ה-Y במצב של 3 מסיחים
		var positionX2; // משתנה שמכיל מערך של ציר ה-X במצב של 2 מסיחים
		var positionY2; // משתנה שמכיל מערך של ציר ה-Y במצב של 2 מסיחים
		var randomPositionX; //באופן רנדומלי Xמשתנה שמסדר את המערך של ציר ה 
		var randomPositionY; //באופן רנדומלי Yמשתנה שמסדר את המערך של ציר ה
		var randomPositionX3; // משתנה שמסדר את המערך של ציר הX באופן רנדומלי במצב של 3 מסיחים
		var randomPositionY3; // משתנה שמסדר את המערך של ציר ה Y במצב של 3 מסיחים
		var randomPositionX2; // משתנה שמסדר את המערך של ציר הX במצב של 2 מסיחים
		var randomPositionY2; // משתנה שמסדר את המערך של ציר הY במצב של 2 מסיחים
		var question; //משתנה המכיל הפניה לשאלה באופן רנדומלי
		var counter; //משתנה המכיל את מספר השאלות שנותרו לשחקן
		sumScore = []; //מערך ביניים מכיל ניקוד יחסי של שאלות
		var grade = 0; //ציון סופי
		var totalQuestions; //סך השאלות במשחק
		var setTime; //משתנה שיכיל את הגדרת הזמן עבור כל שאלה
		var timeCounter = 30; //משתנה המכיל את השניות לכל שאלה
		var sumErrors = 0; //משתנה המכיל את סך כל השגיאות
		var setGlobalTime; //משתנה שיכיל את הגדרת הזמן עבור כל המשחק
		var globalTimeCounter = 0; //משתנה המכיל את ספירת הזמן בשניות לכל המשחק
		var questionCounter = 1; //משתנה המכיל את מספר השאלה הנוכחי
		var countImg = 0; //סופר את מספר התמונות שמופיעות במסיחים
		imgName = []; //שומר את שמות התמונות שמופיעות במסיחים במערך
		var timer_txt = new createjs.Text(); //הגדרת משתנה המכיל את מספר השניות שנותרו למשחק כתיבת טקסט
		var music = "on"; //מחוון הפעלה של צילים ומוזיקה
		var moveX; //תזוזה על ציר הX של מד ההתקדמות
		var tempX = 1162; // מיקום התחלתי של מד ההתקדמות על ציר ה X
		var frogiProgress = new lib.frogiProgress(); // קריאה לאובייקט שמכיל את מד ההתקדמות
		var connect = ""; // המספר של שם המלבן שהשחקן לחץ עליו
		var loseFlag = "false"; // משתנה ששומר האם השחקן לחץ תשובה נכונה או לא נכונה
		var titleImgFlag = "false"; // משתנה שבודק אם קיימת תמונה בגזע השאלה
		var subject = ""; // נושא המשחק (חשבון/גיאוגרפיה)
		var connectionFlag = "false"; // משתנה ששומר האם השחקן לחץ על מסיח לפני שהוא לחץ בדוק
		
		var sound_btn = new lib.mute_btn();//קריאה לאובייקט שמכיל את כפתור צלילים
		sound_btn.name = "sound_btn";  //נותן שם לכפתור צלילים	
		sound_btn.x = 169.05; //מיקום הX של כפתור צלילים
		sound_btn.y = 39;// מיקום הY של כפתור צלילים
		
		var music_btn = new lib.music_btn();// קריאה לאובייקט שמכיל את כפתור מוזיקה
		music_btn.name = "music_btn";// נותן שם לכפתור מוזיקה
		music_btn.x = 215.65;// מיקום הX של כפתור מוזיקה
		music_btn.y = 39.05;// מיקום הY של כפתור מוזיקה
		
		var pause_btn = new lib.stopbutton();// קריאה לאובייקט שמכיל את כפתור השהייה
		pause_btn.name = "pause_btn";// נותן שם לכפתור השהייה
		pause_btn.x = 264.65;// מיקום הX של כפתור המוזיקה
		pause_btn.y = 39.05;// מיקום הY של כפתור המוזיקה
		
		var BTN_CHECK = new lib.main_btn;// קריאה לאובייקט שמכיל את כפתור בדוק לא פעיל
		BTN_CHECK.name = "BTN_CHECK";// נותן שם לכפתור בדוק לא פעיל
		BTN_CHECK.x = 70;// מיקום הX של כפתור בדוק לא פעיל
		BTN_CHECK.y = 450;// מיקום הY של כפתור לא פעיל
		
		var BTN_CHECKACTIVE = new lib.btn_check_active;//קריאה לאובייקט שמכיל את כפתור פעיל	
		BTN_CHECKACTIVE.name = "BTN_CHECKACTIVE"; // נותן שם לכפתור בדוק פעיל
		BTN_CHECKACTIVE.x = 70;// מיקום הX של כפתור בדוק פעיל
		BTN_CHECKACTIVE.y = 450;// מיקום הY של כפתור פעיל
		
		var BTN_CONTINUEACTIVE = new lib.btn_continue_new; // קריאה לאובייקט שמכיל כפתור המשך לאחר בדיקה של תשובה נכונה
		BTN_CONTINUEACTIVE.name = "BTN_CONTINUEACTIVE"; //נותן שם לכפתור המשך של בדיקה נכונה 
		BTN_CONTINUEACTIVE.x = 70; //מיקום הX של כפתור המשך לאחר בחירה במסיח נכון
		BTN_CONTINUEACTIVE.y = 450;//מיקום הY של כפתור המשך לאחר בחירה במסיח נכון
		
		var BTN_CONTINUEACTIVE2 = new lib.btn_continue_new;//קריאה לאובייקט שמכיל כפתור המשך לאחר בדיקה של תשובה לא נכונה
		BTN_CONTINUEACTIVE2.name = "BTN_CONTINUEACTIVE2";//נותן שם לכפתור המשך של בדיקה לא נכונה
		BTN_CONTINUEACTIVE2.x = 70;//מיקום הX של כפתור המשך לאחר תשובה לא נכונה
		BTN_CONTINUEACTIVE2.y = 450;//מיקום הY של כפתור המשך לאחר תשובה לא נכונה
		
		function createPositionXY() { //פונקציה שיוצרת מיקום מסיחים
			positionX = [46, 503, 770, 253]; //X-משתנה שמכיל מערך של ציר ה
			positionY = [193, 195, 382, 395]; //Yמשתנה שמכיל מערך של ציר ה
			positionX3 = [46, 503, 253]; // משתנה שמכיל מערך של ציר ה-X במצב של 3 מסיחים
			positionY3 = [193, 195, 395]; // משתנה שמכיל מערך של ציר ה-Y במצב של 3 מסיחים
			positionX2 = [46, 503]; // משתנה שמכיל מערך של ציר ה-X במצב של 2 מסיחים
			positionY2 = [193, 195]; // משתנה שמכיל מערך של ציר ה-Y במצב של 2 מסיחים
		}
		
		homePage(); //קריאה לפונקציה דף הבית
		
		function homePage() { //פונקציה דף הבית
			var homePage = new lib.MC_homePage();//קריאה לאובייקט שמכיל את מסך הפתיחה 
			stage.addChild(homePage);//מוסיף לבמה את מסך הפתיחה
			homePage.name = "homePage";//נותן שם למסך הבית
		
			var startbtn = new lib.startButton();//קריאה לאובייקט שמכיל את כפתור התחל לא פעיל
			stage.addChild(startbtn);// מוסיף כפתור התחל לא פעיל לבמה
			startbtn.name = "startbtn";// נותן שם לכפתור התחל לא פעיל
			startbtn.x = 464.25;//מיקום הX של כפתור התחל לא פעיל
			startbtn.y = 517.7;//מיקום הY של כפתור התחל לא פעיל
			startbtn.gotoAndStop(0); //שנה צבע כפתור התחל כי לא נבחר עדיין נושא משחק
		
			sound_btn.addEventListener("click", ClickMuteSound);//הוספת מאזין ללחיצה על כפתור צלילים
			if (music == "on") {// אם כפתור צלילים במצב פועל הפעל את מוזיקת משחק
				stopMusic();//עצור מוזיקה
				playSound();//נגן מוזיקה
			} else {
				sound_btn.gotoAndStop(1) // אם לא עבור לפריים 1 של כפתור צלילים
			};
			createButton(); //פונקציה ליצירת כפתורים
		
			var forCombo = new lib.forCombo(); //יצירת תפריט בחירת נושא על הבמה
			forCombo.name = "forCombo";// נותן שם לתפריט
			forCombo.x = 705.8; //הגדרת מיקום התפריט
			forCombo.y = 380.45; //הגדרת מיקום התפריט
			stage.addChild(forCombo); //הוספת התפריט לבמה
			$("#dom_overlay_container").on("change", "#mycb", mycb_change); //הגדרת התנהגות תפריט בחירת נושא המשחק
		}
		
		function mycb_change(evt) { //פונקציה המגדירה את התנהגות תפריט המשחק
			myChoice = evt.currentTarget.value; //ציון הנושא שהשחקן בחר למשחק
			if (myChoice == 0) { //אם לא נבחר נושא
				stage.getChildByName("startbtn").removeEventListener("click", fl_ClickToPosition); //הסרת מאזין לכפתור התחלת משחק
				stage.getChildByName("startbtn").gotoAndStop(0); //אם השחקן לא בחר נושא משחק כפתור התחל לא פעיל
			} else { //אם נבחר נושא
				stage.getChildByName("startbtn").addEventListener("click", fl_ClickToPosition); //הוספת מאזין לכפתור התחלת משחק
				stage.getChildByName("startbtn").gotoAndStop(1); //אם השחקן בחר נושא משחק כפתור התחל פעיל
			}
		}
		
		function fl_ClickToPosition() { //פונקציה המגדירה את ההפניה לסוג נושא המשק
			stage.removeChild(stage.getChildByName("forCombo")); //לאחר בחירה בנושא המשחק הסרת תפריט הבחירה מהבמה
			stage.removeChild(stage.getChildByName("homePage")); //לאחר בחירה בנושא המשחק הסרת עמוד הבית מהבמה
			stage.removeChild(stage.getChildByName("startbtn")); //לאחר בחירה בנושא המשחק הסרת עמוד הבית מהבמה
		
			if (myChoice == 1) { //אם נושא המשחק הוא גיאוגרפיה
				firstGameFunc(); //גש למשחק גיאוגרפיה
			} else if (myChoice == 2) { //אם נושא המשחק הוא חשבון
				secondGameFunc(); //גש למשחק חשבון
			}
		}
		
		function firstGameFunc() { //פונקציה שיוצרת את מערך המסיחים למשחק הראשון
			counter = 10;// משתנה שמכיל את מספר השאלות שנותרו לשחקן
			totalQuestions = 10;//סך השאלות במשחק
			moveX = ((941.4) / totalQuestions); //תזוזה על ציר הX של מד ההתקדמות
			subject = "גיאוגרפיה";// המשתנה המכיל את נושא המשחק- מופיע על לוח במסך משחק
			myGame = [// מערך המכיל את השאלות והתשובות של משחק גיאוגרפיה
				[
					["?מי הוא האוקיינוס הגדול ביותר המחבר את יבשות אמריקה עם אסיה ואוסטרליה", 1, "SHOW"],
					["האוקיינוס האטלנטי", "true"],
					[lib.img_1, "false"]
				],
				[
					["בגבול הצפוני של ישראל נמצאת המדינה", 1, "SHOW"],
					["לבנון", "true"],
					["ירדן", "false"],
					["מצרים", "false"],
					["איטליה", "false"]
				],
				[
					["מדינת ישראל נמצאת ביבשת", 1, "SHOW"],
					["אסיה", "true"],
					["אוסטרליה", "false"],
					["ארצות הברית", "false"],
					["אירופה", "false"]
				],
				[
					["?מיהו ההר הגבוה ביותר בישראל", 1, "SHOW"],
					["הר החרמון", "true"],
					[lib.img_2, "false"],
					["הר גרזים", "false"],
					["הר ההימלאיה", "false"]
				],
				[
					["?מהו שמו של נחל קטן הנשפך אל נחל גדול יותר או לתוך נהר", 1, "SHOW"],
					["יובל", "true"],
					["נהר", "false"],
					["נחל", "false"],
					["פלג", "false"]
				],
				[
					["?מהו שטח מים, לרוב טבעי, המוקף יבשה ואינו מחובר לים או לאוקיינוס", 1, "SHOW"],
					["ימה", "true"],
					["גבעה", "false"],
					[lib.img_3, "false"],
					["מדבר", "false"]
				],
				[
					["לנוף הטבעי של מישור החוף התיכון והדרומי  מספר מאפיינים בולטים. בחרו מבין  המאפיינים הבאים את המאפיין שאינו מתאים למישור החוף התיכון והדרומי", 1, "SHOW"],
					["שטחי המישור ושטחי הגבעות מסודרים לאורכו של מישור החוף במעין ארבע רצועות של נוף:  שטחי החולות, גבעות הכורכר, גבעות החול האדום ורצועת המרזבה", "true"],
					["זהו אזור ארוך וצר שהולך ומתרחב מעט כלפי דרום", "false"],
					["קו החוף אינו ישר ויש בו מפרצים גדולים", "false"],
					["צורות הנוף העיקריות הן שטחי מישור וגבעות נמוכות שגובהם אינו עולה בדרך כלל על  מאה מטרים", "false"]
				],
				[
					["?איזה אזור לא נמצא בכלל בצפון הארץ", 1, "SHOW"],
					["השרון", "true"],
					["הגליל העליון", "false"],
					["הגליל התחתון", "false"],
					["עמק יזרעאל", "false"]
				],
				[
					["?מים טריטוריאליים הם", 1, "SHOW", lib.img_4],
					["נחשב כשטח תחת ריבונות של אותה המדינה, אך אפשרי המעבר בו לספינות זרות", "true"],
					["המים שבין קו הגבול הימי של המדינה לבין קו החוף שלה", "false"],
					["אף תשובה אינה נכונה", "false"]
				],
				[
					["?מי מבין המקומות בישראל נחשב פלא עולמי", 1, "SHOW"],
					["ים המלח", "true"],
					["הכותל המערבי", "false"],
					["הסחנה", "false"],
					["כל התשובות נכונות", "false"]
				]
			];
			startGame(); //הפעלת משחק ומעבר לקוד ראשי
		}
		
		function secondGameFunc() { //פונקציה שיוצרת את מערך המסיחים למשחק השני
			counter = 20;// משתנה שמכיל את מספר השאלות שנותרו לשחקן
			totalQuestions = 20;//סך השאלות במשחק
			moveX = ((941.4) / totalQuestions);//תזוזה על ציר הX של מד ההתקדמות
			subject = "חשבון";// המשתנה המכיל את נושא המשחק- מופיע על לוח במסך משחק
			myGame = [ //מערך המכיל את השאלות והתשובות של משחק חשבון
				[
					["3 + 0 = [      ]", 1, "SHOW"],
					[lib.num_0, "false"],
					[lib.num_3, "true"]
				],
				[
					["6 + 0 = [      ]", 1, "SHOW"],
					[lib.num_1, "false"],
					[lib.num_6, "true"],
					[lib.num_9, "false"]
				],
				[
					["?מהי הכפולה של 5", 1, "SHOW"],
					["80", "true"],
					["59", "false"],
					["74", "false"],
					["21", "false"]
				],
				[
					["?אני קטן ב- 4 מ - 755 מי אני", 1, "SHOW"],
					["751", "true"],
					["754", "false"]
				],
				[
					["? = מהו ערכה של האות הבאה פ ", 1, "SHOW"],
					["30", "false"],
					["80", "true"],
					["אף תשובה אינה נכונה", "false"]
				],
				[
					["?לרון היו 16 שקלים. הוא קיבל עוד 2 שקלים.כמה שקלים יש לרון", 1, "SHOW"],
					["18", "true"],
					["14", "false"],
					["27", "false"],
					["21", "false"]
				],
				[
					["3 + 6 = [      ]", 1, "SHOW"],
					[lib.num_9, "true"],
					["10", "false"]
				],
				[
					["?אמא קנתה לרינת 15 מסטיקים. רינת קיבלה עוד 3 מסטיקים מחברותיה.כמה מסטיקים יש לרינת", 1, "SHOW", lib.mg_1],
					["16", "false"],
					["14", "false"],
					["18", "true"]
				],
				[
					["?לדני יש 5 קלפים.הוא הרוויח 4 קלפים נוספים.כמה קלפים יש לדני", 1, "SHOW", lib.Cards_1],
					["9", "true"],
					["10", "false"],
					["4", "false"],
					["6", "false"]
				],
				[
					["4 + 4 = [      ]", 1, "SHOW"],
					["8", "true"],
					["10", "false"]
				],
				[
					["0 + 0 = [      ]", 1, "SHOW"],
					["0", "true"],
					["1", "false"],
					["8", "false"]
				],
				[
					["?לשלי יש 9 בובות. היא קיבלה עוד 3 בובות ליום הולדתה.כמה בובות יש לשלי", 1, "SHOW"],
					["12", "true"],
					["8", "false"],
					["13", "false"],
				],
				[
					["?אמא אפתה 18 עוגיות. רון אכל 5 עוגיות.כמה עוגיות נשארו", 1, "SHOW"],
					["17", "false"],
					["13", "true"],
					["18", "false"],
					["10", "false"]
				],
				[
					["?לרוני היה  6 שקלים. רוני רכש מסטיק ב2 שקלים.כמה שקלים נשאר לרוני", 1, "SHOW"],
					["2", "false"],
					["4", "true"]
				],
				[
					["0 + [      ] = 11", 1, "SHOW"],
					["7", "false"],
					["4", "false"],
					["11", "true"]
				],
				[
					["[      ] - 6 = 11", 1, "SHOW"],
					["17", "true"],
					["16", "false"],
					["15", "false"],
					["12", "false"]
				],
				[
					["6 X [      ] = 18", 1, "SHOW"],
					["3", "true"],
					["12", "false"]
				],
				[
					["[      ] - 2 = 24", 1, "SHOW"],
					["24", "false"],
					["26", "true"],
					["12", "false"]
				],
				[
					["5 X [      ] = 15", 1, "SHOW"],
					[lib.num_3, "true"],
					[lib.num_7, "false"],
					[lib.num_2, "false"],
					[lib.num_4, "false"]
				],
				[
					["2 X [      ] = 0", 1, "SHOW"],
					["2", "false"],
					["0", "true"],
				]
			];
			startGame(); //הפעלת משחק ומעבר לקוד ראשי
		}
		
		function startGame() { //פונקציה פותחת
			setGlobalTime = setInterval(globalTimer, 1000); //הפעלת ספירת זמן כל שניה עבור כל המשחק
			var firstAnimation = new lib.MC_Open(); // קורא לפנוקצית אנימצייה ראשונה בין מסך פתיחה למשחק
			stage.addChild(firstAnimation);// הוסף לבמה את אנימציית הפתיחה
			setTimeout(function () {//פונקציה שמגדירה את משך הזמן של אנימציית הפתיחה
				stage.removeChild(firstAnimation);// הסרת האנימצייה מהבמה
				nextQuestion();//מעבר לפונקצית שאלות במסך משחק
			}, 4000); // זמן במילי שניות
		}
		
		function nextQuestion() { //פונקציה שיוצרת את השאלה והמסיחים על הבמה
			createjs.Sound.stop("GameSound"); //הפעלה או השתקה של מתג מוזיקה ראשי
			if (music == "on") {// אם כפתור צלילים מופעל השמע סאונד ראשי של משחק
				playSound();
			}
			var mainGame = new lib.MC_MAIN_GAME(); //קריאה לאובייקט המכיל את המסך המרכזי לטעינה
			stage.addChild(mainGame); //טעינת מסך מרכזי על הבמה
			mainGame.SubjectGame_txt.text = subject; //הוספת נושא המשחק על הבמה
		
			setTimeout(function () { //פונקציה שמבצעת החלפה של אנימציית סיום כניסה באובייקט סטטי ללא גלים
				var FROGI_START_NEW = new lib.FROGI_START_NEW(); //הכן לטעינה את פרוגי על רפסודה
				FROGI_START_NEW.name = "FROGI_START_NEW"; //תן שם לפרוגי על רפסודה
				FROGI_START_NEW.x = 1153.5; //מקם את הרפסודה במיקום של אנימציית סיום כניסה
				FROGI_START_NEW.y = 330.3; //מקם את הרפסודה במיקום של אנימציית סיום כניסה
				stage.addChild(FROGI_START_NEW); //צור את הרפסודה ביחד עם פרוגי במיקום המתאים לאחר אנימציית כניסה
				FROGI_START_NEW.gotoAndStop(0); //עבור לפריים 0 ללא גלים
			}, 550); // זמן במילי שניות
		
			frogiProgress.name = "frogiProgress"; //תן שם למד התקדמות
			stage.addChild(frogiProgress); //צור מד התקדמות על הבמה
			frogiProgress.x = tempX; // מיקום התחלתי של מד ההתקדמות על ציר ה X
			frogiProgress.y = 557; // מיקום התחלתי של מד ההתקדמות על ציר ה Y
		
			createButton(); //פונקציה ליצירת כפתורים
			stage.addChild(pause_btn); //צור כפתור השהייה על הבמה
		
			stage.getChildByName("pause_btn").addEventListener("click", pause); //הוסף מאזין לכפתור השהייה על הבמה
			stage.getChildByName("sound_btn").addEventListener("click", ClickMuteSound); //הוסף מאזין לכפתור השהייה על הבמה
		
			var currentQuestion = new createjs.Text(); //יצירת תיבת טקסט
			currentQuestion.text = questionCounter; //הגדרת מספר שאלה נוכחי בתיבת טקסט
			currentQuestion.font = "14px Heebo"; //הגדרת גופן
			currentQuestion.textAlign = "center"; //הגדרת מיקום טקסט
			stage.addChild(currentQuestion);
			currentQuestion.name = "numberOne";
			currentQuestion.x = 1236; //מיקום X
			currentQuestion.y = 608; //מיקום Y
		
			var totalQuestion = new createjs.Text(); //יצירת תיבת טקסט
			totalQuestion.text = totalQuestions; //הגדרת מספר שאלה נוכחי בתיבת טקסט
			totalQuestion.font = "14px Heebo"; //הגדרת גופן
			totalQuestion.textAlign = "center"; //יצירת אובייקט
			stage.addChild(totalQuestion);
			totalQuestion.name = "numberTwo";
			totalQuestion.x = 1180; //מיקום X
			totalQuestion.y = 608; //מיקום Y
		
			countImg = 0; //איפוס מספר תמונות על הבמה
			while (imgName.length > 0) { //כל עוד מערך השמות של התמונות גדול מאפס
				imgName.splice(0, 1); //מחק את השם ש התמונה ממיקום אפס במערך
			}
		
			var clock = new lib.clock_animiton(); // הגדרת משתנה שיכיל את הסימבול של השעון
			stage.addChild(clock); // יצירת אובייקט של שעון על הבמה
			clock.x = 190; // קביעת מיקום X
			clock.y = 560; // קביעת מיקום Y
		
			stage.addChild(timer_txt); // יצירת גרפיקה של טקסט על הבמה
			timer_txt.x = 61; // קביעת מיקום X
			timer_txt.y = 590; // קביעת מיקום Y
			timer_txt.color = "#000000"; // קביעת צבע טקסט 
			timer_txt.font = "14px Heebo Regular"; // קביעת גודל פונט וסוג
		
			createPositionXY(); //צור את מערך המיקומים מחדש
			randomQuestion(); //צור מספר שאלה רנדומלי
			while (myGame[question][0][2] == "NOSHOW") { //בדוק האם המספר הרנדומלי מחזיר שאלה שלא אמורה להופיע יותר
				randomQuestion(); //צור מספר שאלה רנדומלי
			}
		
			var questionTitel = new createjs.Text(); //צור כותרת לשאלה
			questionTitel.text = myGame[question][0][0]; //צור כותרת לשאלה עם תוכן
			questionTitel.name = "questionTitel"; //שם לכותרת
		
			if (myGame[question][0][3] != null) { //פונקציה שבודקת האם יש תמונה בגזע שאלה
				var temp = myGame[question][0][3].toString(); //אם יש תמונה בגזע שאלה הוצא את שם התמונה כמחרוזת
				var let = temp.charAt(0); //שלוף מספר שמופיע בסוף הלינקייג של התמונה
			}
			if (let == "f") { //אם המספר שווה ל-F אז
				var img = new(myGame[question][0][3])(); //צור משתנה חדש מסוג תמונה ומקם את התמונה מהמערך במשתנה זה
				img.name = "TITLEIMG"; //תן שם לתמונה
				img.y = 59; //מקם את התמונה במיקום Y
				mainGame.GEZA.addChild(img); //הוסף את התמונה לגזע
				titleImgFlag = "true" // "אם תמונה קיימת בגזע השאלה המשתנה שווה "נכון
				var titleMag = new lib.magnify(); //צור לטעינה זכוכית מגדלת
				titleMag.name = "titleMag"; //תן שם לזכוכית מגדלת
				img.addChild(titleMag); //מקם זכוכית מגדלת על התמונה
			}
		
			questionTitel.font = "14px Heebo"; //עיצוב גזע שאלה
			questionTitel.textAlign = "right"; //מקם טקסט בכיוון מתאים
			questionTitel.x = 1230; //מקם טקסט במיקום X
			questionTitel.y = 70; //מקם טקסט במיקום Y
			questionTitel.lineWidth = 720; //רווח שורה לפי רוחב
			questionTitel.lineHeight = 30; //רווח שורה לפי אורך
		
			connect = ""; // המספר של שם המלבן שהשחקן לחץ עליו
			stage.addChild(BTN_CHECK);//הוסף לבמה את כפתור בדוק לא פעיל
			stage.addChild(questionTitel); //הוספת גזע שאלה לבמה
		
			if (myGame[question].length == 4) { //אם במערך יש 3 מסיחים אז תעלים 3 רפסודות
				mainGame.raft4.gotoAndStop(1);//הסתר רפסודה מספר 4
			}
			if (myGame[question].length == 3) { //אם במערך יש 2 מסיחים אז תעלים 2 רפסודות
				mainGame.raft4.gotoAndStop(1);//הסתר רפסודה מספר 4
				mainGame.raft3.gotoAndStop(1);//הסתר רפסודה מספר 3
			}
		
			for (i = 1; i < myGame[question].length; i++) { //לולאה שיוצרת את כל המסיחים על הבמה כולל ההתנהגות שלהם
				var box = new lib.questionBox(); //צור מלבנים לקראת טעינה
				if (myGame[question].length == 5) {// אם אורך המערך שווה ל5
					randomPosition(); //צור מיקומים רנדומליים
					box.x = randomPositionX; //מקם מלבן במיקום רנדומלי X
					box.y = randomPositionY; //מקם מלבן במיקום רנדומלי Y
				}
				if (myGame[question].length == 4) { //אם אורך המערך שווה ל4
					randomPosition3(); //קרא לפונקציה שיוצרת צמד מספרים רנדומלי בשביל מיקום המלבנים בצורה אקראית 
					box.x = randomPositionX3; // מיקום הX של ריבוע לבן של מסיח כאשר יש 3 מסיחים בשאלה
					box.y = randomPositionY3; // מיקום הY כאשר יש 3 מסיחים בשאלה
				}
				if (myGame[question].length == 3) {//אם אורך המערך שווה ל3
					randomPosition2();//קרא לפונקציה שיוצרת צמד מספרים רנדומלי בשביל מיקום המלבנים בצורה אקראית
					box.x = randomPositionX2; // מיקום הX כאשר יש 2 מסיחים בשאלה
					box.y = randomPositionY2; // מיקום הY כאשר יש 2 מסיחים בשאלה			
				}
		
				box.name = "question" + i; //שם המלבן
				stage.addChild(box); //הוסף מלבן לבמה
				box.addEventListener("click", connection); //הוסף מאזין למלבן
				box.gotoAndStop(0); //הפסק אנימציות מלבן
		
				var temp = myGame[question][i][0].toString(); //בדוק האם מדובר במחרוזת או תמונה
				var let = temp.charAt(0);// בדוק האם האות הראשונה במערך היא תמונה או טקסט אם כן תמקם בתור תמונה
		
				if (let == "f") { //אם מדובר בתמונה
					var img = new(myGame[question][i][0])(); //הגדר משתנה תמונה
					box.addChild(img); //מקם תמונה על מלבן
					img.name = "img" + i;//תן שם למשתנה תמונה
					var mag = new lib.magnify(); //צור מהספרייה אובייקט זכוכית מגדלת
					mag.name = "magnify" + i; //תן שם לאובייקט
					stage.addChild(mag); //הוסף את האובייקט על הבמה
		
					if (myGame[question].length == 5) {// אם אורך המערך שווה ל5
						mag.x = randomPositionX; //הגדר מיקום X
						mag.y = randomPositionY; //הגדר מיקום Y				
					}
					if (myGame[question].length == 4) {//אם אורך המערך שווה ל4
						mag.x = randomPositionX3; //הגדר מיקום X
						mag.y = randomPositionY3; //הגדר מיקום Y	
					}
					if (myGame[question].length == 3) {//אם אורך המערך שווה ל3
						mag.x = randomPositionX2; //הגדר מיקום X
						mag.y = randomPositionY2; //הגדר מיקום Y				
					}
					mag.addEventListener("click", showBIG); //הוסף מאזין בעת לחיצה על אובייקט
					countImg = countImg + 1; //הוסף מספר נוסף לספירת תמונות על הבמה
					imgName.push(mag.name); //הוסף את שם התמונה למערך שמות תמונות
		
				} else { //אם מדובר במחרוזת
					var string = new createjs.Text(); //הגדר משתנה טקסט
					string.text = myGame[question][i][0]; //הגדר תוכן במשתנה טקסט
					box.addChild(string); //מקם טקסט על מלבן
		
					string.font = "15px Heebo"; //הגדרות עיצוב
					string.textAlign = "right";
					string.x = 247;// מיקום הX של משתנה טקסט
					string.y = 15; //מיקום הY של משתנה טקסט
					string.lineWidth = 247;// הרוחב של משתנה טקסט
					string.lineHeight = 25;	// הרוחב של משתנה טקסט
				}
			}
			timeCounter = 30; //אפס את הזמן המוגדר לכל שאלה
			setTime = setInterval(timer, 1000); //הפעלת זמן פר שאלה
		}
		
		function connection(event) {//פונקציה שמחברת בין כפתור בדוק לא פעיל/לחיצה על מסיח ואז כפתור בדוק פעיל שעושה בדיקה
			connectionFlag = "true";// משתנה ששומר האם השחקן לחץ על מסיח לפני שהוא לחץ בדוק
			stage.getChildByName("FROGI_START_NEW").gotoAndStop(1);// שים את האובייקט על הבמה ולך לפריים 1
			changeColor();// שנה צבע חיווי של מסיחים
			event.currentTarget.gotoAndStop(3);//הצג מסגרת מסיח בצבע ורוד לפני לחיצה על כפתור בדיקה
			stage.removeChild(stage.getChildByName("BTN_CHECK"));//הסר כפתור בדוק לא פעיל מהבמה
			connect = event.currentTarget.name.slice(-1);//קח האינדקס של המסיח שלחצת עליו
			stage.addChild(BTN_CHECKACTIVE);//הוסף לבמה כפתור בדוק פעיל
			BTN_CHECKACTIVE.addEventListener("click", checkAnswer); //הוסף מאזין לכפתור בדוק פעיל לפונקציית בדיקת תשובה
		}
		
		function changeColor() {//פונקצייה שמחליפה את צבע המסגרת של המסיחים
			for (i = 1; i < myGame[question].length; i++) { //לולאה שעוברת על מערך השאלות במשחק 
				stage.getChildByName("question" + i).gotoAndStop(0);// מחליף את צבע המסגרת של המסיחים לשחור
			}
		}
		
		function checkAnswer() { //פונקציה שמבצעת בדיקה האם הבחירה במסיח נכונה
			connectionFlag = "false";//// משתנה ששומר האם השחקן לחץ על מסיח לפני שהוא לחץ בדוק
			clearInterval(setTime); //אפס את הגדרת הזמן לכל שאלה
			removeEventListener(); //בטל את כל המאזינים
			var boxNum = connect; //שלוף את המספר של שם המלבן
			var boxAnswer = myGame[question][boxNum][1]; //בדוק האם התשובה היא נכונה
			createjs.Sound.stop("GameSound");//צור מוזיקת משחק ועצור
		
			if (boxAnswer == "true") { //אם התשובה נכונה
				if (music == "on") {//אם כפתור צלילים עובד
					createjs.Sound.play("Success") // נגן מוזיקת הצלחה לבחירה במסיח נכון
				};
				var countRespone = myGame[question][0][1]; //שלוף את מספר ניסיונות המענה לשאלה
				var countGrade = 100 / (totalQuestions * countRespone); //בצע חישוב של נוסחת ציון ביניים
				sumScore.push(countGrade); //דחוף ציון למערך ציון ביניים
				myGame[question][0][2] = "NOSHOW"; //הגדר שאלה שלא תופיע יותר במשחק
				stage.getChildByName("question" + connect).gotoAndStop(1);// לך לפריים 2 של שם המלבן לפי המספר שלו
				counter = counter - 1; //צמצם ב-1 את כמות השאלות שנותרו לשחקן		
				if (counter == 0) { //אם כמות השאלות הגיעה ל-0
					clearInterval(setGlobalTime); //עצור את ספירת הזמן לכל המשחק
					for (i = 0; i <= sumScore.length - 1; i++) { //בצע חישוב של ציון המשחק
						grade = grade + sumScore[i]; //סכום את מערך ביניים של ציון המשחק
					}
					progressBar();// קרא לפונקציית מד התקדמות		
					stage.removeChild(stage.getChildByName("BTN_CHECKACTIVE"));//הסר כפתור בדוק פעיל מהבמה
					setTimeout(function () { //פונקציה להגדרת זמן מעבר בין שאלות לאחר בחירת מסיח 
						endGame();// קרא לפונקציית מסך סיום
					}, 1000); // זמן במילי שניות
				} else { //אם כמות השאלות לא הגיעה ל-0
					questionCounter = questionCounter + 1; //הגדרת מספר השאלה הנוכחי באחד
					progressBar();// קרא לפונקציית מד התקדמות
					btnNextWin();//לאחר בחירה במסיח נכון הפעל כפתור המשך
				}
			} else { //אם התשובה לא נכונה
				if (music == "on") {// אם כפתור צלילים פעיל
					createjs.Sound.play("Failure");//הפעלת סאונד אי הצלחה
				} 
				sumErrors = sumErrors + 1;// העלאת משתנה ספירת טעויות באחד
				var countRespone = myGame[question][0][1]; //ציין בשאלה במערך מסיחים מספר ניסיון נוסף
				myGame[question][0][1] = countRespone + 1; //הוסף למספר הניסיון הקיים עוד 1
				stage.getChildByName("question" + connect).gotoAndStop(2);// לך לפריים 2 של שם המלבן לפי המספר שלו
				btnNextLose(); //הפעל כפתור המשך לאחר 
			}
		}
		
		function randomQuestion() { //פונקציה שיוצרת מספר רנדומלי איתו אנחנו בוחרים תת-מערך מסיחים רנדומלי
			question = parseInt(Math.random() * ((totalQuestions - 1) + 1)) - (1) + 1;
		}
		
		function randomPosition3() { //פונקציה שיוצרת צמד מספרים רנדומלי בשביל מיקום המלבנים בצורה אקראית
			var randomPosition = parseInt(Math.random() * (2 + 1)) - (1) + 1;
			while (positionX3[randomPosition] == null) {// כל עוד המשתנה שמכיל מערך של ציר הX במצב של 3 מסיחים במקום רנדומלי שווה למשהו 
				var randomPosition = parseInt(Math.random() * (2 + 1)) - (1) + 1;// הצג לי מספרים רנדומליים נוספים
			}
			randomPositionX3 = positionX3[randomPosition];// 
			randomPositionY3 = positionY3[randomPosition];
			positionX3.splice(randomPosition, 1); //מחיקה של מיקום ממערך מיקומים אחרי ששלפנו אותו כמיקום רנדומלי
			positionY3.splice(randomPosition, 1); //מחיקה של מיקום ממערך מיקומים אחרי ששלפנו אותו כמיקום רנדומלי
		}
		
		function randomPosition2() { //פונקציה שיוצרת צמד מספרים רנדומלי בשביל מיקום המלבנים בצורה אקראית
			var randomPosition = parseInt(Math.random() * (1 + 1)) - (1) + 1;
			while (positionX2[randomPosition] == null) {//משתנה שמכיל את הערך של מיר הX במצב של 3 מסיחים במקום רנדומלי כל עוד הוא שווה למשהו 
				var randomPosition = parseInt(Math.random() * (1 + 1)) - (1) + 1;
			}
			randomPositionX2 = positionX2[randomPosition];
			randomPositionY2 = positionY2[randomPosition];
			positionX2.splice(randomPosition, 1); //מחיקה של מיקום ממערך מיקומים אחרי ששלפנו אותו כמיקום רנדומלי
			positionY2.splice(randomPosition, 1); //מחיקה של מיקום ממערך מיקומים אחרי ששלפנו אותו כמיקום רנדומלי
		}
		
		function randomPosition() { //פונקציה שיוצרת צמד מספרים רנדומלי בשביל מיקום המלבנים בצורה אקראית
			var randomPosition = parseInt(Math.random() * (3 + 1)) - (1) + 1;
			while (positionX[randomPosition] == null) {//משתנה שמכיל את הערך של X במצב רגיל של 4 מסיחים כל עוד הוא שווה למשהו
				var randomPosition = parseInt(Math.random() * (3 + 1)) - (1) + 1;
			}
			randomPositionX = positionX[randomPosition];
			randomPositionY = positionY[randomPosition];
			positionX.splice(randomPosition, 1); //מחיקה של מיקום ממערך מיקומים אחרי ששלפנו אותו כמיקום רנדומלי
			positionY.splice(randomPosition, 1); //מחיקה של מיקום ממערך מיקומים אחרי ששלפנו אותו כמיקום רנדומלי
		}
		
		function removeEventListener() { //פונקציה שמבצעת ביטול מאזינים
			for (i = 1; i < myGame[question].length; i++) { //לולאה שמבצעת ביטול מאזינים לכל המאזינים על הבמה
				stage.getChildByName("question" + i).removeEventListener("click", connection);//לך למלבן לפי המספר שלו בשם והסר לו מאזין
			}
			stage.getChildByName("pause_btn").removeEventListener("click", pause); //הסר מאזין לכפתור השהייה
			stage.getChildByName("sound_btn").removeEventListener("click", ClickMuteSound); //הסר מאזין לכפתור צלילים
			
			if (connectionFlag == "true") {// אם השחקן לחץ על מסיח
				stage.getChildByName("BTN_CHECKACTIVE").removeEventListener("click", checkAnswer); //לך לכפתור בדוק פעיל והסר מאזין
			}
			if (countImg > 0) { //אם כמות התמונות על הבמה גדול מאפס
				for (i = 0; i <= imgName.length; i++) { //הכנס ללולאה כאורך מערך שמות התמונות
					var temp = imgName[i]; //שלוף את שם התמונה ממיקום אינדקס
					stage.getChildByName(temp).removeEventListener("click", showBIG); //הסר מאזין לשם שקיבלת ממשתנה זמני
				}
			}
		}
		
		function addEventListener() {//פונקציה שמוסיפה מאזינים
			for (i = 1; i < myGame[question].length; i++) { //לולאה שמבצעת ביטול מאזינים לכל המאזינים על הבמה
				stage.getChildByName("question" + i).addEventListener("click", connection);
			}
			stage.getChildByName("pause_btn").addEventListener("click", pause); //הוסף מאזין לכפתור השהייה על הבמה
			stage.getChildByName("sound_btn").addEventListener("click", ClickMuteSound); //הוסף מאזין לכפתור צלילים על הבמה
		
			if (connectionFlag == "true") {//אם השחקן לחץ על מסיח 
				stage.getChildByName("BTN_CHECKACTIVE").addEventListener("click", checkAnswer);// הוסף לכפתור בדוק פעיל מאזין
			}
			if (countImg > 0) { //אם כמות התמונות על הבמה גדול מאפס
				for (i = 0; i <= imgName.length; i++) { //הכנס ללולאה כאורך מערך שמות התמונות
					var temp = imgName[i]; //שלוף את שם התמונה ממיקום אינדקס
					stage.getChildByName(temp).addEventListener("click", showBIG); //הוסף מאזין לשם שקיבלת ממשתנה זמני
				}
			}
		}
		
		function showBIG(event) { //פונקציה להגדלת תמונה לפי התמונה עליה לחצתי
			var i = event.currentTarget.name.slice(-1); //קח את מספר התמונה לפי השם שלה
			var img = new(myGame[question][i][0])(); //צור תמונה חדשה על הבמה
			img.name = "bigImage"; //הגדר שם לתמונה
			stage.addChild(img); //הוסף את התמונה החדשה לבמה
			img.scale = 2; //הגדל את התמונה פי 2
			img.x = 400; //מקם את התמונה במיקום X
			img.y = 250; //מקם את התמונה במיקום Y
			removeEventListener(); //עבור לפונקציה שמבטלת את כל המאזינים
			img.addEventListener("click", showMini); //הוסף מאזין בעת לחיצה על התמונה
		}
		
		function showMini() { //פונקציה לסגירת תמונה אחרי הגדלתה
			stage.removeChild(stage.getChildByName("bigImage")); //הסר את התמונה הגדולה מהבמה
			addEventListener(); //עבור לפונציה שמחזירה את כל המאזינים
		}
		
		function btnNextWin() { //פונקציה שמבצעת הפעלת מאזין לכפתור המשך
			stage.removeChild(stage.getChildByName("BTN_CHECKACTIVE"));//הסר כפתור בדוק פעיל מהבמה
			stage.addChild(BTN_CONTINUEACTIVE);// הוסף כפתור המשך לבמה
			BTN_CONTINUEACTIVE.addEventListener("click", betweenQAnimiton); //הוספת מאזין לכפתור המשך עם הפניה לפונקציה שמנקה את הבמה
		}
		
		function btnNextLose() { //פונקציה שמבצעת הפעלת מאזין לכפתור המשך בעת בחירה שגויה ולא תהיה אנימציית מעבר
			loseFlag = "true";// משתנה שבודק האם התשובה לא נכונה
			stage.removeChild(stage.getChildByName("BTN_CHECKACTIVE"));//הסר כפתור בדוק פעיל מהבמה
			stage.addChild(BTN_CONTINUEACTIVE2);//הוסף כפתור המשך במידה והתשובה לא נכונה
			BTN_CONTINUEACTIVE2.addEventListener("click", clearQuestionScreen); //הוספת מאזין לכפתור המשך עם הפניה לפונקציה שמנקה את הבמה
		}
		
		function clearQuestionScreen() { //פונקציה שמבצעת ניקוי הבמה
			clearScreen();//קרא לפונקציה ניקוי מסך
			nextQuestion(); //קריאה לפונקציה שיוצרת שאלה חדשה
		}
		
		function clearScreen() { //פונקציה שבמצעת ניקוי מסך - קוראים לפונקציה הזו מכל מני פונקציות אחרות
			for (i = 1; i < myGame[question].length; i++) { //לולאה שמבצעת ניקוי לכל האלמנטים שמופיעים על-גבי הבמה
				stage.removeChild(stage.getChildByName("question" + i));//הסר אובייקט מלבן מסיח
			}
			stage.removeChild(stage.getChildByName("next")); //ניקוי כפתור המשך
			stage.removeChild(stage.getChildByName("questionTitel")); //ניקוי שאלה
			stage.removeChild(stage.getChildByName("numberOne")); //ניקוי מספר שאלה נוכחי
			stage.removeChild(stage.getChildByName("numberTwo")); //ניקוי מספר שאלות במשחק
			stage.removeChild(stage.getChildByName("clock")); // ניקוי אובייקט של שעון
			stage.removeChild(stage.getChildByName("FROGI_START_NEW"));// הסר אנימציית מעבר של פרוגי בכניסה לשאלה חדשה לאחר בחירה במסיח שגוי
		
			if (loseFlag == "true") {//אם התשובה שבחר השחקן היא לא נכונה
				stage.removeChild(stage.getChildByName("BTN_CONTINUEACTIVE2")); // הסר את כפתור המשך של בחירה שגויה
			}
			if (titleImgFlag == "true") {//אם יש תמונה בגזע הסתר את התמונה
				stage.removeChild(stage.getChildByName("TITLEIMG"));
			}
			if (countImg > 0) { //אם כמות התמונות על הבמה גדול מאפס
				for (i = 0; i < imgName.length; i++) { //הכנס ללולאה כאורך מערך שמות התמונות
					var temp = imgName[i]; //שלוף את שם התמונה ממיקום אינדקס
					stage.removeChild(stage.getChildByName(temp)); //הסר תמונה לפי השם שקיבלת ממשתנה זמני
				}
				stage.removeChild(stage.getChildByName("bigImage")); //הסר תמונה גדולה
			}
		}
		
		function timer() { //פונקציה שמבצעת ספירה לאחור מ-זמן מוגדר עבור כל שאלה
			if (timeCounter == 0) { //אם הזמן המוגדר הגיע לאפס
				clearInterval(setTime); //אפס את הגדרת הזמן לכל שאלה
				timer_txt.text = "";//איפוס תיבת טקסט לטיימר
				removeEventListener(); //בטל את כל המאזינים
				timeUp(); //גש לפונקציה שמבצעת פעולות מסוימות אם הזמן נגמר
			
			} else { //אם לא
				timer_txt.text = "";// איפוס תיבת הטקסט של הטיימר
				timeCounter = timeCounter - 1; //הורד בספרה אחת את הזמן המוגדר לכל שאלה
				
				if (timeCounter < 10) { //  אם הזמן שנקבע הוא פחות מ10
					timer_txt.x = 65; // הזז מיקום X
				}
				timer_txt.text = timeCounter; // הדפס זמן מוגדר
			}
		}
		
		function timeUp() { //פונקציה שמבצעת פעולות מסוימות כאשר הזמן נגמר
			clearScreen(); //גש ונקה מסך
			var timeUp = new lib.timeUp_Screen();// צור אובייקט של מסך זמן נגמר 
			stage.addChild(timeUp);// הוסף מסך זמן נגמר לבמה
			timeUp.name = "timeUpScreen";//תן שם למסך זמן נגמר
			timeUp.btn_continueTimeUp.addEventListener("click", clickContinueFromTimeUp); //הפעל מאזין לכפתור שנמצא על הבמה בפריים הזמן נגמר
		}
		
		function clickContinueFromTimeUp() { //פונקציה שמבצעת איפוס אחרי לחיצה לחיצה על כפתור המשך מפריים הזמן נגמר
			stage.removeChild(stage.getChildByName("timeUpScreen"));// הסר מסך הזמן נגמר מהבמה
			nextQuestion(); //הפעל פונקציה של השאלה הבאה
		}
		
		function globalTimer() { //פונקציה שמבצעת ספירה קדימה מזמן אפס עבור כל המשחק
			globalTimeCounter = globalTimeCounter + 1; //הוסף שניה אחת לזמן אפס
		}
		
		function pause() { //פונקציה להגדרת מסך השהייה
			var pause = new lib.pause_screen(); //צור כפתור השהייה
			stage.addChild(pause); //הוסף כפתור השהייה לבמה
			pause.name = "pauseScreen"; //תן שם לכפתור השהייה
			clearInterval(setTime); //אפס את ספירת הזמן לאחור עבור כל שאלה
			removeEventListener(); //עבור לפונקציה שמבטלת את כל המאזינים על הבמה
			pause.pContinue_btn.addEventListener("click", unPause); //הוסף מאזין לכפתור המשך שיעביר לפונקציה לביטול מסך השהייה
		}
		
		function unPause() { //פונקציה לסיום מסך השהייה
			stage.removeChild(stage.getChildByName("pauseScreen")); //הסר מהבמה את מסך השהייה
			setTime = setInterval(timer, 1000); //הגדר ספירת זמן לאחור עבור כל שאלה כל 1 שניות
			addEventListener(); //עבור לפונקציה שמגדירה מאזינים לאובייקטים על הבמה
		}
		
		function betweenQAnimiton() {//פונקציית אנימציית מעבר בין שאלות לאחר תשובה במסיח נכון
			stage.removeChild(stage.getChildByName("BTN_CONTINUEACTIVE"));
			var QAnimiton = new lib.Q_Animiton();//יצירת אנימציית מעבר
			stage.addChild(QAnimiton);// הוספה של אנימציית המעבר לבמה
			QAnimiton.SubjectGame_txt.text = subject;//הוספת נושא המשחק לאנימציית מעבר
			setTimeout(function () {// הגדרת זמן ליציאה מאנימציית מעבר
				stage.removeChild(QAnimiton);// הסר אנימציית מעבר מהבמה
				clearQuestionScreen();//נקה את המסך
			}, 1000); // זמן במילי שניות
		}
		
		function endGame() { // פונקציית אנימציית סיום
			clearScreen(); // מחיקת המסך הקודם
			var endAnimiton = new lib.endAnimiton(); // צור מסך אנימציית סיום
			endAnimiton.name = "endAnimation"; // תן שם למסך אנימציית הסיום
			stage.addChild(endAnimiton); // הוסף אנימציית סיום לבמה
			endAnimiton.SubjectGame_txt.text = subject;//הוספת נושא המשחק לאנימציית סיום
			if (music == "on") {//אם כפתור צלילים במצב פעיל
				createjs.Sound.play("Endofgame")//נגן מוזיקת סיום
			};
			setTimeout(function () {//הגדרת זמן להופעה של לוח מסכם באנימציית סיום
				summary();//פונקציה שמכילה את הנתונים בלוח המסכם ואת הכפתורים שחקו שוב ותפריט ראשי
			}, 3100); // זמן במילי שניות
			createButton(); //פונקציה ליצירת כפתורים
			sound_btn.addEventListener("click", ClickMuteSound);//הוספת מאזין לכפתור צלילים
		}
		
		function summary() {//פונקציה שמכילה את הנתונים בלוח המסכם ואת הכפתורים שחקו שוב ותפריט ראשי
			mygrade();//פונקציה שמחשבת את הציון הסופי
			myerros();// פנוקציה שמחשבת את מספר הטעויות שעשה השחקן
			mytime();//פונקציה שמחשבת את הזמן הכולל של המשחק בדקות
			myMain_btn();//פונקציה שמחזירה את המשחק לתפריט הראשי
			myPlayagain_btn();//פונקציה שמעבירה למשחק חוזר באותו נושא
		}
		
		function myMain_btn() {//פונקציית כפתור תפריט ראשי במסך סיום
			var MainMenu_btn = new lib.MainMenu_btn();//יצירת כפתור תפריט ראשי
			MainMenu_btn.name = "MainMenu_btn";//תן שם לכפתור תפריט ראשי
			MainMenu_btn.x = 920;//מיקום הX של כפתור תפריט ראשי
			MainMenu_btn.y = 465;//מיקום הY של כפתור תפריט ראשי
			stage.addChild(MainMenu_btn);//הוסף לבמה את הכפתור תפריט ראשי
			MainMenu_btn.addEventListener("click", gotohomepage);//הוספת מאזין לכפתור תפריט ראשי
		}
		
		function myPlayagain_btn() {//פונקציית כפתור שחק שוב במסך סיום 
			var Playagain_btn = new lib.Playagain_btn();//יצירת כפתור שחק שוב על הבמה
			Playagain_btn.name = "Playagain_btn";// תן שם לכפתור שחק שוב
			Playagain_btn.x = 750;// מיקום הX של כפתור שחק שוב
			Playagain_btn.y = 465;//מיקום הY של כפתור שחק שוב
			stage.addChild(Playagain_btn);//הוסף לבמה כפתור שחק שוב
			Playagain_btn.addEventListener("click", gotoGame);//הוספת מאזין לכפתור שחק שוב
		}
		
		function mygrade() { // פונקציית יצירת ציון סופי על הבמה בתיבת טקסט דינמאית בתוך אנימציה פנימית של מסך סיום
			var theGrade = new createjs.Text(); // צור תיבת טקסט דינמאית
			theGrade.name = "theGrade"; // תן שם לתיבת טקסט 
			stage.addChild(theGrade); // הוסף לבמה את תיבת הטקסט
			theGrade.x = 905; // מיקום תיבת הטקסט X
			theGrade.y = 430; // מיקום תיבת הטקסט Y
			theGrade.font = "20px Heebo "; // פונט גודל וסוג פונט
			theGrade.text = parseInt(grade); // הדפסה של משתנה הציון הסופי
		}
		
		function myerros() { //פונקציית יצירת מספר טעויות על הבמה בתיבת טקסט דינמאית בתוך אנימציה פנימית של מסך סיום
			var theErros = new createjs.Text(); // צור תיבת טקסט דינמאית
			theErros.name = "theErros"; // תן שם לתיבת טקסט
			stage.addChild(theErros); // הוסף לבמה את תיבת הטקסט
			theErros.x = 905; // מיקום תיבת הטקסט X
			theErros.y = 370; // מיקום תיבת הטקסט Y
			theErros.font = "20px Heebo "; // פונט גודל וסוג פונט
			theErros.text = sumErrors; // הדפסה של משתנה מספר טעויות כללי
		}
		
		function mytime() { //פונקציית יצירת סך הכל זמן בשניות על הבמה בתיבת טקסט דינמאית בתוך אנימציה פנימית של מסך סיום
			var theTime = new createjs.Text(); // צור תיבת טקסט דינמאית
			theTime.name = "theTime"; // תן שם לתיבת טקסט 
			stage.addChild(theTime); // הוסף לבמה את תיבת הטקסט
			theTime.x = 905; // מיקום תיבת הטקסט X
			theTime.y = 310; // מיקום תיבת הטקסט Y
			theTime.font = "20px Heebo "; // פונט גודל וסוג פונט
			theTime.text = " סך הכל " + (globalTimeCounter / 60).toFixed(2) + " דקות "; // הדפסה של משתנה סך הכל זמן בשניות
		}
		
		function ClickMuteSound() {//פונקציה של כפתור "השתק סאונד" באמצעות פונקציה זאת מתבצעת שליטה על הסאונד 
			if (music == "on") {
				music = "off"; /*מצב השתקת צלילים*/
				sound_btn.gotoAndStop(1);//כפתור סאונד עובר למצב השתקת צליל
				stopMusic();//עצירת סאונדים
			} else {
				music = "on"; /*הפעלת צליל משחק*/
				sound_btn.gotoAndStop(0);//כפתור סאונד במצב סאונד פעיל
				playSound();//הפעלת סאונד משחק
			}
		}
		
		function gotohomepage() {//פונקציה שמעבירה את מסך המשחק למסך הבית על ידי כפתור "תפריט ראשי"
			reset();//איפוס
			homePage();//פונקציה מסך הבית
		}
		
		function gotoGame() {// פונקציה שמעבירה את מסך המשחק להפעלה מחדש של אותו משחק על ידי כפתור "שחקו שוב
			reset();//איפוס
			if (myChoice == 1) {
				firstGameFunc();//הפעלת משחק גיאוגרפיה
			} else {
				secondGameFunc();//הפעלת משחק חשבון
			}
		}
		
		function reset() {//פונקציה שמאפסת את המסך 
			stage.removeChild(stage.getChildByName("MainMenu_btn"));//מחיקת כפתור "תפריט ראשי" מהבמה
			stage.removeChild(stage.getChildByName("endAnimation"));//מחיקת אנימצית סיום מהבמה
			stage.removeChild(stage.getChildByName("Playagain_btn"));//מחיקת כפתור"שחקו שוב" מהבמה
			stage.getChildByName("theGrade").text = "";//איפוס של הציון הסופי בבמה
			stage.getChildByName("theErros").text = "";//איפוס של כמות הטעויות בבמה
			stage.getChildByName("theTime").text = "";//איפוס של משך זמן המשחק
			sumScore = [];//איפוס מערך ביניים שמכיל ניקוד יחסי של שאלות
			globalTimeCounter = 0;//איפוס משתנה המכיל את ספירת הזמן בשניות לכל המשחק
			countImg = 0;// איפוס של משתנה שסופר את מספר התמונות שמופיעות במסיחים
			imgName = []; // איפוס של משתנה ששומר את שמות התמונות שמופיעות במסיחים במערך
			connect = "";// איפוס של משתנה של מספר שם המלבן שהשחקן לחץ עליו
			loseFlag = "false";// איפוס משתנה ששומר האם השחקן לחץ תשובה נכונה או לא נכונה
			titleImgFlag = "false";// איפוס משתנה שבודק אם קיימת תמונה בגזע השאלה
			subject = "";//איפוס שם נושא המשחק (חשבון/גיאוגרפיה)
			grade = 0; // איפוס ציון סופי
			sumErrors = 0; // איפוס משתנה המכיל את סך כל השגיאות
			questionCounter = 1;// איפוס משתנה המכיל את מספר השאלה הנוכחי
			tempX = 1162// Xאיפוס מיקום התחלתי של מד ההתקדמות על ציר
			setGlobalTime;// איפוס משתנה שיכיל את הגדרת הזמן עבור כל המשחק
		}
		
		function progressBar(){//פונקציית מד התקדמות של המשחק
			tempX = tempX - moveX;//Xחישוב של מד התקדמות על הציר
			stage.removeChild(stage.getChildByName("frogiProgress"));//מחיקה של מד התקדמות 
			stage.addChild(frogiProgress);//מחיקה של מד התקדמות 
			frogiProgress.x = tempX;//המיקום הקפיצה החדש של פרוגי
		}
		
		function createButton() { //פונקציה ליצירת כפתורים
			stage.addChild(sound_btn); //יצירת כפתור צלילים
			stage.addChild(music_btn); //יצירת כפתור מוזיקה
		}
		
		function stopMusic() {//פונקציה שבאמצעותה עוצרים את הסאונדים במשחק
			createjs.Sound.stop("Success"); //עצירת סאונד הצלחה
			createjs.Sound.stop("Failure"); //עצירת סאונד אי הצלחה
			createjs.Sound.stop("Endofgame"); //עצירת סאונד סיום
			createjs.Sound.stop("GameSound");//עצירת סאונד משחק
		}
		
		function playSound() {//פונקציה שבאמצעותה מפעילים את סאונד המשחק 
			createjs.Sound.play("GameSound", {
				interrupt: createjs.Sound.INTERRUPT_ANY,
				loop: -1
			})
		}; //הפעלת מוזיקת פתיחה
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: '6BF547886BE25247839B6B22E36D372B',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_continue.png?1644201387231", id:"_continue"},
		{src:"images/bankofariver.png?1644201387231", id:"bankofariver"},
		{src:"images/BlueFrogi.png?1644201387231", id:"BlueFrogi"},
		{src:"images/brownborad.png?1644201387231", id:"brownborad"},
		{src:"images/butterfly_open.png?1644201387231", id:"butterfly_open"},
		{src:"images/Cards.png?1644201387231", id:"Cards"},
		{src:"images/check_active.png?1644201387231", id:"check_active"},
		{src:"images/check_notActive.png?1644201387231", id:"check_notActive"},
		{src:"images/clock.png?1644201387231", id:"clock"},
		{src:"images/ComboBox.png?1644201387231", id:"ComboBox"},
		{src:"images/continue_btn.png?1644201387231", id:"continue_btn"},
		{src:"images/EndAnimitonBackground.png?1644201387231", id:"EndAnimitonBackground"},
		{src:"images/endbuttuns.png?1644201387231", id:"endbuttuns"},
		{src:"images/finalborad.png?1644201387231", id:"finalborad"},
		{src:"images/frogiHappy.png?1644201387231", id:"frogiHappy"},
		{src:"images/FrogiSideLook.png?1644201387231", id:"FrogiSideLook"},
		{src:"images/Game_Name_Subject.png?1644201387231", id:"Game_Name_Subject"},
		{src:"images/GameBackground.png?1644201387231", id:"GameBackground"},
		{src:"images/gm1.png?1644201387231", id:"gm1"},
		{src:"images/GreenFrogi.png?1644201387231", id:"GreenFrogi"},
		{src:"images/Homescreenbackground.png?1644201387231", id:"Homescreenbackground"},
		{src:"images/Howtoplayborad.png?1644201387231", id:"Howtoplayborad"},
		{src:"images/img_temp_1.jpg?1644201387231", id:"img_temp_1"},
		{src:"images/img_temp_2.jpg?1644201387231", id:"img_temp_2"},
		{src:"images/img_temp_3.jpg?1644201387231", id:"img_temp_3"},
		{src:"images/img_temp_4.jpg?1644201387231", id:"img_temp_4"},
		{src:"images/jump.png?1644201387231", id:"jump"},
		{src:"images/jump2.png?1644201387231", id:"jump2"},
		{src:"images/jumpBlue.png?1644201387231", id:"jumpBlue"},
		{src:"images/jumpeGreen.png?1644201387231", id:"jumpeGreen"},
		{src:"images/jumperGreen.png?1644201387231", id:"jumperGreen"},
		{src:"images/jumpingfrogi.png?1644201387231", id:"jumpingfrogi"},
		{src:"images/jumpPink.png?1644201387232", id:"jumpPink"},
		{src:"images/looksideBlue.png?1644201387232", id:"looksideBlue"},
		{src:"images/looksidePink.png?1644201387232", id:"looksidePink"},
		{src:"images/music.png?1644201387232", id:"music"},
		{src:"images/mute.png?1644201387232", id:"mute"},
		{src:"images/namegameH1.png?1644201387232", id:"namegameH1"},
		{src:"images/num0.png?1644201387232", id:"num0"},
		{src:"images/num1.png?1644201387232", id:"num1"},
		{src:"images/num2.png?1644201387232", id:"num2"},
		{src:"images/num3.png?1644201387232", id:"num3"},
		{src:"images/num4.png?1644201387232", id:"num4"},
		{src:"images/num5.png?1644201387232", id:"num5"},
		{src:"images/num6.png?1644201387232", id:"num6"},
		{src:"images/num7.png?1644201387232", id:"num7"},
		{src:"images/num8.png?1644201387232", id:"num8"},
		{src:"images/num9.png?1644201387232", id:"num9"},
		{src:"images/OpenanimitonBackground.png?1644201387232", id:"OpenanimitonBackground"},
		{src:"images/PauseH1.png?1644201387232", id:"PauseH1"},
		{src:"images/PinkFrogi.png?1644201387232", id:"PinkFrogi"},
		{src:"images/plant.png?1644201387232", id:"plant"},
		{src:"images/sadfrogi.png?1644201387232", id:"sadfrogi"},
		{src:"images/stopbutton.png?1644201387232", id:"stopbutton"},
		{src:"images/TimeoverH1png.png?1644201387232", id:"TimeoverH1png"},
		{src:"images/Viconpng.png?1644201387232", id:"Viconpng"},
		{src:"images/wave.png?1644201387232", id:"wave"},
		{src:"images/whiteline.png?1644201387232", id:"whiteline"},
		{src:"images/Xicon.png?1644201387232", id:"Xicon"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1644201387232", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1644201387232", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js?1644201387232", id:"an.CSS"},
		{src:"components/ui/src/combobox.js?1644201387232", id:"an.ComboBox"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6BF547886BE25247839B6B22E36D372B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;