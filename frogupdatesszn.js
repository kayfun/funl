(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
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
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.water = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#006600","#003300"],[0,1],-53.5,-42.4,0,-53.5,-42.4,79.5).s().p("AoqBLQhKgKgygLQgvgrEvgPQjJgZiSAyQgPgKAAgLQAAgrDmggQDmgfFEAAQFGAADlAfIAwAIQA4AuirAMQC+AJAEg0QBnAXAAAdQAAAsjmAfIgZAEQg5AHgbABQjaAUjkAAQlEAAjmggg");
	this.shape.setTransform(462.5,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#006600","#003300"],[0,1],-53.5,-42.4,0,-53.5,-42.4,79.5).s().p("AoqBLQhKgKgygLQgvgrEvgPQjJgZiSAyQgPgKAAgLQAAgrDmggQDmgfFEAAQFGAADlAfIAwAIQA4AuirAMQC+AJAEg0QBnAXAAAdQAAAsjmAfIgZAEQg5AHgbABQjaAUjkAAQlEAAjmggg");
	this.shape_1.setTransform(273.5,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#006600","#003300"],[0,1],-53.5,-42.4,0,-53.5,-42.4,79.5).s().p("AoqBLQhLgKgxgLQgvgrEvgPQjJgZiSAyQgPgKAAgLQAAgrDmggQDmgfFEAAQFFAADmAfIAwAIQA4AuisAMQC/AJAEg0QBnAXAAAdQAAAsjmAfIgZAEQg5AHgbABQjaAUjkAAQlEAAjmggg");
	this.shape_2.setTransform(83.5,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ADCCFF").s().p("Egq9AFjIAArFMBV7AAAIAALFgAWtjNQkwARAvArQAyALBKAKQDmAgFFAAQDkgBDagTQAbgBA6gIIAYgDQDmgfAAgsQAAgehmgXQgFA0i+gJQCsgMg5gvIgwgHQjlgflGAAQlFAAjmAfQjmAfAAAtQAAALAPAKQBigjB8AAQA8AABCAIgAm0jNQkwARAvArQAyALBKAKQDmAgFFAAQDjgBDagTQAbgBA6gIIAYgDQDmgfAAgsQAAgehmgXQgFA0i+gJQCsgMg5gvIgwgHQjlgflFAAQlFAAjmAfQjmAfAAAtQAAALAPAKQBigjB8AAQA8AABCAIgEgkggDNQkwARAvArQAyALBKAKQDmAgFFAAQDkgBDagTQAbgBA6gIIAYgDQDmgfAAgsQAAgehmgXQgFA0i+gJQCsgMg5gvIgwgHQjlgflGAAQlFAAjmAfQjmAfAAAtQAAALAPAKQBigjB8AAQA8AABCAIg");
	this.shape_3.setTransform(275,35.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.water, new cjs.Rectangle(0,0,550,71), null);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.659)").s().p("AgtBMQgUg3AJgmQAIgnAogOQAngOATAZQASAZgPAfQgQAdhLAvIAAAAIgGADg");
	this.shape.setTransform(-8.7,5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-2,12,15.2);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgyIoIAtABQAdAAAdgDIg1A1gACnIPQAygRAugaIgcBGgAkMHoQApAWAwAQIhCAZgAFZGrQATgQATgVQAXgXAWgZIAABVgAmoGrIAAhCIAcAdQATAUAVARgAIICoIAeBOIhMAdQAdgzARg4gAorDrIAYg8QAOArAXApgAIhABQAAgfgCgdIA8A7Ig8A8QACgcAAgfgApaAAIAugtQgCAXAAAXQAAAXACAWgAHckMIBOAgIggBPQgQg6geg1gAonj1IA+gXQgXAogPAtgAF/mEQgUgUgUgRIBVAAIAABXQgWgagXgYgAmompIBFAAIgpAlIgcAegACtoKIBIgcIAdBLQgxgeg0gRgAjsorIBGAcQgzAOguAZgAgFomQgZAAgXACIA1g2IA4A4QgfgEgeAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.3,-60.3,120.6,120.6);


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.SG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Start Game", "bold 26px 'Segoe Script'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 43;
	this.text.lineWidth = 180;
	this.text.parent = this;
	this.text.setTransform(95.6,7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AuukSIddAAIAAIlI9dAAg");
	this.shape.setTransform(94.3,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AuuETIAAolIddAAIAAIlg");
	this.shape_1.setTransform(94.3,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,190.6,57);


(lib.iinputrec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("APVGQIAFgBIjVAAIg+gCQAzgCgNgBQAeACA8ABIgQgCIA4ABIgNgBQgCAAgBAAQgBAAABAAQAAgBACAAQACAAADAAIAkACQAUAAAQgCQAMgBAeAAQgfADgVABIAFAAIgKAAQgTABANAAQAkgCBCABIgTAAIBHABQgJAAAegBQAigBgEgBIiKAAQAwgBAWgDIAEAAQAIgBgDgBQgFgCAAgBIg1ABIg6ABQgJABAPABIhXgBIAggCIgogBQAFADgNAAIgEAAQhRAAgugDIgIAAQAGABgcABIguACQABgBgUAAIgigBQgBAAgBABQgBAAgBAAQAAAAAAABQAAAAAAAAQADACAcACIAggCIAOgCIBIgCIgQACIAwAAQAVAAgCABIhFABIAYABIghAAQgNgBgaABQACAAABAAQABAAABAAQAAAAAAAAQAAAAgBABQA4AAgMACIg7gBQgtgBgUACIACgBQgqAAgvACIhLABIAAgBIghAAQAJgBAUABIAnAAIgEgBQAVABAWgBIAmgCQhqgBgIADIgXgBIgMAAQgNAAALgCIAkgBIAHABIBDgCIgUABQBTAAAVgCIjDgBQgpAGgKADQhfABgqgBIAEgBIgxAAQgKAAAIgBQACAAABAAQABgBAAAAQABAAgBAAQAAAAgCAAIg8ABQAKgBBFAAIgLAAIA0AAQAigBAHABQAAAAAAAAQABAAgBAAQAAAAgBABQgBAAgBAAQgGABAcAAQAkABAIgDIgWgBQgTAAAIgBIABAAIAFAAQAhgBADgCQACgCgUAAIghABQgbABAkABIh0ACIACAAIguAAIANAAIAIgBIg7ABQAEAAABAAQACAAgBAAQAAAAgDAAQgCAAgFAAIglgBIACAAQgMgCgwABIhQAAIAPgBIhFABIADAAQgYABgHgBIgSgCIglABIgqgCIACACIg0AAIgBACIA8AAIgUABQgFABgRAAQAVgBgUAAIgfgBIgYABIAGgBIguABIA1ABIg8ABIgjAAIgfAAQAOgBAEgCQAEgCA0ABIgMAAQANACA/gDIACgBIgWgBQgeADgigBIAGgDIgtAAQgJgBgcAAIgyAAIg/ABQgoAAAZACQgTgBgaABIguABIApABIhKADIgHgBQgBAAAAAAQAAAAAAAAQAAgBABAAQABAAABAAQiwAAgXACQg2gEhCACQALACgrgBQApgCgwABQgSABgpgBIhCAAIg4gCQBJABAZgBQAbAAgcABQA5ABAegBIgNgBIgXAAQAAgBAsgBQAjAAgZgCIg9ACQgeACgagCIAiAAQAYgBAOgBIhCABIABgBQgngBgZACIg8ACQATABgGACQgGABAKABQhFABAAgDQAngBABgBQAAgBAjgBQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAABAAQAAgBgZgBQgYABAIABQAGABgXAAIgEgBIgzABIAGgBIghABIgeAAIACAAIgDABIgLAAIgCguIgCAwIBPABIAVgCIARAAQgTAAgFACIgLABIg7AAIgYgCIAEiCIAAAWQABAiABg7IgBgYIAAAGIABgGQgCgfgBgiIACAKQAAABAAABQAAABABgBQAAAAAAgCQAAgCAAgDQADgVAAg1IAAg0QABANAAAZIAAAmIACACIAAABQAAAnABASIAAhFQABgHAAAdIAAgFQgBAVABAeIABA6IAAAEIgBgDIABA8IABA7IgBgNIABAdIADAAIgDgDIACAAIABACIAAgFIABABIABAAIAAAAIgEgEIgBAAIAAgBIADAAIAAgBIAAAAIACAAQAAgcABAcQgBhugBgxIgBAIIABgiIAAAgQACABgBg3IAAghIAAgEQACgKAAAPQABgMgCgaIABgMQACAcABBlIgBgIIAAA+IABAmQACgFAAgOIAAAzQgBAMgBgTIAAArIAegBIgIAAQAWgCAPACIgfABIAmgBIgNABIA9AAIAhgEIAxAAIgHAAIA2ABIAjgBIgpADQglACBQgBQAeAAAJgBIAWgCIACAAQAWAAAVgBQgbgBgMABQAGgCA5ABQgNABAZAAIAOAAQA9ACA3gDQAQABAcAAIA6AAIggAAQgNAAAXABQASAAgSABIgLgBQgoAAAMACIAoABIgOAAIA9ACIgHgBIDUAAQAHgCBQAAIBzgCIgPACQgEACAGAAQghACgaAAIgQgBQgLgBAMAAQgmAAAOABQAWABgJABQBNAABegEIABABIAlgBQgXgBADgBQADgBAbABIB6gBQAVAAALABIAPADIB7gDQBiABgrABIAxgDQAZgCAxACIgWABICEgBQBPgBAVABQgQACA4ABQBCACAHACIANgBIASAAQAQABAOgBQgNAAAEgCQAEgCghABQA3gEBQAAIgBABIg0AAQADABgNAAIgTABQAsAAgFACQgGABAyAAIAYgBIgEABIAPAAIASgBQATABgfABQgcABAMABIhBABQgjABAIABQAfABAdgCQAdgCAhABIAHAAQAXAAARgCQACABATAAIBlgFQgxABgogBIhFgBIAbAAQAlgBADgBIgBABQA1gBAzAAIgLAAIA5ABQAmABAXgBIgkAAQAsgBAwABIA+gDIAQABQAOAAgLABQAtABAvgDQAYABgbABQgnAAgCABQBnACA+gDIgTgBIAqAAIAJgBIAHAAIAAAAIACAAQAChDgBgrQABAQAAgUQAAgagBABQAAABgBAAQAAAAAAAAQAAAAAAgBQgBAAAAgBQABArgCAdIAAgoIgCgFQACACABgVQABgVgBgUIgCAVQAAADgCAEQgBgTABgXQABgYgBgWIABASIABgJIgBgYIgBgSIACASIADAUIAABCIACgoQAAAaABAFIABACQABgngBgTIgCgiQAAAjgBggIgBgaIgBgfIABAIIgBgtIgDgGQgCgDAAgtIgCgKIAAjBIABAIIgBhxIgRAAQhFAAAZgBIgPAAIAKgBIgLAAQABAAABgBQABAAAAAAQABAAAAAAQAAgBAAAAQAFgBAjAAQAKABgOAAQAVAAgCACIASgBIAAgOIhMACQABAAABAAQABAAAAgBQABAAAAAAQgBAAAAAAIgqgBIg6AAIAfAAIhHADQgOgBAYAAIAjgBIhKgBQgngBgNACQgKgEgkAAQANABgLABQgNAAALABIgoAAIABAAQgngBgdABIgpACIipAAQgHgDgkAAIgmACQgeAAgDABQAYABANgBIAYgBIAgACQhsABgagBIAJgBIgxgCQgcgCgqACIghABIADgBQgngCg8ACIAGgBIheACQgKgBAHgBIAQgBQg+AAhjAEIgngBQA4gBgMgCIgvABIATgCIANgBQgigBgCABIgFABIgEAAIgNgBIgVABQgKAAgCACIgjgCQgEAChHAAQgDAAAOABIAWAAQgDABgxAAQgDgBg8AAQg2AAAMgCIkNADIgigBQgQgBAPAAIhZABIhLABQARgBgCAAIhDAAIhRgBIALgBIgmABIgCAAQhMgBhyACIi9ACIApgBIANgCIgmAAIhEACIgHgBQgBAAAAAAQAAAAAAAAQABgBABAAQABAAACAAQgmgBg9ACQhCACgtAAIBwgEIgcgBIAxgCIgnAAIgTAAIAOgBIgsAAQAjgCC+gBIgKABIBFAAQANgBgqAAQACgBAYAAIAyABIA/ABQAuAAgJgCQgHgBArAAIAaACQBUgDBMABIAMABIA8AAQAigBAOABIC8gEQANAChWABIAOABIgyACQAtAAA5gCQgGABAcAAIAGgCIABAAIAIABIBJgBIgOgBIgUgBQAHABgkAAQARgBgkgBIBxAAIAJABIBmAAIgIABICBABIB6gFQAIgBA/ABQBEABAYgBIguACIAngBQATAAAFABQglgBAKABQACAAACABQACAAAAAAQABAAgBAAQgBAAgBABIBHgBQgTgBAIAAQAJgBgaAAQA/gDBQABQgBACAYAAIAOgBQAJAAgQABQgRAAAaAAIBaAAQA6AAAMgCQAQAAgeABQgdABAdABIgyABQgdAAgFABQARgBACABIAMABIAhgBIgHAAQA5gCCiABIBUgDQAxgCAsABQgIAAAZABQAZABgbABQAbABAUgBQAVAAABgBIgkgBQAegCAqACIgGAAQAkABAHgCQAIABBJAAIAigCQgKABAUAAIAcABIBTgDQgIABATAAIAXACQAmAAA8gCIAOAAIABAPQABArgBAZIgBgFIgBAJIABBCQADAsABAtQACgFgCg8IgBgQQABgJAAgVIgBgbQADAeABCMQADgvgBhzIgBAbIAAggIgBAfIgBg+IAAALQgCAMABgSQABgUgBgPIgBgYQAAAdgBgMIABgpIgSgBIhbgBQADABgfAAQgkAAgDABIAWAAIgvABQgWgBAQgBQAMAAgigBQgjAAgYABIgyACQAggDA+AAIgYgBIBdAAQgZABAWAAIAtAAIgHgBIAQgBIgxAAIA1gCQAjgCAmAAQgVABAPABIAXABIAigBIABBKIACgNQABAUgCAhQgBAeABAcQAAADABgKIgBA1IgDBLQACAJABAQQgCAJgBgYIABBAQABgbAAAUIABAgQAAATgBgnIgBAaQAAAQABAGIgDgcIgBg2IAAAFIgBgYQgBAYgCgJQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQABgrgCAPQgBgJAAARIgBAdIAGB4IAAgQQgCggABgeIACAnIADAXIgBgLQABgMAAAgQAAgCAAAAQAAgBAAAAQAAABAAABQAAABAAADQgBAJAAgEIABA8IgEg9QABAogCAwIABAIQgBBEgBgXIAAgNIAAgFIgBgCIABA2QgBgagBAIQgCARgBgEIABBAQABg6AABHIAABOIgWAAIABAAIhTAAIgvAEIAaABIgFABIgOAAIAKABQBlgBAOgBIgpAAIBAgBIAAhAIABgMIgBgnIABAOIABAhQABgDAAgWIAAgpIgCgNIABgSQABgPAAAWIACA/IABgSIAAA1IgBgMQABAtgCAJIgCAYIgUgCQgQgBgnABQglAChHAAIASgBQgFgBAFgBQgbAAgtACQgJgBABgBIAaAAQACgBgYAAQgZAAgCgBQgxAAg4ADQggACgrAAIgtAAgAFuF+IALAAIgXABQAaABATgBIAIgBQArABBDgCIBsgBIAEABIAxAAQgTgDgVgBIgKgBQgogBhOAAIAJAAQgbgBg8ABQg8ACglgCIBHgEIglABQAFgBg7AAIAYgCIAjABIAVgBIAeACIA+AAIgkgBQgbAAASgCIg8AAIAOgBIAMgCIgZAAQAngBgggBQhKAAgBABIgBAAIgcAAQgKABgZAAQAAABAZAAIAtgCQAGABgQAAQgEAAgCAAQgCAAgBAAQAAAAABABQABAAACAAQBMAAgVACIglAAQgBABgbABQgsgBgYACIgEABQgDABgYAAQgngDhyABIgdABQA4AAgTABIgtABIADgBIgKAAQAJgBgDAAIgrgBIAHgBQgaAAgMABIgOACQgZABAeABIAhABIgYABIhnAAIAKAAIAIgBQgBgCgsAAQACACggAAIglABIgTAAIgFAAIgFgBIAYAAQgCgBgYAAIgjAAIghABIAHABQADABgeAAQB8ACARgBIgIABIBPgBQAtgBANACIAFABQAFAAAAABIAmgCIgIABIBBAAIgBAAIBJgDIADgBIAFgBIAbAAIAeABIAPAAIg9ABQgIABAmACIgLAAIAJABQAogBgPgBIBsABIBxAAIAKABgAViF2IgvADIhCADIgEABQAKABAggBIgHgBICjABIgFAAIhXgEIgEgBQgKgBBXAAIABAAIAAgBIgBAAIgYAAIgmAAgAuOF2IAcABIgnACIgKAAQBGAAAGABIgFABQAWABAWgCIBKAAIgNABIBhAAIgHAAIBUgCQBRgCBJAAQgKgChIgBIAUgCIANABIAjgBIg5gCIhRADIAYABIhPABQAAABAXAAIAKAAQgPABASABQgoABhYgCIgEgCQgPAAgMABQgMABgTgBQAYAAgGgBQgHgBARAAIgJgBIgbgBQgQACgSgBQgTgBgOABQgHAAAGgBQAFgBgVAAQgnABgEADQAVABAVgCIAkgBgANWF3IgmAAIAZABIgJABQgBAAAAAAQAAAAABAAQAAABABAAQABAAABABIBYgCIgQAAIgNgBQgGgBAcgBQAIACgOAAIAeABIAtAAQABgBgGgBQgbACgDgCQgDgBgTAAQAVgBAqAAQgPAAAOACIAmABIBKgBIgCgBIgYgBQAggBAbABIgZABQAQABAcABIAXgBIgFAAIAagBIgVAAIAFgCIAjABIgagCIAaAAQAPAAgDgBIh/ABIAUABQgdAAgRgBQgVgBgfAAQhWAAgJACIgVgBIgpAAIg3ACQgfABALABIAhgBIAMAAIARABgA2tF4IABAAIAAAAIgDgDIgBAAIgBgCIAAAAIAAABIAAABIAAAAIAAADIAEAAgA2sF4IBbgDIAAAAQgEgBAKAAIASABIBIgCIgZgBIgeAAQgXABAEABIhGgBQAWACg0ABIgNgBIAAADgAWhF4IABgBIgBAAgATQF2IgFABIAhAAQgCAAgBgBQgCAAAAAAQAAAAAAAAQABAAABAAIgRgBIgIABgAWjF3IAJAAIABAAIAAgBIgBAAIgJAAgA2tF1IABAAIAAAAIgBAAIAAAAgA2zFvIADAAIAAgBIgDAAgAWgFrIACAAIAAAAIgCAAgAWgFqIAAAAIACAAIAAAAIgBAAIgBAAgAWoDeIAAAiIACAiQABAYABABIABgQIAAglQgBgBAAgGQgBAUgBgEQACgSgBgOIgCgiIAAgCIgBATgAWtAxIABAHIAAgVIgBAOgAWdgpIANBJIABj8QACgMAAAjIABAjIAAAoIgBgnQAAgegBAVIABCqQACgKgBgvQAAg2ABgVIAAAZIAAhjIAAAMIAAgbQgBgagCgDIAAAIIgBgQIABhgIgEAAIACAfQgBgCAAAIQgBANAAAWIgBgIIABAWIAAAcQAAgQgBANIgBAUIAAiDIgJAAQAAAUgBgFQgBgFAAANIADATIgBA0QABAkACgCQACgDABAtQgBgJgBAVIgCA0QgChDABgfQgBASAAgfQAAgmgBALQABAfgBA1IAAACIABAiIAAAzQABAYgCgLgAWnlUIAAgOIgBAAIABAOgAWollIAEAAIAAAAIAAAAIAAAAIgFgEgAWdloIAAADIAKAAIAAgFIgJgJIgBAAgAWnluIAAACIAFAFIAAgKIgBgCIgCAAIgCAAIgHAAIAHAHIAAgCIAAAAgAIyGNQALgBAWABQgCABAzAAIhmABIAUgCgAAMGMQAGgBgeABIAIACQiegDgxABIANgCQABgCgNAAIBeAAQAFAAgaABIgyABQAIACAogBQAlgBACABQApABAegCQAagBAjABIALgBIAFAAIgLABQgHABAPAAIAWAAIgoADQgXAAAIgCgAMZGKQAAgBAMAAQgEABASABIgOAAIgMgBgAoNGJIAYgBIAcgBQAEABgWABQgWABAEABgApzGGICKgDIAZACQgfgBguACIg2AAIggAAgAExF5QADgBgLAAIAdAAIAEgBIgJACIgDAAIAVAAIgcABQgIAAACgBgADYF5IADAAQAFgCg9AAQAJgBBRAAIgGAAQAlAAADABIAKABIgeABQAAAAgBAAQAAAAABAAQAAAAABAAQACAAACAAIg4AAgA20F1IgCgCIADAAIAAACIAAAAgASeF0IAAAAIAAAAgAIHFuQAcgBgSgBQgUgCAOgBQgDABAMABIAgABQgXAAAHABQAEABgLAAIgWAAgALXFrIgKAAQAXgCAtABQADABgqABIhBABgA3GgnQAAgQABALQAAANABgLQAAArABgJIgBgjQABgCAAAHQAAABAAAAQABAAAAAAQAAAAAAgBQAAgBAAgCIAAAmQABAWABACQAAgpABAWIABAjIAAAQIgBghQgBgJAAAZIgBAnIAAg1IgBgNQgBAhABBPQgDg9gBhjgA2wAAQAAgYgCAFIABgxIACAyIABA3QgBgGgBgfgA2+gZIgBggIAAAVQAAAYgCgkIgBhMQgCA1gBgWQgBhNADgSIADA4IgBghIADgCIAAgIIABAYIgBBNIACBDIgBABIgBgTgA3AjYQgCgIAAgrIABANQABgXgBghIAAADIAAhDQABAGAAAeQAAAeABAFIAAglIABA3QAAgJgBAJIAAAcIACAIIAAAfQAAgCAAAAQAAgBAAABQAAAAgBABQAAACAAACIAAAVIAAARQAAgfgCgIgAJlleQgmgBADgCIAXgBIAigBQAgADBsgDIAOgBIAcgBQgDABgdABQgVABASABQBIABAQgDQgqABAGgDQAEgCgfAAIAwgBQAUAAgeACQgZABA5AAIAKgDIAvAAQghABgNACQB0AAACABICGgFQBSgEA5gBQAdAAAEABQADABgQABIArgBIABAAIAPACIAFAAIiqALQgVABg8gBIhJAAQALgBgOAAQgOgBgWAAIAKABQhygCgoACIASgBIhaACIADgBQgOgBgZABIgmAAIASAAIghgBQgxACAQAAIgUAAQgBAAAAAAQgBABABAAQAAAAABAAQABAAACAAIggAAgAHPlgIgFgEQgBgCAQgBQAxgCB2AAIg4AEQAEABgEAAIgUABQgCgBgCAAQgBAAAAAAQAAAAAAAAQABAAACAAIAMgBIgmAAQgRABAEABQAgABgOAAQgRABAPAAQgCABghAAIgpAAgAL5lqIhDAAQAIgCA6ABQBQAAAWgBQAXABATAAQgDgDB8ABQAJAAgQABQgPAAAJAAIAogBQAWAAAWABIgHAAQA6gBgiADIhGAAIhLACQADgBgNAAIgLgBIiQAAIgBAAIgTABQgGACgQAAgANmmGIABgBQgeACgfgBIAqgCQg3gBhRACIABAAIhqABIABgBQgTABgOAAQgUgBgdAAIAJAAIgWAAIAGgCIg8ABQggACgdAAQABgBgIgBQgHgBACAAQAYABAcgBQAFgBgcAAQgVgBAQAAIhAgCIHBAAIADAAIBwAAQgEgBA2AAQgQAAADABIAnAAQBvABgTgDIBJABIAEABIgIABIgSABQgFAAAQABQhWAAABABIAjABIh5ACIA7gCQAjgCgfgBIgmADQgKgBAKAAIAQgBIgbgBIghABQAkAAgaACIhpACIALAAgABdmHIgIgBQBMABAcgDQgPgBg0AAIhNABIAdABIgeACIgHgBIAAAAIiBABQARgBgRgBQgOgBAWgBIE/gBIAbACIApABIgPgCIAwgBIgEABIAogBQALABgqABIgRABIAXABIkGACQALgBgDAAgAncmHIAQAAQAHABAQgBQgQgBADAAQACgCAZAAIgEADIgcABIgVgBgAn8mIIgmABIAEgCIBEAAIgrACgAjHmJIAYABIgQABQgFAAgDgCgASsmLQAFgBAAgBIBEAAIgRABQgLAAAKABgASdmOIAUABIgmAAg");
	this.shape.setTransform(146.3,25.3,1,0.674);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AU3F4IAvgDIA/AAIAAAAIAAABIAAAAQhYAAAKABIAFABgAOwF4IgdgBQAOAAgJgCQgbABAFABIANABIhLAAIAJgBIgZgBIAmAAQgKgBgTAAIggABQgMAAAggBIA2gCIAqAAIAUAAQAJgCBXAAQAfAAAUACQASAAAcAAIgUgBIB/AAQAEABgQAAIgagBIAaACIgjAAIAAAAIAAAAIgFABIAVAAIgaABIAGAAIgYABQgcAAgQgCIAaAAQgbgBghABIAYAAIACABIhKABIgmgBQgOgCAQAAQgqAAgWABQATAAADABQADACAbgCQAGABgBABgAFFF4IAJgCIgEABIgcAAIgKgBQgEgBglAAIAGAAQhRAAgJABQA9ABgFABIhbAAIgegBIgaAAIgGABIiGAAIAYgBIghgBQgegBAZgBIAOgBQAMgCAaABIgHAAIArABQAEABgKAAIALAAIgEABIAuAAQASgCg4ABIAegBQBxgCAoADQAXAAADAAIAEgCQAYgBAtABQAagBABgCIAmAAQAUgChLAAQgDAAgBAAQgBAAAAAAQABAAACAAQACgBAEAAQAQAAgGgBIgtACQgZABABgCQAYABAKgCIAcAAIACAAQAAgBBKAAQAhACgoABIAZgBIgLACIgOABIA8AAQgTACAbABIAkABIg+gBIgegBIgVAAIgjgBIgXADQA7AAgGABIAlgBIhGADQAkACA9gCQA7gBAbABIgJAAQBOAAAoABIALABgAEQF4IAegBQALABgDAAgAkFF4IAlgBQAgAAgBgCQArABABABIgIABgAlgF4IgIgBIAigBIAjAAQAYAAACABIgYAAIAFABgAuVF4IAogCIgdgBIBBgCIgkABQgVABgVAAQAEgDAogCQAVAAgGABQgGABAIAAQANgBATABQATABAPgBIAbAAIAJACQgRAAAHABQAGAAgYAAQAUACAMgCQALgBAPABIAEABQBZACAngBQgSgBAPgBIgKAAQgWAAgBgBIBQgBIgZAAIBRgEIA6ACIgkACIgNgBIgUABQBIACAKABQhIAAhSACgA2oF3IgBAAIgEAAIAAgCIAAgBIAAgBIAAAAIAAAAIACABIAAAAIADADIAAAAgA2yF3IAAgEIAAgGIAAABIABAAIAEAEIAAABIAAAAIgBgBIAAAEIgCgBIABAAIAAgBIAAgBIgDAAIACACIgCAAIAEACgA2oF1IAOAAQAzgBgWgBIBGAAQgDgBAWAAIAegBIAZABIhIACIgSAAQgKgBAEABIAAABIhbACIAAgCgAWmF2IABAAIgBABgATUF1IAZAAQgBAAgBAAQAAABAAAAQABAAABAAQABAAACAAIghAAIAFgBgAWwF2IgJAAIABgBIAIAAIABAAIAAABgA2oF1IAAgBIAAAAIAAABgAKFF1QgIgBAkgBIBAgCQgMgBAcgBQAggBgUgBIgSABIgOAAIADgBIgYABQgyAAAGgBQAGgBgtgBIATAAQANgBgDgBIA0ABIABgCQhQAAg3AEQAhAAgDABQgFACANAAQgOABgQgBIgSAAIgMACQgIgDhBgCQg4gBAPgCQgVgBhPABIiEABIAXgBQgygCgZACIgxADQArgBhigBIh7ADIgOgCQgMgCgVAAIh5ABQgcgBgDACQgDABAXAAIglABIgBgBQheAEhNAAQAJAAgVgCQgPAAAmgBQgLABAKAAIAQABQAaAAAigCQgHAAAEgCIAPgBIhzABQhQAAgGACIjVAAIAHABIg9gCIAPAAIgpgBQgMgCAoABIAMAAQASgBgTAAQgXgBANAAIAgAAIg6AAQgcAAgQgBQg3ADg8gBIgPAAQgYgBANgBQg5AAgHABQAMgBAbABQgUABgXABIgCgBIgVACQgKACgegBQhPABAkgCIApgDIgjABIg2AAIAHgBIgwABIgiADIg9AAIANgBIgmABIAfgBQgPgCgVACIAHAAIgeABIAAgrQABAUACgNIgBgzQAAAPgCAEIgBgmIAAg+IABAIQgBhlgCgbIAAALQABAagBAMQAAgPgBALIgBADIABAhQAAA4gBgCIgBggIAAAiIAAgIQABAxABBuQgBgcAAAcIgBABIgBAAIAAAAIgDAAIAAgGIAArZIAAgFIBVAAIAbABIhwAEQAtAABDgCQA8gCAnABQgCABgCAAQgBAAAAAAQgBAAAAAAQABAAAAAAIAIABIBDgCIAnAAIgOACIgpABIC+gCQBxgBBNAAIABABIAmgBIgLAAIBRABIBDAAQACABgRAAIBLgBIBZgBQgPABAQAAIAiABIEOgCQgMACA1gBQA8AAADABQAyAAACgBIgVAAQgPAAADgBQBHAAAEgBIAkABQABgBAKgBIAiAAIAFAAIAbAAIgTACIAvgBQAMACg4ABIAnABQBjgEA+ABIgQAAQgGABAJABIBegCIgGABQA8gBAnABIgDABIAigBQApgBAcABIAyACIgJABQAZACBsgBIgggDIgXABQgNABgZgBQADgBAeAAIAmgCQAlAAAGADICpAAIApgCQAegBAmABIgBAAIAoAAQgLAAANgBQAMAAgOgBQAkgBAKAEQANgBAnAAIBLABIgkABQgYAAAOACIBHgEIgfAAIA6AAIAqABQABABAAAAQAAAAAAAAQgBAAgBAAQgBAAgBAAIBMgBIAAAOIgSAAQADgBgVAAQANgBgKgBQgjAAgFACQABAAgBAAQAAAAAAABQgBAAgBAAQAAAAgBAAIAKABIgKAAIAPAAQgZACBFgBIARAAIABByIgBgIIAADAIACAKQAAAtADAEIADAFIAAAtIgBgHIACAeIAAAbQABAfAAgjIACAiQABATgBAoIgBgCQgBgGAAgaIgBApIgBhDIgCgUIgDgSIABASIABAYIAAAKIgCgSQACAWgCAXQgBAXABATQADgDAAgDIABgWQABAUgBAWQgBAUgBgCIABAGIAAAnQACgdAAgrQAAABAAABQAAAAAAAAQAAABABgBQAAAAAAgBQABgBAAAbQAAATgBgQQABArgCBEIgBAAIgBAAIgGAAIgKABIgqAAIATABQg+AChngBQACgCAnAAQAbAAgYgBQgvADgsgBQAKgBgOgBIgQgBIg+ADQgwgBgsABIAkAAQgXABgmAAIg5gBIAMAAQgzgBg2ACIABgCQgDABglABIgaABIBEAAQApABAwgBIhlAFQgTAAgCgBQgQACgYABIgGgBQgiAAgdACIgtABIgPAAgAIWFrQARACgcAAQAlABgHgCQgIgBAXAAIgggBQgMgBAEAAQgPAAAVACgALRFqIALAAIgvACIBCgBQApgBgDgBIgbAAQgZAAgQABgA2qAkIgBg3IgBgxIgBAwQABgFABAZQAAAeABAGIAAAAgAKJleQgCgBgBAAQAAAAgBAAQAAAAAAAAQAAAAABgBIAVABQgQgBAwgCIAiABIgTAAIAmAAQAagBANABIgDABIBagCIgSABQApgCBxACIgKgBQAWAAAPABQAOAAgMABIBJAAQA8ABAVgBICqgLIgFAAIgPgCIAAAAIgsABQAQgBgDAAQgEgCgdAAQg5ABhSAEIiFAFQgDgBh0AAQAOgCAhgBIgwAAIgKAEQg4gBAZgBQAegBgVgBIgwACQAfAAgEACQgGACAqgBQgQADhIgBQgRgBAUgBQAdAAADgBIgcABIgNAAQhtADgggDIgiABIgXABQgDACAnABIAfABIAAAAgAHdloQgQACACACIAEADQBJABADgCQgPAAASgBQANAAgfgBQgEAAAQgBIAnAAIgNABQgCAAAAAAQgBAAAAAAQAAAAACAAQABAAACAAIAUgBQAEAAgEgBIA5gEIgtAAQhUAAgnACgAL9loQAQAAAHgCIASgBIABAAICQAAIALABQANAAgDABIBLgCIBGAAQAigDg5ABIAGAAQgWgBgWABIgoAAQgJAAAQAAQAPgBgIAAQh9gBADADQgTABgWgCQgXAChQgBQg6AAgHACIBCgBgA2uFuIAAgBIACAAIAAABgAWlFrIAAgBIABAAIAAABgAWlFqIAAAAIABAAIAAAAgAWvEhIgCghIAAgjQAAgYABAHIABAiQABAOgBASQAAAEABgUQAAAGABABIAAAlIgBARQgBgCAAgYgAWxAwIABgOIAAAWgAWhgpIgBgiQACAMgBgYIAAg0IgBgiIAAgCQABg1gBgfQABgLAAAmQAAAfACgSQgBAgACBCIABg0QABgUABAIQgBgsgBACQgDADgBglIABg0IgDgSQAAgOABAGQABAEAAgUIAJAAIAACDIACgUQAAgNABAQIAAgcIgBgWIABAIQgBgWABgNQABgIAAADIgCggIAEAAIgBBhIABAPIAAgHQACACABAbIAABZQgBAUAAA2QABAwgCAKIgBirQABgVAAAfIABAmIAAgoIgBgiQAAgkgCAMIgBD8gAWrljIAAAAIABAOIgBgOgAWwllIAAAAIAAAAgAWhlpIAAgLIABAAIAJAJIAAAGIgKAAIAAgEgAWsllIAAgFIAEAFgAWsltIAAgCIgBAAIAAABIAAABIgGgHIAGAAIADAAIACAAIAAACIAAAKg");
	this.shape_1.setTransform(145.9,25.3,1,0.674);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.iinputrec, new cjs.Rectangle(-1.6,-1.6,295.9,54), null);


(lib.eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","#393939","#FFFFFF"],[0,0.612,1],2.1,-1.9,0,2.1,-1.9,24.4).s().p("Ah2B1QgVgVgMgaQgPggAAgmQABhEAvgxQAygxBEAAQBGAAAwAxQAxAxgBBEQAAAmgOAgQgMAagWAVQgwAyhGAAQhEAAgygyg");
	this.shape.setTransform(41.5,25.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#000000","#FFFFFF"],[0,1],-17.7,65.3,0,-17.7,65.3,89).s().p("AklElQh5h6AAirQAAirB5h6QB6h5CrAAQCsAAB5B5QB6B6AACrQAACrh6B6Qh5B6isAAQirAAh6h6g");
	this.shape_1.setTransform(41.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyes, new cjs.Rectangle(0,0,83,83), null);


(lib.eat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AiSBsIAAjcIANgFIEZB3IkNB0g");
	this.shape.setTransform(43.4,13.4,0.641,0.641);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmUCHIAAkNIMpAAIAAENg");
	this.shape_1.setTransform(40.5,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eat, new cjs.Rectangle(0,0,81,27), null);


(lib.eyes_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#000000","#393939","#FFFFFF"],[0,0.612,1],2.1,-1.9,0,2.1,-1.9,24.4).s().p("Ah2B1QgVgVgMgaQgPggAAgmQABhEAvgxQAygxBEAAQBGAAAwAxQAxAxgBBEQAAAmgOAgQgMAagWAVQgwAyhGAAQhEAAgygyg");
	this.shape_2.setTransform(41.5,25.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},19).wait(3).to({_off:false},0).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#000000","#FFFFFF"],[0,1],-17.7,65.3,0,-17.7,65.3,89).s().p("AklElQh5h6AAirQAAirB5h6QB6h5CrAAQCsAAB5B5QB6B6AACrQAACrh6B6Qh5B6isAAQirAAh6h6g");
	this.shape_3.setTransform(41.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,83);


(lib.clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#CCCCCC"],[0,0.698],93.1,-22.7,93.1,63.8).s().p("Ag8EyQgZgLgVgLQhiAph9AAQijAAh1hHQhzhGAAhjQAAhiBzhHQBshBCUgEQAWhJBIg4QBqhSCVAAQCUAABqBSQBpBSAAB0QAAAbgGAaQBcAHBNAXIAEAAIABABQAjAKAgAOQCHA6AABTQAABTiHA6QiHA7i+AAQi/AAiGg7g");
	this.shape.setTransform(72.5,36.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145,73);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// viewfinder
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.rotsun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-28.1,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.4,-41.5,120.6,120.6);


(lib.insect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lwing
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(5.2,-13.7,0.998,0.998,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-13.4,regY:15.2,scaleX:1,scaleY:1,rotation:23.5,x:-10.4,y:-1},1).to({regY:15.3,rotation:75.9,y:-1.1},1).to({regX:-13.3,regY:15.1,scaleX:1,scaleY:1,rotation:24.7,x:-10.5},1).to({regY:15.2,rotation:9.7,x:-10.4,y:-1},1).wait(1));

	// legs
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAXAYQAHgngWgjABIABQAKgDAAgBQAAgBAAgBQACgOgGgUAAoAMQADgFABgFQABAAAAgBQAHgWgKgeAACAYQgHgxgkgOAg1A0QAQg/gtgF");
	this.shape.setTransform(-0.4,-3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1.setTransform(-17.7,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(5));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgVAVQgIgJgBgMQABgJAFgIIADgDQAKgJALAAQAMAAAJAJIAEADQAFAIAAAJQABAMgKAJQgJAJgMAAQgLAAgKgJg");
	this.shape_2.setTransform(-16.5,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(5));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("ABrgJQAAAAAAAAQgDABgCACQgCABgDABQgHAEgKAEQgSAKgaANQg6AfgngdQgUAngjgFQghgGAAgSQAAgaASgRQASgSAZAAQAQAAANAHQAIgKANgJQApgcA7AAQAPAAAPABQAXADAWAGQAaAMgaAQQgGADgKAFQgCABgCAAQAAABAAAAQgDABgDAC");
	this.shape_3.setTransform(-3.9,-2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003300").s().p("Ah0A/QghgGAAgSQAAgaASgRQASgSAZAAQAQAAANAHQAIgKANgJQApgcA7AAQAPAAAPABQAXADAWAGQAaAMgaAQIgQAIIgEABIAAABIgGADIgEAAIAAACIAAAAIgFADIgFACIgRAIIgsAXQg6AfgngdQgRAigeAAIgIAAg");
	this.shape_4.setTransform(-3.9,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(5));

	// rwing
	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.4,-1,0.998,0.998,9.7,0,0,-13.3,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},1).to({regX:-13.4,regY:15.3,scaleX:1,scaleY:1,rotation:75.9,y:-1.1},1).to({regX:-13.3,regY:15.2,scaleX:1,scaleY:1,rotation:9.7,y:-1},1).to({rotation:9.7},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-17,32,22.2);


(lib.frog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_68 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(68).call(this.frame_68).wait(32));

	// frogdb
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACDgyQgCgYgFgaAiCgGQAXBbBiAQ");
	this.shape.setTransform(-49.9,-63.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Ahzg5QApC2C9ho");
	this.shape_1.setTransform(-48.1,-65.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Ahxg5QAoCzC7hj");
	this.shape_2.setTransform(-48.3,-65.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("Ahug4QAmCvC3hf");
	this.shape_3.setTransform(-48.6,-65.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Ahsg4QAmCsCzha");
	this.shape_4.setTransform(-48.8,-65.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("Ahqg3QAlCoCwhV");
	this.shape_5.setTransform(-49.1,-65.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("Ahog3QAkClCthR");
	this.shape_6.setTransform(-49.3,-65.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("Ahmg2QAkChCphM");
	this.shape_7.setTransform(-49.5,-65.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("Ahkg2QAjCeCmhI");
	this.shape_8.setTransform(-49.8,-65.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("Ahig1QAjCaCihD");
	this.shape_9.setTransform(-50,-65.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("Ahgg1QAiCXCfg+");
	this.shape_10.setTransform(-50.3,-65.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("Aheg0QAiCTCbg6");
	this.shape_11.setTransform(-50.5,-65.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("Ahcg0QAhCQCYg1");
	this.shape_12.setTransform(-50.7,-65.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AhZg0QAfCNCUgx");
	this.shape_13.setTransform(-51,-65.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AhYgzQAgCJCRgs");
	this.shape_14.setTransform(-51.2,-65.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AhVgzQAeCGCNgo");
	this.shape_15.setTransform(-51.5,-65.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AhTgzQAeCDCJgk");
	this.shape_16.setTransform(-51.7,-65.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AhRgzQAdB/CGge");
	this.shape_17.setTransform(-52.2,-64.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AhPgyQAdB6CBgZ");
	this.shape_18.setTransform(-52.8,-64);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AhMgyQAbB2B+gT");
	this.shape_19.setTransform(-53.3,-63.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AhKgyQAbByB5gO");
	this.shape_20.setTransform(-53.8,-62.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AhHgzQAaBvB1gJ");
	this.shape_21.setTransform(-54.4,-62.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AhFgzQAZBrBygE");
	this.shape_22.setTransform(-54.9,-61.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AhDgzQAZBmBuAB");
	this.shape_23.setTransform(-55.4,-61);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AhAg0QAYBjBpAG");
	this.shape_24.setTransform(-55.9,-60.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("Ag+g0QAXBeBmAM");
	this.shape_25.setTransform(-56.5,-59.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("Ag7g1QAWBaBhAR");
	this.shape_26.setTransform(-57,-59.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},32).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape}]},12).wait(31));

	// Layer 26
	this.instance = new lib.eyes_1();
	this.instance.parent = this;
	this.instance.setTransform(-49.1,-66.1,0.305,0.305,-60,0,0,41.3,41.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({x:-46.4,y:-71.7},0).to({regY:41.8,scaleX:0.3,scaleY:0.3,x:-46.6,y:-72.6},15).to({regY:41.9,scaleX:0.31,scaleY:0.31,x:-49.1,y:-66.1},10).wait(43));

	// Layer 27 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AonIkQjjjiAAlCQAAlADjjmQDmjjFBAAQFCAADiDjQDmDmABFAQgBFCjmDiQjiDmlCAAQlBAAjmjmg");
	mask.setTransform(-9.4,51.7);

	// Armature_11 copy
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgFEvIjXgMIgzAIQgnAFAXgaQATgQAyAEQAtAOBIgZQA+gTAdgNQBfi1gEgRIgMgrQgXgMg+i2QgDhLAxgPIBoAGQCiEMAAAXQAAAXgDAVQi7D3gxAKQgkAHgaAAg");
	this.shape_27.setTransform(-27.7,-2.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AjcEjIgzAHQgnAGAXgaQATgQAyAEQAtAOBIgaQA+gSAdgNQBfi2gEgQIgMgrQgXgMg+i2QgDhLAxgPIBoAGQCiENAAAVQAAAYgDAVQi7D2gxALQgkAGgaABg");
	this.shape_28.setTransform(-27.7,-2.7);

	var maskedShapeInstanceList = [this.shape_27,this.shape_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27}]}).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).wait(1));

	// Armature_15
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1,3,true).p("AD0hPQgCgOgBABQgBABgFAUIgDAMQgKAigMAYQgFAIgLARQgMASgDADIgyA6QgyAzg5AbQheAth3gLIhLgNQgigJgKgHQgdgVgUgsQgMiDA1hJQA0hJCBgjQAcgHAegFQA/gLA8gCQBFgBBBAMIALACQBZARBUAr");
	this.shape_29.setTransform(65,-1.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("Ai/DXIhLgNQgigJgKgHQgdgVgUgsQgMiDA1hJQA0hJCBgjQAcgHAegFQA/gLA8gCQBFgBBBAMIALACQBZARBUArQhbgggbBgQgCgOgBABQgBABgFAUIgDAMQgKAigMAYIgQAZIgPAVIgyA6QgyAzg5AbQhLAkhcAAQgXAAgXgCg");
	this.shape_30.setTransform(65,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29}]}).wait(100));

	// Armature_17 copy
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1,3,true).p("AHTjKQAKALABAXQACAfgRA1IgFAPQgCAEgDAHQgFALgIARQgoBHhMA0QhMA0hBAhIgVAJIgeAMQgsANgsAGQAAAAAAAAQgyAAg8ABIi0ACIgSgBQhegDhtgCIgFgHQgOgUAXgJQBCgFA8AAIBCAAIAYABIAYACIBVAEQBhABBDgWIAAgBIAYgIIAVgJIAngVIAegYQAPgKAUgVQADgEAFgFQAKgLAXgSQAQgPAQgTQAcgkAfg6QAPgVAJgXIAIgUQAthXBTAxg");
	this.shape_31.setTransform(54.8,4.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AkIDcQhegDhtgCIgFgHQgOgUAXgJQBCgFA8AAIBCAAIAYABIAYACIBVAEQBhABBDgWIAAgBIAYgIIAVgJIAngVIAegYQAPgKAUgVIAIgJQAKgLAXgSQAQgPAQgTQAcgkAfg6QAPgVAJgXIAIgUQAthXBTAxQAKALABAXQACAfgRA1IgFAPIgFALIgNAcQgoBHhMA0QhMA0hBAhIgVAJIgeAMQgsANgsAGIAAAAIhuABIi0ACg");
	this.shape_32.setTransform(54.8,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31}]}).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).wait(1));

	// Layer 32
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AsUhIQMlOtMEq9QhkifgZgjQhEhdhRg3Qi7h+nAgUQiRgGg/gyQgfgagSgNQgggVhegfApymbQBxAmAwBi");
	this.shape_33.setTransform(26.2,-22.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AsUhIQBwgJAagvQCRgMAqh+IgCgJIgmjAQBeAfAgAVQASANAeAaQBAAyCRAGQHAAUC7B+QBRA3BEBdQAZAjBkCfQlKEslPAAQnCAAnOocg");
	this.shape_34.setTransform(26.2,-22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33}]}).wait(100));

	// Armature_11
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgFEvIjXgMIgzAIQgnAFAXgaQATgQAyAEQAtAOBIgZQA+gTAdgNQBfi1gEgRIgMgrQgXgMg+i2QgDhLAxgPIBoAGQCiEMABAXQAAAXgDAVQi8D3gxAKQgkAHgaAAg");
	this.shape_35.setTransform(-34,-2.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("AjcEjIgzAHQgnAGAXgaQATgQAyAEQAtAOBIgaQA+gSAdgNQBfi2gEgQIgMgrQgXgMg+i2QgDhLAxgPIBoAGQCiENABAVQAAAYgDAVQi8D2gxALQgkAGgaABg");
	this.shape_36.setTransform(-34,-2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).wait(1));

	// Armature_17
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1,3,true).p("AHhi8QAKAKAAAYQAAAegTA1IgGAPQgDAEgCAGIgPAcQgrBFhVAvQhQAthFAZIgWAHIggAJQgsAIgrACQAAAAAAAAQgwACg7ABIi0AHIgRAAIjLAGIgFgHQgPgTAXgKQBAgJA9gEIBBgDIAYAAIAZABIBVACQBgAABCgZIAAAAIAdgIIAWgHIApgRIAhgVQAPgIAWgTIAKgIQALgJAYgRQASgNARgRQAfgiAig0QAPgVALgWIAIgUQAyhVBQA2g");
	this.shape_37.setTransform(49.6,3.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AnkDLQgPgTAXgKQBAgJA9gEIBBgDIAYAAIAZABIBVACQBgAABCgZIAAAAIAdgIIAWgHIApgRIAhgVQAPgIAWgTIAKgIQALgJAYgRQASgNARgRQAfgiAig0QAPgVALgWIAIgUQAyhVBQA2QAKAKAAAYQAAAegTA1IgGAPIgFAKIgPAcQgrBFhVAvQhQAthFAZIgWAHIggAJQgsAIgrACIAAAAIhrADIi0AHIgRAAIjLAGg");
	this.shape_38.setTransform(49.6,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37}]}).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).wait(1));

	// jaws
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("ABiEiQADABABABQgMAAABADIixiyQgUgEgsgQQgtgQgKgEQgNgEgMgGIgkgTQgIgFgdgMQgLgEADgHQABgCCaAkQCoAjBAgGQAWgCgSgHIgXgGQhKgMhPgMQifgXgXABQgagMgKgFQgYgNgFgPQgSg1A8g2QBvgoAxgKIAKgDQAigMAdgsIASgfQA7gfAmAJQAmAKASAGQAXAXAbASICqBEIAUAOQADACACAC");
	this.shape_39.setTransform(-52.9,-50.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("AhZB1QgUgEgsgQIg3gUQgNgEgMgGIgkgTQgIgFgdgMQgLgEADgHQABgCCaAkQCoAjBAgGQAWgCgSgHIgXgGIiZgYQifgXgXABQgagMgKgFQgYgNgFgPQgSg1A8g2QBvgoAxgKIAKgDQAigMAdgsIASgfQA7gfAmAJQAmAKASAGQAXAXAbASICqBEIAUAOIAFAEQAFAjAABAIABAgIgGAyIgDANQgPBBgpAtQhGBYhqApIgPAGIAEACQgMAAABADg");
	this.shape_40.setTransform(-52.6,-50.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,1,1).p("AgEEkQACABABABQgLgDABAEIh/jaQgSgJgmgbQgngbgJgGQgLgIgKgHIgfgdQgGgGgYgTQgKgHAEgGQACgCCLBLQCaBMA/AMQAWADgQgLIgUgMQhFgfhJggQiUg/gWgFQgWgSgIgIQgUgTgBgQQgDg3BIgmQB0gJAzADIAKgBQAkgCAngjIAagaQBAgOAjATQAiATAQALQAQAcAWAYICTBuIAPASQACADACAC");
	this.shape_41.setTransform(-50.5,-55.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#999999").s().p("AiKBNQgSgJgmgbIgwghIgVgPIgfgdQgGgGgYgTQgKgHAEgGQACgCCLBLQCaBMA/AMQAWADgQgLIgUgMIiOg/QiUg/gWgFQgWgSgIgIQgUgTgBgQQgDg3BIgmQB0gJAzADIAKgBQAkgCAngjIAagaQBAgOAjATQAiATAQALQAQAcAWAYICTBuIAPASIAEAFQgEAkgRA9IgHAfIgZA7QggA7gzAhQhaBDhxAMIgQACIADACQgLgDABAEg");
	this.shape_42.setTransform(-50.5,-55.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("Alah9QgDg2BHgmQB2gJAxACQAVgBAMgEQAFgCAFgCQAUgIAVgTQANgMANgNQAZgHAWgBQAeAAAVAKQAhASARALQAFAIAGAIQAKAOALAMQAEAEADAEICQBuIAQASQADAbgFAgQgDAMgCANQgBADgBADQgBAEgBAEQgDAQgEAPQgLAegNAeQgBABgBACQgIAQgKAOQgVAdgbAWQgGAFgGAEQgyAng6AVQgrAQgwAGQgIABgIABQACACABAAQgLgCAAAEQgdgtgfgtIgJgPQgCgCgBgCQgFgHgDgFIgig7QgBgBgBgCIgMgWQgCgBgCgBQgTgJgjgWQgTgNgNgIQgLgHgFgDQgLgHgKgIQgQgMgPgOQgEgDgJgIQgGgEgGgFQgBgBgCgCQgBgBgCgBQgKgHAFgGQAAAAAJAEQAVAJBLAkQARAHATAJQA4AZAsARQApAPAfAIQAIACAHACQAHACAGACQAFABAEAAQAUADgPgLQgKgFgLgGQhEgfhIggQhsgtgngOQgPgGgGgCQgNgKgIgHQgFgFgEgDQgTgUgCgQg");
	this.shape_43.setTransform(-50.8,-55.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("Ag7DMIgJgPIgDgEIgIgMIgig7IgCgDIgMgWIgEgCQgTgJgjgWIgggVIgQgKQgLgHgKgIIgfgaIgNgLIgMgJIgDgDIgDgCQgKgHAFgGIAJAEIBgAtIAkAQQA4AZAsARQApAPAfAIIAPAEIANAEIAJABQAUADgPgLIgVgLIiMg/QhsgtgngOIgVgIIgVgRIgJgIQgTgUgCgQQgDg2BHgmQB2gJAxACQAVgBAMgEIAKgEQAUgIAVgTIAagZQAZgHAWgBQAeAAAVAKQAhASARALIALAQQAKAOALAMIAHAIICQBuIAQASQADAbgFAgIgFAZIgCAGIgCAIIgHAfIgYA8IgCADQgIAQgKAOQgVAdgbAWIgMAJQgyAng6AVQgrAQgwAGIgQACIADACQgLgCAAAEIg8hag");
	this.shape_44.setTransform(-50.8,-55.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,1).p("AlYh8QgEg2BHglQB1gKAwACQAVgBAMgEQAFgBAFgCQAUgIAVgSQANgMANgMQAYgIAVgCQAegBAVAKQAhAQASALQAFAIAGAIQAKANANAMQADAEADAEICOBuIAQARQAFAagDAfQgCAMgCAMQAAADgBAEQgBAEgBAEQgDAPgEAPQgLAegMAeQAAABgBACQgJAPgJAPQgUAdgaAXQgGAEgFAFQgxAog5AWQgrAQguAHQgIACgIABQABABABABQgKgCgBAEQgegoghgpIgKgNQgBgCgBgCQgFgGgEgFIgig6QAAgBgBgCIgMgWQgDgBgBgBQgUgIgigUQgUgMgNgHQgLgGgFgDQgLgGgKgHQgQgNgQgNQgEgEgJgGQgFgEgGgFQgCgBgCgCQgBAAgCgBQgJgHAEgGQABgBAJADQASAJBOAfQAQAHATAIQA4AWAsANQApANAeAFQAIACAFABQAGABAFABQAEABAEAAQARADgPgLQgKgFgKgFQhFgghGgeQhsgugmgNQgOgGgGgCQgNgKgHgHQgGgFgEgDQgTgTgBgQg");
	this.shape_45.setTransform(-51,-55.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#999999").s().p("AgzDUIgKgNIgCgEIgJgLIgig6IgBgDIgMgWIgEgCQgUgIgigUIghgTIgQgJIgVgNIgggaIgNgKIgLgJIgEgDIgDgBQgJgHAEgGQABgBAJADQASAJBOAfIAjAPQA4AWAsANQApANAeAFIANADIALACIAIABQARADgPgLIgUgKIiLg+QhsgugmgNIgUgIIgUgRIgKgIQgTgTgBgQIAAgBQgEg2BHglQB1gKAwACQAVgBAMgEIAKgDQAUgIAVgSIAagYQAYgIAVgCQAegBAVAKQAhAQASALIALAQQAKANANAMIAGAIICOBuIAQARQAFAagDAfIgEAYIgBAHIgCAIIgHAeIgXA8IgBADIgSAeQgUAdgaAXIgLAJQgxAog5AWQgrAQguAHIgQADIACACQgKgCgBAEIg/hRg");
	this.shape_46.setTransform(-51,-55.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,1,1).p("AlXh7QgEg1BGgmQBzgKAxACQAVgBAMgDQAFgBAFgCQATgHAWgSQANgLAMgNQAYgIAVgEQAdAAAVAJQAhAPASAKQAGAIAGAHQALANAMAMQAEAEADADIA4AxIBTA+IAQARQAHAZgBAdQgBALgBANQAAADAAADQgBAEgBAEQgDAPgEAPQgKAdgMAeQgBACgBABQgHAQgJAPQgUAdgZAXQgFAFgGAFQguApg4AWQgqASguAIQgIABgIACQABABABABQgKgCgBADQgggigjglIgKgMQgBgBgBgCQgGgGgDgEIghg5QgBgBgBgCIgMgVQgCgCgCgBQgVgHghgSQgTgLgOgGQgLgGgFgCQgLgFgLgHQgQgMgQgNQgEgDgJgHQgGgEgGgFQgBgBgCgBQgBgBgCgBQgJgGAEgGQABgBAIADQASAIBPAbQAQAGATAHQA3ASAtAKQAnAKAeADQAIABAEAAQAFACAEAAQADABADAAQAOABgOgJQgKgGgKgFQhFgfhFgeQhsgtgkgNQgNgGgHgCQgMgLgIgGQgFgFgEgDQgSgTgCgQg");
	this.shape_47.setTransform(-51.1,-55.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#999999").s().p("AgsDcIgKgMIgCgDIgJgKIghg5IgCgDIgMgVIgEgDQgVgHghgSIghgRIgQgIQgLgFgLgHQgQgMgQgNIgNgKIgMgJIgDgCIgDgCQgJgGAEgGIAJACQASAIBPAbIAjANQA3ASAtAKQAnAKAeADIAMABIAJACIAGABQAOABgOgJIgUgLIiKg9QhsgtgkgNIgUgIIgUgRIgJgIQgSgTgCgQIAAgBQgEg1BGgmQBzgKAxACQAVgBAMgDIAKgDQATgHAWgSIAZgYQAYgIAVgEQAdAAAVAJQAhAPASAKIAMAPQALANAMAMIAHAHIA4AxIBTA+IAQARQAHAZgBAdIgCAYIAAAGIgCAIIgHAeIgWA7IgCADQgHAQgJAPQgUAdgZAXIgLAKQguApg4AWQgqASguAIIgQADIACACQgKgCgBADIhDhHg");
	this.shape_48.setTransform(-51.1,-55.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1).p("AlXh6QgFg1BGgmQBygKAwACQAVgBAMgDQAFgBAEgCQAUgHAWgQQANgLANgNQAWgJAUgFQAdgBAWAJQAgAOATAKQAGAHAGAHQAMANANALQADAEADAEIA2AxIBTA9IAQAQQAJAZABAbQAAAMAAAMQAAADAAAEQgBADgBAEQgDAOgEAQQgKAdgLAeQgBABAAACQgIAQgIAOQgTAegXAXQgGAGgFAEQgtAqg3AXQgpATgtAIQgIACgIACQABABAAABQgJgCgCAEQgigdgkghIgLgKQgBgCAAgBQgGgGgDgDIgig5QAAgBgBgCIgMgVQgDgBgBgCQgVgFghgRQgUgJgNgFQgLgFgGgCQgLgFgLgHQgQgKgRgMQgEgEgJgHQgFgEgGgEQgCgBgCgCQgBgBgBAAQgKgHAFgGQABgBAIACQAPAHBRAYQARAFASAGQA4AQAsAGQAnAHAcABQAJAAADgBQADABADAAQACAAACAAQAMABgNgJQgKgFgKgFQhGgfhDgeQhsgtgjgLQgNgGgGgDQgNgKgHgHQgFgEgDgEQgTgSgBgQg");
	this.shape_49.setTransform(-51,-55.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999999").s().p("AgmDkIgLgKIgBgDIgJgJIgig5IgBgDIgMgVIgEgDQgVgFghgRIghgOIgRgHQgLgFgLgHQgQgKgRgMIgNgLIgLgIIgEgDIgCgBQgKgHAFgGQABgBAIACQAPAHBRAYIAjALQA4AQAsAGQAnAHAcABIAMgBIAGABIAEAAQAMABgNgJIgUgKIiJg9QhsgtgjgLIgTgJIgUgRIgIgIQgTgSgBgQIAAgBQgFg1BGgmQBygKAwACQAVgBAMgDIAJgDQAUgHAWgQIAagYQAWgJAUgFQAdgBAWAJQAgAOATAKIAMAOQAMANANALIAGAIIA2AxIBTA9IAQAQQAJAZABAbIAAAYIAAAHIgCAHIgHAeIgVA7IgBADIgQAeQgTAegXAXIgLAKQgtAqg3AXQgpATgtAIIgQAEIABACQgJgCgCAEQgigdgkghg");
	this.shape_50.setTransform(-51,-55.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,1,1).p("AlYh5QgFg0BGgmQBwgLAxACQAVgBALgDQAFAAAEgCQAUgGAWgQQANgLANgMQAWgKATgGQAdgBAVAIQAgAMAUALQAGAGAHAHQALAMAOALQADADADAEIA0AzIBTA8IAQAQQAKAXAEAaQABALABAMQAAAEAAADQgBAEgBAEQgDANgDAQQgKAcgLAfQAAABgBACQgHAPgIAPQgSAegWAYQgGAFgFAFQgrArg2AYQgpATgsAKQgHACgIABQAAACAAAAQgJgBgCAEQgkgYglgdIgMgJQAAgBAAgBQgHgFgDgDIghg4QgBgBgBgCIgMgVQgCgBgBgCQgWgEgggPQgUgIgOgEQgKgFgGgBQgMgFgLgFQgRgKgQgMQgFgDgJgHQgFgEgGgEQgCgBgCgCQgBAAgBgBQgJgHAFgGQABgBAHACQAOAGBTAUQARAEASAFQA3AMAsADQAmAFAcgCQAJgBABgBQACAAADAAQABAAABgBQAJABgNgJQgKgFgJgFQhHgfhBgcQhsgtghgLQgNgGgGgDQgNgLgGgGQgGgEgDgEQgSgSgCgQg");
	this.shape_51.setTransform(-51,-55.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#999999").s().p("AggDsIgMgJIAAgCIgKgIIghg4IgCgDIgMgVIgDgDQgWgEgggPQgUgIgOgEIgQgGIgXgKQgRgKgQgMIgOgKIgLgIIgEgDIgCgBQgJgHAFgGQABgBAHACQAOAGBTAUIAjAJQA3AMAsADQAmAFAcgCQAJgBABgBIAFAAIACgBQAJABgNgJIgTgKIiIg7QhsgtghgLIgTgJIgTgRIgJgIQgSgSgCgQIAAgBQgFg0BGgmQBwgLAxACQAVgBALgDQAFAAAEgCQAUgGAWgQIAagXQAWgKATgGQAdgBAVAIQAgAMAUALIANANQALAMAOALIAGAHIA0AzIBTA8IAQAQQAKAXAEAaIACAXIAAAHIgCAIIgGAdIgVA7IgBADIgPAeQgSAegWAYIgLAKQgrArg2AYQgpATgsAKIgPADIAAACQgJgBgCAEQgkgYglgdg");
	this.shape_52.setTransform(-51,-55.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(1,1,1).p("AlYh4QgGg0BFgmQBvgLAxABQAVAAALgDQAFAAAEgCQAUgFAWgQQANgKANgMQAVgLATgHQAcgBAWAHQAfALAVALQAGAGAHAGQAMALAOALQADADADAEIAyA0IBSA7IARAPQAMAXAGAZQACALABALQABADAAADQgBAEgBAFQgDANgDAQQgJAcgLAeQAAACgBABQgHAQgHAPQgRAdgVAZQgFAGgFAFQgqArg1AZQgoAUgrALQgIACgHABQAAACAAAAQgJAAgDADQglgTgngYIgNgHQAAgBAAgBQgHgFgCgCIgig3QAAgCgBgBIgMgVQgCgCgCgBQgWgEgggMQgTgHgPgEQgKgEgGgBQgMgEgLgFQgRgIgRgMQgFgDgIgHQgGgDgGgFQgCgBgBgBQgBgBgCgBQgJgGAFgGQABgCAHACQAMAFBVARQARADASADQA3AJAsAAQAlACAcgFQAJgBgBgCQACAAABgBQAAAAAAgBQAHAAgMgIQgKgFgJgFQhHgfhAgcQhsgtgggKQgMgGgGgDQgNgLgGgFQgFgFgEgEQgRgSgCgPg");
	this.shape_53.setTransform(-50.9,-55.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#999999").s().p("AgaD0IgNgHIAAgCIgJgHIgig3IgBgDIgMgVIgEgDQgWgEgggMQgTgHgPgEQgKgEgGgBIgXgJQgRgIgRgMIgNgKIgMgIIgDgCIgDgCQgJgGAFgGQABgCAHACQAMAFBVARIAjAGQA3AJAsAAQAlACAcgFQAJgBgBgCIADgBIAAgBQAHAAgMgIIgTgKIiHg7QhsgtgggKIgSgJIgTgQIgJgJQgRgSgCgPIAAgBQgGg0BFgmQBvgLAxABQAVAAALgDIAJgCQAUgFAWgQIAagWQAVgLATgHQAcgBAWAHQAfALAVALIANAMQAMALAOALIAGAHIAyA0IBSA7IARAPQAMAXAGAZIADAWIABAGIgCAJIgGAdIgUA6IgBADIgOAfQgRAdgVAZIgKALQgqArg1AZQgoAUgrALIgPADIAAACQgJAAgDADQglgTgngYg");
	this.shape_54.setTransform(-50.9,-55.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(1,1,1).p("AlZh3QgGg0BFglQBtgMAxACQAVgBAKgCQAFgBAFgBQAUgFAVgPQANgKANgMQAVgLASgIQAcgCAWAHQAeAKAWAKQAHAGAHAGQANAKAOAKQADAEADAEIAwA0IBRA7IARAPQAOAVAIAXQADALACAMQABADAAADQAAAEgBAEQgDANgDAQQgJAbgKAfQgBABAAACQgGAQgHAOQgRAegUAaQgFAGgFAFQgnAsg0AaQgnAUgrAMQgHACgIACQAAABgBABQgIAAgDADQgngNgpgUIgNgHQABAAAAgBQgIgEgCgBIghg3QgBgCgBgBIgMgVQgCgCgBgBQgYgDgfgKQgTgGgPgDQgKgDgGgBQgMgDgMgFQgRgHgRgLQgFgEgJgGQgFgEgGgDQgCgCgCgBQgBgBgBAAQgIgHAEgGQACgBAGABQALADBWANQARADASACQA2AGAsgEQAlAAAcgIQAIgCgCgCQABgBAAgBQgBgBgBgBQAFAAgNgIQgJgFgJgFQhIgfg+gbQhsgsgegKQgLgGgHgEQgMgKgHgGQgFgEgDgEQgRgRgCgQg");
	this.shape_55.setTransform(-50.8,-55.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#999999").s().p("AgVD9IgNgHIABgBIgKgFIghg3IgCgDIgMgVIgDgDQgYgDgfgKIgigJIgQgEQgMgDgMgFQgRgHgRgLIgOgKIgLgHIgEgDIgCgBQgIgHAEgGQACgBAGABQALADBWANIAjAFQA2AGAsgEQAlAAAcgIQAIgCgCgCIABgCIgCgCQAFAAgNgIIgSgKIiGg6QhsgsgegKIgSgKIgTgQIgIgIQgRgRgCgQIAAgBQgGg0BFglQBtgMAxACIAfgDIAKgCQAUgFAVgPQANgKANgMIAngTQAcgCAWAHQAeAKAWAKIAOAMIAbAUIAGAIIAwA0IBRA7IARAPQAOAVAIAXIAFAXIABAGIgBAIIgGAdIgTA6IgBADQgGAQgHAOQgRAegUAaIgKALQgnAsg0AaQgnAUgrAMIgPAEIgBACQgIAAgDADQgngNgpgUg");
	this.shape_56.setTransform(-50.8,-55.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1).p("Alah3QgGgzBEglQBsgMAyABQAUgBAKgBQAFgBAFgBQAUgEAVgPQANgJANgMQAUgMASgJQAbgCAWAGQAeAJAXAKQAHAFAHAGQAOAKAOAJQADAEADAEIAuA1IBiBIQAQAVAKAWQAEALADALQABACAAADQAAAEgBAFQgDAOgDAOQgIAcgKAeQgBACAAABQgGAQgGAPQgQAegTAaQgEAGgFAGQgmAtgzAaQgmAVgqANQgIACgHACQgBABAAABQgIABgEACQgpgIgqgPIgOgFQABAAAAgBQgIgEgBAAIgig3QAAgBgBgCIgMgUQgCgCgCgBQgYgDgegIQgTgEgPgDQgKgCgHgBQgMgCgMgEQgSgHgRgKQgFgEgIgFQgGgEgGgEQgCgBgBgBQgBgBgBgBQgJgGAFgGQABgCAGABQAJACBYAKQASABASABQA1ADAsgHQAkgDAcgKQAIgDgDgDQgBgBgBgCQgCgBgCgBQADgBgMgHQgJgFgKgFQhHgfg9gaQhsgtgcgIQgLgHgHgEQgMgKgHgFQgEgFgDgDQgRgSgDgPg");
	this.shape_57.setTransform(-50.8,-56);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#999999").s().p("AgPEFIgOgFIABgBIgJgEIgig3IgBgDIgMgUIgEgDQgYgDgegIIgigHIgRgDQgMgCgMgEQgSgHgRgKIgNgJIgMgIIgDgCIgCgCQgJgGAFgGQABgCAGABQAJACBYAKIAkACQA1ADAsgHQAkgDAcgKQAIgDgDgDIgCgDIgEgCQADgBgMgHIgTgKIiEg5QhsgtgcgIIgSgLIgTgPIgHgIQgRgSgDgPIAAgCQgGgzBEglQBsgMAyABIAegCIAKgCQAUgEAVgPQANgJANgMIAmgVQAbgCAWAGQAeAJAXAKIAOALIAcATIAGAIIAuA1IBiBIQAQAVAKAWIAHAWIABAFIgBAJIgGAcIgSA6IgBADIgMAfQgQAegTAaIgJAMQgmAtgzAaQgmAVgqANIgPAEIgBACQgIABgEACQgpgIgqgPg");
	this.shape_58.setTransform(-50.8,-56);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(1,1,1).p("Alah2QgHgyBEgmQBqgMAyABQAUAAAKgBQAFgBAFgBQAUgDAVgPQANgJANgMQAUgMARgLQAagBAXAFQAdAHAYAKQAHAFAIAFQANAKAPAJQADAEADADIAsA3IBiBHQASAUAMAUQAEAKAEALQACADAAACQAAAEgBAFQgDAOgDAOQgHAbgKAfQAAACgBABQgFAQgGAPQgPAegSAbQgEAGgFAGQgkAtgyAbQgmAWgpAOQgHACgHADQgBABgBABQgIABgEACQgqgDgsgLIgNgEQAAAAAAAAQgJgEgBABIghg2QgBgBgBgCIgLgUQgCgCgCgBQgZgCgdgGQgTgDgQgCQgKgBgHgBQgMgBgMgEQgSgGgRgKQgGgDgIgGQgGgDgGgEQgBgBgCgBQgBgBgBgBQgIgGAEgGQACgCAFAAQAIACBaAGQARAAASAAQA1gBAsgKQAjgGAcgMQAHgEgEgEQgCgBgBgCQgDgBgDgCQAAgCgMgGQgIgFgKgEQhIggg7gZQhsgsgbgIQgKgHgHgEQgMgKgGgFQgFgFgDgDQgQgSgDgPg");
	this.shape_59.setTransform(-50.7,-56.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#999999").s().p("AgJENIgNgEIAAAAIgKgDIghg2IgCgDIgLgUIgEgDQgZgCgdgGQgTgDgQgCIgRgCQgMgBgMgEQgSgGgRgKIgOgJIgMgHIgDgCIgCgCQgIgGAEgGQACgCAFAAQAIACBaAGIAjAAQA1gBAsgKQAjgGAcgMQAHgEgEgEIgDgDIgGgDQAAgCgMgGIgSgJIiDg5QhsgsgbgIIgRgLIgSgPIgIgIQgQgSgDgPIAAgCQgHgyBEgmQBqgMAyABIAegBIAKgCQAUgDAVgPQANgJANgMIAlgXQAagBAXAFQAdAHAYAKIAPAKIAcATIAGAHIAsA3IBiBHQASAUAMAUIAIAVIACAFIgBAJIgGAcIgRA6IgBADIgLAfQgPAegSAbIgJAMQgkAtgyAbQgmAWgpAOIgOAFIgCACQgIABgEACQgqgDgsgLg");
	this.shape_60.setTransform(-50.7,-56.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(1,1,1).p("Albh1QgIgyBEgmQBpgMAyABQAUgBAJAAQAFgBAFgBQAUgDAWgNQANgJANgMQATgNAQgMQAagCAXAFQAdAGAYAKQAIAEAHAFQAPAJAPAJQACAEADAEIArA3IBhBFQAUAUAOASQAGALAFAKQABACABADQgBAEAAAFQgDANgDAQQgHAagJAfQgBABAAACQgFAPgFAPQgPAegQAcQgEAGgFAGQgjAvgxAbQgkAXgpAPQgHACgHADQgBABgBABQgHABgFADQgsACgugHIgNgCIAAAAQgJgEgBACIghg2QAAgBgBgCIgMgUQgCgBgCgCQgZAAgdgEQgTgCgQgBQgJgBgIAAQgNgBgMgDQgSgFgRgJQgHgEgHgFQgGgEgGgDQgCgBgBgCQgBAAgBgBQgIgGAFgGQABgCAFgBQAGABBcACQASgBARgBQA1gDAsgOQAigJAbgPQAIgEgGgFQgDgCgCgCQgEgCgEgCQgDgCgKgGQgJgEgKgEQhIggg6gYQhsgtgZgGQgKgHgGgFQgNgKgGgFQgEgEgDgEQgQgRgDgPg");
	this.shape_61.setTransform(-50.6,-56.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#999999").s().p("AgEEVIgNgCIAAAAQgJgEgBACIghg2IgBgDIgMgUIgEgDQgZAAgdgEIgjgDIgRgBQgNgBgMgDQgSgFgRgJIgOgJIgMgHIgDgDIgCgBQgIgGAFgGQABgCAFgBQAGABBcACIAjgCQA1gDAsgOQAigJAbgPQAIgEgGgFIgFgEIgIgEIgNgIIgTgIIiCg4QhsgtgZgGIgQgMIgTgPIgHgIQgQgRgDgPIAAgCQgIgyBEgmQBpgMAyABIAdgBIAKgCQAUgDAWgNQANgJANgMIAjgZQAagCAXAFQAdAGAYAKIAPAJIAeASIAFAIIArA3IBhBFQAUAUAOASIALAVIACAFIgBAJIgGAdIgQA5IgBADIgKAeQgPAegQAcIgJAMQgjAvgxAbQgkAXgpAPIgOAFIgCACQgHABgFADIgUAAQgiAAgkgFg");
	this.shape_62.setTransform(-50.6,-56.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(1,1,1).p("Alch2QgIgyBDgmQBngMAzAAQAUAAAJAAQAFgBAEAAQAVgDAVgNQANgIAOgMQASgOAQgNQAZgCAXAEQAcAFAZAKQAIAEAIAEQAPAJAPAIQADAEADAEIApA4IBhBEQAVATAQARQAHAKAGAKQABACABADQAAAEgBAEQgCAOgDAQQgHAZgIAfQgBABgBACQgEAQgFAPQgNAegPAcQgFAHgEAGQghAvgwAcQgkAYgnAQQgIACgHADQgBABgCABQgGACgFACQguAHgwgCIgPgBQABAAAAAAQgJgDAAADIghg1QAAgCgBgBIgMgUQgCgCgBgBQgaAAgdgCQgSgBgRAAQgJAAgIAAQgNAAgMgDQgTgDgSgJQgGgEgHgFQgHgEgFgDQgCgBgBgBQgBgBgBAAQgIgHAFgGQABgBAFgBQAEgBBegCQASgBARgCQA1gHArgRQAhgMAbgRQAIgGgHgFQgEgCgEgCQgFgDgEgCQgFgDgKgFQgJgEgKgFQhIgfg4gYQhsgsgYgGQgKgHgGgFQgNgKgFgFQgEgEgDgEQgQgQgDgQg");
	this.shape_63.setTransform(-50.5,-56);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#999999").s().p("AABEbIgPgBIABAAQgJgDAAADIghg1IgBgDIgMgUIgDgDQgaAAgdgCIgjgBIgRAAQgNAAgMgDQgTgDgSgJIgNgJIgMgHIgDgCIgCgBQgIgHAFgGQABgBAFgBIBigDIAjgDQA1gHArgRQAhgMAbgRQAIgGgHgFIgIgEIgJgFIgPgIIgTgJIiAg3QhsgsgYgGIgQgMIgSgPIgHgIQgQgQgDgQIAAgBQgIgyBDgmQBngMAzAAIAdAAIAJgBQAVgDAVgNQANgIAOgMIAigbQAZgCAXAEQAcAFAZAKIAQAIIAeARIAGAIIApA4IBhBEQAVATAQARIANAUIACAFIgBAIIgFAeIgPA4IgCADIgJAfQgNAegPAcIgJANQghAvgwAcQgkAYgnAQIgPAFIgDACIgLAEQgiAFgkAAIgYAAg");
	this.shape_64.setTransform(-50.5,-56);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(1,1,1).p("Alch7QgJgxBDgmQBmgNAyABQAUAAAJAAQAFAAAEgBQAVgCAVgMQANgIAOgMQARgOAPgPQAZgCAXADQAcAEAaAKQAIADAIAEQAQAIAQAJQACADADAEIAnA5IBgBDQAYASASAPQAIAKAGAJQACADABADQAAAEgBAEQgCANgDAQQgGAZgIAfQgBACAAABQgEAQgFAPQgNAegNAdQgEAHgFAGQgfAwgvAdQgjAZgnAQQgHADgHADQgCABgBABQgGACgGACQgvANgzABIgPABQABABAAAAQgIgCAAACIghg0QAAgBgBgCIgMgTQgCgCgCgCQgaACgcAAQgTAAgRABQgJABgIAAQgNAAgMgCQgTgDgSgIQgHgEgHgFQgGgDgGgDQgCgBgBgBQgBgBgBAAQgIgHAFgGQACgCAEgBQADgBBfgGQASgDARgDQA1gKArgVQAhgOAagUQAIgGgJgGQgFgCgEgDQgGgDgGgCQgGgEgKgEQgKgEgJgFQhJgfg2gWQhsgtgXgFQgJgHgGgFQgNgKgFgFQgEgEgDgEQgPgQgDgQg");
	this.shape_65.setTransform(-50.5,-55.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#999999").s().p("AgxDrIgBgDIgMgTIgEgEQgaACgcAAIgkABIgRABQgNAAgMgCQgTgDgSgIIgOgJIgMgGIgDgCIgCgBQgIgHAFgGIAGgDQADgBBfgGIAjgGQA1gKArgVQAhgOAagUQAIgGgJgGIgJgFIgMgFIgQgIIgTgJIh/g1QhsgtgXgFIgPgMIgSgPIgHgIQgPgQgDgQIAAgCQgJgxBDgmQBmgNAyABIAdAAIAJgBQAVgCAVgMQANgIAOgMIAggdQAZgCAXADQAcAEAaAKIAQAHIAgARIAFAHIAnA5IBgBDQAYASASAPIAOATIADAGIgBAIIgFAdIgOA4IgBADIgJAfIgaA7IgJANQgfAwgvAdQgjAZgnAQIgOAGIgDACIgMAEQgvANgzABIgPABIABABQgIgCAAACg");
	this.shape_66.setTransform(-50.5,-55.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(1,1,1).p("AgLElIghg0QAAgBgBgCIgLgTIgEgEIhbAIQgyAKgsgbQgGgDgGgDQgBgBgCgBQgNgKAOgIQABgCBigJQBIgOA6gfQAfgRAbgXQAHgHgKgGIgLgGQkOh0gjgIQgZgUgIgHQgVgWgEgUQgJg0BOgoQB1gKAzADIAJAAQAhgCAkgeIAggfQA8gGA6AZQAQAHAQAIIAqBBICOBhIAQATQACACABAD");
	this.shape_67.setTransform(-50.4,-55);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#999999").s().p("AgsDxIgBgDIgLgTIgEgEIhbAIQgyAKgsgbIgMgGIgDgCQgNgKAOgIQABgCBigJQBIgOA6gfQAfgRAbgXQAHgHgKgGIgLgGQkOh0gjgIIghgbQgVgWgEgUQgJg0BOgoQB1gKAzADIAJAAQAhgCAkgeIAggfQA8gGA6AZIAgAPIAqBBICOBhIAQATIADAFQgEAjgQA9IgIAfIgYA8QggA6g0AiQhaBDhxAMIgPACIADABQgLgCAAAEg");
	this.shape_68.setTransform(-50.4,-55);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(1,1,1).p("AgDEfQgJgCAAACIgigzQAAgBgBgCIgNgTQgCgDgBgBQgaACgdABQgTAAgSABQgJABgIAAQgMABgLgCQgTgCgSgIQgIgEgJgFQgHgEgGgDQgBAAgBgBQAAAAgBgBQgIgFACgFQABgEAHgCQAEgCBfgHQAQgCAQgDQA3gLAtgVQAggPAcgUQAHgGgIgGQgEgCgEgDQgGgDgGgDQgFgDgJgFQgLgEgJgEQhJgdg2gVQhvgpgXgFQgKgGgGgFQgMgKgGgEQgFgFgDgEQgPgQgEgQQgJgwA/gnQBngRAygBQAUgBAKAAQAFgBAEgBQAVgCAVgOQAMgIANgLQARgQAQgOQAagDAaAEQAbAEAZAIQAHADAHAEQAQAIAQAIQADAEADAEIAoA2IBlBBQADACACACQASAOARAPQAHAKAHAJQACADABADQAAAFgBAGQgCAOgDAQQgEAVgGAZQgCAFgBAFQgEAQgEAQQgMAegOAdQgEAHgEAHQgfAxguAeQgjAagoASQgHADgHADQgBAAgBABQgGACgFACQgwAMgzABIgQABQABABABAAQABAAAAAAQgBAAgBAAgAgEEeQABAAAAABAgCEfIgBAA");
	this.shape_69.setTransform(-50.6,-55.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#999999").s().p("AguDsIgBgDIgNgTIgDgEQgaACgdABIglABIgRABQgMABgLgCQgTgCgSgIIgRgJIgNgHIgCgBIgBgBQgIgFACgFQABgEAHgCQAEgCBfgHIAggFQA3gLAtgVQAggPAcgUQAHgGgIgGIgIgFIgMgGIgOgIIgUgIIh/gyQhvgpgXgFIgQgLIgSgOIgIgJQgPgQgEgQQgJgwA/gnQBngRAygBIAegBIAJgCQAVgCAVgOQAMgIANgLIAhgeQAagDAaAEQAbAEAZAIIAOAHIAgAQIAGAIIAoA2IBlBBIAFAEIAjAdIAOATIADAGIgBALIgFAeIgKAuIgDAKIgIAgQgMAegOAdIgIAOQgfAxguAeQgjAagoASIgOAGIgCABIgLAEQgwAMgzABIgQABIABABQgJgCAAACg");
	this.shape_70.setTransform(-50.6,-55.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(1,1,1).p("AgDEaQgJgDgBACIgkgzQAAgCgBgBIgNgTQgCgCgCgBQgZABgegCQgTAAgSAAQgJAAgIAAQgMAAgLgCQgTgDgSgIQgIgEgKgFQgHgEgGgDQgBAAAAgBQgBAAAAAAQgJgGACgFQABgDAIgCQAGgBBdgEQARgBAQgDQA4gIAtgSQAigMAcgSQAHgFgGgFQgDgDgDgCQgEgDgFgCQgCgEgLgEQgJgEgKgEQhJgbg5gUQhwgngZgEQgKgGgHgFQgMgJgGgEQgFgFgEgEQgQgQgDgPIgBgBQgKgwA/gpQBogUAygCQAUgBAKgBQAEgBAFgBQAUgEAVgPQALgIAMgMQATgPAQgOQAbgEAaAEQAcAFAXAJQAIADAHAEQAPAIAQAIQADAEADAEIAsAzIBnBBQADABACACQAQAPAPARQAHAKAGAKQACADABADQgBAFAAAGQgCAOgDARQgDAUgGAaQgCAFgBAFQgEARgEAPQgMAfgPAdQgEAHgFAGQgfAygvAeQgkAagoASQgHADgHADQgBAAgBABQgHACgEACQgvAHgygEIgPgBQABABAAAAQABAAAAAAQAAAAgBAAgAgEEZQABABAAAAAgDEaIAAAA");
	this.shape_71.setTransform(-50.8,-55);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#999999").s().p("AALEaIgPgBIABABQgJgDgBACIgkgzIgBgDIgNgTIgEgDQgZABgegCIglAAIgRAAQgMAAgLgCQgTgDgSgIIgSgJIgNgHIgBgBIgBAAQgJgGACgFQABgDAIgCIBjgFIAhgEQA4gIAtgSQAigMAcgSQAHgFgGgFIgGgFIgJgFQgCgEgLgEIgTgIQhJgbg5gUQhwgngZgEIgRgLIgSgNIgJgJQgQgQgDgPIgBgBQgKgwA/gpQBogUAygCIAegCIAJgCQAUgEAVgPQALgIAMgMIAjgdQAbgEAaAEQAcAFAXAJIAPAHIAfAQIAGAIIAsAzIBnBBIAFADQAQAPAPARIANAUIADAGIgBALIgFAfQgDAUgGAaIgDAKIgIAgQgMAfgPAdIgJANQgfAygvAeQgkAagoASIgOAGIgCABQgHACgEACQgeAFggAAIgjgCg");
	this.shape_72.setTransform(-50.8,-55);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(1,1,1).p("AlchXQgLgxA+gqQBqgWAxgDQAUgCAKgCQAFgBAEgCQAUgFAUgQQALgJAMgMQATgQARgMQAbgEAZAEQAeAFAXAIQAHAEAHAEQAPAJAQAJQADADADAEIAvAwIBXAzIASAMQADACACACQAPAPANATQAGALAGAKQABADABADQAAAGgBAGQgBAOgDAQQgDAVgGAaQgBAFgCAFQgDARgFAQQgMAfgQAdQgEAHgFAHQghAxgvAfQgkAagpASQgHADgHADQAAAAgBABQgHACgEACQguAAgxgIIgPgCIAAAAQgIgEgCACIglgzQAAgBgBgCIgOgTQgCgCgCgBQgYABgggDQgTgCgSAAQgJgBgIAAQgMAAgLgDQgTgEgSgIQgIgEgKgFQgHgEgGgDQgBAAgBgBQAAAAgBAAQgIgGACgFQABgDAIgBQAJAABbgCQAQAAARgCQA5gFAugPQAjgKAcgPQAIgFgFgEQgBgCgCgCQgDgDgDgCQABgDgMgFQgLgEgJgEQhJgZg8gTQhwgkgcgFQgLgFgGgEQgMgIgHgFQgGgEgDgEQgRgQgEgPg");
	this.shape_73.setTransform(-51.1,-54.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#999999").s().p("AALETIgPgCIAAAAQgIgEgCACIglgzIgBgDIgOgTIgEgDQgYABgggDIglgCIgRgBQgMAAgLgDQgTgEgSgIIgSgJIgNgHIgCgBIgBAAQgIgGACgFQABgDAIgBIBkgCIAhgCQA5gFAugPQAjgKAcgPQAIgFgFgEIgDgEIgGgFQABgDgMgFIgUgIQhJgZg8gTQhwgkgcgFIgRgJIgTgNIgJgIQgRgQgEgPIAAgBQgLgxA+gqQBqgWAxgDIAegEIAJgDQAUgFAUgQQALgJAMgMQATgQARgMQAbgEAZAEQAeAFAXAIIAOAIIAfASIAGAHIAvAwIBXAzIASAMIAFAEQAPAPANATIAMAVIACAGIgBAMIgEAeIgJAvIgDAKQgDARgFAQQgMAfgQAdIgJAOQghAxgvAfQgkAagpASIgOAGIgBABQgHACgEACQguAAgxgIg");
	this.shape_74.setTransform(-51.1,-54.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(1,1,1).p("AlchOQgMgxA+gsQBrgZAwgEQAVgDAKgDQAFgBAEgCQATgGAUgRQAKgKAMgNQATgPASgLQAbgFAaAEQAeAGAWAIQAIAEAHAFQAPAJAPAJQADADAEAEIAyAtIBZAxIASANQADACACABQANARAMAVQAFALAFALQABACABADQgBAGAAAGQgBAPgCAQQgEAWgFAZQgBAFgCAGQgDARgFAPQgNAggQAdQgFAHgEAHQgiAxgwAgQgkAagqARQgHADgIADQABABgBABQgIABgDADQgtgGgwgMIgOgEQAAAAAAgBQgJgEgCABIgngzQAAgBgBgBIgOgTQgDgCgBgBQgYAAghgFQgUgCgRgBQgKgCgHAAQgMgBgLgDQgTgFgSgIQgIgEgLgGQgHgDgGgDQgBgBgBAAQAAAAgBAAQgIgGACgFQABgDAJgBQALABBZACQARAAARgBQA6gDAugMQAlgHAcgNQAIgEgDgDQAAgCAAgCQgCgCgCgCQAEgDgNgFQgKgEgKgEQhJgXg/gSQhxghgegFQgLgEgGgEQgNgIgHgEQgGgFgEgDQgSgQgEgPg");
	this.shape_75.setTransform(-51.3,-54);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#999999").s().p("AAKELIgOgEIAAgBQgJgEgCABIgngzIgBgCIgOgTIgEgDQgYAAghgFIglgDIgRgCQgMgBgLgDQgTgFgSgIIgTgKIgNgGIgCgBIgBAAQgIgGACgFQABgDAJgBIBkADIAigBQA6gDAugMQAlgHAcgNQAIgEgDgDIAAgEIgEgEQAEgDgNgFIgUgIQhJgXg/gSQhxghgegFIgRgIIgUgMIgKgIQgSgQgEgPIAAgBQgMgxA+gsQBrgZAwgEQAVgDAKgDIAJgDQATgGAUgRIAWgXQATgPASgLQAbgFAaAEQAeAGAWAIIAPAJIAeASIAHAHIAyAtIBZAxIASANIAFADQANARAMAVIAKAWIACAFIgBAMIgDAfIgJAvIgDALQgDARgFAPQgNAggQAdIgJAOQgiAxgwAgQgkAagqARIgPAGIAAACQgIABgDADQgtgGgwgMg");
	this.shape_76.setTransform(-51.3,-54);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(1,1,1).p("AlchEQgNgyA+guQBsgcAwgFQAVgDAKgEQAFgBAEgCQATgIASgSQALgLALgNQAUgPASgKQAcgGAZAFQAgAGAVAIQAHAFAIAEQAOAKAPAJQAEADAEAEIA1AqIBbAwIASANQADABACACQAMASAKAWQAEALAEAMQABADABADQgBAGAAAGQgBAPgCAQQgDAWgFAZQgBAGgCAFQgDASgFAPQgNAhgRAcQgFAHgFAHQgjAxgwAhQglAagqARQgHADgIADQABABAAABQgJABgCADQgtgMgvgRIgNgFQAAgBgBAAQgIgFgDAAIgogyQgBgBgBgCIgOgSQgDgCgBgBQgYgBgigGQgUgEgRgCQgKgBgHgBQgMgBgMgEQgSgFgTgJQgHgEgLgGQgHgDgHgDQgBgBAAAAQgBAAAAAAQgJgGACgFQABgCAKgBQANACBYAEQAQABASAAQA6AAAvgJQAmgFAdgKQAIgDgBgDQABgCABgBQAAgCgBgCQAHgDgOgFQgKgEgLgDQhIgWhCgRQhygegggFQgMgEgGgCQgNgIgHgFQgHgEgEgEQgSgPgEgPg");
	this.shape_77.setTransform(-51.5,-53.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#999999").s().p("AAJECIgNgFIgBgBIgLgFIgogyIgCgDIgOgSIgEgDQgYgBgigGIglgGIgRgCQgMgBgMgEQgSgFgTgJIgSgKIgOgGIgBgBIgBAAQgJgGACgFQABgCAKgBQANACBYAEIAiABQA6AAAvgJQAmgFAdgKQAIgDgBgDIACgDIgBgEQAHgDgOgFIgVgHQhIgWhCgRQhygegggFIgSgGIgUgNIgLgIQgSgPgEgPIgBAAQgNgyA+guQBsgcAwgFQAVgDAKgEIAJgDQATgIASgSIAWgYQAUgPASgKQAcgGAZAFQAgAGAVAIIAPAJIAdATIAIAHIA1AqIBbAwIASANIAFADQAMASAKAWIAIAXIACAGIgBAMIgDAfQgDAWgFAZIgDALQgDASgFAPQgNAhgRAcIgKAOQgjAxgwAhQglAagqARIgPAGIABACQgJABgCADQgtgMgvgRg");
	this.shape_78.setTransform(-51.5,-53.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(1,1,1).p("Albg7QgOgzA9gvQBtgfAwgFQAVgFAKgEQAFgCAEgCQATgJARgTQALgMAKgOQAVgOASgJQAdgHAYAFQAhAHAWAHQAGAGAIAFQAOAKAPAJQAEADAEAEIA4AnIBdAuIATANQACACADACQAJASAJAZQADALADAMQABADABADQAAAGgBAGQAAAPgCAQQgDAXgEAZQgCAGgBAGQgEARgFAQQgNAhgSAcQgFAHgFAHQgkAxgxAhQglAbgrARQgHADgIADQACABAAAAQgKABgBADQgsgRgugWIgNgHQgBAAAAgBQgIgFgDgCIgqgxQgBgBgBgBIgPgTQgDgCgBgBQgXgBgjgIQgWgFgPgCQgMgCgGgBQgMgCgMgEQgSgGgTgKQgGgDgNgGQgGgDgIgEIgBAAQAAAAgBgBQgJgFACgGQABgBALAAQAQADBWAGQAQABASACQA7ACAwgFQAngDAegIQAIgCABgDQACAAACgCQABgBABgCQAKgDgPgGQgLgDgKgDQhJgUhFgQQhygcgigEQgNgEgGgBQgNgIgIgFQgHgEgEgDQgTgPgFgPg");
	this.shape_79.setTransform(-51.7,-52.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#999999").s().p("AAJD5IgNgHIgBgBIgLgHIgqgxIgCgCIgPgTIgEgDQgXgBgjgIIglgHIgSgDQgMgCgMgEQgSgGgTgKIgTgJIgOgHIgBAAIgBgBQgJgFACgGQABgBALAAQAQADBWAGIAiADQA7ACAwgFQAngDAegIQAIgCABgDIAEgCIACgDQAKgDgPgGIgVgGQhJgUhFgQQhygcgigEIgTgFIgVgNIgLgHQgTgPgFgPIAAAAQgOgzA9gvQBtgfAwgFQAVgFAKgEIAJgEQATgJARgTQALgMAKgOQAVgOASgJQAdgHAYAFQAhAHAWAHIAOALIAdATIAIAHIA4AnIBdAuIATANIAFAEQAJASAJAZIAGAXIACAGIgBAMIgCAfIgHAwIgDAMIgJAhQgNAhgSAcIgKAOQgkAxgxAhQglAbgrARIgPAGIACABQgKABgBADQgsgRgugWg");
	this.shape_80.setTransform(-51.7,-52.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(1,1,1).p("AlbgyQgPgzA9gyQBughAwgGQAVgFAKgFQAFgCAEgDQASgKARgUQAKgNAKgOQAWgOASgJQAdgHAZAFQAiAIAUAHQAHAGAHAFQAOALAPAJQAEADAEAEIA7AkIBfAsIAUAOQACACADABQAIAUAGAaQADAMACAMQABADABAEQgBAFAAAHQAAAPgBAQQgDAXgEAaQgCAFgBAGQgEASgFAPQgNAigTAcQgFAHgGAHQgkAygyAhQgmAagrASQgIADgHADQACABAAAAQgLABAAADQgrgXgtgaIgNgJQAAgBgBgBQgIgFgDgDIgsgxQgBgBgBgBIgQgSQgCgCgCgBQgWgCgkgKQgWgFgPgDQgMgDgGgBQgMgDgMgEQgSgHgTgKQgGgDgNgGQgHgDgIgEQAAAAgBAAQAAAAgBgBQgJgFACgGQABgBAMABQASADBUAKQARABASACQA8AFAwgCQApAAAegFQAIgCADgCQADAAADgBQADgBACgCQANgDgQgGQgKgDgLgDQhJgShIgPQhzgagkgEQgNgCgHgBQgNgIgIgEQgHgEgFgDQgUgPgFgPg");
	this.shape_81.setTransform(-51.9,-52.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#999999").s().p("AAIDxIgNgJIgBgCIgLgIIgsgxIgCgCIgQgSIgEgDQgWgCgkgKIglgIIgSgEQgMgDgMgEQgSgHgTgKIgTgJIgPgHIgBAAIgBgBQgJgFACgGQABgBAMABQASADBUAKIAjADQA8AFAwgCQApAAAegFIALgEIAGgBIAFgDQANgDgQgGIgVgGQhJgShIgPQhzgagkgEIgUgDIgVgMIgMgHQgUgPgFgPIAAAAQgPgzA9gyQBughAwgGQAVgFAKgFIAJgFQASgKARgUIAUgbQAWgOASgJQAdgHAZAFQAiAIAUAHIAOALQAOALAPAJIAIAHIA7AkIBfAsIAUAOIAFADQAIAUAGAaIAFAYIACAHIgBAMIgBAfIgHAxIgDALQgEASgFAPQgNAigTAcIgLAOQgkAygyAhQgmAagrASIgPAGIACABQgLABAAADQgrgXgtgag");
	this.shape_82.setTransform(-51.9,-52.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(1,1,1).p("AlagpQgQg0A9gzQBvgjAvgIQAVgFAKgGQAFgDAFgDQARgMAQgUQAKgOAJgOQAXgOATgIQAdgIAYAGQAkAIAUAHQAGAGAHAGQAOAKAOAKQAFADAEADIA/AiIBhArIATANQADACACACQAHAUAEAcQACAMACANQAAAEABADQAAAGgBAGQAAAQAAAQQgDAXgEAaQgBAGgCAFQgEASgFAQQgNAigUAdQgFAHgGAGQgmAygxAiQgnAagsASQgIADgHADQACABABAAQgLABAAADQgqgdgsgfIgNgKQgBgCgBgBQgHgFgEgEIgtgwQgBgBgBgCIgRgSQgCgCgCAAQgVgDgmgLQgWgHgPgEQgMgDgGgBQgMgDgMgFQgSgIgTgKQgGgDgNgGQgHgDgJgEIAAAAQgBgBAAAAQgKgFADgGQAAgBANACQAVAEBSAMQAQACATADQA9AIAwABQAqACAfgDQAJgBAEgBQAFAAAEAAQAEgBAEgCQAQgCgRgHQgLgDgLgDQhJgQhKgOQh0gXgngEQgOgDgGAAQgNgGgJgFQgIgEgEgDQgVgOgFgPg");
	this.shape_83.setTransform(-52.2,-51.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#999999").s().p("AAIDoIgNgKIgCgDIgLgJIgtgwIgCgDIgRgSIgEgCQgVgDgmgLIglgLIgSgEQgMgDgMgFIglgSIgTgJIgQgHIAAAAIgBgBQgKgFADgGQAAgBANACIBnAQIAjAFQA9AIAwABQAqACAfgDIANgCIAJAAIAIgDQAQgCgRgHIgWgGIiTgeQh0gXgngEIgUgDIgWgLIgMgHQgVgOgFgPIAAAAQgQg0A9gzQBvgjAvgIQAVgFAKgGIAKgGQARgMAQgUIATgcQAXgOATgIQAdgIAYAGQAkAIAUAHIANAMIAcAUIAJAGIA/AiIBhArIATANIAFAEQAHAUAEAcIAEAZIABAHIgBAMIAAAgIgHAxIgDALQgEASgFAQQgNAigUAdIgLANQgmAygxAiQgnAagsASIgPAGIADABQgLABAAADIhWg8g");
	this.shape_84.setTransform(-52.2,-51.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(1,1,1).p("AlaggQgRg0A8g1QBxgmAvgJQAVgGAKgHQAFgCAEgEQARgNAQgWQAJgOAJgPQAXgNAUgHQAegJAYAGQAkAJATAHQAHAGAHAGQANALAPAKQAEADAFADICkBIIAUAOQADACACACQAFAVADAeQABAMABAOQAAADABADQgBAGAAAHQABAPgBARQgCAYgEAZQgBAGgCAGQgEASgFAQQgNAigVAdQgGAHgGAGQgmAygzAiQgmAbgtARQgIADgIADQADABABABQgMAAABADQgpgigrgkIgMgLQgBgCgCgCQgGgFgFgFIgvgwQgBgBgBgBIgRgSQgCgCgCAAQgVgEgngNQgXgIgOgEQgNgEgFgCQgMgDgMgGQgSgIgTgKQgGgDgOgHQgHgDgJgDIAAgBQAAAAgBAAQgKgFADgGQAAgBAOACQAXAFBQAPQARADATAEQA+AKAwAFQAsAEAfAAQAJgBAGAAQAGAAAGAAQAFgBAFgBQATgCgSgHQgKgDgMgDQhJgOhNgNQh1gUgpgEQgOgCgGAAQgOgHgJgEQgIgDgFgDQgWgOgFgOg");
	this.shape_85.setTransform(-52.4,-51);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#999999").s().p("AAHDfIgMgLIgDgEIgLgKIgvgwIgCgCIgRgSIgEgCQgVgEgngNIglgMIgSgGQgMgDgMgGIglgSIgUgKIgQgGIAAgBIgBAAQgKgFADgGIAOABIBnAUIAkAHQA+AKAwAFQAsAEAfAAIAPgBIAMAAIAKgCQATgCgSgHIgWgGIiWgbQh1gUgpgEIgUgCIgXgLIgNgGQgWgOgFgOIAAgBQgRg0A8g1QBxgmAvgJQAVgGAKgHIAJgGQARgNAQgWIASgdQAXgNAUgHQAegJAYAGQAkAJATAHIAOAMQANALAPAKIAJAGICkBIIAUAOIAFAEQAFAVADAeIACAaIABAGIgBANIAAAgIgGAxIgDAMQgEASgFAQQgNAigVAdIgMANQgmAygzAiQgmAbgtARIgQAGIAEACQgMAAABADIhUhGg");
	this.shape_86.setTransform(-52.4,-51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39}]}).to({state:[{t:this.shape_42},{t:this.shape_41}]},32).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).wait(45));

	// Layer 36 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AADCrIiPhLQg3gdgTg7QgTg6Adg3QAcg3A7gTQA7gTA4AcICPBLQA3AdATA7QATA6gdA3QgcA3g7ATQgYAIgXAAQgiAAgigRg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AADCrIiPhLQg3gdgTg7QgTg6Adg3QAcg3A7gTQA7gTA4AcICPBLQA3AdATA7QATA6gdA3QgcA3g7ATQgYAIgXAAQgiAAgigRg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AADCrIiPhLQg3gdgTg7QgTg6Adg3QAcg3A7gTQA7gTA4AcICPBLQA3AdATA7QATA6gdA3QgcA3g7ATQgYAIgXAAQgiAAgigRg");
	var mask_1_graphics_37 = new cjs.Graphics().p("ABxDcIlpisQg3gdgTg6QgTg7Acg3QAcg4A7gTQA7gTA4AcIFoCtQA3AcATA6QATA7gcA4QgdA3g6ATQgYAHgYAAQgiAAgggQg");
	var mask_1_graphics_38 = new cjs.Graphics().p("ADdENIpBkNQg3gcgTg7QgUg7Acg3QAcg4A7gTQA7gUA3AcIJBENQA4AcATA7QATA7gbA4QgcA3g7AUQgYAHgYAAQgiAAghgQg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AFLE/IsalwQg3gcgUg6QgUg7Acg4QAbg4A7gTQA7gUA4AcIMZFvQA3AcAUA7QAUA6gcA4QgbA4g7ATQgZAJgYAAQghAAgggQg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AG4FwIvynRQg4gcgUg7QgUg6Abg4QAbg4A7gUQA7gUA4AbIPyHSQA3AbAVA7QATA6gbA4QgbA4g7AUQgZAJgYAAQghAAgggQg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AIlGhIzLozQg4gbgUg7QgVg6Abg4QAbg4A7gVQA6gUA4AbITLIzQA4AbAUA7QAVA6gbA5QgbA3g7AVQgZAJgZAAQggAAgggQg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AKSHTI2kqWQg4gbgUg6QgVg6Abg4QAag5A7gUQA6gVA4AaIWkKWQA4AbAVA6QAUA6gaA5QgbA4g7AVQgZAJgZAAQghAAgfgPg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AL/IEI58r3Qg5gbgUg6QgWg7Abg4QAag4A7gVQA5gWA6AbIZ7L4QA4AaAWA7QAUA6gaA4QgaA4g6AVQgbAKgZAAQggAAgfgPg");
	var mask_1_graphics_44 = new cjs.Graphics().p("ANsI1I9VtZQg4gagWg7QgVg6Aag4QAag5A7gVQA5gWA5AbIdVNZQA4AaAWA7QAVA6gaA4QgaA5g7AVQgaAKgZAAQggAAgfgPg");
	var mask_1_graphics_45 = new cjs.Graphics().p("APZJnMggugO8Qg4gagWg6QgVg6AZg4QAag5A6gWQA6gWA5AaMAguAO8QA4AaAWA6QAVA6gaA5QgZA4g6AWQgbAKgaAAQgfAAgfgOg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AMcIAI6nsLQgzgYgTg0QgTg0AXgyQAXgzA1gTQAzgUAzAYIaoMLQAyAYATA0QATAzgXAzQgXAzg0ATQgYAJgXAAQgcAAgcgNg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AJfGZI0hpbQgtgVgRguQgQguAVgsQAVgtAugQQAugRAsAVIUiJbQAsAVARAuQAQAugVAsQgVAtguAQQgUAIgUAAQgZAAgZgMg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AGiEyIucmqQgmgTgOgoQgOgoATgmQASgmAogOQAogOAmASIOcGqQAmATAOAoQAOAogSAmQgTAmgoAOQgRAGgSAAQgWAAgVgKg");
	var mask_1_graphics_49 = new cjs.Graphics().p("ADlDLIoWj6QgggQgLghQgMgjAQggQAQggAigMQAigLAgAQIIWD6QAgAQALAiQAMAigQAgQgQAggiALQgOAFgOAAQgUAAgSgJg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AAoBkIiQhKQgagOgJgbQgJgcAOgaQANgaAcgJQAcgJAaAOICQBKQAaAOAJAbQAJAcgOAaQgNAagcAJQgLADgLAAQgRAAgPgIg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-35,y:-36.7}).wait(32).to({graphics:mask_1_graphics_32,x:-35,y:-36.7}).wait(4).to({graphics:mask_1_graphics_36,x:-35,y:-36.7}).wait(1).to({graphics:mask_1_graphics_37,x:-45.8,y:-41.6}).wait(1).to({graphics:mask_1_graphics_38,x:-56.7,y:-46.5}).wait(1).to({graphics:mask_1_graphics_39,x:-67.5,y:-51.4}).wait(1).to({graphics:mask_1_graphics_40,x:-78.4,y:-56.3}).wait(1).to({graphics:mask_1_graphics_41,x:-89.2,y:-61.2}).wait(1).to({graphics:mask_1_graphics_42,x:-100,y:-66.1}).wait(1).to({graphics:mask_1_graphics_43,x:-110.8,y:-71}).wait(1).to({graphics:mask_1_graphics_44,x:-121.7,y:-75.9}).wait(1).to({graphics:mask_1_graphics_45,x:-132.5,y:-80.8}).wait(1).to({graphics:mask_1_graphics_46,x:-113,y:-72}).wait(1).to({graphics:mask_1_graphics_47,x:-93.5,y:-63.2}).wait(1).to({graphics:mask_1_graphics_48,x:-74,y:-54.4}).wait(1).to({graphics:mask_1_graphics_49,x:-54.5,y:-45.5}).wait(1).to({graphics:mask_1_graphics_50,x:-35,y:-36.7}).wait(50));

	// tongue
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#999999").ss(3,1,1).p("AsblLQAJgSAAgWQAAglgcgbQgdgagpAAQgpAAgcAaQgdAbAAAlQAAAmAdAaQAcAbApAAQApAAAdgbQAMgLAHgNgAPWHOI7xsZ");
	this.shape_87.setTransform(-140.4,-86.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#999999").s().p("AhFBAQgcgaAAgmQAAglAcgaQAdgaAoAAQApAAAdAaQAcAaAAAlQAAAWgJARQgHAOgMALQgdAagpAAQgoAAgdgag");
	this.shape_88.setTransform(-228.9,-123.8);

	var maskedShapeInstanceList = [this.shape_87,this.shape_88];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.7,-83.5,194.7,112.1);


(lib.flyby = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flyby
	this.instance = new lib.insect("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(569.7,123.2,1,1,0,0,0,-19.3,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-4,regY:-4.8,x:532.1,y:109.6,startPosition:1},0).wait(1).to({x:481.2,y:108.5,startPosition:2},0).wait(1).to({x:431.1,y:115.1,startPosition:3},0).wait(1).to({x:384.6,y:127.7,startPosition:4},0).wait(1).to({x:350.9,y:137.5,startPosition:0},0).wait(1).to({x:323.7,y:145.2,startPosition:1},0).wait(1).to({x:298,y:152,startPosition:2},0).wait(1).to({x:263.8,y:154.9,startPosition:3},0).wait(1).to({x:227.6,y:148.9,startPosition:4},0).wait(1).to({x:191.3,y:135.4,startPosition:0},0).wait(1).to({x:162.8,y:120.9,startPosition:1},0).wait(1).to({x:141,y:110.3,startPosition:2},0).wait(1).to({x:124.4,y:103.8,startPosition:3},0).wait(1).to({x:108.9,y:99.1,startPosition:4},0).wait(1).to({x:95.4,y:96.4,startPosition:0},0).wait(1).to({x:84.1,y:95.3,startPosition:1},0).wait(1).to({x:75.1,startPosition:2},0).wait(1).to({x:68.3,y:95.8,startPosition:3},0).wait(1).to({x:63.6,y:96.4,startPosition:4},0).wait(1).to({x:60.7,y:96.8,startPosition:0},0).wait(1).to({x:59.3,y:97.1,startPosition:1},0).wait(1).to({x:58.7,y:97.2,startPosition:2},0).wait(1).to({x:58.6,y:97.3,startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({x:58.3,startPosition:0},0).wait(1).to({x:57.5,y:97.5,startPosition:1},0).wait(1).to({x:55.9,y:97.8,startPosition:2},0).wait(1).to({x:53.4,y:98.4,startPosition:3},0).wait(1).to({x:50,y:99.3,startPosition:4},0).wait(1).to({x:45.5,y:100.7,startPosition:0},0).wait(1).to({x:39.8,y:102.6,startPosition:1},0).wait(1).to({x:31.8,y:105.8,startPosition:2},0).wait(1).to({x:22.5,y:109.9,startPosition:3},0).wait(1).to({x:13.1,y:114.4,startPosition:4},0).wait(1).to({x:4.1,y:118.7,startPosition:0},0).wait(1).to({x:-3.9,y:122.4,startPosition:1},0).wait(1).to({x:-13.1,y:126.7,startPosition:2},0).wait(1).to({x:-24.7,y:131.4,startPosition:3},0).wait(1).to({x:-38.6,y:136.2,startPosition:4},0).wait(1).to({x:-53.9,y:140.1,startPosition:0},0).wait(1).to({x:-71.1,y:143.1,startPosition:1},0).wait(1).to({x:-91.5,y:144.6,startPosition:2},0).wait(1).to({x:-113.2,y:144.3,startPosition:3},0).wait(1).to({x:-135.2,y:142.2,startPosition:4},0).wait(1).to({x:-157.3,y:138.6,startPosition:0},0).wait(1).to({x:-179.2,y:134,startPosition:1},0).wait(1).to({x:-202,y:129.8,startPosition:2},0).wait(1).to({x:-226.4,y:126.5,startPosition:3},0).wait(1).to({x:-251.7,y:124.3,startPosition:4},0).wait(1).to({x:-277.9,y:123.2,startPosition:0},0).wait(1).to({x:-304.9,y:123.3,startPosition:1},0).wait(1).to({x:-332.4,y:124.6,startPosition:2},0).wait(1).to({x:-360.3,y:127.2,startPosition:3},0).wait(1).to({x:-388.6,y:131.1,startPosition:4},0).wait(1).to({x:-417.1,y:136.2,startPosition:0},0).wait(1).to({x:-445.5,y:142.5,startPosition:1},0).wait(1).to({x:-473.6,y:149.9,startPosition:2},0).wait(1).to({x:-501.9,y:158.7,startPosition:3},0).wait(1).to({regX:-18.4,regY:-0.4,x:-546.9,y:184.3,startPosition:2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(569.1,106.5,32,22.2);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.eyes();
	this.instance.parent = this;
	this.instance.setTransform(239.8,17.3,0.559,0.559,0,0,0,41.5,41.4);

	this.instance_1 = new lib.eyes();
	this.instance_1.parent = this;
	this.instance_1.setTransform(141.8,48.8,1,1,0,0,0,41.5,41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(48));

	// backleg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AiCJtQgKg7BdjBIgyAmQh3BehHAjQggAMgfgDQgXgJgPgMIgGgFQgMgLgGgNQgfhLDOiFQA4gkBJgoQgcABg/gPQgzgNgWgLQjKiNhFjbQhLjGAdiZQCHhRCPgUIAHgBQCQgSBxAoQAHACCiBsQCFBkBtCmQAZAxAhA6IA/CAIAxBrQA/CJABAHQgIAghVgjQhDgYgpgbQjAiDgigmQgohUhShOIgLgKQh1iQgaACQg7glAHAdQAxANCSCJQA1BABIBeQgCADAKALQAIATAHATQAnBegCAcQAQBHAtBHQAPAZg8BDQgyAlhDhkQgmDWiRBEQgZAMgQAAQgXAAgFgZg");
	this.shape.setTransform(45,147.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AjXJvQgDg7Bzi2Ig2AhQiCBPhLAaQghAJgegHQgVgMgOgNIgFgGQgLgMgEgOQgXhODdhsQA7gdBOgfQgdgDg7gWQgygSgUgNQi5ijg2jWQg9jHAkiTQCLhKCQgOIAHAAQCQgMBvAuQAHADCdB0QB/BsBkCqQAWAzAfA7QAbA8AeBGIAsBuQA5CLABAHQgKAghTgnQhCgbgngdQjtixALgRQjZk4glgBQg4goAGAdQA6AZCLCiQBaBoAYBvQAdBjgHAdQAJBIAkBMQAMAbhEA7Qg2Afg2hrQg/DPiYA0QgVAHgPAAQgdAAgCgdg");
	this.shape_1.setTransform(46.6,145.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AkrJrQAEg7CIimIg6AaQiKBAhNAQQgjAFgcgKQgUgPgLgOIgFgGQgKgOgCgOQgNhRDnhRQA/gVBQgWQgcgHg4gcQgvgXgSgPQimi1gpjTQgujFAqiOQCOhECRgGIAHAAQCRgFBrA0QAHADCXB9QB6ByBbCvQATA1AcA7IAzCEIAoBwQAyCOAAAGQgLAghRgqQhAgfgngeQjki8AMgQQjLlCgjgDQg2gtAFAdQBAAnB5CwQBPBvAKB0QARBngKAdQAABIAbBQQAJAchKAyQg6AZgphxQhVDHifAhQgQAEgLAAQgnAAACgig");
	this.shape_2.setTransform(48.2,143.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AlgJjQALg6CaiWIg8ATQiQAwhPAHQgiAAgcgMQgSgRgKgQIgEgHQgIgPAAgOQgEhSDvg1QBBgOBSgMQgbgKg0ghQgrgcgRgRQiQjGgcjOQgijCAxiJQCRg9CQABIAHAAQCSADBpA5QAGAECQCEQBzB4BSC0QARA2AaA7IAsCHIAjBxQAsCQAAAHQgNAfhPguQg/ghglghQjbjGAMgPQi8lLgigGQgzgwAEAdQBEA1BmC7QBCB3gDB3QAFBpgNAcQgJBIARBSQAGAdhQAqQg8ARgbh1QhsC7iiAPIgQABQgzAAAHgmg");
	this.shape_3.setTransform(46.9,140.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AlTKBQhEgCAMgqQASg4CqiDIg+AMQiUAehPgBQgjgFgagPQgPgTgJgRIgDgHQgGgRABgNQAGhSD0gYQBCgHBTgCQgzgahMhNQj0mqCLk0QCUg2CQAJIAHAAQCPAJBoBAQAHAECICLQBsB/BJC4QAOA1AXA8IAnCJIAdBzQAmCSgBAHQgOAehMgxQg+gkgkgjQjSjPANgPQiulSgggKQgvg0ADAdQBFBEBTDGQA1B9gSB3QgHBqgRAbQgRBGAIBUQACAdhUAgQg9ALgOh4Qh/CpicAAIgIAAg");
	this.shape_4.setTransform(45,137.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Aj3HyQizB5iXg4Qg/gZAZgjQAjgwDMhDQghgFgdAEQiXgQhMgLQgggNgVgWQgKgXgDgSIgBgIQgBgRAFgNQAchNDxArQBCAMBQAVQgVgUAGg/QABg0ADgaQg7ncDSjoQCfgHCFA0IAHACQCHA0BQBHIB6COQBdB9BBC3QANA1ATBDIAeCMIAWB0QAdCUgBAGQgQAehJg2Qg7gogigkQjGjbAOgOQiZldgxgVQg6g+gBAZQA3CBgNDOQgICEhcBeQhHBZgfARQgnA9gVBSQgHAchaACQg9gKAZh2g");
	this.shape_5.setTransform(28.5,122.4);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AmoJoQANg5ChiOQggAHgbANQiRAphNANQgjgCgbgMQgSgRgKgRIgEgHQgHgPAAgOQgChRDwgxQBBgMBTgLQgbgKglgzQgggpgMgVQh9jSgEjSQgLjHBAiFQCWgtCQAQIAHABQCPARBhA6QAHAECMB8QByBzBXCwQATA0AbA/IAvCGIAkBxQAuCPAAAHQgNAfhPgtQg/gggmggQjejDAMgPQjClIgtgIQg7gxADAcQBFA+BPDGQAyB9gdB3QgQBrgSAbQgMBIANBTQAEAdhQAlQg9APgWh2Qh3C1igAHIgIAAQg7AAAJgog");
	this.shape_6.setTransform(40.1,137.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:true},1).wait(14).to({_off:false},0).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(14).to({_off:false},0).wait(8).to({_off:true},1).wait(25));

	// frontleg
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AhvF/QhtglBOg6QAng6gJhTQiTgogPgRQhihvhWiQQhIh7AbgcQIchQAwgNIAAgDQAKAAgKADQAYBhAoCZQAxCDBtAkQCxAQARAYQAcApgzAxQgeAngbALQg3AHhKhIQgogKBJB9QApBfgoAyQhqAcg+g+Qg+gzgPhLQgRAYgfBBQgZA1gGASQABAegcAAQgcAAg6geg");
	this.shape_7.setTransform(164.3,184.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("ABuFrQg3g6gFhNQgUAWgmA9QggAxgHARQgHA6hrhIQhogzBVgvQAug1ABhTQiCgxgOgSQhZh2hRiLQhCh3AbgaIFTgqQDggdAbgGIAAgDQAIABgIACQAVBhAfCoQAoCQBpAzQCtAnAOAaQAWAsg4ArQgiAhgdAIQg3ABhBhSQgmgOA5CFQAdBjgvAtQgTADgRAAQhSAAgsg6g");
	this.shape_8.setTransform(161.3,185.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AA/FpQgvhBAEhMQgVASguA4QgmAtgKARQgOA4hghVQhhg/BaglQA0guAMhTQhyg3gMgTQhQh8hMiGQg+h0AbgWQIfgyAxgLIAAgCQAKAAgKACQATBiASC0QAeCbBiBEQCnA7AMAdQAQAug+AjQglAegeAEQg3gHg2hYQgkgUAoCMQAQBmg0AnQhtAAgthMg");
	this.shape_9.setTransform(158,187.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AARFjQglhGAOhMQgYAQg1AxQgrAogMAPQgVA2hVhgQhYhMBegYQA6goAVhQQhhg7gKgTQhGiChJiAQg6hxAbgTQIggjAygJIgBgDQALABgKACQAPBiAFDBQASCkBaBTQCeBPAIAfQAKAwhBAbQgpAZgeAAQg2gOgrhfQghgXAWCPQADBog4AfQhtgOgjhQg");
	this.shape_10.setTransform(154.3,189.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AgYFZQgehKAYhJQgaANg7ApQgwAigOAOQgbAzhIhrQhOhVBggNQA+ggAghNQhQg6gJgWQg7iGhGh6Qg3huAagQQIhgUAxgIIAAgDQAKACgKABQANBjgLDKQAFCuBQBhQCTBkAEAeQAEAwhFATQgrAUgegEQg0gUgehkQgegbAECRQgLBmg7AZQhpgbgYhVg");
	this.shape_11.setTransform(150.2,190.6);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(4).to({_off:false},0).wait(44));

	// body
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AgCAAIAAgCIAFAFg");
	this.shape_12.setTransform(122.5,181.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("Ax4BwQAGgjANiNQAWkAF5jFQF5jEHVg2QCYiWDoBKQCAiADfB/QA8AsAiBUQAhBTgBBOQgBAtgTAfQD7DzhcDdIkWFEQqpJXncAAQomAAkXscg");
	this.shape_13.setTransform(156.8,90.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("ApHNUQiwhLiEixQiJi1huk5IAAAAQAGgjANiKIAAgFQAYj7FujDIATgKQFsi7HBg3QAUgKAUgIQCLh5DIA1QAYgIAbgDQBzhaC3BcQAcAQAbAXQAeAeAXArQAQAfALAjQAOAtAEAsQADApgJAiIgBABQARAmACAbQAaAZAOAQQAhAkASAkQAXAoALA4QAVA8gEB2QgIAygSAxQhRCQhhCTQgZAlgZAjQjhEfjqBWQldB3jlAXQg2AFg0AAQi3AAiNg8g");
	this.shape_14.setTransform(156.2,90.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("ApFNVIgBAAQixhLiDiwIgCgDQiGizhuk7IAAAAQAGgjANiKIAAgDIAAgBQAXj9FxjDIAEgCIAPgIQFti7HDg2IAJgEIAcgQQCLh4DKA3IASgCQAOgHAQgEQB0haC3BdIAYAPQAQALAPAOQAeAfAXArIALAZQAJAUAGAVQAOAuAEArIABAfQgBAXgGAVIgBABQAEARAAAPQAIAQAEANIAoApQAUAVAMAPQAMARAJAQQANAWAJAYQAHAWAFAcQAGAXAEAfQAFArgCBSQgDAdgGAfQgFATgIAVQhFCNhpCcQgYAlgbAkQgiAtgkAqQi8DajEBOQhNAehKATQj5BEi4APIgyADIgyABQi6AAiSg9g");
	this.shape_15.setTransform(156,91);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("ApDNVIgBAAQiyhKiDiwIgCgDQiDixhwlAQAGgiANiKIAAgEQAXj+FyjDIAEgCIAQgIQFui8HFg2IAIgCQANgKANgIQCMh4DLA5IARACQANgKAOgHQB1hZC4BfIAYANQAQAMAPAPQAeAfAWAsIALAYQAJAVAGAVQAOAtADAtQACAPgBAPQAAAXgGAUIgBACQAAARgEAOIASAbIAoAoQAWAWAJAMQAOAQAKAQQAOAWAIAXQAHAVAEAdQAFAYACAfQADAjgBBbIgEA8QgGAUgHAUQg6CLhwClIg0BJQgiAtglAsQi4DcjEBVQhMAghMASQj4A6i9ANIgzADIgpABQi+AAiYg/g");
	this.shape_16.setTransform(155.8,91.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("ApBNWQi2hKiDiyQiBiwhxlEQAGgjANiMQAWkBF5jEQF5jFHVg1QCYiWDoBKQCAiADfB+QA8AtAiBTQAhBUgBBOQgBAtgTAfQBRBNAPASQAjAmAMAlQANAlADBFQABAjgBCYQg2DQj5E0Qj6E0kWA4QkXA4jWAGIgjABQjCAAichAgAlNOEIAGAEIgGgGg");
	this.shape_17.setTransform(155.6,91.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("ApBNXQi0hKiFiyQiHizhvk+IAAgBQAGgjANiMIAAgCQAXj+F2jEIAIgEQF0jBHNg2IAQgJQCTiIDcBDIATgJQB9htDPByIAXARQAuAoAdBCIALAdQAYBDABBAQAAARgCAPQgDAZgKAUIALAZQA1AzATAXQAhAmAQAkQASApAHA9QAKA1gICCQgGAXgIAXQhUCjicDHIhJBTQkBEZkJBRQkLBRjTAPQgiACghAAQitAAiPg7g");
	this.shape_18.setTransform(156,90.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("ApCNYQiwhJiHiyQiOi4htk4IAAAAQAGgjANiLIAAgCQAXj/FzjDIAIgEQFzjBHLg2IARgGQCTiMDZBAIAWgBQB6hzDPBuIAYAPQAvAnAeBBIAMAbQAaBEADA/QAAARgBAPQgCAZgIAUQABAPgCANQAvAtAZAeQAfAlATAlQAYArAKA2QAUBHgOBtQgGAXgKAXQhvChiUC1IhNBMQkIEAj8BpQj/BrjQAWQgyAFgvAAQiZAAiEg3g");
	this.shape_19.setTransform(156.4,90.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("ApBNWQi2hKiDiyQiBiwhxlEQAGgjANiMQAWkBF5jEQF5jFHVg1QCYiWDoBKQCAiADfB+QA8AtAiBTQAhBUgBBOQgBAtgTAfQBRBNAPASQAjAmAMAlQANAlADBFQABAjgBCYQg2DQj5E0Qj6E0kWA4QkXA4jWAGIgjABQjCAAichAg");
	this.shape_20.setTransform(155.6,91.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_14}]},5).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17},{t:this.shape_12}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_14}]},6).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17},{t:this.shape_12}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_14}]},5).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17},{t:this.shape_12}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_14}]},7).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

	// secleg
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("ACgHCQhRggAGgxQAHgXgEgjQAAgFgdhMQgIgIgHAJQgUAHgeBDQggBChxgXQgFAAgjhEQAEgPBBg2QAxgrAPgVQAAgPgNgMIgIgGQgVgOhYA0QgbAIhSgrIgKgSQgGgPAHgLQAJgRAngcQAngbAsANQArAPAsALQAJABAGgOQAHgQACghQAPhBAAgkQgDg7gfgQIF7j+IgDANIACABQAGAwAFBBQAHBigEB+QgEA4gPA7IgOAtIgBAHIgeBJQgcA3gmBDQBIA3gRA4QgLA5gYAPQgQAJgLAAQgHAAgFgDg");
	this.shape_21.setTransform(212.3,141.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AhtGlQgFgPAXhQQARhAABgZQgJgMgQgBIgKAAQgYADgoBdQgRAYhbAPIgTgJQgPgJgBgMQgCgTAOguQAPgtArgQIBWggQAHgFgDgOQgFgRgTgdQgag8gjg0QgegygkgkIEZlpIABAOIACgBQAMAnATA2QAdBRAwBwQAWAzASAaIARAtIAEAHIAUBLIAUCJQBaABAVA3QAZA0gKAbQgLAZgRADQhUAWgYgrQgJgVgXgaQgEgFhFgsQgLAAgGANQgMASANBIQANBIhqAuIgBAAQgIAAg/ghg");
	this.shape_22.setTransform(239.5,136.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhtGlQgFgPAXhQQARhAABgZQgJgMgQgBIgKAAQgYADgoBdQgSAYhaAPIgTgJQgOgJgBgMQgCgTAOguQAOgtArgQIBWggQAHgFgDgOQgFgRgSgdQgbg8gjg0QgegygkgkIEZlpIABAOIACgBQAMAnATA2QAdBRAwBwQAWAzASAaIARAtIAEAHIAUBLQAKA9AKBMQBaABAVA3QAZA0gKAbQgLAZgRADQhUAWgYgrQgJgVgXgaQgEgFhFgsQgLAAgGANQgMASANBIQANBIhqAuIgBAAQgHAAhAghg");
	this.shape_23.setTransform(239.5,136.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AhtGlQgFgPAXhQQARhAABgZQgJgMgQgBIgKAAQgYADgoBdQgRAYhbAPIgTgJQgOgJgBgMQgCgTAOguQAOgtArgQIBWggQAHgFgDgOQgFgRgSgdQgbg8gjg0QgegygkgkIEZlpIABAOIACgBQAMAnATA2QAdBRAwBwQAWAzASAaIARAsIAEAIIAUBLIAVCJQBZABAVA3QAZA0gKAaQgLAbgQACQhVAWgYgrQgIgWgYgZQgDgFhFgsQgMAAgGANQgMASANBIQANBIhqAuIgBAAQgHAAhAghg");
	this.shape_24.setTransform(239.5,136.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AhtGlQgFgPAXhQQAQhAACgZQgKgNgPAAIgKAAQgZADgnBdQgRAYhcAPIgSgJQgOgJgCgMQgCgTAOguQAPgtArgQIBVggQAIgFgEgOQgEgRgTgdQgbg8gig0QgegygkgkIEYlpIABAOIADgBQALAnATA2QAeBRAvBwQAXAzASAaIARAsIAEAIIATBLIAVCJQBaABAVA2QAZA2gLAZQgKAbgRACQhUAWgYgrQgJgWgYgZQgDgFhFgsQgMAAgFANQgMASANBIQANBIhqAuIgBAAQgIAAg/ghg");
	this.shape_25.setTransform(239.6,136.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AhtGlQgFgPAXhQQAQhAACgZQgKgNgPAAIgKAAQgZADgnBdQgRAYhbAPIgTgJQgPgJgBgMQgCgTAOguQAPgtArgQQAsgPApgRQAIgFgEgOQgEgRgTgdQgbg8gig0QgegygkgkIEYlpIABAOIADgBQALAnATA2QAeBRAvBwQAXAzASAaIARAsIAEAIIAUBKIAUCKQBaABAVA2QAZA1gKAaQgLAbgRABQhUAYgYgsQgJgWgYgaQgDgEhFgsQgMAAgFANQgMASANBIQANBIhqAuIgBAAQgIAAg/ghg");
	this.shape_26.setTransform(239.6,136.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AhtGlQgFgPAXhQQARhAABgZQgKgNgPAAIgKAAQgYADgoBdQgRAYhbAPIgTgJQgOgJgBgMQgDgTAOguQAPgtArgQQAsgPApgRQAIgFgDgOQgFgRgTgdQgbg8gig0QgegygkgkIEYlpIABANIADAAQALAnATA2QAeBRAvBwQAXAzASAaIARAsIAEAIIAUBKIAUCKQBaABAVA2QAZA1gKAaQgLAagRACQhUAYgYgsQgJgWgXgaQgEgEhFgsQgLAAgGANQgMASANBIQANBIhqAuIgBAAQgHAAhAghg");
	this.shape_27.setTransform(239.6,136.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AhtGlQgFgPAYhQQAQhAABgZQgJgNgQAAIgKAAQgYADgoBdQgRAYhbAPIgTgJQgOgJgBgMQgCgTAOguQAOgtArgQQAsgOAqgSQAHgFgDgOQgFgRgTgdQgag8gjg0QgegygkgkIEYlpIABANIADAAQALAnATA2QAeBRAvBwQAXAzASAaIARAsIAEAIIAUBKIAUCJQBaACAVA2QAZA1gKAaQgLAagQACQhVAXgYgrQgJgWgXgaQgEgEhFgsQgLAAgGANQgMASANBIQANBIhqAuIgBAAQgHAAhAghg");
	this.shape_28.setTransform(239.6,136.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AhtGlQgFgPAXhQQAQhAACgZQgKgNgPAAIgKAAQgZADgnBdQgRAYhcAPIgSgJQgOgJgCgMQgCgTAOguQAPgtArgQQArgOAqgSQAHgFgDgOQgEgRgTgdQgag8gkg0QgegygkgkIEZlpIABANIACAAQAMAnATA2QAdBRAwBwQAWAzASAaIARAsIAEAIIAUBKIAVCJQBaACAUA2QAbA1gMAaQgKAagRACQhUAXgYgrQgJgWgYgaQgDgEhFgsQgLAAgGANQgMARANBJQANBIhqAuIgBAAQgJAAg+ghg");
	this.shape_29.setTransform(239.6,136.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AhtGlQgFgPAXhQQAQhAACgZQgKgNgPAAIgKAAQgZADgnBdQgRAYhbAPIgTgIQgPgKgBgMQgCgTAOguQAPgtArgQQArgOAqgSQAHgFgDgOQgEgRgTgdQgag8gkg0QgegygkgkIEZlpIABANIACAAQAMAnASA2QAeBRAwBwQAWAzASAaIARAsIAFAIIATBKIAVCJQBaACAVA2QAZA1gLAaQgKAagRACQhUAXgYgrQgJgWgYgaQgDgEhFgsQgMAAgFANQgMARANBJQANBIhqAuIgBAAQgIAAg/ghg");
	this.shape_30.setTransform(239.6,136.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AhtGlQgFgPAXhQQAQhAACgZQgKgNgPAAIgKAAQgZADgnBdQgRAYhbAPIgTgIQgOgKgCgMQgCgTAOguQAPgtArgQQArgOAqgSQAIgFgEgOQgEgRgTgdQgbg8gjg0QgegygkgkIEZlpIABANIACAAQAMAmASA2QAeBSAwBwQAWAzASAaIARAsIAFAIIATBKIAVCJQBaACAVA2QAZA1gKAaQgLAagRACQhUAXgYgrQgJgWgYgaQgDgEhFgsQgMAAgFAMQgMASANBJQANBIhqAuIgBAAQgIAAg/ghg");
	this.shape_31.setTransform(239.6,136.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AhtGlQgFgPAYhRQAQg/ABgZQgKgNgPAAIgKAAQgYADgoBdQgRAYhbAPIgTgIQgOgJgBgNQgCgSANgvQAPgtArgQQAsgOApgSQAIgFgEgOQgEgRgTgdQgbg8gjg0QgegygkgkIEZlpIABANIACAAQAMAmASA2QAeBSAwBwQAWAzASAaIARAsIAFAIIATBKIAVCJQBaACAVA2QAZA0gKAbQgLAZgQADQhVAXgYgrQgJgXgXgZQgEgFhFgrQgMgBgFANQgMASANBJQANBIhqAuIgBAAQgJAAg+ghg");
	this.shape_32.setTransform(239.6,136.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AhtGlQgFgPAYhRQAQg/ABgZQgJgNgQAAIgKAAQgYADgoBdQgRAYhbAPIgTgIQgOgJgBgNQgCgSAOgvQANgtAsgQQAsgOApgSQAIgFgDgOQgFgRgTgdQgbg8gjg0QgegygkgkIEZlpIABANIACAAQAMAmASA2QAeBSAwBwQAWAzASAaIARAsIAFAIIATBKIAVCJQBaABAVA3QAZA0gKAbQgLAZgQADQhVAXgYgrQgJgXgXgZQgEgFhFgrQgLgBgGANQgMASANBJQANBIhqAuIgBAAQgJAAg+ghg");
	this.shape_33.setTransform(239.6,136.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AhtGlQgFgPAXhRQAQg/ACgZQgKgNgPAAIgKAAQgZADgnBdQgRAYhbAPIgTgIQgPgJgBgNQgCgSAOgvQAPgtArgQQArgOAqgSQAHgFgDgOQgEgRgTgdQgbg8gjg0QgegygkgkIEYlpIABANIADAAQALAmATA2QAeBSAvBwQAXAzASAaIARAsIAEAHIAUBLIAVCJQBaABAUA3QAbA0gMAbQgKAZgRADQhUAXgYgrQgJgXgYgZQgDgFhFgrQgLgBgGANQgMASANBJQANBHhqAvIgBAAQgIAAg/ghg");
	this.shape_34.setTransform(239.7,136.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AhtGlQgFgPAXhRQAQg/ACgZQgKgNgPAAIgKAAQgZADgnBdQgRAYhbAPIgTgIQgPgJgBgNQgCgSAOgvQAPgtArgPIBVghQAHgFgDgOQgEgRgTgdQgbg8gjg0QgegygkgkIEYlpIABANIADAAQALAmATA2QAeBRAvBxQAXAzASAZQAKAYAHAVIAEAHIAUBLIAVCJQBaABAUA3QAbA0gLAaQgLAbgRACQhUAWgYgrQgJgVgYgaQgDgFhFgrQgMgBgFANQgMASANBJQANBHhqAvIgBAAQgIAAg/ghg");
	this.shape_35.setTransform(239.7,136.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("AhtGlQgFgPAXhRQARg/ABgZQgKgNgPAAIgKAAQgZADgnBdQgRAYhbAPIgTgIQgOgJgBgNQgDgSAOgvQAPgtArgPIBVghQAHgFgDgOQgEgRgTgdQgbg8gjg0QgdgyglgkIEYlpIABANIADAAQALAmATA2QAeBRAvBxQAXAzASAZQAKAYAHAVIAEAHIAUBLIAVCJQBaABAVA2QAZA2gKAZQgLAbgQACQhVAWgYgrQgJgVgYgaQgDgFhFgrQgMgBgFANQgMASANBIQANBIhqAvIgBAAQgIAAg/ghg");
	this.shape_36.setTransform(239.7,136.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AhtGlQgFgPAXhRQARg/ABgZQgKgNgPAAIgKAAQgZADgnBdQgRAYhbAPIgTgIQgOgJgBgNQgCgSANgvQAPgtArgPIBVghQAHgFgDgOQgEgRgTgdQgag8gkg0QgdgyglgkIEYlpIABANIADAAQALAmATA2QAeBRAvBxQAXAzASAZIARAsIAEAIIAUBLIAVCJQBaABAVA2QAZA1gKAaQgLAbgQABQhVAYgYgsQgJgVgXgaQgEgFhFgrQgMgBgFANQgMASANBIQANBIhqAvIgBAAQgIAAg/ghg");
	this.shape_37.setTransform(239.7,136.2);
	this.shape_37._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},26).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_37}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(41).to({_off:false},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-5.8,286.1,231.7);


(lib.chopam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(90));

	// eaten
	this.instance = new lib.insect("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(588.1,128.2,1,1,0,0,0,-19.3,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[588.1,128.2,486.3,97.5,389.5,126.2,292.6,154.8,278.8,157.2,261,160.3,243.6,159,203.4,155.9,150.7,127,98.7,98.4,60.8,99.6,45,100.1,28.4,105.7,17.1,109.5,-1.5,118.5,-3.8,119.6,-6.3,119.6,-69.3,146.1,-132.4,137.3,-133.5,137.9,-134.7,138.5]},startPosition:4},45).to({guide:{path:[-134.6,138.6,-194.1,168.7,-253.5,198.9]},startPosition:1},2).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(587.4,111.6,32,22.1);


(lib.sun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.rotsun("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(37,38.6,1,1,0,0,0,43,43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFF00","#FF7B25"],[0,1],-13.7,-1.4,0,-13.7,-1.4,104.5).s().p("AlnFnQiUiUAAjTQAAjSCUiVQCViUDSAAQDTAACUCUQCVCVAADSIAAAEIAAADIAAAHQAABJgVBBQgkBzhcBcQiUCVjTAAQjSAAiViVg");
	this.shape.setTransform(-34.1,14.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.4,-46,120.6,120.6);


(lib.gc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(336.4,378,0.482,0.482,0,0,0,128.3,110.1);

	this.text = new cjs.Text("FROGGY   LOOPS", "bold 26px 'Segoe Script'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 43;
	this.text.lineWidth = 201;
	this.text.parent = this;
	this.text.setTransform(404.5,193);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAnmA0sIAVgBIuYAAIiugBQBsgDgggBQCDADD+AAIhEgBIDEAAIgLAAQgkgBA3AAICYABQBYAABFgCQA0gBCDAAIjLAEIAAAAIgsABQhUAAA5AAQCdgCEeABIgfABID5AAQgYAAB5gBQCQgBgPAAQiqAAj4gBIB7gEIAUAAQAggBgLAAQgVgCAAgBIjlABIj7AAQgcABAZABIkmgBIBTgBIivgBQAUACgnABIggAAQlbgBjLgDIgiAAQAbABh5ABIjFACQACgBhVAAIiTAAQgZABAHAAItNAAQiwAFgpADQmdABi0gBIAPAAIjRAAQgtgBAjAAIAVgBQAHAAgTAAIkHABQAQgCFHAAIgMAAIDAAAQCRAAAfABIAJAAIgWABQgaAAB3ABQCdAAAkgCIgIAAIhXgBQhaAAAYgBIAYgBIAUAAQCOgBALgCQALgChVAAIiRACIg3AAIBeABIn1ACIAHAAIi1AAIAKAAIiuABIANgBIgvAAIiigBIAKAAQgzgBjVAAIk5AAIAhgBIkfABIgNAAQhbABgcgBIhOgCIifABIi5gBIAIABIjeAAIgEACIEDAAIhVABIg/ABIARgBIgwAAIiEgBIhXABIAIgBQhUAAhxABICLACIisABQhmAAiggBQAsgBANgCQAOgCDkABIg1AAQA5ACEQgDQgLAAARAAIhcgBQiDACiTgBIAagCIjCgBQhQgBkoABIAAAAQnEAABQACQhZgBhpABIgNAAIgBhqIgBBeIgDk1IABgeQAAgNABAWQAAr5gChmQAEjogCkcIgBgXIAAhFQACBhgBiuQgBhNABixIAAkgIACjzQgBFBABBoQAABXgBgtQgBDTABB5IABg5IAAhmIABAEIABC7IAABbQABAUABhBIgCkJQgCiBAChxIAACTQABBpABA8IgBkhIABAIQABiogChwIgCkAQgBBSgCgcIgBgOIgBALQAAh1AAhKIABhAIABgYQABCpABACQABAEABCVIABgNIABAIQABADABhrQgBhqgBAiIAAAJIgBhQIABgSIAAjNIAAAKIAAiRIgBiBQgBAdAAg8IgBh8IgBCqQgCBzABCQIACBTIAAAUIgBgpIgCgzIAAj+QABAJADnYIAAASQABCSABj8IgBhrIAAAaIABgXQgCiJgBiPIACAnQABAhAAg0QADheAAjiIAAjiQABA2AABtIAAClIACAJIAAADIABBOIAAiBQABgeAAB+IAAgVQgBBbABCBIABD7IAAASIgBgMIABECIAAARIAELpIAAACIABgnIAAiYQgBA1gBjGQAAi7ABAQIAAB1QABBBABh0IAAhCQAAgKABASQgBl3gBjTIAAiQIABAYIAAiwIAAihIABgXIABArQABg0gChoIABg6QACB2ABG1IgBghIAAFbIABgNIAABiIACglIAACyQAAAsgCg5IAABuIgBBcQACg8ABD4IABgQQABBSgCA6IAAgRIAAAvIgBg2IAAEFIAECUIAADAIAAgKIgBDnIAABMIgChmQgCifABFaQAAB/ABApIACBfIAAAHQAABhABBZQABhzgBg2QACAdgBD3QgBg4AABoIAABAQgCEGADDuQgBBGAAB4IAABmQAAgjgBBYIAAAxIgBgtIABgyQAAiugCA2IgBCtIAAgXIgCDgIABgeIgBHhIGjgBQAcgBFagBIHdgBIgpABQgSACAaAAIhpACIiWAAIhIgBQggAAAPgBQiKABA6AAQBWABgbABIgEAAIiZAAIkVADIAkAAIlZABIAeAAIBEABIAsAAIggABIAuABIkmABIABkDIACgUQAAg/gBg1IAAhAQAAATABgOIAAgLIABA6IABgnIABh3QgChEABhPQABhSgBg7IABgYIAAARQABAXAAhZIgCifQAAgRgCgLIABC1QABBZAABDIgDjsIgBAuIgChvIAADTIgBAvIgBgXQgBBhACBfIAAE+IgBgpIAAF3IAjAAIgHAAIB/gBIMggCIBQgBIjPgDICVgCIgjgBIFigBIFEgDIAFABICfgBQhmAAANgCQAMAABmAAIIggBQBeAAAuABIBBADIIXgDQFAABgZABICagDQBtgCDVACIgXAAIHzAAQFSgBBcABQhDACDzABQEhACAdADICEgCQA5ABAygBIgbgBIALgBQALgBhNAAQDagEEyAAIgFABIjiAAQAOABg6AAIgiABQCOABgWABQgYACDYAAIBegCIgIABIA/ABIBSgCQBRACiFABQh+AAA5ABIkbACQiXAAAiABQCGABB9gCQB+gCCPABIAeABQBkgBBHgCQAKABBVAAIDpgEIi3gBIjZgBIAhAAQCjgBALgBIgEABQDlgBDgAAIgNABIDQAAQCmABBkgBIgPAAIEAAAIEMgDIBJABQA7AAgvABQDBABDKgCIA5ABIhHAAIh/ABQGaACD/gDIgoAAIC1gBQBJAAgCABIgcAAIAjAAQACk3AAjGQABAYAAhAQAAhygBAHIgBAKIgBgQQAAC6gCB8IgBjCQABAIABhZQABhagBhZIgBBeQAAALgCAQQgBhTABhiQABhZgBhVIABA2IAAgoIgBhpIgBhMIADBPIACBUIABDiIABg9IABBSIABALQABirgBhQIgBhkQgBBLgBhuIAAhyIgCiEIABAiIAAjEQAAgHgDgSQgDgRAAjCIgCtuIABAiQAAo8gBimQAAkeACBVIAAgcIAAAOIABgsQAAASABgDQACAVAACZQgBAkAAgnQgBBQgBgPQABAqAAC+QAABygBgYIgBgMIAAAvIACExQAACfADgMQACgMABDCQgBgkgCBaIgBBkQgCitABhnQgBAUAAgOIAAhYQgBikgBAwQACB+gBDPIAAAoIAACSIABDdQAABrgBgxIAACOIgBgVIABAUIAAACIANE+IACxHIAAgBQABgxABCWIABCWIgBCDIgBh7QAAiCgBBYIACLmQABgvAAjLIAAgdIAAkpIABAbIAAmUIAAALIAAgNIgBg9IgBg2IgBgQIAAl7IgDlkIAAjQQAAAHAAgIIACi0IAAiXIgBARIgDkiQABg+ABBpIABCaIAAlCQABiqgBg4QAEgogBiOIgBASIAAgcIAAgfQAAgGgBAQIAAiiIAAAGQABimgBh/IgDiwIAArZQAEgkAAiXIgCijIgBiQIgBAAQAABpABA2IABBoIgCAnIgBkuIgNAAIAAHkQACBrAABJQgBgNAAh/IgBg0IgBAoQgCE3ADBGQAAi1ACAZQACARAAhgIACCrQgBBEAAgdIgBhSIgBglIgBCwIAEAoIgBB7IgCh0QAAH0gBALIAFJDQAEFkABD1QgBB9gBAPQAAAKgBgiIAACcIAAAEIgCBBIgKrIQgBheAAkBIABkyQABAeAAg1QABg9gBhgIgBAqQACmogBi9IABAaIgDmhIABApQABg5gBhvIAAh9IABAnIAAiOIgBiKIgBAAIAAgEIAAAAIAAgOIh4AAIAdAAIjUgDQh5gBi1ABIiPABIAMAAQilgCj3ABIAKAAImXABQgqgBAeAAIBGgCQkNAAmvAEIhUgBQCWgBgrgCIjMABIBugDIAcAAQiPgBgMABIgbABIhDgBIhlABQgiABgIABIiZgCQgRACk4AAIAyABIBgAAQgNABjVABQgPgCkFAAQjmABA0gDIyNADQi/gBAcgBIl0ACIkUAAIATgBIkmAAIlIAAIAagCIikACIgHAAQlLgCnrACIqLABIBDgCIimAAIkkACIgEAAIgaAAQgOgBAgAAQiogCkEADIh+gBIB/gCIh4gBIAOAAIDIgCIipAAIg8AAIBFgBIg8AAQD0gCIggBIgUABIErABQA2gBi1AAQAJgCBoAAIDYABIERACQDEAAgjgCQgfgCC5AAIBwACQFugCFJAAIAxACIEGgBQCQgBA+ACIMtgFQA4ADlaABIATAAIgxABQCHABCcgCQgcABB8AAIGEgCQhJgChVAAQAdABiKAAQASgBgXAAINsAAIgiABIIuABIIVgEQAigBERABQElAABogBQAuAAh2ABIApAAQBSAAAWABQihAAArAAIAjABQABABABAAQAAAAAAAAQgBAAgBAAQgBAAgBAAID5gBIgRgBIANAAQATgBgGAAIgbAAQD4gCE1ABQgDABBoAAIA/gBIgiABIgdAAIBGAAIGDAAQD9AAAygCQBFAAiAACIhDAAIBCABIjXABQh8AAgYABQBIAAAMAAIAxABICSgBIH8gBIAJAAIABGiIADFrQABDRAAC/QgBgYAABkIgBA1IgBggQgBBiABBKIABAwIAAhsQACCAgBCwIgBgTQAACcACAeQgCAkABE6IACCLQgBgXAABLIgBB6IACFfQAAgRgBBJQAABjgBACQgBCAACDtQABDSgBCKIAAgQIgBAnIABEdQACDAABDBQACgXgBkBIgChEQACgngBhbIAAgwIAEGjQACiZgBjWIAAAdIAAhHIgCBCIAAj2IgBAZQgBAzAAhLQABhXgBhAIgBhKQAABYgBgsIADn0QgCANABiKQAAiZgBgOIgBAkIgBiRIABg7IABAjQAAAbABgLIAAhyQABiVgChrIgBjVQACByABDIIAAgMIABFrIgBgZIAAAzIgBDBIABgdQABgNAAAtIABhYIACCQQACCFgBCTQAAgogBAwIgBBjIABEUIACg2QAABVgBCPQgCCEABB3QABACAAABQAAABAAAAQAAgBAAgBQAAgCAAgDIgBDJIgDFIQACAhABBJQgBAogBhpIABDnQABgwAABAIABCLQAABRgCiKIAABXIAABUIgBgYIgCj+IgBAMIAAiHIgCAuQAAAIgBgTQAAAGAAgMQABiygBA7QgBgogBBLIAAB+IAEEZIABhlIACCtIACBOIAAgZQABgyAACJQgBgcAAAnQAAApgBgQIABDNIgChoIgDEQIACAkQgBEQgChBIAABTQgBg0gBAaQgCBHgBgPIABC0QAChHAADeIAAEmIg1AAIAHAAIlmAAIjPAFIBxABIgTABIgrAAIAZABQG1gCA7gBIgzAAIBdgBIABmiIABAnIABCQQABgNgBhiIAAivIgCg5IAChNIAAgcIABA7IABEOIABglIABCkIgBgbQAADEgBApIgBAWIgVgBQhNgBilABQiKACkHAAIAMgBIgPgBIAQAAQh3gBjAACQgogBAHAAIBugBQAJgBhmABQhvAAgHgBQjVAAjzACQiIADi5AAIjGgBgEgCjA0aIAnAAIAxAAIgaABIB3AAIAhgBIBNAAQCmABDqgCIHUgBIAPABIDUAAIiTgDInbgCIhJgBIALAAQh3gBkDABQkAACihgCIC5gCIgogBQAWgBj+ABIBogDICXABIBYAAICCABIEMABIicgBQh2gBBRgBIjcgBIAVgBQAIgBArgBIgpAAQBDgBhogBIkbAAQglAAgDABIgFAAIh5AAQgrABhpAAQAJABBhAAIDCgCQAZABhFAAQhCAAAuABQFIAAhbACIiiAAQgEABhyACQjAgChlACIgVABQgOAChlgBQiogDntACIgfAAQCAAAg/ABIjFABIAPgBIjAABIB5gBQBGAAgQgBIirgBIALAAQhygBg0ACIg9ABQhBABAOAAIBIABICQACIgLAAInjAAQAhgBgMAAQgDgCi9AAQAHACiKABIgYAAIjJAAIgPABIgWgBIgWAAIBpAAQgJgChpAAIiWAAIiPABIAgABQAEABgaAAQGnACBSgBIgaABIFWAAQDCgCA4ACQAtAAgEACICmgCIgiABIEZAAIgHAAIFCgDIACgBIALAAIAXAAIBtgBIA7ABIBrAAIAiABIkFAAQglABCmACIgxAAIAnABQChAAgtgCIHLABIHeAAgEBCdA0SIh3ADImCAEQArABCLgBIgegBIKxABIAAgXIgBAXIgEAAIl4gEIgLAAIgHAAQgzgCGvAAIAAAAIAAgBIAAAAIiVAAIioAAgEAfCA0TIhuABIA2ABIgfAAIgNAAQgDABAVABIF+gBIgVgBIhVAAIgUgBQgZgBB3gBQAbACgbAAIBEABIDnAAQAFgBgbgBQh1ACgNgCIgsgBIDFgBQgaABAtABIClACIFBgCIgIgBIgcgBIC0AAIhsABQBDACB5AAIB/gCIgbAAIAXgCICWABIhxgCIBxABQBDgBgQAAIn3AAIArABQh9ABhLgBQhcgCiEAAImdACQAPgBhnABIi0AAIjsABQiIABAyABICLgBIA0AAIBLABgEA4lA0SIgUABICBAAQgSAAAQgBIhHAAIgkAAgEBHmA0TIAAAAIAAgBIAAAAgEBHmA0HIAAAAIAAABIABgBIgBAAIAAgBIAAAAgEBHFA0HIAVAAIAAAAgEBHiAp6IAACSIACCRQABBqABAFIAAhIIABifIgBgUQgBBLgBgQQABhOgBg7IgBiTIAAgHIgBBRgEhHrAG9IACEbIABhPIAAiDQgBhigBAQIAAgoIgBAxgEBHWgD8QAAA8ABAVIAAgHQAAhQAAAAIgBAGgEBHUg0IIAAAHIANAAIAAgDIgLgLIgCAAIAAAHgEBHQg0IIAAAHIABAAIAAgHIAAgHIgBAAIAAAHgEBHhg0HIAAgBIAAgHIgHAAgEALSA0qQAwgCBgABQgIABDaAAImZABIA3gBgEACvA0qIiRAAQApgCBVABICoABIgQgCQBYABBjgBICjgCQnIAAgmADIiUgBQg4gBAvgCICbgBIAeABIENgBIgVAAQE6AABbgCQANADB4ACICKgDIA9gCIEUgBIgjABIDRAAQBZAAgGABIkqABIBnABIiOAAQg5gBhxABQAkABgSAAQDxAAg1ADIj9gBQjCgBhWABIAHAAQi0gBjFADIgGAAIlIAAgEgaDA0qQgFgBAQAAQAZgCiDABIAiACQqLgDjeABIAggCQAFgBgfgBIF9AAQAXAAhxABIjXABQAjACCrgBQCfgBAIACQCyAACDgBQBxgCCbABIAwgBIAUAAIgtABQgeABA/ABIA7AAIiKACIhLAAgEAa8A0nQABgCAyAAQgRABBOABIg/AAIgxAAgEg+PA0lIBrgBIB3gBQARABhgABQhYABAMABgEhA4A0iIFIgCIA1ABIkZABIgmAAIg+AAgEgGBA0VQAHAAgPgBIBgAAIAHAAIgdABIgOABIARAAIgsAAQglAAAMgBgEgMEA0WIgGgBIhRgBIiTgBQAcgBFtAAIgMAAQCUAAANABIAcABIhuABQgQAAAOABIjgAAgEAI7A0KIAvgBIgjgBQhZgCA9AAQgMAAAxABIBWABIgZAAQgFABARAAQAQABgoAAIhGAAgEAVrA0IIAygBIgtAAQBmgCDCABQAMABi0ABIhHAAIg+AAgEBHgADOIABASIgBh8IAAgeIAED8QgBgOgBAkIAACGIgBgJIABBVIAAB7QgBhEAAA4IgBAkgEBH+gMLIgBgbIAAAZIAAjyQABAXABgCIAAEUIgBg1gEBH+gSeIAAgiIgBhQQAAgNgBAiIgBkuIgCBwIAAlkIABBcQABCWABiHIgCikQAAgqABAoIAABHQABgIAAhuQABhugBgeQgBCagBhyIgDmmIABAPIABAHIgBh1IAAiTIABAuIgBnGIABAIIgBkTIjaACIAEgCQhQABg+AAIi6gBIALAAIhfAAIAZgCIkCABQiJACh+AAQAFgBgjgBQggAAAKgBQBoABB3gBQAXgBh6AAIg6gBIAmAAIgigBIRWAAIAAJ3IABAQIgBHkIABCoQAAgOgBAHIABCoIAAENQAACvABgwIgBE8IgBARIAAAAgEBHcgVkIgBkwIgClDQABAMABg6IABguIgBoyIAAhCIgBhPQgBgcAAhEIADABIgBkoIABAYIABEMQgBFSACBlQgCBkABBQQACgHAADJIAAFNIgBgfQAAhEgBAqIABCsQABBfgBBdIAAgKQAACLgBAAIgBg1gEhH+gdqIAAguIABAYQAAAxABgfQAAC1ABgtIgBiXQABgIAAAdIABAKIAAgIIAACVIABBPQABjhABEOIAAgTQgBgkAABqIgBAfIAAhbIgBg4IgCC/QgCizAAjggEhHoga9QAAhmgBANIAAhoIACBsIABDyQgBgZgBiEgEhH2gctIgBiLIAABbQAABmgCiZIgBjrQgCBwgBhHIAAjVQAAiZACguIACCHIAAgkIADgHIAAgmIABBsIgBFJIACEiIgBAHIgBhTgEhH4gprQgBgaAAiVIAAANQABhigBiQIAAAPIAAkmQABAaAACFQAACCABAWIAAgpIABBnQAAgNgBAcIAAB3IACAlIAACBQAAgRgBAkIAABbIAAAbQAAhhgCgegEBEKgz9QiGgBALgBID4gDIBJABIAAAEIguAAQgCAAAAAAQgBAAAAAAQgBAAABAAQAAAAABAAIiWAAgEA6dgz+QAAgCgUgDQgFgCBHgBQC/gCG6ABIicADQARABgSAAIhTABIgagBIAQAAIA2gBIilAAQhKABASABIBkABIgWABIgtAAIAhABQgHABiQAAIixAAgEgFFg0mIBEAAQAfABBGgBQilgBDigCIgQADIi5ABIgdgBgEAhdg0mIgigBQFKABB2gDQg+gBjkAAIlKABIB6ABIiAACIgfgBIABAAIoeABIASgBIgngBIgegBIBCgBIVoAAIB2ABICuABIhCgCIDRAAIgOAAICrAAQAuAAi1ABIhKABIBmABIxSACQAPgBgJAAgEANrg0oIBoABIhIABQgVAAgLgCg");
	this.shape.setTransform(459.2,335.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("EhHrA0VIAAtiIAAjTIACBvIABguIADDtQAAhEgBhZIgBi1QACALAAARIACCfQAABagBgYIAAgQIgBAXQABA7gBBSQgBBQACBDIgBB3IgBAnIgBg5IAAALQgBANAAgTIAABAQABA1AAA/IgCAUIgBEDIEmgBIgugBIAgAAIgsgBIhEAAIgegBIFYAAIgjgBIEVgDICZAAIAEAAQAbAAhWgCQg6AACKAAQgPAAAgAAIBIABICWAAIBpgBQgagBASgBIApgCIndABQlaABgcACImjAAIABngIgBAeIABjhIABAXIABitQACg2AACvIgBAyIABAsIAAgxQABhXAAAiIAAhlQAAh5ABhGQgDjuACkFIAAhAQAAhpABA4QABj2gCgeQABA2gBB0QgBhaAAhgIAAgIIgCheQgBgqAAh+QgBlbACCfIACBmIAAhMIABjnIAAAKIAAjAIgEiTIAAkFIABA2IAAgvIAAAQQABg5gBhSIAAAQQgCj4gBA8IABhdIAAhuQABA5ABgsIAAixIgCAkIgBhhIAAAMIAAlbIABAiQgBm2gCh2IgBA6QACBogBA0IgBgrIgBAXIAAChIAACwIgBgYIAACRQABDSAAF3QAAgSAAAKIAABCQgBB0gBhAIAAh1QgBgRAAC8QABDFABg1IAACYIgBAnIAAgBIgErqMAAAgt/IF7AAIgNAAIB4ABIh/ADIB+AAQEEgCCoABQggAAAOABIAaAAIAEAAIEkgCICmAAIhEADIKMgCQHrgBFLABIAHAAICkgBIgaABIFIAAIEmAAIgTABIEUAAIF0gCQgdABDAABISNgCQg0ACDmgBQEFAAAPACQDVAAANgCIhgAAIgygBQE4AAARgBICZABQAIgBAigBIBlAAIBDAAIAbAAIB/AAIhuACIDMgBQArACiWABIBUABQGvgEENABIhGABQgeAAAqABIGXgBIgKAAQD3gBClACIgMAAICPgBQC1gBB5ABIDUADIgdAAIB4ABIAAANIAAAAIAAAEIABAAIABCLIAACOIgBgoIAAB9QABBvgBA6IgBgqIADGhIgBgaQABC9gCGpIABgrQABBggBA9QgBA1gBgdIAAExQAAEBABBeIAKLIIAChBIAAgDIgBidQABAjABgLQABgPABh9QgBj0gEllIgFpDQABgLAAn0IACB0IABh6IgEgpIABivIABAkIABBSQAAAdABhEIgCiqQAABfgCgRQgCgZAAC2QgDhHACk3IABgnIABAzQAAB/ABANQAAhJgChrIAAnkIANAAIABEuIACgmIgBhpQgBg2AAhpIAAAAIACCQIACCjQAACYgEAjIAALZIADCxQABB+gBCmIgBgFIABChQAAgQABAGIAAAfIAAAcIABgSQAACPgDAnQABA4gBCqIAAFCIgBiaQgBhogBA+IADEiIAAgRIABCXIgCC0QAAAIAAgIIAADQIADFkIAAF7IABARIABA1IAAA+IAAF6IAAEpIAAAdQAADLgBAvIgCrlQABhZAACCIABB8IABiDIgBiWQgBiXgBAyIAAABIgCRGIgNk+IAAgBIgBgVIABAVIAAiOQABAxAAhqIgBjeIAAiSIAAgoQAAjPgBh9QABgxABCkIAABYQAAAOAAgTQAABmACCtIABhkQAChaABAkQgBjCgCAMQgDAMAAieIgCkxIAAgwIABAMQABAYAAhyQAAi+gBgqQABAPAAhPQABAmABgkQAAiZgCgUQgBADgBgSIAAArIAAgOIAAAcQgChVAAEeQABCmAAI8IgBgiIACNuQAADDADAQQADATAAAHIAADEIgBgiIACCDIAAByQABBuAAhLIACBkQABBQgBCrIgBgKIgBhTIgBA+IgBjjIgChUIgDhPIABBMIABBpIAAAoIgBg2QABBVgBBZQgBBiABBTQACgQAAgLIABheQABBZgBBaQgBBagBgJIABDCQACh8AAi5IABAPIABgKQABgHAAByQAABAgBgXQAADFgCE4IgkAAIAdgBQACgBhJAAIi1ABIAoABQj/ACmbgBICAgCIBHAAIg5gBQjKADjBgBQAvgBg7gBIhJgBIkMADIkAAAIAPAAQhkACimgBIjRgBIAOAAQjggBjlACIAEgCQgLABijABIghABIDZAAIC3ACIjpADQhVAAgKgBQhHAChkABIgegBQiPAAh+ACQh9ABiGAAQgigBCXgBIEbgCQg5gBB+AAQCFgBhRgCIhSACIg/gBIAIAAIheABQjYAAAYgCQAWgBiOgBIAiAAQA6gBgOgBIDiABIAFgCQkyAAjaAEQBNAAgLABIgLABIAbABQgzABg4gBIiEACQgdgCkhgCQjzgCBDgCQhcgBlSABInzABIAXgBQjVgChtACIiaADQAZgBlAgBIoXADIhBgCQgugCheAAIogABQhmAAgMABQgNABBmAAIifABIgFAAIlEACIliACIAjAAIiVACIDPADIhQABIsgACgEAJLA0IIAjABIgvABQB3ABgZgBQgRgBAFAAIAZAAIhWgCQgxgBAMAAQg9AABZACgEAV0A0HIAtAAIgyABICFAAQC0gBgMgBIh3AAQhtAAhEABgEBHkAK+IABglQAAg4ABBEIAAh6IgBhWIAAAJIABiGQABgkAAAOIgDj8IAAAeIAAB8IAAgRgEBHfgaTIABEvQACCMgBjiIABAKQABhdgBhfIgBisQABgqAABEIABAfIAAlMQAAjJgCAGQgBhQAChjQgChmABlSIgBkMIgBgXIABEnIgDAAQAABEABAbIABBQIAABBIABIyIgBAvQgBA5gBgMIACFEgEhHigYfIgBjyIgChtIgBBpQACgOAABmQABCEABAaIAAAAgEBGkgz8QgBAAAAgBQgBAAAAAAQABAAAAAAQABAAACAAIAuAAIAAgEIhJgBIj4ADQgLABCGABICWABIAAAAgEA7Pg0GQhHABAFADQAUACAAACQE9ABALgCIghgBIAtAAIAWgBIhkAAQgSgBBKgBIClAAIg2ABIgQAAIAaAAIBTgBQASAAgRgBICcgCIkmgBIlTABgEAkWA0VIhEgBQAbAAgbgBQh3AAAZABIAUABIkZAAIAfAAIg2gBIBugBQgpgBhWABIiLAAQgyAACIgBIDsgCIC0AAQBmAAgPABIGegDQCEAABcACQBLABB9gBIgsAAIH4gBQAQABhDAAIhxgBIBxACIiWAAIgXABIAbABIh/ABQh5AAhDgCIBsAAIi0AAIAcAAIAIACIlBABIilgCQgtgBAaAAIjFABIAsABQANABB1gBQAaABgFAAgEgEeA0UIgHAAIhgABQAPAAgHAAIihAAIBtgBIgbgBQgNgBiUABIAMgBQltAAgcACICTAAIBRABIlZAAIhrAAIg7gBIhtABIgYAAIgKAAInhAAIALAAIiQgCIhIgBQgOAABBgBIA9gBQA0gCByABIgLAAICrABQAQABhGAAIh5ABIDAgBIgPABIDFAAQA+gBh/gBIAfAAQHtgCCoADQBlABAOgBIAVgCQBlgBDAABQBygBAEgCICiAAQBbgClIABQgugBBCAAQBFgBgZAAIjCACQhhAAgKgBQBpAAAsgBIB5gBIAFABQADgBAlAAIEbgBQBoAChDABIApAAQgrAAgIABIgVABIDcABQhRABB2ABICcABIkMgBIiDgBIhXAAIiXgBIhoADQD+AAgWABIAnAAIi4ADQChABEAgBQEDgCB3ABIgLABIBIAAIuXABgEgqeA0VIAYAAQCKgBgHgBQC9AAADABQALABggAAgEgywA0VIgggBICPgBICWABQBpAAAJABIhpAAIAWAAgEBApA0VIB4gCQCxgBCMABIAAAAIAAAAIAAAAQmvAAAzACIAHAAgEA4pA0SIBrAAQgQABARAAIiAABIAUgCgEBHqA0TIAAAAIAAAAIAAAAgEBHqA0HIAAAAIAAAAIAAAAIAAAAIABAAIgBABgEBHJA0IIAVgBIAAABgEBHoAudIgCiRIAAiSQAAhqABAhIABCSQABA7gBBOQABARABhLIABATIgBCgIAABIQgBgGgBhqgEhHnAG+IABgxIAAAnQABgQABBjIAACCIgBBPgEBHagD8QABgdAABnIAAAIQgBgVAAg9gEBHYg0BIAAgHIAAgGIACAAIALALIAAACgEBHUg0BIAAgHIAAgGIABAAIAAAGIAAAHgEBHeg0OIAHAAIAAAGIAAABg");
	this.shape_1.setTransform(458.8,335);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gc, new cjs.Rectangle(-1.7,-2.2,921.8,674.5), null);


// stage content:
(lib.frogupdatesszn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var question1 = "Print to Console";
		var answer1 = "console.log('Hello World')";
		var currquest = this.quest;
		var currfeed = this.feedback;
		var totscore = this.totalscore;
		var quesincrement = 0;
		
		var questions = ["Print to Console",
						"Js Framework that starts with V",
						"HTML,CSS and ...?",
						"Frog or Toad?"];
		var answers = ["console.log('Hello World')",
					   "Vue",
					   "Javascript",
					   "Frog"];	
					   
		var fk = ["Correct","Wrong"];
		
		var ckevt = this.eatit.hasEventListener("click");
		var gamestartit = this.startgame.addEventListener("click",startgames.bind(this));
		
		function startgames(){
			
			this.startgame.visible=false;
			this.gamecover.visible=false;
			init();
		}
		
		var scoring = parseInt(this.totalscore.text);
		console.log(ckevt);
		this.envSun.gotoAndPlay(1);
		
		this.eatit.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));	
		
		function loadqna(q,a){
		setTimeout(function(){
			currfeed.text = '';
			if(q < questions.length){
			currquest.text = questions[q];
			answer1 = answers[a];
			console.log(questions[q]);
			console.log(answers[a]);
			}else{
			currfeed.text = 'GAME OVER!';
			init();	
			}	
		},3000);
			
		}
		function init(){
			loadqna(0,0);	
			quesincrement = 0;
			totscore.text = 0;
		}
		
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			
			if (tinput.value == answer1){
				scoring += 10;
				this.bee.gotoAndPlay(1);	
				this.frogit.gotoAndPlay(1);
				this.totalscore.text = scoring;
				console.log(this.totalscore.text);
				currfeed.text = fk[0];
				
			}else{
				currfeed.text = fk[1];
			}
			tinput.value ="";
			quesincrement++;
			console.log(quesincrement + " next question");
			loadqna(quesincrement,quesincrement);
			if(ckevt){
			this.eatit.removeEventListener("click",fl_ClickToGoToAndPlayFromFrame)
			console.log(ckevt);	
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(102));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(274.9,199.9,1.668,1.668);

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(102));

	// Layer 6
	this.startgame = new lib.SG();
	this.startgame.parent = this;
	this.startgame.setTransform(403,202.8,1,1,0,0,0,94.3,27.5);
	new cjs.ButtonHelper(this.startgame, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.startgame).to({_off:true},1).wait(101));

	// Layer 1
	this.gamecover = new lib.gc();
	this.gamecover.parent = this;
	this.gamecover.setTransform(277,201.5,1,1,0,0,0,458.8,334.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AAA7aMAAAA21");
	this.shape.setTransform(275.1,230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.gamecover}]}).to({state:[]},1).wait(101));

	// Score
	this.totalscore = new cjs.Text("0", "bold 47px 'Segoe Script'", "#0099FF");
	this.totalscore.name = "totalscore";
	this.totalscore.textAlign = "center";
	this.totalscore.lineHeight = 76;
	this.totalscore.lineWidth = 123;
	this.totalscore.parent = this;
	this.totalscore.setTransform(642.3,17.1);

	this.feedback = new cjs.Text("Feedback", "bold 26px 'Segoe Script'", "#009900");
	this.feedback.name = "feedback";
	this.feedback.textAlign = "center";
	this.feedback.lineHeight = 43;
	this.feedback.lineWidth = 315;
	this.feedback.parent = this;
	this.feedback.setTransform(272.9,112.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgsA8IgEgBIgEgCIgCgFIgBgHIABgHIACgKIACgKIACgJIACgJIABgIIAAgCIAAgFIABgGIAAgHIABgEIAAgEIAAgBIgBgBIABgEIACgFIADgCIADgCIAFgCIADgBIADAAIAEABIADABIADABIAFAAIAHAAIAMgBIAPgCIAGgBIAFgCIAGgBIAFgBIADABIADABIACADIABADIgBACIgBADIgCACIgBACIgEACIgFABIgOABIgNACIgLABIgIAAIgLAAIgFAAIgEAAIgBAGIAAAIIAAAIIgBAFIAFAAIAFAAIAIAAIAGAAIADgBIAGAAIAGgBIAEAAIADgBIADgBIACgBIADAAIAEABIACACIABADIAAAEIgBADIgDACIgEACIgDABIgFAAIgIABIgJAAIgJABIgIAAIgFAAIgEABIgFABIgBAIIgCAJIAAAEIgBADIgBAEIAAADIAEgBIAEAAIAFAAIAEgBIAKAAIAHgBIAFgBIAGgBIAEAAIAEgBIAFAAIAFgBIACgBIADgBIADAAIACgBIAEABIACABIACADIABAFIgBACIgCACIgDADIgEABIgOACIgPACIgLABIgLABIgJACIgGABIgEABIgEABIgEAAIgDABg");
	this.shape_1.setTransform(667.9,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAqA4IgKgFIgGgFIgJgGIgFgEIgKgIIgIgHIgEgDIgCAAIgDAAIgBAAIgBAAIgCAAIgEAAQgEgDAAgGQAAgDABgCIAEgCIABAAIAAgBIABAAIACAAIAFAAIAEgBIAEgCIADgBIAEgDIAGgEIAEgDIAFgFIADgDIAAgEQAAgDgBgCIgFgFIgFgDIgGgCIgKgCIgEAAIgFABIgFAAIgFABIgCAAIgBAAIgBABIgDAAIABADIABAEIABAFIAAAFIAAAEIAAAFIgBAIIgCAJIgBAKIgBAIIgBAGIAAAFIAAAFIABAEIABAEIADAFIgCACIgDACIgDABIgCABQgHAAgDgDQgDgDgBgDIAAgFIAAgFIAAgIIABgHIABgGIABgDIAAgDIABgDIAAgDIACgMIABgLIgBgHIAAgJIgEABIgDAAQgEAAgBgCQgCgCAAgDQAAgEAHgEIAGgCIAFgCIAIgCIAJgBIAJgCIAIAAQALAAALADIAKAEIAJAGQAJAHAAAMQAAAIgGAIQgGAGgGAEIgPAJIAFADIAGAEIAIAGIAHAEIAHAFIAJAHIAIAFIAGAEIACACQAAAAAAABQAAABgBAAQAAABAAAAQAAAAgBABIgDACIgEACIgEAAQgEAAgFgCg");
	this.shape_2.setTransform(655,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghA6QgEgCgEgDIgGgGIgGgJIgDgJIgBgIQAAgIACgIQADgIAEgJQAEgJAGgIQAGgJAHgHQAIgGAJgEQAIgEAJAAIAKABIAIACIAIACIAHAEIAJAIIAEAIQACADABAFIAAAJIgCALIgEANIgHAMQgEAHgGAFQgIAIgHAGQgHAFgGAEQgHAEgHABQgIABgJAAQgEAAgFgCgAAAgqIgIAGIgIAIIgHAIIgFAJIgFAKIgDAKQgCAFABAGQAAAGACADIADAHQADADADACIAIACQAFgBAGgBQAFgCAEgDIAKgGIAJgIIAHgJIAFgKIADgKIACgMIAAgFIgCgFIgCgFIgGgEQgDgDgFgBQgFgBgGgBQgFAAgEACg");
	this.shape_3.setTransform(640.9,6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgqA7QgHgDgEgEQgEgFgCgHQgDgGAAgIQAAgHACgHIAEgNIAHgNIAIgMIAGgGIAHgHIAIgGIAHgFIAHgDIAHgEIAIgCIAHgBIAIAAQADAAADACIADADIACAEIADAEIABAEIgBADIgCACIgCAFIgCADIgCAEIgCACQgDAEgGAAQgEAAgCgCQgDgDAAgEIABgDIAFgGIACgDIACgCIgEgBIgGABIgHADIgHAEIgHAEQgHAGgGAHQgHAIgEAIIgDAHIgCAIIgCAIIgBAIIABAHQABADACACQACADADACQADABAFAAIAMgBIAMgFIAMgGIAMgHIALgHIAJgIIAEgDIAEgEIAEgDIADgEIADACIACABIABACIAAABQAAADgCAEIgGAHIgIAHIgLAJIgPAKIgQAJIgQAGQgIACgIAAQgJAAgGgCg");
	this.shape_4.setTransform(629.7,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbA8IgFgBIgFgBIgEgCIgDgDIgBgCIAAgDIACgEIACgDIACgBIAEABIAEABIAFABIAHAAIAJgBIAJgCIAHgEIAIgEIADgCIADgCIACgDIABgEQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBgBgBAAIgIgEIgHgCQgHgCgNgFIgKgFIgIgGQgIgJAAgLQAAgFADgEIAGgIIAKgGIAMgGQAHgCAGgBIAMgCIAFABIAGABIAGABIAFABQAEADADADQACAEAAADIAAACIgBAEIgBADIgBACQgDADgJAAIAAgFIgBgEIgCgDIgDgBIgEgBIgDAAIgHAAIgGABIgFABIgHACIgFADIgFADIgDAEIgCAEIABAEIADAFIAFAEIAGACIACABIACABIADABIADABIACABIACAAQASAFAJAFQAIAHAAAJIgBAGIgDAGIgFAFIgEAEIgFAEIgHADIgGAEIgHACIgHACIgHACIgHABIgHABIgDgBg");
	this.shape_5.setTransform(617.4,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.feedback},{t:this.totalscore}]}).wait(102));

	// flyby
	this.instance = new lib.flyby();
	this.instance.parent = this;
	this.instance.setTransform(850.1,306,1,1,0,0,0,584.8,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102));

	// environs
	this.instance_1 = new lib.clouds("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(17,-48.2,1,1,0,0,0,72.5,36.5);

	this.envSun = new lib.sun();
	this.envSun.parent = this;
	this.envSun.setTransform(85.8,-68.4,0.743,0.725,0,0,0,-33.9,14.8);

	this.instance_2 = new lib.clouds("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(151,-48.2,1,1,0,0,0,72.5,36.5);

	this.instance_3 = new lib.clouds("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(296,-61.2,1,1,0,0,0,72.5,36.5);

	this.instance_4 = new lib.clouds("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(414,-80.3,1,1,0,0,0,72.5,36.5);

	this.instance_5 = new lib.clouds("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(500.5,-67.2,1,1,0,0,0,72.5,36.5);

	this.instance_6 = new lib.clouds("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(228,-77,1,1,0,0,0,72.5,36.5);

	this.instance_7 = new lib.clouds("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(666,-83.7,1,1,0,0,0,72.5,36.5);

	this.instance_8 = new lib.clouds("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(91.9,-86,1,1,0,0,0,72.5,36.5);

	this.instance_9 = new lib.clouds("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(341.5,-60.2,1,1,0,0,0,72.5,36.5);

	this.instance_10 = new lib.clouds("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-106,-66.2,1,1,0,0,0,72.5,36.5);

	this.instance_11 = new lib.clouds("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(23,-48.2,1,1,0,0,0,72.5,36.5);

	this.instance_12 = new lib.clouds("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(168,-61.2,1,1,0,0,0,72.5,36.5);

	this.instance_13 = new lib.clouds("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(586,-67.2,1,1,0,0,0,72.5,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.envSun},{t:this.instance_1}]}).wait(102));

	// gfrog
	this.tinput = new lib.an_TextInput({'id': 'tinput', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.tinput.setTransform(273.8,79.6,2.839,2.117,0,0,0,50.1,11.1);

	this.eatit = new lib.eat();
	this.eatit.parent = this;
	this.eatit.setTransform(451.5,80.3,0.704,1.694,0,0,0,40.5,13.6);

	this.frogit = new lib.frog();
	this.frogit.parent = this;
	this.frogit.setTransform(18.6,474.3,0.678,0.734,0,0,180,-52.7,52.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frogit},{t:this.eatit},{t:this.tinput}]}).wait(102));

	// pond
	this.instance_14 = new lib.water();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-184.8,482.5,1.672,1.522,0,0,0,-0.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(102));

	// rocks
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("Egp3AO6IjcvIINWn9ILsKOImKORgEA0TAC8IEmu0IO+gOIAAS3Im5FIgA27jrIK2rIIN7G3IiOPXIvUCpgAEfG0Ih4vaIOEmkIKmLYInhNkgAbeEPIgNviIOulAIJTMcIo9MrgEhHoAEPIgOviIOulAIJTMcIo9Mrg");
	this.shape_6.setTransform(275.9,450.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(102));

	// Layer 3
	this.inrec = new lib.iinputrec();
	this.inrec.parent = this;
	this.inrec.setTransform(275.1,79.9,1,1,0,0,0,145.9,25.4);

	this.quest = new cjs.Text("Question", "bold 18px 'Segoe Script'");
	this.quest.name = "quest";
	this.quest.textAlign = "center";
	this.quest.lineHeight = 31;
	this.quest.lineWidth = 468;
	this.quest.parent = this;
	this.quest.setTransform(261.1,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.quest},{t:this.inrec}]}).wait(102));

	// Layer 5
	this.bee = new lib.chopam();
	this.bee.parent = this;
	this.bee.setTransform(438.1,351.8,1,1,0,0,0,182.2,145);

	this.timeline.addTween(cjs.Tween.get(this.bee).wait(102));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AWDIeQgSgBgpAAQgmADhMgBIATgBQgFAAAFgBQgdAAguABQgKAAABgBIAbgBQACgBgYABQgbAAgCgBQg0AAg7ADQgyADhNgCIAGgBIjhABIhBgCQA2gCgNgBQAfACA/AAIgQgBIA6ABIgNgBQgCAAgBAAQgBAAAAgBQABAAACAAQACAAADAAIAlACQAWAAARgCQAMgBAgAAQghADgWAAIAGAAIgLABQgUABANAAQAngCBFAAIgUABIBKABQgIAAAfgCQAjAAgDgBIiSAAQAygBAYgEIAFABQAHgBgCgBQgFgCAAgBIg4ABIg9ABQgKABAPAAIhbAAIAhgCIgqgBQAFADgNAAIgFAAQhUAAgygDIgIAAQAHABgeABIgwACQABgBgVgBIgkAAQgCAAAAAAQgBABgBAAQgBAAAAAAQAAABAAAAIjOgBQgrAFgKADQhkABgsgBIAEAAIgzAAQgLgBAIAAQACAAABAAQACgBAAAAQAAAAgBAAQAAAAgCAAIg+ABQAJgCBJABIgMAAIA4AAQAjgBAIABQAAAAABAAQAAAAgBAAQAAAAgBABQgBAAgBAAQgHAAAdABQAnABAIgDIgXgBQgTAAAIgBIABAAIAFAAQAigBADgCQADgCgVAAIgjABQgdABAmAAIh6ADIACAAIgwAAIANAAIAJgCIg9ACQAPgBgUABIgngBIACgBQgMgBg0AAIhUAAIAQAAIhJAAIADAAQgZABgHgBIgTgCIgnABIgtgBIACACIg3AAIgBABIBAABIgVABQgFABgSAAQAVgBgVAAIgggCIgaACIAHgBIgwABIA3ABIhAABIgkAAIghAAQAQgBAEgCQADgCA4ABIgNAAQAOACBCgDIABgBIgWgBQALABgbAAIg0AAIAHgCIgwAAQgKgCgeABIg0AAIhDABQgpAAAaACQgUgBgbAAIgxABIAsABIhPAEIgHgBQgBAAAAAAQAAAAAAgBQAAAAABAAQABAAABAAQi6AAgYACQg5gEhFABQALADgtgBQAsgCgzAAQgTACgrgBIhHAAIgSgBIAAgPQABg8ABAEIAABGIA9gBQAcABgdABQA8ABAggCIgOgBIgZAAQAAAAAvgBQAlgBgagBIhAACQggACgbgCIAkAAIAogCIhHABIACgBIgzAAIAAgKQgDgoAAgxQgBAUgCgHQgCgGAAALQgBhJADAAQABApABAAQABACABAjQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQABABABgaQgBgagBAJQAAAGgBgXIABgFQAAgagBgdIABAHIAAgjIgBggQgBAHAAgOIgBgfIgBAqQgCAcABAjIACAXIAAAPIgBgXIgCgMIAAg+QABACADiFIAAAWQABAkABg+IgBgaIAAAHIABgGQgCghgBgjIACAJQAAADAAAAQAAABABgBQAAAAAAgCQAAgCAAgDQADgXAAg2IAAg3QABANAAAaIAAAoIACACIAAAAIAAABQAAApABAUIAAhJQABgIAAAeIAAgEQgBAWABAfIABA9IAAAFIgBgDIAAgBIAAABIABA+IABA+IgBgNIABAjIADBmIAAABIABgJIABgpQgCAWgBg2QAAgtABADIAAAdQABAQABgdQAAgbABAVQgBh3gBg2IAAAIIAAgkIAAAiQACACgBg6IAAgjIAAgEQACgKAAAPQABgNgCgZIABgOQACAdABBqIgBgIIAABAIABApQACgFAAgOIAAA2QgBAMgBgUIAAAfIgBAoQABg0ACBRIAAgIQACAWgCAQIgBggIABAnIgBgNIAABAIAEAkIAAAyIAAgGIAAAVIAsgBIgsADIAAACIAsAAQAfAAAKgCIAXgCIACABQAXAAAWgCQgbAAgOAAQAHgBA8ABQgOABAaAAIAQAAQBAACA5gDQARABAegBIA9AAIgiAAQgOABAYAAQAWAAgXABIgKAAQgpAAAMABIAqACIgPAAIBAACIgHgBIDgAAQAHgCBUgBIB5gBIgPACQgEABAGABQgjACgbAAIgRgBQgMgBANAAQgoAAAPABQAWABgJABIBmgCIBPgCIABABIAngCQgZAAADgBQADgBAZAAICFgBQAXABALABIAPADICDgEQBnABgtACIAygEQAbgBA0ABIgXABICLgBQBSAAAXAAQgQACA7ACQBFACAIACIANgBIATAAQARABAOgBQgNAAAFgCQADgCgjABQA6gEBVgBIgBACIg3gBQADACgOAAIgUAAQAwABgHACQgGABA1AAIAZgBIgEABIAPAAIAUgBQAUABggABQgfAAAOACIhFABQglABAIABQAhABAegCQAfgCAjAAIAHABQAZAAARgCQADABAUAAIBqgGQg0ACgqgCIhJAAIAcgBQAogBADgBIgBACQA4gBA2AAIgLAAIA7ABQAoABAZgCIgnAAQAvgBAyABIBCgCIARAAQAPABgLABQAuABAygDQAZABgdAAQgoABgDABQBtACBBgDIgTgBIAsAAIAKgBIAIAAIAAAAIABAAQAChIAAgtQABARAAgVQAAgcgBACQgBABAAAAQAAAAAAAAQgBAAAAgBQAAgBAAgBQAAAugCAeIAAgqIgBgFQABACABgWQABgWgBgWIgBAXIgCAHQgBgVABgXQABgZgBgXIABATIAAgKIgBgaIgBgSIADATIACAUIABBHIABgrQAAAbABAGIABACQABgqgBgTIgCgkQAAAkgBghIAAgcIgCggIABAJIAAgwIgDgGQgDgEAAgwIAOBTIACkKQABgMABAkIABAlIgBAqIgBgoQAAgfgBAVIACC0QABgMAAgxQgBg6ABgVIABAcIAAhqIAAANIgBgcIgBgYIgBgHIAAhcIgDhlIAAgCIAAgoQAAACAAABQAAABAAABQAAABAAgBQAAAAAAAAIACgsIgBg+IAAAiIgCg3IgDAAIABAoQgBAfgBAEQgBADgBgQIABAtIAAABIgCAPIgHh6IgIABQgXAAg/AAIhNAAQAMgBgPAAQgPgBgXAAIAKABQh3gCgrACIATgBIhfACIADgBQgOgBgbABIgoAAIATAAIgigBQg0ACARAAIgWAAQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAABAAIglgBQghgBADgBIA8gDQAhAEBzgDIAOgBIAegBQgDABgfABQgWAAATACQBLABASgDQgtABAGgDQAFgCggAAIAygBQAVAAggABQgaACA8AAIAKgDIAzAAQgjABgOABQB6AAACABQBNgBCAgGIAAgHQg1AAgLABQgJgFgnABQAOABgMAAQgNABALABIgrAAIABAAQgogCgfACIgrACIiyAAQgIgEglAAIgoADQghAAgDABQAaAAAOAAIAZgBIAhACQhxABgcgBIAKgBIg0gCQgdgCgsACIgjABIADgBQgqgCg/ACIAHgBIhjACQgKgBAHgBIARgBQhCgBhpAFIgpgBIAkgCQAQgBgFgBIgyABIAXgCIALgBQgjAAgDABIgFAAIgFAAIgNAAIgWAAQgLABgCABIglgBQgEABhMAAQgDABAPABIAXAAQgDABg0AAQgDgBg/AAQg4AAANgCIkdADIgjgBQgRgBAQgBIheACIhPABQASgBgCAAIhHAAIhVgBIALgBIgoABIgCAAQhQgBh4ACIjIACIAsgBIANgDIgoAAIhHADIgIgBQAAAAgBAAQAAAAABgBQAAAAACAAQABAAACAAQgpgBg/ACQhHACgvAAIB2gFIgdgBIA0gCIgpAAIgVAAIAPAAIgvAAQAlgCDIgBIgKABIBJAAQAOgBgtAAQACgCAaAAIA0ACIBDABQAwAAgJgCQgHgCAtAAIAbADQBZgDBRAAQgEABAQABIBAgBQAjAAAPABIDGgEQAOAChZABIAbAAQgbABgoACQAvAAA9gDQgHACAeAAIAGgCIABAAIAIAAIBOgBIgQgBIgVgBQAIABgmAAQAQAAgbgBIBugBIAJABIBsAAIgIABICHABICCgEQAIgBBDABQBHABAZgBIgxABIAqAAQAUgBAFABQgnAAAKABQADAAACABQABAAABAAQAAAAAAAAQgBAAgCAAIBGgBQgNAAAHgBQAJAAgbAAQBCgDBVABQgBABAZABIAPgBQAJAAgRABQgQAAAaAAIBfAAQA9AAAMgCQARAAgfABQgeABAeABIg1AAQgeAAgGABQASAAADABIAMABIAjgBIgIAAQA8gCCsAAIBYgCQAzgCAvABQgIAAAaABQAaABgcAAQAcABAVgBQAWAAABAAIgmgBQAhgCAsACIgHAAQAmAAAIgBQAIABBNAAIAkgCQgNABAhAAIAOAAIgBAhIACBXQAAgHgBATQAAAZgBAAQgBAfACA6QABA1gBAiIAAgGQgBgDAAAMIABBGQACAvABAvQACgGgBg+IgCgRQACgJgBgXIAAgcQACAgABCRQADgwgBh5IAAAcIAAghIgCAgIAAg/IgBAJQgBANAAgTQABgUgBgQIgBgZQAAAegBgMIADh6QgCADABgiQAAgmgBgDIgBAYIgBgzQABgXABASQABAMAAgkIAAgrIgjAAIAkgBIAAACIABBkQgBgaAAAWIgBAvIABgHQABgFAAAVIABg8IACBCQACAkgBAoQAAgWgBAPIgBAZIABBDIACgNQAAAVgBAiQgCAhABAdQABAEAAgLIgBA3IgDBPQADAJAAARQgBAJgBgZIABBDQAAgcABAVIABAiQAAAWgCgrIAAAdQgBAQABAGQgBABgBgfIgCg5IAAAFIAAgZQgBAagCgLQAAABAAAAQAAAAAAAAQAAAAAAAAQAAgBAAgBQABgrgBAPQgBgKgBASIAAAeIAGB4IgBgJQgCgiACghIACArIACAYIAAgMQABgMAAAhQAAgBAAgBQgBAAAAAAQAAAAAAACQAAABAAADQAAAKgBgFIACA/IgEhAQAAAqgCAzIACAIQgBBIgCgYIABgPIgBgEIAAgDIABA6QgBgcgCAJQgCAQgBgDIABBEQACg+AABLIAABSIgXAAIABgBIhXAAIgyAFIAbABIgFABIgOAAIAKABQBrgBAOgBIgrAAIBCgBIABh4IABAOIABAjQABgDgBgYIAAgrIgCgNIACgTQAAgPABAWIABBDIABgTIABA4IgBgOQAAAwgBAKIgDAYgAEHINIAMABIgZAAQAcACAUgCIAIAAQAuABBGgCIBzgCIADACIA0gBQgUgCgVgBIgLgBQgqgChTABIAKAAQgdgCg/ACQg/ABgngBIBKgEIgnABQAGgBg+AAIAZgCIAlABIAWgBIAgABIBBABIgmgBQgdAAAUgCIg/AAIAOgBQACgBALgBIgbAAQAqgBgjgCQhNABgBABIgCgBIgdABQgLABgagBQAAACAbAAIAvgCQAGABgRAAQgQAAALABQBQAAgWACIgnAAQgBABgcABQgvgBgZABIgFACQgDABgZgBQgpgCh3ABIgfABQA7AAgTABIgwAAIADgBIgvABIAegBQARAAgEgBIgvgBIAIAAQgcAAgMABIgPABQgaABAfACIAjABIgZABIhtAAIALAAIAIgBQgBgCguAAQACABgiABIgfABIgOAAIgOAAIgFAAIgGgBIAaAAQgCgBgZAAIglAAIgjABIAIABQAAAAgdABQCDABARgBIgIABIBTAAQAwgBAOABIAEABQAGAAAAABIAogBIgIABIBEgBIgCABIBPgDIADgBIAGgBIAbAAIAfABIAQAAIg/ABQgIABAoABIgMABIAJAAQApAAgPgBIByABIB3AAIAKAAgAUyIGIgvADIhMADQALABAiAAIgIgBICrABIgEgBIhcgDIgEgBQgMgBBeAAIAAAAIAAgBIAAAAIgaAAIgpAAgAWHINIABAAIAAgNgAw6IGIAeABIgqACIgKAAQBKAAAGABIgGAAQAYACAXgCIBOAAIgOABIBmgBIgGABIBYgCQBWgCBMAAQgLgChMgCIAWgBIANABIAmgBIg9gCIhVADIAaABIhUAAQAAABAYAAIALABQgQABATABQgqAAhdgBIgFgCQgPgBgNABQgMACgVgBQAaAAgHgBQgGgBARAAIgJgCIgdAAQgRACgTgCQgUgBgOABQgIAAAGAAQAGgBgWAAIgnABQgEABgDACQAWABAWgCIAmgBgAMKIHIgoAAIAaABIgKABQAAAAAAAAQAAAAAAABQABAAABAAQABAAABAAIBdgBIgSAAIgNgBQgGgBAdgBQAJACgPAAIAgABIAvAAQABgBgGgBQgdABgDgBQgEgBgTAAQAXgCArAAQgQABAPACIAoABIBOgBIgCgCIgZAAQAigBAcABIgaAAQAQACAeABIAZgBIgGAAIAbgCIgWAAIAGgBIAkAAIgbgCIAbABQARAAgEgBIiGAAIAWABQgfABgSgBQgWgBghAAQhaAAgKABIgWAAIgsAAIg5ACQghABAMABIAigBIANAAIASABgAV2IHIAAABIABgBIgBAAgASYIFIgFACIAiAAQgCgBgBAAQgBAAAAAAQgBAAABAAQAAAAABgBIgRAAIgJAAgAWBIHIAAAAIAAgBIAAAAgAWBH7IABAAIAAgBIgBAAgAV1H7IAAAAIAAgBIAAAAgAV1H6IABAAIAAAAIgBAAIAAAAgA2GGVIACBMIABgaIAAggQgBgYgBAEIAAgSIgBAUgAV9FmIAAAjIACAkQABAZABACIAAgRIABgoQgBAAAAgIQgBAWgBgEQABgTgBgOIgBgkIgBgCIAAAUgAWBCvIACAIIAAgXgAV6n7IADAEIAAgGIgDAAIgBgFIgHgBIAGAGIACAAgAV+oCIAAAAIABABIAAgBIgBgBIAAABgAWWoHIAAgSIAAAAgAHWIdQALgBAYAAQgCACA1AAIhrAAIAVgBgAFQIdIgjAAQAKgBAVAAIApABIgEgBQAVABAYgBIAogCQhvgBgJADIgZgBIgLAAQgOgBALgBIAmgCIAIACIBGgCIgVABQBWAAAYgCQADACAdACIAigCIAPgCIBLgCIgRABIAzAAQAWAAgBABIhJACIAZABIgjAAQgOgCgbACQACAAABAAQACAAAAAAQABAAAAAAQgBAAgBABQA7AAgNACIg+gBQgvgBgVACIACgBQgsAAgwACIgBAAIhQAAgAhtIcQAGgCggACIAIABQimgCg0ABQAMgBABgBQACgCgOgBIBjAAQAFABgbABIg1ABQAJACAqgBQAmgBACABQAsAAAggBQAbgBAmABIAMgBIAFAAIgLABQgIAAAQABIAXAAIgqACQgYABAIgCgALKIaQAAgBAMAAQgEABATABIgPAAIgMgBgAqlIZIAagBIAdgBQAFABgYABQgWABAEABgAsQIWICSgDIAaACQghgBgwABIg5ABIgiAAgADIIJQACgBgKAAIAdAAIAFgBIgKACIgEAAIARAAIgXABQgJAAADgBgABpIJIADAAQAGgChBAAQAJgCBWAAIgGABQAngBADACIALABIgfABQgBAAgBAAQAAAAABAAQAAAAACAAQABAAACAAIg7AAgARkIEIAAAAIAAAAgAGpH+QAdgBgSgCQgWgBAPgBQgDABAMAAIAjACQgaAAAJABQAEABgMAAIgXAAgAKEH6IgLAAQAZgCAvABQADABgsABIhFABgAVuA/IAAjKIABAIQAAiLgBgpQAAhKACAbIAAgPIAAAJIABgKQAAABAAABQAAABAAAAQAAABABAAQAAAAAAAAQACAFAAAlQgBAMgBgVIAAgCQAAgYgBAGQAAAQABAEQAAAbgBgDQABAKAAAvQAAAcgBgGQgBgFAAAOIACATIAAA3QAAAmADgDQACgCABAvQgBgJgCAWIgBA2QgChDABghQgBAOAAgfQgBgogBAMQACAfgBAyIAAAKIAAAjIABA1QAAAagBgLIAAAigA2ZilQAAgQABALQAAANABgMQAAAwABgMIgBglQABgCAAAIQAAABABAAQAAABAAgBQAAAAAAgBQAAgBAAgCIAAAoQABAZABABQAAgsABAYIABAmIAAAPIgBgiQgBgJAAAaIgBApIAAg3IgBgOQgBAiABBSQgDg/gBhpgA2Dh7QAAgagCAFIABg0IACA1IABA6QgBgGgBgggAV7j9IABASIgBgjIgBgfIAEBUQAAgDgBAJIAAADIAAAiIgBgJIABAXIAAAeQgBgQAAANIgBAVgA2RiWIgBgiIAAAXQAAAYgCglIgBhQQgCA4gBgYQgBhRADgTIADA7IgBgjIADgBIAAgKIABAaIgBBQIACBHIgBACIgBgUgA2TlgQgCgHAAguIABANQABgXgBgkIAAADIAAhHQABAHAAAgQAAAfABAGIAAgoIABA7QAAgJgBAJIAAAdIACAJIAAAgQAAgBAAgBQAAAAAAAAQAAABAAABQgBABAAADIAAAWIAAARQAAghgCgIgAWZnlQgBgMAAAMIAAg2IgvAAQAGgBgBgBIAsAAIAABKIgBgSgAJlnwIgFgEQgCgCASgBQAzgCB9AAIgaACIgiABQAEABgEAAIgUABQgDAAgBAAQgCAAAAAAQAAAAABAAQAAAAACAAIANgBIgoAAQgSABAEABQAiABgPAAQgSAAAQABQgCABgjAAIgrAAgAOfn6IhGAAQAHgCA+AAQBVABAXgCQAYACATgBQgDgDCEABQAJABgRAAQgQABAKAAIAqgBQAXAAAXAAIgHABQA8gBgjADIhKAAIhPACQADgBgOAAIgLgBIiYAAIgBAAIgTABQgHABgRABgAQRoXIACgBQgfADghgCIAsgCQg7AAhVACIACgBIhwACIABgCQgUACgPgBQgVgBgeABIAJgBIgYAAIAHgCIg/ACQgiACgfgBQACgBgJAAQgIgBADgBQAZABAdgBQAGgBgeAAQgWAAARAAIhDgCIHZAAIAEAAIB1AAQgEgBA5AAQgQAAADABIApAAQB1ABgVgDIBNABIAEABIgBAAIgHABIgTABQgFAAARAAQhbAAABABIAlACIiAABIA/gCQAlgBghgBIgoACQgLAAAKAAIASgBIgdgBIgjAAQAmABgbABIhuADIAKgBgADfoYIgJgBQBRABAdgCQgQgBg3AAIhRABIAeABIgfABIgHAAIAAAAIiJAAQARAAgSgCQgOgBAXAAIFRgBIAdABIArABIgQgBIAzgBIgEABIAqgBQALABgsABIgSABIAZABIkUABQALAAgDgBgAl6oXIARgBQAIABARAAIgPgCQADgBAagBIgEAEIgdAAIgXAAgAmboYIgpAAIAGgBIBHAAIguACgAhVoZIAZAAIgRABQgFAAgDgBgAVaoeIAUABIgnAAg");
	this.shape_7.setTransform(263.7,55.9,1.829,1.919);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFFF","#CCCCCC"],[0,0.698],30.7,47,30.7,-235.9).s().p("AUGIIIAwgDIBCAAIABAAIAAABIgBAAQhdAAALABIAFABgANoIIIgfgBQAOAAgIgCQgdABAGABIANABIhQAAIALgBIgbgBIAoAAQgKgBgVAAIgiABQgMAAAigBIA5gCIAsAAIAWAAQAJgCBbAAQAgAAAWACQATAAAeAAIgVgBICFAAQAEABgQAAIgcgBIAcACIglAAIAAAAIAAAAIgFABIAWAAIgcABIAGAAIgZABQgdAAgQgCIAaAAQgdgBghABIAZAAIACABIhOABIgpgBQgOgCAQAAQgsAAgXABQAUAAADABQAEACAcgCQAHABgCABgADbIIIAKgCIgEABIgdAAQAKABgDAAIgoAAIAfgBIgKgBQgEgBgmAAIAGAAQhXAAgJABQBBABgFABIhgAAIgfgBIgcAAIgGABIiOAAIAZgBIgjgBQgfgBAagBIAPgBQANgCAcABIgIAAIAuABQAEABgRAAIgdABIAvgBIgEABIAwAAQAUgCg7ABIAfgBQB3gCApADQAYAAAEAAIAFgCQAZgCAuACQAcgCABgBIAoAAQAWgChQAAQgLgBAQABQAQgBgGAAIgvABQgbABABgCQAaAAAKAAIAegBIABABQABgCBOAAQAiACgpABIAaAAQgKAAgCABIgPABIA/AAQgUACAdABIAmABIhBgBIgggBIgVAAIglgBIgaADQA+AAgFABIAngBIhKADQAnACA/gCQA/gBAdABIgKAAQBSAAAqABIALABgAmGIIIAfgBQAhAAgCgCQAuABABABIgIABgAnvIIIgIgBIAjgBIAlAAQAZAAADABIgaAAIAFABgAxCIIIApgCIgegBIBFgCIgmABQgWABgWAAQADgCAEgBIAmgCQAWABgFAAQgHABAIAAQAPgBAUABQATABAQgBIAdAAIAKACQgSAAAHABQAGABgZgBQAUACANgCQANgBAPABIAFABQBcACArgBQgUgBAQgBIgKAAQgYAAAAgBIBUgBIgaAAIBUgEIA9ACIglACIgOgBIgVABQBMABALACQhMAAhWACgAV5IGIABAAIAAAAIgBABgAScIFIAaAAQgBAAgBAAQAAABAAAAQABAAABAAQABAAACAAIgiAAIAFgBgAWEIGIAAgBIABAAIAAABgAItIFQgIgBAkgBIBFgCQgOgBAfgBQAgAAgTgCIgUABIgQAAIAFgBIgaABQg0ABAGgCQAGgBgvgBIAUAAQAOgBgEgBIA4ABIABgCQhWAAg5AFQAjgCgEACQgFACAOAAQgPABgQgBIgTAAIgOABQgHgChGgBQg7gCAQgCQgWgBhTABIiLABIAXgBQgzgCgbACIgyAEQAsgChngBIiCADIgQgCQgLgCgXAAIiFABQgYAAgDABQgEAAAZABIgnABIgBAAIhPABIhlACQAJAAgXgCQgPAAApgBQgNABALAAIASABQAaAAAkgCQgGAAAEgBIAPgCIh5ABQhVAAgHACIjgAAIAIABIhAgBIAPAAIgrgCQgMgBAqAAIAJAAQAXgBgVAAQgZgBAPAAIAhAAIg9AAQgdAAgRgBQg6ADhAgBIgQAAQgZgBAOgBQg8AAgIABQAOgBAcABQgWACgYAAIgBgBIgXACQgKABgfABIgtAAIAAgCIAtgDIgtABIAAgWIABAHIgBgzIgEgkIAAhAIABAOIAAgoIABAhQABgQgBgWIAAAIQgDhSAAA0IAAgnIABggQABAVABgNIgBg2QAAAPgBAEIgBgoIAAhAIABAIQgChqgCgdIAAANQABAagBAMQAAgOgBAKIgBAEIABAiQAAA7gBgCIgBgiIAAAkIAAgIQACA1AAB4QAAgVgBAbQAAAcgBgQIAAgcQgBgEAAAuQABA2ABgXIgBAqIAAAJIgBgBIgDhnIAAgVIAAsBQAwAABGgCQA/gBApAAQgCABgBAAQgBAAgBAAQAAAAAAAAQAAAAABAAIAHABIBIgCIAoAAIgNACIgsABIDIgCQB3gCBRABIACABIAngBIgLAAIBVABIBIAAQACABgTAAIBPgBIBegBQgQABASAAIAjABIEcgCQgMACA4gBQA+AAAEABQA0ABADgCIgYAAQgPAAADgBQBMAAAEgBIAmABQACgBAKgBIAjAAIAGAAIAfAAIgXACIAygBQAGAAgRABIgjACIApABQBogEBCABIgRAAQgHABAKABIBjgCIgGABQA/gCApACIgDABIAjgBQAsgCAeACIA0ACIgKABQAbACBygCIghgCIgaABQgNABgagBQADAAAggBIAogCQAlAAAJADICxAAIAsgCQAfgBAoABIgBAAIAqAAQgLAAANgBQANgBgPAAQAngBAKAEQAKgBA2ABIAAAHQiAAFhNACQgDgBh6AAQAOgCAkgBIgzAAIgKAEQg8AAAagCQAggBgWgBIgyACQAhAAgFACQgGACAsAAQgRADhMgCQgSgBAVAAQAfgBADgBIgdABIgPABQhyACghgDIg9ACQgCACAgAAIAlABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAXABQgSgBA0gCIAjABIgUAAIAoAAQAcgBAOABIgDABIBegCIgTABQArgCB4ACIgLgBQAYAAAPABQAOABgLAAIBNAAQA+ABAXgBIAJgBIAHB7IACgQIAAAAIgBguQABAQABgDQABgEAAgeIgBgoIAEgBIACA3IAAgiIAAA+IgBAsQAAABAAAAQgBAAAAgBQAAAAAAgBQAAgCAAgCIAAAoIAAACIAEBlIgBBdIABAHIACAXIAABeQgBAVAAA5QABAygCALIgBi0QABgVAAAfIABApIAAgqIgBglQAAglgCAMIgBELIgOhTQAAAvACAEIADAGIABAwIgBgJIABAgIABAcQABAiAAglIACAlQABATgBAqIgBgDQgBgGAAgaIgCAqIAAhGIgDgVIgCgTIABASIABAaIgBAKIgBgTQABAYgBAYQgBAYABAUIACgGIACgYQABAXgBAWQgBAWgCgDIACAGIAAApQACgegBgtQAAABABABQAAAAAAAAQAAABABgBQAAAAAAgBQABgBAAAbQAAAVgBgRQABAugCBIIgBAAIgBAAIgIgBIgKACIgsAAIAUABQhBAChtgBQACgBApgBQAdAAgagCQgxAEgvgBQALgBgOgBIgSgBIhBADQgzgBguABIAmAAQgYABgpAAIg7gBIAMAAQg3gBg4ACIABgCQgDABgnABIgcABIBJAAQAqABA0gBIhqAFQgVAAgDgBQgRACgYABIgIgBQgjAAgeACIgvABIgQAAgAG3H7QATABgeABQAmABgHgBQgIgBAZAAIgjgCQgMgBAEAAQgPAAAVACgAJ8H6IAMAAIgyACIBGgBQAsgBgDgBIgdAAQgbAAgRABgAV1BOIgBgiQACALgBgZIAAg1IgBgjIAAgKQABgzgBgeQABgNAAApQAAAfABgOQgBAgACBEIACg2QABgWABAIQgBgugCACQgCADgBgmIABg4IgDgTQAAgOABAFQABAHAAgcQAAgvgBgKQACADAAgbQgCgFAAgPQACgHAAAZIAAACQAAAUABgLQAAgmgBgFQgBABAAAAQAAgBAAAAQgBAAAAgBQAAgBAAgBIAAAKIgBgKIAAAQQgBgbAABKQABApAACLIgBgIIAADJIADAQgA19hVIgCg7IgBg0IgBAzQABgFABAbQAAAgACAGIAAAAgAV+hwIABgVQABgOAAARIAAgeIgBgXIABAIIABgiIAAgCQAAgJABADIgFhUIABAeIABAjIgBgSgAJzn4QgRACABACIAFADQBNABADgCQgQAAATAAQAOgBghAAQgFgBASgBIApAAIgNABQgCAAgBAAQgBAAABAAQAAAAABAAQACAAACAAIAUgBQAFAAgFgBIAigCIAagCIgvAAQhYAAgpACgAOjn4QAQAAAHgCIATgBIABAAICYAAIAMABQAOABgDAAIBPgCIBKAAQAjgDg8ACIAGgBQgWgBgYABIgqABQgKgBARAAQAQgBgJAAQiDgBADADQgUAAgYgBQgXABhUAAQg+AAgIACIBHgBgAWEH7IAAgBIACAAIgBABgAV4H7IAAgBIABAAIAAABgAV4H6IAAAAIABAAIABAAIAAAAgA2CGVIAAgVIABASQABgDAAAXIABAgIgBAbgAWCGsIgCgkIAAgjQAAgaABAIIACAkQABAOgCAUQABAEABgWQAAAHABABIAAAnIgBARQgBgBgBgagAWFCvIABgQIAAAYgAV9n7IAAgCIADAAIAAAFgAV7n9IgGgGIAIAAIAAAGIgBAAIgBAAgAV9n9gAWBoDIAAAAIABAAIAAABgA2GoCIAAgFIBZAAIAdABIh2AEIAAAAg");
	this.shape_8.setTransform(263,56,1.829,1.919);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(102));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(89.5,64.1,1059.9,690.8);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
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

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;