// Garden Gnome Software - Skin
// Pano2VR 5.2.3/15990
// Filename: ask-simplex.ggsk
// Generated Вт июн 26 13:35:47 2018

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	ggSkinVars['gallery_show_hide'] = true;
	ggSkinVars['gallery_pictures'] = 0;
	ggSkinVars['gallery_show_hide_1'] = false;
	ggSkinVars['gallery_pictures_1'] = 0;
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/infooff0__o.png';
		preLoadImg.src=basePath + 'images/infoon0__o.png';
		preLoadImg.src=basePath + 'images/fullscreen0__o.png';
		preLoadImg.src=basePath + 'images/infooff__o.png';
		preLoadImg.src=basePath + 'images/infoon__o.png';
		preLoadImg.src=basePath + 'images/autorotate__o.png';
		preLoadImg.src=basePath + 'images/zoomout__o.png';
		preLoadImg.src=basePath + 'images/zoomin__o.png';
		preLoadImg.src=basePath + 'images/up__o.png';
		preLoadImg.src=basePath + 'images/down__o.png';
		preLoadImg.src=basePath + 'images/right__o.png';
		preLoadImg.src=basePath + 'images/left__o.png';
		preLoadImg.src=basePath + 'images/fullscreen__o.png';
		preLoadImg.src=basePath + 'images/gallery_back8__o.png';
		preLoadImg.src=basePath + 'images/gallery_forward8__o.png';
		preLoadImg.src=basePath + 'images/gallery_pause8__o.png';
		preLoadImg.src=basePath + 'images/gallery_play8__o.png';
		preLoadImg.src=basePath + 'images/gallery_back7__o.png';
		preLoadImg.src=basePath + 'images/gallery_forward7__o.png';
		preLoadImg.src=basePath + 'images/gallery_pause7__o.png';
		preLoadImg.src=basePath + 'images/gallery_play7__o.png';
		preLoadImg.src=basePath + 'images/gallery_back6__o.png';
		preLoadImg.src=basePath + 'images/gallery_forward6__o.png';
		preLoadImg.src=basePath + 'images/gallery_pause6__o.png';
		preLoadImg.src=basePath + 'images/gallery_play6__o.png';
		preLoadImg.src=basePath + 'images/gallery_back5__o.png';
		preLoadImg.src=basePath + 'images/gallery_forward5__o.png';
		preLoadImg.src=basePath + 'images/gallery_pause5__o.png';
		preLoadImg.src=basePath + 'images/gallery_play5__o.png';
		preLoadImg.src=basePath + 'images/gallery_back4__o.png';
		preLoadImg.src=basePath + 'images/gallery_forward4__o.png';
		preLoadImg.src=basePath + 'images/gallery_pause4__o.png';
		preLoadImg.src=basePath + 'images/gallery_play4__o.png';
		preLoadImg.src=basePath + 'images/gallery_back3__o.png';
		preLoadImg.src=basePath + 'images/gallery_forward3__o.png';
		preLoadImg.src=basePath + 'images/gallery_pause3__o.png';
		preLoadImg.src=basePath + 'images/gallery_play3__o.png';
		preLoadImg.src=basePath + 'images/gallery_back2__o.png';
		preLoadImg.src=basePath + 'images/gallery_forward2__o.png';
		preLoadImg.src=basePath + 'images/gallery_pause2__o.png';
		preLoadImg.src=basePath + 'images/gallery_play2__o.png';
		preLoadImg.src=basePath + 'images/gallery_back1__o.png';
		preLoadImg.src=basePath + 'images/gallery_forward1__o.png';
		preLoadImg.src=basePath + 'images/gallery_pause1__o.png';
		preLoadImg.src=basePath + 'images/gallery_play1__o.png';
		preLoadImg.src=basePath + 'images/gallery_back0__o.png';
		preLoadImg.src=basePath + 'images/gallery_forward0__o.png';
		preLoadImg.src=basePath + 'images/gallery_pause0__o.png';
		preLoadImg.src=basePath + 'images/gallery_play0__o.png';
		preLoadImg.src=basePath + 'images/gallery_back__o.png';
		preLoadImg.src=basePath + 'images/gallery_forward__o.png';
		preLoadImg.src=basePath + 'images/gallery_pause__o.png';
		preLoadImg.src=basePath + 'images/gallery_play__o.png';
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggLeft=-221;
		this._loading.ggTop=-137;
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className='ggskin ggskin_container ';
		this._loading.ggType='container';
		hs ='';
		hs+='height : 57px;';
		hs+='left : -221px;';
		hs+='position : absolute;';
		hs+='top : -137px;';
		hs+='visibility : inherit;';
		hs+='width : 485px;';
		hs+='pointer-events:none;';
		this._loading.setAttribute('style',hs);
		this._loading.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		me._loading.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text ';
		this._loadingtext.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 33px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		hs+='pointer-events:auto;';
		this._loadingtext.setAttribute('style',hs);
		this._loadingtext.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext__text.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs=(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		this._loadingtext.appendChild(this._loadingtext__text);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingtext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId="loadingbar";
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		this._loadingbar.className='ggskin ggskin_rectangle ';
		this._loadingbar.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 6px;';
		hs+='left : 29px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : inherit;';
		hs+='width : 451px;';
		hs+='pointer-events:auto;';
		this._loadingbar.setAttribute('style',hs);
		this._loadingbar.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._controllerm=document.createElement('div');
		this._controllerm.ggId="controller-m";
		this._controllerm.ggTop=-63;
		this._controllerm.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controllerm.ggVisible=false;
		this._controllerm.className='ggskin ggskin_container ';
		this._controllerm.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : -63px;';
		hs+='visibility : hidden;';
		hs+='width : 286px;';
		hs+='pointer-events:none;';
		this._controllerm.setAttribute('style',hs);
		this._controllerm.style[domTransform + 'Origin']='50% 50%';
		me._controllerm.ggIsActive=function() {
			return false;
		}
		me._controllerm.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._controllerm.ggCurrentLogicStateVisible = -1;
		this._controllerm.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true) && 
				(window.location.hostname != 'start')
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controllerm.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controllerm.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controllerm.style[domTransition]='';
				if (me._controllerm.ggCurrentLogicStateVisible == 0) {
					me._controllerm.style.visibility=(Number(me._controllerm.style.opacity)>0||!me._controllerm.style.opacity)?'inherit':'hidden';
					me._controllerm.ggVisible=true;
				}
				else {
					me._controllerm.style.visibility="hidden";
					me._controllerm.ggVisible=false;
				}
			}
		}
		this._controllerm.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._infooff0=document.createElement('div');
		this._infooff0__img=document.createElement('img');
		this._infooff0__img.className='ggskin ggskin_button';
		this._infooff0__img.setAttribute('src',basePath + 'images/infooff0.png');
		this._infooff0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._infooff0__img.className='ggskin ggskin_button';
		this._infooff0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._infooff0__img);
		this._infooff0.appendChild(this._infooff0__img);
		this._infooff0.ggId="info-off";
		this._infooff0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._infooff0.ggVisible=false;
		this._infooff0.className='ggskin ggskin_button ';
		this._infooff0.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._infooff0.setAttribute('style',hs);
		this._infooff0.style[domTransform + 'Origin']='50% 50%';
		me._infooff0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._infooff0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._infooff0.onclick=function (e) {
			var list=me.findElements("hstext",false);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility=(Number(e.style.opacity)>0||!e.style.opacity)?'inherit':'hidden';
				e.ggVisible=true;
			}
			me._infoon0.style[domTransition]='none';
			me._infoon0.style.visibility=(Number(me._infoon0.style.opacity)>0||!me._infoon0.style.opacity)?'inherit':'hidden';
			me._infoon0.ggVisible=true;
			me._infooff0.style[domTransition]='none';
			me._infooff0.style.visibility='hidden';
			me._infooff0.ggVisible=false;
		}
		this._infooff0.onmouseover=function (e) {
			me._tt_info2.style[domTransition]='none';
			me._tt_info2.style.visibility=(Number(me._tt_info2.style.opacity)>0||!me._tt_info2.style.opacity)?'inherit':'hidden';
			me._tt_info2.ggVisible=true;
			me._infooff0__img.src=basePath + 'images/infooff0__o.png';
		}
		this._infooff0.onmouseout=function (e) {
			me._tt_info2.style[domTransition]='none';
			me._tt_info2.style.visibility='hidden';
			me._tt_info2.ggVisible=false;
			me._infooff0__img.src=basePath + 'images/infooff0.png';
		}
		me._infooff0.ggCurrentLogicStateVisible = -1;
		this._infooff0.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.tags.indexOf("start") == -1)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._infooff0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._infooff0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._infooff0.style[domTransition]='';
				if (me._infooff0.ggCurrentLogicStateVisible == 0) {
					me._infooff0.style.visibility="hidden";
					me._infooff0.ggVisible=false;
				}
				else {
					me._infooff0.style.visibility="hidden";
					me._infooff0.ggVisible=false;
				}
			}
		}
		this._infooff0.ggUpdatePosition=function (useTransition) {
		}
		this._infooff0.ggNodeChange=function () {
			me._infooff0.ggUpdateConditionNodeChange();
		}
		this._tt_info2=document.createElement('div');
		this._tt_info2__text=document.createElement('div');
		this._tt_info2.className='ggskin ggskin_textdiv';
		this._tt_info2.ggTextDiv=this._tt_info2__text;
		this._tt_info2.ggId="tt_info";
		this._tt_info2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_info2.ggVisible=false;
		this._tt_info2.className='ggskin ggskin_text ';
		this._tt_info2.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -52px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_info2.setAttribute('style',hs);
		this._tt_info2.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_info2__text.setAttribute('style',hs);
		this._tt_info2__text.innerHTML="\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c";
		this._tt_info2.appendChild(this._tt_info2__text);
		me._tt_info2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_info2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_info2.ggUpdatePosition=function (useTransition) {
		}
		this._tt_info_white2=document.createElement('div');
		this._tt_info_white2__text=document.createElement('div');
		this._tt_info_white2.className='ggskin ggskin_textdiv';
		this._tt_info_white2.ggTextDiv=this._tt_info_white2__text;
		this._tt_info_white2.ggId="tt_info_white";
		this._tt_info_white2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_info_white2.ggVisible=true;
		this._tt_info_white2.className='ggskin ggskin_text ';
		this._tt_info_white2.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_info_white2.setAttribute('style',hs);
		this._tt_info_white2.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_info_white2__text.setAttribute('style',hs);
		this._tt_info_white2__text.innerHTML="\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c";
		this._tt_info_white2.appendChild(this._tt_info_white2__text);
		me._tt_info_white2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_info_white2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_info_white2.ggUpdatePosition=function (useTransition) {
		}
		this._tt_info2.appendChild(this._tt_info_white2);
		this._infooff0.appendChild(this._tt_info2);
		this._controllerm.appendChild(this._infooff0);
		this._infoon0=document.createElement('div');
		this._infoon0__img=document.createElement('img');
		this._infoon0__img.className='ggskin ggskin_button';
		this._infoon0__img.setAttribute('src',basePath + 'images/infoon0.png');
		this._infoon0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._infoon0__img.className='ggskin ggskin_button';
		this._infoon0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._infoon0__img);
		this._infoon0.appendChild(this._infoon0__img);
		this._infoon0.ggId="info-on";
		this._infoon0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._infoon0.ggVisible=false;
		this._infoon0.className='ggskin ggskin_button ';
		this._infoon0.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._infoon0.setAttribute('style',hs);
		this._infoon0.style[domTransform + 'Origin']='50% 50%';
		me._infoon0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._infoon0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._infoon0.onclick=function (e) {
			var list=me.findElements("hstext",false);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me._infoon0.style[domTransition]='none';
			me._infoon0.style.visibility='hidden';
			me._infoon0.ggVisible=false;
			me._infooff0.style[domTransition]='none';
			me._infooff0.style.visibility=(Number(me._infooff0.style.opacity)>0||!me._infooff0.style.opacity)?'inherit':'hidden';
			me._infooff0.ggVisible=true;
		}
		this._infoon0.onmouseover=function (e) {
			me._tt_info1.style[domTransition]='none';
			me._tt_info1.style.visibility=(Number(me._tt_info1.style.opacity)>0||!me._tt_info1.style.opacity)?'inherit':'hidden';
			me._tt_info1.ggVisible=true;
			me._infoon0__img.src=basePath + 'images/infoon0__o.png';
		}
		this._infoon0.onmouseout=function (e) {
			me._tt_info1.style[domTransition]='none';
			me._tt_info1.style.visibility='hidden';
			me._tt_info1.ggVisible=false;
			me._infoon0__img.src=basePath + 'images/infoon0.png';
		}
		me._infoon0.ggCurrentLogicStateVisible = -1;
		this._infoon0.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.tags.indexOf("start") == -1)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._infoon0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._infoon0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._infoon0.style[domTransition]='';
				if (me._infoon0.ggCurrentLogicStateVisible == 0) {
					me._infoon0.style.visibility=(Number(me._infoon0.style.opacity)>0||!me._infoon0.style.opacity)?'inherit':'hidden';
					me._infoon0.ggVisible=true;
				}
				else {
					me._infoon0.style.visibility="hidden";
					me._infoon0.ggVisible=false;
				}
			}
		}
		this._infoon0.ggUpdatePosition=function (useTransition) {
		}
		this._infoon0.ggNodeChange=function () {
			me._infoon0.ggUpdateConditionNodeChange();
		}
		this._tt_info1=document.createElement('div');
		this._tt_info1__text=document.createElement('div');
		this._tt_info1.className='ggskin ggskin_textdiv';
		this._tt_info1.ggTextDiv=this._tt_info1__text;
		this._tt_info1.ggId="tt_info";
		this._tt_info1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_info1.ggVisible=false;
		this._tt_info1.className='ggskin ggskin_text ';
		this._tt_info1.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -52px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_info1.setAttribute('style',hs);
		this._tt_info1.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_info1__text.setAttribute('style',hs);
		this._tt_info1__text.innerHTML="\u0421\u043a\u0440\u044b\u0442\u044c";
		this._tt_info1.appendChild(this._tt_info1__text);
		me._tt_info1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_info1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_info1.ggUpdatePosition=function (useTransition) {
		}
		this._tt_info_white1=document.createElement('div');
		this._tt_info_white1__text=document.createElement('div');
		this._tt_info_white1.className='ggskin ggskin_textdiv';
		this._tt_info_white1.ggTextDiv=this._tt_info_white1__text;
		this._tt_info_white1.ggId="tt_info_white";
		this._tt_info_white1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_info_white1.ggVisible=true;
		this._tt_info_white1.className='ggskin ggskin_text ';
		this._tt_info_white1.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_info_white1.setAttribute('style',hs);
		this._tt_info_white1.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_info_white1__text.setAttribute('style',hs);
		this._tt_info_white1__text.innerHTML="\u0421\u043a\u0440\u044b\u0442\u044c";
		this._tt_info_white1.appendChild(this._tt_info_white1__text);
		me._tt_info_white1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_info_white1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_info_white1.ggUpdatePosition=function (useTransition) {
		}
		this._tt_info1.appendChild(this._tt_info_white1);
		this._infoon0.appendChild(this._tt_info1);
		this._controllerm.appendChild(this._infoon0);
		this._fullscreen0=document.createElement('div');
		this._fullscreen0__img=document.createElement('img');
		this._fullscreen0__img.className='ggskin ggskin_button';
		this._fullscreen0__img.setAttribute('src',basePath + 'images/fullscreen0.png');
		this._fullscreen0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fullscreen0__img.className='ggskin ggskin_button';
		this._fullscreen0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fullscreen0__img);
		this._fullscreen0.appendChild(this._fullscreen0__img);
		this._fullscreen0.ggId="fullscreen";
		this._fullscreen0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen0.ggVisible=true;
		this._fullscreen0.className='ggskin ggskin_button ';
		this._fullscreen0.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 51px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._fullscreen0.setAttribute('style',hs);
		this._fullscreen0.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreen0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscreen0.onclick=function (e) {
			me.player.toggleFullscreen();
		}
		this._fullscreen0.onmouseover=function (e) {
			me._tt_fullscreen0.style[domTransition]='none';
			me._tt_fullscreen0.style.visibility=(Number(me._tt_fullscreen0.style.opacity)>0||!me._tt_fullscreen0.style.opacity)?'inherit':'hidden';
			me._tt_fullscreen0.ggVisible=true;
			me._fullscreen0__img.src=basePath + 'images/fullscreen0__o.png';
		}
		this._fullscreen0.onmouseout=function (e) {
			me._tt_fullscreen0.style[domTransition]='none';
			me._tt_fullscreen0.style.visibility='hidden';
			me._tt_fullscreen0.ggVisible=false;
			me._fullscreen0__img.src=basePath + 'images/fullscreen0.png';
		}
		this._fullscreen0.ggUpdatePosition=function (useTransition) {
		}
		this._tt_fullscreen0=document.createElement('div');
		this._tt_fullscreen0__text=document.createElement('div');
		this._tt_fullscreen0.className='ggskin ggskin_textdiv';
		this._tt_fullscreen0.ggTextDiv=this._tt_fullscreen0__text;
		this._tt_fullscreen0.ggId="tt_fullscreen";
		this._tt_fullscreen0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen0.ggVisible=false;
		this._tt_fullscreen0.className='ggskin ggskin_text ';
		this._tt_fullscreen0.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_fullscreen0.setAttribute('style',hs);
		this._tt_fullscreen0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen0__text.setAttribute('style',hs);
		this._tt_fullscreen0__text.innerHTML="\u041f\u043e\u043b\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d";
		this._tt_fullscreen0.appendChild(this._tt_fullscreen0__text);
		me._tt_fullscreen0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_fullscreen0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_fullscreen0.ggUpdatePosition=function (useTransition) {
		}
		this._tt_fullscreen_white0=document.createElement('div');
		this._tt_fullscreen_white0__text=document.createElement('div');
		this._tt_fullscreen_white0.className='ggskin ggskin_textdiv';
		this._tt_fullscreen_white0.ggTextDiv=this._tt_fullscreen_white0__text;
		this._tt_fullscreen_white0.ggId="tt_fullscreen_white";
		this._tt_fullscreen_white0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen_white0.ggVisible=true;
		this._tt_fullscreen_white0.className='ggskin ggskin_text ';
		this._tt_fullscreen_white0.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_fullscreen_white0.setAttribute('style',hs);
		this._tt_fullscreen_white0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen_white0__text.setAttribute('style',hs);
		this._tt_fullscreen_white0__text.innerHTML="\u041f\u043e\u043b\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d";
		this._tt_fullscreen_white0.appendChild(this._tt_fullscreen_white0__text);
		me._tt_fullscreen_white0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_fullscreen_white0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_fullscreen_white0.ggUpdatePosition=function (useTransition) {
		}
		this._tt_fullscreen0.appendChild(this._tt_fullscreen_white0);
		this._fullscreen0.appendChild(this._tt_fullscreen0);
		this._controllerm.appendChild(this._fullscreen0);
		this.divSkin.appendChild(this._controllerm);
		this._controller=document.createElement('div');
		this._controller.ggId="controller";
		this._controller.ggTop=-63;
		this._controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller.ggVisible=true;
		this._controller.className='ggskin ggskin_container ';
		this._controller.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : -63px;';
		hs+='visibility : inherit;';
		hs+='width : 286px;';
		hs+='pointer-events:none;';
		this._controller.setAttribute('style',hs);
		this._controller.style[domTransform + 'Origin']='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		me._controller.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._controller.ggCurrentLogicStateVisible = -1;
		this._controller.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true) || 
				(window.location.hostname == 'start')
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller.style[domTransition]='';
				if (me._controller.ggCurrentLogicStateVisible == 0) {
					me._controller.style.visibility="hidden";
					me._controller.ggVisible=false;
				}
				else {
					me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
					me._controller.ggVisible=true;
				}
			}
		}
		this._controller.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._infooff=document.createElement('div');
		this._infooff__img=document.createElement('img');
		this._infooff__img.className='ggskin ggskin_button';
		this._infooff__img.setAttribute('src',basePath + 'images/infooff.png');
		this._infooff__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._infooff__img.className='ggskin ggskin_button';
		this._infooff__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._infooff__img);
		this._infooff.appendChild(this._infooff__img);
		this._infooff.ggId="info-off";
		this._infooff.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._infooff.ggVisible=false;
		this._infooff.className='ggskin ggskin_button ';
		this._infooff.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 198px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._infooff.setAttribute('style',hs);
		this._infooff.style[domTransform + 'Origin']='50% 50%';
		me._infooff.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._infooff.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._infooff.onclick=function (e) {
			var list=me.findElements("hstext",false);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility=(Number(e.style.opacity)>0||!e.style.opacity)?'inherit':'hidden';
				e.ggVisible=true;
			}
			me._infoon.style[domTransition]='none';
			me._infoon.style.visibility=(Number(me._infoon.style.opacity)>0||!me._infoon.style.opacity)?'inherit':'hidden';
			me._infoon.ggVisible=true;
			me._infooff.style[domTransition]='none';
			me._infooff.style.visibility='hidden';
			me._infooff.ggVisible=false;
		}
		this._infooff.onmouseover=function (e) {
			me._tt_info0.style[domTransition]='none';
			me._tt_info0.style.visibility=(Number(me._tt_info0.style.opacity)>0||!me._tt_info0.style.opacity)?'inherit':'hidden';
			me._tt_info0.ggVisible=true;
			me._infooff__img.src=basePath + 'images/infooff__o.png';
		}
		this._infooff.onmouseout=function (e) {
			me._tt_info0.style[domTransition]='none';
			me._tt_info0.style.visibility='hidden';
			me._tt_info0.ggVisible=false;
			me._infooff__img.src=basePath + 'images/infooff.png';
		}
		me._infooff.ggCurrentLogicStateVisible = -1;
		this._infooff.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.tags.indexOf("start") == -1)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._infooff.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._infooff.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._infooff.style[domTransition]='';
				if (me._infooff.ggCurrentLogicStateVisible == 0) {
					me._infooff.style.visibility="hidden";
					me._infooff.ggVisible=false;
				}
				else {
					me._infooff.style.visibility="hidden";
					me._infooff.ggVisible=false;
				}
			}
		}
		this._infooff.ggUpdatePosition=function (useTransition) {
		}
		this._infooff.ggNodeChange=function () {
			me._infooff.ggUpdateConditionNodeChange();
		}
		this._tt_info0=document.createElement('div');
		this._tt_info0__text=document.createElement('div');
		this._tt_info0.className='ggskin ggskin_textdiv';
		this._tt_info0.ggTextDiv=this._tt_info0__text;
		this._tt_info0.ggId="tt_info";
		this._tt_info0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_info0.ggVisible=false;
		this._tt_info0.className='ggskin ggskin_text ';
		this._tt_info0.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -52px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_info0.setAttribute('style',hs);
		this._tt_info0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_info0__text.setAttribute('style',hs);
		this._tt_info0__text.innerHTML="\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c";
		this._tt_info0.appendChild(this._tt_info0__text);
		me._tt_info0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_info0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_info0.ggUpdatePosition=function (useTransition) {
		}
		this._tt_info_white0=document.createElement('div');
		this._tt_info_white0__text=document.createElement('div');
		this._tt_info_white0.className='ggskin ggskin_textdiv';
		this._tt_info_white0.ggTextDiv=this._tt_info_white0__text;
		this._tt_info_white0.ggId="tt_info_white";
		this._tt_info_white0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_info_white0.ggVisible=true;
		this._tt_info_white0.className='ggskin ggskin_text ';
		this._tt_info_white0.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_info_white0.setAttribute('style',hs);
		this._tt_info_white0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_info_white0__text.setAttribute('style',hs);
		this._tt_info_white0__text.innerHTML="\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c";
		this._tt_info_white0.appendChild(this._tt_info_white0__text);
		me._tt_info_white0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_info_white0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_info_white0.ggUpdatePosition=function (useTransition) {
		}
		this._tt_info0.appendChild(this._tt_info_white0);
		this._infooff.appendChild(this._tt_info0);
		this._controller.appendChild(this._infooff);
		this._infoon=document.createElement('div');
		this._infoon__img=document.createElement('img');
		this._infoon__img.className='ggskin ggskin_button';
		this._infoon__img.setAttribute('src',basePath + 'images/infoon.png');
		this._infoon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._infoon__img.className='ggskin ggskin_button';
		this._infoon__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._infoon__img);
		this._infoon.appendChild(this._infoon__img);
		this._infoon.ggId="info-on";
		this._infoon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._infoon.ggVisible=false;
		this._infoon.className='ggskin ggskin_button ';
		this._infoon.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 198px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._infoon.setAttribute('style',hs);
		this._infoon.style[domTransform + 'Origin']='50% 50%';
		me._infoon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._infoon.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._infoon.onclick=function (e) {
			var list=me.findElements("hstext",false);
			while(list.length>0) {
				var e=list.pop();
				e.style[domTransition]='none';
				e.style.visibility='hidden';
				e.ggVisible=false;
			}
			me._infoon.style[domTransition]='none';
			me._infoon.style.visibility='hidden';
			me._infoon.ggVisible=false;
			me._infooff.style[domTransition]='none';
			me._infooff.style.visibility=(Number(me._infooff.style.opacity)>0||!me._infooff.style.opacity)?'inherit':'hidden';
			me._infooff.ggVisible=true;
		}
		this._infoon.onmouseover=function (e) {
			me._tt_info.style[domTransition]='none';
			me._tt_info.style.visibility=(Number(me._tt_info.style.opacity)>0||!me._tt_info.style.opacity)?'inherit':'hidden';
			me._tt_info.ggVisible=true;
			me._infoon__img.src=basePath + 'images/infoon__o.png';
		}
		this._infoon.onmouseout=function (e) {
			me._tt_info.style[domTransition]='none';
			me._tt_info.style.visibility='hidden';
			me._tt_info.ggVisible=false;
			me._infoon__img.src=basePath + 'images/infoon.png';
		}
		me._infoon.ggCurrentLogicStateVisible = -1;
		this._infoon.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.tags.indexOf("start") == -1)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._infoon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._infoon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._infoon.style[domTransition]='';
				if (me._infoon.ggCurrentLogicStateVisible == 0) {
					me._infoon.style.visibility=(Number(me._infoon.style.opacity)>0||!me._infoon.style.opacity)?'inherit':'hidden';
					me._infoon.ggVisible=true;
				}
				else {
					me._infoon.style.visibility="hidden";
					me._infoon.ggVisible=false;
				}
			}
		}
		this._infoon.ggUpdatePosition=function (useTransition) {
		}
		this._infoon.ggNodeChange=function () {
			me._infoon.ggUpdateConditionNodeChange();
		}
		this._tt_info=document.createElement('div');
		this._tt_info__text=document.createElement('div');
		this._tt_info.className='ggskin ggskin_textdiv';
		this._tt_info.ggTextDiv=this._tt_info__text;
		this._tt_info.ggId="tt_info";
		this._tt_info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_info.ggVisible=false;
		this._tt_info.className='ggskin ggskin_text ';
		this._tt_info.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -52px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_info.setAttribute('style',hs);
		this._tt_info.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_info__text.setAttribute('style',hs);
		this._tt_info__text.innerHTML="\u0421\u043a\u0440\u044b\u0442\u044c";
		this._tt_info.appendChild(this._tt_info__text);
		me._tt_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_info.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_info.ggUpdatePosition=function (useTransition) {
		}
		this._tt_info_white=document.createElement('div');
		this._tt_info_white__text=document.createElement('div');
		this._tt_info_white.className='ggskin ggskin_textdiv';
		this._tt_info_white.ggTextDiv=this._tt_info_white__text;
		this._tt_info_white.ggId="tt_info_white";
		this._tt_info_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_info_white.ggVisible=true;
		this._tt_info_white.className='ggskin ggskin_text ';
		this._tt_info_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_info_white.setAttribute('style',hs);
		this._tt_info_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_info_white__text.setAttribute('style',hs);
		this._tt_info_white__text.innerHTML="\u0421\u043a\u0440\u044b\u0442\u044c";
		this._tt_info_white.appendChild(this._tt_info_white__text);
		me._tt_info_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_info_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_info_white.ggUpdatePosition=function (useTransition) {
		}
		this._tt_info.appendChild(this._tt_info_white);
		this._infoon.appendChild(this._tt_info);
		this._controller.appendChild(this._infoon);
		this._autorotate=document.createElement('div');
		this._autorotate__img=document.createElement('img');
		this._autorotate__img.className='ggskin ggskin_button';
		this._autorotate__img.setAttribute('src',basePath + 'images/autorotate.png');
		this._autorotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._autorotate__img.className='ggskin ggskin_button';
		this._autorotate__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._autorotate__img);
		this._autorotate.appendChild(this._autorotate__img);
		this._autorotate.ggId="autorotate";
		this._autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate.ggVisible=true;
		this._autorotate.className='ggskin ggskin_button ';
		this._autorotate.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 159px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._autorotate.setAttribute('style',hs);
		this._autorotate.style[domTransform + 'Origin']='50% 50%';
		me._autorotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._autorotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._autorotate.onclick=function (e) {
			me.player.toggleAutorotate();
		}
		this._autorotate.onmouseover=function (e) {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility=(Number(me._tt_autorotate.style.opacity)>0||!me._tt_autorotate.style.opacity)?'inherit':'hidden';
			me._tt_autorotate.ggVisible=true;
			me._autorotate__img.src=basePath + 'images/autorotate__o.png';
		}
		this._autorotate.onmouseout=function (e) {
			me._tt_autorotate.style[domTransition]='none';
			me._tt_autorotate.style.visibility='hidden';
			me._tt_autorotate.ggVisible=false;
			me._autorotate__img.src=basePath + 'images/autorotate.png';
		}
		this._autorotate.ggUpdatePosition=function (useTransition) {
		}
		this._tt_autorotate=document.createElement('div');
		this._tt_autorotate__text=document.createElement('div');
		this._tt_autorotate.className='ggskin ggskin_textdiv';
		this._tt_autorotate.ggTextDiv=this._tt_autorotate__text;
		this._tt_autorotate.ggId="tt_autorotate";
		this._tt_autorotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_autorotate.ggVisible=false;
		this._tt_autorotate.className='ggskin ggskin_text ';
		this._tt_autorotate.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -65px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 168px;';
		hs+='pointer-events:auto;';
		this._tt_autorotate.setAttribute('style',hs);
		this._tt_autorotate.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_autorotate__text.setAttribute('style',hs);
		this._tt_autorotate__text.innerHTML="\u0410\u0432\u0442\u043e\u043f\u043e\u0432\u043e\u0440\u043e\u0442";
		this._tt_autorotate.appendChild(this._tt_autorotate__text);
		me._tt_autorotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_autorotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_autorotate.ggUpdatePosition=function (useTransition) {
		}
		this._tt_autorotate_white=document.createElement('div');
		this._tt_autorotate_white__text=document.createElement('div');
		this._tt_autorotate_white.className='ggskin ggskin_textdiv';
		this._tt_autorotate_white.ggTextDiv=this._tt_autorotate_white__text;
		this._tt_autorotate_white.ggId="tt_autorotate_white";
		this._tt_autorotate_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_autorotate_white.ggVisible=true;
		this._tt_autorotate_white.className='ggskin ggskin_text ';
		this._tt_autorotate_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 168px;';
		hs+='pointer-events:auto;';
		this._tt_autorotate_white.setAttribute('style',hs);
		this._tt_autorotate_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_autorotate_white__text.setAttribute('style',hs);
		this._tt_autorotate_white__text.innerHTML="\u0410\u0432\u0442\u043e\u043f\u043e\u0432\u043e\u0440\u043e\u0442";
		this._tt_autorotate_white.appendChild(this._tt_autorotate_white__text);
		me._tt_autorotate_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_autorotate_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_autorotate_white.ggUpdatePosition=function (useTransition) {
		}
		this._tt_autorotate.appendChild(this._tt_autorotate_white);
		this._autorotate.appendChild(this._tt_autorotate);
		this._controller.appendChild(this._autorotate);
		this._zoomout=document.createElement('div');
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.className='ggskin ggskin_button';
		this._zoomout__img.setAttribute('src',basePath + 'images/zoomout.png');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoomout__img.className='ggskin ggskin_button';
		this._zoomout__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._zoomout__img);
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout.ggId="zoomout";
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		this._zoomout.className='ggskin ggskin_button ';
		this._zoomout.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 121px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoomout.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoomout.onmouseover=function (e) {
			me._zoomout__img.src=basePath + 'images/zoomout__o.png';
		}
		this._zoomout.onmouseout=function (e) {
			me._zoomout__img.src=basePath + 'images/zoomout.png';
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._zoomout);
		this._zoomin=document.createElement('div');
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.className='ggskin ggskin_button';
		this._zoomin__img.setAttribute('src',basePath + 'images/zoomin.png');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoomin__img.className='ggskin ggskin_button';
		this._zoomin__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._zoomin__img);
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin.ggId="zoomin";
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		this._zoomin.className='ggskin ggskin_button ';
		this._zoomin.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 88px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoomin.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoomin.onmouseover=function (e) {
			me._zoomin__img.src=basePath + 'images/zoomin__o.png';
		}
		this._zoomin.onmouseout=function (e) {
			me._zoomin__img.src=basePath + 'images/zoomin.png';
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._zoomin);
		this._up=document.createElement('div');
		this._up__img=document.createElement('img');
		this._up__img.className='ggskin ggskin_button';
		this._up__img.setAttribute('src',basePath + 'images/up.png');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._up__img.className='ggskin ggskin_button';
		this._up__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._up__img);
		this._up.appendChild(this._up__img);
		this._up.ggId="up";
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_button ';
		this._up.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._up.setAttribute('style',hs);
		this._up.style[domTransform + 'Origin']='50% 50%';
		me._up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._up.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._up.onmouseover=function (e) {
			me._up__img.src=basePath + 'images/up__o.png';
		}
		this._up.onmouseout=function (e) {
			me._up__img.src=basePath + 'images/up.png';
			me.elementMouseDown['up']=false;
		}
		this._up.onmousedown=function (e) {
			me.elementMouseDown['up']=true;
		}
		this._up.onmouseup=function (e) {
			me.elementMouseDown['up']=false;
		}
		this._up.ontouchend=function (e) {
			me.elementMouseDown['up']=false;
		}
		this._up.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._up);
		this._down=document.createElement('div');
		this._down__img=document.createElement('img');
		this._down__img.className='ggskin ggskin_button';
		this._down__img.setAttribute('src',basePath + 'images/down.png');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._down__img.className='ggskin ggskin_button';
		this._down__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._down__img);
		this._down.appendChild(this._down__img);
		this._down.ggId="down";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_button ';
		this._down.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._down.setAttribute('style',hs);
		this._down.style[domTransform + 'Origin']='50% 50%';
		me._down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._down.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._down.onmouseover=function (e) {
			me._down__img.src=basePath + 'images/down__o.png';
		}
		this._down.onmouseout=function (e) {
			me._down__img.src=basePath + 'images/down.png';
			me.elementMouseDown['down']=false;
		}
		this._down.onmousedown=function (e) {
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function (e) {
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function (e) {
			me.elementMouseDown['down']=false;
		}
		this._down.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._down);
		this._right=document.createElement('div');
		this._right__img=document.createElement('img');
		this._right__img.className='ggskin ggskin_button';
		this._right__img.setAttribute('src',basePath + 'images/right.png');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._right__img.className='ggskin ggskin_button';
		this._right__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._right__img);
		this._right.appendChild(this._right__img);
		this._right.ggId="right";
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		this._right.className='ggskin ggskin_button ';
		this._right.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._right.setAttribute('style',hs);
		this._right.style[domTransform + 'Origin']='50% 50%';
		me._right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._right.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._right.onmouseover=function (e) {
			me._right__img.src=basePath + 'images/right__o.png';
		}
		this._right.onmouseout=function (e) {
			me._right__img.src=basePath + 'images/right.png';
			me.elementMouseDown['right']=false;
		}
		this._right.onmousedown=function (e) {
			me.elementMouseDown['right']=true;
		}
		this._right.onmouseup=function (e) {
			me.elementMouseDown['right']=false;
		}
		this._right.ontouchend=function (e) {
			me.elementMouseDown['right']=false;
		}
		this._right.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._right);
		this._left=document.createElement('div');
		this._left__img=document.createElement('img');
		this._left__img.className='ggskin ggskin_button';
		this._left__img.setAttribute('src',basePath + 'images/left.png');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._left__img.className='ggskin ggskin_button';
		this._left__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._left__img);
		this._left.appendChild(this._left__img);
		this._left.ggId="left";
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		this._left.className='ggskin ggskin_button ';
		this._left.ggType='button';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._left.setAttribute('style',hs);
		this._left.style[domTransform + 'Origin']='50% 50%';
		me._left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._left.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._left.onmouseover=function (e) {
			me._left__img.src=basePath + 'images/left__o.png';
		}
		this._left.onmouseout=function (e) {
			me._left__img.src=basePath + 'images/left.png';
			me.elementMouseDown['left']=false;
		}
		this._left.onmousedown=function (e) {
			me.elementMouseDown['left']=true;
		}
		this._left.onmouseup=function (e) {
			me.elementMouseDown['left']=false;
		}
		this._left.ontouchend=function (e) {
			me.elementMouseDown['left']=false;
		}
		this._left.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._left);
		this._fullscreen=document.createElement('div');
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_button';
		this._fullscreen__img.setAttribute('src',basePath + 'images/fullscreen.png');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._fullscreen__img.className='ggskin ggskin_button';
		this._fullscreen__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._fullscreen__img);
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_button ';
		this._fullscreen.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 247px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._fullscreen.onclick=function (e) {
			me.player.toggleFullscreen();
		}
		this._fullscreen.onmouseover=function (e) {
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility=(Number(me._tt_fullscreen.style.opacity)>0||!me._tt_fullscreen.style.opacity)?'inherit':'hidden';
			me._tt_fullscreen.ggVisible=true;
			me._fullscreen__img.src=basePath + 'images/fullscreen__o.png';
		}
		this._fullscreen.onmouseout=function (e) {
			me._tt_fullscreen.style[domTransition]='none';
			me._tt_fullscreen.style.visibility='hidden';
			me._tt_fullscreen.ggVisible=false;
			me._fullscreen__img.src=basePath + 'images/fullscreen.png';
		}
		this._fullscreen.ggUpdatePosition=function (useTransition) {
		}
		this._tt_fullscreen=document.createElement('div');
		this._tt_fullscreen__text=document.createElement('div');
		this._tt_fullscreen.className='ggskin ggskin_textdiv';
		this._tt_fullscreen.ggTextDiv=this._tt_fullscreen__text;
		this._tt_fullscreen.ggId="tt_fullscreen";
		this._tt_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen.ggVisible=false;
		this._tt_fullscreen.className='ggskin ggskin_text ';
		this._tt_fullscreen.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_fullscreen.setAttribute('style',hs);
		this._tt_fullscreen.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen__text.setAttribute('style',hs);
		this._tt_fullscreen__text.innerHTML="\u041f\u043e\u043b\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d";
		this._tt_fullscreen.appendChild(this._tt_fullscreen__text);
		me._tt_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		this._tt_fullscreen_white=document.createElement('div');
		this._tt_fullscreen_white__text=document.createElement('div');
		this._tt_fullscreen_white.className='ggskin ggskin_textdiv';
		this._tt_fullscreen_white.ggTextDiv=this._tt_fullscreen_white__text;
		this._tt_fullscreen_white.ggId="tt_fullscreen_white";
		this._tt_fullscreen_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen_white.ggVisible=true;
		this._tt_fullscreen_white.className='ggskin ggskin_text ';
		this._tt_fullscreen_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_fullscreen_white.setAttribute('style',hs);
		this._tt_fullscreen_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen_white__text.setAttribute('style',hs);
		this._tt_fullscreen_white__text.innerHTML="\u041f\u043e\u043b\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d";
		this._tt_fullscreen_white.appendChild(this._tt_fullscreen_white__text);
		me._tt_fullscreen_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_fullscreen_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_fullscreen_white.ggUpdatePosition=function (useTransition) {
		}
		this._tt_fullscreen.appendChild(this._tt_fullscreen_white);
		this._fullscreen.appendChild(this._tt_fullscreen);
		this._controller.appendChild(this._fullscreen);
		this.divSkin.appendChild(this._controller);
		this._rectangle_1=document.createElement('div');
		this._rectangle_1.ggId="Rectangle 1";
		this._rectangle_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_1.ggVisible=false;
		this._rectangle_1.className='ggskin ggskin_rectangle ';
		this._rectangle_1.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 74px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:auto;';
		this._rectangle_1.setAttribute('style',hs);
		this._rectangle_1.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		me._rectangle_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._rectangle_1.onclick=function (e) {
			me.player.openUrl("http:\/\/ts-arh.ru\/","");
		}
		me._rectangle_1.ggCurrentLogicStateVisible = -1;
		this._rectangle_1.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_1.style[domTransition]='';
				if (me._rectangle_1.ggCurrentLogicStateVisible == 0) {
					me._rectangle_1.style.visibility=(Number(me._rectangle_1.style.opacity)>0||!me._rectangle_1.style.opacity)?'inherit':'hidden';
					me._rectangle_1.ggVisible=true;
				}
				else {
					me._rectangle_1.style.visibility="hidden";
					me._rectangle_1.ggVisible=false;
				}
			}
		}
		this._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_1.ggNodeChange=function () {
			me._rectangle_1.ggUpdateConditionNodeChange();
		}
		this._svg_1=document.createElement('div');
		this._svg_1__img=document.createElement('img');
		this._svg_1__img.className='ggskin ggskin_svg';
		this._svg_1__img.setAttribute('src',basePath + 'images/svg_1.svg');
		this._svg_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._svg_1__img['ondragstart']=function() { return false; };
		this._svg_1.appendChild(this._svg_1__img);
		this._svg_1.ggId="Svg 1";
		this._svg_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_1.ggVisible=true;
		this._svg_1.className='ggskin ggskin_svg ';
		this._svg_1.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 68px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 66px;';
		hs+='pointer-events:auto;';
		this._svg_1.setAttribute('style',hs);
		this._svg_1.style[domTransform + 'Origin']='0% 0%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_1.onclick=function (e) {
			me.player.openUrl("http:\/\/ts-arh.ru\/","");
		}
		this._svg_1.ggUpdatePosition=function (useTransition) {
		}
		this._rectangle_1.appendChild(this._svg_1);
		this.divSkin.appendChild(this._rectangle_1);
		this._screen_tint2=document.createElement('div');
		this._screen_tint2.ggId="screen_tint2";
		this._screen_tint2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen_tint2.ggVisible=false;
		this._screen_tint2.className='ggskin ggskin_rectangle ';
		this._screen_tint2.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.117647);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 8.02%;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		this._screen_tint2.setAttribute('style',hs);
		this._screen_tint2.style[domTransform + 'Origin']='50% 50%';
		me._screen_tint2.ggIsActive=function() {
			return false;
		}
		me._screen_tint2.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._screen_tint2.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._screen_tint2);
		this._screen_tint=document.createElement('div');
		this._screen_tint.ggId="screen_tint";
		this._screen_tint.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen_tint.ggVisible=false;
		this._screen_tint.className='ggskin ggskin_rectangle ';
		this._screen_tint.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.27451);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screen_tint.setAttribute('style',hs);
		this._screen_tint.style[domTransform + 'Origin']='50% 50%';
		me._screen_tint.ggIsActive=function() {
			return false;
		}
		me._screen_tint.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._screen_tint.ggCurrentLogicStateVisible = -1;
		this._screen_tint.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['gallery_show_hide_1'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screen_tint.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screen_tint.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screen_tint.style[domTransition]='';
				if (me._screen_tint.ggCurrentLogicStateVisible == 0) {
					me._screen_tint.style.visibility=(Number(me._screen_tint.style.opacity)>0||!me._screen_tint.style.opacity)?'inherit':'hidden';
					me._screen_tint.ggVisible=true;
				}
				else {
					me._screen_tint.style.visibility="hidden";
					me._screen_tint.ggVisible=false;
				}
			}
		}
		this._screen_tint.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._screen_tint);
		this._gallery_picture16=document.createElement('div');
		this._gallery_picture16__img=document.createElement('img');
		this._gallery_picture16__img.className='ggskin ggskin_external';
		this._gallery_picture16__img.onload=function() {me._gallery_picture16.ggUpdatePosition();}
		this._gallery_picture16__img.setAttribute('src',basePath + '');
		this._gallery_picture16__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture16.appendChild(this._gallery_picture16__img);
		this._gallery_picture16.ggId="gallery_picture16";
		this._gallery_picture16.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture16.ggVisible=false;
		this._gallery_picture16.className='ggskin ggskin_external ';
		this._gallery_picture16.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 8%;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		this._gallery_picture16.setAttribute('style',hs);
		this._gallery_picture16.style[domTransform + 'Origin']='50% 50%';
		me._gallery_picture16.ggIsActive=function() {
			return false;
		}
		me._gallery_picture16.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._gallery_picture16.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture16.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture16.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture16.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture16.style[domTransition]='';
				if (me._gallery_picture16.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture16.ggText="gallery/16-01.jpg";
					me._gallery_picture16__img.src=me._gallery_picture16.ggText;
				}
				else {
					me._gallery_picture16.ggText="";
					me._gallery_picture16__img.src=me._gallery_picture16.ggText;
				}
			}
		}
		this._gallery_picture16.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture16.clientWidth;
			var parentHeight = me._gallery_picture16.clientHeight;
			var aspectRatioDiv = me._gallery_picture16.clientWidth / me._gallery_picture16.clientHeight;
			var aspectRatioImg = me._gallery_picture16__img.naturalWidth / me._gallery_picture16__img.naturalHeight;
			if (me._gallery_picture16__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture16__img.naturalWidth;
			if (me._gallery_picture16__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture16__img.naturalHeight;
			var currentWidth = me._gallery_picture16__img.naturalWidth;
			var currentHeight = me._gallery_picture16__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture16__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture16__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			};
		}
		this._screen_tintclose14=document.createElement('div');
		this._screen_tintclose14.ggId="screen_tint-close";
		this._screen_tintclose14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen_tintclose14.ggVisible=true;
		this._screen_tintclose14.className='ggskin ggskin_rectangle ';
		this._screen_tintclose14.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 89.7917%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screen_tintclose14.setAttribute('style',hs);
		this._screen_tintclose14.style[domTransform + 'Origin']='50% 50%';
		me._screen_tintclose14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._screen_tintclose14.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._screen_tintclose14.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer14.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer14.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause8.style[domTransition]='none';
			me._gallery_pause8.style.visibility='hidden';
			me._gallery_pause8.ggVisible=false;
			me._gallery_play8.style[domTransition]='none';
			me._gallery_play8.style.visibility=(Number(me._gallery_play8.style.opacity)>0||!me._gallery_play8.style.opacity)?'inherit':'hidden';
			me._gallery_play8.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture16.style[domTransition]='none';
			me._gallery_picture16.style.visibility='hidden';
			me._gallery_picture16.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._screen_tintclose14.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_picture16.appendChild(this._screen_tintclose14);
		this._gallery_controler14=document.createElement('div');
		this._gallery_controler14.ggId="gallery_controler";
		this._gallery_controler14.ggLeft=-68;
		this._gallery_controler14.ggTop=-39;
		this._gallery_controler14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_controler14.ggVisible=true;
		this._gallery_controler14.className='ggskin ggskin_container ';
		this._gallery_controler14.ggType='container';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -68px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 118px;';
		hs+='pointer-events:none;';
		this._gallery_controler14.setAttribute('style',hs);
		this._gallery_controler14.style[domTransform + 'Origin']='50% 50%';
		me._gallery_controler14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_controler14.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_controler14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._gallery_timer14=document.createElement('div');
		this._gallery_timer14.ggTimestamp=this.ggCurrentTime;
		this._gallery_timer14.ggLastIsActive=true;
		this._gallery_timer14.ggTimeout=0;
		this._gallery_timer14.ggId="gallery_timer";
		this._gallery_timer14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_timer14.ggVisible=true;
		this._gallery_timer14.className='ggskin ggskin_timer ';
		this._gallery_timer14.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_timer14.setAttribute('style',hs);
		this._gallery_timer14.style[domTransform + 'Origin']='50% 50%';
		me._gallery_timer14.ggIsActive=function() {
			return (me._gallery_timer14.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._gallery_timer14.ggTimestamp) / me._gallery_timer14.ggTimeout) % 2 == 0));
		}
		me._gallery_timer14.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_timer14.ggActivate=function () {
			me._gallery_forward8.onclick();
		}
		this._gallery_timer14.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler14.appendChild(this._gallery_timer14);
		this._gallery_fx14=document.createElement('div');
		this._gallery_fx14.ggTimestamp=this.ggCurrentTime;
		this._gallery_fx14.ggLastIsActive=true;
		this._gallery_fx14.ggTimeout=1000;
		this._gallery_fx14.ggId="gallery_fx";
		this._gallery_fx14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_fx14.ggVisible=true;
		this._gallery_fx14.className='ggskin ggskin_timer ';
		this._gallery_fx14.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_fx14.setAttribute('style',hs);
		this._gallery_fx14.style[domTransform + 'Origin']='50% 50%';
		me._gallery_fx14.ggIsActive=function() {
			return (me._gallery_fx14.ggTimestamp + me._gallery_fx14.ggTimeout) >= me.ggCurrentTime;
		}
		me._gallery_fx14.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_fx14.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler14.appendChild(this._gallery_fx14);
		this._gallery_picture_preload14=document.createElement('div');
		this._gallery_picture_preload14__img=document.createElement('img');
		this._gallery_picture_preload14__img.className='ggskin ggskin_external';
		this._gallery_picture_preload14__img.onload=function() {me._gallery_picture_preload14.ggUpdatePosition();}
		this._gallery_picture_preload14__img.setAttribute('src',basePath + '');
		this._gallery_picture_preload14__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture_preload14.appendChild(this._gallery_picture_preload14__img);
		this._gallery_picture_preload14.ggId="gallery_picture_preload";
		this._gallery_picture_preload14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture_preload14.ggVisible=false;
		this._gallery_picture_preload14.className='ggskin ggskin_external ';
		this._gallery_picture_preload14.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 31px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		this._gallery_picture_preload14.setAttribute('style',hs);
		this._gallery_picture_preload14.style[domTransform + 'Origin']='0% 0%';
		me._gallery_picture_preload14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_picture_preload14.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_picture_preload14.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture_preload14.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture_preload14.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture_preload14.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture_preload14.style[domTransition]='';
				if (me._gallery_picture_preload14.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture_preload14.ggText="gallery/16-01.jpg";
					me._gallery_picture_preload14__img.src=me._gallery_picture_preload14.ggText;
				}
				else {
					me._gallery_picture_preload14.ggText="";
					me._gallery_picture_preload14__img.src=me._gallery_picture_preload14.ggText;
				}
			}
		}
		this._gallery_picture_preload14.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture_preload14.clientWidth;
			var parentHeight = me._gallery_picture_preload14.clientHeight;
			var aspectRatioDiv = me._gallery_picture_preload14.clientWidth / me._gallery_picture_preload14.clientHeight;
			var aspectRatioImg = me._gallery_picture_preload14__img.naturalWidth / me._gallery_picture_preload14__img.naturalHeight;
			if (me._gallery_picture_preload14__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture_preload14__img.naturalWidth;
			if (me._gallery_picture_preload14__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture_preload14__img.naturalHeight;
			var currentWidth = me._gallery_picture_preload14__img.naturalWidth;
			var currentHeight = me._gallery_picture_preload14__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture_preload14__img.setAttribute('style','position: absolute; left: 0px; top: 0px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture_preload14__img.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			};
		}
		this._gallery_controler14.appendChild(this._gallery_picture_preload14);
		this._gallery_close14=document.createElement('div');
		this._gallery_close14__img=document.createElement('img');
		this._gallery_close14__img.className='ggskin ggskin_image';
		this._gallery_close14__img.setAttribute('src',basePath + 'images/gallery_close14.png');
		this._gallery_close14__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_close14__img.className='ggskin ggskin_image';
		this._gallery_close14__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_close14__img);
		this._gallery_close14.appendChild(this._gallery_close14__img);
		this._gallery_close14.ggId="gallery_close";
		this._gallery_close14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_close14.ggVisible=true;
		this._gallery_close14.className='ggskin ggskin_image ';
		this._gallery_close14.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 44px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_close14.setAttribute('style',hs);
		this._gallery_close14.style[domTransform + 'Origin']='50% 50%';
		me._gallery_close14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_close14.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_close14.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer14.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer14.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause8.style[domTransition]='none';
			me._gallery_pause8.style.visibility='hidden';
			me._gallery_pause8.ggVisible=false;
			me._gallery_play8.style[domTransition]='none';
			me._gallery_play8.style.visibility=(Number(me._gallery_play8.style.opacity)>0||!me._gallery_play8.style.opacity)?'inherit':'hidden';
			me._gallery_play8.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture16.style[domTransition]='none';
			me._gallery_picture16.style.visibility='hidden';
			me._gallery_picture16.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._gallery_close14.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler14.appendChild(this._gallery_close14);
		this._text_114=document.createElement('div');
		this._text_114__text=document.createElement('div');
		this._text_114.className='ggskin ggskin_textdiv';
		this._text_114.ggTextDiv=this._text_114__text;
		this._text_114.ggId="Text 1";
		this._text_114.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_114.ggVisible=true;
		this._text_114.className='ggskin ggskin_text ';
		this._text_114.ggType='text';
		hs ='';
		hs+='height : 171px;';
		hs+='left : -208px;';
		hs+='position : absolute;';
		hs+='top : -180px;';
		hs+='visibility : inherit;';
		hs+='width : 566px;';
		hs+='pointer-events:auto;';
		this._text_114.setAttribute('style',hs);
		this._text_114.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 566px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.27451);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 10px 11px 10px 11px;';
		hs+='overflow: hidden;';
		this._text_114__text.setAttribute('style',hs);
		this._text_114__text.innerHTML="\u0421\u0422\u0420\u041e\u0418\u0422\u0415\u041b\u042c\u0421\u0422\u0412\u041e \u041a\u041e\u041c\u041f\u041b\u0415\u041a\u0421\u041e\u0412 \u041e\u0427\u0418\u0421\u0422\u041d\u042b\u0425 \u0421\u041e\u041e\u0420\u0423\u0416\u0415\u041d\u0418\u0419, 2013\u0433.<br\/><br\/>\u041e\u0431\u043e\u0433\u0430\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0444\u0430\u0431\u0440\u0438\u043a\u0430. \u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441 \u0441\u043e\u043e\u0440\u0443\u0436\u0435\u043d\u0438\u0439 \u0434\u043b\u044f \u043e\u0447\u0438\u0441\u0442\u043a\u0438 \u0441\u0442\u043e\u0447\u043d\u044b\u0445 \u0432\u043e\u0434<br\/>\u041e\u0431\u044a\u0451\u043c \u0437\u0430\u043b\u0438\u0442\u043e\u0433\u043e \u0431\u0435\u0442\u043e\u043d\u0430: 540 \u043c3<br\/>\u041e\u0431\u0449\u0430\u044f \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0442\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043e\u0432 \u0441 \u043c\u043e\u043d\u0442\u0430\u0436\u043e\u043c \u0441\u0431\u043e\u0440\u043d\u044b\u0445 \u0436\/\u0431 \u043a\u043e\u043b\u043e\u0434\u0446\u0435\u0432: 658 \u043c.\u043f.<br\/>\u041c\u043e\u043d\u0442\u0430\u0436 \u0438 \u0441\u0431\u043e\u0440\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u044c\u043d\u044b\u0445 \u0437\u0434\u0430\u043d\u0438\u0439 \u043e\u0447\u0438\u0441\u0442\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043e\u0432<br\/>\u041f\u0443\u0441\u043a\u043e\u043d\u0430\u043b\u0430\u0434\u043e\u0447\u043d\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u044b<br\/>";
		this._text_114.appendChild(this._text_114__text);
		me._text_114.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_114.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._text_114.ggCurrentLogicStateVisible = -1;
		this._text_114.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width < 100)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_114.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_114.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_114.style[domTransition]='';
				if (me._text_114.ggCurrentLogicStateVisible == 0) {
					me._text_114.style.visibility="hidden";
					me._text_114.ggVisible=false;
				}
				else {
					me._text_114.style.visibility=(Number(me._text_114.style.opacity)>0||!me._text_114.style.opacity)?'inherit':'hidden';
					me._text_114.ggVisible=true;
				}
			}
		}
		this._text_114.ggUpdatePosition=function (useTransition) {
			me._text_114.ggUpdateConditionResize();
		}
		this._gallery_controler14.appendChild(this._text_114);
		this._gallery_picture16.appendChild(this._gallery_controler14);
		this.divSkin.appendChild(this._gallery_picture16);
		this._gallery_picture15=document.createElement('div');
		this._gallery_picture15__img=document.createElement('img');
		this._gallery_picture15__img.className='ggskin ggskin_external';
		this._gallery_picture15__img.onload=function() {me._gallery_picture15.ggUpdatePosition();}
		this._gallery_picture15__img.setAttribute('src',basePath + '');
		this._gallery_picture15__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture15.appendChild(this._gallery_picture15__img);
		this._gallery_picture15.ggId="gallery_picture15";
		this._gallery_picture15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture15.ggVisible=false;
		this._gallery_picture15.className='ggskin ggskin_external ';
		this._gallery_picture15.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 8%;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		this._gallery_picture15.setAttribute('style',hs);
		this._gallery_picture15.style[domTransform + 'Origin']='50% 50%';
		me._gallery_picture15.ggIsActive=function() {
			return false;
		}
		me._gallery_picture15.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._gallery_picture15.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture15.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture15.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture15.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture15.style[domTransition]='';
				if (me._gallery_picture15.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture15.ggText="gallery/15-01.jpg";
					me._gallery_picture15__img.src=me._gallery_picture15.ggText;
				}
				else {
					me._gallery_picture15.ggText="";
					me._gallery_picture15__img.src=me._gallery_picture15.ggText;
				}
			}
		}
		this._gallery_picture15.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture15.clientWidth;
			var parentHeight = me._gallery_picture15.clientHeight;
			var aspectRatioDiv = me._gallery_picture15.clientWidth / me._gallery_picture15.clientHeight;
			var aspectRatioImg = me._gallery_picture15__img.naturalWidth / me._gallery_picture15__img.naturalHeight;
			if (me._gallery_picture15__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture15__img.naturalWidth;
			if (me._gallery_picture15__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture15__img.naturalHeight;
			var currentWidth = me._gallery_picture15__img.naturalWidth;
			var currentHeight = me._gallery_picture15__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture15__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture15__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			};
		}
		this._screen_tintclose13=document.createElement('div');
		this._screen_tintclose13.ggId="screen_tint-close";
		this._screen_tintclose13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen_tintclose13.ggVisible=true;
		this._screen_tintclose13.className='ggskin ggskin_rectangle ';
		this._screen_tintclose13.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 89.7917%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screen_tintclose13.setAttribute('style',hs);
		this._screen_tintclose13.style[domTransform + 'Origin']='50% 50%';
		me._screen_tintclose13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._screen_tintclose13.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._screen_tintclose13.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer13.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer13.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause8.style[domTransition]='none';
			me._gallery_pause8.style.visibility='hidden';
			me._gallery_pause8.ggVisible=false;
			me._gallery_play8.style[domTransition]='none';
			me._gallery_play8.style.visibility=(Number(me._gallery_play8.style.opacity)>0||!me._gallery_play8.style.opacity)?'inherit':'hidden';
			me._gallery_play8.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture15.style[domTransition]='none';
			me._gallery_picture15.style.visibility='hidden';
			me._gallery_picture15.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._screen_tintclose13.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_picture15.appendChild(this._screen_tintclose13);
		this._gallery_controler13=document.createElement('div');
		this._gallery_controler13.ggId="gallery_controler";
		this._gallery_controler13.ggLeft=-68;
		this._gallery_controler13.ggTop=-39;
		this._gallery_controler13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_controler13.ggVisible=true;
		this._gallery_controler13.className='ggskin ggskin_container ';
		this._gallery_controler13.ggType='container';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -68px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 118px;';
		hs+='pointer-events:none;';
		this._gallery_controler13.setAttribute('style',hs);
		this._gallery_controler13.style[domTransform + 'Origin']='50% 50%';
		me._gallery_controler13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_controler13.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_controler13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._gallery_timer13=document.createElement('div');
		this._gallery_timer13.ggTimestamp=this.ggCurrentTime;
		this._gallery_timer13.ggLastIsActive=true;
		this._gallery_timer13.ggTimeout=0;
		this._gallery_timer13.ggId="gallery_timer";
		this._gallery_timer13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_timer13.ggVisible=true;
		this._gallery_timer13.className='ggskin ggskin_timer ';
		this._gallery_timer13.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_timer13.setAttribute('style',hs);
		this._gallery_timer13.style[domTransform + 'Origin']='50% 50%';
		me._gallery_timer13.ggIsActive=function() {
			return (me._gallery_timer13.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._gallery_timer13.ggTimestamp) / me._gallery_timer13.ggTimeout) % 2 == 0));
		}
		me._gallery_timer13.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_timer13.ggActivate=function () {
			me._gallery_forward8.onclick();
		}
		this._gallery_timer13.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler13.appendChild(this._gallery_timer13);
		this._gallery_fx13=document.createElement('div');
		this._gallery_fx13.ggTimestamp=this.ggCurrentTime;
		this._gallery_fx13.ggLastIsActive=true;
		this._gallery_fx13.ggTimeout=1000;
		this._gallery_fx13.ggId="gallery_fx";
		this._gallery_fx13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_fx13.ggVisible=true;
		this._gallery_fx13.className='ggskin ggskin_timer ';
		this._gallery_fx13.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_fx13.setAttribute('style',hs);
		this._gallery_fx13.style[domTransform + 'Origin']='50% 50%';
		me._gallery_fx13.ggIsActive=function() {
			return (me._gallery_fx13.ggTimestamp + me._gallery_fx13.ggTimeout) >= me.ggCurrentTime;
		}
		me._gallery_fx13.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_fx13.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler13.appendChild(this._gallery_fx13);
		this._gallery_picture_preload13=document.createElement('div');
		this._gallery_picture_preload13__img=document.createElement('img');
		this._gallery_picture_preload13__img.className='ggskin ggskin_external';
		this._gallery_picture_preload13__img.onload=function() {me._gallery_picture_preload13.ggUpdatePosition();}
		this._gallery_picture_preload13__img.setAttribute('src',basePath + '');
		this._gallery_picture_preload13__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture_preload13.appendChild(this._gallery_picture_preload13__img);
		this._gallery_picture_preload13.ggId="gallery_picture_preload";
		this._gallery_picture_preload13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture_preload13.ggVisible=false;
		this._gallery_picture_preload13.className='ggskin ggskin_external ';
		this._gallery_picture_preload13.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 31px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		this._gallery_picture_preload13.setAttribute('style',hs);
		this._gallery_picture_preload13.style[domTransform + 'Origin']='0% 0%';
		me._gallery_picture_preload13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_picture_preload13.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_picture_preload13.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture_preload13.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture_preload13.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture_preload13.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture_preload13.style[domTransition]='';
				if (me._gallery_picture_preload13.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture_preload13.ggText="gallery/15-01.jpg";
					me._gallery_picture_preload13__img.src=me._gallery_picture_preload13.ggText;
				}
				else {
					me._gallery_picture_preload13.ggText="";
					me._gallery_picture_preload13__img.src=me._gallery_picture_preload13.ggText;
				}
			}
		}
		this._gallery_picture_preload13.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture_preload13.clientWidth;
			var parentHeight = me._gallery_picture_preload13.clientHeight;
			var aspectRatioDiv = me._gallery_picture_preload13.clientWidth / me._gallery_picture_preload13.clientHeight;
			var aspectRatioImg = me._gallery_picture_preload13__img.naturalWidth / me._gallery_picture_preload13__img.naturalHeight;
			if (me._gallery_picture_preload13__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture_preload13__img.naturalWidth;
			if (me._gallery_picture_preload13__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture_preload13__img.naturalHeight;
			var currentWidth = me._gallery_picture_preload13__img.naturalWidth;
			var currentHeight = me._gallery_picture_preload13__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture_preload13__img.setAttribute('style','position: absolute; left: 0px; top: 0px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture_preload13__img.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			};
		}
		this._gallery_controler13.appendChild(this._gallery_picture_preload13);
		this._gallery_close13=document.createElement('div');
		this._gallery_close13__img=document.createElement('img');
		this._gallery_close13__img.className='ggskin ggskin_image';
		this._gallery_close13__img.setAttribute('src',basePath + 'images/gallery_close13.png');
		this._gallery_close13__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_close13__img.className='ggskin ggskin_image';
		this._gallery_close13__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_close13__img);
		this._gallery_close13.appendChild(this._gallery_close13__img);
		this._gallery_close13.ggId="gallery_close";
		this._gallery_close13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_close13.ggVisible=true;
		this._gallery_close13.className='ggskin ggskin_image ';
		this._gallery_close13.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 44px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_close13.setAttribute('style',hs);
		this._gallery_close13.style[domTransform + 'Origin']='50% 50%';
		me._gallery_close13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_close13.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_close13.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer13.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer13.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause8.style[domTransition]='none';
			me._gallery_pause8.style.visibility='hidden';
			me._gallery_pause8.ggVisible=false;
			me._gallery_play8.style[domTransition]='none';
			me._gallery_play8.style.visibility=(Number(me._gallery_play8.style.opacity)>0||!me._gallery_play8.style.opacity)?'inherit':'hidden';
			me._gallery_play8.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture15.style[domTransition]='none';
			me._gallery_picture15.style.visibility='hidden';
			me._gallery_picture15.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._gallery_close13.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler13.appendChild(this._gallery_close13);
		this._text_113=document.createElement('div');
		this._text_113__text=document.createElement('div');
		this._text_113.className='ggskin ggskin_textdiv';
		this._text_113.ggTextDiv=this._text_113__text;
		this._text_113.ggId="Text 1";
		this._text_113.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_113.ggVisible=true;
		this._text_113.className='ggskin ggskin_text ';
		this._text_113.ggType='text';
		hs ='';
		hs+='height : 147px;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : -153px;';
		hs+='visibility : inherit;';
		hs+='width : 387px;';
		hs+='pointer-events:auto;';
		this._text_113.setAttribute('style',hs);
		this._text_113.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 387px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.27451);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 10px 11px 10px 11px;';
		hs+='overflow: hidden;';
		this._text_113__text.setAttribute('style',hs);
		this._text_113__text.innerHTML="\u0421\u0422\u0420\u041e\u0418\u0422\u0415\u041b\u042c\u0421\u0422\u0412\u041e \u0412\u0415\u0420\u0422\u041e\u041b\u0415\u0422\u041d\u041e\u0419 \u041f\u041b\u041e\u0429\u0410\u0414\u041a\u0418, 2013\u0433.<br\/><br\/>\u0421\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0432\u0435\u0440\u0442\u043e\u043b\u0435\u0442\u043d\u043e\u0439 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0438 \u043d\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0438 \u041b\u043e\u043c\u043e\u043d\u043e\u0441\u043e\u0432\u0441\u043a\u043e\u0433\u043e \u0413\u041e\u041a\u0430<br\/>\u041a\u043e\u0440\u0447\u0435\u0432\u043a\u0430 \u043f\u043d\u0435\u0439 \u2013 20 \u0442\u044b\u0441. \u043c2<br\/>\u041e\u0442\u0441\u044b\u043f\u043a\u0430 \u043d\u0430\u0441\u044b\u043f\u0438 \u2013 400 \u043c3<br\/>\u0423\u043a\u043b\u0430\u0434\u043a\u0430 \u043f\u043b\u0438\u0442 \u041f\u0410\u0413-18 \u2013 64 \u0448\u0442.<br\/>\u0421\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u043f\u043e\u0434\u044a\u0435\u0437\u0434\u043d\u043e\u0439 \u0434\u043e\u0440\u043e\u0433\u0438";
		this._text_113.appendChild(this._text_113__text);
		me._text_113.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_113.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._text_113.ggCurrentLogicStateVisible = -1;
		this._text_113.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width < 100)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_113.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_113.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_113.style[domTransition]='';
				if (me._text_113.ggCurrentLogicStateVisible == 0) {
					me._text_113.style.visibility="hidden";
					me._text_113.ggVisible=false;
				}
				else {
					me._text_113.style.visibility=(Number(me._text_113.style.opacity)>0||!me._text_113.style.opacity)?'inherit':'hidden';
					me._text_113.ggVisible=true;
				}
			}
		}
		this._text_113.ggUpdatePosition=function (useTransition) {
			me._text_113.ggUpdateConditionResize();
		}
		this._gallery_controler13.appendChild(this._text_113);
		this._gallery_picture15.appendChild(this._gallery_controler13);
		this.divSkin.appendChild(this._gallery_picture15);
		this._gallery_picture14=document.createElement('div');
		this._gallery_picture14__img=document.createElement('img');
		this._gallery_picture14__img.className='ggskin ggskin_external';
		this._gallery_picture14__img.onload=function() {me._gallery_picture14.ggUpdatePosition();}
		this._gallery_picture14__img.setAttribute('src',basePath + '');
		this._gallery_picture14__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture14.appendChild(this._gallery_picture14__img);
		this._gallery_picture14.ggId="gallery_picture14";
		this._gallery_picture14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture14.ggVisible=false;
		this._gallery_picture14.className='ggskin ggskin_external ';
		this._gallery_picture14.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 8%;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		this._gallery_picture14.setAttribute('style',hs);
		this._gallery_picture14.style[domTransform + 'Origin']='50% 50%';
		me._gallery_picture14.ggIsActive=function() {
			return false;
		}
		me._gallery_picture14.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._gallery_picture14.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture14.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture14.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture14.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture14.style[domTransition]='';
				if (me._gallery_picture14.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture14.ggText="gallery/14-01.jpg";
					me._gallery_picture14__img.src=me._gallery_picture14.ggText;
				}
				else if (me._gallery_picture14.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture14.ggText="gallery/14-02.jpg";
					me._gallery_picture14__img.src=me._gallery_picture14.ggText;
				}
				else if (me._gallery_picture14.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture14.ggText="gallery/14-03.jpg";
					me._gallery_picture14__img.src=me._gallery_picture14.ggText;
				}
				else {
					me._gallery_picture14.ggText="";
					me._gallery_picture14__img.src=me._gallery_picture14.ggText;
				}
			}
		}
		this._gallery_picture14.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture14.clientWidth;
			var parentHeight = me._gallery_picture14.clientHeight;
			var aspectRatioDiv = me._gallery_picture14.clientWidth / me._gallery_picture14.clientHeight;
			var aspectRatioImg = me._gallery_picture14__img.naturalWidth / me._gallery_picture14__img.naturalHeight;
			if (me._gallery_picture14__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture14__img.naturalWidth;
			if (me._gallery_picture14__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture14__img.naturalHeight;
			var currentWidth = me._gallery_picture14__img.naturalWidth;
			var currentHeight = me._gallery_picture14__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture14__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture14__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			};
		}
		this._screen_tintclose12=document.createElement('div');
		this._screen_tintclose12.ggId="screen_tint-close";
		this._screen_tintclose12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen_tintclose12.ggVisible=true;
		this._screen_tintclose12.className='ggskin ggskin_rectangle ';
		this._screen_tintclose12.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 89.7917%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screen_tintclose12.setAttribute('style',hs);
		this._screen_tintclose12.style[domTransform + 'Origin']='50% 50%';
		me._screen_tintclose12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._screen_tintclose12.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._screen_tintclose12.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer12.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer12.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause8.style[domTransition]='none';
			me._gallery_pause8.style.visibility='hidden';
			me._gallery_pause8.ggVisible=false;
			me._gallery_play8.style[domTransition]='none';
			me._gallery_play8.style.visibility=(Number(me._gallery_play8.style.opacity)>0||!me._gallery_play8.style.opacity)?'inherit':'hidden';
			me._gallery_play8.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture14.style[domTransition]='none';
			me._gallery_picture14.style.visibility='hidden';
			me._gallery_picture14.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._screen_tintclose12.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_picture14.appendChild(this._screen_tintclose12);
		this._gallery_controler12=document.createElement('div');
		this._gallery_controler12.ggId="gallery_controler";
		this._gallery_controler12.ggLeft=-68;
		this._gallery_controler12.ggTop=-39;
		this._gallery_controler12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_controler12.ggVisible=true;
		this._gallery_controler12.className='ggskin ggskin_container ';
		this._gallery_controler12.ggType='container';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -68px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 118px;';
		hs+='pointer-events:none;';
		this._gallery_controler12.setAttribute('style',hs);
		this._gallery_controler12.style[domTransform + 'Origin']='50% 50%';
		me._gallery_controler12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_controler12.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_controler12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._gallery_timer12=document.createElement('div');
		this._gallery_timer12.ggTimestamp=this.ggCurrentTime;
		this._gallery_timer12.ggLastIsActive=true;
		this._gallery_timer12.ggTimeout=0;
		this._gallery_timer12.ggId="gallery_timer";
		this._gallery_timer12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_timer12.ggVisible=true;
		this._gallery_timer12.className='ggskin ggskin_timer ';
		this._gallery_timer12.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_timer12.setAttribute('style',hs);
		this._gallery_timer12.style[domTransform + 'Origin']='50% 50%';
		me._gallery_timer12.ggIsActive=function() {
			return (me._gallery_timer12.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._gallery_timer12.ggTimestamp) / me._gallery_timer12.ggTimeout) % 2 == 0));
		}
		me._gallery_timer12.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_timer12.ggActivate=function () {
			me._gallery_forward8.onclick();
		}
		this._gallery_timer12.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler12.appendChild(this._gallery_timer12);
		this._gallery_fx12=document.createElement('div');
		this._gallery_fx12.ggTimestamp=this.ggCurrentTime;
		this._gallery_fx12.ggLastIsActive=true;
		this._gallery_fx12.ggTimeout=1000;
		this._gallery_fx12.ggId="gallery_fx";
		this._gallery_fx12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_fx12.ggVisible=true;
		this._gallery_fx12.className='ggskin ggskin_timer ';
		this._gallery_fx12.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_fx12.setAttribute('style',hs);
		this._gallery_fx12.style[domTransform + 'Origin']='50% 50%';
		me._gallery_fx12.ggIsActive=function() {
			return (me._gallery_fx12.ggTimestamp + me._gallery_fx12.ggTimeout) >= me.ggCurrentTime;
		}
		me._gallery_fx12.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_fx12.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler12.appendChild(this._gallery_fx12);
		this._gallery_picture_preload12=document.createElement('div');
		this._gallery_picture_preload12__img=document.createElement('img');
		this._gallery_picture_preload12__img.className='ggskin ggskin_external';
		this._gallery_picture_preload12__img.onload=function() {me._gallery_picture_preload12.ggUpdatePosition();}
		this._gallery_picture_preload12__img.setAttribute('src',basePath + '');
		this._gallery_picture_preload12__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture_preload12.appendChild(this._gallery_picture_preload12__img);
		this._gallery_picture_preload12.ggId="gallery_picture_preload";
		this._gallery_picture_preload12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture_preload12.ggVisible=false;
		this._gallery_picture_preload12.className='ggskin ggskin_external ';
		this._gallery_picture_preload12.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 31px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		this._gallery_picture_preload12.setAttribute('style',hs);
		this._gallery_picture_preload12.style[domTransform + 'Origin']='0% 0%';
		me._gallery_picture_preload12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_picture_preload12.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_picture_preload12.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture_preload12.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture_preload12.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture_preload12.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture_preload12.style[domTransition]='';
				if (me._gallery_picture_preload12.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture_preload12.ggText="gallery/14-01.jpg";
					me._gallery_picture_preload12__img.src=me._gallery_picture_preload12.ggText;
				}
				else if (me._gallery_picture_preload12.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture_preload12.ggText="gallery/14-02.jpg";
					me._gallery_picture_preload12__img.src=me._gallery_picture_preload12.ggText;
				}
				else if (me._gallery_picture_preload12.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture_preload12.ggText="gallery/14-03.jpg";
					me._gallery_picture_preload12__img.src=me._gallery_picture_preload12.ggText;
				}
				else {
					me._gallery_picture_preload12.ggText="";
					me._gallery_picture_preload12__img.src=me._gallery_picture_preload12.ggText;
				}
			}
		}
		this._gallery_picture_preload12.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture_preload12.clientWidth;
			var parentHeight = me._gallery_picture_preload12.clientHeight;
			var aspectRatioDiv = me._gallery_picture_preload12.clientWidth / me._gallery_picture_preload12.clientHeight;
			var aspectRatioImg = me._gallery_picture_preload12__img.naturalWidth / me._gallery_picture_preload12__img.naturalHeight;
			if (me._gallery_picture_preload12__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture_preload12__img.naturalWidth;
			if (me._gallery_picture_preload12__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture_preload12__img.naturalHeight;
			var currentWidth = me._gallery_picture_preload12__img.naturalWidth;
			var currentHeight = me._gallery_picture_preload12__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture_preload12__img.setAttribute('style','position: absolute; left: 0px; top: 0px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture_preload12__img.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			};
		}
		this._gallery_controler12.appendChild(this._gallery_picture_preload12);
		this._gallery_close12=document.createElement('div');
		this._gallery_close12__img=document.createElement('img');
		this._gallery_close12__img.className='ggskin ggskin_image';
		this._gallery_close12__img.setAttribute('src',basePath + 'images/gallery_close12.png');
		this._gallery_close12__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_close12__img.className='ggskin ggskin_image';
		this._gallery_close12__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_close12__img);
		this._gallery_close12.appendChild(this._gallery_close12__img);
		this._gallery_close12.ggId="gallery_close";
		this._gallery_close12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_close12.ggVisible=true;
		this._gallery_close12.className='ggskin ggskin_image ';
		this._gallery_close12.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 133px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_close12.setAttribute('style',hs);
		this._gallery_close12.style[domTransform + 'Origin']='50% 50%';
		me._gallery_close12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_close12.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_close12.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer12.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer12.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause8.style[domTransition]='none';
			me._gallery_pause8.style.visibility='hidden';
			me._gallery_pause8.ggVisible=false;
			me._gallery_play8.style[domTransition]='none';
			me._gallery_play8.style.visibility=(Number(me._gallery_play8.style.opacity)>0||!me._gallery_play8.style.opacity)?'inherit':'hidden';
			me._gallery_play8.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture14.style[domTransition]='none';
			me._gallery_picture14.style.visibility='hidden';
			me._gallery_picture14.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._gallery_close12.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler12.appendChild(this._gallery_close12);
		this._gallery_back8=document.createElement('div');
		this._gallery_back8__img=document.createElement('img');
		this._gallery_back8__img.className='ggskin ggskin_button';
		this._gallery_back8__img.setAttribute('src',basePath + 'images/gallery_back8.png');
		this._gallery_back8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_back8__img.className='ggskin ggskin_button';
		this._gallery_back8__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_back8__img);
		this._gallery_back8.appendChild(this._gallery_back8__img);
		this._gallery_back8.ggId="gallery_back";
		this._gallery_back8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_back8.ggVisible=true;
		this._gallery_back8.className='ggskin ggskin_button ';
		this._gallery_back8.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_back8.setAttribute('style',hs);
		this._gallery_back8.style[domTransform + 'Origin']='50% 50%';
		me._gallery_back8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_back8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_back8.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("2");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("3");
			me._gallery_fx12.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx12.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_back8.onmouseover=function (e) {
			me._gallery_back8__img.src=basePath + 'images/gallery_back8__o.png';
		}
		this._gallery_back8.onmouseout=function (e) {
			me._gallery_back8__img.src=basePath + 'images/gallery_back8.png';
		}
		this._gallery_back8.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler12.appendChild(this._gallery_back8);
		this._gallery_counter_total8=document.createElement('div');
		this._gallery_counter_total8__text=document.createElement('div');
		this._gallery_counter_total8.className='ggskin ggskin_textdiv';
		this._gallery_counter_total8.ggTextDiv=this._gallery_counter_total8__text;
		this._gallery_counter_total8.ggId="gallery_counter_total";
		this._gallery_counter_total8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter_total8.ggVisible=true;
		this._gallery_counter_total8.className='ggskin ggskin_text ';
		this._gallery_counter_total8.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 51px;';
		hs+='pointer-events:auto;';
		this._gallery_counter_total8.setAttribute('style',hs);
		this._gallery_counter_total8.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 51px;';
		hs+='height: 18px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.588235);';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter_total8__text.setAttribute('style',hs);
		this._gallery_counter_total8__text.innerHTML="\/ 3";
		this._gallery_counter_total8.appendChild(this._gallery_counter_total8__text);
		me._gallery_counter_total8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter_total8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_counter_total8.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler12.appendChild(this._gallery_counter_total8);
		this._gallery_counter8=document.createElement('div');
		this._gallery_counter8__text=document.createElement('div');
		this._gallery_counter8.className='ggskin ggskin_textdiv';
		this._gallery_counter8.ggTextDiv=this._gallery_counter8__text;
		this._gallery_counter8.ggId="gallery_counter";
		this._gallery_counter8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter8.ggVisible=true;
		this._gallery_counter8.className='ggskin ggskin_text ';
		this._gallery_counter8.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		this._gallery_counter8.setAttribute('style',hs);
		this._gallery_counter8.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter8__text.setAttribute('style',hs);
		this._gallery_counter8__text.innerHTML="1";
		this._gallery_counter8.appendChild(this._gallery_counter8__text);
		me._gallery_counter8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_counter8.ggCurrentLogicStateText = -1;
		this._gallery_counter8.ggUpdateConditionTimer=function () {
			var newLogicStateText;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateText = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateText = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateText = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateText = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateText = 5;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 6)
			)
			{
				newLogicStateText = 6;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 7)
			)
			{
				newLogicStateText = 7;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 8)
			)
			{
				newLogicStateText = 8;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 9)
			)
			{
				newLogicStateText = 9;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 10)
			)
			{
				newLogicStateText = 10;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 11)
			)
			{
				newLogicStateText = 11;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 12)
			)
			{
				newLogicStateText = 12;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 13)
			)
			{
				newLogicStateText = 13;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 14)
			)
			{
				newLogicStateText = 14;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._gallery_counter8.ggCurrentLogicStateText != newLogicStateText) {
				me._gallery_counter8.ggCurrentLogicStateText = newLogicStateText;
				me._gallery_counter8.style[domTransition]='';
				if (me._gallery_counter8.ggCurrentLogicStateText == 0) {
					me._gallery_counter8.ggText="1";
					me._gallery_counter8__text.innerHTML=me._gallery_counter8.ggText;
					if (me._gallery_counter8.ggUpdateText) {
					me._gallery_counter8.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter8.ggUpdatePosition) me._gallery_counter8.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter8.ggCurrentLogicStateText == 1) {
					me._gallery_counter8.ggText="2";
					me._gallery_counter8__text.innerHTML=me._gallery_counter8.ggText;
					if (me._gallery_counter8.ggUpdateText) {
					me._gallery_counter8.ggUpdateText=function() {
						var hs="2";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter8.ggUpdatePosition) me._gallery_counter8.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter8.ggCurrentLogicStateText == 2) {
					me._gallery_counter8.ggText="3";
					me._gallery_counter8__text.innerHTML=me._gallery_counter8.ggText;
					if (me._gallery_counter8.ggUpdateText) {
					me._gallery_counter8.ggUpdateText=function() {
						var hs="3";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter8.ggUpdatePosition) me._gallery_counter8.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter8.ggCurrentLogicStateText == 3) {
					me._gallery_counter8.ggText="4";
					me._gallery_counter8__text.innerHTML=me._gallery_counter8.ggText;
					if (me._gallery_counter8.ggUpdateText) {
					me._gallery_counter8.ggUpdateText=function() {
						var hs="4";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter8.ggUpdatePosition) me._gallery_counter8.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter8.ggCurrentLogicStateText == 4) {
					me._gallery_counter8.ggText="5";
					me._gallery_counter8__text.innerHTML=me._gallery_counter8.ggText;
					if (me._gallery_counter8.ggUpdateText) {
					me._gallery_counter8.ggUpdateText=function() {
						var hs="5";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter8.ggUpdatePosition) me._gallery_counter8.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter8.ggCurrentLogicStateText == 5) {
					me._gallery_counter8.ggText="6";
					me._gallery_counter8__text.innerHTML=me._gallery_counter8.ggText;
					if (me._gallery_counter8.ggUpdateText) {
					me._gallery_counter8.ggUpdateText=function() {
						var hs="6";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter8.ggUpdatePosition) me._gallery_counter8.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter8.ggCurrentLogicStateText == 6) {
					me._gallery_counter8.ggText="7";
					me._gallery_counter8__text.innerHTML=me._gallery_counter8.ggText;
					if (me._gallery_counter8.ggUpdateText) {
					me._gallery_counter8.ggUpdateText=function() {
						var hs="7";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter8.ggUpdatePosition) me._gallery_counter8.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter8.ggCurrentLogicStateText == 7) {
					me._gallery_counter8.ggText="8";
					me._gallery_counter8__text.innerHTML=me._gallery_counter8.ggText;
					if (me._gallery_counter8.ggUpdateText) {
					me._gallery_counter8.ggUpdateText=function() {
						var hs="8";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter8.ggUpdatePosition) me._gallery_counter8.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter8.ggCurrentLogicStateText == 8) {
					me._gallery_counter8.ggText="9";
					me._gallery_counter8__text.innerHTML=me._gallery_counter8.ggText;
					if (me._gallery_counter8.ggUpdateText) {
					me._gallery_counter8.ggUpdateText=function() {
						var hs="9";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter8.ggUpdatePosition) me._gallery_counter8.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter8.ggCurrentLogicStateText == 9) {
					me._gallery_counter8.ggText="10";
					me._gallery_counter8__text.innerHTML=me._gallery_counter8.ggText;
					if (me._gallery_counter8.ggUpdateText) {
					me._gallery_counter8.ggUpdateText=function() {
						var hs="10";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter8.ggUpdatePosition) me._gallery_counter8.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter8.ggCurrentLogicStateText == 10) {
					me._gallery_counter8.ggText="11";
					me._gallery_counter8__text.innerHTML=me._gallery_counter8.ggText;
					if (me._gallery_counter8.ggUpdateText) {
					me._gallery_counter8.ggUpdateText=function() {
						var hs="11";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter8.ggUpdatePosition) me._gallery_counter8.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter8.ggCurrentLogicStateText == 11) {
					me._gallery_counter8.ggText="12";
					me._gallery_counter8__text.innerHTML=me._gallery_counter8.ggText;
					if (me._gallery_counter8.ggUpdateText) {
					me._gallery_counter8.ggUpdateText=function() {
						var hs="12";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter8.ggUpdatePosition) me._gallery_counter8.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter8.ggCurrentLogicStateText == 12) {
					me._gallery_counter8.ggText="13";
					me._gallery_counter8__text.innerHTML=me._gallery_counter8.ggText;
					if (me._gallery_counter8.ggUpdateText) {
					me._gallery_counter8.ggUpdateText=function() {
						var hs="13";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter8.ggUpdatePosition) me._gallery_counter8.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter8.ggCurrentLogicStateText == 13) {
					me._gallery_counter8.ggText="14";
					me._gallery_counter8__text.innerHTML=me._gallery_counter8.ggText;
					if (me._gallery_counter8.ggUpdateText) {
					me._gallery_counter8.ggUpdateText=function() {
						var hs="14";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter8.ggUpdatePosition) me._gallery_counter8.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter8.ggCurrentLogicStateText == 14) {
					me._gallery_counter8.ggText="15";
					me._gallery_counter8__text.innerHTML=me._gallery_counter8.ggText;
					if (me._gallery_counter8.ggUpdateText) {
					me._gallery_counter8.ggUpdateText=function() {
						var hs="15";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter8.ggUpdatePosition) me._gallery_counter8.ggUpdatePosition();
					}
				}
				else {
					me._gallery_counter8.ggText="1";
					me._gallery_counter8__text.innerHTML=me._gallery_counter8.ggText;
					if (me._gallery_counter8.ggUpdateText) {
					me._gallery_counter8.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter8.ggUpdatePosition) me._gallery_counter8.ggUpdatePosition();
					}
				}
			}
		}
		this._gallery_counter8.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((28-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._gallery_controler12.appendChild(this._gallery_counter8);
		this._text_112=document.createElement('div');
		this._text_112__text=document.createElement('div');
		this._text_112.className='ggskin ggskin_textdiv';
		this._text_112.ggTextDiv=this._text_112__text;
		this._text_112.ggId="Text 1";
		this._text_112.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_112.ggVisible=true;
		this._text_112.className='ggskin ggskin_text ';
		this._text_112.ggType='text';
		hs ='';
		hs+='height : 149px;';
		hs+='left : -161px;';
		hs+='position : absolute;';
		hs+='top : -157px;';
		hs+='visibility : inherit;';
		hs+='width : 496px;';
		hs+='pointer-events:auto;';
		this._text_112.setAttribute('style',hs);
		this._text_112.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 496px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.27451);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.27451);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		this._text_112__text.setAttribute('style',hs);
		this._text_112__text.innerHTML="\u0421\u0422\u0420\u041e\u0418\u0422\u0415\u041b\u042c\u0421\u0422\u0412\u041e \u0412\u041e\u0421\u0422\u041e\u0427\u041d\u041e\u0419 \u0412\u041e\u0414\u041e\u041e\u0422\u0412\u041e\u0414\u041d\u041e\u0419 \u041a\u0410\u041d\u0410\u0412\u042b, 2014 \u0433.<br\/><br\/>\u0421\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0432\u043e\u0441\u0442\u043e\u0447\u043d\u043e\u0439 \u0432\u043e\u0434\u043e\u043e\u0442\u0432\u043e\u0434\u043d\u043e\u0439 \u043a\u0430\u043d\u0430\u0432\u044b.<br\/>\u041a\u043e\u0440\u0447\u0435\u0432\u043a\u0430 \u043f\u043d\u0435\u0439 \u2013 5,3 \u0433\u0430<br\/>\u041f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u2013 5,3 \u0433\u0430<br\/>\u0412\u044b\u0435\u043c\u043a\u0430 \u0433\u0440\u0443\u043d\u0442\u0430 \u2013 45 \u0442\u044b\u0441. \u043c3<br\/>\u041f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u043e\u0442\u043a\u043e\u0441\u043e\u0432 \u2013 20 \u0442\u044b\u0441. \u043c2";
		this._text_112.appendChild(this._text_112__text);
		me._text_112.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_112.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._text_112.ggCurrentLogicStateVisible = -1;
		this._text_112.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width < 100) || 
				(ggSkinVars['gallery_pictures_1'] != 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_112.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_112.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_112.style[domTransition]='';
				if (me._text_112.ggCurrentLogicStateVisible == 0) {
					me._text_112.style.visibility="hidden";
					me._text_112.ggVisible=false;
				}
				else {
					me._text_112.style.visibility=(Number(me._text_112.style.opacity)>0||!me._text_112.style.opacity)?'inherit':'hidden';
					me._text_112.ggVisible=true;
				}
			}
		}
		this._text_112.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler12.appendChild(this._text_112);
		this._gallery_forward8=document.createElement('div');
		this._gallery_forward8__img=document.createElement('img');
		this._gallery_forward8__img.className='ggskin ggskin_button';
		this._gallery_forward8__img.setAttribute('src',basePath + 'images/gallery_forward8.png');
		this._gallery_forward8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_forward8__img.className='ggskin ggskin_button';
		this._gallery_forward8__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_forward8__img);
		this._gallery_forward8.appendChild(this._gallery_forward8__img);
		this._gallery_forward8.ggId="gallery_forward";
		this._gallery_forward8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_forward8.ggVisible=true;
		this._gallery_forward8.className='ggskin ggskin_button ';
		this._gallery_forward8.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 39px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_forward8.setAttribute('style',hs);
		this._gallery_forward8.style[domTransform + 'Origin']='50% 50%';
		me._gallery_forward8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_forward8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_forward8.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("1");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("3");
			me._gallery_fx12.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx12.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_forward8.onmouseover=function (e) {
			me._gallery_forward8__img.src=basePath + 'images/gallery_forward8__o.png';
		}
		this._gallery_forward8.onmouseout=function (e) {
			me._gallery_forward8__img.src=basePath + 'images/gallery_forward8.png';
		}
		this._gallery_forward8.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler12.appendChild(this._gallery_forward8);
		this._gallery_pause8=document.createElement('div');
		this._gallery_pause8__img=document.createElement('img');
		this._gallery_pause8__img.className='ggskin ggskin_button';
		this._gallery_pause8__img.setAttribute('src',basePath + 'images/gallery_pause8.png');
		this._gallery_pause8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_pause8__img.className='ggskin ggskin_button';
		this._gallery_pause8__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_pause8__img);
		this._gallery_pause8.appendChild(this._gallery_pause8__img);
		this._gallery_pause8.ggId="gallery_pause";
		this._gallery_pause8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_pause8.ggVisible=true;
		this._gallery_pause8.className='ggskin ggskin_button ';
		this._gallery_pause8.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 86px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_pause8.setAttribute('style',hs);
		this._gallery_pause8.style[domTransform + 'Origin']='50% 50%';
		me._gallery_pause8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_pause8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_pause8.onclick=function (e) {
			me._gallery_timer12.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer12.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause8.style[domTransition]='none';
			me._gallery_pause8.style.visibility='hidden';
			me._gallery_pause8.ggVisible=false;
			me._gallery_play8.style[domTransition]='none';
			me._gallery_play8.style.visibility=(Number(me._gallery_play8.style.opacity)>0||!me._gallery_play8.style.opacity)?'inherit':'hidden';
			me._gallery_play8.ggVisible=true;
		}
		this._gallery_pause8.onmouseover=function (e) {
			me._gallery_pause8__img.src=basePath + 'images/gallery_pause8__o.png';
		}
		this._gallery_pause8.onmouseout=function (e) {
			me._gallery_pause8__img.src=basePath + 'images/gallery_pause8.png';
		}
		this._gallery_pause8.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler12.appendChild(this._gallery_pause8);
		this._gallery_play8=document.createElement('div');
		this._gallery_play8__img=document.createElement('img');
		this._gallery_play8__img.className='ggskin ggskin_button';
		this._gallery_play8__img.setAttribute('src',basePath + 'images/gallery_play8.png');
		this._gallery_play8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_play8__img.className='ggskin ggskin_button';
		this._gallery_play8__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_play8__img);
		this._gallery_play8.appendChild(this._gallery_play8__img);
		this._gallery_play8.ggId="gallery_play";
		this._gallery_play8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_play8.ggVisible=true;
		this._gallery_play8.className='ggskin ggskin_button ';
		this._gallery_play8.ggType='button';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_play8.setAttribute('style',hs);
		this._gallery_play8.style[domTransform + 'Origin']='50% 50%';
		me._gallery_play8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_play8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_play8.onclick=function (e) {
			me._gallery_timer12.ggTimeout=Number("1.5") * 1000.0;
			me._gallery_timer12.ggTimestamp=me.ggCurrentTime;
			me._gallery_play8.style[domTransition]='none';
			me._gallery_play8.style.visibility='hidden';
			me._gallery_play8.ggVisible=false;
			me._gallery_pause8.style[domTransition]='none';
			me._gallery_pause8.style.visibility=(Number(me._gallery_pause8.style.opacity)>0||!me._gallery_pause8.style.opacity)?'inherit':'hidden';
			me._gallery_pause8.ggVisible=true;
		}
		this._gallery_play8.onmouseover=function (e) {
			me._gallery_play8__img.src=basePath + 'images/gallery_play8__o.png';
		}
		this._gallery_play8.onmouseout=function (e) {
			me._gallery_play8__img.src=basePath + 'images/gallery_play8.png';
		}
		this._gallery_play8.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler12.appendChild(this._gallery_play8);
		this._gallery_picture14.appendChild(this._gallery_controler12);
		this.divSkin.appendChild(this._gallery_picture14);
		this._gallery_picture13=document.createElement('div');
		this._gallery_picture13__img=document.createElement('img');
		this._gallery_picture13__img.className='ggskin ggskin_external';
		this._gallery_picture13__img.onload=function() {me._gallery_picture13.ggUpdatePosition();}
		this._gallery_picture13__img.setAttribute('src',basePath + '');
		this._gallery_picture13__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture13.appendChild(this._gallery_picture13__img);
		this._gallery_picture13.ggId="gallery_picture13";
		this._gallery_picture13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture13.ggVisible=false;
		this._gallery_picture13.className='ggskin ggskin_external ';
		this._gallery_picture13.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 8%;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		this._gallery_picture13.setAttribute('style',hs);
		this._gallery_picture13.style[domTransform + 'Origin']='50% 50%';
		me._gallery_picture13.ggIsActive=function() {
			return false;
		}
		me._gallery_picture13.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._gallery_picture13.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture13.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture13.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture13.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture13.style[domTransition]='';
				if (me._gallery_picture13.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture13.ggText="gallery/13-01.jpg";
					me._gallery_picture13__img.src=me._gallery_picture13.ggText;
				}
				else {
					me._gallery_picture13.ggText="";
					me._gallery_picture13__img.src=me._gallery_picture13.ggText;
				}
			}
		}
		this._gallery_picture13.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture13.clientWidth;
			var parentHeight = me._gallery_picture13.clientHeight;
			var aspectRatioDiv = me._gallery_picture13.clientWidth / me._gallery_picture13.clientHeight;
			var aspectRatioImg = me._gallery_picture13__img.naturalWidth / me._gallery_picture13__img.naturalHeight;
			if (me._gallery_picture13__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture13__img.naturalWidth;
			if (me._gallery_picture13__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture13__img.naturalHeight;
			var currentWidth = me._gallery_picture13__img.naturalWidth;
			var currentHeight = me._gallery_picture13__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture13__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture13__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			};
		}
		this._screen_tintclose11=document.createElement('div');
		this._screen_tintclose11.ggId="screen_tint-close";
		this._screen_tintclose11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen_tintclose11.ggVisible=true;
		this._screen_tintclose11.className='ggskin ggskin_rectangle ';
		this._screen_tintclose11.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 89.7917%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screen_tintclose11.setAttribute('style',hs);
		this._screen_tintclose11.style[domTransform + 'Origin']='50% 50%';
		me._screen_tintclose11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._screen_tintclose11.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._screen_tintclose11.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer11.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer11.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause8.style[domTransition]='none';
			me._gallery_pause8.style.visibility='hidden';
			me._gallery_pause8.ggVisible=false;
			me._gallery_play8.style[domTransition]='none';
			me._gallery_play8.style.visibility=(Number(me._gallery_play8.style.opacity)>0||!me._gallery_play8.style.opacity)?'inherit':'hidden';
			me._gallery_play8.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture13.style[domTransition]='none';
			me._gallery_picture13.style.visibility='hidden';
			me._gallery_picture13.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._screen_tintclose11.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_picture13.appendChild(this._screen_tintclose11);
		this._gallery_controler11=document.createElement('div');
		this._gallery_controler11.ggId="gallery_controler";
		this._gallery_controler11.ggLeft=-68;
		this._gallery_controler11.ggTop=-39;
		this._gallery_controler11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_controler11.ggVisible=true;
		this._gallery_controler11.className='ggskin ggskin_container ';
		this._gallery_controler11.ggType='container';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -68px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 118px;';
		hs+='pointer-events:none;';
		this._gallery_controler11.setAttribute('style',hs);
		this._gallery_controler11.style[domTransform + 'Origin']='50% 50%';
		me._gallery_controler11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_controler11.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_controler11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._gallery_timer11=document.createElement('div');
		this._gallery_timer11.ggTimestamp=this.ggCurrentTime;
		this._gallery_timer11.ggLastIsActive=true;
		this._gallery_timer11.ggTimeout=0;
		this._gallery_timer11.ggId="gallery_timer";
		this._gallery_timer11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_timer11.ggVisible=true;
		this._gallery_timer11.className='ggskin ggskin_timer ';
		this._gallery_timer11.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_timer11.setAttribute('style',hs);
		this._gallery_timer11.style[domTransform + 'Origin']='50% 50%';
		me._gallery_timer11.ggIsActive=function() {
			return (me._gallery_timer11.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._gallery_timer11.ggTimestamp) / me._gallery_timer11.ggTimeout) % 2 == 0));
		}
		me._gallery_timer11.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_timer11.ggActivate=function () {
			me._gallery_forward8.onclick();
		}
		this._gallery_timer11.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler11.appendChild(this._gallery_timer11);
		this._gallery_fx11=document.createElement('div');
		this._gallery_fx11.ggTimestamp=this.ggCurrentTime;
		this._gallery_fx11.ggLastIsActive=true;
		this._gallery_fx11.ggTimeout=1000;
		this._gallery_fx11.ggId="gallery_fx";
		this._gallery_fx11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_fx11.ggVisible=true;
		this._gallery_fx11.className='ggskin ggskin_timer ';
		this._gallery_fx11.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_fx11.setAttribute('style',hs);
		this._gallery_fx11.style[domTransform + 'Origin']='50% 50%';
		me._gallery_fx11.ggIsActive=function() {
			return (me._gallery_fx11.ggTimestamp + me._gallery_fx11.ggTimeout) >= me.ggCurrentTime;
		}
		me._gallery_fx11.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_fx11.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler11.appendChild(this._gallery_fx11);
		this._gallery_picture_preload11=document.createElement('div');
		this._gallery_picture_preload11__img=document.createElement('img');
		this._gallery_picture_preload11__img.className='ggskin ggskin_external';
		this._gallery_picture_preload11__img.onload=function() {me._gallery_picture_preload11.ggUpdatePosition();}
		this._gallery_picture_preload11__img.setAttribute('src',basePath + '');
		this._gallery_picture_preload11__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture_preload11.appendChild(this._gallery_picture_preload11__img);
		this._gallery_picture_preload11.ggId="gallery_picture_preload";
		this._gallery_picture_preload11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture_preload11.ggVisible=false;
		this._gallery_picture_preload11.className='ggskin ggskin_external ';
		this._gallery_picture_preload11.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 31px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		this._gallery_picture_preload11.setAttribute('style',hs);
		this._gallery_picture_preload11.style[domTransform + 'Origin']='0% 0%';
		me._gallery_picture_preload11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_picture_preload11.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_picture_preload11.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture_preload11.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture_preload11.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture_preload11.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture_preload11.style[domTransition]='';
				if (me._gallery_picture_preload11.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture_preload11.ggText="gallery/13-01.jpg";
					me._gallery_picture_preload11__img.src=me._gallery_picture_preload11.ggText;
				}
				else {
					me._gallery_picture_preload11.ggText="";
					me._gallery_picture_preload11__img.src=me._gallery_picture_preload11.ggText;
				}
			}
		}
		this._gallery_picture_preload11.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture_preload11.clientWidth;
			var parentHeight = me._gallery_picture_preload11.clientHeight;
			var aspectRatioDiv = me._gallery_picture_preload11.clientWidth / me._gallery_picture_preload11.clientHeight;
			var aspectRatioImg = me._gallery_picture_preload11__img.naturalWidth / me._gallery_picture_preload11__img.naturalHeight;
			if (me._gallery_picture_preload11__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture_preload11__img.naturalWidth;
			if (me._gallery_picture_preload11__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture_preload11__img.naturalHeight;
			var currentWidth = me._gallery_picture_preload11__img.naturalWidth;
			var currentHeight = me._gallery_picture_preload11__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture_preload11__img.setAttribute('style','position: absolute; left: 0px; top: 0px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture_preload11__img.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			};
		}
		this._gallery_controler11.appendChild(this._gallery_picture_preload11);
		this._gallery_close11=document.createElement('div');
		this._gallery_close11__img=document.createElement('img');
		this._gallery_close11__img.className='ggskin ggskin_image';
		this._gallery_close11__img.setAttribute('src',basePath + 'images/gallery_close11.png');
		this._gallery_close11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_close11__img.className='ggskin ggskin_image';
		this._gallery_close11__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_close11__img);
		this._gallery_close11.appendChild(this._gallery_close11__img);
		this._gallery_close11.ggId="gallery_close";
		this._gallery_close11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_close11.ggVisible=true;
		this._gallery_close11.className='ggskin ggskin_image ';
		this._gallery_close11.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 44px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_close11.setAttribute('style',hs);
		this._gallery_close11.style[domTransform + 'Origin']='50% 50%';
		me._gallery_close11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_close11.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_close11.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer11.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer11.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause8.style[domTransition]='none';
			me._gallery_pause8.style.visibility='hidden';
			me._gallery_pause8.ggVisible=false;
			me._gallery_play8.style[domTransition]='none';
			me._gallery_play8.style.visibility=(Number(me._gallery_play8.style.opacity)>0||!me._gallery_play8.style.opacity)?'inherit':'hidden';
			me._gallery_play8.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture13.style[domTransition]='none';
			me._gallery_picture13.style.visibility='hidden';
			me._gallery_picture13.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._gallery_close11.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler11.appendChild(this._gallery_close11);
		this._text_111=document.createElement('div');
		this._text_111__text=document.createElement('div');
		this._text_111.className='ggskin ggskin_textdiv';
		this._text_111.ggTextDiv=this._text_111__text;
		this._text_111.ggId="Text 1";
		this._text_111.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_111.ggVisible=true;
		this._text_111.className='ggskin ggskin_text ';
		this._text_111.ggType='text';
		hs ='';
		hs+='height : 126px;';
		hs+='left : -142px;';
		hs+='position : absolute;';
		hs+='top : -133px;';
		hs+='visibility : inherit;';
		hs+='width : 466px;';
		hs+='pointer-events:auto;';
		this._text_111.setAttribute('style',hs);
		this._text_111.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 466px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.27451);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 10px 11px 10px 11px;';
		hs+='overflow: hidden;';
		this._text_111__text.setAttribute('style',hs);
		this._text_111__text.innerHTML="\u0421\u0422\u0420\u041e\u0418\u0422\u0415\u041b\u042c\u0421\u0422\u0412\u041e \u0412\u041e\u0414\u041e\u0421\u0411\u041e\u0420\u041d\u042b\u0425  \u0418 \u0412\u041e\u0414\u041e\u0421\u0411\u0420\u041e\u0421\u041d\u042b\u0425 \u041a\u041e\u041b\u041b\u0415\u041a\u0422\u041e\u0420\u041e\u0412<br\/><br\/>\u0421\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0432\u043e\u0434\u043e\u0441\u0431\u043e\u0440\u043d\u044b\u0445 \u0438 \u0432\u043e\u0434\u043e\u0441\u0431\u0440\u043e\u0441\u043d\u044b\u0445 \u043a\u043e\u043b\u043b\u0435\u043a\u0442\u043e\u0440\u043e\u0432 \u043e\u0442 \u0432\u043e\u0434\u043e\u043f\u043e\u043d\u0438\u0436\u0430\u044e\u0449\u0438\u0445 \u0441\u043a\u0432\u0430\u0436\u0438\u043d \u2116 \u0412\u041f\u0421 57-67, \u043e\u0442\u0441\u044b\u043f\u043a\u0438 \u043d\u0430\u0441\u044b\u043f\u0438 \u0437\u0435\u043c\u043b\u044f\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u043e\u0442\u043d\u0430 \u0438 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 \u0434\u043e\u0440\u043e\u0433\u0438";
		this._text_111.appendChild(this._text_111__text);
		me._text_111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_111.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._text_111.ggCurrentLogicStateVisible = -1;
		this._text_111.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width < 100)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_111.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_111.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_111.style[domTransition]='';
				if (me._text_111.ggCurrentLogicStateVisible == 0) {
					me._text_111.style.visibility="hidden";
					me._text_111.ggVisible=false;
				}
				else {
					me._text_111.style.visibility=(Number(me._text_111.style.opacity)>0||!me._text_111.style.opacity)?'inherit':'hidden';
					me._text_111.ggVisible=true;
				}
			}
		}
		this._text_111.ggUpdatePosition=function (useTransition) {
			me._text_111.ggUpdateConditionResize();
		}
		this._gallery_controler11.appendChild(this._text_111);
		this._gallery_picture13.appendChild(this._gallery_controler11);
		this.divSkin.appendChild(this._gallery_picture13);
		this._gallery_picture12=document.createElement('div');
		this._gallery_picture12__img=document.createElement('img');
		this._gallery_picture12__img.className='ggskin ggskin_external';
		this._gallery_picture12__img.onload=function() {me._gallery_picture12.ggUpdatePosition();}
		this._gallery_picture12__img.setAttribute('src',basePath + '');
		this._gallery_picture12__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture12.appendChild(this._gallery_picture12__img);
		this._gallery_picture12.ggId="gallery_picture12";
		this._gallery_picture12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture12.ggVisible=false;
		this._gallery_picture12.className='ggskin ggskin_external ';
		this._gallery_picture12.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 8%;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		this._gallery_picture12.setAttribute('style',hs);
		this._gallery_picture12.style[domTransform + 'Origin']='50% 50%';
		me._gallery_picture12.ggIsActive=function() {
			return false;
		}
		me._gallery_picture12.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._gallery_picture12.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture12.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateExternalUrl = 5;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture12.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture12.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture12.style[domTransition]='';
				if (me._gallery_picture12.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture12.ggText="gallery/12-01.jpg";
					me._gallery_picture12__img.src=me._gallery_picture12.ggText;
				}
				else if (me._gallery_picture12.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture12.ggText="gallery/11-02.jpg";
					me._gallery_picture12__img.src=me._gallery_picture12.ggText;
				}
				else if (me._gallery_picture12.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture12.ggText="gallery/11-03.jpg";
					me._gallery_picture12__img.src=me._gallery_picture12.ggText;
				}
				else if (me._gallery_picture12.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture12.ggText="gallery/11-04.jpg";
					me._gallery_picture12__img.src=me._gallery_picture12.ggText;
				}
				else if (me._gallery_picture12.ggCurrentLogicStateExternalUrl == 4) {
					me._gallery_picture12.ggText="gallery/11-05.jpg";
					me._gallery_picture12__img.src=me._gallery_picture12.ggText;
				}
				else if (me._gallery_picture12.ggCurrentLogicStateExternalUrl == 5) {
					me._gallery_picture12.ggText="gallery/11-06.jpg";
					me._gallery_picture12__img.src=me._gallery_picture12.ggText;
				}
				else {
					me._gallery_picture12.ggText="";
					me._gallery_picture12__img.src=me._gallery_picture12.ggText;
				}
			}
		}
		this._gallery_picture12.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture12.clientWidth;
			var parentHeight = me._gallery_picture12.clientHeight;
			var aspectRatioDiv = me._gallery_picture12.clientWidth / me._gallery_picture12.clientHeight;
			var aspectRatioImg = me._gallery_picture12__img.naturalWidth / me._gallery_picture12__img.naturalHeight;
			if (me._gallery_picture12__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture12__img.naturalWidth;
			if (me._gallery_picture12__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture12__img.naturalHeight;
			var currentWidth = me._gallery_picture12__img.naturalWidth;
			var currentHeight = me._gallery_picture12__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture12__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture12__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			};
		}
		this._screen_tintclose10=document.createElement('div');
		this._screen_tintclose10.ggId="screen_tint-close";
		this._screen_tintclose10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen_tintclose10.ggVisible=true;
		this._screen_tintclose10.className='ggskin ggskin_rectangle ';
		this._screen_tintclose10.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 89.7917%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screen_tintclose10.setAttribute('style',hs);
		this._screen_tintclose10.style[domTransform + 'Origin']='50% 50%';
		me._screen_tintclose10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._screen_tintclose10.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._screen_tintclose10.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer10.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer10.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause7.style[domTransition]='none';
			me._gallery_pause7.style.visibility='hidden';
			me._gallery_pause7.ggVisible=false;
			me._gallery_play7.style[domTransition]='none';
			me._gallery_play7.style.visibility=(Number(me._gallery_play7.style.opacity)>0||!me._gallery_play7.style.opacity)?'inherit':'hidden';
			me._gallery_play7.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture12.style[domTransition]='none';
			me._gallery_picture12.style.visibility='hidden';
			me._gallery_picture12.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._screen_tintclose10.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_picture12.appendChild(this._screen_tintclose10);
		this._gallery_controler10=document.createElement('div');
		this._gallery_controler10.ggId="gallery_controler";
		this._gallery_controler10.ggLeft=-68;
		this._gallery_controler10.ggTop=-39;
		this._gallery_controler10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_controler10.ggVisible=true;
		this._gallery_controler10.className='ggskin ggskin_container ';
		this._gallery_controler10.ggType='container';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -68px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 118px;';
		hs+='pointer-events:none;';
		this._gallery_controler10.setAttribute('style',hs);
		this._gallery_controler10.style[domTransform + 'Origin']='50% 50%';
		me._gallery_controler10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_controler10.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_controler10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._gallery_timer10=document.createElement('div');
		this._gallery_timer10.ggTimestamp=this.ggCurrentTime;
		this._gallery_timer10.ggLastIsActive=true;
		this._gallery_timer10.ggTimeout=0;
		this._gallery_timer10.ggId="gallery_timer";
		this._gallery_timer10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_timer10.ggVisible=true;
		this._gallery_timer10.className='ggskin ggskin_timer ';
		this._gallery_timer10.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_timer10.setAttribute('style',hs);
		this._gallery_timer10.style[domTransform + 'Origin']='50% 50%';
		me._gallery_timer10.ggIsActive=function() {
			return (me._gallery_timer10.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._gallery_timer10.ggTimestamp) / me._gallery_timer10.ggTimeout) % 2 == 0));
		}
		me._gallery_timer10.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_timer10.ggActivate=function () {
			me._gallery_forward7.onclick();
		}
		this._gallery_timer10.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler10.appendChild(this._gallery_timer10);
		this._gallery_fx10=document.createElement('div');
		this._gallery_fx10.ggTimestamp=this.ggCurrentTime;
		this._gallery_fx10.ggLastIsActive=true;
		this._gallery_fx10.ggTimeout=1000;
		this._gallery_fx10.ggId="gallery_fx";
		this._gallery_fx10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_fx10.ggVisible=true;
		this._gallery_fx10.className='ggskin ggskin_timer ';
		this._gallery_fx10.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_fx10.setAttribute('style',hs);
		this._gallery_fx10.style[domTransform + 'Origin']='50% 50%';
		me._gallery_fx10.ggIsActive=function() {
			return (me._gallery_fx10.ggTimestamp + me._gallery_fx10.ggTimeout) >= me.ggCurrentTime;
		}
		me._gallery_fx10.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_fx10.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler10.appendChild(this._gallery_fx10);
		this._gallery_picture_preload10=document.createElement('div');
		this._gallery_picture_preload10__img=document.createElement('img');
		this._gallery_picture_preload10__img.className='ggskin ggskin_external';
		this._gallery_picture_preload10__img.onload=function() {me._gallery_picture_preload10.ggUpdatePosition();}
		this._gallery_picture_preload10__img.setAttribute('src',basePath + '');
		this._gallery_picture_preload10__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture_preload10.appendChild(this._gallery_picture_preload10__img);
		this._gallery_picture_preload10.ggId="gallery_picture_preload";
		this._gallery_picture_preload10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture_preload10.ggVisible=false;
		this._gallery_picture_preload10.className='ggskin ggskin_external ';
		this._gallery_picture_preload10.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 31px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		this._gallery_picture_preload10.setAttribute('style',hs);
		this._gallery_picture_preload10.style[domTransform + 'Origin']='0% 0%';
		me._gallery_picture_preload10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_picture_preload10.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_picture_preload10.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture_preload10.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateExternalUrl = 5;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture_preload10.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture_preload10.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture_preload10.style[domTransition]='';
				if (me._gallery_picture_preload10.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture_preload10.ggText="gallery/12-01.jpg";
					me._gallery_picture_preload10__img.src=me._gallery_picture_preload10.ggText;
				}
				else if (me._gallery_picture_preload10.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture_preload10.ggText="gallery/11-02.jpg";
					me._gallery_picture_preload10__img.src=me._gallery_picture_preload10.ggText;
				}
				else if (me._gallery_picture_preload10.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture_preload10.ggText="gallery/11-03.jpg";
					me._gallery_picture_preload10__img.src=me._gallery_picture_preload10.ggText;
				}
				else if (me._gallery_picture_preload10.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture_preload10.ggText="gallery/11-04.jpg";
					me._gallery_picture_preload10__img.src=me._gallery_picture_preload10.ggText;
				}
				else if (me._gallery_picture_preload10.ggCurrentLogicStateExternalUrl == 4) {
					me._gallery_picture_preload10.ggText="gallery/11-05.jpg";
					me._gallery_picture_preload10__img.src=me._gallery_picture_preload10.ggText;
				}
				else if (me._gallery_picture_preload10.ggCurrentLogicStateExternalUrl == 5) {
					me._gallery_picture_preload10.ggText="gallery/11-06.jpg";
					me._gallery_picture_preload10__img.src=me._gallery_picture_preload10.ggText;
				}
				else {
					me._gallery_picture_preload10.ggText="";
					me._gallery_picture_preload10__img.src=me._gallery_picture_preload10.ggText;
				}
			}
		}
		this._gallery_picture_preload10.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture_preload10.clientWidth;
			var parentHeight = me._gallery_picture_preload10.clientHeight;
			var aspectRatioDiv = me._gallery_picture_preload10.clientWidth / me._gallery_picture_preload10.clientHeight;
			var aspectRatioImg = me._gallery_picture_preload10__img.naturalWidth / me._gallery_picture_preload10__img.naturalHeight;
			if (me._gallery_picture_preload10__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture_preload10__img.naturalWidth;
			if (me._gallery_picture_preload10__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture_preload10__img.naturalHeight;
			var currentWidth = me._gallery_picture_preload10__img.naturalWidth;
			var currentHeight = me._gallery_picture_preload10__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture_preload10__img.setAttribute('style','position: absolute; left: 0px; top: 0px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture_preload10__img.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			};
		}
		this._gallery_controler10.appendChild(this._gallery_picture_preload10);
		this._gallery_close10=document.createElement('div');
		this._gallery_close10__img=document.createElement('img');
		this._gallery_close10__img.className='ggskin ggskin_image';
		this._gallery_close10__img.setAttribute('src',basePath + 'images/gallery_close10.png');
		this._gallery_close10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_close10__img.className='ggskin ggskin_image';
		this._gallery_close10__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_close10__img);
		this._gallery_close10.appendChild(this._gallery_close10__img);
		this._gallery_close10.ggId="gallery_close";
		this._gallery_close10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_close10.ggVisible=true;
		this._gallery_close10.className='ggskin ggskin_image ';
		this._gallery_close10.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 133px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_close10.setAttribute('style',hs);
		this._gallery_close10.style[domTransform + 'Origin']='50% 50%';
		me._gallery_close10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_close10.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_close10.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer10.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer10.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause7.style[domTransition]='none';
			me._gallery_pause7.style.visibility='hidden';
			me._gallery_pause7.ggVisible=false;
			me._gallery_play7.style[domTransition]='none';
			me._gallery_play7.style.visibility=(Number(me._gallery_play7.style.opacity)>0||!me._gallery_play7.style.opacity)?'inherit':'hidden';
			me._gallery_play7.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture12.style[domTransition]='none';
			me._gallery_picture12.style.visibility='hidden';
			me._gallery_picture12.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._gallery_close10.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler10.appendChild(this._gallery_close10);
		this._gallery_back7=document.createElement('div');
		this._gallery_back7__img=document.createElement('img');
		this._gallery_back7__img.className='ggskin ggskin_button';
		this._gallery_back7__img.setAttribute('src',basePath + 'images/gallery_back7.png');
		this._gallery_back7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_back7__img.className='ggskin ggskin_button';
		this._gallery_back7__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_back7__img);
		this._gallery_back7.appendChild(this._gallery_back7__img);
		this._gallery_back7.ggId="gallery_back";
		this._gallery_back7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_back7.ggVisible=true;
		this._gallery_back7.className='ggskin ggskin_button ';
		this._gallery_back7.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_back7.setAttribute('style',hs);
		this._gallery_back7.style[domTransform + 'Origin']='50% 50%';
		me._gallery_back7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_back7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_back7.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("5");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("6");
			me._gallery_fx10.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx10.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_back7.onmouseover=function (e) {
			me._gallery_back7__img.src=basePath + 'images/gallery_back7__o.png';
		}
		this._gallery_back7.onmouseout=function (e) {
			me._gallery_back7__img.src=basePath + 'images/gallery_back7.png';
		}
		this._gallery_back7.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler10.appendChild(this._gallery_back7);
		this._gallery_counter_total7=document.createElement('div');
		this._gallery_counter_total7__text=document.createElement('div');
		this._gallery_counter_total7.className='ggskin ggskin_textdiv';
		this._gallery_counter_total7.ggTextDiv=this._gallery_counter_total7__text;
		this._gallery_counter_total7.ggId="gallery_counter_total";
		this._gallery_counter_total7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter_total7.ggVisible=true;
		this._gallery_counter_total7.className='ggskin ggskin_text ';
		this._gallery_counter_total7.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 51px;';
		hs+='pointer-events:auto;';
		this._gallery_counter_total7.setAttribute('style',hs);
		this._gallery_counter_total7.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 51px;';
		hs+='height: 18px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.588235);';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter_total7__text.setAttribute('style',hs);
		this._gallery_counter_total7__text.innerHTML="\/ 6";
		this._gallery_counter_total7.appendChild(this._gallery_counter_total7__text);
		me._gallery_counter_total7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter_total7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_counter_total7.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler10.appendChild(this._gallery_counter_total7);
		this._gallery_counter7=document.createElement('div');
		this._gallery_counter7__text=document.createElement('div');
		this._gallery_counter7.className='ggskin ggskin_textdiv';
		this._gallery_counter7.ggTextDiv=this._gallery_counter7__text;
		this._gallery_counter7.ggId="gallery_counter";
		this._gallery_counter7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter7.ggVisible=true;
		this._gallery_counter7.className='ggskin ggskin_text ';
		this._gallery_counter7.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		this._gallery_counter7.setAttribute('style',hs);
		this._gallery_counter7.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter7__text.setAttribute('style',hs);
		this._gallery_counter7__text.innerHTML="1";
		this._gallery_counter7.appendChild(this._gallery_counter7__text);
		me._gallery_counter7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_counter7.ggCurrentLogicStateText = -1;
		this._gallery_counter7.ggUpdateConditionTimer=function () {
			var newLogicStateText;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateText = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateText = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateText = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateText = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateText = 5;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 6)
			)
			{
				newLogicStateText = 6;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 7)
			)
			{
				newLogicStateText = 7;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 8)
			)
			{
				newLogicStateText = 8;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 9)
			)
			{
				newLogicStateText = 9;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 10)
			)
			{
				newLogicStateText = 10;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 11)
			)
			{
				newLogicStateText = 11;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 12)
			)
			{
				newLogicStateText = 12;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 13)
			)
			{
				newLogicStateText = 13;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 14)
			)
			{
				newLogicStateText = 14;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._gallery_counter7.ggCurrentLogicStateText != newLogicStateText) {
				me._gallery_counter7.ggCurrentLogicStateText = newLogicStateText;
				me._gallery_counter7.style[domTransition]='';
				if (me._gallery_counter7.ggCurrentLogicStateText == 0) {
					me._gallery_counter7.ggText="1";
					me._gallery_counter7__text.innerHTML=me._gallery_counter7.ggText;
					if (me._gallery_counter7.ggUpdateText) {
					me._gallery_counter7.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter7.ggUpdatePosition) me._gallery_counter7.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter7.ggCurrentLogicStateText == 1) {
					me._gallery_counter7.ggText="2";
					me._gallery_counter7__text.innerHTML=me._gallery_counter7.ggText;
					if (me._gallery_counter7.ggUpdateText) {
					me._gallery_counter7.ggUpdateText=function() {
						var hs="2";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter7.ggUpdatePosition) me._gallery_counter7.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter7.ggCurrentLogicStateText == 2) {
					me._gallery_counter7.ggText="3";
					me._gallery_counter7__text.innerHTML=me._gallery_counter7.ggText;
					if (me._gallery_counter7.ggUpdateText) {
					me._gallery_counter7.ggUpdateText=function() {
						var hs="3";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter7.ggUpdatePosition) me._gallery_counter7.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter7.ggCurrentLogicStateText == 3) {
					me._gallery_counter7.ggText="4";
					me._gallery_counter7__text.innerHTML=me._gallery_counter7.ggText;
					if (me._gallery_counter7.ggUpdateText) {
					me._gallery_counter7.ggUpdateText=function() {
						var hs="4";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter7.ggUpdatePosition) me._gallery_counter7.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter7.ggCurrentLogicStateText == 4) {
					me._gallery_counter7.ggText="5";
					me._gallery_counter7__text.innerHTML=me._gallery_counter7.ggText;
					if (me._gallery_counter7.ggUpdateText) {
					me._gallery_counter7.ggUpdateText=function() {
						var hs="5";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter7.ggUpdatePosition) me._gallery_counter7.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter7.ggCurrentLogicStateText == 5) {
					me._gallery_counter7.ggText="6";
					me._gallery_counter7__text.innerHTML=me._gallery_counter7.ggText;
					if (me._gallery_counter7.ggUpdateText) {
					me._gallery_counter7.ggUpdateText=function() {
						var hs="6";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter7.ggUpdatePosition) me._gallery_counter7.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter7.ggCurrentLogicStateText == 6) {
					me._gallery_counter7.ggText="7";
					me._gallery_counter7__text.innerHTML=me._gallery_counter7.ggText;
					if (me._gallery_counter7.ggUpdateText) {
					me._gallery_counter7.ggUpdateText=function() {
						var hs="7";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter7.ggUpdatePosition) me._gallery_counter7.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter7.ggCurrentLogicStateText == 7) {
					me._gallery_counter7.ggText="8";
					me._gallery_counter7__text.innerHTML=me._gallery_counter7.ggText;
					if (me._gallery_counter7.ggUpdateText) {
					me._gallery_counter7.ggUpdateText=function() {
						var hs="8";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter7.ggUpdatePosition) me._gallery_counter7.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter7.ggCurrentLogicStateText == 8) {
					me._gallery_counter7.ggText="9";
					me._gallery_counter7__text.innerHTML=me._gallery_counter7.ggText;
					if (me._gallery_counter7.ggUpdateText) {
					me._gallery_counter7.ggUpdateText=function() {
						var hs="9";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter7.ggUpdatePosition) me._gallery_counter7.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter7.ggCurrentLogicStateText == 9) {
					me._gallery_counter7.ggText="10";
					me._gallery_counter7__text.innerHTML=me._gallery_counter7.ggText;
					if (me._gallery_counter7.ggUpdateText) {
					me._gallery_counter7.ggUpdateText=function() {
						var hs="10";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter7.ggUpdatePosition) me._gallery_counter7.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter7.ggCurrentLogicStateText == 10) {
					me._gallery_counter7.ggText="11";
					me._gallery_counter7__text.innerHTML=me._gallery_counter7.ggText;
					if (me._gallery_counter7.ggUpdateText) {
					me._gallery_counter7.ggUpdateText=function() {
						var hs="11";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter7.ggUpdatePosition) me._gallery_counter7.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter7.ggCurrentLogicStateText == 11) {
					me._gallery_counter7.ggText="12";
					me._gallery_counter7__text.innerHTML=me._gallery_counter7.ggText;
					if (me._gallery_counter7.ggUpdateText) {
					me._gallery_counter7.ggUpdateText=function() {
						var hs="12";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter7.ggUpdatePosition) me._gallery_counter7.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter7.ggCurrentLogicStateText == 12) {
					me._gallery_counter7.ggText="13";
					me._gallery_counter7__text.innerHTML=me._gallery_counter7.ggText;
					if (me._gallery_counter7.ggUpdateText) {
					me._gallery_counter7.ggUpdateText=function() {
						var hs="13";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter7.ggUpdatePosition) me._gallery_counter7.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter7.ggCurrentLogicStateText == 13) {
					me._gallery_counter7.ggText="14";
					me._gallery_counter7__text.innerHTML=me._gallery_counter7.ggText;
					if (me._gallery_counter7.ggUpdateText) {
					me._gallery_counter7.ggUpdateText=function() {
						var hs="14";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter7.ggUpdatePosition) me._gallery_counter7.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter7.ggCurrentLogicStateText == 14) {
					me._gallery_counter7.ggText="15";
					me._gallery_counter7__text.innerHTML=me._gallery_counter7.ggText;
					if (me._gallery_counter7.ggUpdateText) {
					me._gallery_counter7.ggUpdateText=function() {
						var hs="15";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter7.ggUpdatePosition) me._gallery_counter7.ggUpdatePosition();
					}
				}
				else {
					me._gallery_counter7.ggText="1";
					me._gallery_counter7__text.innerHTML=me._gallery_counter7.ggText;
					if (me._gallery_counter7.ggUpdateText) {
					me._gallery_counter7.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter7.ggUpdatePosition) me._gallery_counter7.ggUpdatePosition();
					}
				}
			}
		}
		this._gallery_counter7.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((28-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._gallery_controler10.appendChild(this._gallery_counter7);
		this._text_110=document.createElement('div');
		this._text_110__text=document.createElement('div');
		this._text_110.className='ggskin ggskin_textdiv';
		this._text_110.ggTextDiv=this._text_110__text;
		this._text_110.ggId="Text 1";
		this._text_110.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_110.ggVisible=true;
		this._text_110.className='ggskin ggskin_text ';
		this._text_110.ggType='text';
		hs ='';
		hs+='height : 156px;';
		hs+='left : -132px;';
		hs+='position : absolute;';
		hs+='top : -164px;';
		hs+='visibility : inherit;';
		hs+='width : 464px;';
		hs+='pointer-events:auto;';
		this._text_110.setAttribute('style',hs);
		this._text_110.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 464px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.27451);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.27451);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		this._text_110__text.setAttribute('style',hs);
		this._text_110__text.innerHTML="\u041f\u0415\u0420\u0415\u041d\u041e\u0421 \u0412\u041e\u0414\u041e\u0412\u041e\u0414\u0410 \u041a\u0410\u0420\u042c\u0415\u0420\u041d\u041e\u0413\u041e \u0412\u041e\u0414\u041e\u041e\u0422\u041b\u0418\u0412\u0410, 2014-2018 \u0433\u0433.<br\/><br\/>\u0422\u0440\u0443\u0431\u043a\u0430  \u041a\u0430\u0440\u043f\u0438\u043d\u0441\u043a\u0430\u044f, \u041f\u042d \u0434\u0438\u0430\u043c\u0435\u0442\u0440\u043e\u043c 500 \u043c\u043c<br\/>\u041e\u0442\u0441\u044b\u043f\u043a\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u0437 \u043f\u0435\u0441\u043a\u0430 \u043f\u043e\u0434 \u0443\u0437\u0435\u043b \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f  \u2013 1200 \u043c3<br\/>\u041c\u043e\u043d\u0442\u0430\u0436 \u0442\u0440\u0435\u0445 \u043d\u0438\u0442\u043e\u043a \u041f\u042d \u0432\u043e\u0434\u043e\u0432\u043e\u0434\u0430 \u0434\u0438\u0430\u043c\u0435\u0442\u0440\u043e\u043c 500 \u043c\u043c \u2013 4400 \u043c.\u043f.<br\/>\u041c\u043e\u043d\u0442\u0430\u0436 \u0441\u0431\u0440\u043e\u0441\u043d\u043e\u0433\u043e \u043a\u043e\u043b\u043b\u0435\u043a\u0442\u043e\u0440\u0430 \u0434\u0438\u0430\u043c\u0435\u0442\u0440\u043e\u043c 630 \u043c\u043c \u2013 600 \u043c.\u043f.<br\/>\u041c\u043e\u043d\u0442\u0430\u0436 \u0433\u0438\u043b\u044c\u0437 \u0434\u0438\u0430\u043c\u0435\u0442\u0440\u043e\u043c 800 \u043c\u043c \u2013 3600 \u043c.\u043f.<br\/>\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u043e\u0441\u043d\u044b\u0445 \u0441\u0442\u0430\u043d\u0446\u0438\u0439 \u2013 10 \u0448\u0442.";
		this._text_110.appendChild(this._text_110__text);
		me._text_110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_110.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._text_110.ggCurrentLogicStateVisible = -1;
		this._text_110.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width < 100) || 
				(ggSkinVars['gallery_pictures_1'] != 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_110.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_110.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_110.style[domTransition]='';
				if (me._text_110.ggCurrentLogicStateVisible == 0) {
					me._text_110.style.visibility="hidden";
					me._text_110.ggVisible=false;
				}
				else {
					me._text_110.style.visibility=(Number(me._text_110.style.opacity)>0||!me._text_110.style.opacity)?'inherit':'hidden';
					me._text_110.ggVisible=true;
				}
			}
		}
		this._text_110.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler10.appendChild(this._text_110);
		this._gallery_forward7=document.createElement('div');
		this._gallery_forward7__img=document.createElement('img');
		this._gallery_forward7__img.className='ggskin ggskin_button';
		this._gallery_forward7__img.setAttribute('src',basePath + 'images/gallery_forward7.png');
		this._gallery_forward7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_forward7__img.className='ggskin ggskin_button';
		this._gallery_forward7__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_forward7__img);
		this._gallery_forward7.appendChild(this._gallery_forward7__img);
		this._gallery_forward7.ggId="gallery_forward";
		this._gallery_forward7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_forward7.ggVisible=true;
		this._gallery_forward7.className='ggskin ggskin_button ';
		this._gallery_forward7.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 39px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_forward7.setAttribute('style',hs);
		this._gallery_forward7.style[domTransform + 'Origin']='50% 50%';
		me._gallery_forward7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_forward7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_forward7.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("1");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("6");
			me._gallery_fx10.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx10.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_forward7.onmouseover=function (e) {
			me._gallery_forward7__img.src=basePath + 'images/gallery_forward7__o.png';
		}
		this._gallery_forward7.onmouseout=function (e) {
			me._gallery_forward7__img.src=basePath + 'images/gallery_forward7.png';
		}
		this._gallery_forward7.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler10.appendChild(this._gallery_forward7);
		this._gallery_pause7=document.createElement('div');
		this._gallery_pause7__img=document.createElement('img');
		this._gallery_pause7__img.className='ggskin ggskin_button';
		this._gallery_pause7__img.setAttribute('src',basePath + 'images/gallery_pause7.png');
		this._gallery_pause7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_pause7__img.className='ggskin ggskin_button';
		this._gallery_pause7__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_pause7__img);
		this._gallery_pause7.appendChild(this._gallery_pause7__img);
		this._gallery_pause7.ggId="gallery_pause";
		this._gallery_pause7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_pause7.ggVisible=true;
		this._gallery_pause7.className='ggskin ggskin_button ';
		this._gallery_pause7.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 86px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_pause7.setAttribute('style',hs);
		this._gallery_pause7.style[domTransform + 'Origin']='50% 50%';
		me._gallery_pause7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_pause7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_pause7.onclick=function (e) {
			me._gallery_timer10.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer10.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause7.style[domTransition]='none';
			me._gallery_pause7.style.visibility='hidden';
			me._gallery_pause7.ggVisible=false;
			me._gallery_play7.style[domTransition]='none';
			me._gallery_play7.style.visibility=(Number(me._gallery_play7.style.opacity)>0||!me._gallery_play7.style.opacity)?'inherit':'hidden';
			me._gallery_play7.ggVisible=true;
		}
		this._gallery_pause7.onmouseover=function (e) {
			me._gallery_pause7__img.src=basePath + 'images/gallery_pause7__o.png';
		}
		this._gallery_pause7.onmouseout=function (e) {
			me._gallery_pause7__img.src=basePath + 'images/gallery_pause7.png';
		}
		this._gallery_pause7.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler10.appendChild(this._gallery_pause7);
		this._gallery_play7=document.createElement('div');
		this._gallery_play7__img=document.createElement('img');
		this._gallery_play7__img.className='ggskin ggskin_button';
		this._gallery_play7__img.setAttribute('src',basePath + 'images/gallery_play7.png');
		this._gallery_play7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_play7__img.className='ggskin ggskin_button';
		this._gallery_play7__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_play7__img);
		this._gallery_play7.appendChild(this._gallery_play7__img);
		this._gallery_play7.ggId="gallery_play";
		this._gallery_play7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_play7.ggVisible=true;
		this._gallery_play7.className='ggskin ggskin_button ';
		this._gallery_play7.ggType='button';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_play7.setAttribute('style',hs);
		this._gallery_play7.style[domTransform + 'Origin']='50% 50%';
		me._gallery_play7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_play7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_play7.onclick=function (e) {
			me._gallery_timer10.ggTimeout=Number("1.5") * 1000.0;
			me._gallery_timer10.ggTimestamp=me.ggCurrentTime;
			me._gallery_play7.style[domTransition]='none';
			me._gallery_play7.style.visibility='hidden';
			me._gallery_play7.ggVisible=false;
			me._gallery_pause7.style[domTransition]='none';
			me._gallery_pause7.style.visibility=(Number(me._gallery_pause7.style.opacity)>0||!me._gallery_pause7.style.opacity)?'inherit':'hidden';
			me._gallery_pause7.ggVisible=true;
		}
		this._gallery_play7.onmouseover=function (e) {
			me._gallery_play7__img.src=basePath + 'images/gallery_play7__o.png';
		}
		this._gallery_play7.onmouseout=function (e) {
			me._gallery_play7__img.src=basePath + 'images/gallery_play7.png';
		}
		this._gallery_play7.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler10.appendChild(this._gallery_play7);
		this._gallery_picture12.appendChild(this._gallery_controler10);
		this.divSkin.appendChild(this._gallery_picture12);
		this._gallery_picture11=document.createElement('div');
		this._gallery_picture11__img=document.createElement('img');
		this._gallery_picture11__img.className='ggskin ggskin_external';
		this._gallery_picture11__img.onload=function() {me._gallery_picture11.ggUpdatePosition();}
		this._gallery_picture11__img.setAttribute('src',basePath + '');
		this._gallery_picture11__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture11.appendChild(this._gallery_picture11__img);
		this._gallery_picture11.ggId="gallery_picture11";
		this._gallery_picture11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture11.ggVisible=false;
		this._gallery_picture11.className='ggskin ggskin_external ';
		this._gallery_picture11.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 8%;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		this._gallery_picture11.setAttribute('style',hs);
		this._gallery_picture11.style[domTransform + 'Origin']='50% 50%';
		me._gallery_picture11.ggIsActive=function() {
			return false;
		}
		me._gallery_picture11.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._gallery_picture11.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture11.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateExternalUrl = 5;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture11.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture11.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture11.style[domTransition]='';
				if (me._gallery_picture11.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture11.ggText="gallery/11-01.jpg";
					me._gallery_picture11__img.src=me._gallery_picture11.ggText;
				}
				else if (me._gallery_picture11.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture11.ggText="gallery/11-02.jpg";
					me._gallery_picture11__img.src=me._gallery_picture11.ggText;
				}
				else if (me._gallery_picture11.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture11.ggText="gallery/11-03.jpg";
					me._gallery_picture11__img.src=me._gallery_picture11.ggText;
				}
				else if (me._gallery_picture11.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture11.ggText="gallery/11-04.jpg";
					me._gallery_picture11__img.src=me._gallery_picture11.ggText;
				}
				else if (me._gallery_picture11.ggCurrentLogicStateExternalUrl == 4) {
					me._gallery_picture11.ggText="gallery/11-05.jpg";
					me._gallery_picture11__img.src=me._gallery_picture11.ggText;
				}
				else if (me._gallery_picture11.ggCurrentLogicStateExternalUrl == 5) {
					me._gallery_picture11.ggText="gallery/11-06.jpg";
					me._gallery_picture11__img.src=me._gallery_picture11.ggText;
				}
				else {
					me._gallery_picture11.ggText="";
					me._gallery_picture11__img.src=me._gallery_picture11.ggText;
				}
			}
		}
		this._gallery_picture11.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture11.clientWidth;
			var parentHeight = me._gallery_picture11.clientHeight;
			var aspectRatioDiv = me._gallery_picture11.clientWidth / me._gallery_picture11.clientHeight;
			var aspectRatioImg = me._gallery_picture11__img.naturalWidth / me._gallery_picture11__img.naturalHeight;
			if (me._gallery_picture11__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture11__img.naturalWidth;
			if (me._gallery_picture11__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture11__img.naturalHeight;
			var currentWidth = me._gallery_picture11__img.naturalWidth;
			var currentHeight = me._gallery_picture11__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture11__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture11__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			};
		}
		this._screen_tintclose9=document.createElement('div');
		this._screen_tintclose9.ggId="screen_tint-close";
		this._screen_tintclose9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen_tintclose9.ggVisible=true;
		this._screen_tintclose9.className='ggskin ggskin_rectangle ';
		this._screen_tintclose9.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 89.7917%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screen_tintclose9.setAttribute('style',hs);
		this._screen_tintclose9.style[domTransform + 'Origin']='50% 50%';
		me._screen_tintclose9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._screen_tintclose9.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._screen_tintclose9.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer9.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer9.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause6.style[domTransition]='none';
			me._gallery_pause6.style.visibility='hidden';
			me._gallery_pause6.ggVisible=false;
			me._gallery_play6.style[domTransition]='none';
			me._gallery_play6.style.visibility=(Number(me._gallery_play6.style.opacity)>0||!me._gallery_play6.style.opacity)?'inherit':'hidden';
			me._gallery_play6.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture11.style[domTransition]='none';
			me._gallery_picture11.style.visibility='hidden';
			me._gallery_picture11.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._screen_tintclose9.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_picture11.appendChild(this._screen_tintclose9);
		this._gallery_controler9=document.createElement('div');
		this._gallery_controler9.ggId="gallery_controler";
		this._gallery_controler9.ggLeft=-68;
		this._gallery_controler9.ggTop=-39;
		this._gallery_controler9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_controler9.ggVisible=true;
		this._gallery_controler9.className='ggskin ggskin_container ';
		this._gallery_controler9.ggType='container';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -68px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 118px;';
		hs+='pointer-events:none;';
		this._gallery_controler9.setAttribute('style',hs);
		this._gallery_controler9.style[domTransform + 'Origin']='50% 50%';
		me._gallery_controler9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_controler9.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_controler9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._gallery_timer9=document.createElement('div');
		this._gallery_timer9.ggTimestamp=this.ggCurrentTime;
		this._gallery_timer9.ggLastIsActive=true;
		this._gallery_timer9.ggTimeout=0;
		this._gallery_timer9.ggId="gallery_timer";
		this._gallery_timer9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_timer9.ggVisible=true;
		this._gallery_timer9.className='ggskin ggskin_timer ';
		this._gallery_timer9.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_timer9.setAttribute('style',hs);
		this._gallery_timer9.style[domTransform + 'Origin']='50% 50%';
		me._gallery_timer9.ggIsActive=function() {
			return (me._gallery_timer9.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._gallery_timer9.ggTimestamp) / me._gallery_timer9.ggTimeout) % 2 == 0));
		}
		me._gallery_timer9.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_timer9.ggActivate=function () {
			me._gallery_forward6.onclick();
		}
		this._gallery_timer9.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler9.appendChild(this._gallery_timer9);
		this._gallery_fx9=document.createElement('div');
		this._gallery_fx9.ggTimestamp=this.ggCurrentTime;
		this._gallery_fx9.ggLastIsActive=true;
		this._gallery_fx9.ggTimeout=1000;
		this._gallery_fx9.ggId="gallery_fx";
		this._gallery_fx9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_fx9.ggVisible=true;
		this._gallery_fx9.className='ggskin ggskin_timer ';
		this._gallery_fx9.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_fx9.setAttribute('style',hs);
		this._gallery_fx9.style[domTransform + 'Origin']='50% 50%';
		me._gallery_fx9.ggIsActive=function() {
			return (me._gallery_fx9.ggTimestamp + me._gallery_fx9.ggTimeout) >= me.ggCurrentTime;
		}
		me._gallery_fx9.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_fx9.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler9.appendChild(this._gallery_fx9);
		this._gallery_picture_preload9=document.createElement('div');
		this._gallery_picture_preload9__img=document.createElement('img');
		this._gallery_picture_preload9__img.className='ggskin ggskin_external';
		this._gallery_picture_preload9__img.onload=function() {me._gallery_picture_preload9.ggUpdatePosition();}
		this._gallery_picture_preload9__img.setAttribute('src',basePath + '');
		this._gallery_picture_preload9__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture_preload9.appendChild(this._gallery_picture_preload9__img);
		this._gallery_picture_preload9.ggId="gallery_picture_preload";
		this._gallery_picture_preload9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture_preload9.ggVisible=false;
		this._gallery_picture_preload9.className='ggskin ggskin_external ';
		this._gallery_picture_preload9.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 31px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		this._gallery_picture_preload9.setAttribute('style',hs);
		this._gallery_picture_preload9.style[domTransform + 'Origin']='0% 0%';
		me._gallery_picture_preload9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_picture_preload9.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_picture_preload9.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture_preload9.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateExternalUrl = 5;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture_preload9.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture_preload9.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture_preload9.style[domTransition]='';
				if (me._gallery_picture_preload9.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture_preload9.ggText="gallery/11-01.jpg";
					me._gallery_picture_preload9__img.src=me._gallery_picture_preload9.ggText;
				}
				else if (me._gallery_picture_preload9.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture_preload9.ggText="gallery/11-02.jpg";
					me._gallery_picture_preload9__img.src=me._gallery_picture_preload9.ggText;
				}
				else if (me._gallery_picture_preload9.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture_preload9.ggText="gallery/11-03.jpg";
					me._gallery_picture_preload9__img.src=me._gallery_picture_preload9.ggText;
				}
				else if (me._gallery_picture_preload9.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture_preload9.ggText="gallery/11-04.jpg";
					me._gallery_picture_preload9__img.src=me._gallery_picture_preload9.ggText;
				}
				else if (me._gallery_picture_preload9.ggCurrentLogicStateExternalUrl == 4) {
					me._gallery_picture_preload9.ggText="gallery/11-05.jpg";
					me._gallery_picture_preload9__img.src=me._gallery_picture_preload9.ggText;
				}
				else if (me._gallery_picture_preload9.ggCurrentLogicStateExternalUrl == 5) {
					me._gallery_picture_preload9.ggText="gallery/11-06.jpg";
					me._gallery_picture_preload9__img.src=me._gallery_picture_preload9.ggText;
				}
				else {
					me._gallery_picture_preload9.ggText="";
					me._gallery_picture_preload9__img.src=me._gallery_picture_preload9.ggText;
				}
			}
		}
		this._gallery_picture_preload9.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture_preload9.clientWidth;
			var parentHeight = me._gallery_picture_preload9.clientHeight;
			var aspectRatioDiv = me._gallery_picture_preload9.clientWidth / me._gallery_picture_preload9.clientHeight;
			var aspectRatioImg = me._gallery_picture_preload9__img.naturalWidth / me._gallery_picture_preload9__img.naturalHeight;
			if (me._gallery_picture_preload9__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture_preload9__img.naturalWidth;
			if (me._gallery_picture_preload9__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture_preload9__img.naturalHeight;
			var currentWidth = me._gallery_picture_preload9__img.naturalWidth;
			var currentHeight = me._gallery_picture_preload9__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture_preload9__img.setAttribute('style','position: absolute; left: 0px; top: 0px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture_preload9__img.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			};
		}
		this._gallery_controler9.appendChild(this._gallery_picture_preload9);
		this._gallery_close9=document.createElement('div');
		this._gallery_close9__img=document.createElement('img');
		this._gallery_close9__img.className='ggskin ggskin_image';
		this._gallery_close9__img.setAttribute('src',basePath + 'images/gallery_close9.png');
		this._gallery_close9__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_close9__img.className='ggskin ggskin_image';
		this._gallery_close9__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_close9__img);
		this._gallery_close9.appendChild(this._gallery_close9__img);
		this._gallery_close9.ggId="gallery_close";
		this._gallery_close9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_close9.ggVisible=true;
		this._gallery_close9.className='ggskin ggskin_image ';
		this._gallery_close9.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 133px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_close9.setAttribute('style',hs);
		this._gallery_close9.style[domTransform + 'Origin']='50% 50%';
		me._gallery_close9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_close9.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_close9.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer9.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer9.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause6.style[domTransition]='none';
			me._gallery_pause6.style.visibility='hidden';
			me._gallery_pause6.ggVisible=false;
			me._gallery_play6.style[domTransition]='none';
			me._gallery_play6.style.visibility=(Number(me._gallery_play6.style.opacity)>0||!me._gallery_play6.style.opacity)?'inherit':'hidden';
			me._gallery_play6.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture11.style[domTransition]='none';
			me._gallery_picture11.style.visibility='hidden';
			me._gallery_picture11.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._gallery_close9.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler9.appendChild(this._gallery_close9);
		this._gallery_back6=document.createElement('div');
		this._gallery_back6__img=document.createElement('img');
		this._gallery_back6__img.className='ggskin ggskin_button';
		this._gallery_back6__img.setAttribute('src',basePath + 'images/gallery_back6.png');
		this._gallery_back6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_back6__img.className='ggskin ggskin_button';
		this._gallery_back6__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_back6__img);
		this._gallery_back6.appendChild(this._gallery_back6__img);
		this._gallery_back6.ggId="gallery_back";
		this._gallery_back6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_back6.ggVisible=true;
		this._gallery_back6.className='ggskin ggskin_button ';
		this._gallery_back6.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_back6.setAttribute('style',hs);
		this._gallery_back6.style[domTransform + 'Origin']='50% 50%';
		me._gallery_back6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_back6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_back6.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("5");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("6");
			me._gallery_fx9.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx9.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_back6.onmouseover=function (e) {
			me._gallery_back6__img.src=basePath + 'images/gallery_back6__o.png';
		}
		this._gallery_back6.onmouseout=function (e) {
			me._gallery_back6__img.src=basePath + 'images/gallery_back6.png';
		}
		this._gallery_back6.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler9.appendChild(this._gallery_back6);
		this._gallery_counter_total6=document.createElement('div');
		this._gallery_counter_total6__text=document.createElement('div');
		this._gallery_counter_total6.className='ggskin ggskin_textdiv';
		this._gallery_counter_total6.ggTextDiv=this._gallery_counter_total6__text;
		this._gallery_counter_total6.ggId="gallery_counter_total";
		this._gallery_counter_total6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter_total6.ggVisible=true;
		this._gallery_counter_total6.className='ggskin ggskin_text ';
		this._gallery_counter_total6.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 51px;';
		hs+='pointer-events:auto;';
		this._gallery_counter_total6.setAttribute('style',hs);
		this._gallery_counter_total6.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 51px;';
		hs+='height: 18px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.588235);';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter_total6__text.setAttribute('style',hs);
		this._gallery_counter_total6__text.innerHTML="\/ 6";
		this._gallery_counter_total6.appendChild(this._gallery_counter_total6__text);
		me._gallery_counter_total6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter_total6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_counter_total6.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler9.appendChild(this._gallery_counter_total6);
		this._gallery_counter6=document.createElement('div');
		this._gallery_counter6__text=document.createElement('div');
		this._gallery_counter6.className='ggskin ggskin_textdiv';
		this._gallery_counter6.ggTextDiv=this._gallery_counter6__text;
		this._gallery_counter6.ggId="gallery_counter";
		this._gallery_counter6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter6.ggVisible=true;
		this._gallery_counter6.className='ggskin ggskin_text ';
		this._gallery_counter6.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		this._gallery_counter6.setAttribute('style',hs);
		this._gallery_counter6.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter6__text.setAttribute('style',hs);
		this._gallery_counter6__text.innerHTML="1";
		this._gallery_counter6.appendChild(this._gallery_counter6__text);
		me._gallery_counter6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_counter6.ggCurrentLogicStateText = -1;
		this._gallery_counter6.ggUpdateConditionTimer=function () {
			var newLogicStateText;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateText = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateText = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateText = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateText = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateText = 5;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 6)
			)
			{
				newLogicStateText = 6;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 7)
			)
			{
				newLogicStateText = 7;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 8)
			)
			{
				newLogicStateText = 8;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 9)
			)
			{
				newLogicStateText = 9;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 10)
			)
			{
				newLogicStateText = 10;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 11)
			)
			{
				newLogicStateText = 11;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 12)
			)
			{
				newLogicStateText = 12;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 13)
			)
			{
				newLogicStateText = 13;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 14)
			)
			{
				newLogicStateText = 14;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._gallery_counter6.ggCurrentLogicStateText != newLogicStateText) {
				me._gallery_counter6.ggCurrentLogicStateText = newLogicStateText;
				me._gallery_counter6.style[domTransition]='';
				if (me._gallery_counter6.ggCurrentLogicStateText == 0) {
					me._gallery_counter6.ggText="1";
					me._gallery_counter6__text.innerHTML=me._gallery_counter6.ggText;
					if (me._gallery_counter6.ggUpdateText) {
					me._gallery_counter6.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter6.ggUpdatePosition) me._gallery_counter6.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter6.ggCurrentLogicStateText == 1) {
					me._gallery_counter6.ggText="2";
					me._gallery_counter6__text.innerHTML=me._gallery_counter6.ggText;
					if (me._gallery_counter6.ggUpdateText) {
					me._gallery_counter6.ggUpdateText=function() {
						var hs="2";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter6.ggUpdatePosition) me._gallery_counter6.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter6.ggCurrentLogicStateText == 2) {
					me._gallery_counter6.ggText="3";
					me._gallery_counter6__text.innerHTML=me._gallery_counter6.ggText;
					if (me._gallery_counter6.ggUpdateText) {
					me._gallery_counter6.ggUpdateText=function() {
						var hs="3";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter6.ggUpdatePosition) me._gallery_counter6.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter6.ggCurrentLogicStateText == 3) {
					me._gallery_counter6.ggText="4";
					me._gallery_counter6__text.innerHTML=me._gallery_counter6.ggText;
					if (me._gallery_counter6.ggUpdateText) {
					me._gallery_counter6.ggUpdateText=function() {
						var hs="4";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter6.ggUpdatePosition) me._gallery_counter6.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter6.ggCurrentLogicStateText == 4) {
					me._gallery_counter6.ggText="5";
					me._gallery_counter6__text.innerHTML=me._gallery_counter6.ggText;
					if (me._gallery_counter6.ggUpdateText) {
					me._gallery_counter6.ggUpdateText=function() {
						var hs="5";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter6.ggUpdatePosition) me._gallery_counter6.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter6.ggCurrentLogicStateText == 5) {
					me._gallery_counter6.ggText="6";
					me._gallery_counter6__text.innerHTML=me._gallery_counter6.ggText;
					if (me._gallery_counter6.ggUpdateText) {
					me._gallery_counter6.ggUpdateText=function() {
						var hs="6";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter6.ggUpdatePosition) me._gallery_counter6.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter6.ggCurrentLogicStateText == 6) {
					me._gallery_counter6.ggText="7";
					me._gallery_counter6__text.innerHTML=me._gallery_counter6.ggText;
					if (me._gallery_counter6.ggUpdateText) {
					me._gallery_counter6.ggUpdateText=function() {
						var hs="7";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter6.ggUpdatePosition) me._gallery_counter6.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter6.ggCurrentLogicStateText == 7) {
					me._gallery_counter6.ggText="8";
					me._gallery_counter6__text.innerHTML=me._gallery_counter6.ggText;
					if (me._gallery_counter6.ggUpdateText) {
					me._gallery_counter6.ggUpdateText=function() {
						var hs="8";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter6.ggUpdatePosition) me._gallery_counter6.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter6.ggCurrentLogicStateText == 8) {
					me._gallery_counter6.ggText="9";
					me._gallery_counter6__text.innerHTML=me._gallery_counter6.ggText;
					if (me._gallery_counter6.ggUpdateText) {
					me._gallery_counter6.ggUpdateText=function() {
						var hs="9";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter6.ggUpdatePosition) me._gallery_counter6.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter6.ggCurrentLogicStateText == 9) {
					me._gallery_counter6.ggText="10";
					me._gallery_counter6__text.innerHTML=me._gallery_counter6.ggText;
					if (me._gallery_counter6.ggUpdateText) {
					me._gallery_counter6.ggUpdateText=function() {
						var hs="10";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter6.ggUpdatePosition) me._gallery_counter6.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter6.ggCurrentLogicStateText == 10) {
					me._gallery_counter6.ggText="11";
					me._gallery_counter6__text.innerHTML=me._gallery_counter6.ggText;
					if (me._gallery_counter6.ggUpdateText) {
					me._gallery_counter6.ggUpdateText=function() {
						var hs="11";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter6.ggUpdatePosition) me._gallery_counter6.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter6.ggCurrentLogicStateText == 11) {
					me._gallery_counter6.ggText="12";
					me._gallery_counter6__text.innerHTML=me._gallery_counter6.ggText;
					if (me._gallery_counter6.ggUpdateText) {
					me._gallery_counter6.ggUpdateText=function() {
						var hs="12";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter6.ggUpdatePosition) me._gallery_counter6.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter6.ggCurrentLogicStateText == 12) {
					me._gallery_counter6.ggText="13";
					me._gallery_counter6__text.innerHTML=me._gallery_counter6.ggText;
					if (me._gallery_counter6.ggUpdateText) {
					me._gallery_counter6.ggUpdateText=function() {
						var hs="13";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter6.ggUpdatePosition) me._gallery_counter6.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter6.ggCurrentLogicStateText == 13) {
					me._gallery_counter6.ggText="14";
					me._gallery_counter6__text.innerHTML=me._gallery_counter6.ggText;
					if (me._gallery_counter6.ggUpdateText) {
					me._gallery_counter6.ggUpdateText=function() {
						var hs="14";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter6.ggUpdatePosition) me._gallery_counter6.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter6.ggCurrentLogicStateText == 14) {
					me._gallery_counter6.ggText="15";
					me._gallery_counter6__text.innerHTML=me._gallery_counter6.ggText;
					if (me._gallery_counter6.ggUpdateText) {
					me._gallery_counter6.ggUpdateText=function() {
						var hs="15";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter6.ggUpdatePosition) me._gallery_counter6.ggUpdatePosition();
					}
				}
				else {
					me._gallery_counter6.ggText="1";
					me._gallery_counter6__text.innerHTML=me._gallery_counter6.ggText;
					if (me._gallery_counter6.ggUpdateText) {
					me._gallery_counter6.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter6.ggUpdatePosition) me._gallery_counter6.ggUpdatePosition();
					}
				}
			}
		}
		this._gallery_counter6.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((28-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._gallery_controler9.appendChild(this._gallery_counter6);
		this._text_19=document.createElement('div');
		this._text_19__text=document.createElement('div');
		this._text_19.className='ggskin ggskin_textdiv';
		this._text_19.ggTextDiv=this._text_19__text;
		this._text_19.ggId="Text 1";
		this._text_19.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_19.ggVisible=true;
		this._text_19.className='ggskin ggskin_text ';
		this._text_19.ggType='text';
		hs ='';
		hs+='height : 131px;';
		hs+='left : -132px;';
		hs+='position : absolute;';
		hs+='top : -138px;';
		hs+='visibility : inherit;';
		hs+='width : 464px;';
		hs+='pointer-events:auto;';
		this._text_19.setAttribute('style',hs);
		this._text_19.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 464px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.27451);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.27451);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		this._text_19__text.setAttribute('style',hs);
		this._text_19__text.innerHTML="\u041f\u0415\u0420\u0415\u041d\u041e\u0421 \u0412\u041e\u0414\u041e\u0412\u041e\u0414\u0410 \u041a\u0410\u0420\u042c\u0415\u0420\u041d\u041e\u0413\u041e \u0412\u041e\u0414\u041e\u041e\u0422\u041b\u0418\u0412\u0410, 2014-2017 \u0433\u0433.<br\/><br\/>\u0422\u0440\u0443\u0431\u043a\u0430  \u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f, \u041f\u042d \u0434\u0438\u0430\u043c\u0435\u0442\u0440\u043e\u043c 500 \u043c\u043c<br\/>\u041c\u043e\u043d\u0442\u0430\u0436 \u0442\u0440\u0435\u0445 \u043d\u0438\u0442\u043e\u043a \u041f\u042d \u0432\u043e\u0434\u043e\u0432\u043e\u0434\u0430 \u0434\u0438\u0430\u043c\u0435\u0442\u0440\u043e\u043c 500 \u043c\u043c \u2013 3200 \u043c.\u043f.<br\/>\u041c\u043e\u043d\u0442\u0430\u0436 \u0433\u0438\u043b\u044c\u0437 \u043d\u0430 \u043f\u0435\u0440\u0435\u0435\u0437\u0434\u0430\u0445 \u0438\u0437 \u0442\u0440\u0443\u0431 \u0434\u0438\u0430\u043c\u0435\u0442\u0440\u043e\u043c 820 \u043c\u043c \u2013 1400 \u043c.\u043f.<br\/>\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043d\u0430\u0441\u043e\u0441\u043d\u044b\u0445 \u0441\u0442\u0430\u043d\u0446\u0438\u0439 \u043d\u0430 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u0445 +34, +106 \u2013 12 \u0448\u0442.";
		this._text_19.appendChild(this._text_19__text);
		me._text_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_19.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._text_19.ggCurrentLogicStateVisible = -1;
		this._text_19.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width < 100) || 
				(ggSkinVars['gallery_pictures_1'] != 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_19.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_19.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_19.style[domTransition]='';
				if (me._text_19.ggCurrentLogicStateVisible == 0) {
					me._text_19.style.visibility="hidden";
					me._text_19.ggVisible=false;
				}
				else {
					me._text_19.style.visibility=(Number(me._text_19.style.opacity)>0||!me._text_19.style.opacity)?'inherit':'hidden';
					me._text_19.ggVisible=true;
				}
			}
		}
		this._text_19.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler9.appendChild(this._text_19);
		this._gallery_forward6=document.createElement('div');
		this._gallery_forward6__img=document.createElement('img');
		this._gallery_forward6__img.className='ggskin ggskin_button';
		this._gallery_forward6__img.setAttribute('src',basePath + 'images/gallery_forward6.png');
		this._gallery_forward6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_forward6__img.className='ggskin ggskin_button';
		this._gallery_forward6__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_forward6__img);
		this._gallery_forward6.appendChild(this._gallery_forward6__img);
		this._gallery_forward6.ggId="gallery_forward";
		this._gallery_forward6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_forward6.ggVisible=true;
		this._gallery_forward6.className='ggskin ggskin_button ';
		this._gallery_forward6.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 39px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_forward6.setAttribute('style',hs);
		this._gallery_forward6.style[domTransform + 'Origin']='50% 50%';
		me._gallery_forward6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_forward6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_forward6.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("1");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("6");
			me._gallery_fx9.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx9.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_forward6.onmouseover=function (e) {
			me._gallery_forward6__img.src=basePath + 'images/gallery_forward6__o.png';
		}
		this._gallery_forward6.onmouseout=function (e) {
			me._gallery_forward6__img.src=basePath + 'images/gallery_forward6.png';
		}
		this._gallery_forward6.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler9.appendChild(this._gallery_forward6);
		this._gallery_pause6=document.createElement('div');
		this._gallery_pause6__img=document.createElement('img');
		this._gallery_pause6__img.className='ggskin ggskin_button';
		this._gallery_pause6__img.setAttribute('src',basePath + 'images/gallery_pause6.png');
		this._gallery_pause6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_pause6__img.className='ggskin ggskin_button';
		this._gallery_pause6__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_pause6__img);
		this._gallery_pause6.appendChild(this._gallery_pause6__img);
		this._gallery_pause6.ggId="gallery_pause";
		this._gallery_pause6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_pause6.ggVisible=true;
		this._gallery_pause6.className='ggskin ggskin_button ';
		this._gallery_pause6.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 86px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_pause6.setAttribute('style',hs);
		this._gallery_pause6.style[domTransform + 'Origin']='50% 50%';
		me._gallery_pause6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_pause6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_pause6.onclick=function (e) {
			me._gallery_timer9.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer9.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause6.style[domTransition]='none';
			me._gallery_pause6.style.visibility='hidden';
			me._gallery_pause6.ggVisible=false;
			me._gallery_play6.style[domTransition]='none';
			me._gallery_play6.style.visibility=(Number(me._gallery_play6.style.opacity)>0||!me._gallery_play6.style.opacity)?'inherit':'hidden';
			me._gallery_play6.ggVisible=true;
		}
		this._gallery_pause6.onmouseover=function (e) {
			me._gallery_pause6__img.src=basePath + 'images/gallery_pause6__o.png';
		}
		this._gallery_pause6.onmouseout=function (e) {
			me._gallery_pause6__img.src=basePath + 'images/gallery_pause6.png';
		}
		this._gallery_pause6.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler9.appendChild(this._gallery_pause6);
		this._gallery_play6=document.createElement('div');
		this._gallery_play6__img=document.createElement('img');
		this._gallery_play6__img.className='ggskin ggskin_button';
		this._gallery_play6__img.setAttribute('src',basePath + 'images/gallery_play6.png');
		this._gallery_play6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_play6__img.className='ggskin ggskin_button';
		this._gallery_play6__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_play6__img);
		this._gallery_play6.appendChild(this._gallery_play6__img);
		this._gallery_play6.ggId="gallery_play";
		this._gallery_play6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_play6.ggVisible=true;
		this._gallery_play6.className='ggskin ggskin_button ';
		this._gallery_play6.ggType='button';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_play6.setAttribute('style',hs);
		this._gallery_play6.style[domTransform + 'Origin']='50% 50%';
		me._gallery_play6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_play6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_play6.onclick=function (e) {
			me._gallery_timer9.ggTimeout=Number("1.5") * 1000.0;
			me._gallery_timer9.ggTimestamp=me.ggCurrentTime;
			me._gallery_play6.style[domTransition]='none';
			me._gallery_play6.style.visibility='hidden';
			me._gallery_play6.ggVisible=false;
			me._gallery_pause6.style[domTransition]='none';
			me._gallery_pause6.style.visibility=(Number(me._gallery_pause6.style.opacity)>0||!me._gallery_pause6.style.opacity)?'inherit':'hidden';
			me._gallery_pause6.ggVisible=true;
		}
		this._gallery_play6.onmouseover=function (e) {
			me._gallery_play6__img.src=basePath + 'images/gallery_play6__o.png';
		}
		this._gallery_play6.onmouseout=function (e) {
			me._gallery_play6__img.src=basePath + 'images/gallery_play6.png';
		}
		this._gallery_play6.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler9.appendChild(this._gallery_play6);
		this._gallery_picture11.appendChild(this._gallery_controler9);
		this.divSkin.appendChild(this._gallery_picture11);
		this._gallery_picture10=document.createElement('div');
		this._gallery_picture10__img=document.createElement('img');
		this._gallery_picture10__img.className='ggskin ggskin_external';
		this._gallery_picture10__img.onload=function() {me._gallery_picture10.ggUpdatePosition();}
		this._gallery_picture10__img.setAttribute('src',basePath + '');
		this._gallery_picture10__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture10.appendChild(this._gallery_picture10__img);
		this._gallery_picture10.ggId="gallery_picture10";
		this._gallery_picture10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture10.ggVisible=false;
		this._gallery_picture10.className='ggskin ggskin_external ';
		this._gallery_picture10.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 8%;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		this._gallery_picture10.setAttribute('style',hs);
		this._gallery_picture10.style[domTransform + 'Origin']='50% 50%';
		me._gallery_picture10.ggIsActive=function() {
			return false;
		}
		me._gallery_picture10.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._gallery_picture10.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture10.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture10.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture10.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture10.style[domTransition]='';
				if (me._gallery_picture10.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture10.ggText="gallery/10-01.jpg";
					me._gallery_picture10__img.src=me._gallery_picture10.ggText;
				}
				else {
					me._gallery_picture10.ggText="";
					me._gallery_picture10__img.src=me._gallery_picture10.ggText;
				}
			}
		}
		this._gallery_picture10.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture10.clientWidth;
			var parentHeight = me._gallery_picture10.clientHeight;
			var aspectRatioDiv = me._gallery_picture10.clientWidth / me._gallery_picture10.clientHeight;
			var aspectRatioImg = me._gallery_picture10__img.naturalWidth / me._gallery_picture10__img.naturalHeight;
			if (me._gallery_picture10__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture10__img.naturalWidth;
			if (me._gallery_picture10__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture10__img.naturalHeight;
			var currentWidth = me._gallery_picture10__img.naturalWidth;
			var currentHeight = me._gallery_picture10__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture10__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture10__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			};
		}
		this._screen_tintclose8=document.createElement('div');
		this._screen_tintclose8.ggId="screen_tint-close";
		this._screen_tintclose8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen_tintclose8.ggVisible=true;
		this._screen_tintclose8.className='ggskin ggskin_rectangle ';
		this._screen_tintclose8.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 89.7917%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screen_tintclose8.setAttribute('style',hs);
		this._screen_tintclose8.style[domTransform + 'Origin']='50% 50%';
		me._screen_tintclose8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._screen_tintclose8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._screen_tintclose8.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer8.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer8.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause8.style[domTransition]='none';
			me._gallery_pause8.style.visibility='hidden';
			me._gallery_pause8.ggVisible=false;
			me._gallery_play8.style[domTransition]='none';
			me._gallery_play8.style.visibility=(Number(me._gallery_play8.style.opacity)>0||!me._gallery_play8.style.opacity)?'inherit':'hidden';
			me._gallery_play8.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture10.style[domTransition]='none';
			me._gallery_picture10.style.visibility='hidden';
			me._gallery_picture10.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._screen_tintclose8.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_picture10.appendChild(this._screen_tintclose8);
		this._gallery_controler8=document.createElement('div');
		this._gallery_controler8.ggId="gallery_controler";
		this._gallery_controler8.ggLeft=-68;
		this._gallery_controler8.ggTop=-39;
		this._gallery_controler8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_controler8.ggVisible=true;
		this._gallery_controler8.className='ggskin ggskin_container ';
		this._gallery_controler8.ggType='container';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -68px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 118px;';
		hs+='pointer-events:none;';
		this._gallery_controler8.setAttribute('style',hs);
		this._gallery_controler8.style[domTransform + 'Origin']='50% 50%';
		me._gallery_controler8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_controler8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_controler8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._gallery_timer8=document.createElement('div');
		this._gallery_timer8.ggTimestamp=this.ggCurrentTime;
		this._gallery_timer8.ggLastIsActive=true;
		this._gallery_timer8.ggTimeout=0;
		this._gallery_timer8.ggId="gallery_timer";
		this._gallery_timer8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_timer8.ggVisible=true;
		this._gallery_timer8.className='ggskin ggskin_timer ';
		this._gallery_timer8.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_timer8.setAttribute('style',hs);
		this._gallery_timer8.style[domTransform + 'Origin']='50% 50%';
		me._gallery_timer8.ggIsActive=function() {
			return (me._gallery_timer8.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._gallery_timer8.ggTimestamp) / me._gallery_timer8.ggTimeout) % 2 == 0));
		}
		me._gallery_timer8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_timer8.ggActivate=function () {
			me._gallery_forward8.onclick();
		}
		this._gallery_timer8.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler8.appendChild(this._gallery_timer8);
		this._gallery_fx8=document.createElement('div');
		this._gallery_fx8.ggTimestamp=this.ggCurrentTime;
		this._gallery_fx8.ggLastIsActive=true;
		this._gallery_fx8.ggTimeout=1000;
		this._gallery_fx8.ggId="gallery_fx";
		this._gallery_fx8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_fx8.ggVisible=true;
		this._gallery_fx8.className='ggskin ggskin_timer ';
		this._gallery_fx8.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_fx8.setAttribute('style',hs);
		this._gallery_fx8.style[domTransform + 'Origin']='50% 50%';
		me._gallery_fx8.ggIsActive=function() {
			return (me._gallery_fx8.ggTimestamp + me._gallery_fx8.ggTimeout) >= me.ggCurrentTime;
		}
		me._gallery_fx8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_fx8.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler8.appendChild(this._gallery_fx8);
		this._gallery_picture_preload8=document.createElement('div');
		this._gallery_picture_preload8__img=document.createElement('img');
		this._gallery_picture_preload8__img.className='ggskin ggskin_external';
		this._gallery_picture_preload8__img.onload=function() {me._gallery_picture_preload8.ggUpdatePosition();}
		this._gallery_picture_preload8__img.setAttribute('src',basePath + '');
		this._gallery_picture_preload8__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture_preload8.appendChild(this._gallery_picture_preload8__img);
		this._gallery_picture_preload8.ggId="gallery_picture_preload";
		this._gallery_picture_preload8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture_preload8.ggVisible=false;
		this._gallery_picture_preload8.className='ggskin ggskin_external ';
		this._gallery_picture_preload8.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 31px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		this._gallery_picture_preload8.setAttribute('style',hs);
		this._gallery_picture_preload8.style[domTransform + 'Origin']='0% 0%';
		me._gallery_picture_preload8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_picture_preload8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_picture_preload8.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture_preload8.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture_preload8.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture_preload8.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture_preload8.style[domTransition]='';
				if (me._gallery_picture_preload8.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture_preload8.ggText="gallery/10-01.jpg";
					me._gallery_picture_preload8__img.src=me._gallery_picture_preload8.ggText;
				}
				else {
					me._gallery_picture_preload8.ggText="";
					me._gallery_picture_preload8__img.src=me._gallery_picture_preload8.ggText;
				}
			}
		}
		this._gallery_picture_preload8.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture_preload8.clientWidth;
			var parentHeight = me._gallery_picture_preload8.clientHeight;
			var aspectRatioDiv = me._gallery_picture_preload8.clientWidth / me._gallery_picture_preload8.clientHeight;
			var aspectRatioImg = me._gallery_picture_preload8__img.naturalWidth / me._gallery_picture_preload8__img.naturalHeight;
			if (me._gallery_picture_preload8__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture_preload8__img.naturalWidth;
			if (me._gallery_picture_preload8__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture_preload8__img.naturalHeight;
			var currentWidth = me._gallery_picture_preload8__img.naturalWidth;
			var currentHeight = me._gallery_picture_preload8__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture_preload8__img.setAttribute('style','position: absolute; left: 0px; top: 0px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture_preload8__img.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			};
		}
		this._gallery_controler8.appendChild(this._gallery_picture_preload8);
		this._gallery_close8=document.createElement('div');
		this._gallery_close8__img=document.createElement('img');
		this._gallery_close8__img.className='ggskin ggskin_image';
		this._gallery_close8__img.setAttribute('src',basePath + 'images/gallery_close8.png');
		this._gallery_close8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_close8__img.className='ggskin ggskin_image';
		this._gallery_close8__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_close8__img);
		this._gallery_close8.appendChild(this._gallery_close8__img);
		this._gallery_close8.ggId="gallery_close";
		this._gallery_close8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_close8.ggVisible=true;
		this._gallery_close8.className='ggskin ggskin_image ';
		this._gallery_close8.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 44px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_close8.setAttribute('style',hs);
		this._gallery_close8.style[domTransform + 'Origin']='50% 50%';
		me._gallery_close8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_close8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_close8.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer8.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer8.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause8.style[domTransition]='none';
			me._gallery_pause8.style.visibility='hidden';
			me._gallery_pause8.ggVisible=false;
			me._gallery_play8.style[domTransition]='none';
			me._gallery_play8.style.visibility=(Number(me._gallery_play8.style.opacity)>0||!me._gallery_play8.style.opacity)?'inherit':'hidden';
			me._gallery_play8.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture10.style[domTransition]='none';
			me._gallery_picture10.style.visibility='hidden';
			me._gallery_picture10.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._gallery_close8.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler8.appendChild(this._gallery_close8);
		this._text_18=document.createElement('div');
		this._text_18__text=document.createElement('div');
		this._text_18.className='ggskin ggskin_textdiv';
		this._text_18.ggTextDiv=this._text_18__text;
		this._text_18.ggId="Text 1";
		this._text_18.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_18.ggVisible=true;
		this._text_18.className='ggskin ggskin_text ';
		this._text_18.ggType='text';
		hs ='';
		hs+='height : 154px;';
		hs+='left : -143px;';
		hs+='position : absolute;';
		hs+='top : -160px;';
		hs+='visibility : inherit;';
		hs+='width : 449px;';
		hs+='pointer-events:auto;';
		this._text_18.setAttribute('style',hs);
		this._text_18.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 449px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.27451);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 10px 11px 10px 11px;';
		hs+='overflow: hidden;';
		this._text_18__text.setAttribute('style',hs);
		this._text_18__text.innerHTML="\u041f\u041e\u041b\u0418\u0413\u041e\u041d \u0414\u041b\u042f \u0422\u0412\u0415\u0420\u0414\u042b\u0425 \u0411\u042b\u0422\u041e\u0412\u042b\u0425 \u0418 \u041f\u0420\u041e\u041c\u042b\u0428\u041b\u0415\u041d\u041d\u042b\u0425 \u041e\u0422\u0425\u041e\u0414\u041e\u0412. <br\/>1-\u0439 \u044d\u0442\u0430\u043f \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430 2015-2016 \u0433\u0433.<br\/><br\/>\u0423\u043a\u043b\u0430\u0434\u043a\u0430 \u0434\u043e\u0440\u043e\u0436\u043d\u044b\u0445  \u0436\u0435\u043b\u0435\u0437\u043e\u0431\u0435\u0442\u043e\u043d\u043d\u044b\u0445 \u043f\u043b\u0438\u0442 \u2013 180 \u0448\u0442.<br\/>\u0411\u0435\u0442\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u043e\u0434\u043e\u043e\u0442\u0432\u043e\u0434\u043d\u043e\u0433\u043e \u043b\u043e\u0442\u043a\u0430 \u2013 120 \u043c3<br\/>\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u043e\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u044f \u2013 840 \u043c.\u043f.<br\/>\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0433\u0438\u0434\u0440\u043e\u0438\u0437\u043e\u043b\u044f\u0446\u0438\u0438 \xab\u0411\u0435\u043d\u0442\u043e\u043c\u0430\u0442\xbb \u0438 \u0443\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u0435 \u043e\u0442\u043a\u043e\u0441\u043e\u0432 \u043a\u0430\u0440\u0442\u044b-\u043a\u043e\u0442\u043b\u043e\u0432\u0430\u043d\u0430 \u2013 3600 \u043c2";
		this._text_18.appendChild(this._text_18__text);
		me._text_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_18.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._text_18.ggCurrentLogicStateVisible = -1;
		this._text_18.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width < 100)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_18.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_18.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_18.style[domTransition]='';
				if (me._text_18.ggCurrentLogicStateVisible == 0) {
					me._text_18.style.visibility="hidden";
					me._text_18.ggVisible=false;
				}
				else {
					me._text_18.style.visibility=(Number(me._text_18.style.opacity)>0||!me._text_18.style.opacity)?'inherit':'hidden';
					me._text_18.ggVisible=true;
				}
			}
		}
		this._text_18.ggUpdatePosition=function (useTransition) {
			me._text_18.ggUpdateConditionResize();
		}
		this._gallery_controler8.appendChild(this._text_18);
		this._gallery_picture10.appendChild(this._gallery_controler8);
		this.divSkin.appendChild(this._gallery_picture10);
		this._gallery_picture09=document.createElement('div');
		this._gallery_picture09__img=document.createElement('img');
		this._gallery_picture09__img.className='ggskin ggskin_external';
		this._gallery_picture09__img.onload=function() {me._gallery_picture09.ggUpdatePosition();}
		this._gallery_picture09__img.setAttribute('src',basePath + '');
		this._gallery_picture09__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture09.appendChild(this._gallery_picture09__img);
		this._gallery_picture09.ggId="gallery_picture09";
		this._gallery_picture09.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture09.ggVisible=false;
		this._gallery_picture09.className='ggskin ggskin_external ';
		this._gallery_picture09.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 8%;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		this._gallery_picture09.setAttribute('style',hs);
		this._gallery_picture09.style[domTransform + 'Origin']='50% 50%';
		me._gallery_picture09.ggIsActive=function() {
			return false;
		}
		me._gallery_picture09.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._gallery_picture09.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture09.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateExternalUrl = 5;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 6)
			)
			{
				newLogicStateExternalUrl = 6;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 7)
			)
			{
				newLogicStateExternalUrl = 7;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 8)
			)
			{
				newLogicStateExternalUrl = 8;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 9)
			)
			{
				newLogicStateExternalUrl = 9;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 10)
			)
			{
				newLogicStateExternalUrl = 10;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 11)
			)
			{
				newLogicStateExternalUrl = 11;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture09.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture09.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture09.style[domTransition]='';
				if (me._gallery_picture09.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture09.ggText="gallery/09-01.jpg";
					me._gallery_picture09__img.src=me._gallery_picture09.ggText;
				}
				else if (me._gallery_picture09.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture09.ggText="gallery/09-02.jpg";
					me._gallery_picture09__img.src=me._gallery_picture09.ggText;
				}
				else if (me._gallery_picture09.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture09.ggText="gallery/09-03.jpg";
					me._gallery_picture09__img.src=me._gallery_picture09.ggText;
				}
				else if (me._gallery_picture09.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture09.ggText="gallery/09-04.jpg";
					me._gallery_picture09__img.src=me._gallery_picture09.ggText;
				}
				else if (me._gallery_picture09.ggCurrentLogicStateExternalUrl == 4) {
					me._gallery_picture09.ggText="gallery/09-05.jpg";
					me._gallery_picture09__img.src=me._gallery_picture09.ggText;
				}
				else if (me._gallery_picture09.ggCurrentLogicStateExternalUrl == 5) {
					me._gallery_picture09.ggText="gallery/09-06.jpg";
					me._gallery_picture09__img.src=me._gallery_picture09.ggText;
				}
				else if (me._gallery_picture09.ggCurrentLogicStateExternalUrl == 6) {
					me._gallery_picture09.ggText="gallery/09-07.jpg";
					me._gallery_picture09__img.src=me._gallery_picture09.ggText;
				}
				else if (me._gallery_picture09.ggCurrentLogicStateExternalUrl == 7) {
					me._gallery_picture09.ggText="gallery/09-08.jpg";
					me._gallery_picture09__img.src=me._gallery_picture09.ggText;
				}
				else if (me._gallery_picture09.ggCurrentLogicStateExternalUrl == 8) {
					me._gallery_picture09.ggText="gallery/09-09.jpg";
					me._gallery_picture09__img.src=me._gallery_picture09.ggText;
				}
				else if (me._gallery_picture09.ggCurrentLogicStateExternalUrl == 9) {
					me._gallery_picture09.ggText="gallery/09-10.jpg";
					me._gallery_picture09__img.src=me._gallery_picture09.ggText;
				}
				else if (me._gallery_picture09.ggCurrentLogicStateExternalUrl == 10) {
					me._gallery_picture09.ggText="gallery/09-11.jpg";
					me._gallery_picture09__img.src=me._gallery_picture09.ggText;
				}
				else if (me._gallery_picture09.ggCurrentLogicStateExternalUrl == 11) {
					me._gallery_picture09.ggText="gallery/09-12.jpg";
					me._gallery_picture09__img.src=me._gallery_picture09.ggText;
				}
				else {
					me._gallery_picture09.ggText="";
					me._gallery_picture09__img.src=me._gallery_picture09.ggText;
				}
			}
		}
		this._gallery_picture09.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture09.clientWidth;
			var parentHeight = me._gallery_picture09.clientHeight;
			var aspectRatioDiv = me._gallery_picture09.clientWidth / me._gallery_picture09.clientHeight;
			var aspectRatioImg = me._gallery_picture09__img.naturalWidth / me._gallery_picture09__img.naturalHeight;
			if (me._gallery_picture09__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture09__img.naturalWidth;
			if (me._gallery_picture09__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture09__img.naturalHeight;
			var currentWidth = me._gallery_picture09__img.naturalWidth;
			var currentHeight = me._gallery_picture09__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture09__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture09__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			};
		}
		this._screen_tintclose7=document.createElement('div');
		this._screen_tintclose7.ggId="screen_tint-close";
		this._screen_tintclose7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen_tintclose7.ggVisible=true;
		this._screen_tintclose7.className='ggskin ggskin_rectangle ';
		this._screen_tintclose7.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 89.7917%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screen_tintclose7.setAttribute('style',hs);
		this._screen_tintclose7.style[domTransform + 'Origin']='50% 50%';
		me._screen_tintclose7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._screen_tintclose7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._screen_tintclose7.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer7.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer7.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause5.style[domTransition]='none';
			me._gallery_pause5.style.visibility='hidden';
			me._gallery_pause5.ggVisible=false;
			me._gallery_play5.style[domTransition]='none';
			me._gallery_play5.style.visibility=(Number(me._gallery_play5.style.opacity)>0||!me._gallery_play5.style.opacity)?'inherit':'hidden';
			me._gallery_play5.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture09.style[domTransition]='none';
			me._gallery_picture09.style.visibility='hidden';
			me._gallery_picture09.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._screen_tintclose7.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_picture09.appendChild(this._screen_tintclose7);
		this._gallery_controler7=document.createElement('div');
		this._gallery_controler7.ggId="gallery_controler";
		this._gallery_controler7.ggLeft=-68;
		this._gallery_controler7.ggTop=-39;
		this._gallery_controler7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_controler7.ggVisible=true;
		this._gallery_controler7.className='ggskin ggskin_container ';
		this._gallery_controler7.ggType='container';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -68px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 118px;';
		hs+='pointer-events:none;';
		this._gallery_controler7.setAttribute('style',hs);
		this._gallery_controler7.style[domTransform + 'Origin']='50% 50%';
		me._gallery_controler7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_controler7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_controler7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._gallery_timer7=document.createElement('div');
		this._gallery_timer7.ggTimestamp=this.ggCurrentTime;
		this._gallery_timer7.ggLastIsActive=true;
		this._gallery_timer7.ggTimeout=0;
		this._gallery_timer7.ggId="gallery_timer";
		this._gallery_timer7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_timer7.ggVisible=true;
		this._gallery_timer7.className='ggskin ggskin_timer ';
		this._gallery_timer7.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_timer7.setAttribute('style',hs);
		this._gallery_timer7.style[domTransform + 'Origin']='50% 50%';
		me._gallery_timer7.ggIsActive=function() {
			return (me._gallery_timer7.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._gallery_timer7.ggTimestamp) / me._gallery_timer7.ggTimeout) % 2 == 0));
		}
		me._gallery_timer7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_timer7.ggActivate=function () {
			me._gallery_forward5.onclick();
		}
		this._gallery_timer7.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler7.appendChild(this._gallery_timer7);
		this._gallery_fx7=document.createElement('div');
		this._gallery_fx7.ggTimestamp=this.ggCurrentTime;
		this._gallery_fx7.ggLastIsActive=true;
		this._gallery_fx7.ggTimeout=1000;
		this._gallery_fx7.ggId="gallery_fx";
		this._gallery_fx7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_fx7.ggVisible=true;
		this._gallery_fx7.className='ggskin ggskin_timer ';
		this._gallery_fx7.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_fx7.setAttribute('style',hs);
		this._gallery_fx7.style[domTransform + 'Origin']='50% 50%';
		me._gallery_fx7.ggIsActive=function() {
			return (me._gallery_fx7.ggTimestamp + me._gallery_fx7.ggTimeout) >= me.ggCurrentTime;
		}
		me._gallery_fx7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_fx7.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler7.appendChild(this._gallery_fx7);
		this._gallery_picture_preload7=document.createElement('div');
		this._gallery_picture_preload7__img=document.createElement('img');
		this._gallery_picture_preload7__img.className='ggskin ggskin_external';
		this._gallery_picture_preload7__img.onload=function() {me._gallery_picture_preload7.ggUpdatePosition();}
		this._gallery_picture_preload7__img.setAttribute('src',basePath + '');
		this._gallery_picture_preload7__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture_preload7.appendChild(this._gallery_picture_preload7__img);
		this._gallery_picture_preload7.ggId="gallery_picture_preload";
		this._gallery_picture_preload7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture_preload7.ggVisible=false;
		this._gallery_picture_preload7.className='ggskin ggskin_external ';
		this._gallery_picture_preload7.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 31px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		this._gallery_picture_preload7.setAttribute('style',hs);
		this._gallery_picture_preload7.style[domTransform + 'Origin']='0% 0%';
		me._gallery_picture_preload7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_picture_preload7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_picture_preload7.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture_preload7.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateExternalUrl = 5;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 6)
			)
			{
				newLogicStateExternalUrl = 6;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 7)
			)
			{
				newLogicStateExternalUrl = 7;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 8)
			)
			{
				newLogicStateExternalUrl = 8;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 9)
			)
			{
				newLogicStateExternalUrl = 9;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 10)
			)
			{
				newLogicStateExternalUrl = 10;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 11)
			)
			{
				newLogicStateExternalUrl = 11;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture_preload7.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture_preload7.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture_preload7.style[domTransition]='';
				if (me._gallery_picture_preload7.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture_preload7.ggText="gallery/09-01.jpg";
					me._gallery_picture_preload7__img.src=me._gallery_picture_preload7.ggText;
				}
				else if (me._gallery_picture_preload7.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture_preload7.ggText="gallery/09-02.jpg";
					me._gallery_picture_preload7__img.src=me._gallery_picture_preload7.ggText;
				}
				else if (me._gallery_picture_preload7.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture_preload7.ggText="gallery/09-03.jpg";
					me._gallery_picture_preload7__img.src=me._gallery_picture_preload7.ggText;
				}
				else if (me._gallery_picture_preload7.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture_preload7.ggText="gallery/09-04.jpg";
					me._gallery_picture_preload7__img.src=me._gallery_picture_preload7.ggText;
				}
				else if (me._gallery_picture_preload7.ggCurrentLogicStateExternalUrl == 4) {
					me._gallery_picture_preload7.ggText="gallery/09-05.jpg";
					me._gallery_picture_preload7__img.src=me._gallery_picture_preload7.ggText;
				}
				else if (me._gallery_picture_preload7.ggCurrentLogicStateExternalUrl == 5) {
					me._gallery_picture_preload7.ggText="gallery/09-06.jpg";
					me._gallery_picture_preload7__img.src=me._gallery_picture_preload7.ggText;
				}
				else if (me._gallery_picture_preload7.ggCurrentLogicStateExternalUrl == 6) {
					me._gallery_picture_preload7.ggText="gallery/09-07.jpg";
					me._gallery_picture_preload7__img.src=me._gallery_picture_preload7.ggText;
				}
				else if (me._gallery_picture_preload7.ggCurrentLogicStateExternalUrl == 7) {
					me._gallery_picture_preload7.ggText="gallery/09-08.jpg";
					me._gallery_picture_preload7__img.src=me._gallery_picture_preload7.ggText;
				}
				else if (me._gallery_picture_preload7.ggCurrentLogicStateExternalUrl == 8) {
					me._gallery_picture_preload7.ggText="gallery/09-09.jpg";
					me._gallery_picture_preload7__img.src=me._gallery_picture_preload7.ggText;
				}
				else if (me._gallery_picture_preload7.ggCurrentLogicStateExternalUrl == 9) {
					me._gallery_picture_preload7.ggText="gallery/09-10.jpg";
					me._gallery_picture_preload7__img.src=me._gallery_picture_preload7.ggText;
				}
				else if (me._gallery_picture_preload7.ggCurrentLogicStateExternalUrl == 10) {
					me._gallery_picture_preload7.ggText="gallery/09-11.jpg";
					me._gallery_picture_preload7__img.src=me._gallery_picture_preload7.ggText;
				}
				else if (me._gallery_picture_preload7.ggCurrentLogicStateExternalUrl == 11) {
					me._gallery_picture_preload7.ggText="gallery/09-12.jpg";
					me._gallery_picture_preload7__img.src=me._gallery_picture_preload7.ggText;
				}
				else {
					me._gallery_picture_preload7.ggText="";
					me._gallery_picture_preload7__img.src=me._gallery_picture_preload7.ggText;
				}
			}
		}
		this._gallery_picture_preload7.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture_preload7.clientWidth;
			var parentHeight = me._gallery_picture_preload7.clientHeight;
			var aspectRatioDiv = me._gallery_picture_preload7.clientWidth / me._gallery_picture_preload7.clientHeight;
			var aspectRatioImg = me._gallery_picture_preload7__img.naturalWidth / me._gallery_picture_preload7__img.naturalHeight;
			if (me._gallery_picture_preload7__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture_preload7__img.naturalWidth;
			if (me._gallery_picture_preload7__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture_preload7__img.naturalHeight;
			var currentWidth = me._gallery_picture_preload7__img.naturalWidth;
			var currentHeight = me._gallery_picture_preload7__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture_preload7__img.setAttribute('style','position: absolute; left: 0px; top: 0px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture_preload7__img.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			};
		}
		this._gallery_controler7.appendChild(this._gallery_picture_preload7);
		this._gallery_close7=document.createElement('div');
		this._gallery_close7__img=document.createElement('img');
		this._gallery_close7__img.className='ggskin ggskin_image';
		this._gallery_close7__img.setAttribute('src',basePath + 'images/gallery_close7.png');
		this._gallery_close7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_close7__img.className='ggskin ggskin_image';
		this._gallery_close7__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_close7__img);
		this._gallery_close7.appendChild(this._gallery_close7__img);
		this._gallery_close7.ggId="gallery_close";
		this._gallery_close7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_close7.ggVisible=true;
		this._gallery_close7.className='ggskin ggskin_image ';
		this._gallery_close7.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 133px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_close7.setAttribute('style',hs);
		this._gallery_close7.style[domTransform + 'Origin']='50% 50%';
		me._gallery_close7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_close7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_close7.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer7.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer7.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause5.style[domTransition]='none';
			me._gallery_pause5.style.visibility='hidden';
			me._gallery_pause5.ggVisible=false;
			me._gallery_play5.style[domTransition]='none';
			me._gallery_play5.style.visibility=(Number(me._gallery_play5.style.opacity)>0||!me._gallery_play5.style.opacity)?'inherit':'hidden';
			me._gallery_play5.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture09.style[domTransition]='none';
			me._gallery_picture09.style.visibility='hidden';
			me._gallery_picture09.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._gallery_close7.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler7.appendChild(this._gallery_close7);
		this._gallery_back5=document.createElement('div');
		this._gallery_back5__img=document.createElement('img');
		this._gallery_back5__img.className='ggskin ggskin_button';
		this._gallery_back5__img.setAttribute('src',basePath + 'images/gallery_back5.png');
		this._gallery_back5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_back5__img.className='ggskin ggskin_button';
		this._gallery_back5__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_back5__img);
		this._gallery_back5.appendChild(this._gallery_back5__img);
		this._gallery_back5.ggId="gallery_back";
		this._gallery_back5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_back5.ggVisible=true;
		this._gallery_back5.className='ggskin ggskin_button ';
		this._gallery_back5.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_back5.setAttribute('style',hs);
		this._gallery_back5.style[domTransform + 'Origin']='50% 50%';
		me._gallery_back5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_back5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_back5.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("11");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("12");
			me._gallery_fx7.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx7.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_back5.onmouseover=function (e) {
			me._gallery_back5__img.src=basePath + 'images/gallery_back5__o.png';
		}
		this._gallery_back5.onmouseout=function (e) {
			me._gallery_back5__img.src=basePath + 'images/gallery_back5.png';
		}
		this._gallery_back5.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler7.appendChild(this._gallery_back5);
		this._gallery_counter_total5=document.createElement('div');
		this._gallery_counter_total5__text=document.createElement('div');
		this._gallery_counter_total5.className='ggskin ggskin_textdiv';
		this._gallery_counter_total5.ggTextDiv=this._gallery_counter_total5__text;
		this._gallery_counter_total5.ggId="gallery_counter_total";
		this._gallery_counter_total5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter_total5.ggVisible=true;
		this._gallery_counter_total5.className='ggskin ggskin_text ';
		this._gallery_counter_total5.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 51px;';
		hs+='pointer-events:auto;';
		this._gallery_counter_total5.setAttribute('style',hs);
		this._gallery_counter_total5.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 51px;';
		hs+='height: 18px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.588235);';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter_total5__text.setAttribute('style',hs);
		this._gallery_counter_total5__text.innerHTML="\/ 12";
		this._gallery_counter_total5.appendChild(this._gallery_counter_total5__text);
		me._gallery_counter_total5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter_total5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_counter_total5.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler7.appendChild(this._gallery_counter_total5);
		this._gallery_counter5=document.createElement('div');
		this._gallery_counter5__text=document.createElement('div');
		this._gallery_counter5.className='ggskin ggskin_textdiv';
		this._gallery_counter5.ggTextDiv=this._gallery_counter5__text;
		this._gallery_counter5.ggId="gallery_counter";
		this._gallery_counter5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter5.ggVisible=true;
		this._gallery_counter5.className='ggskin ggskin_text ';
		this._gallery_counter5.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -64px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		this._gallery_counter5.setAttribute('style',hs);
		this._gallery_counter5.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter5__text.setAttribute('style',hs);
		this._gallery_counter5__text.innerHTML="1";
		this._gallery_counter5.appendChild(this._gallery_counter5__text);
		me._gallery_counter5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_counter5.ggCurrentLogicStateText = -1;
		this._gallery_counter5.ggUpdateConditionTimer=function () {
			var newLogicStateText;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateText = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateText = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateText = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateText = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateText = 5;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 6)
			)
			{
				newLogicStateText = 6;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 7)
			)
			{
				newLogicStateText = 7;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 8)
			)
			{
				newLogicStateText = 8;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 9)
			)
			{
				newLogicStateText = 9;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 10)
			)
			{
				newLogicStateText = 10;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 11)
			)
			{
				newLogicStateText = 11;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 12)
			)
			{
				newLogicStateText = 12;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 13)
			)
			{
				newLogicStateText = 13;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 14)
			)
			{
				newLogicStateText = 14;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._gallery_counter5.ggCurrentLogicStateText != newLogicStateText) {
				me._gallery_counter5.ggCurrentLogicStateText = newLogicStateText;
				me._gallery_counter5.style[domTransition]='';
				if (me._gallery_counter5.ggCurrentLogicStateText == 0) {
					me._gallery_counter5.ggText="1";
					me._gallery_counter5__text.innerHTML=me._gallery_counter5.ggText;
					if (me._gallery_counter5.ggUpdateText) {
					me._gallery_counter5.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter5.ggUpdatePosition) me._gallery_counter5.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter5.ggCurrentLogicStateText == 1) {
					me._gallery_counter5.ggText="2";
					me._gallery_counter5__text.innerHTML=me._gallery_counter5.ggText;
					if (me._gallery_counter5.ggUpdateText) {
					me._gallery_counter5.ggUpdateText=function() {
						var hs="2";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter5.ggUpdatePosition) me._gallery_counter5.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter5.ggCurrentLogicStateText == 2) {
					me._gallery_counter5.ggText="3";
					me._gallery_counter5__text.innerHTML=me._gallery_counter5.ggText;
					if (me._gallery_counter5.ggUpdateText) {
					me._gallery_counter5.ggUpdateText=function() {
						var hs="3";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter5.ggUpdatePosition) me._gallery_counter5.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter5.ggCurrentLogicStateText == 3) {
					me._gallery_counter5.ggText="4";
					me._gallery_counter5__text.innerHTML=me._gallery_counter5.ggText;
					if (me._gallery_counter5.ggUpdateText) {
					me._gallery_counter5.ggUpdateText=function() {
						var hs="4";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter5.ggUpdatePosition) me._gallery_counter5.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter5.ggCurrentLogicStateText == 4) {
					me._gallery_counter5.ggText="5";
					me._gallery_counter5__text.innerHTML=me._gallery_counter5.ggText;
					if (me._gallery_counter5.ggUpdateText) {
					me._gallery_counter5.ggUpdateText=function() {
						var hs="5";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter5.ggUpdatePosition) me._gallery_counter5.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter5.ggCurrentLogicStateText == 5) {
					me._gallery_counter5.ggText="6";
					me._gallery_counter5__text.innerHTML=me._gallery_counter5.ggText;
					if (me._gallery_counter5.ggUpdateText) {
					me._gallery_counter5.ggUpdateText=function() {
						var hs="6";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter5.ggUpdatePosition) me._gallery_counter5.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter5.ggCurrentLogicStateText == 6) {
					me._gallery_counter5.ggText="7";
					me._gallery_counter5__text.innerHTML=me._gallery_counter5.ggText;
					if (me._gallery_counter5.ggUpdateText) {
					me._gallery_counter5.ggUpdateText=function() {
						var hs="7";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter5.ggUpdatePosition) me._gallery_counter5.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter5.ggCurrentLogicStateText == 7) {
					me._gallery_counter5.ggText="8";
					me._gallery_counter5__text.innerHTML=me._gallery_counter5.ggText;
					if (me._gallery_counter5.ggUpdateText) {
					me._gallery_counter5.ggUpdateText=function() {
						var hs="8";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter5.ggUpdatePosition) me._gallery_counter5.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter5.ggCurrentLogicStateText == 8) {
					me._gallery_counter5.ggText="9";
					me._gallery_counter5__text.innerHTML=me._gallery_counter5.ggText;
					if (me._gallery_counter5.ggUpdateText) {
					me._gallery_counter5.ggUpdateText=function() {
						var hs="9";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter5.ggUpdatePosition) me._gallery_counter5.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter5.ggCurrentLogicStateText == 9) {
					me._gallery_counter5.ggText="10";
					me._gallery_counter5__text.innerHTML=me._gallery_counter5.ggText;
					if (me._gallery_counter5.ggUpdateText) {
					me._gallery_counter5.ggUpdateText=function() {
						var hs="10";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter5.ggUpdatePosition) me._gallery_counter5.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter5.ggCurrentLogicStateText == 10) {
					me._gallery_counter5.ggText="11";
					me._gallery_counter5__text.innerHTML=me._gallery_counter5.ggText;
					if (me._gallery_counter5.ggUpdateText) {
					me._gallery_counter5.ggUpdateText=function() {
						var hs="11";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter5.ggUpdatePosition) me._gallery_counter5.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter5.ggCurrentLogicStateText == 11) {
					me._gallery_counter5.ggText="12";
					me._gallery_counter5__text.innerHTML=me._gallery_counter5.ggText;
					if (me._gallery_counter5.ggUpdateText) {
					me._gallery_counter5.ggUpdateText=function() {
						var hs="12";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter5.ggUpdatePosition) me._gallery_counter5.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter5.ggCurrentLogicStateText == 12) {
					me._gallery_counter5.ggText="13";
					me._gallery_counter5__text.innerHTML=me._gallery_counter5.ggText;
					if (me._gallery_counter5.ggUpdateText) {
					me._gallery_counter5.ggUpdateText=function() {
						var hs="13";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter5.ggUpdatePosition) me._gallery_counter5.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter5.ggCurrentLogicStateText == 13) {
					me._gallery_counter5.ggText="14";
					me._gallery_counter5__text.innerHTML=me._gallery_counter5.ggText;
					if (me._gallery_counter5.ggUpdateText) {
					me._gallery_counter5.ggUpdateText=function() {
						var hs="14";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter5.ggUpdatePosition) me._gallery_counter5.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter5.ggCurrentLogicStateText == 14) {
					me._gallery_counter5.ggText="15";
					me._gallery_counter5__text.innerHTML=me._gallery_counter5.ggText;
					if (me._gallery_counter5.ggUpdateText) {
					me._gallery_counter5.ggUpdateText=function() {
						var hs="15";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter5.ggUpdatePosition) me._gallery_counter5.ggUpdatePosition();
					}
				}
				else {
					me._gallery_counter5.ggText="1";
					me._gallery_counter5__text.innerHTML=me._gallery_counter5.ggText;
					if (me._gallery_counter5.ggUpdateText) {
					me._gallery_counter5.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter5.ggUpdatePosition) me._gallery_counter5.ggUpdatePosition();
					}
				}
			}
		}
		this._gallery_counter5.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((28-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._gallery_controler7.appendChild(this._gallery_counter5);
		this._text_17=document.createElement('div');
		this._text_17__text=document.createElement('div');
		this._text_17.className='ggskin ggskin_textdiv';
		this._text_17.ggTextDiv=this._text_17__text;
		this._text_17.ggId="Text 1";
		this._text_17.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_17.ggVisible=true;
		this._text_17.className='ggskin ggskin_text ';
		this._text_17.ggType='text';
		hs ='';
		hs+='height : 149px;';
		hs+='left : -212px;';
		hs+='position : absolute;';
		hs+='top : -154px;';
		hs+='visibility : inherit;';
		hs+='width : 572px;';
		hs+='pointer-events:auto;';
		this._text_17.setAttribute('style',hs);
		this._text_17.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 572px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.27451);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.27451);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		this._text_17__text.setAttribute('style',hs);
		this._text_17__text.innerHTML="\u0425\u0412\u041e\u0421\u0422\u041e\u0412\u041e\u0415 \u0425\u041e\u0417\u042f\u0419\u0421\u0422\u0412\u041e \u0421 \u041e\u0411\u041e\u0420\u041e\u0422\u041d\u042b\u041c \u0412\u041e\u0414\u041e\u0421\u041d\u0410\u0411\u0416\u0415\u041d\u0418\u0415\u041c, 2017-2018 \u0433\u0433.<br\/><br\/>\u0412\u043e\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0433\u0438\u0434\u0440\u043e\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u043e\u043e\u0440\u0443\u0436\u0435\u043d\u0438\u0439 \u0434\u043e \u043e\u0442\u043c\u0435\u0442\u043a\u0438 138 \u043c (2-\u044f \u043f\u043e\u044f\u0440\u0443\u0441\u043d\u0430\u044f \u0434\u0430\u043c\u0431\u0430 \u043e\u0431\u0432\u0430\u043b\u043e\u0432\u0430\u043d\u0438\u044f) <br\/>\u041e\u0431\u044a\u0451\u043c \u043e\u0442\u0441\u044b\u043f\u043a\u0438 \u043f\u0435\u0441\u043a\u0430 \u2013 494000 \u043c3<br\/>\u041e\u0431\u044a\u0451\u043c \u043e\u0442\u0441\u044b\u043f\u043a\u0438 \u041f\u0413\u0421- 140000 \u043c3<br\/>\u0417\u0430\u043c\u0435\u043d\u0430 \u0442\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u0430 \u2013 5900 \u043c";
		this._text_17.appendChild(this._text_17__text);
		me._text_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_17.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._text_17.ggCurrentLogicStateVisible = -1;
		this._text_17.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width < 100) || 
				(ggSkinVars['gallery_pictures_1'] != 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_17.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_17.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_17.style[domTransition]='';
				if (me._text_17.ggCurrentLogicStateVisible == 0) {
					me._text_17.style.visibility="hidden";
					me._text_17.ggVisible=false;
				}
				else {
					me._text_17.style.visibility=(Number(me._text_17.style.opacity)>0||!me._text_17.style.opacity)?'inherit':'hidden';
					me._text_17.ggVisible=true;
				}
			}
		}
		this._text_17.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler7.appendChild(this._text_17);
		this._gallery_forward5=document.createElement('div');
		this._gallery_forward5__img=document.createElement('img');
		this._gallery_forward5__img.className='ggskin ggskin_button';
		this._gallery_forward5__img.setAttribute('src',basePath + 'images/gallery_forward5.png');
		this._gallery_forward5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_forward5__img.className='ggskin ggskin_button';
		this._gallery_forward5__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_forward5__img);
		this._gallery_forward5.appendChild(this._gallery_forward5__img);
		this._gallery_forward5.ggId="gallery_forward";
		this._gallery_forward5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_forward5.ggVisible=true;
		this._gallery_forward5.className='ggskin ggskin_button ';
		this._gallery_forward5.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 39px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_forward5.setAttribute('style',hs);
		this._gallery_forward5.style[domTransform + 'Origin']='50% 50%';
		me._gallery_forward5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_forward5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_forward5.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("1");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("12");
			me._gallery_fx7.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx7.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_forward5.onmouseover=function (e) {
			me._gallery_forward5__img.src=basePath + 'images/gallery_forward5__o.png';
		}
		this._gallery_forward5.onmouseout=function (e) {
			me._gallery_forward5__img.src=basePath + 'images/gallery_forward5.png';
		}
		this._gallery_forward5.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler7.appendChild(this._gallery_forward5);
		this._gallery_pause5=document.createElement('div');
		this._gallery_pause5__img=document.createElement('img');
		this._gallery_pause5__img.className='ggskin ggskin_button';
		this._gallery_pause5__img.setAttribute('src',basePath + 'images/gallery_pause5.png');
		this._gallery_pause5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_pause5__img.className='ggskin ggskin_button';
		this._gallery_pause5__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_pause5__img);
		this._gallery_pause5.appendChild(this._gallery_pause5__img);
		this._gallery_pause5.ggId="gallery_pause";
		this._gallery_pause5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_pause5.ggVisible=true;
		this._gallery_pause5.className='ggskin ggskin_button ';
		this._gallery_pause5.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 86px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_pause5.setAttribute('style',hs);
		this._gallery_pause5.style[domTransform + 'Origin']='50% 50%';
		me._gallery_pause5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_pause5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_pause5.onclick=function (e) {
			me._gallery_timer7.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer7.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause5.style[domTransition]='none';
			me._gallery_pause5.style.visibility='hidden';
			me._gallery_pause5.ggVisible=false;
			me._gallery_play5.style[domTransition]='none';
			me._gallery_play5.style.visibility=(Number(me._gallery_play5.style.opacity)>0||!me._gallery_play5.style.opacity)?'inherit':'hidden';
			me._gallery_play5.ggVisible=true;
		}
		this._gallery_pause5.onmouseover=function (e) {
			me._gallery_pause5__img.src=basePath + 'images/gallery_pause5__o.png';
		}
		this._gallery_pause5.onmouseout=function (e) {
			me._gallery_pause5__img.src=basePath + 'images/gallery_pause5.png';
		}
		this._gallery_pause5.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler7.appendChild(this._gallery_pause5);
		this._gallery_play5=document.createElement('div');
		this._gallery_play5__img=document.createElement('img');
		this._gallery_play5__img.className='ggskin ggskin_button';
		this._gallery_play5__img.setAttribute('src',basePath + 'images/gallery_play5.png');
		this._gallery_play5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_play5__img.className='ggskin ggskin_button';
		this._gallery_play5__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_play5__img);
		this._gallery_play5.appendChild(this._gallery_play5__img);
		this._gallery_play5.ggId="gallery_play";
		this._gallery_play5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_play5.ggVisible=true;
		this._gallery_play5.className='ggskin ggskin_button ';
		this._gallery_play5.ggType='button';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_play5.setAttribute('style',hs);
		this._gallery_play5.style[domTransform + 'Origin']='50% 50%';
		me._gallery_play5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_play5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_play5.onclick=function (e) {
			me._gallery_timer7.ggTimeout=Number("1.5") * 1000.0;
			me._gallery_timer7.ggTimestamp=me.ggCurrentTime;
			me._gallery_play5.style[domTransition]='none';
			me._gallery_play5.style.visibility='hidden';
			me._gallery_play5.ggVisible=false;
			me._gallery_pause5.style[domTransition]='none';
			me._gallery_pause5.style.visibility=(Number(me._gallery_pause5.style.opacity)>0||!me._gallery_pause5.style.opacity)?'inherit':'hidden';
			me._gallery_pause5.ggVisible=true;
		}
		this._gallery_play5.onmouseover=function (e) {
			me._gallery_play5__img.src=basePath + 'images/gallery_play5__o.png';
		}
		this._gallery_play5.onmouseout=function (e) {
			me._gallery_play5__img.src=basePath + 'images/gallery_play5.png';
		}
		this._gallery_play5.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler7.appendChild(this._gallery_play5);
		this._gallery_picture09.appendChild(this._gallery_controler7);
		this.divSkin.appendChild(this._gallery_picture09);
		this._gallery_picture07=document.createElement('div');
		this._gallery_picture07__img=document.createElement('img');
		this._gallery_picture07__img.className='ggskin ggskin_external';
		this._gallery_picture07__img.onload=function() {me._gallery_picture07.ggUpdatePosition();}
		this._gallery_picture07__img.setAttribute('src',basePath + '');
		this._gallery_picture07__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture07.appendChild(this._gallery_picture07__img);
		this._gallery_picture07.ggId="gallery_picture07";
		this._gallery_picture07.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture07.ggVisible=false;
		this._gallery_picture07.className='ggskin ggskin_external ';
		this._gallery_picture07.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 8%;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		this._gallery_picture07.setAttribute('style',hs);
		this._gallery_picture07.style[domTransform + 'Origin']='50% 50%';
		me._gallery_picture07.ggIsActive=function() {
			return false;
		}
		me._gallery_picture07.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._gallery_picture07.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture07.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture07.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture07.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture07.style[domTransition]='';
				if (me._gallery_picture07.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture07.ggText="gallery/07-01.jpg";
					me._gallery_picture07__img.src=me._gallery_picture07.ggText;
				}
				else if (me._gallery_picture07.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture07.ggText="gallery/07-02.jpg";
					me._gallery_picture07__img.src=me._gallery_picture07.ggText;
				}
				else if (me._gallery_picture07.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture07.ggText="gallery/07-03.jpg";
					me._gallery_picture07__img.src=me._gallery_picture07.ggText;
				}
				else if (me._gallery_picture07.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture07.ggText="gallery/07-04.jpg";
					me._gallery_picture07__img.src=me._gallery_picture07.ggText;
				}
				else {
					me._gallery_picture07.ggText="";
					me._gallery_picture07__img.src=me._gallery_picture07.ggText;
				}
			}
		}
		this._gallery_picture07.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture07.clientWidth;
			var parentHeight = me._gallery_picture07.clientHeight;
			var aspectRatioDiv = me._gallery_picture07.clientWidth / me._gallery_picture07.clientHeight;
			var aspectRatioImg = me._gallery_picture07__img.naturalWidth / me._gallery_picture07__img.naturalHeight;
			if (me._gallery_picture07__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture07__img.naturalWidth;
			if (me._gallery_picture07__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture07__img.naturalHeight;
			var currentWidth = me._gallery_picture07__img.naturalWidth;
			var currentHeight = me._gallery_picture07__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture07__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture07__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			};
		}
		this._screen_tintclose6=document.createElement('div');
		this._screen_tintclose6.ggId="screen_tint-close";
		this._screen_tintclose6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen_tintclose6.ggVisible=true;
		this._screen_tintclose6.className='ggskin ggskin_rectangle ';
		this._screen_tintclose6.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 89.7917%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screen_tintclose6.setAttribute('style',hs);
		this._screen_tintclose6.style[domTransform + 'Origin']='50% 50%';
		me._screen_tintclose6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._screen_tintclose6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._screen_tintclose6.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer6.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer6.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause4.style[domTransition]='none';
			me._gallery_pause4.style.visibility='hidden';
			me._gallery_pause4.ggVisible=false;
			me._gallery_play4.style[domTransition]='none';
			me._gallery_play4.style.visibility=(Number(me._gallery_play4.style.opacity)>0||!me._gallery_play4.style.opacity)?'inherit':'hidden';
			me._gallery_play4.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture07.style[domTransition]='none';
			me._gallery_picture07.style.visibility='hidden';
			me._gallery_picture07.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._screen_tintclose6.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_picture07.appendChild(this._screen_tintclose6);
		this._gallery_controler6=document.createElement('div');
		this._gallery_controler6.ggId="gallery_controler";
		this._gallery_controler6.ggLeft=-68;
		this._gallery_controler6.ggTop=-39;
		this._gallery_controler6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_controler6.ggVisible=true;
		this._gallery_controler6.className='ggskin ggskin_container ';
		this._gallery_controler6.ggType='container';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -68px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 118px;';
		hs+='pointer-events:none;';
		this._gallery_controler6.setAttribute('style',hs);
		this._gallery_controler6.style[domTransform + 'Origin']='50% 50%';
		me._gallery_controler6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_controler6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_controler6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._gallery_timer6=document.createElement('div');
		this._gallery_timer6.ggTimestamp=this.ggCurrentTime;
		this._gallery_timer6.ggLastIsActive=true;
		this._gallery_timer6.ggTimeout=0;
		this._gallery_timer6.ggId="gallery_timer";
		this._gallery_timer6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_timer6.ggVisible=true;
		this._gallery_timer6.className='ggskin ggskin_timer ';
		this._gallery_timer6.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_timer6.setAttribute('style',hs);
		this._gallery_timer6.style[domTransform + 'Origin']='50% 50%';
		me._gallery_timer6.ggIsActive=function() {
			return (me._gallery_timer6.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._gallery_timer6.ggTimestamp) / me._gallery_timer6.ggTimeout) % 2 == 0));
		}
		me._gallery_timer6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_timer6.ggActivate=function () {
			me._gallery_forward4.onclick();
		}
		this._gallery_timer6.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler6.appendChild(this._gallery_timer6);
		this._gallery_fx6=document.createElement('div');
		this._gallery_fx6.ggTimestamp=this.ggCurrentTime;
		this._gallery_fx6.ggLastIsActive=true;
		this._gallery_fx6.ggTimeout=1000;
		this._gallery_fx6.ggId="gallery_fx";
		this._gallery_fx6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_fx6.ggVisible=true;
		this._gallery_fx6.className='ggskin ggskin_timer ';
		this._gallery_fx6.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_fx6.setAttribute('style',hs);
		this._gallery_fx6.style[domTransform + 'Origin']='50% 50%';
		me._gallery_fx6.ggIsActive=function() {
			return (me._gallery_fx6.ggTimestamp + me._gallery_fx6.ggTimeout) >= me.ggCurrentTime;
		}
		me._gallery_fx6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_fx6.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler6.appendChild(this._gallery_fx6);
		this._gallery_picture_preload6=document.createElement('div');
		this._gallery_picture_preload6__img=document.createElement('img');
		this._gallery_picture_preload6__img.className='ggskin ggskin_external';
		this._gallery_picture_preload6__img.onload=function() {me._gallery_picture_preload6.ggUpdatePosition();}
		this._gallery_picture_preload6__img.setAttribute('src',basePath + '');
		this._gallery_picture_preload6__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture_preload6.appendChild(this._gallery_picture_preload6__img);
		this._gallery_picture_preload6.ggId="gallery_picture_preload";
		this._gallery_picture_preload6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture_preload6.ggVisible=false;
		this._gallery_picture_preload6.className='ggskin ggskin_external ';
		this._gallery_picture_preload6.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 31px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		this._gallery_picture_preload6.setAttribute('style',hs);
		this._gallery_picture_preload6.style[domTransform + 'Origin']='0% 0%';
		me._gallery_picture_preload6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_picture_preload6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_picture_preload6.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture_preload6.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture_preload6.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture_preload6.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture_preload6.style[domTransition]='';
				if (me._gallery_picture_preload6.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture_preload6.ggText="gallery/07-01.jpg";
					me._gallery_picture_preload6__img.src=me._gallery_picture_preload6.ggText;
				}
				else if (me._gallery_picture_preload6.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture_preload6.ggText="gallery/07-02.jpg";
					me._gallery_picture_preload6__img.src=me._gallery_picture_preload6.ggText;
				}
				else if (me._gallery_picture_preload6.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture_preload6.ggText="gallery/07-03.jpg";
					me._gallery_picture_preload6__img.src=me._gallery_picture_preload6.ggText;
				}
				else if (me._gallery_picture_preload6.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture_preload6.ggText="gallery/07-04.jpg";
					me._gallery_picture_preload6__img.src=me._gallery_picture_preload6.ggText;
				}
				else {
					me._gallery_picture_preload6.ggText="";
					me._gallery_picture_preload6__img.src=me._gallery_picture_preload6.ggText;
				}
			}
		}
		this._gallery_picture_preload6.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture_preload6.clientWidth;
			var parentHeight = me._gallery_picture_preload6.clientHeight;
			var aspectRatioDiv = me._gallery_picture_preload6.clientWidth / me._gallery_picture_preload6.clientHeight;
			var aspectRatioImg = me._gallery_picture_preload6__img.naturalWidth / me._gallery_picture_preload6__img.naturalHeight;
			if (me._gallery_picture_preload6__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture_preload6__img.naturalWidth;
			if (me._gallery_picture_preload6__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture_preload6__img.naturalHeight;
			var currentWidth = me._gallery_picture_preload6__img.naturalWidth;
			var currentHeight = me._gallery_picture_preload6__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture_preload6__img.setAttribute('style','position: absolute; left: 0px; top: 0px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture_preload6__img.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			};
		}
		this._gallery_controler6.appendChild(this._gallery_picture_preload6);
		this._gallery_close6=document.createElement('div');
		this._gallery_close6__img=document.createElement('img');
		this._gallery_close6__img.className='ggskin ggskin_image';
		this._gallery_close6__img.setAttribute('src',basePath + 'images/gallery_close6.png');
		this._gallery_close6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_close6__img.className='ggskin ggskin_image';
		this._gallery_close6__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_close6__img);
		this._gallery_close6.appendChild(this._gallery_close6__img);
		this._gallery_close6.ggId="gallery_close";
		this._gallery_close6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_close6.ggVisible=true;
		this._gallery_close6.className='ggskin ggskin_image ';
		this._gallery_close6.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 133px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_close6.setAttribute('style',hs);
		this._gallery_close6.style[domTransform + 'Origin']='50% 50%';
		me._gallery_close6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_close6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_close6.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer6.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer6.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause4.style[domTransition]='none';
			me._gallery_pause4.style.visibility='hidden';
			me._gallery_pause4.ggVisible=false;
			me._gallery_play4.style[domTransition]='none';
			me._gallery_play4.style.visibility=(Number(me._gallery_play4.style.opacity)>0||!me._gallery_play4.style.opacity)?'inherit':'hidden';
			me._gallery_play4.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture07.style[domTransition]='none';
			me._gallery_picture07.style.visibility='hidden';
			me._gallery_picture07.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._gallery_close6.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler6.appendChild(this._gallery_close6);
		this._gallery_back4=document.createElement('div');
		this._gallery_back4__img=document.createElement('img');
		this._gallery_back4__img.className='ggskin ggskin_button';
		this._gallery_back4__img.setAttribute('src',basePath + 'images/gallery_back4.png');
		this._gallery_back4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_back4__img.className='ggskin ggskin_button';
		this._gallery_back4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_back4__img);
		this._gallery_back4.appendChild(this._gallery_back4__img);
		this._gallery_back4.ggId="gallery_back";
		this._gallery_back4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_back4.ggVisible=true;
		this._gallery_back4.className='ggskin ggskin_button ';
		this._gallery_back4.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_back4.setAttribute('style',hs);
		this._gallery_back4.style[domTransform + 'Origin']='50% 50%';
		me._gallery_back4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_back4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_back4.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("3");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("4");
			me._gallery_fx6.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx6.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_back4.onmouseover=function (e) {
			me._gallery_back4__img.src=basePath + 'images/gallery_back4__o.png';
		}
		this._gallery_back4.onmouseout=function (e) {
			me._gallery_back4__img.src=basePath + 'images/gallery_back4.png';
		}
		this._gallery_back4.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler6.appendChild(this._gallery_back4);
		this._gallery_counter_total4=document.createElement('div');
		this._gallery_counter_total4__text=document.createElement('div');
		this._gallery_counter_total4.className='ggskin ggskin_textdiv';
		this._gallery_counter_total4.ggTextDiv=this._gallery_counter_total4__text;
		this._gallery_counter_total4.ggId="gallery_counter_total";
		this._gallery_counter_total4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter_total4.ggVisible=true;
		this._gallery_counter_total4.className='ggskin ggskin_text ';
		this._gallery_counter_total4.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 51px;';
		hs+='pointer-events:auto;';
		this._gallery_counter_total4.setAttribute('style',hs);
		this._gallery_counter_total4.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 51px;';
		hs+='height: 18px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.588235);';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter_total4__text.setAttribute('style',hs);
		this._gallery_counter_total4__text.innerHTML="\/ 4";
		this._gallery_counter_total4.appendChild(this._gallery_counter_total4__text);
		me._gallery_counter_total4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter_total4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_counter_total4.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler6.appendChild(this._gallery_counter_total4);
		this._gallery_counter4=document.createElement('div');
		this._gallery_counter4__text=document.createElement('div');
		this._gallery_counter4.className='ggskin ggskin_textdiv';
		this._gallery_counter4.ggTextDiv=this._gallery_counter4__text;
		this._gallery_counter4.ggId="gallery_counter";
		this._gallery_counter4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter4.ggVisible=true;
		this._gallery_counter4.className='ggskin ggskin_text ';
		this._gallery_counter4.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		this._gallery_counter4.setAttribute('style',hs);
		this._gallery_counter4.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter4__text.setAttribute('style',hs);
		this._gallery_counter4__text.innerHTML="1";
		this._gallery_counter4.appendChild(this._gallery_counter4__text);
		me._gallery_counter4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_counter4.ggCurrentLogicStateText = -1;
		this._gallery_counter4.ggUpdateConditionTimer=function () {
			var newLogicStateText;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateText = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateText = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateText = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateText = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateText = 5;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 6)
			)
			{
				newLogicStateText = 6;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 7)
			)
			{
				newLogicStateText = 7;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 8)
			)
			{
				newLogicStateText = 8;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 9)
			)
			{
				newLogicStateText = 9;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 10)
			)
			{
				newLogicStateText = 10;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 11)
			)
			{
				newLogicStateText = 11;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 12)
			)
			{
				newLogicStateText = 12;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 13)
			)
			{
				newLogicStateText = 13;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 14)
			)
			{
				newLogicStateText = 14;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._gallery_counter4.ggCurrentLogicStateText != newLogicStateText) {
				me._gallery_counter4.ggCurrentLogicStateText = newLogicStateText;
				me._gallery_counter4.style[domTransition]='';
				if (me._gallery_counter4.ggCurrentLogicStateText == 0) {
					me._gallery_counter4.ggText="1";
					me._gallery_counter4__text.innerHTML=me._gallery_counter4.ggText;
					if (me._gallery_counter4.ggUpdateText) {
					me._gallery_counter4.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter4.ggUpdatePosition) me._gallery_counter4.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter4.ggCurrentLogicStateText == 1) {
					me._gallery_counter4.ggText="2";
					me._gallery_counter4__text.innerHTML=me._gallery_counter4.ggText;
					if (me._gallery_counter4.ggUpdateText) {
					me._gallery_counter4.ggUpdateText=function() {
						var hs="2";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter4.ggUpdatePosition) me._gallery_counter4.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter4.ggCurrentLogicStateText == 2) {
					me._gallery_counter4.ggText="3";
					me._gallery_counter4__text.innerHTML=me._gallery_counter4.ggText;
					if (me._gallery_counter4.ggUpdateText) {
					me._gallery_counter4.ggUpdateText=function() {
						var hs="3";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter4.ggUpdatePosition) me._gallery_counter4.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter4.ggCurrentLogicStateText == 3) {
					me._gallery_counter4.ggText="4";
					me._gallery_counter4__text.innerHTML=me._gallery_counter4.ggText;
					if (me._gallery_counter4.ggUpdateText) {
					me._gallery_counter4.ggUpdateText=function() {
						var hs="4";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter4.ggUpdatePosition) me._gallery_counter4.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter4.ggCurrentLogicStateText == 4) {
					me._gallery_counter4.ggText="5";
					me._gallery_counter4__text.innerHTML=me._gallery_counter4.ggText;
					if (me._gallery_counter4.ggUpdateText) {
					me._gallery_counter4.ggUpdateText=function() {
						var hs="5";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter4.ggUpdatePosition) me._gallery_counter4.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter4.ggCurrentLogicStateText == 5) {
					me._gallery_counter4.ggText="6";
					me._gallery_counter4__text.innerHTML=me._gallery_counter4.ggText;
					if (me._gallery_counter4.ggUpdateText) {
					me._gallery_counter4.ggUpdateText=function() {
						var hs="6";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter4.ggUpdatePosition) me._gallery_counter4.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter4.ggCurrentLogicStateText == 6) {
					me._gallery_counter4.ggText="7";
					me._gallery_counter4__text.innerHTML=me._gallery_counter4.ggText;
					if (me._gallery_counter4.ggUpdateText) {
					me._gallery_counter4.ggUpdateText=function() {
						var hs="7";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter4.ggUpdatePosition) me._gallery_counter4.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter4.ggCurrentLogicStateText == 7) {
					me._gallery_counter4.ggText="8";
					me._gallery_counter4__text.innerHTML=me._gallery_counter4.ggText;
					if (me._gallery_counter4.ggUpdateText) {
					me._gallery_counter4.ggUpdateText=function() {
						var hs="8";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter4.ggUpdatePosition) me._gallery_counter4.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter4.ggCurrentLogicStateText == 8) {
					me._gallery_counter4.ggText="9";
					me._gallery_counter4__text.innerHTML=me._gallery_counter4.ggText;
					if (me._gallery_counter4.ggUpdateText) {
					me._gallery_counter4.ggUpdateText=function() {
						var hs="9";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter4.ggUpdatePosition) me._gallery_counter4.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter4.ggCurrentLogicStateText == 9) {
					me._gallery_counter4.ggText="10";
					me._gallery_counter4__text.innerHTML=me._gallery_counter4.ggText;
					if (me._gallery_counter4.ggUpdateText) {
					me._gallery_counter4.ggUpdateText=function() {
						var hs="10";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter4.ggUpdatePosition) me._gallery_counter4.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter4.ggCurrentLogicStateText == 10) {
					me._gallery_counter4.ggText="11";
					me._gallery_counter4__text.innerHTML=me._gallery_counter4.ggText;
					if (me._gallery_counter4.ggUpdateText) {
					me._gallery_counter4.ggUpdateText=function() {
						var hs="11";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter4.ggUpdatePosition) me._gallery_counter4.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter4.ggCurrentLogicStateText == 11) {
					me._gallery_counter4.ggText="12";
					me._gallery_counter4__text.innerHTML=me._gallery_counter4.ggText;
					if (me._gallery_counter4.ggUpdateText) {
					me._gallery_counter4.ggUpdateText=function() {
						var hs="12";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter4.ggUpdatePosition) me._gallery_counter4.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter4.ggCurrentLogicStateText == 12) {
					me._gallery_counter4.ggText="13";
					me._gallery_counter4__text.innerHTML=me._gallery_counter4.ggText;
					if (me._gallery_counter4.ggUpdateText) {
					me._gallery_counter4.ggUpdateText=function() {
						var hs="13";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter4.ggUpdatePosition) me._gallery_counter4.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter4.ggCurrentLogicStateText == 13) {
					me._gallery_counter4.ggText="14";
					me._gallery_counter4__text.innerHTML=me._gallery_counter4.ggText;
					if (me._gallery_counter4.ggUpdateText) {
					me._gallery_counter4.ggUpdateText=function() {
						var hs="14";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter4.ggUpdatePosition) me._gallery_counter4.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter4.ggCurrentLogicStateText == 14) {
					me._gallery_counter4.ggText="15";
					me._gallery_counter4__text.innerHTML=me._gallery_counter4.ggText;
					if (me._gallery_counter4.ggUpdateText) {
					me._gallery_counter4.ggUpdateText=function() {
						var hs="15";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter4.ggUpdatePosition) me._gallery_counter4.ggUpdatePosition();
					}
				}
				else {
					me._gallery_counter4.ggText="1";
					me._gallery_counter4__text.innerHTML=me._gallery_counter4.ggText;
					if (me._gallery_counter4.ggUpdateText) {
					me._gallery_counter4.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter4.ggUpdatePosition) me._gallery_counter4.ggUpdatePosition();
					}
				}
			}
		}
		this._gallery_counter4.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((28-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._gallery_controler6.appendChild(this._gallery_counter4);
		this._text_16=document.createElement('div');
		this._text_16__text=document.createElement('div');
		this._text_16.className='ggskin ggskin_textdiv';
		this._text_16.ggTextDiv=this._text_16__text;
		this._text_16.ggId="Text 1";
		this._text_16.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_16.ggVisible=true;
		this._text_16.className='ggskin ggskin_text ';
		this._text_16.ggType='text';
		hs ='';
		hs+='height : 208px;';
		hs+='left : -129px;';
		hs+='position : absolute;';
		hs+='top : -212px;';
		hs+='visibility : inherit;';
		hs+='width : 444px;';
		hs+='pointer-events:auto;';
		this._text_16.setAttribute('style',hs);
		this._text_16.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 444px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.27451);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.27451);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		this._text_16__text.setAttribute('style',hs);
		this._text_16__text.innerHTML="\u0412\u041d\u0415\u041f\u041b\u041e\u0429\u0410\u0414\u041e\u0427\u041d\u042b\u0415 \u0418\u041d\u0416\u0415\u041d\u0415\u0420\u041d\u042b\u0415 \u0421\u0415\u0422\u0418, 2014\u0433.<br\/>\u0414\u0440\u0435\u043d\u0430\u0436\u043d\u0430\u044f \u043d\u0430\u0441\u043e\u0441\u043d\u0430\u044f \u0441\u0442\u0430\u043d\u0446\u0438\u044f \u0414\u041d\u0421<br\/>\u0414\u0440\u0435\u043d\u0430\u0436\u043d\u0430\u044f \u043d\u0430\u0441\u043e\u0441\u043d\u0430\u044f \u0441\u0442\u0430\u043d\u0446\u0438\u044f \u0414\u041d\u0421-1 <br\/>\u041f\u0430\u0442\u0440\u0443\u043b\u044c\u043d\u0430\u044f \u0434\u043e\u0440\u043e\u0433\u0430 \u043a \u0414\u041d\u0421<br\/><br\/>\u041c\u043e\u043d\u0442\u0430\u0436 \u0442\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u0430 \u2013 7400 \u043c<br\/>\u041e\u0431\u044a\u0451\u043c \u043e\u0442\u0441\u044b\u043f\u043a\u0438-15200 \u043c3<br\/>\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0434\u043e\u0440\u043e\u0436\u043d\u043e\u0439 \u043e\u0434\u0435\u0436\u0434\u044b \u0438\u0437 \u041f\u0413\u0421 \u2013 6300 \u043c3<br\/>\u041e\u0431\u044a\u0451\u043c \u0431\u0435\u0442\u043e\u043d\u0430\u2013 183,5 \u043c3<br\/>\u0420\u0430\u0441\u0445\u043e\u0434 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u0434\u043e\u0432 \u2013 3,24 \u0442";
		this._text_16.appendChild(this._text_16__text);
		me._text_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_16.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._text_16.ggCurrentLogicStateVisible = -1;
		this._text_16.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width < 100) || 
				(ggSkinVars['gallery_pictures_1'] != 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_16.style[domTransition]='';
				if (me._text_16.ggCurrentLogicStateVisible == 0) {
					me._text_16.style.visibility="hidden";
					me._text_16.ggVisible=false;
				}
				else {
					me._text_16.style.visibility=(Number(me._text_16.style.opacity)>0||!me._text_16.style.opacity)?'inherit':'hidden';
					me._text_16.ggVisible=true;
				}
			}
		}
		this._text_16.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler6.appendChild(this._text_16);
		this._gallery_forward4=document.createElement('div');
		this._gallery_forward4__img=document.createElement('img');
		this._gallery_forward4__img.className='ggskin ggskin_button';
		this._gallery_forward4__img.setAttribute('src',basePath + 'images/gallery_forward4.png');
		this._gallery_forward4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_forward4__img.className='ggskin ggskin_button';
		this._gallery_forward4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_forward4__img);
		this._gallery_forward4.appendChild(this._gallery_forward4__img);
		this._gallery_forward4.ggId="gallery_forward";
		this._gallery_forward4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_forward4.ggVisible=true;
		this._gallery_forward4.className='ggskin ggskin_button ';
		this._gallery_forward4.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 39px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_forward4.setAttribute('style',hs);
		this._gallery_forward4.style[domTransform + 'Origin']='50% 50%';
		me._gallery_forward4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_forward4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_forward4.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("1");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("4");
			me._gallery_fx6.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx6.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_forward4.onmouseover=function (e) {
			me._gallery_forward4__img.src=basePath + 'images/gallery_forward4__o.png';
		}
		this._gallery_forward4.onmouseout=function (e) {
			me._gallery_forward4__img.src=basePath + 'images/gallery_forward4.png';
		}
		this._gallery_forward4.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler6.appendChild(this._gallery_forward4);
		this._gallery_pause4=document.createElement('div');
		this._gallery_pause4__img=document.createElement('img');
		this._gallery_pause4__img.className='ggskin ggskin_button';
		this._gallery_pause4__img.setAttribute('src',basePath + 'images/gallery_pause4.png');
		this._gallery_pause4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_pause4__img.className='ggskin ggskin_button';
		this._gallery_pause4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_pause4__img);
		this._gallery_pause4.appendChild(this._gallery_pause4__img);
		this._gallery_pause4.ggId="gallery_pause";
		this._gallery_pause4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_pause4.ggVisible=true;
		this._gallery_pause4.className='ggskin ggskin_button ';
		this._gallery_pause4.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 86px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_pause4.setAttribute('style',hs);
		this._gallery_pause4.style[domTransform + 'Origin']='50% 50%';
		me._gallery_pause4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_pause4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_pause4.onclick=function (e) {
			me._gallery_timer6.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer6.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause4.style[domTransition]='none';
			me._gallery_pause4.style.visibility='hidden';
			me._gallery_pause4.ggVisible=false;
			me._gallery_play4.style[domTransition]='none';
			me._gallery_play4.style.visibility=(Number(me._gallery_play4.style.opacity)>0||!me._gallery_play4.style.opacity)?'inherit':'hidden';
			me._gallery_play4.ggVisible=true;
		}
		this._gallery_pause4.onmouseover=function (e) {
			me._gallery_pause4__img.src=basePath + 'images/gallery_pause4__o.png';
		}
		this._gallery_pause4.onmouseout=function (e) {
			me._gallery_pause4__img.src=basePath + 'images/gallery_pause4.png';
		}
		this._gallery_pause4.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler6.appendChild(this._gallery_pause4);
		this._gallery_play4=document.createElement('div');
		this._gallery_play4__img=document.createElement('img');
		this._gallery_play4__img.className='ggskin ggskin_button';
		this._gallery_play4__img.setAttribute('src',basePath + 'images/gallery_play4.png');
		this._gallery_play4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_play4__img.className='ggskin ggskin_button';
		this._gallery_play4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_play4__img);
		this._gallery_play4.appendChild(this._gallery_play4__img);
		this._gallery_play4.ggId="gallery_play";
		this._gallery_play4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_play4.ggVisible=true;
		this._gallery_play4.className='ggskin ggskin_button ';
		this._gallery_play4.ggType='button';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_play4.setAttribute('style',hs);
		this._gallery_play4.style[domTransform + 'Origin']='50% 50%';
		me._gallery_play4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_play4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_play4.onclick=function (e) {
			me._gallery_timer6.ggTimeout=Number("1.5") * 1000.0;
			me._gallery_timer6.ggTimestamp=me.ggCurrentTime;
			me._gallery_play4.style[domTransition]='none';
			me._gallery_play4.style.visibility='hidden';
			me._gallery_play4.ggVisible=false;
			me._gallery_pause4.style[domTransition]='none';
			me._gallery_pause4.style.visibility=(Number(me._gallery_pause4.style.opacity)>0||!me._gallery_pause4.style.opacity)?'inherit':'hidden';
			me._gallery_pause4.ggVisible=true;
		}
		this._gallery_play4.onmouseover=function (e) {
			me._gallery_play4__img.src=basePath + 'images/gallery_play4__o.png';
		}
		this._gallery_play4.onmouseout=function (e) {
			me._gallery_play4__img.src=basePath + 'images/gallery_play4.png';
		}
		this._gallery_play4.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler6.appendChild(this._gallery_play4);
		this._gallery_picture07.appendChild(this._gallery_controler6);
		this.divSkin.appendChild(this._gallery_picture07);
		this._gallery_picture06=document.createElement('div');
		this._gallery_picture06__img=document.createElement('img');
		this._gallery_picture06__img.className='ggskin ggskin_external';
		this._gallery_picture06__img.onload=function() {me._gallery_picture06.ggUpdatePosition();}
		this._gallery_picture06__img.setAttribute('src',basePath + '');
		this._gallery_picture06__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture06.appendChild(this._gallery_picture06__img);
		this._gallery_picture06.ggId="gallery_picture06";
		this._gallery_picture06.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture06.ggVisible=false;
		this._gallery_picture06.className='ggskin ggskin_external ';
		this._gallery_picture06.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 8%;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		this._gallery_picture06.setAttribute('style',hs);
		this._gallery_picture06.style[domTransform + 'Origin']='50% 50%';
		me._gallery_picture06.ggIsActive=function() {
			return false;
		}
		me._gallery_picture06.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._gallery_picture06.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture06.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture06.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture06.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture06.style[domTransition]='';
				if (me._gallery_picture06.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture06.ggText="gallery/06-01.jpg";
					me._gallery_picture06__img.src=me._gallery_picture06.ggText;
				}
				else if (me._gallery_picture06.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture06.ggText="gallery/06-02.jpg";
					me._gallery_picture06__img.src=me._gallery_picture06.ggText;
				}
				else if (me._gallery_picture06.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture06.ggText="gallery/06-03.jpg";
					me._gallery_picture06__img.src=me._gallery_picture06.ggText;
				}
				else if (me._gallery_picture06.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture06.ggText="gallery/06-04.jpg";
					me._gallery_picture06__img.src=me._gallery_picture06.ggText;
				}
				else {
					me._gallery_picture06.ggText="";
					me._gallery_picture06__img.src=me._gallery_picture06.ggText;
				}
			}
		}
		this._gallery_picture06.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture06.clientWidth;
			var parentHeight = me._gallery_picture06.clientHeight;
			var aspectRatioDiv = me._gallery_picture06.clientWidth / me._gallery_picture06.clientHeight;
			var aspectRatioImg = me._gallery_picture06__img.naturalWidth / me._gallery_picture06__img.naturalHeight;
			if (me._gallery_picture06__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture06__img.naturalWidth;
			if (me._gallery_picture06__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture06__img.naturalHeight;
			var currentWidth = me._gallery_picture06__img.naturalWidth;
			var currentHeight = me._gallery_picture06__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture06__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture06__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			};
		}
		this._screen_tintclose5=document.createElement('div');
		this._screen_tintclose5.ggId="screen_tint-close";
		this._screen_tintclose5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen_tintclose5.ggVisible=true;
		this._screen_tintclose5.className='ggskin ggskin_rectangle ';
		this._screen_tintclose5.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 89.7917%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screen_tintclose5.setAttribute('style',hs);
		this._screen_tintclose5.style[domTransform + 'Origin']='50% 50%';
		me._screen_tintclose5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._screen_tintclose5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._screen_tintclose5.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer5.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer5.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause3.style[domTransition]='none';
			me._gallery_pause3.style.visibility='hidden';
			me._gallery_pause3.ggVisible=false;
			me._gallery_play3.style[domTransition]='none';
			me._gallery_play3.style.visibility=(Number(me._gallery_play3.style.opacity)>0||!me._gallery_play3.style.opacity)?'inherit':'hidden';
			me._gallery_play3.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture06.style[domTransition]='none';
			me._gallery_picture06.style.visibility='hidden';
			me._gallery_picture06.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._screen_tintclose5.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_picture06.appendChild(this._screen_tintclose5);
		this._gallery_controler5=document.createElement('div');
		this._gallery_controler5.ggId="gallery_controler";
		this._gallery_controler5.ggLeft=-68;
		this._gallery_controler5.ggTop=-39;
		this._gallery_controler5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_controler5.ggVisible=true;
		this._gallery_controler5.className='ggskin ggskin_container ';
		this._gallery_controler5.ggType='container';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -68px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 118px;';
		hs+='pointer-events:none;';
		this._gallery_controler5.setAttribute('style',hs);
		this._gallery_controler5.style[domTransform + 'Origin']='50% 50%';
		me._gallery_controler5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_controler5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_controler5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._gallery_timer5=document.createElement('div');
		this._gallery_timer5.ggTimestamp=this.ggCurrentTime;
		this._gallery_timer5.ggLastIsActive=true;
		this._gallery_timer5.ggTimeout=0;
		this._gallery_timer5.ggId="gallery_timer";
		this._gallery_timer5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_timer5.ggVisible=true;
		this._gallery_timer5.className='ggskin ggskin_timer ';
		this._gallery_timer5.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_timer5.setAttribute('style',hs);
		this._gallery_timer5.style[domTransform + 'Origin']='50% 50%';
		me._gallery_timer5.ggIsActive=function() {
			return (me._gallery_timer5.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._gallery_timer5.ggTimestamp) / me._gallery_timer5.ggTimeout) % 2 == 0));
		}
		me._gallery_timer5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_timer5.ggActivate=function () {
			me._gallery_forward3.onclick();
		}
		this._gallery_timer5.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler5.appendChild(this._gallery_timer5);
		this._gallery_fx5=document.createElement('div');
		this._gallery_fx5.ggTimestamp=this.ggCurrentTime;
		this._gallery_fx5.ggLastIsActive=true;
		this._gallery_fx5.ggTimeout=1000;
		this._gallery_fx5.ggId="gallery_fx";
		this._gallery_fx5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_fx5.ggVisible=true;
		this._gallery_fx5.className='ggskin ggskin_timer ';
		this._gallery_fx5.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_fx5.setAttribute('style',hs);
		this._gallery_fx5.style[domTransform + 'Origin']='50% 50%';
		me._gallery_fx5.ggIsActive=function() {
			return (me._gallery_fx5.ggTimestamp + me._gallery_fx5.ggTimeout) >= me.ggCurrentTime;
		}
		me._gallery_fx5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_fx5.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler5.appendChild(this._gallery_fx5);
		this._gallery_picture_preload5=document.createElement('div');
		this._gallery_picture_preload5__img=document.createElement('img');
		this._gallery_picture_preload5__img.className='ggskin ggskin_external';
		this._gallery_picture_preload5__img.onload=function() {me._gallery_picture_preload5.ggUpdatePosition();}
		this._gallery_picture_preload5__img.setAttribute('src',basePath + '');
		this._gallery_picture_preload5__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture_preload5.appendChild(this._gallery_picture_preload5__img);
		this._gallery_picture_preload5.ggId="gallery_picture_preload";
		this._gallery_picture_preload5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture_preload5.ggVisible=false;
		this._gallery_picture_preload5.className='ggskin ggskin_external ';
		this._gallery_picture_preload5.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 31px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		this._gallery_picture_preload5.setAttribute('style',hs);
		this._gallery_picture_preload5.style[domTransform + 'Origin']='0% 0%';
		me._gallery_picture_preload5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_picture_preload5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_picture_preload5.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture_preload5.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture_preload5.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture_preload5.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture_preload5.style[domTransition]='';
				if (me._gallery_picture_preload5.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture_preload5.ggText="gallery/06-01.jpg";
					me._gallery_picture_preload5__img.src=me._gallery_picture_preload5.ggText;
				}
				else if (me._gallery_picture_preload5.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture_preload5.ggText="gallery/06-02.jpg";
					me._gallery_picture_preload5__img.src=me._gallery_picture_preload5.ggText;
				}
				else if (me._gallery_picture_preload5.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture_preload5.ggText="gallery/06-03.jpg";
					me._gallery_picture_preload5__img.src=me._gallery_picture_preload5.ggText;
				}
				else if (me._gallery_picture_preload5.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture_preload5.ggText="gallery/06-04.jpg";
					me._gallery_picture_preload5__img.src=me._gallery_picture_preload5.ggText;
				}
				else {
					me._gallery_picture_preload5.ggText="";
					me._gallery_picture_preload5__img.src=me._gallery_picture_preload5.ggText;
				}
			}
		}
		this._gallery_picture_preload5.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture_preload5.clientWidth;
			var parentHeight = me._gallery_picture_preload5.clientHeight;
			var aspectRatioDiv = me._gallery_picture_preload5.clientWidth / me._gallery_picture_preload5.clientHeight;
			var aspectRatioImg = me._gallery_picture_preload5__img.naturalWidth / me._gallery_picture_preload5__img.naturalHeight;
			if (me._gallery_picture_preload5__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture_preload5__img.naturalWidth;
			if (me._gallery_picture_preload5__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture_preload5__img.naturalHeight;
			var currentWidth = me._gallery_picture_preload5__img.naturalWidth;
			var currentHeight = me._gallery_picture_preload5__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture_preload5__img.setAttribute('style','position: absolute; left: 0px; top: 0px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture_preload5__img.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			};
		}
		this._gallery_controler5.appendChild(this._gallery_picture_preload5);
		this._gallery_close5=document.createElement('div');
		this._gallery_close5__img=document.createElement('img');
		this._gallery_close5__img.className='ggskin ggskin_image';
		this._gallery_close5__img.setAttribute('src',basePath + 'images/gallery_close5.png');
		this._gallery_close5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_close5__img.className='ggskin ggskin_image';
		this._gallery_close5__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_close5__img);
		this._gallery_close5.appendChild(this._gallery_close5__img);
		this._gallery_close5.ggId="gallery_close";
		this._gallery_close5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_close5.ggVisible=true;
		this._gallery_close5.className='ggskin ggskin_image ';
		this._gallery_close5.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 133px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_close5.setAttribute('style',hs);
		this._gallery_close5.style[domTransform + 'Origin']='50% 50%';
		me._gallery_close5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_close5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_close5.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer5.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer5.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause3.style[domTransition]='none';
			me._gallery_pause3.style.visibility='hidden';
			me._gallery_pause3.ggVisible=false;
			me._gallery_play3.style[domTransition]='none';
			me._gallery_play3.style.visibility=(Number(me._gallery_play3.style.opacity)>0||!me._gallery_play3.style.opacity)?'inherit':'hidden';
			me._gallery_play3.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture06.style[domTransition]='none';
			me._gallery_picture06.style.visibility='hidden';
			me._gallery_picture06.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._gallery_close5.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler5.appendChild(this._gallery_close5);
		this._gallery_back3=document.createElement('div');
		this._gallery_back3__img=document.createElement('img');
		this._gallery_back3__img.className='ggskin ggskin_button';
		this._gallery_back3__img.setAttribute('src',basePath + 'images/gallery_back3.png');
		this._gallery_back3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_back3__img.className='ggskin ggskin_button';
		this._gallery_back3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_back3__img);
		this._gallery_back3.appendChild(this._gallery_back3__img);
		this._gallery_back3.ggId="gallery_back";
		this._gallery_back3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_back3.ggVisible=true;
		this._gallery_back3.className='ggskin ggskin_button ';
		this._gallery_back3.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_back3.setAttribute('style',hs);
		this._gallery_back3.style[domTransform + 'Origin']='50% 50%';
		me._gallery_back3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_back3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_back3.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("3");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("4");
			me._gallery_fx5.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx5.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_back3.onmouseover=function (e) {
			me._gallery_back3__img.src=basePath + 'images/gallery_back3__o.png';
		}
		this._gallery_back3.onmouseout=function (e) {
			me._gallery_back3__img.src=basePath + 'images/gallery_back3.png';
		}
		this._gallery_back3.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler5.appendChild(this._gallery_back3);
		this._gallery_counter_total3=document.createElement('div');
		this._gallery_counter_total3__text=document.createElement('div');
		this._gallery_counter_total3.className='ggskin ggskin_textdiv';
		this._gallery_counter_total3.ggTextDiv=this._gallery_counter_total3__text;
		this._gallery_counter_total3.ggId="gallery_counter_total";
		this._gallery_counter_total3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter_total3.ggVisible=true;
		this._gallery_counter_total3.className='ggskin ggskin_text ';
		this._gallery_counter_total3.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 51px;';
		hs+='pointer-events:auto;';
		this._gallery_counter_total3.setAttribute('style',hs);
		this._gallery_counter_total3.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 51px;';
		hs+='height: 18px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.588235);';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter_total3__text.setAttribute('style',hs);
		this._gallery_counter_total3__text.innerHTML="\/ 4";
		this._gallery_counter_total3.appendChild(this._gallery_counter_total3__text);
		me._gallery_counter_total3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter_total3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_counter_total3.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler5.appendChild(this._gallery_counter_total3);
		this._gallery_counter3=document.createElement('div');
		this._gallery_counter3__text=document.createElement('div');
		this._gallery_counter3.className='ggskin ggskin_textdiv';
		this._gallery_counter3.ggTextDiv=this._gallery_counter3__text;
		this._gallery_counter3.ggId="gallery_counter";
		this._gallery_counter3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter3.ggVisible=true;
		this._gallery_counter3.className='ggskin ggskin_text ';
		this._gallery_counter3.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		this._gallery_counter3.setAttribute('style',hs);
		this._gallery_counter3.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter3__text.setAttribute('style',hs);
		this._gallery_counter3__text.innerHTML="1";
		this._gallery_counter3.appendChild(this._gallery_counter3__text);
		me._gallery_counter3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_counter3.ggCurrentLogicStateText = -1;
		this._gallery_counter3.ggUpdateConditionTimer=function () {
			var newLogicStateText;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateText = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateText = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateText = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateText = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateText = 5;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 6)
			)
			{
				newLogicStateText = 6;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 7)
			)
			{
				newLogicStateText = 7;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 8)
			)
			{
				newLogicStateText = 8;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 9)
			)
			{
				newLogicStateText = 9;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 10)
			)
			{
				newLogicStateText = 10;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 11)
			)
			{
				newLogicStateText = 11;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 12)
			)
			{
				newLogicStateText = 12;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 13)
			)
			{
				newLogicStateText = 13;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 14)
			)
			{
				newLogicStateText = 14;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._gallery_counter3.ggCurrentLogicStateText != newLogicStateText) {
				me._gallery_counter3.ggCurrentLogicStateText = newLogicStateText;
				me._gallery_counter3.style[domTransition]='';
				if (me._gallery_counter3.ggCurrentLogicStateText == 0) {
					me._gallery_counter3.ggText="1";
					me._gallery_counter3__text.innerHTML=me._gallery_counter3.ggText;
					if (me._gallery_counter3.ggUpdateText) {
					me._gallery_counter3.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter3.ggUpdatePosition) me._gallery_counter3.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter3.ggCurrentLogicStateText == 1) {
					me._gallery_counter3.ggText="2";
					me._gallery_counter3__text.innerHTML=me._gallery_counter3.ggText;
					if (me._gallery_counter3.ggUpdateText) {
					me._gallery_counter3.ggUpdateText=function() {
						var hs="2";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter3.ggUpdatePosition) me._gallery_counter3.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter3.ggCurrentLogicStateText == 2) {
					me._gallery_counter3.ggText="3";
					me._gallery_counter3__text.innerHTML=me._gallery_counter3.ggText;
					if (me._gallery_counter3.ggUpdateText) {
					me._gallery_counter3.ggUpdateText=function() {
						var hs="3";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter3.ggUpdatePosition) me._gallery_counter3.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter3.ggCurrentLogicStateText == 3) {
					me._gallery_counter3.ggText="4";
					me._gallery_counter3__text.innerHTML=me._gallery_counter3.ggText;
					if (me._gallery_counter3.ggUpdateText) {
					me._gallery_counter3.ggUpdateText=function() {
						var hs="4";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter3.ggUpdatePosition) me._gallery_counter3.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter3.ggCurrentLogicStateText == 4) {
					me._gallery_counter3.ggText="5";
					me._gallery_counter3__text.innerHTML=me._gallery_counter3.ggText;
					if (me._gallery_counter3.ggUpdateText) {
					me._gallery_counter3.ggUpdateText=function() {
						var hs="5";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter3.ggUpdatePosition) me._gallery_counter3.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter3.ggCurrentLogicStateText == 5) {
					me._gallery_counter3.ggText="6";
					me._gallery_counter3__text.innerHTML=me._gallery_counter3.ggText;
					if (me._gallery_counter3.ggUpdateText) {
					me._gallery_counter3.ggUpdateText=function() {
						var hs="6";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter3.ggUpdatePosition) me._gallery_counter3.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter3.ggCurrentLogicStateText == 6) {
					me._gallery_counter3.ggText="7";
					me._gallery_counter3__text.innerHTML=me._gallery_counter3.ggText;
					if (me._gallery_counter3.ggUpdateText) {
					me._gallery_counter3.ggUpdateText=function() {
						var hs="7";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter3.ggUpdatePosition) me._gallery_counter3.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter3.ggCurrentLogicStateText == 7) {
					me._gallery_counter3.ggText="8";
					me._gallery_counter3__text.innerHTML=me._gallery_counter3.ggText;
					if (me._gallery_counter3.ggUpdateText) {
					me._gallery_counter3.ggUpdateText=function() {
						var hs="8";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter3.ggUpdatePosition) me._gallery_counter3.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter3.ggCurrentLogicStateText == 8) {
					me._gallery_counter3.ggText="9";
					me._gallery_counter3__text.innerHTML=me._gallery_counter3.ggText;
					if (me._gallery_counter3.ggUpdateText) {
					me._gallery_counter3.ggUpdateText=function() {
						var hs="9";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter3.ggUpdatePosition) me._gallery_counter3.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter3.ggCurrentLogicStateText == 9) {
					me._gallery_counter3.ggText="10";
					me._gallery_counter3__text.innerHTML=me._gallery_counter3.ggText;
					if (me._gallery_counter3.ggUpdateText) {
					me._gallery_counter3.ggUpdateText=function() {
						var hs="10";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter3.ggUpdatePosition) me._gallery_counter3.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter3.ggCurrentLogicStateText == 10) {
					me._gallery_counter3.ggText="11";
					me._gallery_counter3__text.innerHTML=me._gallery_counter3.ggText;
					if (me._gallery_counter3.ggUpdateText) {
					me._gallery_counter3.ggUpdateText=function() {
						var hs="11";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter3.ggUpdatePosition) me._gallery_counter3.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter3.ggCurrentLogicStateText == 11) {
					me._gallery_counter3.ggText="12";
					me._gallery_counter3__text.innerHTML=me._gallery_counter3.ggText;
					if (me._gallery_counter3.ggUpdateText) {
					me._gallery_counter3.ggUpdateText=function() {
						var hs="12";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter3.ggUpdatePosition) me._gallery_counter3.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter3.ggCurrentLogicStateText == 12) {
					me._gallery_counter3.ggText="13";
					me._gallery_counter3__text.innerHTML=me._gallery_counter3.ggText;
					if (me._gallery_counter3.ggUpdateText) {
					me._gallery_counter3.ggUpdateText=function() {
						var hs="13";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter3.ggUpdatePosition) me._gallery_counter3.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter3.ggCurrentLogicStateText == 13) {
					me._gallery_counter3.ggText="14";
					me._gallery_counter3__text.innerHTML=me._gallery_counter3.ggText;
					if (me._gallery_counter3.ggUpdateText) {
					me._gallery_counter3.ggUpdateText=function() {
						var hs="14";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter3.ggUpdatePosition) me._gallery_counter3.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter3.ggCurrentLogicStateText == 14) {
					me._gallery_counter3.ggText="15";
					me._gallery_counter3__text.innerHTML=me._gallery_counter3.ggText;
					if (me._gallery_counter3.ggUpdateText) {
					me._gallery_counter3.ggUpdateText=function() {
						var hs="15";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter3.ggUpdatePosition) me._gallery_counter3.ggUpdatePosition();
					}
				}
				else {
					me._gallery_counter3.ggText="1";
					me._gallery_counter3__text.innerHTML=me._gallery_counter3.ggText;
					if (me._gallery_counter3.ggUpdateText) {
					me._gallery_counter3.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter3.ggUpdatePosition) me._gallery_counter3.ggUpdatePosition();
					}
				}
			}
		}
		this._gallery_counter3.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((28-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._gallery_controler5.appendChild(this._gallery_counter3);
		this._text_15=document.createElement('div');
		this._text_15__text=document.createElement('div');
		this._text_15.className='ggskin ggskin_textdiv';
		this._text_15.ggTextDiv=this._text_15__text;
		this._text_15.ggId="Text 1";
		this._text_15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_15.ggVisible=true;
		this._text_15.className='ggskin ggskin_text ';
		this._text_15.ggType='text';
		hs ='';
		hs+='height : 149px;';
		hs+='left : -232px;';
		hs+='position : absolute;';
		hs+='top : -153px;';
		hs+='visibility : inherit;';
		hs+='width : 600px;';
		hs+='pointer-events:auto;';
		this._text_15.setAttribute('style',hs);
		this._text_15.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 600px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.27451);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.27451);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		this._text_15__text.setAttribute('style',hs);
		this._text_15__text.innerHTML="\u041c\u041e\u0414\u0415\u0420\u041d\u0418\u0417\u0410\u0426\u0418\u042f \u0421\u041e\u041e\u0420\u0423\u0416\u0415\u041d\u0418\u0419 \u041f\u041e \u041e\u0422\u0412\u041e\u0414\u0423 \u0418 \u0423\u0422\u0418\u041b\u0418\u0417\u0410\u0426\u0418\u0418 \u0414\u0420\u0415\u041d\u0410\u0416\u041d\u042b\u0425 \u0418 \u041a\u0410\u0420\u042c\u0415\u0420\u041d\u042b\u0425 \u0412\u041e\u0414 \u0421 \u0423\u0421\u0422\u0420\u041e\u0419\u0421\u0422\u0412\u041e\u041c \u0414\u0410\u041c\u0411 \u041d\u0410 \u041f\u041f\u0424 \u0418 \u041f\u0420\u0418\u041c\u0415\u041d\u0415\u041d\u0418\u0415\u041c \u0410\u041a\u0423\u0421\u0422\u0418\u0427\u0415\u0421\u041a\u041e\u0413\u041e \u041c\u0415\u0422\u041e\u0414\u0410 \u041e\u0427\u0418\u0421\u0422\u041a\u0418 \u0421\u0422\u041e\u0427\u041d\u042b\u0425 \u0412\u041e\u0414 (1-\u0439 \u044d\u0442\u0430\u043f), 2016 \u0433.<br\/><br\/>\u0412\u044b\u0435\u043c\u043a\u0430 \u043d\u0435\u043f\u0440\u0438\u0433\u043e\u0434\u043d\u043e\u0433\u043e \u0433\u0440\u0443\u043d\u0442\u0430 (\u0432\u044b\u0442\u043e\u0440\u0444\u043e\u0432\u043a\u0430) \u2013 3500 \u043c3<br\/>\u041e\u0442\u0441\u044b\u043f\u043a\u0430 \u043d\u0430\u0441\u044b\u043f\u0438 \u0434\u0430\u043c\u0431\u044b \u043f\u0435\u0441\u043a\u043e\u043c \u2013 7300 \u043c3<br\/>\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0443\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u044f \u043e\u0442\u043a\u043e\u0441\u043e\u0432 \u043e\u0442\u0441\u0442\u043e\u0439\u043d\u0438\u043a\u043e\u0432 \u0438\u0437 \u0431\u0435\u0442\u043e\u043d\u0430 \u2013 160 \u043c3";
		this._text_15.appendChild(this._text_15__text);
		me._text_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_15.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._text_15.ggCurrentLogicStateVisible = -1;
		this._text_15.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width < 100) || 
				(ggSkinVars['gallery_pictures_1'] != 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_15.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_15.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_15.style[domTransition]='';
				if (me._text_15.ggCurrentLogicStateVisible == 0) {
					me._text_15.style.visibility="hidden";
					me._text_15.ggVisible=false;
				}
				else {
					me._text_15.style.visibility=(Number(me._text_15.style.opacity)>0||!me._text_15.style.opacity)?'inherit':'hidden';
					me._text_15.ggVisible=true;
				}
			}
		}
		this._text_15.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler5.appendChild(this._text_15);
		this._gallery_forward3=document.createElement('div');
		this._gallery_forward3__img=document.createElement('img');
		this._gallery_forward3__img.className='ggskin ggskin_button';
		this._gallery_forward3__img.setAttribute('src',basePath + 'images/gallery_forward3.png');
		this._gallery_forward3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_forward3__img.className='ggskin ggskin_button';
		this._gallery_forward3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_forward3__img);
		this._gallery_forward3.appendChild(this._gallery_forward3__img);
		this._gallery_forward3.ggId="gallery_forward";
		this._gallery_forward3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_forward3.ggVisible=true;
		this._gallery_forward3.className='ggskin ggskin_button ';
		this._gallery_forward3.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 39px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_forward3.setAttribute('style',hs);
		this._gallery_forward3.style[domTransform + 'Origin']='50% 50%';
		me._gallery_forward3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_forward3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_forward3.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("1");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("4");
			me._gallery_fx5.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx5.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_forward3.onmouseover=function (e) {
			me._gallery_forward3__img.src=basePath + 'images/gallery_forward3__o.png';
		}
		this._gallery_forward3.onmouseout=function (e) {
			me._gallery_forward3__img.src=basePath + 'images/gallery_forward3.png';
		}
		this._gallery_forward3.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler5.appendChild(this._gallery_forward3);
		this._gallery_pause3=document.createElement('div');
		this._gallery_pause3__img=document.createElement('img');
		this._gallery_pause3__img.className='ggskin ggskin_button';
		this._gallery_pause3__img.setAttribute('src',basePath + 'images/gallery_pause3.png');
		this._gallery_pause3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_pause3__img.className='ggskin ggskin_button';
		this._gallery_pause3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_pause3__img);
		this._gallery_pause3.appendChild(this._gallery_pause3__img);
		this._gallery_pause3.ggId="gallery_pause";
		this._gallery_pause3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_pause3.ggVisible=true;
		this._gallery_pause3.className='ggskin ggskin_button ';
		this._gallery_pause3.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 86px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_pause3.setAttribute('style',hs);
		this._gallery_pause3.style[domTransform + 'Origin']='50% 50%';
		me._gallery_pause3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_pause3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_pause3.onclick=function (e) {
			me._gallery_timer5.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer5.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause3.style[domTransition]='none';
			me._gallery_pause3.style.visibility='hidden';
			me._gallery_pause3.ggVisible=false;
			me._gallery_play3.style[domTransition]='none';
			me._gallery_play3.style.visibility=(Number(me._gallery_play3.style.opacity)>0||!me._gallery_play3.style.opacity)?'inherit':'hidden';
			me._gallery_play3.ggVisible=true;
		}
		this._gallery_pause3.onmouseover=function (e) {
			me._gallery_pause3__img.src=basePath + 'images/gallery_pause3__o.png';
		}
		this._gallery_pause3.onmouseout=function (e) {
			me._gallery_pause3__img.src=basePath + 'images/gallery_pause3.png';
		}
		this._gallery_pause3.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler5.appendChild(this._gallery_pause3);
		this._gallery_play3=document.createElement('div');
		this._gallery_play3__img=document.createElement('img');
		this._gallery_play3__img.className='ggskin ggskin_button';
		this._gallery_play3__img.setAttribute('src',basePath + 'images/gallery_play3.png');
		this._gallery_play3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_play3__img.className='ggskin ggskin_button';
		this._gallery_play3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_play3__img);
		this._gallery_play3.appendChild(this._gallery_play3__img);
		this._gallery_play3.ggId="gallery_play";
		this._gallery_play3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_play3.ggVisible=true;
		this._gallery_play3.className='ggskin ggskin_button ';
		this._gallery_play3.ggType='button';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_play3.setAttribute('style',hs);
		this._gallery_play3.style[domTransform + 'Origin']='50% 50%';
		me._gallery_play3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_play3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_play3.onclick=function (e) {
			me._gallery_timer5.ggTimeout=Number("1.5") * 1000.0;
			me._gallery_timer5.ggTimestamp=me.ggCurrentTime;
			me._gallery_play3.style[domTransition]='none';
			me._gallery_play3.style.visibility='hidden';
			me._gallery_play3.ggVisible=false;
			me._gallery_pause3.style[domTransition]='none';
			me._gallery_pause3.style.visibility=(Number(me._gallery_pause3.style.opacity)>0||!me._gallery_pause3.style.opacity)?'inherit':'hidden';
			me._gallery_pause3.ggVisible=true;
		}
		this._gallery_play3.onmouseover=function (e) {
			me._gallery_play3__img.src=basePath + 'images/gallery_play3__o.png';
		}
		this._gallery_play3.onmouseout=function (e) {
			me._gallery_play3__img.src=basePath + 'images/gallery_play3.png';
		}
		this._gallery_play3.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler5.appendChild(this._gallery_play3);
		this._gallery_picture06.appendChild(this._gallery_controler5);
		this.divSkin.appendChild(this._gallery_picture06);
		this._gallery_picture051=document.createElement('div');
		this._gallery_picture051__img=document.createElement('img');
		this._gallery_picture051__img.className='ggskin ggskin_external';
		this._gallery_picture051__img.onload=function() {me._gallery_picture051.ggUpdatePosition();}
		this._gallery_picture051__img.setAttribute('src',basePath + '');
		this._gallery_picture051__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture051.appendChild(this._gallery_picture051__img);
		this._gallery_picture051.ggId="gallery_picture05-1";
		this._gallery_picture051.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture051.ggVisible=false;
		this._gallery_picture051.className='ggskin ggskin_external ';
		this._gallery_picture051.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 8%;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		this._gallery_picture051.setAttribute('style',hs);
		this._gallery_picture051.style[domTransform + 'Origin']='50% 50%';
		me._gallery_picture051.ggIsActive=function() {
			return false;
		}
		me._gallery_picture051.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._gallery_picture051.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture051.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture051.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture051.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture051.style[domTransition]='';
				if (me._gallery_picture051.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture051.ggText="gallery/05-1-01.jpg";
					me._gallery_picture051__img.src=me._gallery_picture051.ggText;
				}
				else if (me._gallery_picture051.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture051.ggText="gallery/05-1-02.jpg";
					me._gallery_picture051__img.src=me._gallery_picture051.ggText;
				}
				else if (me._gallery_picture051.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture051.ggText="gallery/05-1-03.jpg";
					me._gallery_picture051__img.src=me._gallery_picture051.ggText;
				}
				else if (me._gallery_picture051.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture051.ggText="gallery/05-1-04.jpg";
					me._gallery_picture051__img.src=me._gallery_picture051.ggText;
				}
				else {
					me._gallery_picture051.ggText="";
					me._gallery_picture051__img.src=me._gallery_picture051.ggText;
				}
			}
		}
		this._gallery_picture051.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture051.clientWidth;
			var parentHeight = me._gallery_picture051.clientHeight;
			var aspectRatioDiv = me._gallery_picture051.clientWidth / me._gallery_picture051.clientHeight;
			var aspectRatioImg = me._gallery_picture051__img.naturalWidth / me._gallery_picture051__img.naturalHeight;
			if (me._gallery_picture051__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture051__img.naturalWidth;
			if (me._gallery_picture051__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture051__img.naturalHeight;
			var currentWidth = me._gallery_picture051__img.naturalWidth;
			var currentHeight = me._gallery_picture051__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture051__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture051__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			};
		}
		this._screen_tintclose4=document.createElement('div');
		this._screen_tintclose4.ggId="screen_tint-close";
		this._screen_tintclose4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen_tintclose4.ggVisible=true;
		this._screen_tintclose4.className='ggskin ggskin_rectangle ';
		this._screen_tintclose4.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 89.7917%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screen_tintclose4.setAttribute('style',hs);
		this._screen_tintclose4.style[domTransform + 'Origin']='50% 50%';
		me._screen_tintclose4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._screen_tintclose4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._screen_tintclose4.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer4.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer4.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause2.style[domTransition]='none';
			me._gallery_pause2.style.visibility='hidden';
			me._gallery_pause2.ggVisible=false;
			me._gallery_play2.style[domTransition]='none';
			me._gallery_play2.style.visibility=(Number(me._gallery_play2.style.opacity)>0||!me._gallery_play2.style.opacity)?'inherit':'hidden';
			me._gallery_play2.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture051.style[domTransition]='none';
			me._gallery_picture051.style.visibility='hidden';
			me._gallery_picture051.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._screen_tintclose4.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_picture051.appendChild(this._screen_tintclose4);
		this._gallery_controler4=document.createElement('div');
		this._gallery_controler4.ggId="gallery_controler";
		this._gallery_controler4.ggLeft=-68;
		this._gallery_controler4.ggTop=-39;
		this._gallery_controler4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_controler4.ggVisible=true;
		this._gallery_controler4.className='ggskin ggskin_container ';
		this._gallery_controler4.ggType='container';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -68px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 118px;';
		hs+='pointer-events:none;';
		this._gallery_controler4.setAttribute('style',hs);
		this._gallery_controler4.style[domTransform + 'Origin']='50% 50%';
		me._gallery_controler4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_controler4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_controler4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._gallery_timer4=document.createElement('div');
		this._gallery_timer4.ggTimestamp=this.ggCurrentTime;
		this._gallery_timer4.ggLastIsActive=true;
		this._gallery_timer4.ggTimeout=0;
		this._gallery_timer4.ggId="gallery_timer";
		this._gallery_timer4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_timer4.ggVisible=true;
		this._gallery_timer4.className='ggskin ggskin_timer ';
		this._gallery_timer4.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_timer4.setAttribute('style',hs);
		this._gallery_timer4.style[domTransform + 'Origin']='50% 50%';
		me._gallery_timer4.ggIsActive=function() {
			return (me._gallery_timer4.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._gallery_timer4.ggTimestamp) / me._gallery_timer4.ggTimeout) % 2 == 0));
		}
		me._gallery_timer4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_timer4.ggActivate=function () {
			me._gallery_forward2.onclick();
		}
		this._gallery_timer4.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler4.appendChild(this._gallery_timer4);
		this._gallery_fx4=document.createElement('div');
		this._gallery_fx4.ggTimestamp=this.ggCurrentTime;
		this._gallery_fx4.ggLastIsActive=true;
		this._gallery_fx4.ggTimeout=1000;
		this._gallery_fx4.ggId="gallery_fx";
		this._gallery_fx4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_fx4.ggVisible=true;
		this._gallery_fx4.className='ggskin ggskin_timer ';
		this._gallery_fx4.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_fx4.setAttribute('style',hs);
		this._gallery_fx4.style[domTransform + 'Origin']='50% 50%';
		me._gallery_fx4.ggIsActive=function() {
			return (me._gallery_fx4.ggTimestamp + me._gallery_fx4.ggTimeout) >= me.ggCurrentTime;
		}
		me._gallery_fx4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_fx4.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler4.appendChild(this._gallery_fx4);
		this._gallery_picture_preload4=document.createElement('div');
		this._gallery_picture_preload4__img=document.createElement('img');
		this._gallery_picture_preload4__img.className='ggskin ggskin_external';
		this._gallery_picture_preload4__img.onload=function() {me._gallery_picture_preload4.ggUpdatePosition();}
		this._gallery_picture_preload4__img.setAttribute('src',basePath + '');
		this._gallery_picture_preload4__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture_preload4.appendChild(this._gallery_picture_preload4__img);
		this._gallery_picture_preload4.ggId="gallery_picture_preload";
		this._gallery_picture_preload4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture_preload4.ggVisible=false;
		this._gallery_picture_preload4.className='ggskin ggskin_external ';
		this._gallery_picture_preload4.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 31px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		this._gallery_picture_preload4.setAttribute('style',hs);
		this._gallery_picture_preload4.style[domTransform + 'Origin']='0% 0%';
		me._gallery_picture_preload4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_picture_preload4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_picture_preload4.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture_preload4.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture_preload4.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture_preload4.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture_preload4.style[domTransition]='';
				if (me._gallery_picture_preload4.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture_preload4.ggText="gallery/05-1-01.jpg";
					me._gallery_picture_preload4__img.src=me._gallery_picture_preload4.ggText;
				}
				else if (me._gallery_picture_preload4.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture_preload4.ggText="gallery/05-1-02.jpg";
					me._gallery_picture_preload4__img.src=me._gallery_picture_preload4.ggText;
				}
				else if (me._gallery_picture_preload4.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture_preload4.ggText="gallery/05-1-03.jpg";
					me._gallery_picture_preload4__img.src=me._gallery_picture_preload4.ggText;
				}
				else if (me._gallery_picture_preload4.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture_preload4.ggText="gallery/05-1-04.jpg";
					me._gallery_picture_preload4__img.src=me._gallery_picture_preload4.ggText;
				}
				else {
					me._gallery_picture_preload4.ggText="";
					me._gallery_picture_preload4__img.src=me._gallery_picture_preload4.ggText;
				}
			}
		}
		this._gallery_picture_preload4.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture_preload4.clientWidth;
			var parentHeight = me._gallery_picture_preload4.clientHeight;
			var aspectRatioDiv = me._gallery_picture_preload4.clientWidth / me._gallery_picture_preload4.clientHeight;
			var aspectRatioImg = me._gallery_picture_preload4__img.naturalWidth / me._gallery_picture_preload4__img.naturalHeight;
			if (me._gallery_picture_preload4__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture_preload4__img.naturalWidth;
			if (me._gallery_picture_preload4__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture_preload4__img.naturalHeight;
			var currentWidth = me._gallery_picture_preload4__img.naturalWidth;
			var currentHeight = me._gallery_picture_preload4__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture_preload4__img.setAttribute('style','position: absolute; left: 0px; top: 0px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture_preload4__img.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			};
		}
		this._gallery_controler4.appendChild(this._gallery_picture_preload4);
		this._gallery_close4=document.createElement('div');
		this._gallery_close4__img=document.createElement('img');
		this._gallery_close4__img.className='ggskin ggskin_image';
		this._gallery_close4__img.setAttribute('src',basePath + 'images/gallery_close4.png');
		this._gallery_close4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_close4__img.className='ggskin ggskin_image';
		this._gallery_close4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_close4__img);
		this._gallery_close4.appendChild(this._gallery_close4__img);
		this._gallery_close4.ggId="gallery_close";
		this._gallery_close4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_close4.ggVisible=true;
		this._gallery_close4.className='ggskin ggskin_image ';
		this._gallery_close4.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 133px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_close4.setAttribute('style',hs);
		this._gallery_close4.style[domTransform + 'Origin']='50% 50%';
		me._gallery_close4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_close4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_close4.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer4.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer4.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause2.style[domTransition]='none';
			me._gallery_pause2.style.visibility='hidden';
			me._gallery_pause2.ggVisible=false;
			me._gallery_play2.style[domTransition]='none';
			me._gallery_play2.style.visibility=(Number(me._gallery_play2.style.opacity)>0||!me._gallery_play2.style.opacity)?'inherit':'hidden';
			me._gallery_play2.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture051.style[domTransition]='none';
			me._gallery_picture051.style.visibility='hidden';
			me._gallery_picture051.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._gallery_close4.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler4.appendChild(this._gallery_close4);
		this._gallery_back2=document.createElement('div');
		this._gallery_back2__img=document.createElement('img');
		this._gallery_back2__img.className='ggskin ggskin_button';
		this._gallery_back2__img.setAttribute('src',basePath + 'images/gallery_back2.png');
		this._gallery_back2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_back2__img.className='ggskin ggskin_button';
		this._gallery_back2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_back2__img);
		this._gallery_back2.appendChild(this._gallery_back2__img);
		this._gallery_back2.ggId="gallery_back";
		this._gallery_back2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_back2.ggVisible=true;
		this._gallery_back2.className='ggskin ggskin_button ';
		this._gallery_back2.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_back2.setAttribute('style',hs);
		this._gallery_back2.style[domTransform + 'Origin']='50% 50%';
		me._gallery_back2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_back2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_back2.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("3");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("4");
			me._gallery_fx4.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx4.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_back2.onmouseover=function (e) {
			me._gallery_back2__img.src=basePath + 'images/gallery_back2__o.png';
		}
		this._gallery_back2.onmouseout=function (e) {
			me._gallery_back2__img.src=basePath + 'images/gallery_back2.png';
		}
		this._gallery_back2.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler4.appendChild(this._gallery_back2);
		this._gallery_counter_total2=document.createElement('div');
		this._gallery_counter_total2__text=document.createElement('div');
		this._gallery_counter_total2.className='ggskin ggskin_textdiv';
		this._gallery_counter_total2.ggTextDiv=this._gallery_counter_total2__text;
		this._gallery_counter_total2.ggId="gallery_counter_total";
		this._gallery_counter_total2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter_total2.ggVisible=true;
		this._gallery_counter_total2.className='ggskin ggskin_text ';
		this._gallery_counter_total2.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 51px;';
		hs+='pointer-events:auto;';
		this._gallery_counter_total2.setAttribute('style',hs);
		this._gallery_counter_total2.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 51px;';
		hs+='height: 18px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.588235);';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter_total2__text.setAttribute('style',hs);
		this._gallery_counter_total2__text.innerHTML="\/ 4";
		this._gallery_counter_total2.appendChild(this._gallery_counter_total2__text);
		me._gallery_counter_total2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter_total2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_counter_total2.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler4.appendChild(this._gallery_counter_total2);
		this._gallery_counter2=document.createElement('div');
		this._gallery_counter2__text=document.createElement('div');
		this._gallery_counter2.className='ggskin ggskin_textdiv';
		this._gallery_counter2.ggTextDiv=this._gallery_counter2__text;
		this._gallery_counter2.ggId="gallery_counter";
		this._gallery_counter2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter2.ggVisible=true;
		this._gallery_counter2.className='ggskin ggskin_text ';
		this._gallery_counter2.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		this._gallery_counter2.setAttribute('style',hs);
		this._gallery_counter2.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter2__text.setAttribute('style',hs);
		this._gallery_counter2__text.innerHTML="1";
		this._gallery_counter2.appendChild(this._gallery_counter2__text);
		me._gallery_counter2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_counter2.ggCurrentLogicStateText = -1;
		this._gallery_counter2.ggUpdateConditionTimer=function () {
			var newLogicStateText;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateText = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateText = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateText = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateText = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateText = 5;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 6)
			)
			{
				newLogicStateText = 6;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 7)
			)
			{
				newLogicStateText = 7;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 8)
			)
			{
				newLogicStateText = 8;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 9)
			)
			{
				newLogicStateText = 9;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 10)
			)
			{
				newLogicStateText = 10;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 11)
			)
			{
				newLogicStateText = 11;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 12)
			)
			{
				newLogicStateText = 12;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 13)
			)
			{
				newLogicStateText = 13;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 14)
			)
			{
				newLogicStateText = 14;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._gallery_counter2.ggCurrentLogicStateText != newLogicStateText) {
				me._gallery_counter2.ggCurrentLogicStateText = newLogicStateText;
				me._gallery_counter2.style[domTransition]='';
				if (me._gallery_counter2.ggCurrentLogicStateText == 0) {
					me._gallery_counter2.ggText="1";
					me._gallery_counter2__text.innerHTML=me._gallery_counter2.ggText;
					if (me._gallery_counter2.ggUpdateText) {
					me._gallery_counter2.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter2.ggUpdatePosition) me._gallery_counter2.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter2.ggCurrentLogicStateText == 1) {
					me._gallery_counter2.ggText="2";
					me._gallery_counter2__text.innerHTML=me._gallery_counter2.ggText;
					if (me._gallery_counter2.ggUpdateText) {
					me._gallery_counter2.ggUpdateText=function() {
						var hs="2";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter2.ggUpdatePosition) me._gallery_counter2.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter2.ggCurrentLogicStateText == 2) {
					me._gallery_counter2.ggText="3";
					me._gallery_counter2__text.innerHTML=me._gallery_counter2.ggText;
					if (me._gallery_counter2.ggUpdateText) {
					me._gallery_counter2.ggUpdateText=function() {
						var hs="3";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter2.ggUpdatePosition) me._gallery_counter2.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter2.ggCurrentLogicStateText == 3) {
					me._gallery_counter2.ggText="4";
					me._gallery_counter2__text.innerHTML=me._gallery_counter2.ggText;
					if (me._gallery_counter2.ggUpdateText) {
					me._gallery_counter2.ggUpdateText=function() {
						var hs="4";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter2.ggUpdatePosition) me._gallery_counter2.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter2.ggCurrentLogicStateText == 4) {
					me._gallery_counter2.ggText="5";
					me._gallery_counter2__text.innerHTML=me._gallery_counter2.ggText;
					if (me._gallery_counter2.ggUpdateText) {
					me._gallery_counter2.ggUpdateText=function() {
						var hs="5";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter2.ggUpdatePosition) me._gallery_counter2.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter2.ggCurrentLogicStateText == 5) {
					me._gallery_counter2.ggText="6";
					me._gallery_counter2__text.innerHTML=me._gallery_counter2.ggText;
					if (me._gallery_counter2.ggUpdateText) {
					me._gallery_counter2.ggUpdateText=function() {
						var hs="6";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter2.ggUpdatePosition) me._gallery_counter2.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter2.ggCurrentLogicStateText == 6) {
					me._gallery_counter2.ggText="7";
					me._gallery_counter2__text.innerHTML=me._gallery_counter2.ggText;
					if (me._gallery_counter2.ggUpdateText) {
					me._gallery_counter2.ggUpdateText=function() {
						var hs="7";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter2.ggUpdatePosition) me._gallery_counter2.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter2.ggCurrentLogicStateText == 7) {
					me._gallery_counter2.ggText="8";
					me._gallery_counter2__text.innerHTML=me._gallery_counter2.ggText;
					if (me._gallery_counter2.ggUpdateText) {
					me._gallery_counter2.ggUpdateText=function() {
						var hs="8";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter2.ggUpdatePosition) me._gallery_counter2.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter2.ggCurrentLogicStateText == 8) {
					me._gallery_counter2.ggText="9";
					me._gallery_counter2__text.innerHTML=me._gallery_counter2.ggText;
					if (me._gallery_counter2.ggUpdateText) {
					me._gallery_counter2.ggUpdateText=function() {
						var hs="9";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter2.ggUpdatePosition) me._gallery_counter2.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter2.ggCurrentLogicStateText == 9) {
					me._gallery_counter2.ggText="10";
					me._gallery_counter2__text.innerHTML=me._gallery_counter2.ggText;
					if (me._gallery_counter2.ggUpdateText) {
					me._gallery_counter2.ggUpdateText=function() {
						var hs="10";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter2.ggUpdatePosition) me._gallery_counter2.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter2.ggCurrentLogicStateText == 10) {
					me._gallery_counter2.ggText="11";
					me._gallery_counter2__text.innerHTML=me._gallery_counter2.ggText;
					if (me._gallery_counter2.ggUpdateText) {
					me._gallery_counter2.ggUpdateText=function() {
						var hs="11";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter2.ggUpdatePosition) me._gallery_counter2.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter2.ggCurrentLogicStateText == 11) {
					me._gallery_counter2.ggText="12";
					me._gallery_counter2__text.innerHTML=me._gallery_counter2.ggText;
					if (me._gallery_counter2.ggUpdateText) {
					me._gallery_counter2.ggUpdateText=function() {
						var hs="12";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter2.ggUpdatePosition) me._gallery_counter2.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter2.ggCurrentLogicStateText == 12) {
					me._gallery_counter2.ggText="13";
					me._gallery_counter2__text.innerHTML=me._gallery_counter2.ggText;
					if (me._gallery_counter2.ggUpdateText) {
					me._gallery_counter2.ggUpdateText=function() {
						var hs="13";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter2.ggUpdatePosition) me._gallery_counter2.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter2.ggCurrentLogicStateText == 13) {
					me._gallery_counter2.ggText="14";
					me._gallery_counter2__text.innerHTML=me._gallery_counter2.ggText;
					if (me._gallery_counter2.ggUpdateText) {
					me._gallery_counter2.ggUpdateText=function() {
						var hs="14";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter2.ggUpdatePosition) me._gallery_counter2.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter2.ggCurrentLogicStateText == 14) {
					me._gallery_counter2.ggText="15";
					me._gallery_counter2__text.innerHTML=me._gallery_counter2.ggText;
					if (me._gallery_counter2.ggUpdateText) {
					me._gallery_counter2.ggUpdateText=function() {
						var hs="15";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter2.ggUpdatePosition) me._gallery_counter2.ggUpdatePosition();
					}
				}
				else {
					me._gallery_counter2.ggText="1";
					me._gallery_counter2__text.innerHTML=me._gallery_counter2.ggText;
					if (me._gallery_counter2.ggUpdateText) {
					me._gallery_counter2.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter2.ggUpdatePosition) me._gallery_counter2.ggUpdatePosition();
					}
				}
			}
		}
		this._gallery_counter2.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((28-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._gallery_controler4.appendChild(this._gallery_counter2);
		this._text_14=document.createElement('div');
		this._text_14__text=document.createElement('div');
		this._text_14.className='ggskin ggskin_textdiv';
		this._text_14.ggTextDiv=this._text_14__text;
		this._text_14.ggId="Text 1";
		this._text_14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_14.ggVisible=true;
		this._text_14.className='ggskin ggskin_text ';
		this._text_14.ggType='text';
		hs ='';
		hs+='height : 149px;';
		hs+='left : -205px;';
		hs+='position : absolute;';
		hs+='top : -158px;';
		hs+='visibility : inherit;';
		hs+='width : 572px;';
		hs+='pointer-events:auto;';
		this._text_14.setAttribute('style',hs);
		this._text_14.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 572px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.27451);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.27451);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		this._text_14__text.setAttribute('style',hs);
		this._text_14__text.innerHTML="\u0421\u0422\u0420\u041e\u0418\u0422\u0415\u041b\u042c\u0421\u0422\u0412\u041e \u041a\u041e\u041c\u041f\u041b\u0415\u041a\u0421\u041e\u0412 \u041e\u0427\u0418\u0421\u0422\u041d\u042b\u0425 \u0421\u041e\u041e\u0420\u0423\u0416\u0415\u041d\u0418\u0419, 2014-2015\u0433.<br\/><br\/>\u041e\u0431\u044a\u0451\u043c \u0437\u0430\u043b\u0438\u0442\u043e\u0433\u043e \u0431\u0435\u0442\u043e\u043d\u0430: 540 \u043c3<br\/>\u041e\u0431\u0449\u0430\u044f \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0442\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043e\u0432 \u0441 \u043c\u043e\u043d\u0442\u0430\u0436\u043e\u043c \u0441\u0431\u043e\u0440\u043d\u044b\u0445 \u0436\/\u0431 \u043a\u043e\u043b\u043e\u0434\u0446\u0435\u0432: 658 \u043c.\u043f.<br\/>\u041c\u041e\u041d\u0422\u0410\u0416 \u0438 \u0441\u0431\u043e\u0440\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u044c\u043d\u044b\u0445 \u0437\u0434\u0430\u043d\u0438\u0439 \u043e\u0447\u0438\u0441\u0442\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043e\u0432<br\/>\u041f\u0443\u0441\u043a\u043e\u043d\u0430\u043b\u0430\u0434\u043e\u0447\u043d\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u044b<br\/>\u0421\u0440\u043e\u043a \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0440\u0430\u0431\u043e\u0442: 3 \u043c\u0435\u0441\u044f\u0446\u0430.<br\/>";
		this._text_14.appendChild(this._text_14__text);
		me._text_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_14.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._text_14.ggCurrentLogicStateVisible = -1;
		this._text_14.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width < 100) || 
				(ggSkinVars['gallery_pictures_1'] != 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_14.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_14.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_14.style[domTransition]='';
				if (me._text_14.ggCurrentLogicStateVisible == 0) {
					me._text_14.style.visibility="hidden";
					me._text_14.ggVisible=false;
				}
				else {
					me._text_14.style.visibility=(Number(me._text_14.style.opacity)>0||!me._text_14.style.opacity)?'inherit':'hidden';
					me._text_14.ggVisible=true;
				}
			}
		}
		this._text_14.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler4.appendChild(this._text_14);
		this._gallery_forward2=document.createElement('div');
		this._gallery_forward2__img=document.createElement('img');
		this._gallery_forward2__img.className='ggskin ggskin_button';
		this._gallery_forward2__img.setAttribute('src',basePath + 'images/gallery_forward2.png');
		this._gallery_forward2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_forward2__img.className='ggskin ggskin_button';
		this._gallery_forward2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_forward2__img);
		this._gallery_forward2.appendChild(this._gallery_forward2__img);
		this._gallery_forward2.ggId="gallery_forward";
		this._gallery_forward2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_forward2.ggVisible=true;
		this._gallery_forward2.className='ggskin ggskin_button ';
		this._gallery_forward2.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 39px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_forward2.setAttribute('style',hs);
		this._gallery_forward2.style[domTransform + 'Origin']='50% 50%';
		me._gallery_forward2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_forward2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_forward2.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("1");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("4");
			me._gallery_fx4.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx4.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_forward2.onmouseover=function (e) {
			me._gallery_forward2__img.src=basePath + 'images/gallery_forward2__o.png';
		}
		this._gallery_forward2.onmouseout=function (e) {
			me._gallery_forward2__img.src=basePath + 'images/gallery_forward2.png';
		}
		this._gallery_forward2.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler4.appendChild(this._gallery_forward2);
		this._gallery_pause2=document.createElement('div');
		this._gallery_pause2__img=document.createElement('img');
		this._gallery_pause2__img.className='ggskin ggskin_button';
		this._gallery_pause2__img.setAttribute('src',basePath + 'images/gallery_pause2.png');
		this._gallery_pause2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_pause2__img.className='ggskin ggskin_button';
		this._gallery_pause2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_pause2__img);
		this._gallery_pause2.appendChild(this._gallery_pause2__img);
		this._gallery_pause2.ggId="gallery_pause";
		this._gallery_pause2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_pause2.ggVisible=true;
		this._gallery_pause2.className='ggskin ggskin_button ';
		this._gallery_pause2.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 86px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_pause2.setAttribute('style',hs);
		this._gallery_pause2.style[domTransform + 'Origin']='50% 50%';
		me._gallery_pause2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_pause2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_pause2.onclick=function (e) {
			me._gallery_timer4.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer4.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause2.style[domTransition]='none';
			me._gallery_pause2.style.visibility='hidden';
			me._gallery_pause2.ggVisible=false;
			me._gallery_play2.style[domTransition]='none';
			me._gallery_play2.style.visibility=(Number(me._gallery_play2.style.opacity)>0||!me._gallery_play2.style.opacity)?'inherit':'hidden';
			me._gallery_play2.ggVisible=true;
		}
		this._gallery_pause2.onmouseover=function (e) {
			me._gallery_pause2__img.src=basePath + 'images/gallery_pause2__o.png';
		}
		this._gallery_pause2.onmouseout=function (e) {
			me._gallery_pause2__img.src=basePath + 'images/gallery_pause2.png';
		}
		this._gallery_pause2.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler4.appendChild(this._gallery_pause2);
		this._gallery_play2=document.createElement('div');
		this._gallery_play2__img=document.createElement('img');
		this._gallery_play2__img.className='ggskin ggskin_button';
		this._gallery_play2__img.setAttribute('src',basePath + 'images/gallery_play2.png');
		this._gallery_play2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_play2__img.className='ggskin ggskin_button';
		this._gallery_play2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_play2__img);
		this._gallery_play2.appendChild(this._gallery_play2__img);
		this._gallery_play2.ggId="gallery_play";
		this._gallery_play2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_play2.ggVisible=true;
		this._gallery_play2.className='ggskin ggskin_button ';
		this._gallery_play2.ggType='button';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_play2.setAttribute('style',hs);
		this._gallery_play2.style[domTransform + 'Origin']='50% 50%';
		me._gallery_play2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_play2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_play2.onclick=function (e) {
			me._gallery_timer4.ggTimeout=Number("1.5") * 1000.0;
			me._gallery_timer4.ggTimestamp=me.ggCurrentTime;
			me._gallery_play2.style[domTransition]='none';
			me._gallery_play2.style.visibility='hidden';
			me._gallery_play2.ggVisible=false;
			me._gallery_pause2.style[domTransition]='none';
			me._gallery_pause2.style.visibility=(Number(me._gallery_pause2.style.opacity)>0||!me._gallery_pause2.style.opacity)?'inherit':'hidden';
			me._gallery_pause2.ggVisible=true;
		}
		this._gallery_play2.onmouseover=function (e) {
			me._gallery_play2__img.src=basePath + 'images/gallery_play2__o.png';
		}
		this._gallery_play2.onmouseout=function (e) {
			me._gallery_play2__img.src=basePath + 'images/gallery_play2.png';
		}
		this._gallery_play2.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler4.appendChild(this._gallery_play2);
		this._gallery_picture051.appendChild(this._gallery_controler4);
		this.divSkin.appendChild(this._gallery_picture051);
		this._gallery_picture05=document.createElement('div');
		this._gallery_picture05__img=document.createElement('img');
		this._gallery_picture05__img.className='ggskin ggskin_external';
		this._gallery_picture05__img.onload=function() {me._gallery_picture05.ggUpdatePosition();}
		this._gallery_picture05__img.setAttribute('src',basePath + '');
		this._gallery_picture05__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture05.appendChild(this._gallery_picture05__img);
		this._gallery_picture05.ggId="gallery_picture05";
		this._gallery_picture05.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture05.ggVisible=false;
		this._gallery_picture05.className='ggskin ggskin_external ';
		this._gallery_picture05.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 8%;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		this._gallery_picture05.setAttribute('style',hs);
		this._gallery_picture05.style[domTransform + 'Origin']='50% 50%';
		me._gallery_picture05.ggIsActive=function() {
			return false;
		}
		me._gallery_picture05.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._gallery_picture05.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture05.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateExternalUrl = 5;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 6)
			)
			{
				newLogicStateExternalUrl = 6;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 7)
			)
			{
				newLogicStateExternalUrl = 7;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture05.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture05.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture05.style[domTransition]='';
				if (me._gallery_picture05.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture05.ggText="gallery/05-01.jpg";
					me._gallery_picture05__img.src=me._gallery_picture05.ggText;
				}
				else if (me._gallery_picture05.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture05.ggText="gallery/05-02.jpg";
					me._gallery_picture05__img.src=me._gallery_picture05.ggText;
				}
				else if (me._gallery_picture05.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture05.ggText="gallery/05-03.jpg";
					me._gallery_picture05__img.src=me._gallery_picture05.ggText;
				}
				else if (me._gallery_picture05.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture05.ggText="gallery/05-04.jpg";
					me._gallery_picture05__img.src=me._gallery_picture05.ggText;
				}
				else if (me._gallery_picture05.ggCurrentLogicStateExternalUrl == 4) {
					me._gallery_picture05.ggText="gallery/05-05.jpg";
					me._gallery_picture05__img.src=me._gallery_picture05.ggText;
				}
				else if (me._gallery_picture05.ggCurrentLogicStateExternalUrl == 5) {
					me._gallery_picture05.ggText="gallery/05-06.jpg";
					me._gallery_picture05__img.src=me._gallery_picture05.ggText;
				}
				else if (me._gallery_picture05.ggCurrentLogicStateExternalUrl == 6) {
					me._gallery_picture05.ggText="gallery/05-07.jpg";
					me._gallery_picture05__img.src=me._gallery_picture05.ggText;
				}
				else if (me._gallery_picture05.ggCurrentLogicStateExternalUrl == 7) {
					me._gallery_picture05.ggText="gallery/05-08.jpg";
					me._gallery_picture05__img.src=me._gallery_picture05.ggText;
				}
				else {
					me._gallery_picture05.ggText="";
					me._gallery_picture05__img.src=me._gallery_picture05.ggText;
				}
			}
		}
		this._gallery_picture05.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture05.clientWidth;
			var parentHeight = me._gallery_picture05.clientHeight;
			var aspectRatioDiv = me._gallery_picture05.clientWidth / me._gallery_picture05.clientHeight;
			var aspectRatioImg = me._gallery_picture05__img.naturalWidth / me._gallery_picture05__img.naturalHeight;
			if (me._gallery_picture05__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture05__img.naturalWidth;
			if (me._gallery_picture05__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture05__img.naturalHeight;
			var currentWidth = me._gallery_picture05__img.naturalWidth;
			var currentHeight = me._gallery_picture05__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture05__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture05__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			};
		}
		this._screen_tintclose3=document.createElement('div');
		this._screen_tintclose3.ggId="screen_tint-close";
		this._screen_tintclose3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen_tintclose3.ggVisible=true;
		this._screen_tintclose3.className='ggskin ggskin_rectangle ';
		this._screen_tintclose3.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 89.7917%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screen_tintclose3.setAttribute('style',hs);
		this._screen_tintclose3.style[domTransform + 'Origin']='50% 50%';
		me._screen_tintclose3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._screen_tintclose3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._screen_tintclose3.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer3.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer3.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause1.style[domTransition]='none';
			me._gallery_pause1.style.visibility='hidden';
			me._gallery_pause1.ggVisible=false;
			me._gallery_play1.style[domTransition]='none';
			me._gallery_play1.style.visibility=(Number(me._gallery_play1.style.opacity)>0||!me._gallery_play1.style.opacity)?'inherit':'hidden';
			me._gallery_play1.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture05.style[domTransition]='none';
			me._gallery_picture05.style.visibility='hidden';
			me._gallery_picture05.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._screen_tintclose3.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_picture05.appendChild(this._screen_tintclose3);
		this._gallery_controler3=document.createElement('div');
		this._gallery_controler3.ggId="gallery_controler";
		this._gallery_controler3.ggLeft=-68;
		this._gallery_controler3.ggTop=-39;
		this._gallery_controler3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_controler3.ggVisible=true;
		this._gallery_controler3.className='ggskin ggskin_container ';
		this._gallery_controler3.ggType='container';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -68px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 118px;';
		hs+='pointer-events:none;';
		this._gallery_controler3.setAttribute('style',hs);
		this._gallery_controler3.style[domTransform + 'Origin']='50% 50%';
		me._gallery_controler3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_controler3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_controler3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._gallery_timer3=document.createElement('div');
		this._gallery_timer3.ggTimestamp=this.ggCurrentTime;
		this._gallery_timer3.ggLastIsActive=true;
		this._gallery_timer3.ggTimeout=0;
		this._gallery_timer3.ggId="gallery_timer";
		this._gallery_timer3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_timer3.ggVisible=true;
		this._gallery_timer3.className='ggskin ggskin_timer ';
		this._gallery_timer3.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_timer3.setAttribute('style',hs);
		this._gallery_timer3.style[domTransform + 'Origin']='50% 50%';
		me._gallery_timer3.ggIsActive=function() {
			return (me._gallery_timer3.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._gallery_timer3.ggTimestamp) / me._gallery_timer3.ggTimeout) % 2 == 0));
		}
		me._gallery_timer3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_timer3.ggActivate=function () {
			me._gallery_forward1.onclick();
		}
		this._gallery_timer3.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler3.appendChild(this._gallery_timer3);
		this._gallery_fx3=document.createElement('div');
		this._gallery_fx3.ggTimestamp=this.ggCurrentTime;
		this._gallery_fx3.ggLastIsActive=true;
		this._gallery_fx3.ggTimeout=1000;
		this._gallery_fx3.ggId="gallery_fx";
		this._gallery_fx3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_fx3.ggVisible=true;
		this._gallery_fx3.className='ggskin ggskin_timer ';
		this._gallery_fx3.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_fx3.setAttribute('style',hs);
		this._gallery_fx3.style[domTransform + 'Origin']='50% 50%';
		me._gallery_fx3.ggIsActive=function() {
			return (me._gallery_fx3.ggTimestamp + me._gallery_fx3.ggTimeout) >= me.ggCurrentTime;
		}
		me._gallery_fx3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_fx3.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler3.appendChild(this._gallery_fx3);
		this._gallery_picture_preload3=document.createElement('div');
		this._gallery_picture_preload3__img=document.createElement('img');
		this._gallery_picture_preload3__img.className='ggskin ggskin_external';
		this._gallery_picture_preload3__img.onload=function() {me._gallery_picture_preload3.ggUpdatePosition();}
		this._gallery_picture_preload3__img.setAttribute('src',basePath + '');
		this._gallery_picture_preload3__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture_preload3.appendChild(this._gallery_picture_preload3__img);
		this._gallery_picture_preload3.ggId="gallery_picture_preload";
		this._gallery_picture_preload3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture_preload3.ggVisible=false;
		this._gallery_picture_preload3.className='ggskin ggskin_external ';
		this._gallery_picture_preload3.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 31px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		this._gallery_picture_preload3.setAttribute('style',hs);
		this._gallery_picture_preload3.style[domTransform + 'Origin']='0% 0%';
		me._gallery_picture_preload3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_picture_preload3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_picture_preload3.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture_preload3.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateExternalUrl = 5;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 6)
			)
			{
				newLogicStateExternalUrl = 6;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 7)
			)
			{
				newLogicStateExternalUrl = 7;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture_preload3.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture_preload3.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture_preload3.style[domTransition]='';
				if (me._gallery_picture_preload3.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture_preload3.ggText="gallery/05-01.jpg";
					me._gallery_picture_preload3__img.src=me._gallery_picture_preload3.ggText;
				}
				else if (me._gallery_picture_preload3.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture_preload3.ggText="gallery/05-02.jpg";
					me._gallery_picture_preload3__img.src=me._gallery_picture_preload3.ggText;
				}
				else if (me._gallery_picture_preload3.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture_preload3.ggText="gallery/05-03.jpg";
					me._gallery_picture_preload3__img.src=me._gallery_picture_preload3.ggText;
				}
				else if (me._gallery_picture_preload3.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture_preload3.ggText="gallery/05-04.jpg";
					me._gallery_picture_preload3__img.src=me._gallery_picture_preload3.ggText;
				}
				else if (me._gallery_picture_preload3.ggCurrentLogicStateExternalUrl == 4) {
					me._gallery_picture_preload3.ggText="gallery/05-05.jpg";
					me._gallery_picture_preload3__img.src=me._gallery_picture_preload3.ggText;
				}
				else if (me._gallery_picture_preload3.ggCurrentLogicStateExternalUrl == 5) {
					me._gallery_picture_preload3.ggText="gallery/05-06.jpg";
					me._gallery_picture_preload3__img.src=me._gallery_picture_preload3.ggText;
				}
				else if (me._gallery_picture_preload3.ggCurrentLogicStateExternalUrl == 6) {
					me._gallery_picture_preload3.ggText="gallery/05-07.jpg";
					me._gallery_picture_preload3__img.src=me._gallery_picture_preload3.ggText;
				}
				else if (me._gallery_picture_preload3.ggCurrentLogicStateExternalUrl == 7) {
					me._gallery_picture_preload3.ggText="gallery/05-08.jpg";
					me._gallery_picture_preload3__img.src=me._gallery_picture_preload3.ggText;
				}
				else {
					me._gallery_picture_preload3.ggText="";
					me._gallery_picture_preload3__img.src=me._gallery_picture_preload3.ggText;
				}
			}
		}
		this._gallery_picture_preload3.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture_preload3.clientWidth;
			var parentHeight = me._gallery_picture_preload3.clientHeight;
			var aspectRatioDiv = me._gallery_picture_preload3.clientWidth / me._gallery_picture_preload3.clientHeight;
			var aspectRatioImg = me._gallery_picture_preload3__img.naturalWidth / me._gallery_picture_preload3__img.naturalHeight;
			if (me._gallery_picture_preload3__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture_preload3__img.naturalWidth;
			if (me._gallery_picture_preload3__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture_preload3__img.naturalHeight;
			var currentWidth = me._gallery_picture_preload3__img.naturalWidth;
			var currentHeight = me._gallery_picture_preload3__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture_preload3__img.setAttribute('style','position: absolute; left: 0px; top: 0px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture_preload3__img.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			};
		}
		this._gallery_controler3.appendChild(this._gallery_picture_preload3);
		this._gallery_close3=document.createElement('div');
		this._gallery_close3__img=document.createElement('img');
		this._gallery_close3__img.className='ggskin ggskin_image';
		this._gallery_close3__img.setAttribute('src',basePath + 'images/gallery_close3.png');
		this._gallery_close3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_close3__img.className='ggskin ggskin_image';
		this._gallery_close3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_close3__img);
		this._gallery_close3.appendChild(this._gallery_close3__img);
		this._gallery_close3.ggId="gallery_close";
		this._gallery_close3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_close3.ggVisible=true;
		this._gallery_close3.className='ggskin ggskin_image ';
		this._gallery_close3.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 133px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_close3.setAttribute('style',hs);
		this._gallery_close3.style[domTransform + 'Origin']='50% 50%';
		me._gallery_close3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_close3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_close3.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer3.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer3.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause1.style[domTransition]='none';
			me._gallery_pause1.style.visibility='hidden';
			me._gallery_pause1.ggVisible=false;
			me._gallery_play1.style[domTransition]='none';
			me._gallery_play1.style.visibility=(Number(me._gallery_play1.style.opacity)>0||!me._gallery_play1.style.opacity)?'inherit':'hidden';
			me._gallery_play1.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture05.style[domTransition]='none';
			me._gallery_picture05.style.visibility='hidden';
			me._gallery_picture05.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._gallery_close3.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler3.appendChild(this._gallery_close3);
		this._gallery_back1=document.createElement('div');
		this._gallery_back1__img=document.createElement('img');
		this._gallery_back1__img.className='ggskin ggskin_button';
		this._gallery_back1__img.setAttribute('src',basePath + 'images/gallery_back1.png');
		this._gallery_back1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_back1__img.className='ggskin ggskin_button';
		this._gallery_back1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_back1__img);
		this._gallery_back1.appendChild(this._gallery_back1__img);
		this._gallery_back1.ggId="gallery_back";
		this._gallery_back1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_back1.ggVisible=true;
		this._gallery_back1.className='ggskin ggskin_button ';
		this._gallery_back1.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_back1.setAttribute('style',hs);
		this._gallery_back1.style[domTransform + 'Origin']='50% 50%';
		me._gallery_back1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_back1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_back1.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("7");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("8");
			me._gallery_fx3.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx3.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_back1.onmouseover=function (e) {
			me._gallery_back1__img.src=basePath + 'images/gallery_back1__o.png';
		}
		this._gallery_back1.onmouseout=function (e) {
			me._gallery_back1__img.src=basePath + 'images/gallery_back1.png';
		}
		this._gallery_back1.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler3.appendChild(this._gallery_back1);
		this._gallery_counter_total1=document.createElement('div');
		this._gallery_counter_total1__text=document.createElement('div');
		this._gallery_counter_total1.className='ggskin ggskin_textdiv';
		this._gallery_counter_total1.ggTextDiv=this._gallery_counter_total1__text;
		this._gallery_counter_total1.ggId="gallery_counter_total";
		this._gallery_counter_total1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter_total1.ggVisible=true;
		this._gallery_counter_total1.className='ggskin ggskin_text ';
		this._gallery_counter_total1.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 51px;';
		hs+='pointer-events:auto;';
		this._gallery_counter_total1.setAttribute('style',hs);
		this._gallery_counter_total1.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 51px;';
		hs+='height: 18px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.588235);';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter_total1__text.setAttribute('style',hs);
		this._gallery_counter_total1__text.innerHTML="\/ 8";
		this._gallery_counter_total1.appendChild(this._gallery_counter_total1__text);
		me._gallery_counter_total1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter_total1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_counter_total1.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler3.appendChild(this._gallery_counter_total1);
		this._gallery_counter1=document.createElement('div');
		this._gallery_counter1__text=document.createElement('div');
		this._gallery_counter1.className='ggskin ggskin_textdiv';
		this._gallery_counter1.ggTextDiv=this._gallery_counter1__text;
		this._gallery_counter1.ggId="gallery_counter";
		this._gallery_counter1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter1.ggVisible=true;
		this._gallery_counter1.className='ggskin ggskin_text ';
		this._gallery_counter1.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		this._gallery_counter1.setAttribute('style',hs);
		this._gallery_counter1.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter1__text.setAttribute('style',hs);
		this._gallery_counter1__text.innerHTML="1";
		this._gallery_counter1.appendChild(this._gallery_counter1__text);
		me._gallery_counter1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_counter1.ggCurrentLogicStateText = -1;
		this._gallery_counter1.ggUpdateConditionTimer=function () {
			var newLogicStateText;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateText = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateText = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateText = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateText = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateText = 5;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 6)
			)
			{
				newLogicStateText = 6;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 7)
			)
			{
				newLogicStateText = 7;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 8)
			)
			{
				newLogicStateText = 8;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 9)
			)
			{
				newLogicStateText = 9;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 10)
			)
			{
				newLogicStateText = 10;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 11)
			)
			{
				newLogicStateText = 11;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 12)
			)
			{
				newLogicStateText = 12;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 13)
			)
			{
				newLogicStateText = 13;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 14)
			)
			{
				newLogicStateText = 14;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._gallery_counter1.ggCurrentLogicStateText != newLogicStateText) {
				me._gallery_counter1.ggCurrentLogicStateText = newLogicStateText;
				me._gallery_counter1.style[domTransition]='';
				if (me._gallery_counter1.ggCurrentLogicStateText == 0) {
					me._gallery_counter1.ggText="1";
					me._gallery_counter1__text.innerHTML=me._gallery_counter1.ggText;
					if (me._gallery_counter1.ggUpdateText) {
					me._gallery_counter1.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter1.ggUpdatePosition) me._gallery_counter1.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter1.ggCurrentLogicStateText == 1) {
					me._gallery_counter1.ggText="2";
					me._gallery_counter1__text.innerHTML=me._gallery_counter1.ggText;
					if (me._gallery_counter1.ggUpdateText) {
					me._gallery_counter1.ggUpdateText=function() {
						var hs="2";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter1.ggUpdatePosition) me._gallery_counter1.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter1.ggCurrentLogicStateText == 2) {
					me._gallery_counter1.ggText="3";
					me._gallery_counter1__text.innerHTML=me._gallery_counter1.ggText;
					if (me._gallery_counter1.ggUpdateText) {
					me._gallery_counter1.ggUpdateText=function() {
						var hs="3";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter1.ggUpdatePosition) me._gallery_counter1.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter1.ggCurrentLogicStateText == 3) {
					me._gallery_counter1.ggText="4";
					me._gallery_counter1__text.innerHTML=me._gallery_counter1.ggText;
					if (me._gallery_counter1.ggUpdateText) {
					me._gallery_counter1.ggUpdateText=function() {
						var hs="4";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter1.ggUpdatePosition) me._gallery_counter1.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter1.ggCurrentLogicStateText == 4) {
					me._gallery_counter1.ggText="5";
					me._gallery_counter1__text.innerHTML=me._gallery_counter1.ggText;
					if (me._gallery_counter1.ggUpdateText) {
					me._gallery_counter1.ggUpdateText=function() {
						var hs="5";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter1.ggUpdatePosition) me._gallery_counter1.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter1.ggCurrentLogicStateText == 5) {
					me._gallery_counter1.ggText="6";
					me._gallery_counter1__text.innerHTML=me._gallery_counter1.ggText;
					if (me._gallery_counter1.ggUpdateText) {
					me._gallery_counter1.ggUpdateText=function() {
						var hs="6";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter1.ggUpdatePosition) me._gallery_counter1.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter1.ggCurrentLogicStateText == 6) {
					me._gallery_counter1.ggText="7";
					me._gallery_counter1__text.innerHTML=me._gallery_counter1.ggText;
					if (me._gallery_counter1.ggUpdateText) {
					me._gallery_counter1.ggUpdateText=function() {
						var hs="7";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter1.ggUpdatePosition) me._gallery_counter1.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter1.ggCurrentLogicStateText == 7) {
					me._gallery_counter1.ggText="8";
					me._gallery_counter1__text.innerHTML=me._gallery_counter1.ggText;
					if (me._gallery_counter1.ggUpdateText) {
					me._gallery_counter1.ggUpdateText=function() {
						var hs="8";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter1.ggUpdatePosition) me._gallery_counter1.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter1.ggCurrentLogicStateText == 8) {
					me._gallery_counter1.ggText="9";
					me._gallery_counter1__text.innerHTML=me._gallery_counter1.ggText;
					if (me._gallery_counter1.ggUpdateText) {
					me._gallery_counter1.ggUpdateText=function() {
						var hs="9";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter1.ggUpdatePosition) me._gallery_counter1.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter1.ggCurrentLogicStateText == 9) {
					me._gallery_counter1.ggText="10";
					me._gallery_counter1__text.innerHTML=me._gallery_counter1.ggText;
					if (me._gallery_counter1.ggUpdateText) {
					me._gallery_counter1.ggUpdateText=function() {
						var hs="10";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter1.ggUpdatePosition) me._gallery_counter1.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter1.ggCurrentLogicStateText == 10) {
					me._gallery_counter1.ggText="11";
					me._gallery_counter1__text.innerHTML=me._gallery_counter1.ggText;
					if (me._gallery_counter1.ggUpdateText) {
					me._gallery_counter1.ggUpdateText=function() {
						var hs="11";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter1.ggUpdatePosition) me._gallery_counter1.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter1.ggCurrentLogicStateText == 11) {
					me._gallery_counter1.ggText="12";
					me._gallery_counter1__text.innerHTML=me._gallery_counter1.ggText;
					if (me._gallery_counter1.ggUpdateText) {
					me._gallery_counter1.ggUpdateText=function() {
						var hs="12";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter1.ggUpdatePosition) me._gallery_counter1.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter1.ggCurrentLogicStateText == 12) {
					me._gallery_counter1.ggText="13";
					me._gallery_counter1__text.innerHTML=me._gallery_counter1.ggText;
					if (me._gallery_counter1.ggUpdateText) {
					me._gallery_counter1.ggUpdateText=function() {
						var hs="13";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter1.ggUpdatePosition) me._gallery_counter1.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter1.ggCurrentLogicStateText == 13) {
					me._gallery_counter1.ggText="14";
					me._gallery_counter1__text.innerHTML=me._gallery_counter1.ggText;
					if (me._gallery_counter1.ggUpdateText) {
					me._gallery_counter1.ggUpdateText=function() {
						var hs="14";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter1.ggUpdatePosition) me._gallery_counter1.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter1.ggCurrentLogicStateText == 14) {
					me._gallery_counter1.ggText="15";
					me._gallery_counter1__text.innerHTML=me._gallery_counter1.ggText;
					if (me._gallery_counter1.ggUpdateText) {
					me._gallery_counter1.ggUpdateText=function() {
						var hs="15";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter1.ggUpdatePosition) me._gallery_counter1.ggUpdatePosition();
					}
				}
				else {
					me._gallery_counter1.ggText="1";
					me._gallery_counter1__text.innerHTML=me._gallery_counter1.ggText;
					if (me._gallery_counter1.ggUpdateText) {
					me._gallery_counter1.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter1.ggUpdatePosition) me._gallery_counter1.ggUpdatePosition();
					}
				}
			}
		}
		this._gallery_counter1.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((28-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._gallery_controler3.appendChild(this._gallery_counter1);
		this._text_13=document.createElement('div');
		this._text_13__text=document.createElement('div');
		this._text_13.className='ggskin ggskin_textdiv';
		this._text_13.ggTextDiv=this._text_13__text;
		this._text_13.ggId="Text 1";
		this._text_13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_13.ggVisible=true;
		this._text_13.className='ggskin ggskin_text ';
		this._text_13.ggType='text';
		hs ='';
		hs+='height : 149px;';
		hs+='left : -217px;';
		hs+='position : absolute;';
		hs+='top : -153px;';
		hs+='visibility : inherit;';
		hs+='width : 570px;';
		hs+='pointer-events:auto;';
		this._text_13.setAttribute('style',hs);
		this._text_13.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 570px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.27451);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.27451);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		this._text_13__text.setAttribute('style',hs);
		this._text_13__text.innerHTML="\u0421\u0422\u0420\u041e\u0418\u0422\u0415\u041b\u042c\u0421\u0422\u0412\u041e \u041a\u041e\u041c\u041f\u041b\u0415\u041a\u0421\u041e\u0412 \u041e\u0427\u0418\u0421\u0422\u041d\u042b\u0425 \u0421\u041e\u041e\u0420\u0423\u0416\u0415\u041d\u0418\u0419, 2014-2015\u0433.<br\/><br\/>\u041e\u0431\u044a\u0451\u043c \u0437\u0430\u043b\u0438\u0442\u043e\u0433\u043e \u0431\u0435\u0442\u043e\u043d\u0430: 540 \u043c3<br\/>\u041e\u0431\u0449\u0430\u044f \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0442\u0440\u0443\u0431\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u043e\u0432 \u0441 \u043c\u043e\u043d\u0442\u0430\u0436\u043e\u043c \u0441\u0431\u043e\u0440\u043d\u044b\u0445 \u0436\/\u0431 \u043a\u043e\u043b\u043e\u0434\u0446\u0435\u0432: 658 \u043c.\u043f.<br\/>\u041c\u043e\u043d\u0442\u0430\u0436 \u0438 \u0441\u0431\u043e\u0440\u043a\u0430 \u043c\u043e\u0434\u0443\u043b\u044c\u043d\u044b\u0445 \u0437\u0434\u0430\u043d\u0438\u0439 \u043e\u0447\u0438\u0441\u0442\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043e\u0432<br\/>\u041f\u0443\u0441\u043a\u043e\u043d\u0430\u043b\u0430\u0434\u043e\u0447\u043d\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u044b<br\/>";
		this._text_13.appendChild(this._text_13__text);
		me._text_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_13.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._text_13.ggCurrentLogicStateVisible = -1;
		this._text_13.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width < 100) || 
				(ggSkinVars['gallery_pictures_1'] != 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_13.style[domTransition]='';
				if (me._text_13.ggCurrentLogicStateVisible == 0) {
					me._text_13.style.visibility="hidden";
					me._text_13.ggVisible=false;
				}
				else {
					me._text_13.style.visibility=(Number(me._text_13.style.opacity)>0||!me._text_13.style.opacity)?'inherit':'hidden';
					me._text_13.ggVisible=true;
				}
			}
		}
		this._text_13.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler3.appendChild(this._text_13);
		this._gallery_forward1=document.createElement('div');
		this._gallery_forward1__img=document.createElement('img');
		this._gallery_forward1__img.className='ggskin ggskin_button';
		this._gallery_forward1__img.setAttribute('src',basePath + 'images/gallery_forward1.png');
		this._gallery_forward1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_forward1__img.className='ggskin ggskin_button';
		this._gallery_forward1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_forward1__img);
		this._gallery_forward1.appendChild(this._gallery_forward1__img);
		this._gallery_forward1.ggId="gallery_forward";
		this._gallery_forward1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_forward1.ggVisible=true;
		this._gallery_forward1.className='ggskin ggskin_button ';
		this._gallery_forward1.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 39px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_forward1.setAttribute('style',hs);
		this._gallery_forward1.style[domTransform + 'Origin']='50% 50%';
		me._gallery_forward1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_forward1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_forward1.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("1");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("8");
			me._gallery_fx3.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx3.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_forward1.onmouseover=function (e) {
			me._gallery_forward1__img.src=basePath + 'images/gallery_forward1__o.png';
		}
		this._gallery_forward1.onmouseout=function (e) {
			me._gallery_forward1__img.src=basePath + 'images/gallery_forward1.png';
		}
		this._gallery_forward1.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler3.appendChild(this._gallery_forward1);
		this._gallery_pause1=document.createElement('div');
		this._gallery_pause1__img=document.createElement('img');
		this._gallery_pause1__img.className='ggskin ggskin_button';
		this._gallery_pause1__img.setAttribute('src',basePath + 'images/gallery_pause1.png');
		this._gallery_pause1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_pause1__img.className='ggskin ggskin_button';
		this._gallery_pause1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_pause1__img);
		this._gallery_pause1.appendChild(this._gallery_pause1__img);
		this._gallery_pause1.ggId="gallery_pause";
		this._gallery_pause1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_pause1.ggVisible=true;
		this._gallery_pause1.className='ggskin ggskin_button ';
		this._gallery_pause1.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 86px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_pause1.setAttribute('style',hs);
		this._gallery_pause1.style[domTransform + 'Origin']='50% 50%';
		me._gallery_pause1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_pause1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_pause1.onclick=function (e) {
			me._gallery_timer3.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer3.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause1.style[domTransition]='none';
			me._gallery_pause1.style.visibility='hidden';
			me._gallery_pause1.ggVisible=false;
			me._gallery_play1.style[domTransition]='none';
			me._gallery_play1.style.visibility=(Number(me._gallery_play1.style.opacity)>0||!me._gallery_play1.style.opacity)?'inherit':'hidden';
			me._gallery_play1.ggVisible=true;
		}
		this._gallery_pause1.onmouseover=function (e) {
			me._gallery_pause1__img.src=basePath + 'images/gallery_pause1__o.png';
		}
		this._gallery_pause1.onmouseout=function (e) {
			me._gallery_pause1__img.src=basePath + 'images/gallery_pause1.png';
		}
		this._gallery_pause1.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler3.appendChild(this._gallery_pause1);
		this._gallery_play1=document.createElement('div');
		this._gallery_play1__img=document.createElement('img');
		this._gallery_play1__img.className='ggskin ggskin_button';
		this._gallery_play1__img.setAttribute('src',basePath + 'images/gallery_play1.png');
		this._gallery_play1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_play1__img.className='ggskin ggskin_button';
		this._gallery_play1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_play1__img);
		this._gallery_play1.appendChild(this._gallery_play1__img);
		this._gallery_play1.ggId="gallery_play";
		this._gallery_play1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_play1.ggVisible=true;
		this._gallery_play1.className='ggskin ggskin_button ';
		this._gallery_play1.ggType='button';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_play1.setAttribute('style',hs);
		this._gallery_play1.style[domTransform + 'Origin']='50% 50%';
		me._gallery_play1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_play1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_play1.onclick=function (e) {
			me._gallery_timer3.ggTimeout=Number("1.5") * 1000.0;
			me._gallery_timer3.ggTimestamp=me.ggCurrentTime;
			me._gallery_play1.style[domTransition]='none';
			me._gallery_play1.style.visibility='hidden';
			me._gallery_play1.ggVisible=false;
			me._gallery_pause1.style[domTransition]='none';
			me._gallery_pause1.style.visibility=(Number(me._gallery_pause1.style.opacity)>0||!me._gallery_pause1.style.opacity)?'inherit':'hidden';
			me._gallery_pause1.ggVisible=true;
		}
		this._gallery_play1.onmouseover=function (e) {
			me._gallery_play1__img.src=basePath + 'images/gallery_play1__o.png';
		}
		this._gallery_play1.onmouseout=function (e) {
			me._gallery_play1__img.src=basePath + 'images/gallery_play1.png';
		}
		this._gallery_play1.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler3.appendChild(this._gallery_play1);
		this._gallery_picture05.appendChild(this._gallery_controler3);
		this.divSkin.appendChild(this._gallery_picture05);
		this._gallery_picture04=document.createElement('div');
		this._gallery_picture04__img=document.createElement('img');
		this._gallery_picture04__img.className='ggskin ggskin_external';
		this._gallery_picture04__img.onload=function() {me._gallery_picture04.ggUpdatePosition();}
		this._gallery_picture04__img.setAttribute('src',basePath + '');
		this._gallery_picture04__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture04.appendChild(this._gallery_picture04__img);
		this._gallery_picture04.ggId="gallery_picture04";
		this._gallery_picture04.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture04.ggVisible=false;
		this._gallery_picture04.className='ggskin ggskin_external ';
		this._gallery_picture04.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 8%;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		this._gallery_picture04.setAttribute('style',hs);
		this._gallery_picture04.style[domTransform + 'Origin']='50% 50%';
		me._gallery_picture04.ggIsActive=function() {
			return false;
		}
		me._gallery_picture04.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._gallery_picture04.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture04.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture04.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture04.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture04.style[domTransition]='';
				if (me._gallery_picture04.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture04.ggText="gallery/04-01.jpg";
					me._gallery_picture04__img.src=me._gallery_picture04.ggText;
				}
				else if (me._gallery_picture04.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture04.ggText="gallery/04-02.jpg";
					me._gallery_picture04__img.src=me._gallery_picture04.ggText;
				}
				else {
					me._gallery_picture04.ggText="";
					me._gallery_picture04__img.src=me._gallery_picture04.ggText;
				}
			}
		}
		this._gallery_picture04.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture04.clientWidth;
			var parentHeight = me._gallery_picture04.clientHeight;
			var aspectRatioDiv = me._gallery_picture04.clientWidth / me._gallery_picture04.clientHeight;
			var aspectRatioImg = me._gallery_picture04__img.naturalWidth / me._gallery_picture04__img.naturalHeight;
			if (me._gallery_picture04__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture04__img.naturalWidth;
			if (me._gallery_picture04__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture04__img.naturalHeight;
			var currentWidth = me._gallery_picture04__img.naturalWidth;
			var currentHeight = me._gallery_picture04__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture04__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture04__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			};
		}
		this._screen_tintclose2=document.createElement('div');
		this._screen_tintclose2.ggId="screen_tint-close";
		this._screen_tintclose2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen_tintclose2.ggVisible=true;
		this._screen_tintclose2.className='ggskin ggskin_rectangle ';
		this._screen_tintclose2.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 89.7917%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screen_tintclose2.setAttribute('style',hs);
		this._screen_tintclose2.style[domTransform + 'Origin']='50% 50%';
		me._screen_tintclose2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._screen_tintclose2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._screen_tintclose2.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer2.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer2.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause0.style[domTransition]='none';
			me._gallery_pause0.style.visibility='hidden';
			me._gallery_pause0.ggVisible=false;
			me._gallery_play0.style[domTransition]='none';
			me._gallery_play0.style.visibility=(Number(me._gallery_play0.style.opacity)>0||!me._gallery_play0.style.opacity)?'inherit':'hidden';
			me._gallery_play0.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture04.style[domTransition]='none';
			me._gallery_picture04.style.visibility='hidden';
			me._gallery_picture04.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._screen_tintclose2.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_picture04.appendChild(this._screen_tintclose2);
		this._gallery_controler2=document.createElement('div');
		this._gallery_controler2.ggId="gallery_controler";
		this._gallery_controler2.ggLeft=-68;
		this._gallery_controler2.ggTop=-39;
		this._gallery_controler2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_controler2.ggVisible=true;
		this._gallery_controler2.className='ggskin ggskin_container ';
		this._gallery_controler2.ggType='container';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -68px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 118px;';
		hs+='pointer-events:none;';
		this._gallery_controler2.setAttribute('style',hs);
		this._gallery_controler2.style[domTransform + 'Origin']='50% 50%';
		me._gallery_controler2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_controler2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_controler2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._gallery_timer2=document.createElement('div');
		this._gallery_timer2.ggTimestamp=this.ggCurrentTime;
		this._gallery_timer2.ggLastIsActive=true;
		this._gallery_timer2.ggTimeout=0;
		this._gallery_timer2.ggId="gallery_timer";
		this._gallery_timer2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_timer2.ggVisible=true;
		this._gallery_timer2.className='ggskin ggskin_timer ';
		this._gallery_timer2.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_timer2.setAttribute('style',hs);
		this._gallery_timer2.style[domTransform + 'Origin']='50% 50%';
		me._gallery_timer2.ggIsActive=function() {
			return (me._gallery_timer2.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._gallery_timer2.ggTimestamp) / me._gallery_timer2.ggTimeout) % 2 == 0));
		}
		me._gallery_timer2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_timer2.ggActivate=function () {
			me._gallery_forward0.onclick();
		}
		this._gallery_timer2.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler2.appendChild(this._gallery_timer2);
		this._gallery_fx2=document.createElement('div');
		this._gallery_fx2.ggTimestamp=this.ggCurrentTime;
		this._gallery_fx2.ggLastIsActive=true;
		this._gallery_fx2.ggTimeout=1000;
		this._gallery_fx2.ggId="gallery_fx";
		this._gallery_fx2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_fx2.ggVisible=true;
		this._gallery_fx2.className='ggskin ggskin_timer ';
		this._gallery_fx2.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_fx2.setAttribute('style',hs);
		this._gallery_fx2.style[domTransform + 'Origin']='50% 50%';
		me._gallery_fx2.ggIsActive=function() {
			return (me._gallery_fx2.ggTimestamp + me._gallery_fx2.ggTimeout) >= me.ggCurrentTime;
		}
		me._gallery_fx2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_fx2.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler2.appendChild(this._gallery_fx2);
		this._gallery_picture_preload2=document.createElement('div');
		this._gallery_picture_preload2__img=document.createElement('img');
		this._gallery_picture_preload2__img.className='ggskin ggskin_external';
		this._gallery_picture_preload2__img.onload=function() {me._gallery_picture_preload2.ggUpdatePosition();}
		this._gallery_picture_preload2__img.setAttribute('src',basePath + '');
		this._gallery_picture_preload2__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture_preload2.appendChild(this._gallery_picture_preload2__img);
		this._gallery_picture_preload2.ggId="gallery_picture_preload";
		this._gallery_picture_preload2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture_preload2.ggVisible=false;
		this._gallery_picture_preload2.className='ggskin ggskin_external ';
		this._gallery_picture_preload2.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 31px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		this._gallery_picture_preload2.setAttribute('style',hs);
		this._gallery_picture_preload2.style[domTransform + 'Origin']='0% 0%';
		me._gallery_picture_preload2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_picture_preload2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_picture_preload2.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture_preload2.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture_preload2.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture_preload2.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture_preload2.style[domTransition]='';
				if (me._gallery_picture_preload2.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture_preload2.ggText="gallery/04-01.jpg";
					me._gallery_picture_preload2__img.src=me._gallery_picture_preload2.ggText;
				}
				else if (me._gallery_picture_preload2.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture_preload2.ggText="gallery/04-02.jpg";
					me._gallery_picture_preload2__img.src=me._gallery_picture_preload2.ggText;
				}
				else {
					me._gallery_picture_preload2.ggText="";
					me._gallery_picture_preload2__img.src=me._gallery_picture_preload2.ggText;
				}
			}
		}
		this._gallery_picture_preload2.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture_preload2.clientWidth;
			var parentHeight = me._gallery_picture_preload2.clientHeight;
			var aspectRatioDiv = me._gallery_picture_preload2.clientWidth / me._gallery_picture_preload2.clientHeight;
			var aspectRatioImg = me._gallery_picture_preload2__img.naturalWidth / me._gallery_picture_preload2__img.naturalHeight;
			if (me._gallery_picture_preload2__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture_preload2__img.naturalWidth;
			if (me._gallery_picture_preload2__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture_preload2__img.naturalHeight;
			var currentWidth = me._gallery_picture_preload2__img.naturalWidth;
			var currentHeight = me._gallery_picture_preload2__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture_preload2__img.setAttribute('style','position: absolute; left: 0px; top: 0px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture_preload2__img.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			};
		}
		this._gallery_controler2.appendChild(this._gallery_picture_preload2);
		this._gallery_close2=document.createElement('div');
		this._gallery_close2__img=document.createElement('img');
		this._gallery_close2__img.className='ggskin ggskin_image';
		this._gallery_close2__img.setAttribute('src',basePath + 'images/gallery_close2.png');
		this._gallery_close2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_close2__img.className='ggskin ggskin_image';
		this._gallery_close2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_close2__img);
		this._gallery_close2.appendChild(this._gallery_close2__img);
		this._gallery_close2.ggId="gallery_close";
		this._gallery_close2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_close2.ggVisible=true;
		this._gallery_close2.className='ggskin ggskin_image ';
		this._gallery_close2.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 133px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_close2.setAttribute('style',hs);
		this._gallery_close2.style[domTransform + 'Origin']='50% 50%';
		me._gallery_close2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_close2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_close2.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer2.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer2.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause0.style[domTransition]='none';
			me._gallery_pause0.style.visibility='hidden';
			me._gallery_pause0.ggVisible=false;
			me._gallery_play0.style[domTransition]='none';
			me._gallery_play0.style.visibility=(Number(me._gallery_play0.style.opacity)>0||!me._gallery_play0.style.opacity)?'inherit':'hidden';
			me._gallery_play0.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture04.style[domTransition]='none';
			me._gallery_picture04.style.visibility='hidden';
			me._gallery_picture04.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._gallery_close2.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler2.appendChild(this._gallery_close2);
		this._gallery_back0=document.createElement('div');
		this._gallery_back0__img=document.createElement('img');
		this._gallery_back0__img.className='ggskin ggskin_button';
		this._gallery_back0__img.setAttribute('src',basePath + 'images/gallery_back0.png');
		this._gallery_back0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_back0__img.className='ggskin ggskin_button';
		this._gallery_back0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_back0__img);
		this._gallery_back0.appendChild(this._gallery_back0__img);
		this._gallery_back0.ggId="gallery_back";
		this._gallery_back0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_back0.ggVisible=true;
		this._gallery_back0.className='ggskin ggskin_button ';
		this._gallery_back0.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_back0.setAttribute('style',hs);
		this._gallery_back0.style[domTransform + 'Origin']='50% 50%';
		me._gallery_back0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_back0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_back0.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("1");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("2");
			me._gallery_fx2.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx2.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_back0.onmouseover=function (e) {
			me._gallery_back0__img.src=basePath + 'images/gallery_back0__o.png';
		}
		this._gallery_back0.onmouseout=function (e) {
			me._gallery_back0__img.src=basePath + 'images/gallery_back0.png';
		}
		this._gallery_back0.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler2.appendChild(this._gallery_back0);
		this._gallery_counter_total0=document.createElement('div');
		this._gallery_counter_total0__text=document.createElement('div');
		this._gallery_counter_total0.className='ggskin ggskin_textdiv';
		this._gallery_counter_total0.ggTextDiv=this._gallery_counter_total0__text;
		this._gallery_counter_total0.ggId="gallery_counter_total";
		this._gallery_counter_total0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter_total0.ggVisible=true;
		this._gallery_counter_total0.className='ggskin ggskin_text ';
		this._gallery_counter_total0.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 51px;';
		hs+='pointer-events:auto;';
		this._gallery_counter_total0.setAttribute('style',hs);
		this._gallery_counter_total0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 51px;';
		hs+='height: 18px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.588235);';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter_total0__text.setAttribute('style',hs);
		this._gallery_counter_total0__text.innerHTML="\/ 2";
		this._gallery_counter_total0.appendChild(this._gallery_counter_total0__text);
		me._gallery_counter_total0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter_total0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_counter_total0.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler2.appendChild(this._gallery_counter_total0);
		this._gallery_counter0=document.createElement('div');
		this._gallery_counter0__text=document.createElement('div');
		this._gallery_counter0.className='ggskin ggskin_textdiv';
		this._gallery_counter0.ggTextDiv=this._gallery_counter0__text;
		this._gallery_counter0.ggId="gallery_counter";
		this._gallery_counter0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter0.ggVisible=true;
		this._gallery_counter0.className='ggskin ggskin_text ';
		this._gallery_counter0.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		this._gallery_counter0.setAttribute('style',hs);
		this._gallery_counter0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter0__text.setAttribute('style',hs);
		this._gallery_counter0__text.innerHTML="1";
		this._gallery_counter0.appendChild(this._gallery_counter0__text);
		me._gallery_counter0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_counter0.ggCurrentLogicStateText = -1;
		this._gallery_counter0.ggUpdateConditionTimer=function () {
			var newLogicStateText;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateText = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateText = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateText = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateText = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateText = 5;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 6)
			)
			{
				newLogicStateText = 6;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 7)
			)
			{
				newLogicStateText = 7;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 8)
			)
			{
				newLogicStateText = 8;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 9)
			)
			{
				newLogicStateText = 9;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 10)
			)
			{
				newLogicStateText = 10;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 11)
			)
			{
				newLogicStateText = 11;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 12)
			)
			{
				newLogicStateText = 12;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 13)
			)
			{
				newLogicStateText = 13;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 14)
			)
			{
				newLogicStateText = 14;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._gallery_counter0.ggCurrentLogicStateText != newLogicStateText) {
				me._gallery_counter0.ggCurrentLogicStateText = newLogicStateText;
				me._gallery_counter0.style[domTransition]='';
				if (me._gallery_counter0.ggCurrentLogicStateText == 0) {
					me._gallery_counter0.ggText="1";
					me._gallery_counter0__text.innerHTML=me._gallery_counter0.ggText;
					if (me._gallery_counter0.ggUpdateText) {
					me._gallery_counter0.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter0.ggUpdatePosition) me._gallery_counter0.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter0.ggCurrentLogicStateText == 1) {
					me._gallery_counter0.ggText="2";
					me._gallery_counter0__text.innerHTML=me._gallery_counter0.ggText;
					if (me._gallery_counter0.ggUpdateText) {
					me._gallery_counter0.ggUpdateText=function() {
						var hs="2";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter0.ggUpdatePosition) me._gallery_counter0.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter0.ggCurrentLogicStateText == 2) {
					me._gallery_counter0.ggText="3";
					me._gallery_counter0__text.innerHTML=me._gallery_counter0.ggText;
					if (me._gallery_counter0.ggUpdateText) {
					me._gallery_counter0.ggUpdateText=function() {
						var hs="3";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter0.ggUpdatePosition) me._gallery_counter0.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter0.ggCurrentLogicStateText == 3) {
					me._gallery_counter0.ggText="4";
					me._gallery_counter0__text.innerHTML=me._gallery_counter0.ggText;
					if (me._gallery_counter0.ggUpdateText) {
					me._gallery_counter0.ggUpdateText=function() {
						var hs="4";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter0.ggUpdatePosition) me._gallery_counter0.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter0.ggCurrentLogicStateText == 4) {
					me._gallery_counter0.ggText="5";
					me._gallery_counter0__text.innerHTML=me._gallery_counter0.ggText;
					if (me._gallery_counter0.ggUpdateText) {
					me._gallery_counter0.ggUpdateText=function() {
						var hs="5";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter0.ggUpdatePosition) me._gallery_counter0.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter0.ggCurrentLogicStateText == 5) {
					me._gallery_counter0.ggText="6";
					me._gallery_counter0__text.innerHTML=me._gallery_counter0.ggText;
					if (me._gallery_counter0.ggUpdateText) {
					me._gallery_counter0.ggUpdateText=function() {
						var hs="6";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter0.ggUpdatePosition) me._gallery_counter0.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter0.ggCurrentLogicStateText == 6) {
					me._gallery_counter0.ggText="7";
					me._gallery_counter0__text.innerHTML=me._gallery_counter0.ggText;
					if (me._gallery_counter0.ggUpdateText) {
					me._gallery_counter0.ggUpdateText=function() {
						var hs="7";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter0.ggUpdatePosition) me._gallery_counter0.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter0.ggCurrentLogicStateText == 7) {
					me._gallery_counter0.ggText="8";
					me._gallery_counter0__text.innerHTML=me._gallery_counter0.ggText;
					if (me._gallery_counter0.ggUpdateText) {
					me._gallery_counter0.ggUpdateText=function() {
						var hs="8";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter0.ggUpdatePosition) me._gallery_counter0.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter0.ggCurrentLogicStateText == 8) {
					me._gallery_counter0.ggText="9";
					me._gallery_counter0__text.innerHTML=me._gallery_counter0.ggText;
					if (me._gallery_counter0.ggUpdateText) {
					me._gallery_counter0.ggUpdateText=function() {
						var hs="9";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter0.ggUpdatePosition) me._gallery_counter0.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter0.ggCurrentLogicStateText == 9) {
					me._gallery_counter0.ggText="10";
					me._gallery_counter0__text.innerHTML=me._gallery_counter0.ggText;
					if (me._gallery_counter0.ggUpdateText) {
					me._gallery_counter0.ggUpdateText=function() {
						var hs="10";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter0.ggUpdatePosition) me._gallery_counter0.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter0.ggCurrentLogicStateText == 10) {
					me._gallery_counter0.ggText="11";
					me._gallery_counter0__text.innerHTML=me._gallery_counter0.ggText;
					if (me._gallery_counter0.ggUpdateText) {
					me._gallery_counter0.ggUpdateText=function() {
						var hs="11";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter0.ggUpdatePosition) me._gallery_counter0.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter0.ggCurrentLogicStateText == 11) {
					me._gallery_counter0.ggText="12";
					me._gallery_counter0__text.innerHTML=me._gallery_counter0.ggText;
					if (me._gallery_counter0.ggUpdateText) {
					me._gallery_counter0.ggUpdateText=function() {
						var hs="12";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter0.ggUpdatePosition) me._gallery_counter0.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter0.ggCurrentLogicStateText == 12) {
					me._gallery_counter0.ggText="13";
					me._gallery_counter0__text.innerHTML=me._gallery_counter0.ggText;
					if (me._gallery_counter0.ggUpdateText) {
					me._gallery_counter0.ggUpdateText=function() {
						var hs="13";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter0.ggUpdatePosition) me._gallery_counter0.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter0.ggCurrentLogicStateText == 13) {
					me._gallery_counter0.ggText="14";
					me._gallery_counter0__text.innerHTML=me._gallery_counter0.ggText;
					if (me._gallery_counter0.ggUpdateText) {
					me._gallery_counter0.ggUpdateText=function() {
						var hs="14";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter0.ggUpdatePosition) me._gallery_counter0.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter0.ggCurrentLogicStateText == 14) {
					me._gallery_counter0.ggText="15";
					me._gallery_counter0__text.innerHTML=me._gallery_counter0.ggText;
					if (me._gallery_counter0.ggUpdateText) {
					me._gallery_counter0.ggUpdateText=function() {
						var hs="15";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter0.ggUpdatePosition) me._gallery_counter0.ggUpdatePosition();
					}
				}
				else {
					me._gallery_counter0.ggText="1";
					me._gallery_counter0__text.innerHTML=me._gallery_counter0.ggText;
					if (me._gallery_counter0.ggUpdateText) {
					me._gallery_counter0.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter0.ggUpdatePosition) me._gallery_counter0.ggUpdatePosition();
					}
				}
			}
		}
		this._gallery_counter0.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((28-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._gallery_controler2.appendChild(this._gallery_counter0);
		this._text_12=document.createElement('div');
		this._text_12__text=document.createElement('div');
		this._text_12.className='ggskin ggskin_textdiv';
		this._text_12.ggTextDiv=this._text_12__text;
		this._text_12.ggId="Text 1";
		this._text_12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_12.ggVisible=true;
		this._text_12.className='ggskin ggskin_text ';
		this._text_12.ggType='text';
		hs ='';
		hs+='height : 145px;';
		hs+='left : -181px;';
		hs+='position : absolute;';
		hs+='top : -153px;';
		hs+='visibility : inherit;';
		hs+='width : 523px;';
		hs+='pointer-events:auto;';
		this._text_12.setAttribute('style',hs);
		this._text_12.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 523px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.27451);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.27451);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 5px 6px 5px 6px;';
		hs+='overflow: hidden;';
		this._text_12__text.setAttribute('style',hs);
		this._text_12__text.innerHTML="\u0410\u0412\u0422\u041e\u041c\u041e\u0411\u0418\u041b\u042c\u041d\u0410\u042f \u0414\u041e\u0420\u041e\u0413\u0410  \xab\u0413\u0420\u0410\u041d\u0418\u0426\u0410 \u0413\u041e\u041a - \u0420\u0410\u0417\u0412\u0418\u041b\u041a\u0410 \u21168\u0414\xbb, 2014-2015\u0433\u0433.<br\/><br\/>\u041e\u0431\u0449\u0430\u044f \u0434\u043b\u0438\u043d\u0430 12 \u043a\u043c<br\/>\u041f\u0440\u043e\u0444\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u0437\u0436\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u0441 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c \u043f\u0440\u043e\u0444\u0438\u043b\u044f 66 \u0442\u044b\u0441.\u043c2<br\/>\u0423\u043a\u043b\u0430\u0434\u043a\u0430 \u0433\u0435\u043e\u0440\u0435\u0448\u0451\u0442\u043a\u0438 72 \u0442\u044b\u0441.\u043c2<br\/>\u041e\u0442\u0441\u044b\u043f\u043a\u0430 \u0434\u043e\u0440\u043e\u0436\u043d\u043e\u0439 \u043e\u0434\u0435\u0436\u0434\u044b \u0438\u0437 \u0449\u0435\u0431\u043d\u044f \u0444\u0440\u0430\u043a\u0446\u0438\u0438 20 - 40 \u0442\u044b\u0441.\u0442\u043e\u043d\u043d<br\/>\u0423\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u0435 \u043e\u0442\u043a\u043e\u0441\u043e\u0432 \u0441\u043b\u043e\u0435\u043c \u0442\u043e\u0440\u0444\u0430 \u0441 \u043f\u043e\u0441\u0430\u0434\u043a\u043e\u0439 \u0433\u0430\u0437\u043e\u043d\u043d\u044b\u0445 \u0442\u0440\u0430\u0432 60 \u0442\u044b\u0441.\u043c2";
		this._text_12.appendChild(this._text_12__text);
		me._text_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_12.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._text_12.ggCurrentLogicStateVisible = -1;
		this._text_12.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width < 100) || 
				(ggSkinVars['gallery_pictures_1'] != 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_12.style[domTransition]='';
				if (me._text_12.ggCurrentLogicStateVisible == 0) {
					me._text_12.style.visibility="hidden";
					me._text_12.ggVisible=false;
				}
				else {
					me._text_12.style.visibility=(Number(me._text_12.style.opacity)>0||!me._text_12.style.opacity)?'inherit':'hidden';
					me._text_12.ggVisible=true;
				}
			}
		}
		this._text_12.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler2.appendChild(this._text_12);
		this._gallery_forward0=document.createElement('div');
		this._gallery_forward0__img=document.createElement('img');
		this._gallery_forward0__img.className='ggskin ggskin_button';
		this._gallery_forward0__img.setAttribute('src',basePath + 'images/gallery_forward0.png');
		this._gallery_forward0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_forward0__img.className='ggskin ggskin_button';
		this._gallery_forward0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_forward0__img);
		this._gallery_forward0.appendChild(this._gallery_forward0__img);
		this._gallery_forward0.ggId="gallery_forward";
		this._gallery_forward0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_forward0.ggVisible=true;
		this._gallery_forward0.className='ggskin ggskin_button ';
		this._gallery_forward0.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 39px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_forward0.setAttribute('style',hs);
		this._gallery_forward0.style[domTransform + 'Origin']='50% 50%';
		me._gallery_forward0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_forward0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_forward0.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("1");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("2");
			me._gallery_fx2.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx2.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_forward0.onmouseover=function (e) {
			me._gallery_forward0__img.src=basePath + 'images/gallery_forward0__o.png';
		}
		this._gallery_forward0.onmouseout=function (e) {
			me._gallery_forward0__img.src=basePath + 'images/gallery_forward0.png';
		}
		this._gallery_forward0.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler2.appendChild(this._gallery_forward0);
		this._gallery_pause0=document.createElement('div');
		this._gallery_pause0__img=document.createElement('img');
		this._gallery_pause0__img.className='ggskin ggskin_button';
		this._gallery_pause0__img.setAttribute('src',basePath + 'images/gallery_pause0.png');
		this._gallery_pause0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_pause0__img.className='ggskin ggskin_button';
		this._gallery_pause0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_pause0__img);
		this._gallery_pause0.appendChild(this._gallery_pause0__img);
		this._gallery_pause0.ggId="gallery_pause";
		this._gallery_pause0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_pause0.ggVisible=true;
		this._gallery_pause0.className='ggskin ggskin_button ';
		this._gallery_pause0.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 86px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_pause0.setAttribute('style',hs);
		this._gallery_pause0.style[domTransform + 'Origin']='50% 50%';
		me._gallery_pause0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_pause0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_pause0.onclick=function (e) {
			me._gallery_timer2.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer2.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause0.style[domTransition]='none';
			me._gallery_pause0.style.visibility='hidden';
			me._gallery_pause0.ggVisible=false;
			me._gallery_play0.style[domTransition]='none';
			me._gallery_play0.style.visibility=(Number(me._gallery_play0.style.opacity)>0||!me._gallery_play0.style.opacity)?'inherit':'hidden';
			me._gallery_play0.ggVisible=true;
		}
		this._gallery_pause0.onmouseover=function (e) {
			me._gallery_pause0__img.src=basePath + 'images/gallery_pause0__o.png';
		}
		this._gallery_pause0.onmouseout=function (e) {
			me._gallery_pause0__img.src=basePath + 'images/gallery_pause0.png';
		}
		this._gallery_pause0.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler2.appendChild(this._gallery_pause0);
		this._gallery_play0=document.createElement('div');
		this._gallery_play0__img=document.createElement('img');
		this._gallery_play0__img.className='ggskin ggskin_button';
		this._gallery_play0__img.setAttribute('src',basePath + 'images/gallery_play0.png');
		this._gallery_play0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_play0__img.className='ggskin ggskin_button';
		this._gallery_play0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_play0__img);
		this._gallery_play0.appendChild(this._gallery_play0__img);
		this._gallery_play0.ggId="gallery_play";
		this._gallery_play0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_play0.ggVisible=true;
		this._gallery_play0.className='ggskin ggskin_button ';
		this._gallery_play0.ggType='button';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_play0.setAttribute('style',hs);
		this._gallery_play0.style[domTransform + 'Origin']='50% 50%';
		me._gallery_play0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_play0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_play0.onclick=function (e) {
			me._gallery_timer2.ggTimeout=Number("1.5") * 1000.0;
			me._gallery_timer2.ggTimestamp=me.ggCurrentTime;
			me._gallery_play0.style[domTransition]='none';
			me._gallery_play0.style.visibility='hidden';
			me._gallery_play0.ggVisible=false;
			me._gallery_pause0.style[domTransition]='none';
			me._gallery_pause0.style.visibility=(Number(me._gallery_pause0.style.opacity)>0||!me._gallery_pause0.style.opacity)?'inherit':'hidden';
			me._gallery_pause0.ggVisible=true;
		}
		this._gallery_play0.onmouseover=function (e) {
			me._gallery_play0__img.src=basePath + 'images/gallery_play0__o.png';
		}
		this._gallery_play0.onmouseout=function (e) {
			me._gallery_play0__img.src=basePath + 'images/gallery_play0.png';
		}
		this._gallery_play0.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler2.appendChild(this._gallery_play0);
		this._gallery_picture04.appendChild(this._gallery_controler2);
		this.divSkin.appendChild(this._gallery_picture04);
		this._gallery_picture03=document.createElement('div');
		this._gallery_picture03__img=document.createElement('img');
		this._gallery_picture03__img.className='ggskin ggskin_external';
		this._gallery_picture03__img.onload=function() {me._gallery_picture03.ggUpdatePosition();}
		this._gallery_picture03__img.setAttribute('src',basePath + '');
		this._gallery_picture03__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture03.appendChild(this._gallery_picture03__img);
		this._gallery_picture03.ggId="gallery_picture03";
		this._gallery_picture03.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture03.ggVisible=false;
		this._gallery_picture03.className='ggskin ggskin_external ';
		this._gallery_picture03.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 8%;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		this._gallery_picture03.setAttribute('style',hs);
		this._gallery_picture03.style[domTransform + 'Origin']='50% 50%';
		me._gallery_picture03.ggIsActive=function() {
			return false;
		}
		me._gallery_picture03.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._gallery_picture03.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture03.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture03.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture03.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture03.style[domTransition]='';
				if (me._gallery_picture03.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture03.ggText="gallery/03-01.jpg";
					me._gallery_picture03__img.src=me._gallery_picture03.ggText;
				}
				else {
					me._gallery_picture03.ggText="";
					me._gallery_picture03__img.src=me._gallery_picture03.ggText;
				}
			}
		}
		this._gallery_picture03.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture03.clientWidth;
			var parentHeight = me._gallery_picture03.clientHeight;
			var aspectRatioDiv = me._gallery_picture03.clientWidth / me._gallery_picture03.clientHeight;
			var aspectRatioImg = me._gallery_picture03__img.naturalWidth / me._gallery_picture03__img.naturalHeight;
			if (me._gallery_picture03__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture03__img.naturalWidth;
			if (me._gallery_picture03__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture03__img.naturalHeight;
			var currentWidth = me._gallery_picture03__img.naturalWidth;
			var currentHeight = me._gallery_picture03__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture03__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture03__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			};
		}
		this._screen_tintclose1=document.createElement('div');
		this._screen_tintclose1.ggId="screen_tint-close";
		this._screen_tintclose1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen_tintclose1.ggVisible=true;
		this._screen_tintclose1.className='ggskin ggskin_rectangle ';
		this._screen_tintclose1.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 89.7917%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screen_tintclose1.setAttribute('style',hs);
		this._screen_tintclose1.style[domTransform + 'Origin']='50% 50%';
		me._screen_tintclose1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._screen_tintclose1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._screen_tintclose1.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer1.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer1.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause8.style[domTransition]='none';
			me._gallery_pause8.style.visibility='hidden';
			me._gallery_pause8.ggVisible=false;
			me._gallery_play8.style[domTransition]='none';
			me._gallery_play8.style.visibility=(Number(me._gallery_play8.style.opacity)>0||!me._gallery_play8.style.opacity)?'inherit':'hidden';
			me._gallery_play8.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture03.style[domTransition]='none';
			me._gallery_picture03.style.visibility='hidden';
			me._gallery_picture03.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._screen_tintclose1.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_picture03.appendChild(this._screen_tintclose1);
		this._gallery_controler1=document.createElement('div');
		this._gallery_controler1.ggId="gallery_controler";
		this._gallery_controler1.ggLeft=-68;
		this._gallery_controler1.ggTop=-39;
		this._gallery_controler1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_controler1.ggVisible=true;
		this._gallery_controler1.className='ggskin ggskin_container ';
		this._gallery_controler1.ggType='container';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -68px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 118px;';
		hs+='pointer-events:none;';
		this._gallery_controler1.setAttribute('style',hs);
		this._gallery_controler1.style[domTransform + 'Origin']='50% 50%';
		me._gallery_controler1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_controler1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_controler1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._gallery_timer1=document.createElement('div');
		this._gallery_timer1.ggTimestamp=this.ggCurrentTime;
		this._gallery_timer1.ggLastIsActive=true;
		this._gallery_timer1.ggTimeout=0;
		this._gallery_timer1.ggId="gallery_timer";
		this._gallery_timer1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_timer1.ggVisible=true;
		this._gallery_timer1.className='ggskin ggskin_timer ';
		this._gallery_timer1.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_timer1.setAttribute('style',hs);
		this._gallery_timer1.style[domTransform + 'Origin']='50% 50%';
		me._gallery_timer1.ggIsActive=function() {
			return (me._gallery_timer1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._gallery_timer1.ggTimestamp) / me._gallery_timer1.ggTimeout) % 2 == 0));
		}
		me._gallery_timer1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_timer1.ggActivate=function () {
			me._gallery_forward8.onclick();
		}
		this._gallery_timer1.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler1.appendChild(this._gallery_timer1);
		this._gallery_fx1=document.createElement('div');
		this._gallery_fx1.ggTimestamp=this.ggCurrentTime;
		this._gallery_fx1.ggLastIsActive=true;
		this._gallery_fx1.ggTimeout=1000;
		this._gallery_fx1.ggId="gallery_fx";
		this._gallery_fx1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_fx1.ggVisible=true;
		this._gallery_fx1.className='ggskin ggskin_timer ';
		this._gallery_fx1.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_fx1.setAttribute('style',hs);
		this._gallery_fx1.style[domTransform + 'Origin']='50% 50%';
		me._gallery_fx1.ggIsActive=function() {
			return (me._gallery_fx1.ggTimestamp + me._gallery_fx1.ggTimeout) >= me.ggCurrentTime;
		}
		me._gallery_fx1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_fx1.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler1.appendChild(this._gallery_fx1);
		this._gallery_picture_preload1=document.createElement('div');
		this._gallery_picture_preload1__img=document.createElement('img');
		this._gallery_picture_preload1__img.className='ggskin ggskin_external';
		this._gallery_picture_preload1__img.onload=function() {me._gallery_picture_preload1.ggUpdatePosition();}
		this._gallery_picture_preload1__img.setAttribute('src',basePath + '');
		this._gallery_picture_preload1__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture_preload1.appendChild(this._gallery_picture_preload1__img);
		this._gallery_picture_preload1.ggId="gallery_picture_preload";
		this._gallery_picture_preload1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture_preload1.ggVisible=false;
		this._gallery_picture_preload1.className='ggskin ggskin_external ';
		this._gallery_picture_preload1.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 31px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		this._gallery_picture_preload1.setAttribute('style',hs);
		this._gallery_picture_preload1.style[domTransform + 'Origin']='0% 0%';
		me._gallery_picture_preload1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_picture_preload1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_picture_preload1.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture_preload1.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture_preload1.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture_preload1.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture_preload1.style[domTransition]='';
				if (me._gallery_picture_preload1.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture_preload1.ggText="gallery/03-01.jpg";
					me._gallery_picture_preload1__img.src=me._gallery_picture_preload1.ggText;
				}
				else {
					me._gallery_picture_preload1.ggText="";
					me._gallery_picture_preload1__img.src=me._gallery_picture_preload1.ggText;
				}
			}
		}
		this._gallery_picture_preload1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture_preload1.clientWidth;
			var parentHeight = me._gallery_picture_preload1.clientHeight;
			var aspectRatioDiv = me._gallery_picture_preload1.clientWidth / me._gallery_picture_preload1.clientHeight;
			var aspectRatioImg = me._gallery_picture_preload1__img.naturalWidth / me._gallery_picture_preload1__img.naturalHeight;
			if (me._gallery_picture_preload1__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture_preload1__img.naturalWidth;
			if (me._gallery_picture_preload1__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture_preload1__img.naturalHeight;
			var currentWidth = me._gallery_picture_preload1__img.naturalWidth;
			var currentHeight = me._gallery_picture_preload1__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture_preload1__img.setAttribute('style','position: absolute; left: 0px; top: 0px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture_preload1__img.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			};
		}
		this._gallery_controler1.appendChild(this._gallery_picture_preload1);
		this._gallery_close1=document.createElement('div');
		this._gallery_close1__img=document.createElement('img');
		this._gallery_close1__img.className='ggskin ggskin_image';
		this._gallery_close1__img.setAttribute('src',basePath + 'images/gallery_close1.png');
		this._gallery_close1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_close1__img.className='ggskin ggskin_image';
		this._gallery_close1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_close1__img);
		this._gallery_close1.appendChild(this._gallery_close1__img);
		this._gallery_close1.ggId="gallery_close";
		this._gallery_close1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_close1.ggVisible=true;
		this._gallery_close1.className='ggskin ggskin_image ';
		this._gallery_close1.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 34px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_close1.setAttribute('style',hs);
		this._gallery_close1.style[domTransform + 'Origin']='50% 50%';
		me._gallery_close1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_close1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_close1.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer1.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer1.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause8.style[domTransition]='none';
			me._gallery_pause8.style.visibility='hidden';
			me._gallery_pause8.ggVisible=false;
			me._gallery_play8.style[domTransition]='none';
			me._gallery_play8.style.visibility=(Number(me._gallery_play8.style.opacity)>0||!me._gallery_play8.style.opacity)?'inherit':'hidden';
			me._gallery_play8.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture03.style[domTransition]='none';
			me._gallery_picture03.style.visibility='hidden';
			me._gallery_picture03.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._gallery_close1.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler1.appendChild(this._gallery_close1);
		this._text_11=document.createElement('div');
		this._text_11__text=document.createElement('div');
		this._text_11.className='ggskin ggskin_textdiv';
		this._text_11.ggTextDiv=this._text_11__text;
		this._text_11.ggId="Text 1";
		this._text_11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_11.ggVisible=true;
		this._text_11.className='ggskin ggskin_text ';
		this._text_11.ggType='text';
		hs ='';
		hs+='height : 111px;';
		hs+='left : -130px;';
		hs+='position : absolute;';
		hs+='top : -124px;';
		hs+='visibility : inherit;';
		hs+='width : 403px;';
		hs+='pointer-events:auto;';
		this._text_11.setAttribute('style',hs);
		this._text_11.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 403px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.27451);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.00392157);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 10px 11px 10px 11px;';
		hs+='overflow: hidden;';
		this._text_11__text.setAttribute('style',hs);
		this._text_11__text.innerHTML="\u041f\u041e\u0414\u042a\u0415\u0417\u0414\u041d\u0410\u042f \u0414\u041e\u0420\u041e\u0413\u0410 \u041a \u0412\u0410\u0425\u0422\u041e\u0412\u041e\u041c\u0423 \u041f\u041e\u0421\u0415\u041b\u041a\u0423, 2015\u0433.<br\/><br\/>\u0423\u043a\u043b\u0430\u0434\u043a\u0430 \u0430\u0441\u0444\u0430\u043b\u044c\u0442\u043e\u0431\u0435\u0442\u043e\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u044f 1200 \u043c2<br\/>\u041c\u043e\u043d\u0442\u0430\u0436 \u0431\u043e\u0440\u0434\u044e\u0440\u043d\u043e\u0433\u043e \u043a\u0430\u043c\u043d\u044f 165 \u043c.\u043f.<br\/>\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u0437 \u041f\u0413\u0421 \u2013 500 \u043c3<br\/>\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u0437 \u0449\u0435\u0431\u043d\u044f \u2013 250 \u043c3";
		this._text_11.appendChild(this._text_11__text);
		me._text_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_11.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._text_11.ggCurrentLogicStateVisible = -1;
		this._text_11.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width < 100) || 
				(ggSkinVars['gallery_pictures_1'] != 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_11.style[domTransition]='';
				if (me._text_11.ggCurrentLogicStateVisible == 0) {
					me._text_11.style.visibility="hidden";
					me._text_11.ggVisible=false;
				}
				else {
					me._text_11.style.visibility=(Number(me._text_11.style.opacity)>0||!me._text_11.style.opacity)?'inherit':'hidden';
					me._text_11.ggVisible=true;
				}
			}
		}
		this._text_11.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler1.appendChild(this._text_11);
		this._gallery_picture03.appendChild(this._gallery_controler1);
		this.divSkin.appendChild(this._gallery_picture03);
		this._gallery_picture02=document.createElement('div');
		this._gallery_picture02__img=document.createElement('img');
		this._gallery_picture02__img.className='ggskin ggskin_external';
		this._gallery_picture02__img.onload=function() {me._gallery_picture02.ggUpdatePosition();}
		this._gallery_picture02__img.setAttribute('src',basePath + '');
		this._gallery_picture02__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture02.appendChild(this._gallery_picture02__img);
		this._gallery_picture02.ggId="gallery_picture02";
		this._gallery_picture02.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture02.ggVisible=false;
		this._gallery_picture02.className='ggskin ggskin_external ';
		this._gallery_picture02.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 8%;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		this._gallery_picture02.setAttribute('style',hs);
		this._gallery_picture02.style[domTransform + 'Origin']='50% 50%';
		me._gallery_picture02.ggIsActive=function() {
			return false;
		}
		me._gallery_picture02.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._gallery_picture02.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture02.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture02.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture02.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture02.style[domTransition]='';
				if (me._gallery_picture02.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture02.ggText="gallery/02-01.jpg";
					me._gallery_picture02__img.src=me._gallery_picture02.ggText;
				}
				else {
					me._gallery_picture02.ggText="";
					me._gallery_picture02__img.src=me._gallery_picture02.ggText;
				}
			}
		}
		this._gallery_picture02.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture02.clientWidth;
			var parentHeight = me._gallery_picture02.clientHeight;
			var aspectRatioDiv = me._gallery_picture02.clientWidth / me._gallery_picture02.clientHeight;
			var aspectRatioImg = me._gallery_picture02__img.naturalWidth / me._gallery_picture02__img.naturalHeight;
			if (me._gallery_picture02__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture02__img.naturalWidth;
			if (me._gallery_picture02__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture02__img.naturalHeight;
			var currentWidth = me._gallery_picture02__img.naturalWidth;
			var currentHeight = me._gallery_picture02__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture02__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture02__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			};
		}
		this._screen_tintclose0=document.createElement('div');
		this._screen_tintclose0.ggId="screen_tint-close";
		this._screen_tintclose0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen_tintclose0.ggVisible=true;
		this._screen_tintclose0.className='ggskin ggskin_rectangle ';
		this._screen_tintclose0.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 89.7917%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screen_tintclose0.setAttribute('style',hs);
		this._screen_tintclose0.style[domTransform + 'Origin']='50% 50%';
		me._screen_tintclose0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._screen_tintclose0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._screen_tintclose0.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer0.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer0.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause8.style[domTransition]='none';
			me._gallery_pause8.style.visibility='hidden';
			me._gallery_pause8.ggVisible=false;
			me._gallery_play8.style[domTransition]='none';
			me._gallery_play8.style.visibility=(Number(me._gallery_play8.style.opacity)>0||!me._gallery_play8.style.opacity)?'inherit':'hidden';
			me._gallery_play8.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture02.style[domTransition]='none';
			me._gallery_picture02.style.visibility='hidden';
			me._gallery_picture02.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._screen_tintclose0.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_picture02.appendChild(this._screen_tintclose0);
		this._gallery_controler0=document.createElement('div');
		this._gallery_controler0.ggId="gallery_controler";
		this._gallery_controler0.ggLeft=-68;
		this._gallery_controler0.ggTop=-39;
		this._gallery_controler0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_controler0.ggVisible=true;
		this._gallery_controler0.className='ggskin ggskin_container ';
		this._gallery_controler0.ggType='container';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -68px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 118px;';
		hs+='pointer-events:none;';
		this._gallery_controler0.setAttribute('style',hs);
		this._gallery_controler0.style[domTransform + 'Origin']='50% 50%';
		me._gallery_controler0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_controler0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_controler0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._gallery_timer0=document.createElement('div');
		this._gallery_timer0.ggTimestamp=this.ggCurrentTime;
		this._gallery_timer0.ggLastIsActive=true;
		this._gallery_timer0.ggTimeout=0;
		this._gallery_timer0.ggId="gallery_timer";
		this._gallery_timer0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_timer0.ggVisible=true;
		this._gallery_timer0.className='ggskin ggskin_timer ';
		this._gallery_timer0.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_timer0.setAttribute('style',hs);
		this._gallery_timer0.style[domTransform + 'Origin']='50% 50%';
		me._gallery_timer0.ggIsActive=function() {
			return (me._gallery_timer0.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._gallery_timer0.ggTimestamp) / me._gallery_timer0.ggTimeout) % 2 == 0));
		}
		me._gallery_timer0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_timer0.ggActivate=function () {
			me._gallery_forward8.onclick();
		}
		this._gallery_timer0.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler0.appendChild(this._gallery_timer0);
		this._gallery_fx0=document.createElement('div');
		this._gallery_fx0.ggTimestamp=this.ggCurrentTime;
		this._gallery_fx0.ggLastIsActive=true;
		this._gallery_fx0.ggTimeout=1000;
		this._gallery_fx0.ggId="gallery_fx";
		this._gallery_fx0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_fx0.ggVisible=true;
		this._gallery_fx0.className='ggskin ggskin_timer ';
		this._gallery_fx0.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_fx0.setAttribute('style',hs);
		this._gallery_fx0.style[domTransform + 'Origin']='50% 50%';
		me._gallery_fx0.ggIsActive=function() {
			return (me._gallery_fx0.ggTimestamp + me._gallery_fx0.ggTimeout) >= me.ggCurrentTime;
		}
		me._gallery_fx0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_fx0.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler0.appendChild(this._gallery_fx0);
		this._gallery_picture_preload0=document.createElement('div');
		this._gallery_picture_preload0__img=document.createElement('img');
		this._gallery_picture_preload0__img.className='ggskin ggskin_external';
		this._gallery_picture_preload0__img.onload=function() {me._gallery_picture_preload0.ggUpdatePosition();}
		this._gallery_picture_preload0__img.setAttribute('src',basePath + '');
		this._gallery_picture_preload0__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture_preload0.appendChild(this._gallery_picture_preload0__img);
		this._gallery_picture_preload0.ggId="gallery_picture_preload";
		this._gallery_picture_preload0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture_preload0.ggVisible=false;
		this._gallery_picture_preload0.className='ggskin ggskin_external ';
		this._gallery_picture_preload0.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 31px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		this._gallery_picture_preload0.setAttribute('style',hs);
		this._gallery_picture_preload0.style[domTransform + 'Origin']='0% 0%';
		me._gallery_picture_preload0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_picture_preload0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_picture_preload0.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture_preload0.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture_preload0.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture_preload0.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture_preload0.style[domTransition]='';
				if (me._gallery_picture_preload0.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture_preload0.ggText="gallery/02-01.jpg";
					me._gallery_picture_preload0__img.src=me._gallery_picture_preload0.ggText;
				}
				else {
					me._gallery_picture_preload0.ggText="";
					me._gallery_picture_preload0__img.src=me._gallery_picture_preload0.ggText;
				}
			}
		}
		this._gallery_picture_preload0.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture_preload0.clientWidth;
			var parentHeight = me._gallery_picture_preload0.clientHeight;
			var aspectRatioDiv = me._gallery_picture_preload0.clientWidth / me._gallery_picture_preload0.clientHeight;
			var aspectRatioImg = me._gallery_picture_preload0__img.naturalWidth / me._gallery_picture_preload0__img.naturalHeight;
			if (me._gallery_picture_preload0__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture_preload0__img.naturalWidth;
			if (me._gallery_picture_preload0__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture_preload0__img.naturalHeight;
			var currentWidth = me._gallery_picture_preload0__img.naturalWidth;
			var currentHeight = me._gallery_picture_preload0__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture_preload0__img.setAttribute('style','position: absolute; left: 0px; top: 0px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture_preload0__img.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			};
		}
		this._gallery_controler0.appendChild(this._gallery_picture_preload0);
		this._gallery_close0=document.createElement('div');
		this._gallery_close0__img=document.createElement('img');
		this._gallery_close0__img.className='ggskin ggskin_image';
		this._gallery_close0__img.setAttribute('src',basePath + 'images/gallery_close0.png');
		this._gallery_close0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_close0__img.className='ggskin ggskin_image';
		this._gallery_close0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_close0__img);
		this._gallery_close0.appendChild(this._gallery_close0__img);
		this._gallery_close0.ggId="gallery_close";
		this._gallery_close0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_close0.ggVisible=true;
		this._gallery_close0.className='ggskin ggskin_image ';
		this._gallery_close0.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 44px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_close0.setAttribute('style',hs);
		this._gallery_close0.style[domTransform + 'Origin']='50% 50%';
		me._gallery_close0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_close0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_close0.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer0.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer0.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause8.style[domTransition]='none';
			me._gallery_pause8.style.visibility='hidden';
			me._gallery_pause8.ggVisible=false;
			me._gallery_play8.style[domTransition]='none';
			me._gallery_play8.style.visibility=(Number(me._gallery_play8.style.opacity)>0||!me._gallery_play8.style.opacity)?'inherit':'hidden';
			me._gallery_play8.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture02.style[domTransition]='none';
			me._gallery_picture02.style.visibility='hidden';
			me._gallery_picture02.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._gallery_close0.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler0.appendChild(this._gallery_close0);
		this._text_10=document.createElement('div');
		this._text_10__text=document.createElement('div');
		this._text_10.className='ggskin ggskin_textdiv';
		this._text_10.ggTextDiv=this._text_10__text;
		this._text_10.ggId="Text 1";
		this._text_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_10.ggVisible=true;
		this._text_10.className='ggskin ggskin_text ';
		this._text_10.ggType='text';
		hs ='';
		hs+='height : 130px;';
		hs+='left : -146px;';
		hs+='position : absolute;';
		hs+='top : -134px;';
		hs+='visibility : inherit;';
		hs+='width : 449px;';
		hs+='pointer-events:auto;';
		this._text_10.setAttribute('style',hs);
		this._text_10.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 449px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.27451);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 10px 11px 10px 11px;';
		hs+='overflow: hidden;';
		this._text_10__text.setAttribute('style',hs);
		this._text_10__text.innerHTML="\u0421\u041f\u041e\u0420\u0422\u0418\u0412\u041d\u042b\u0419 \u041a\u041e\u041c\u041f\u041b\u0415\u041a\u0421, 2014\u0433.<br\/><br\/>\u0412\u044b\u0435\u043c\u043a\u0430 \u043d\u0435\u043f\u0440\u0438\u0433\u043e\u0434\u043d\u043e\u0433\u043e \u0433\u0440\u0443\u043d\u0442\u0430 \u2013 500 \u043c3<br\/>\u041e\u0442\u0441\u044b\u043f\u043a\u0430 \u041f\u0413\u0421 \u0441 \u0443\u043f\u043b\u043e\u0442\u043d\u0435\u043d\u0438\u0435\u043c \u2013 1300 \u043c3<br\/>\u0423\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u0435 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0438 \u0433\u0435\u043e\u0442\u0435\u043a\u0441\u0442\u0438\u043b\u0435\u043c - 2900 \u043c2<br\/>\u0423\u043a\u043b\u0430\u0434\u043a\u0430 \u043f\u043b\u0438\u0442 \u041f\u0410\u041318 \u2013 2900 \u043c2";
		this._text_10.appendChild(this._text_10__text);
		me._text_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_10.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._text_10.ggCurrentLogicStateVisible = -1;
		this._text_10.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width < 100)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_10.style[domTransition]='';
				if (me._text_10.ggCurrentLogicStateVisible == 0) {
					me._text_10.style.visibility="hidden";
					me._text_10.ggVisible=false;
				}
				else {
					me._text_10.style.visibility=(Number(me._text_10.style.opacity)>0||!me._text_10.style.opacity)?'inherit':'hidden';
					me._text_10.ggVisible=true;
				}
			}
		}
		this._text_10.ggUpdatePosition=function (useTransition) {
			me._text_10.ggUpdateConditionResize();
		}
		this._gallery_controler0.appendChild(this._text_10);
		this._gallery_picture02.appendChild(this._gallery_controler0);
		this.divSkin.appendChild(this._gallery_picture02);
		this._gallery_picture01=document.createElement('div');
		this._gallery_picture01__img=document.createElement('img');
		this._gallery_picture01__img.className='ggskin ggskin_external';
		this._gallery_picture01__img.onload=function() {me._gallery_picture01.ggUpdatePosition();}
		this._gallery_picture01__img.setAttribute('src',basePath + '');
		this._gallery_picture01__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture01.appendChild(this._gallery_picture01__img);
		this._gallery_picture01.ggId="gallery_picture01";
		this._gallery_picture01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture01.ggVisible=false;
		this._gallery_picture01.className='ggskin ggskin_external ';
		this._gallery_picture01.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80%;';
		hs+='left : 8%;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		this._gallery_picture01.setAttribute('style',hs);
		this._gallery_picture01.style[domTransform + 'Origin']='50% 50%';
		me._gallery_picture01.ggIsActive=function() {
			return false;
		}
		me._gallery_picture01.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._gallery_picture01.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture01.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateExternalUrl = 5;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 6)
			)
			{
				newLogicStateExternalUrl = 6;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 7)
			)
			{
				newLogicStateExternalUrl = 7;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 8)
			)
			{
				newLogicStateExternalUrl = 8;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 9)
			)
			{
				newLogicStateExternalUrl = 9;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 10)
			)
			{
				newLogicStateExternalUrl = 10;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 11)
			)
			{
				newLogicStateExternalUrl = 11;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 12)
			)
			{
				newLogicStateExternalUrl = 12;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 13)
			)
			{
				newLogicStateExternalUrl = 13;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 14)
			)
			{
				newLogicStateExternalUrl = 14;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture01.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture01.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture01.style[domTransition]='';
				if (me._gallery_picture01.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture01.ggText="gallery/01-01.jpg";
					me._gallery_picture01__img.src=me._gallery_picture01.ggText;
				}
				else if (me._gallery_picture01.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture01.ggText="gallery/01-02.jpg";
					me._gallery_picture01__img.src=me._gallery_picture01.ggText;
				}
				else if (me._gallery_picture01.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture01.ggText="gallery/01-03.jpg";
					me._gallery_picture01__img.src=me._gallery_picture01.ggText;
				}
				else if (me._gallery_picture01.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture01.ggText="gallery/01-04.jpg";
					me._gallery_picture01__img.src=me._gallery_picture01.ggText;
				}
				else if (me._gallery_picture01.ggCurrentLogicStateExternalUrl == 4) {
					me._gallery_picture01.ggText="gallery/01-05.jpg";
					me._gallery_picture01__img.src=me._gallery_picture01.ggText;
				}
				else if (me._gallery_picture01.ggCurrentLogicStateExternalUrl == 5) {
					me._gallery_picture01.ggText="gallery/img_05.jpg";
					me._gallery_picture01__img.src=me._gallery_picture01.ggText;
				}
				else if (me._gallery_picture01.ggCurrentLogicStateExternalUrl == 6) {
					me._gallery_picture01.ggText="gallery/img_06.jpg";
					me._gallery_picture01__img.src=me._gallery_picture01.ggText;
				}
				else if (me._gallery_picture01.ggCurrentLogicStateExternalUrl == 7) {
					me._gallery_picture01.ggText="gallery/img_07.jpg";
					me._gallery_picture01__img.src=me._gallery_picture01.ggText;
				}
				else if (me._gallery_picture01.ggCurrentLogicStateExternalUrl == 8) {
					me._gallery_picture01.ggText="gallery/img_08.jpg";
					me._gallery_picture01__img.src=me._gallery_picture01.ggText;
				}
				else if (me._gallery_picture01.ggCurrentLogicStateExternalUrl == 9) {
					me._gallery_picture01.ggText="gallery/img_09.jpg";
					me._gallery_picture01__img.src=me._gallery_picture01.ggText;
				}
				else if (me._gallery_picture01.ggCurrentLogicStateExternalUrl == 10) {
					me._gallery_picture01.ggText="gallery/img_10.jpg";
					me._gallery_picture01__img.src=me._gallery_picture01.ggText;
				}
				else if (me._gallery_picture01.ggCurrentLogicStateExternalUrl == 11) {
					me._gallery_picture01.ggText="gallery/img_11.jpg";
					me._gallery_picture01__img.src=me._gallery_picture01.ggText;
				}
				else if (me._gallery_picture01.ggCurrentLogicStateExternalUrl == 12) {
					me._gallery_picture01.ggText="gallery/img_12.jpg";
					me._gallery_picture01__img.src=me._gallery_picture01.ggText;
				}
				else if (me._gallery_picture01.ggCurrentLogicStateExternalUrl == 13) {
					me._gallery_picture01.ggText="gallery/img_13.jpg";
					me._gallery_picture01__img.src=me._gallery_picture01.ggText;
				}
				else if (me._gallery_picture01.ggCurrentLogicStateExternalUrl == 14) {
					me._gallery_picture01.ggText="gallery/img_14.jpg";
					me._gallery_picture01__img.src=me._gallery_picture01.ggText;
				}
				else {
					me._gallery_picture01.ggText="";
					me._gallery_picture01__img.src=me._gallery_picture01.ggText;
				}
			}
		}
		this._gallery_picture01.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture01.clientWidth;
			var parentHeight = me._gallery_picture01.clientHeight;
			var aspectRatioDiv = me._gallery_picture01.clientWidth / me._gallery_picture01.clientHeight;
			var aspectRatioImg = me._gallery_picture01__img.naturalWidth / me._gallery_picture01__img.naturalHeight;
			if (me._gallery_picture01__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture01__img.naturalWidth;
			if (me._gallery_picture01__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture01__img.naturalHeight;
			var currentWidth = me._gallery_picture01__img.naturalWidth;
			var currentHeight = me._gallery_picture01__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture01__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture01__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			};
		}
		this._screen_tintclose=document.createElement('div');
		this._screen_tintclose.ggId="screen_tint-close";
		this._screen_tintclose.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen_tintclose.ggVisible=true;
		this._screen_tintclose.className='ggskin ggskin_rectangle ';
		this._screen_tintclose.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 89.7917%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screen_tintclose.setAttribute('style',hs);
		this._screen_tintclose.style[domTransform + 'Origin']='50% 50%';
		me._screen_tintclose.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._screen_tintclose.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._screen_tintclose.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause.style[domTransition]='none';
			me._gallery_pause.style.visibility='hidden';
			me._gallery_pause.ggVisible=false;
			me._gallery_play.style[domTransition]='none';
			me._gallery_play.style.visibility=(Number(me._gallery_play.style.opacity)>0||!me._gallery_play.style.opacity)?'inherit':'hidden';
			me._gallery_play.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture01.style[domTransition]='none';
			me._gallery_picture01.style.visibility='hidden';
			me._gallery_picture01.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._screen_tintclose.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_picture01.appendChild(this._screen_tintclose);
		this._gallery_controler=document.createElement('div');
		this._gallery_controler.ggId="gallery_controler";
		this._gallery_controler.ggLeft=-68;
		this._gallery_controler.ggTop=-39;
		this._gallery_controler.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_controler.ggVisible=true;
		this._gallery_controler.className='ggskin ggskin_container ';
		this._gallery_controler.ggType='container';
		hs ='';
		hs+='height : 33px;';
		hs+='left : -68px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 118px;';
		hs+='pointer-events:none;';
		this._gallery_controler.setAttribute('style',hs);
		this._gallery_controler.style[domTransform + 'Origin']='50% 50%';
		me._gallery_controler.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_controler.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_controler.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._gallery_timer=document.createElement('div');
		this._gallery_timer.ggTimestamp=this.ggCurrentTime;
		this._gallery_timer.ggLastIsActive=true;
		this._gallery_timer.ggTimeout=0;
		this._gallery_timer.ggId="gallery_timer";
		this._gallery_timer.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_timer.ggVisible=true;
		this._gallery_timer.className='ggskin ggskin_timer ';
		this._gallery_timer.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_timer.setAttribute('style',hs);
		this._gallery_timer.style[domTransform + 'Origin']='50% 50%';
		me._gallery_timer.ggIsActive=function() {
			return (me._gallery_timer.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._gallery_timer.ggTimestamp) / me._gallery_timer.ggTimeout) % 2 == 0));
		}
		me._gallery_timer.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_timer.ggActivate=function () {
			me._gallery_forward.onclick();
		}
		this._gallery_timer.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler.appendChild(this._gallery_timer);
		this._gallery_fx=document.createElement('div');
		this._gallery_fx.ggTimestamp=this.ggCurrentTime;
		this._gallery_fx.ggLastIsActive=true;
		this._gallery_fx.ggTimeout=1000;
		this._gallery_fx.ggId="gallery_fx";
		this._gallery_fx.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_fx.ggVisible=true;
		this._gallery_fx.className='ggskin ggskin_timer ';
		this._gallery_fx.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._gallery_fx.setAttribute('style',hs);
		this._gallery_fx.style[domTransform + 'Origin']='50% 50%';
		me._gallery_fx.ggIsActive=function() {
			return (me._gallery_fx.ggTimestamp + me._gallery_fx.ggTimeout) >= me.ggCurrentTime;
		}
		me._gallery_fx.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_fx.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler.appendChild(this._gallery_fx);
		this._gallery_picture_preload=document.createElement('div');
		this._gallery_picture_preload__img=document.createElement('img');
		this._gallery_picture_preload__img.className='ggskin ggskin_external';
		this._gallery_picture_preload__img.onload=function() {me._gallery_picture_preload.ggUpdatePosition();}
		this._gallery_picture_preload__img.setAttribute('src',basePath + '');
		this._gallery_picture_preload__img['ondragstart']=function() { return false; };
		hs ='';
		this._gallery_picture_preload.appendChild(this._gallery_picture_preload__img);
		this._gallery_picture_preload.ggId="gallery_picture_preload";
		this._gallery_picture_preload.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_picture_preload.ggVisible=false;
		this._gallery_picture_preload.className='ggskin ggskin_external ';
		this._gallery_picture_preload.ggType='external';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 31px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		this._gallery_picture_preload.setAttribute('style',hs);
		this._gallery_picture_preload.style[domTransform + 'Origin']='0% 0%';
		me._gallery_picture_preload.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_picture_preload.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_picture_preload.ggCurrentLogicStateExternalUrl = -1;
		this._gallery_picture_preload.ggUpdateConditionTimer=function () {
			var newLogicStateExternalUrl;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateExternalUrl = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateExternalUrl = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateExternalUrl = 5;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 6)
			)
			{
				newLogicStateExternalUrl = 6;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 7)
			)
			{
				newLogicStateExternalUrl = 7;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 8)
			)
			{
				newLogicStateExternalUrl = 8;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 9)
			)
			{
				newLogicStateExternalUrl = 9;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 10)
			)
			{
				newLogicStateExternalUrl = 10;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 11)
			)
			{
				newLogicStateExternalUrl = 11;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 12)
			)
			{
				newLogicStateExternalUrl = 12;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 13)
			)
			{
				newLogicStateExternalUrl = 13;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._gallery_picture_preload.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._gallery_picture_preload.style[domTransition]='';
				if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 0) {
					me._gallery_picture_preload.ggText="gallery/01-01.jpg";
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 1) {
					me._gallery_picture_preload.ggText="gallery/01-02.jpg";
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 2) {
					me._gallery_picture_preload.ggText="gallery/01-03.jpg";
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 3) {
					me._gallery_picture_preload.ggText="gallery/01-04.jpg";
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 4) {
					me._gallery_picture_preload.ggText="gallery/01-05.jpg";
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 5) {
					me._gallery_picture_preload.ggText="gallery/img_06.jpg";
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 6) {
					me._gallery_picture_preload.ggText="gallery/img_07.jpg";
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 7) {
					me._gallery_picture_preload.ggText="gallery/img_08.jpg";
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 8) {
					me._gallery_picture_preload.ggText="gallery/img_09.jpg";
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 9) {
					me._gallery_picture_preload.ggText="gallery/img_10.jpg";
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 10) {
					me._gallery_picture_preload.ggText="gallery/img_11.jpg";
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 11) {
					me._gallery_picture_preload.ggText="gallery/img_12.jpg";
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 12) {
					me._gallery_picture_preload.ggText="gallery/img_13.jpg";
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else if (me._gallery_picture_preload.ggCurrentLogicStateExternalUrl == 13) {
					me._gallery_picture_preload.ggText="gallery/img_14.jpg";
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
				else {
					me._gallery_picture_preload.ggText="";
					me._gallery_picture_preload__img.src=me._gallery_picture_preload.ggText;
				}
			}
		}
		this._gallery_picture_preload.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._gallery_picture_preload.clientWidth;
			var parentHeight = me._gallery_picture_preload.clientHeight;
			var aspectRatioDiv = me._gallery_picture_preload.clientWidth / me._gallery_picture_preload.clientHeight;
			var aspectRatioImg = me._gallery_picture_preload__img.naturalWidth / me._gallery_picture_preload__img.naturalHeight;
			if (me._gallery_picture_preload__img.naturalWidth < parentWidth) parentWidth = me._gallery_picture_preload__img.naturalWidth;
			if (me._gallery_picture_preload__img.naturalHeight < parentHeight) parentHeight = me._gallery_picture_preload__img.naturalHeight;
			var currentWidth = me._gallery_picture_preload__img.naturalWidth;
			var currentHeight = me._gallery_picture_preload__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._gallery_picture_preload__img.setAttribute('style','position: absolute; left: 0px; top: 0px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._gallery_picture_preload__img.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:-1px;');
			};
		}
		this._gallery_controler.appendChild(this._gallery_picture_preload);
		this._gallery_back=document.createElement('div');
		this._gallery_back__img=document.createElement('img');
		this._gallery_back__img.className='ggskin ggskin_button';
		this._gallery_back__img.setAttribute('src',basePath + 'images/gallery_back.png');
		this._gallery_back__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_back__img.className='ggskin ggskin_button';
		this._gallery_back__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_back__img);
		this._gallery_back.appendChild(this._gallery_back__img);
		this._gallery_back.ggId="gallery_back";
		this._gallery_back.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_back.ggVisible=true;
		this._gallery_back.className='ggskin ggskin_button ';
		this._gallery_back.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_back.setAttribute('style',hs);
		this._gallery_back.style[domTransform + 'Origin']='50% 50%';
		me._gallery_back.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_back.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_back.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("4");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("5");
			me._gallery_fx.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_back.onmouseover=function (e) {
			me._gallery_back__img.src=basePath + 'images/gallery_back__o.png';
		}
		this._gallery_back.onmouseout=function (e) {
			me._gallery_back__img.src=basePath + 'images/gallery_back.png';
		}
		this._gallery_back.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler.appendChild(this._gallery_back);
		this._gallery_close=document.createElement('div');
		this._gallery_close__img=document.createElement('img');
		this._gallery_close__img.className='ggskin ggskin_image';
		this._gallery_close__img.setAttribute('src',basePath + 'images/gallery_close.png');
		this._gallery_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_close__img.className='ggskin ggskin_image';
		this._gallery_close__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_close__img);
		this._gallery_close.appendChild(this._gallery_close__img);
		this._gallery_close.ggId="gallery_close";
		this._gallery_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_close.ggVisible=true;
		this._gallery_close.className='ggskin ggskin_image ';
		this._gallery_close.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 134px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_close.setAttribute('style',hs);
		this._gallery_close.style[domTransform + 'Origin']='50% 50%';
		me._gallery_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_close.onclick=function (e) {
			ggSkinVars['gallery_show_hide_1'] = false;
			ggSkinVars['gallery_pictures_1'] = Number("0");
			me._gallery_timer.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause.style[domTransition]='none';
			me._gallery_pause.style.visibility='hidden';
			me._gallery_pause.ggVisible=false;
			me._gallery_play.style[domTransition]='none';
			me._gallery_play.style.visibility=(Number(me._gallery_play.style.opacity)>0||!me._gallery_play.style.opacity)?'inherit':'hidden';
			me._gallery_play.ggVisible=true;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.visibility='hidden';
			me._screen_tint.ggVisible=false;
			me._gallery_picture01.style[domTransition]='none';
			me._gallery_picture01.style.visibility='hidden';
			me._gallery_picture01.ggVisible=false;
			me.player.startAutorotate("0.01");
			me._screen_tint2.style[domTransition]='none';
			me._screen_tint2.style.visibility='hidden';
			me._screen_tint2.ggVisible=false;
		}
		this._gallery_close.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler.appendChild(this._gallery_close);
		this._gallery_counter_total=document.createElement('div');
		this._gallery_counter_total__text=document.createElement('div');
		this._gallery_counter_total.className='ggskin ggskin_textdiv';
		this._gallery_counter_total.ggTextDiv=this._gallery_counter_total__text;
		this._gallery_counter_total.ggId="gallery_counter_total";
		this._gallery_counter_total.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter_total.ggVisible=true;
		this._gallery_counter_total.className='ggskin ggskin_text ';
		this._gallery_counter_total.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -67px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 51px;';
		hs+='pointer-events:auto;';
		this._gallery_counter_total.setAttribute('style',hs);
		this._gallery_counter_total.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 51px;';
		hs+='height: 18px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.588235);';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter_total__text.setAttribute('style',hs);
		this._gallery_counter_total__text.innerHTML="\/ 5";
		this._gallery_counter_total.appendChild(this._gallery_counter_total__text);
		me._gallery_counter_total.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter_total.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_counter_total.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler.appendChild(this._gallery_counter_total);
		this._gallery_counter=document.createElement('div');
		this._gallery_counter__text=document.createElement('div');
		this._gallery_counter.className='ggskin ggskin_textdiv';
		this._gallery_counter.ggTextDiv=this._gallery_counter__text;
		this._gallery_counter.ggId="gallery_counter";
		this._gallery_counter.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_counter.ggVisible=true;
		this._gallery_counter.className='ggskin ggskin_text ';
		this._gallery_counter.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -54px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		this._gallery_counter.setAttribute('style',hs);
		this._gallery_counter.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._gallery_counter__text.setAttribute('style',hs);
		this._gallery_counter__text.innerHTML="1";
		this._gallery_counter.appendChild(this._gallery_counter__text);
		me._gallery_counter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_counter.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._gallery_counter.ggCurrentLogicStateText = -1;
		this._gallery_counter.ggUpdateConditionTimer=function () {
			var newLogicStateText;
			if (
				(ggSkinVars['gallery_pictures_1'] == 0)
			)
			{
				newLogicStateText = 0;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 1)
			)
			{
				newLogicStateText = 1;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 2)
			)
			{
				newLogicStateText = 2;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 3)
			)
			{
				newLogicStateText = 3;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 4)
			)
			{
				newLogicStateText = 4;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 5)
			)
			{
				newLogicStateText = 5;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 6)
			)
			{
				newLogicStateText = 6;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 7)
			)
			{
				newLogicStateText = 7;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 8)
			)
			{
				newLogicStateText = 8;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 9)
			)
			{
				newLogicStateText = 9;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 10)
			)
			{
				newLogicStateText = 10;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 11)
			)
			{
				newLogicStateText = 11;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 12)
			)
			{
				newLogicStateText = 12;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 13)
			)
			{
				newLogicStateText = 13;
			}
			else if (
				(ggSkinVars['gallery_pictures_1'] == 14)
			)
			{
				newLogicStateText = 14;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._gallery_counter.ggCurrentLogicStateText != newLogicStateText) {
				me._gallery_counter.ggCurrentLogicStateText = newLogicStateText;
				me._gallery_counter.style[domTransition]='';
				if (me._gallery_counter.ggCurrentLogicStateText == 0) {
					me._gallery_counter.ggText="1";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 1) {
					me._gallery_counter.ggText="2";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="2";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 2) {
					me._gallery_counter.ggText="3";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="3";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 3) {
					me._gallery_counter.ggText="4";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="4";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 4) {
					me._gallery_counter.ggText="5";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="5";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 5) {
					me._gallery_counter.ggText="6";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="6";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 6) {
					me._gallery_counter.ggText="7";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="7";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 7) {
					me._gallery_counter.ggText="8";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="8";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 8) {
					me._gallery_counter.ggText="9";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="9";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 9) {
					me._gallery_counter.ggText="10";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="10";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 10) {
					me._gallery_counter.ggText="11";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="11";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 11) {
					me._gallery_counter.ggText="12";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="12";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 12) {
					me._gallery_counter.ggText="13";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="13";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 13) {
					me._gallery_counter.ggText="14";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="14";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else if (me._gallery_counter.ggCurrentLogicStateText == 14) {
					me._gallery_counter.ggText="15";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="15";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
				else {
					me._gallery_counter.ggText="1";
					me._gallery_counter__text.innerHTML=me._gallery_counter.ggText;
					if (me._gallery_counter.ggUpdateText) {
					me._gallery_counter.ggUpdateText=function() {
						var hs="1";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._gallery_counter.ggUpdatePosition) me._gallery_counter.ggUpdatePosition();
					}
				}
			}
		}
		this._gallery_counter.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((28-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._gallery_controler.appendChild(this._gallery_counter);
		this._text_1=document.createElement('div');
		this._text_1__text=document.createElement('div');
		this._text_1.className='ggskin ggskin_textdiv';
		this._text_1.ggTextDiv=this._text_1__text;
		this._text_1.ggId="Text 1";
		this._text_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_1.ggVisible=true;
		this._text_1.className='ggskin ggskin_text ';
		this._text_1.ggType='text';
		hs ='';
		hs+='height : 149px;';
		hs+='left : -212px;';
		hs+='position : absolute;';
		hs+='top : -163px;';
		hs+='visibility : inherit;';
		hs+='width : 585px;';
		hs+='pointer-events:auto;';
		this._text_1.setAttribute('style',hs);
		this._text_1.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 585px;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.27451);';
		hs+='border: 0px solid #000000;';
		hs+='border: 0px solid rgba(0,0,0,0.27451);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		this._text_1__text.setAttribute('style',hs);
		this._text_1__text.innerHTML="\u0421\u041e\u0414\u0415\u0420\u0416\u0410\u041d\u0418\u0415 \u0410\u0412\u0422\u041e\u041f\u0420\u041e\u0415\u0417\u0414\u0410 \xab\u0410\u0420\u0425\u0410\u041d\u0413\u0415\u041b\u042c\u0421\u041a-\u041f\u041e\u0421\u0415\u041b\u041e\u041a \u0421\u0412\u0415\u0422\u041b\u042b\u0419\xbb, 2011-2018 \u0433\u0433.<br\/><br\/>\u0421\u0443\u043c\u043c\u0430\u0440\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u043a\u0438 \u0430\u0432\u0442\u043e\u0433\u0440\u0435\u0439\u0434\u0435\u0440\u043e\u043c  \u043f\u0440\u043e\u0435\u0437\u0436\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u0438 \u043e\u0431\u043e\u0447\u0438\u043d - 42940 \u043a\u043c<br\/>\u042f\u043c\u043e\u0447\u043d\u044b\u0439 \u0440\u0435\u043c\u043e\u043d\u0442 \u2013 168000 \u043c2<br\/>\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u043e\u0440\u043e\u0436\u043d\u043e\u0433\u043e \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u044f \u2013 344000 \u043c2<br\/>\u0420\u0430\u0437\u0440\u0443\u0431\u043a\u0430 \u043a\u0443\u0441\u0442\u0430\u0440\u043d\u0438\u043a\u0430 \u2013 \u0431\u043e\u043b\u0435\u0435 100\u0433\u0430<br\/>\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u0432\u043e\u0434\u043e\u043e\u0442\u0432\u043e\u0434\u043d\u044b\u0445 \u043a\u0430\u043d\u0430\u0432 \u2013 172 \u043a\u043c, \u0435\u0436\u0435\u0433\u043e\u0434\u043d\u043e \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 30 \u043a\u043c";
		this._text_1.appendChild(this._text_1__text);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._text_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._text_1.ggCurrentLogicStateVisible = -1;
		this._text_1.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width < 100) || 
				(ggSkinVars['gallery_pictures_1'] != 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_1.style[domTransition]='';
				if (me._text_1.ggCurrentLogicStateVisible == 0) {
					me._text_1.style.visibility="hidden";
					me._text_1.ggVisible=false;
				}
				else {
					me._text_1.style.visibility=(Number(me._text_1.style.opacity)>0||!me._text_1.style.opacity)?'inherit':'hidden';
					me._text_1.ggVisible=true;
				}
			}
		}
		this._text_1.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler.appendChild(this._text_1);
		this._gallery_forward=document.createElement('div');
		this._gallery_forward__img=document.createElement('img');
		this._gallery_forward__img.className='ggskin ggskin_button';
		this._gallery_forward__img.setAttribute('src',basePath + 'images/gallery_forward.png');
		this._gallery_forward__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_forward__img.className='ggskin ggskin_button';
		this._gallery_forward__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_forward__img);
		this._gallery_forward.appendChild(this._gallery_forward__img);
		this._gallery_forward.ggId="gallery_forward";
		this._gallery_forward.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_forward.ggVisible=true;
		this._gallery_forward.className='ggskin ggskin_button ';
		this._gallery_forward.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 39px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_forward.setAttribute('style',hs);
		this._gallery_forward.style[domTransform + 'Origin']='50% 50%';
		me._gallery_forward.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_forward.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_forward.onclick=function (e) {
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] + Number("1");
			ggSkinVars['gallery_pictures_1'] = ggSkinVars['gallery_pictures_1'] % Number("5");
			me._gallery_fx.ggTimeout=Number(".1") * 1000.0;
			me._gallery_fx.ggTimestamp=me.ggCurrentTime;
		}
		this._gallery_forward.onmouseover=function (e) {
			me._gallery_forward__img.src=basePath + 'images/gallery_forward__o.png';
		}
		this._gallery_forward.onmouseout=function (e) {
			me._gallery_forward__img.src=basePath + 'images/gallery_forward.png';
		}
		this._gallery_forward.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler.appendChild(this._gallery_forward);
		this._gallery_pause=document.createElement('div');
		this._gallery_pause__img=document.createElement('img');
		this._gallery_pause__img.className='ggskin ggskin_button';
		this._gallery_pause__img.setAttribute('src',basePath + 'images/gallery_pause.png');
		this._gallery_pause__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_pause__img.className='ggskin ggskin_button';
		this._gallery_pause__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_pause__img);
		this._gallery_pause.appendChild(this._gallery_pause__img);
		this._gallery_pause.ggId="gallery_pause";
		this._gallery_pause.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_pause.ggVisible=true;
		this._gallery_pause.className='ggskin ggskin_button ';
		this._gallery_pause.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 86px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_pause.setAttribute('style',hs);
		this._gallery_pause.style[domTransform + 'Origin']='50% 50%';
		me._gallery_pause.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_pause.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_pause.onclick=function (e) {
			me._gallery_timer.ggTimeout=Number("0") * 1000.0;
			me._gallery_timer.ggTimestamp=me.ggCurrentTime;
			me._gallery_pause.style[domTransition]='none';
			me._gallery_pause.style.visibility='hidden';
			me._gallery_pause.ggVisible=false;
			me._gallery_play.style[domTransition]='none';
			me._gallery_play.style.visibility=(Number(me._gallery_play.style.opacity)>0||!me._gallery_play.style.opacity)?'inherit':'hidden';
			me._gallery_play.ggVisible=true;
		}
		this._gallery_pause.onmouseover=function (e) {
			me._gallery_pause__img.src=basePath + 'images/gallery_pause__o.png';
		}
		this._gallery_pause.onmouseout=function (e) {
			me._gallery_pause__img.src=basePath + 'images/gallery_pause.png';
		}
		this._gallery_pause.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler.appendChild(this._gallery_pause);
		this._gallery_play=document.createElement('div');
		this._gallery_play__img=document.createElement('img');
		this._gallery_play__img.className='ggskin ggskin_button';
		this._gallery_play__img.setAttribute('src',basePath + 'images/gallery_play.png');
		this._gallery_play__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._gallery_play__img.className='ggskin ggskin_button';
		this._gallery_play__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gallery_play__img);
		this._gallery_play.appendChild(this._gallery_play__img);
		this._gallery_play.ggId="gallery_play";
		this._gallery_play.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gallery_play.ggVisible=true;
		this._gallery_play.className='ggskin ggskin_button ';
		this._gallery_play.ggType='button';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._gallery_play.setAttribute('style',hs);
		this._gallery_play.style[domTransform + 'Origin']='50% 50%';
		me._gallery_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._gallery_play.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._gallery_play.onclick=function (e) {
			me._gallery_timer.ggTimeout=Number("1.5") * 1000.0;
			me._gallery_timer.ggTimestamp=me.ggCurrentTime;
			me._gallery_play.style[domTransition]='none';
			me._gallery_play.style.visibility='hidden';
			me._gallery_play.ggVisible=false;
			me._gallery_pause.style[domTransition]='none';
			me._gallery_pause.style.visibility=(Number(me._gallery_pause.style.opacity)>0||!me._gallery_pause.style.opacity)?'inherit':'hidden';
			me._gallery_pause.ggVisible=true;
		}
		this._gallery_play.onmouseover=function (e) {
			me._gallery_play__img.src=basePath + 'images/gallery_play__o.png';
		}
		this._gallery_play.onmouseout=function (e) {
			me._gallery_play__img.src=basePath + 'images/gallery_play.png';
		}
		this._gallery_play.ggUpdatePosition=function (useTransition) {
		}
		this._gallery_controler.appendChild(this._gallery_play);
		this._gallery_picture01.appendChild(this._gallery_controler);
		this.divSkin.appendChild(this._gallery_picture01);
		this._start=document.createElement('div');
		this._start__img=document.createElement('img');
		this._start__img.className='ggskin ggskin_image';
		this._start__img.setAttribute('src',basePath + 'images/start.png');
		this._start__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._start__img.className='ggskin ggskin_image';
		this._start__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._start__img);
		this._start.appendChild(this._start__img);
		this._start.ggId="Start";
		this._start.ggLeft=-104;
		this._start.ggTop=-162;
		this._start.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._start.ggVisible=false;
		this._start.className='ggskin ggskin_image ';
		this._start.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -104px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='top : -162px;';
		hs+='visibility : hidden;';
		hs+='width : 208px;';
		hs+='pointer-events:auto;';
		this._start.setAttribute('style',hs);
		this._start.style[domTransform + 'Origin']='50% 50%';
		me._start.ggIsActive=function() {
			return false;
		}
		me._start.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._start.onclick=function (e) {
			me.player.openNext("{"+me.player.getNextNode()+"}","");
		}
		this._start.onmouseover=function (e) {
			me._start.style[domTransition]='none';
			me._start.style.opacity='1';
			me._start.style.visibility=me._start.ggVisible?'inherit':'hidden';
		}
		this._start.onmouseout=function (e) {
			me._start.style[domTransition]='none';
			me._start.style.opacity='0.8';
			me._start.style.visibility=me._start.ggVisible?'inherit':'hidden';
		}
		me._start.ggCurrentLogicStateVisible = -1;
		this._start.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.ggUserdata.tags.indexOf("start") != -1)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start.style[domTransition]='';
				if (me._start.ggCurrentLogicStateVisible == 0) {
					me._start.style.visibility=(Number(me._start.style.opacity)>0||!me._start.style.opacity)?'inherit':'hidden';
					me._start.ggVisible=true;
				}
				else {
					me._start.style.visibility="hidden";
					me._start.ggVisible=false;
				}
			}
		}
		this._start.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._start.ggNodeChange=function () {
			me._start.ggUpdateConditionNodeChange();
		}
		this.divSkin.appendChild(this._start);
		this._startpic=document.createElement('div');
		this._startpic__img=document.createElement('img');
		this._startpic__img.className='ggskin ggskin_image';
		this._startpic__img.setAttribute('src',basePath + 'images/startpic.png');
		this._startpic__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._startpic__img.className='ggskin ggskin_image';
		this._startpic__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._startpic__img);
		this._startpic.appendChild(this._startpic__img);
		this._startpic.ggId="start-pic";
		this._startpic.ggLeft=-293;
		this._startpic.ggTop=-119;
		this._startpic.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._startpic.ggVisible=false;
		this._startpic.className='ggskin ggskin_image ';
		this._startpic.ggType='image';
		hs ='';
		hs+='height : 229px;';
		hs+='left : -293px;';
		hs+='position : absolute;';
		hs+='top : -119px;';
		hs+='visibility : hidden;';
		hs+='width : 628px;';
		hs+='pointer-events:auto;';
		this._startpic.setAttribute('style',hs);
		this._startpic.style[domTransform + 'Origin']='50% 50%';
		me._startpic.ggIsActive=function() {
			return false;
		}
		me._startpic.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._startpic.ggCurrentLogicStateVisible = -1;
		this._startpic.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == false) && 
				(me.ggUserdata.tags.indexOf("start") != -1)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._startpic.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._startpic.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._startpic.style[domTransition]='';
				if (me._startpic.ggCurrentLogicStateVisible == 0) {
					me._startpic.style.visibility=(Number(me._startpic.style.opacity)>0||!me._startpic.style.opacity)?'inherit':'hidden';
					me._startpic.ggVisible=true;
				}
				else {
					me._startpic.style.visibility="hidden";
					me._startpic.ggVisible=false;
				}
			}
		}
		this._startpic.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._startpic.ggNodeChange=function () {
			me._startpic.ggUpdateConditionNodeChange();
		}
		this.divSkin.appendChild(this._startpic);
		this._startpicmob=document.createElement('div');
		this._startpicmob__img=document.createElement('img');
		this._startpicmob__img.className='ggskin ggskin_image';
		this._startpicmob__img.setAttribute('src',basePath + 'images/startpicmob.png');
		this._startpicmob__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._startpicmob__img.className='ggskin ggskin_image';
		this._startpicmob__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._startpicmob__img);
		this._startpicmob.appendChild(this._startpicmob__img);
		this._startpicmob.ggId="start-pic-mob";
		this._startpicmob.ggLeft=-129;
		this._startpicmob.ggTop=-60;
		this._startpicmob.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._startpicmob.ggVisible=false;
		this._startpicmob.className='ggskin ggskin_image ';
		this._startpicmob.ggType='image';
		hs ='';
		hs+='height : 76px;';
		hs+='left : -129px;';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : hidden;';
		hs+='width : 258px;';
		hs+='pointer-events:auto;';
		this._startpicmob.setAttribute('style',hs);
		this._startpicmob.style[domTransform + 'Origin']='50% 50%';
		me._startpicmob.ggIsActive=function() {
			return false;
		}
		me._startpicmob.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._startpicmob.ggCurrentLogicStateVisible = -1;
		this._startpicmob.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true) && 
				(me.ggUserdata.tags.indexOf("start") != -1)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._startpicmob.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._startpicmob.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._startpicmob.style[domTransition]='';
				if (me._startpicmob.ggCurrentLogicStateVisible == 0) {
					me._startpicmob.style.visibility=(Number(me._startpicmob.style.opacity)>0||!me._startpicmob.style.opacity)?'inherit':'hidden';
					me._startpicmob.ggVisible=true;
				}
				else {
					me._startpicmob.style.visibility="hidden";
					me._startpicmob.ggVisible=false;
				}
			}
		}
		this._startpicmob.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._startpicmob.ggNodeChange=function () {
			me._startpicmob.ggUpdateConditionNodeChange();
		}
		this.divSkin.appendChild(this._startpicmob);
		this.preloadImages();
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.ggHotspotCallChildFunctions=function(functionname) {
		var stack = me.player.getCurrentPointHotspots();
		while (stack.length > 0) {
			var e = stack.pop();
			if (typeof e[functionname] == 'function') {
				e[functionname]();
			}
			if(e.hasChildNodes()) {
				for(var i=0; i<e.childNodes.length; i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._infooff0.ggNodeChange();
		me._infoon0.ggNodeChange();
		me._infooff.ggNodeChange();
		me._infoon.ggNodeChange();
		me._rectangle_1.ggNodeChange();
		me._start.ggNodeChange();
		me._startpic.ggNodeChange();
		me._startpicmob.ggNodeChange();
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		me._controllerm.ggUpdateConditionTimer();
		me._controller.ggUpdateConditionTimer();
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(1,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['right']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['left']) {
			me.player.changePanLog(1,true);
		}
		me._screen_tint.ggUpdateConditionTimer();
		me._gallery_picture16.ggUpdateConditionTimer();
		if (me._gallery_timer14.ggLastIsActive!=me._gallery_timer14.ggIsActive()) {
			me._gallery_timer14.ggLastIsActive=me._gallery_timer14.ggIsActive();
			if (me._gallery_timer14.ggLastIsActive) {
				me._gallery_forward8.onclick();
			} else {
			}
		}
		me._gallery_picture_preload14.ggUpdateConditionTimer();
		me._gallery_picture15.ggUpdateConditionTimer();
		if (me._gallery_timer13.ggLastIsActive!=me._gallery_timer13.ggIsActive()) {
			me._gallery_timer13.ggLastIsActive=me._gallery_timer13.ggIsActive();
			if (me._gallery_timer13.ggLastIsActive) {
				me._gallery_forward8.onclick();
			} else {
			}
		}
		me._gallery_picture_preload13.ggUpdateConditionTimer();
		me._gallery_picture14.ggUpdateConditionTimer();
		if (me._gallery_timer12.ggLastIsActive!=me._gallery_timer12.ggIsActive()) {
			me._gallery_timer12.ggLastIsActive=me._gallery_timer12.ggIsActive();
			if (me._gallery_timer12.ggLastIsActive) {
				me._gallery_forward8.onclick();
			} else {
			}
		}
		me._gallery_picture_preload12.ggUpdateConditionTimer();
		me._gallery_counter8.ggUpdateConditionTimer();
		me._text_112.ggUpdateConditionTimer();
		me._gallery_picture13.ggUpdateConditionTimer();
		if (me._gallery_timer11.ggLastIsActive!=me._gallery_timer11.ggIsActive()) {
			me._gallery_timer11.ggLastIsActive=me._gallery_timer11.ggIsActive();
			if (me._gallery_timer11.ggLastIsActive) {
				me._gallery_forward8.onclick();
			} else {
			}
		}
		me._gallery_picture_preload11.ggUpdateConditionTimer();
		me._gallery_picture12.ggUpdateConditionTimer();
		if (me._gallery_timer10.ggLastIsActive!=me._gallery_timer10.ggIsActive()) {
			me._gallery_timer10.ggLastIsActive=me._gallery_timer10.ggIsActive();
			if (me._gallery_timer10.ggLastIsActive) {
				me._gallery_forward7.onclick();
			} else {
			}
		}
		me._gallery_picture_preload10.ggUpdateConditionTimer();
		me._gallery_counter7.ggUpdateConditionTimer();
		me._text_110.ggUpdateConditionTimer();
		me._gallery_picture11.ggUpdateConditionTimer();
		if (me._gallery_timer9.ggLastIsActive!=me._gallery_timer9.ggIsActive()) {
			me._gallery_timer9.ggLastIsActive=me._gallery_timer9.ggIsActive();
			if (me._gallery_timer9.ggLastIsActive) {
				me._gallery_forward6.onclick();
			} else {
			}
		}
		me._gallery_picture_preload9.ggUpdateConditionTimer();
		me._gallery_counter6.ggUpdateConditionTimer();
		me._text_19.ggUpdateConditionTimer();
		me._gallery_picture10.ggUpdateConditionTimer();
		if (me._gallery_timer8.ggLastIsActive!=me._gallery_timer8.ggIsActive()) {
			me._gallery_timer8.ggLastIsActive=me._gallery_timer8.ggIsActive();
			if (me._gallery_timer8.ggLastIsActive) {
				me._gallery_forward8.onclick();
			} else {
			}
		}
		me._gallery_picture_preload8.ggUpdateConditionTimer();
		me._gallery_picture09.ggUpdateConditionTimer();
		if (me._gallery_timer7.ggLastIsActive!=me._gallery_timer7.ggIsActive()) {
			me._gallery_timer7.ggLastIsActive=me._gallery_timer7.ggIsActive();
			if (me._gallery_timer7.ggLastIsActive) {
				me._gallery_forward5.onclick();
			} else {
			}
		}
		me._gallery_picture_preload7.ggUpdateConditionTimer();
		me._gallery_counter5.ggUpdateConditionTimer();
		me._text_17.ggUpdateConditionTimer();
		me._gallery_picture07.ggUpdateConditionTimer();
		if (me._gallery_timer6.ggLastIsActive!=me._gallery_timer6.ggIsActive()) {
			me._gallery_timer6.ggLastIsActive=me._gallery_timer6.ggIsActive();
			if (me._gallery_timer6.ggLastIsActive) {
				me._gallery_forward4.onclick();
			} else {
			}
		}
		me._gallery_picture_preload6.ggUpdateConditionTimer();
		me._gallery_counter4.ggUpdateConditionTimer();
		me._text_16.ggUpdateConditionTimer();
		me._gallery_picture06.ggUpdateConditionTimer();
		if (me._gallery_timer5.ggLastIsActive!=me._gallery_timer5.ggIsActive()) {
			me._gallery_timer5.ggLastIsActive=me._gallery_timer5.ggIsActive();
			if (me._gallery_timer5.ggLastIsActive) {
				me._gallery_forward3.onclick();
			} else {
			}
		}
		me._gallery_picture_preload5.ggUpdateConditionTimer();
		me._gallery_counter3.ggUpdateConditionTimer();
		me._text_15.ggUpdateConditionTimer();
		me._gallery_picture051.ggUpdateConditionTimer();
		if (me._gallery_timer4.ggLastIsActive!=me._gallery_timer4.ggIsActive()) {
			me._gallery_timer4.ggLastIsActive=me._gallery_timer4.ggIsActive();
			if (me._gallery_timer4.ggLastIsActive) {
				me._gallery_forward2.onclick();
			} else {
			}
		}
		me._gallery_picture_preload4.ggUpdateConditionTimer();
		me._gallery_counter2.ggUpdateConditionTimer();
		me._text_14.ggUpdateConditionTimer();
		me._gallery_picture05.ggUpdateConditionTimer();
		if (me._gallery_timer3.ggLastIsActive!=me._gallery_timer3.ggIsActive()) {
			me._gallery_timer3.ggLastIsActive=me._gallery_timer3.ggIsActive();
			if (me._gallery_timer3.ggLastIsActive) {
				me._gallery_forward1.onclick();
			} else {
			}
		}
		me._gallery_picture_preload3.ggUpdateConditionTimer();
		me._gallery_counter1.ggUpdateConditionTimer();
		me._text_13.ggUpdateConditionTimer();
		me._gallery_picture04.ggUpdateConditionTimer();
		if (me._gallery_timer2.ggLastIsActive!=me._gallery_timer2.ggIsActive()) {
			me._gallery_timer2.ggLastIsActive=me._gallery_timer2.ggIsActive();
			if (me._gallery_timer2.ggLastIsActive) {
				me._gallery_forward0.onclick();
			} else {
			}
		}
		me._gallery_picture_preload2.ggUpdateConditionTimer();
		me._gallery_counter0.ggUpdateConditionTimer();
		me._text_12.ggUpdateConditionTimer();
		me._gallery_picture03.ggUpdateConditionTimer();
		if (me._gallery_timer1.ggLastIsActive!=me._gallery_timer1.ggIsActive()) {
			me._gallery_timer1.ggLastIsActive=me._gallery_timer1.ggIsActive();
			if (me._gallery_timer1.ggLastIsActive) {
				me._gallery_forward8.onclick();
			} else {
			}
		}
		me._gallery_picture_preload1.ggUpdateConditionTimer();
		me._text_11.ggUpdateConditionTimer();
		me._gallery_picture02.ggUpdateConditionTimer();
		if (me._gallery_timer0.ggLastIsActive!=me._gallery_timer0.ggIsActive()) {
			me._gallery_timer0.ggLastIsActive=me._gallery_timer0.ggIsActive();
			if (me._gallery_timer0.ggLastIsActive) {
				me._gallery_forward8.onclick();
			} else {
			}
		}
		me._gallery_picture_preload0.ggUpdateConditionTimer();
		me._gallery_picture01.ggUpdateConditionTimer();
		if (me._gallery_timer.ggLastIsActive!=me._gallery_timer.ggIsActive()) {
			me._gallery_timer.ggLastIsActive=me._gallery_timer.ggIsActive();
			if (me._gallery_timer.ggLastIsActive) {
				me._gallery_forward.onclick();
			} else {
			}
		}
		me._gallery_picture_preload.ggUpdateConditionTimer();
		me._gallery_counter.ggUpdateConditionTimer();
		me._text_1.ggUpdateConditionTimer();
		me.ggHotspotCallChildFunctions('ggUpdateConditionTimer');
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='ht_info') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_info";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 379px;';
			hs+='position : absolute;';
			hs+='top : 131px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._hstext15=document.createElement('div');
			this._hstext15__text=document.createElement('div');
			this._hstext15.className='ggskin ggskin_textdiv';
			this._hstext15.ggTextDiv=this._hstext15__text;
			this._hstext15.ggId="hstext";
			this._hstext15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext15.ggVisible=true;
			this._hstext15.className='ggskin ggskin_text ';
			this._hstext15.ggType='text';
			hs ='';
			hs+='height : 24px;';
			hs+='left : -126px;';
			hs+='position : absolute;';
			hs+='top : -10px;';
			hs+='visibility : inherit;';
			hs+='width : 270px;';
			hs+='pointer-events:auto;';
			this._hstext15.setAttribute('style',hs);
			this._hstext15.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.117647);';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext15__text.setAttribute('style',hs);
			this._hstext15__text.innerHTML="<span style=\"font-size: 9px;\">"+me.hotspot.title+"<\/span>";
			this._hstext15.appendChild(this._hstext15__text);
			me._hstext15.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext15.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext15.ggCurrentLogicStateVisible = -1;
			this._hstext15.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext15.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext15.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext15.style[domTransition]='';
					if (me._hstext15.ggCurrentLogicStateVisible == 0) {
						me._hstext15.style.visibility=(Number(me._hstext15.style.opacity)>0||!me._hstext15.style.opacity)?'inherit':'hidden';
						me._hstext15.ggVisible=true;
					}
					else {
						me._hstext15.style.visibility=(Number(me._hstext15.style.opacity)>0||!me._hstext15.style.opacity)?'inherit':'hidden';
						me._hstext15.ggVisible=true;
					}
				}
			}
			this._hstext15.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((272-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._hstext15);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext15.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_gallery-15') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_gallery-15";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 694px;';
			hs+='position : absolute;';
			hs+='top : 52px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.stopAutorotate();
				me.skin._screen_tint.style[domTransition]='none';
				me.skin._screen_tint.style.visibility=(Number(me.skin._screen_tint.style.opacity)>0||!me.skin._screen_tint.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint.ggVisible=true;
				me.skin._gallery_picture15.style[domTransition]='none';
				me.skin._gallery_picture15.style.visibility=(Number(me.skin._gallery_picture15.style.opacity)>0||!me.skin._gallery_picture15.style.opacity)?'inherit':'hidden';
				me.skin._gallery_picture15.ggVisible=true;
				me.skin._screen_tint2.style[domTransition]='none';
				me.skin._screen_tint2.style.visibility=(Number(me.skin._screen_tint2.style.opacity)>0||!me.skin._screen_tint2.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint2.ggVisible=true;
				ggSkinVars['gallery_pictures_1'] = Number("0");
				ggSkinVars['gallery_show_hide'] = true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.player.stopAutorotate();
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.player.startAutorotate("0.01");
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_114=document.createElement('div');
			this._image_114__img=document.createElement('img');
			this._image_114__img.className='ggskin ggskin_image';
			this._image_114__img.setAttribute('src',basePath + 'images/image_114.png');
			this._image_114__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_114__img.className='ggskin ggskin_image';
			this._image_114__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_114__img);
			this._image_114.appendChild(this._image_114__img);
			this._image_114.ggId="Image 1";
			this._image_114.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_114.ggVisible=true;
			this._image_114.className='ggskin ggskin_image ';
			this._image_114.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 40px;';
			hs+='left : -10px;';
			hs+='opacity : 0.9;';
			hs+='position : absolute;';
			hs+='top : -20px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._image_114.setAttribute('style',hs);
			this._image_114.style[domTransform + 'Origin']='50% 50%';
			me._image_114.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_114.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_114.onmouseover=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_114.style[domTransition]='none';
				} else {
					me._image_114.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_114.ggParameter.sx=1.25;me._image_114.ggParameter.sy=1.25;
				me._image_114.style[domTransform]=parameterToTransform(me._image_114.ggParameter);
			}
			this._image_114.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_114.style[domTransition]='none';
				} else {
					me._image_114.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_114.ggParameter.sx=1;me._image_114.ggParameter.sy=1;
				me._image_114.style[domTransform]=parameterToTransform(me._image_114.ggParameter);
			}
			this._image_114.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_114);
			this._hstext14=document.createElement('div');
			this._hstext14__text=document.createElement('div');
			this._hstext14.className='ggskin ggskin_textdiv';
			this._hstext14.ggTextDiv=this._hstext14__text;
			this._hstext14.ggId="hstext";
			this._hstext14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext14.ggVisible=true;
			this._hstext14.className='ggskin ggskin_text ';
			this._hstext14.ggType='text';
			hs ='';
			hs+='height : 24px;';
			hs+='left : -126px;';
			hs+='position : absolute;';
			hs+='top : 23px;';
			hs+='visibility : inherit;';
			hs+='width : 270px;';
			hs+='pointer-events:auto;';
			this._hstext14.setAttribute('style',hs);
			this._hstext14.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.117647);';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext14__text.setAttribute('style',hs);
			this._hstext14__text.innerHTML="<span style=\"font-size: 9px;\">"+me.hotspot.title+"<\/span>";
			this._hstext14.appendChild(this._hstext14__text);
			me._hstext14.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext14.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext14.ggCurrentLogicStateVisible = -1;
			this._hstext14.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext14.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext14.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext14.style[domTransition]='';
					if (me._hstext14.ggCurrentLogicStateVisible == 0) {
						me._hstext14.style.visibility=(Number(me._hstext14.style.opacity)>0||!me._hstext14.style.opacity)?'inherit':'hidden';
						me._hstext14.ggVisible=true;
					}
					else {
						me._hstext14.style.visibility=(Number(me._hstext14.style.opacity)>0||!me._hstext14.style.opacity)?'inherit':'hidden';
						me._hstext14.ggVisible=true;
					}
				}
			}
			this._hstext14.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((272-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._hstext14);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext14.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_gallery-16') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_gallery-16";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 694px;';
			hs+='position : absolute;';
			hs+='top : 52px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.stopAutorotate();
				me.skin._screen_tint.style[domTransition]='none';
				me.skin._screen_tint.style.visibility=(Number(me.skin._screen_tint.style.opacity)>0||!me.skin._screen_tint.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint.ggVisible=true;
				me.skin._gallery_picture16.style[domTransition]='none';
				me.skin._gallery_picture16.style.visibility=(Number(me.skin._gallery_picture16.style.opacity)>0||!me.skin._gallery_picture16.style.opacity)?'inherit':'hidden';
				me.skin._gallery_picture16.ggVisible=true;
				me.skin._screen_tint2.style[domTransition]='none';
				me.skin._screen_tint2.style.visibility=(Number(me.skin._screen_tint2.style.opacity)>0||!me.skin._screen_tint2.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint2.ggVisible=true;
				ggSkinVars['gallery_pictures_1'] = Number("0");
				ggSkinVars['gallery_show_hide'] = true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.player.stopAutorotate();
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.player.startAutorotate("0.01");
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_113=document.createElement('div');
			this._image_113__img=document.createElement('img');
			this._image_113__img.className='ggskin ggskin_image';
			this._image_113__img.setAttribute('src',basePath + 'images/image_113.png');
			this._image_113__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_113__img.className='ggskin ggskin_image';
			this._image_113__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_113__img);
			this._image_113.appendChild(this._image_113__img);
			this._image_113.ggId="Image 1";
			this._image_113.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_113.ggVisible=true;
			this._image_113.className='ggskin ggskin_image ';
			this._image_113.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 40px;';
			hs+='left : -10px;';
			hs+='opacity : 0.9;';
			hs+='position : absolute;';
			hs+='top : -20px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._image_113.setAttribute('style',hs);
			this._image_113.style[domTransform + 'Origin']='50% 50%';
			me._image_113.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_113.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_113.onmouseover=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_113.style[domTransition]='none';
				} else {
					me._image_113.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_113.ggParameter.sx=1.25;me._image_113.ggParameter.sy=1.25;
				me._image_113.style[domTransform]=parameterToTransform(me._image_113.ggParameter);
			}
			this._image_113.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_113.style[domTransition]='none';
				} else {
					me._image_113.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_113.ggParameter.sx=1;me._image_113.ggParameter.sy=1;
				me._image_113.style[domTransform]=parameterToTransform(me._image_113.ggParameter);
			}
			this._image_113.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_113);
			this._hstext13=document.createElement('div');
			this._hstext13__text=document.createElement('div');
			this._hstext13.className='ggskin ggskin_textdiv';
			this._hstext13.ggTextDiv=this._hstext13__text;
			this._hstext13.ggId="hstext";
			this._hstext13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext13.ggVisible=true;
			this._hstext13.className='ggskin ggskin_text ';
			this._hstext13.ggType='text';
			hs ='';
			hs+='height : 24px;';
			hs+='left : -126px;';
			hs+='position : absolute;';
			hs+='top : 23px;';
			hs+='visibility : inherit;';
			hs+='width : 270px;';
			hs+='pointer-events:auto;';
			this._hstext13.setAttribute('style',hs);
			this._hstext13.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.117647);';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext13__text.setAttribute('style',hs);
			this._hstext13__text.innerHTML="<span style=\"font-size: 9px;\">"+me.hotspot.title+"<\/span>";
			this._hstext13.appendChild(this._hstext13__text);
			me._hstext13.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext13.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext13.ggCurrentLogicStateVisible = -1;
			this._hstext13.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext13.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext13.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext13.style[domTransition]='';
					if (me._hstext13.ggCurrentLogicStateVisible == 0) {
						me._hstext13.style.visibility=(Number(me._hstext13.style.opacity)>0||!me._hstext13.style.opacity)?'inherit':'hidden';
						me._hstext13.ggVisible=true;
					}
					else {
						me._hstext13.style.visibility=(Number(me._hstext13.style.opacity)>0||!me._hstext13.style.opacity)?'inherit':'hidden';
						me._hstext13.ggVisible=true;
					}
				}
			}
			this._hstext13.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((272-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._hstext13);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext13.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_gallery-14') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_gallery-14";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 694px;';
			hs+='position : absolute;';
			hs+='top : 52px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.stopAutorotate();
				me.skin._screen_tint.style[domTransition]='none';
				me.skin._screen_tint.style.visibility=(Number(me.skin._screen_tint.style.opacity)>0||!me.skin._screen_tint.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint.ggVisible=true;
				me.skin._gallery_picture14.style[domTransition]='none';
				me.skin._gallery_picture14.style.visibility=(Number(me.skin._gallery_picture14.style.opacity)>0||!me.skin._gallery_picture14.style.opacity)?'inherit':'hidden';
				me.skin._gallery_picture14.ggVisible=true;
				me.skin._screen_tint2.style[domTransition]='none';
				me.skin._screen_tint2.style.visibility=(Number(me.skin._screen_tint2.style.opacity)>0||!me.skin._screen_tint2.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint2.ggVisible=true;
				ggSkinVars['gallery_pictures_1'] = Number("0");
				ggSkinVars['gallery_show_hide'] = true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.player.stopAutorotate();
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.player.startAutorotate("0.01");
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_112=document.createElement('div');
			this._image_112__img=document.createElement('img');
			this._image_112__img.className='ggskin ggskin_image';
			this._image_112__img.setAttribute('src',basePath + 'images/image_112.png');
			this._image_112__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_112__img.className='ggskin ggskin_image';
			this._image_112__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_112__img);
			this._image_112.appendChild(this._image_112__img);
			this._image_112.ggId="Image 1";
			this._image_112.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_112.ggVisible=true;
			this._image_112.className='ggskin ggskin_image ';
			this._image_112.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 40px;';
			hs+='left : -10px;';
			hs+='opacity : 0.9;';
			hs+='position : absolute;';
			hs+='top : -20px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._image_112.setAttribute('style',hs);
			this._image_112.style[domTransform + 'Origin']='50% 50%';
			me._image_112.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_112.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_112.onmouseover=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_112.style[domTransition]='none';
				} else {
					me._image_112.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_112.ggParameter.sx=1.25;me._image_112.ggParameter.sy=1.25;
				me._image_112.style[domTransform]=parameterToTransform(me._image_112.ggParameter);
			}
			this._image_112.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_112.style[domTransition]='none';
				} else {
					me._image_112.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_112.ggParameter.sx=1;me._image_112.ggParameter.sy=1;
				me._image_112.style[domTransform]=parameterToTransform(me._image_112.ggParameter);
			}
			this._image_112.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_112);
			this._hstext12=document.createElement('div');
			this._hstext12__text=document.createElement('div');
			this._hstext12.className='ggskin ggskin_textdiv';
			this._hstext12.ggTextDiv=this._hstext12__text;
			this._hstext12.ggId="hstext";
			this._hstext12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext12.ggVisible=true;
			this._hstext12.className='ggskin ggskin_text ';
			this._hstext12.ggType='text';
			hs ='';
			hs+='height : 24px;';
			hs+='left : -126px;';
			hs+='position : absolute;';
			hs+='top : 23px;';
			hs+='visibility : inherit;';
			hs+='width : 270px;';
			hs+='pointer-events:auto;';
			this._hstext12.setAttribute('style',hs);
			this._hstext12.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.117647);';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext12__text.setAttribute('style',hs);
			this._hstext12__text.innerHTML="<span style=\"font-size: 9px;\">"+me.hotspot.title+"<\/span>";
			this._hstext12.appendChild(this._hstext12__text);
			me._hstext12.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext12.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext12.ggCurrentLogicStateVisible = -1;
			this._hstext12.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext12.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext12.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext12.style[domTransition]='';
					if (me._hstext12.ggCurrentLogicStateVisible == 0) {
						me._hstext12.style.visibility=(Number(me._hstext12.style.opacity)>0||!me._hstext12.style.opacity)?'inherit':'hidden';
						me._hstext12.ggVisible=true;
					}
					else {
						me._hstext12.style.visibility=(Number(me._hstext12.style.opacity)>0||!me._hstext12.style.opacity)?'inherit':'hidden';
						me._hstext12.ggVisible=true;
					}
				}
			}
			this._hstext12.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((272-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._hstext12);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext12.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_gallery-13') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_gallery-13";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 694px;';
			hs+='position : absolute;';
			hs+='top : 52px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.stopAutorotate();
				me.skin._screen_tint.style[domTransition]='none';
				me.skin._screen_tint.style.visibility=(Number(me.skin._screen_tint.style.opacity)>0||!me.skin._screen_tint.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint.ggVisible=true;
				me.skin._gallery_picture13.style[domTransition]='none';
				me.skin._gallery_picture13.style.visibility=(Number(me.skin._gallery_picture13.style.opacity)>0||!me.skin._gallery_picture13.style.opacity)?'inherit':'hidden';
				me.skin._gallery_picture13.ggVisible=true;
				me.skin._screen_tint2.style[domTransition]='none';
				me.skin._screen_tint2.style.visibility=(Number(me.skin._screen_tint2.style.opacity)>0||!me.skin._screen_tint2.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint2.ggVisible=true;
				ggSkinVars['gallery_pictures_1'] = Number("0");
				ggSkinVars['gallery_show_hide'] = true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.player.stopAutorotate();
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.player.startAutorotate("0.01");
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_111=document.createElement('div');
			this._image_111__img=document.createElement('img');
			this._image_111__img.className='ggskin ggskin_image';
			this._image_111__img.setAttribute('src',basePath + 'images/image_111.png');
			this._image_111__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_111__img.className='ggskin ggskin_image';
			this._image_111__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_111__img);
			this._image_111.appendChild(this._image_111__img);
			this._image_111.ggId="Image 1";
			this._image_111.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_111.ggVisible=true;
			this._image_111.className='ggskin ggskin_image ';
			this._image_111.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 40px;';
			hs+='left : -10px;';
			hs+='opacity : 0.9;';
			hs+='position : absolute;';
			hs+='top : -20px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._image_111.setAttribute('style',hs);
			this._image_111.style[domTransform + 'Origin']='50% 50%';
			me._image_111.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_111.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_111.onmouseover=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_111.style[domTransition]='none';
				} else {
					me._image_111.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_111.ggParameter.sx=1.25;me._image_111.ggParameter.sy=1.25;
				me._image_111.style[domTransform]=parameterToTransform(me._image_111.ggParameter);
			}
			this._image_111.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_111.style[domTransition]='none';
				} else {
					me._image_111.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_111.ggParameter.sx=1;me._image_111.ggParameter.sy=1;
				me._image_111.style[domTransform]=parameterToTransform(me._image_111.ggParameter);
			}
			this._image_111.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_111);
			this._hstext11=document.createElement('div');
			this._hstext11__text=document.createElement('div');
			this._hstext11.className='ggskin ggskin_textdiv';
			this._hstext11.ggTextDiv=this._hstext11__text;
			this._hstext11.ggId="hstext";
			this._hstext11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext11.ggVisible=true;
			this._hstext11.className='ggskin ggskin_text ';
			this._hstext11.ggType='text';
			hs ='';
			hs+='height : 24px;';
			hs+='left : -126px;';
			hs+='position : absolute;';
			hs+='top : 23px;';
			hs+='visibility : inherit;';
			hs+='width : 270px;';
			hs+='pointer-events:auto;';
			this._hstext11.setAttribute('style',hs);
			this._hstext11.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.117647);';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext11__text.setAttribute('style',hs);
			this._hstext11__text.innerHTML="<span style=\"font-size: 9px;\">"+me.hotspot.title+"<\/span>";
			this._hstext11.appendChild(this._hstext11__text);
			me._hstext11.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext11.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext11.ggCurrentLogicStateVisible = -1;
			this._hstext11.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext11.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext11.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext11.style[domTransition]='';
					if (me._hstext11.ggCurrentLogicStateVisible == 0) {
						me._hstext11.style.visibility=(Number(me._hstext11.style.opacity)>0||!me._hstext11.style.opacity)?'inherit':'hidden';
						me._hstext11.ggVisible=true;
					}
					else {
						me._hstext11.style.visibility=(Number(me._hstext11.style.opacity)>0||!me._hstext11.style.opacity)?'inherit':'hidden';
						me._hstext11.ggVisible=true;
					}
				}
			}
			this._hstext11.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((272-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._hstext11);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext11.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_gallery-12') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_gallery-12";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 694px;';
			hs+='position : absolute;';
			hs+='top : 52px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.stopAutorotate();
				me.skin._screen_tint.style[domTransition]='none';
				me.skin._screen_tint.style.visibility=(Number(me.skin._screen_tint.style.opacity)>0||!me.skin._screen_tint.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint.ggVisible=true;
				me.skin._gallery_picture12.style[domTransition]='none';
				me.skin._gallery_picture12.style.visibility=(Number(me.skin._gallery_picture12.style.opacity)>0||!me.skin._gallery_picture12.style.opacity)?'inherit':'hidden';
				me.skin._gallery_picture12.ggVisible=true;
				me.skin._screen_tint2.style[domTransition]='none';
				me.skin._screen_tint2.style.visibility=(Number(me.skin._screen_tint2.style.opacity)>0||!me.skin._screen_tint2.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint2.ggVisible=true;
				ggSkinVars['gallery_pictures_1'] = Number("0");
				ggSkinVars['gallery_show_hide'] = true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.player.stopAutorotate();
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.player.startAutorotate("0.01");
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_110=document.createElement('div');
			this._image_110__img=document.createElement('img');
			this._image_110__img.className='ggskin ggskin_image';
			this._image_110__img.setAttribute('src',basePath + 'images/image_110.png');
			this._image_110__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_110__img.className='ggskin ggskin_image';
			this._image_110__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_110__img);
			this._image_110.appendChild(this._image_110__img);
			this._image_110.ggId="Image 1";
			this._image_110.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_110.ggVisible=true;
			this._image_110.className='ggskin ggskin_image ';
			this._image_110.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 40px;';
			hs+='left : -10px;';
			hs+='opacity : 0.9;';
			hs+='position : absolute;';
			hs+='top : -20px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._image_110.setAttribute('style',hs);
			this._image_110.style[domTransform + 'Origin']='50% 50%';
			me._image_110.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_110.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_110.onmouseover=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_110.style[domTransition]='none';
				} else {
					me._image_110.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_110.ggParameter.sx=1.25;me._image_110.ggParameter.sy=1.25;
				me._image_110.style[domTransform]=parameterToTransform(me._image_110.ggParameter);
			}
			this._image_110.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_110.style[domTransition]='none';
				} else {
					me._image_110.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_110.ggParameter.sx=1;me._image_110.ggParameter.sy=1;
				me._image_110.style[domTransform]=parameterToTransform(me._image_110.ggParameter);
			}
			this._image_110.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_110);
			this._hstext10=document.createElement('div');
			this._hstext10__text=document.createElement('div');
			this._hstext10.className='ggskin ggskin_textdiv';
			this._hstext10.ggTextDiv=this._hstext10__text;
			this._hstext10.ggId="hstext";
			this._hstext10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext10.ggVisible=true;
			this._hstext10.className='ggskin ggskin_text ';
			this._hstext10.ggType='text';
			hs ='';
			hs+='height : 24px;';
			hs+='left : -126px;';
			hs+='position : absolute;';
			hs+='top : 23px;';
			hs+='visibility : inherit;';
			hs+='width : 270px;';
			hs+='pointer-events:auto;';
			this._hstext10.setAttribute('style',hs);
			this._hstext10.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.117647);';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext10__text.setAttribute('style',hs);
			this._hstext10__text.innerHTML="<span style=\"font-size: 9px;\">"+me.hotspot.title+"<\/span>";
			this._hstext10.appendChild(this._hstext10__text);
			me._hstext10.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext10.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext10.ggCurrentLogicStateVisible = -1;
			this._hstext10.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext10.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext10.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext10.style[domTransition]='';
					if (me._hstext10.ggCurrentLogicStateVisible == 0) {
						me._hstext10.style.visibility=(Number(me._hstext10.style.opacity)>0||!me._hstext10.style.opacity)?'inherit':'hidden';
						me._hstext10.ggVisible=true;
					}
					else {
						me._hstext10.style.visibility=(Number(me._hstext10.style.opacity)>0||!me._hstext10.style.opacity)?'inherit':'hidden';
						me._hstext10.ggVisible=true;
					}
				}
			}
			this._hstext10.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((272-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._hstext10);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext10.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_gallery-11') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_gallery-11";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 694px;';
			hs+='position : absolute;';
			hs+='top : 52px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.stopAutorotate();
				me.skin._screen_tint.style[domTransition]='none';
				me.skin._screen_tint.style.visibility=(Number(me.skin._screen_tint.style.opacity)>0||!me.skin._screen_tint.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint.ggVisible=true;
				me.skin._gallery_picture11.style[domTransition]='none';
				me.skin._gallery_picture11.style.visibility=(Number(me.skin._gallery_picture11.style.opacity)>0||!me.skin._gallery_picture11.style.opacity)?'inherit':'hidden';
				me.skin._gallery_picture11.ggVisible=true;
				me.skin._screen_tint2.style[domTransition]='none';
				me.skin._screen_tint2.style.visibility=(Number(me.skin._screen_tint2.style.opacity)>0||!me.skin._screen_tint2.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint2.ggVisible=true;
				ggSkinVars['gallery_pictures_1'] = Number("0");
				ggSkinVars['gallery_show_hide'] = true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.player.stopAutorotate();
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.player.startAutorotate("0.01");
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_19=document.createElement('div');
			this._image_19__img=document.createElement('img');
			this._image_19__img.className='ggskin ggskin_image';
			this._image_19__img.setAttribute('src',basePath + 'images/image_19.png');
			this._image_19__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_19__img.className='ggskin ggskin_image';
			this._image_19__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_19__img);
			this._image_19.appendChild(this._image_19__img);
			this._image_19.ggId="Image 1";
			this._image_19.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_19.ggVisible=true;
			this._image_19.className='ggskin ggskin_image ';
			this._image_19.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 40px;';
			hs+='left : -10px;';
			hs+='opacity : 0.9;';
			hs+='position : absolute;';
			hs+='top : -20px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._image_19.setAttribute('style',hs);
			this._image_19.style[domTransform + 'Origin']='50% 50%';
			me._image_19.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_19.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_19.onmouseover=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_19.style[domTransition]='none';
				} else {
					me._image_19.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_19.ggParameter.sx=1.25;me._image_19.ggParameter.sy=1.25;
				me._image_19.style[domTransform]=parameterToTransform(me._image_19.ggParameter);
			}
			this._image_19.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_19.style[domTransition]='none';
				} else {
					me._image_19.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_19.ggParameter.sx=1;me._image_19.ggParameter.sy=1;
				me._image_19.style[domTransform]=parameterToTransform(me._image_19.ggParameter);
			}
			this._image_19.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_19);
			this._hstext9=document.createElement('div');
			this._hstext9__text=document.createElement('div');
			this._hstext9.className='ggskin ggskin_textdiv';
			this._hstext9.ggTextDiv=this._hstext9__text;
			this._hstext9.ggId="hstext";
			this._hstext9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext9.ggVisible=true;
			this._hstext9.className='ggskin ggskin_text ';
			this._hstext9.ggType='text';
			hs ='';
			hs+='height : 24px;';
			hs+='left : -126px;';
			hs+='position : absolute;';
			hs+='top : 23px;';
			hs+='visibility : inherit;';
			hs+='width : 270px;';
			hs+='pointer-events:auto;';
			this._hstext9.setAttribute('style',hs);
			this._hstext9.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.117647);';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext9__text.setAttribute('style',hs);
			this._hstext9__text.innerHTML="<span style=\"font-size: 9px;\">"+me.hotspot.title+"<\/span>";
			this._hstext9.appendChild(this._hstext9__text);
			me._hstext9.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext9.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext9.ggCurrentLogicStateVisible = -1;
			this._hstext9.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext9.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext9.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext9.style[domTransition]='';
					if (me._hstext9.ggCurrentLogicStateVisible == 0) {
						me._hstext9.style.visibility=(Number(me._hstext9.style.opacity)>0||!me._hstext9.style.opacity)?'inherit':'hidden';
						me._hstext9.ggVisible=true;
					}
					else {
						me._hstext9.style.visibility=(Number(me._hstext9.style.opacity)>0||!me._hstext9.style.opacity)?'inherit':'hidden';
						me._hstext9.ggVisible=true;
					}
				}
			}
			this._hstext9.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((272-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._hstext9);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext9.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_gallery-10') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_gallery-10";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 694px;';
			hs+='position : absolute;';
			hs+='top : 52px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.stopAutorotate();
				me.skin._screen_tint.style[domTransition]='none';
				me.skin._screen_tint.style.visibility=(Number(me.skin._screen_tint.style.opacity)>0||!me.skin._screen_tint.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint.ggVisible=true;
				me.skin._gallery_picture10.style[domTransition]='none';
				me.skin._gallery_picture10.style.visibility=(Number(me.skin._gallery_picture10.style.opacity)>0||!me.skin._gallery_picture10.style.opacity)?'inherit':'hidden';
				me.skin._gallery_picture10.ggVisible=true;
				me.skin._screen_tint2.style[domTransition]='none';
				me.skin._screen_tint2.style.visibility=(Number(me.skin._screen_tint2.style.opacity)>0||!me.skin._screen_tint2.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint2.ggVisible=true;
				ggSkinVars['gallery_pictures_1'] = Number("0");
				ggSkinVars['gallery_show_hide'] = true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.player.stopAutorotate();
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.player.startAutorotate("0.01");
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_18=document.createElement('div');
			this._image_18__img=document.createElement('img');
			this._image_18__img.className='ggskin ggskin_image';
			this._image_18__img.setAttribute('src',basePath + 'images/image_18.png');
			this._image_18__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_18__img.className='ggskin ggskin_image';
			this._image_18__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_18__img);
			this._image_18.appendChild(this._image_18__img);
			this._image_18.ggId="Image 1";
			this._image_18.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_18.ggVisible=true;
			this._image_18.className='ggskin ggskin_image ';
			this._image_18.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 40px;';
			hs+='left : -10px;';
			hs+='opacity : 0.9;';
			hs+='position : absolute;';
			hs+='top : -20px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._image_18.setAttribute('style',hs);
			this._image_18.style[domTransform + 'Origin']='50% 50%';
			me._image_18.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_18.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_18.onmouseover=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_18.style[domTransition]='none';
				} else {
					me._image_18.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_18.ggParameter.sx=1.25;me._image_18.ggParameter.sy=1.25;
				me._image_18.style[domTransform]=parameterToTransform(me._image_18.ggParameter);
			}
			this._image_18.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_18.style[domTransition]='none';
				} else {
					me._image_18.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_18.ggParameter.sx=1;me._image_18.ggParameter.sy=1;
				me._image_18.style[domTransform]=parameterToTransform(me._image_18.ggParameter);
			}
			this._image_18.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_18);
			this._hstext8=document.createElement('div');
			this._hstext8__text=document.createElement('div');
			this._hstext8.className='ggskin ggskin_textdiv';
			this._hstext8.ggTextDiv=this._hstext8__text;
			this._hstext8.ggId="hstext";
			this._hstext8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext8.ggVisible=true;
			this._hstext8.className='ggskin ggskin_text ';
			this._hstext8.ggType='text';
			hs ='';
			hs+='height : 24px;';
			hs+='left : -126px;';
			hs+='position : absolute;';
			hs+='top : 23px;';
			hs+='visibility : inherit;';
			hs+='width : 270px;';
			hs+='pointer-events:auto;';
			this._hstext8.setAttribute('style',hs);
			this._hstext8.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.117647);';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext8__text.setAttribute('style',hs);
			this._hstext8__text.innerHTML="<span style=\"font-size: 9px;\">"+me.hotspot.title+"<\/span>";
			this._hstext8.appendChild(this._hstext8__text);
			me._hstext8.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext8.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext8.ggCurrentLogicStateVisible = -1;
			this._hstext8.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext8.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext8.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext8.style[domTransition]='';
					if (me._hstext8.ggCurrentLogicStateVisible == 0) {
						me._hstext8.style.visibility=(Number(me._hstext8.style.opacity)>0||!me._hstext8.style.opacity)?'inherit':'hidden';
						me._hstext8.ggVisible=true;
					}
					else {
						me._hstext8.style.visibility=(Number(me._hstext8.style.opacity)>0||!me._hstext8.style.opacity)?'inherit':'hidden';
						me._hstext8.ggVisible=true;
					}
				}
			}
			this._hstext8.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((272-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._hstext8);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext8.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_gallery-09') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_gallery-09";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 694px;';
			hs+='position : absolute;';
			hs+='top : 52px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.stopAutorotate();
				me.skin._screen_tint.style[domTransition]='none';
				me.skin._screen_tint.style.visibility=(Number(me.skin._screen_tint.style.opacity)>0||!me.skin._screen_tint.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint.ggVisible=true;
				me.skin._gallery_picture09.style[domTransition]='none';
				me.skin._gallery_picture09.style.visibility=(Number(me.skin._gallery_picture09.style.opacity)>0||!me.skin._gallery_picture09.style.opacity)?'inherit':'hidden';
				me.skin._gallery_picture09.ggVisible=true;
				me.skin._screen_tint2.style[domTransition]='none';
				me.skin._screen_tint2.style.visibility=(Number(me.skin._screen_tint2.style.opacity)>0||!me.skin._screen_tint2.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint2.ggVisible=true;
				ggSkinVars['gallery_pictures_1'] = Number("0");
				ggSkinVars['gallery_show_hide'] = true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.player.stopAutorotate();
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.player.startAutorotate("0.01");
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_17=document.createElement('div');
			this._image_17__img=document.createElement('img');
			this._image_17__img.className='ggskin ggskin_image';
			this._image_17__img.setAttribute('src',basePath + 'images/image_17.png');
			this._image_17__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_17__img.className='ggskin ggskin_image';
			this._image_17__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_17__img);
			this._image_17.appendChild(this._image_17__img);
			this._image_17.ggId="Image 1";
			this._image_17.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_17.ggVisible=true;
			this._image_17.className='ggskin ggskin_image ';
			this._image_17.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 40px;';
			hs+='left : -10px;';
			hs+='opacity : 0.9;';
			hs+='position : absolute;';
			hs+='top : -20px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._image_17.setAttribute('style',hs);
			this._image_17.style[domTransform + 'Origin']='50% 50%';
			me._image_17.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_17.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_17.onmouseover=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_17.style[domTransition]='none';
				} else {
					me._image_17.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_17.ggParameter.sx=1.25;me._image_17.ggParameter.sy=1.25;
				me._image_17.style[domTransform]=parameterToTransform(me._image_17.ggParameter);
			}
			this._image_17.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_17.style[domTransition]='none';
				} else {
					me._image_17.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_17.ggParameter.sx=1;me._image_17.ggParameter.sy=1;
				me._image_17.style[domTransform]=parameterToTransform(me._image_17.ggParameter);
			}
			this._image_17.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_17);
			this._hstext7=document.createElement('div');
			this._hstext7__text=document.createElement('div');
			this._hstext7.className='ggskin ggskin_textdiv';
			this._hstext7.ggTextDiv=this._hstext7__text;
			this._hstext7.ggId="hstext";
			this._hstext7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext7.ggVisible=true;
			this._hstext7.className='ggskin ggskin_text ';
			this._hstext7.ggType='text';
			hs ='';
			hs+='height : 24px;';
			hs+='left : -126px;';
			hs+='position : absolute;';
			hs+='top : 23px;';
			hs+='visibility : inherit;';
			hs+='width : 270px;';
			hs+='pointer-events:auto;';
			this._hstext7.setAttribute('style',hs);
			this._hstext7.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.117647);';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext7__text.setAttribute('style',hs);
			this._hstext7__text.innerHTML="<span style=\"font-size: 9px;\">"+me.hotspot.title+"<\/span>";
			this._hstext7.appendChild(this._hstext7__text);
			me._hstext7.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext7.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext7.ggCurrentLogicStateVisible = -1;
			this._hstext7.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext7.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext7.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext7.style[domTransition]='';
					if (me._hstext7.ggCurrentLogicStateVisible == 0) {
						me._hstext7.style.visibility=(Number(me._hstext7.style.opacity)>0||!me._hstext7.style.opacity)?'inherit':'hidden';
						me._hstext7.ggVisible=true;
					}
					else {
						me._hstext7.style.visibility=(Number(me._hstext7.style.opacity)>0||!me._hstext7.style.opacity)?'inherit':'hidden';
						me._hstext7.ggVisible=true;
					}
				}
			}
			this._hstext7.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((272-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._hstext7);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext7.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_gallery-07') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_gallery-07";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 694px;';
			hs+='position : absolute;';
			hs+='top : 52px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.stopAutorotate();
				me.skin._screen_tint.style[domTransition]='none';
				me.skin._screen_tint.style.visibility=(Number(me.skin._screen_tint.style.opacity)>0||!me.skin._screen_tint.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint.ggVisible=true;
				me.skin._gallery_picture07.style[domTransition]='none';
				me.skin._gallery_picture07.style.visibility=(Number(me.skin._gallery_picture07.style.opacity)>0||!me.skin._gallery_picture07.style.opacity)?'inherit':'hidden';
				me.skin._gallery_picture07.ggVisible=true;
				me.skin._screen_tint2.style[domTransition]='none';
				me.skin._screen_tint2.style.visibility=(Number(me.skin._screen_tint2.style.opacity)>0||!me.skin._screen_tint2.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint2.ggVisible=true;
				ggSkinVars['gallery_pictures_1'] = Number("0");
				ggSkinVars['gallery_show_hide'] = true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.player.stopAutorotate();
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.player.startAutorotate("0.01");
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_16=document.createElement('div');
			this._image_16__img=document.createElement('img');
			this._image_16__img.className='ggskin ggskin_image';
			this._image_16__img.setAttribute('src',basePath + 'images/image_16.png');
			this._image_16__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_16__img.className='ggskin ggskin_image';
			this._image_16__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_16__img);
			this._image_16.appendChild(this._image_16__img);
			this._image_16.ggId="Image 1";
			this._image_16.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_16.ggVisible=true;
			this._image_16.className='ggskin ggskin_image ';
			this._image_16.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 40px;';
			hs+='left : -10px;';
			hs+='opacity : 0.9;';
			hs+='position : absolute;';
			hs+='top : -20px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._image_16.setAttribute('style',hs);
			this._image_16.style[domTransform + 'Origin']='50% 50%';
			me._image_16.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_16.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_16.onmouseover=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_16.style[domTransition]='none';
				} else {
					me._image_16.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_16.ggParameter.sx=1.25;me._image_16.ggParameter.sy=1.25;
				me._image_16.style[domTransform]=parameterToTransform(me._image_16.ggParameter);
			}
			this._image_16.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_16.style[domTransition]='none';
				} else {
					me._image_16.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_16.ggParameter.sx=1;me._image_16.ggParameter.sy=1;
				me._image_16.style[domTransform]=parameterToTransform(me._image_16.ggParameter);
			}
			this._image_16.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_16);
			this._hstext6=document.createElement('div');
			this._hstext6__text=document.createElement('div');
			this._hstext6.className='ggskin ggskin_textdiv';
			this._hstext6.ggTextDiv=this._hstext6__text;
			this._hstext6.ggId="hstext";
			this._hstext6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext6.ggVisible=true;
			this._hstext6.className='ggskin ggskin_text ';
			this._hstext6.ggType='text';
			hs ='';
			hs+='height : 24px;';
			hs+='left : -126px;';
			hs+='position : absolute;';
			hs+='top : 23px;';
			hs+='visibility : inherit;';
			hs+='width : 270px;';
			hs+='pointer-events:auto;';
			this._hstext6.setAttribute('style',hs);
			this._hstext6.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.117647);';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext6__text.setAttribute('style',hs);
			this._hstext6__text.innerHTML="<span style=\"font-size: 9px;\">"+me.hotspot.title+"<\/span>";
			this._hstext6.appendChild(this._hstext6__text);
			me._hstext6.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext6.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext6.ggCurrentLogicStateVisible = -1;
			this._hstext6.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext6.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext6.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext6.style[domTransition]='';
					if (me._hstext6.ggCurrentLogicStateVisible == 0) {
						me._hstext6.style.visibility=(Number(me._hstext6.style.opacity)>0||!me._hstext6.style.opacity)?'inherit':'hidden';
						me._hstext6.ggVisible=true;
					}
					else {
						me._hstext6.style.visibility=(Number(me._hstext6.style.opacity)>0||!me._hstext6.style.opacity)?'inherit':'hidden';
						me._hstext6.ggVisible=true;
					}
				}
			}
			this._hstext6.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((272-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._hstext6);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext6.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_gallery-06') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_gallery-06";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 694px;';
			hs+='position : absolute;';
			hs+='top : 52px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.stopAutorotate();
				me.skin._screen_tint.style[domTransition]='none';
				me.skin._screen_tint.style.visibility=(Number(me.skin._screen_tint.style.opacity)>0||!me.skin._screen_tint.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint.ggVisible=true;
				me.skin._gallery_picture06.style[domTransition]='none';
				me.skin._gallery_picture06.style.visibility=(Number(me.skin._gallery_picture06.style.opacity)>0||!me.skin._gallery_picture06.style.opacity)?'inherit':'hidden';
				me.skin._gallery_picture06.ggVisible=true;
				me.skin._screen_tint2.style[domTransition]='none';
				me.skin._screen_tint2.style.visibility=(Number(me.skin._screen_tint2.style.opacity)>0||!me.skin._screen_tint2.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint2.ggVisible=true;
				ggSkinVars['gallery_pictures_1'] = Number("0");
				ggSkinVars['gallery_show_hide'] = true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.player.stopAutorotate();
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.player.startAutorotate("0.01");
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_15=document.createElement('div');
			this._image_15__img=document.createElement('img');
			this._image_15__img.className='ggskin ggskin_image';
			this._image_15__img.setAttribute('src',basePath + 'images/image_15.png');
			this._image_15__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_15__img.className='ggskin ggskin_image';
			this._image_15__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_15__img);
			this._image_15.appendChild(this._image_15__img);
			this._image_15.ggId="Image 1";
			this._image_15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_15.ggVisible=true;
			this._image_15.className='ggskin ggskin_image ';
			this._image_15.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 40px;';
			hs+='left : -10px;';
			hs+='opacity : 0.9;';
			hs+='position : absolute;';
			hs+='top : -20px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._image_15.setAttribute('style',hs);
			this._image_15.style[domTransform + 'Origin']='50% 50%';
			me._image_15.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_15.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_15.onmouseover=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_15.style[domTransition]='none';
				} else {
					me._image_15.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_15.ggParameter.sx=1.25;me._image_15.ggParameter.sy=1.25;
				me._image_15.style[domTransform]=parameterToTransform(me._image_15.ggParameter);
			}
			this._image_15.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_15.style[domTransition]='none';
				} else {
					me._image_15.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_15.ggParameter.sx=1;me._image_15.ggParameter.sy=1;
				me._image_15.style[domTransform]=parameterToTransform(me._image_15.ggParameter);
			}
			this._image_15.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_15);
			this._hstext5=document.createElement('div');
			this._hstext5__text=document.createElement('div');
			this._hstext5.className='ggskin ggskin_textdiv';
			this._hstext5.ggTextDiv=this._hstext5__text;
			this._hstext5.ggId="hstext";
			this._hstext5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext5.ggVisible=true;
			this._hstext5.className='ggskin ggskin_text ';
			this._hstext5.ggType='text';
			hs ='';
			hs+='height : 24px;';
			hs+='left : -126px;';
			hs+='position : absolute;';
			hs+='top : 23px;';
			hs+='visibility : inherit;';
			hs+='width : 270px;';
			hs+='pointer-events:auto;';
			this._hstext5.setAttribute('style',hs);
			this._hstext5.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.117647);';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext5__text.setAttribute('style',hs);
			this._hstext5__text.innerHTML="<span style=\"font-size: 9px;\">"+me.hotspot.title+"<\/span>";
			this._hstext5.appendChild(this._hstext5__text);
			me._hstext5.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext5.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext5.ggCurrentLogicStateVisible = -1;
			this._hstext5.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext5.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext5.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext5.style[domTransition]='';
					if (me._hstext5.ggCurrentLogicStateVisible == 0) {
						me._hstext5.style.visibility=(Number(me._hstext5.style.opacity)>0||!me._hstext5.style.opacity)?'inherit':'hidden';
						me._hstext5.ggVisible=true;
					}
					else {
						me._hstext5.style.visibility=(Number(me._hstext5.style.opacity)>0||!me._hstext5.style.opacity)?'inherit':'hidden';
						me._hstext5.ggVisible=true;
					}
				}
			}
			this._hstext5.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((272-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._hstext5);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext5.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_gallery-05-1') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_gallery-05-1";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 694px;';
			hs+='position : absolute;';
			hs+='top : 52px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.stopAutorotate();
				me.skin._screen_tint.style[domTransition]='none';
				me.skin._screen_tint.style.visibility=(Number(me.skin._screen_tint.style.opacity)>0||!me.skin._screen_tint.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint.ggVisible=true;
				me.skin._gallery_picture051.style[domTransition]='none';
				me.skin._gallery_picture051.style.visibility=(Number(me.skin._gallery_picture051.style.opacity)>0||!me.skin._gallery_picture051.style.opacity)?'inherit':'hidden';
				me.skin._gallery_picture051.ggVisible=true;
				me.skin._screen_tint2.style[domTransition]='none';
				me.skin._screen_tint2.style.visibility=(Number(me.skin._screen_tint2.style.opacity)>0||!me.skin._screen_tint2.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint2.ggVisible=true;
				ggSkinVars['gallery_pictures_1'] = Number("0");
				ggSkinVars['gallery_show_hide'] = true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.player.stopAutorotate();
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.player.startAutorotate("0.01");
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_14=document.createElement('div');
			this._image_14__img=document.createElement('img');
			this._image_14__img.className='ggskin ggskin_image';
			this._image_14__img.setAttribute('src',basePath + 'images/image_14.png');
			this._image_14__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_14__img.className='ggskin ggskin_image';
			this._image_14__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_14__img);
			this._image_14.appendChild(this._image_14__img);
			this._image_14.ggId="Image 1";
			this._image_14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_14.ggVisible=true;
			this._image_14.className='ggskin ggskin_image ';
			this._image_14.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 40px;';
			hs+='left : -10px;';
			hs+='opacity : 0.9;';
			hs+='position : absolute;';
			hs+='top : -20px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._image_14.setAttribute('style',hs);
			this._image_14.style[domTransform + 'Origin']='50% 50%';
			me._image_14.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_14.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_14.onmouseover=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_14.style[domTransition]='none';
				} else {
					me._image_14.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_14.ggParameter.sx=1.25;me._image_14.ggParameter.sy=1.25;
				me._image_14.style[domTransform]=parameterToTransform(me._image_14.ggParameter);
			}
			this._image_14.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_14.style[domTransition]='none';
				} else {
					me._image_14.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_14.ggParameter.sx=1;me._image_14.ggParameter.sy=1;
				me._image_14.style[domTransform]=parameterToTransform(me._image_14.ggParameter);
			}
			this._image_14.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_14);
			this._hstext4=document.createElement('div');
			this._hstext4__text=document.createElement('div');
			this._hstext4.className='ggskin ggskin_textdiv';
			this._hstext4.ggTextDiv=this._hstext4__text;
			this._hstext4.ggId="hstext";
			this._hstext4.ggLeft=-382;
			this._hstext4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext4.ggVisible=true;
			this._hstext4.className='ggskin ggskin_text ';
			this._hstext4.ggType='text';
			hs ='';
			hs+='height : 21px;';
			hs+='left : -382px;';
			hs+='position : absolute;';
			hs+='top : 16px;';
			hs+='visibility : inherit;';
			hs+='width : 397px;';
			hs+='pointer-events:auto;';
			this._hstext4.setAttribute('style',hs);
			this._hstext4.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.117647);';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: right;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext4__text.setAttribute('style',hs);
			this._hstext4__text.innerHTML="<span style=\"font-size: 9px;\">\u0421\u0422\u0420\u041e\u0418\u0422\u0415\u041b\u042c\u0421\u0422\u0412\u041e \u041a\u041e\u041c\u041f\u041b\u0415\u041a\u0421\u041e\u0412 \u041e\u0427\u0418\u0421\u0422\u041d\u042b\u0425 \u0421\u041e\u041e\u0420\u0423\u0416\u0415\u041d\u0418\u0419, 2014-2015\u0433.<\/span>";
			this._hstext4.appendChild(this._hstext4__text);
			me._hstext4.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext4.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext4.ggCurrentLogicStateVisible = -1;
			this._hstext4.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext4.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext4.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext4.style[domTransition]='';
					if (me._hstext4.ggCurrentLogicStateVisible == 0) {
						me._hstext4.style.visibility=(Number(me._hstext4.style.opacity)>0||!me._hstext4.style.opacity)?'inherit':'hidden';
						me._hstext4.ggVisible=true;
					}
					else {
						me._hstext4.style.visibility=(Number(me._hstext4.style.opacity)>0||!me._hstext4.style.opacity)?'inherit':'hidden';
						me._hstext4.ggVisible=true;
					}
				}
			}
			this._hstext4.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w) + 'px';
				}
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((399-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._hstext4);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext4.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_gallery-05') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_gallery-05";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 694px;';
			hs+='position : absolute;';
			hs+='top : 52px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.stopAutorotate();
				me.skin._screen_tint.style[domTransition]='none';
				me.skin._screen_tint.style.visibility=(Number(me.skin._screen_tint.style.opacity)>0||!me.skin._screen_tint.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint.ggVisible=true;
				me.skin._gallery_picture05.style[domTransition]='none';
				me.skin._gallery_picture05.style.visibility=(Number(me.skin._gallery_picture05.style.opacity)>0||!me.skin._gallery_picture05.style.opacity)?'inherit':'hidden';
				me.skin._gallery_picture05.ggVisible=true;
				me.skin._screen_tint2.style[domTransition]='none';
				me.skin._screen_tint2.style.visibility=(Number(me.skin._screen_tint2.style.opacity)>0||!me.skin._screen_tint2.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint2.ggVisible=true;
				ggSkinVars['gallery_pictures_1'] = Number("0");
				ggSkinVars['gallery_show_hide'] = true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.player.stopAutorotate();
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.player.startAutorotate("0.01");
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_13=document.createElement('div');
			this._image_13__img=document.createElement('img');
			this._image_13__img.className='ggskin ggskin_image';
			this._image_13__img.setAttribute('src',basePath + 'images/image_13.png');
			this._image_13__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_13__img.className='ggskin ggskin_image';
			this._image_13__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_13__img);
			this._image_13.appendChild(this._image_13__img);
			this._image_13.ggId="Image 1";
			this._image_13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_13.ggVisible=true;
			this._image_13.className='ggskin ggskin_image ';
			this._image_13.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 40px;';
			hs+='left : -10px;';
			hs+='opacity : 0.9;';
			hs+='position : absolute;';
			hs+='top : -20px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._image_13.setAttribute('style',hs);
			this._image_13.style[domTransform + 'Origin']='50% 50%';
			me._image_13.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_13.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_13.onmouseover=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_13.style[domTransition]='none';
				} else {
					me._image_13.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_13.ggParameter.sx=1.25;me._image_13.ggParameter.sy=1.25;
				me._image_13.style[domTransform]=parameterToTransform(me._image_13.ggParameter);
			}
			this._image_13.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_13.style[domTransition]='none';
				} else {
					me._image_13.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_13.ggParameter.sx=1;me._image_13.ggParameter.sy=1;
				me._image_13.style[domTransform]=parameterToTransform(me._image_13.ggParameter);
			}
			this._image_13.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_13);
			this._hstext3=document.createElement('div');
			this._hstext3__text=document.createElement('div');
			this._hstext3.className='ggskin ggskin_textdiv';
			this._hstext3.ggTextDiv=this._hstext3__text;
			this._hstext3.ggId="hstext";
			this._hstext3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext3.ggVisible=true;
			this._hstext3.className='ggskin ggskin_text ';
			this._hstext3.ggType='text';
			hs ='';
			hs+='height : 21px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 10px;';
			hs+='visibility : inherit;';
			hs+='width : 270px;';
			hs+='pointer-events:auto;';
			this._hstext3.setAttribute('style',hs);
			this._hstext3.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.117647);';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: left;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext3__text.setAttribute('style',hs);
			this._hstext3__text.innerHTML="<span style=\"font-size: 9px;\">\u0421\u0422\u0420\u041e\u0418\u0422\u0415\u041b\u042c\u0421\u0422\u0412\u041e \u041a\u041e\u041c\u041f\u041b\u0415\u041a\u0421\u041e\u0412 \u041e\u0427\u0418\u0421\u0422\u041d\u042b\u0425 \u0421\u041e\u041e\u0420\u0423\u0416\u0415\u041d\u0418\u0419, 2014-2015\u0433.<\/span>";
			this._hstext3.appendChild(this._hstext3__text);
			me._hstext3.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext3.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext3.ggCurrentLogicStateVisible = -1;
			this._hstext3.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext3.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext3.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext3.style[domTransition]='';
					if (me._hstext3.ggCurrentLogicStateVisible == 0) {
						me._hstext3.style.visibility=(Number(me._hstext3.style.opacity)>0||!me._hstext3.style.opacity)?'inherit':'hidden';
						me._hstext3.ggVisible=true;
					}
					else {
						me._hstext3.style.visibility=(Number(me._hstext3.style.opacity)>0||!me._hstext3.style.opacity)?'inherit':'hidden';
						me._hstext3.ggVisible=true;
					}
				}
			}
			this._hstext3.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._hstext3);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext3.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_gallery-04') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_gallery-04";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 694px;';
			hs+='position : absolute;';
			hs+='top : 52px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.stopAutorotate();
				me.skin._screen_tint.style[domTransition]='none';
				me.skin._screen_tint.style.visibility=(Number(me.skin._screen_tint.style.opacity)>0||!me.skin._screen_tint.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint.ggVisible=true;
				me.skin._gallery_picture04.style[domTransition]='none';
				me.skin._gallery_picture04.style.visibility=(Number(me.skin._gallery_picture04.style.opacity)>0||!me.skin._gallery_picture04.style.opacity)?'inherit':'hidden';
				me.skin._gallery_picture04.ggVisible=true;
				me.skin._screen_tint2.style[domTransition]='none';
				me.skin._screen_tint2.style.visibility=(Number(me.skin._screen_tint2.style.opacity)>0||!me.skin._screen_tint2.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint2.ggVisible=true;
				ggSkinVars['gallery_pictures_1'] = Number("0");
				ggSkinVars['gallery_show_hide'] = true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.player.stopAutorotate();
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.player.startAutorotate("0.01");
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_12=document.createElement('div');
			this._image_12__img=document.createElement('img');
			this._image_12__img.className='ggskin ggskin_image';
			this._image_12__img.setAttribute('src',basePath + 'images/image_12.png');
			this._image_12__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_12__img.className='ggskin ggskin_image';
			this._image_12__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_12__img);
			this._image_12.appendChild(this._image_12__img);
			this._image_12.ggId="Image 1";
			this._image_12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_12.ggVisible=true;
			this._image_12.className='ggskin ggskin_image ';
			this._image_12.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 40px;';
			hs+='left : -10px;';
			hs+='opacity : 0.9;';
			hs+='position : absolute;';
			hs+='top : -20px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._image_12.setAttribute('style',hs);
			this._image_12.style[domTransform + 'Origin']='50% 50%';
			me._image_12.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_12.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_12.onmouseover=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_12.style[domTransition]='none';
				} else {
					me._image_12.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_12.ggParameter.sx=1.25;me._image_12.ggParameter.sy=1.25;
				me._image_12.style[domTransform]=parameterToTransform(me._image_12.ggParameter);
			}
			this._image_12.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_12.style[domTransition]='none';
				} else {
					me._image_12.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_12.ggParameter.sx=1;me._image_12.ggParameter.sy=1;
				me._image_12.style[domTransform]=parameterToTransform(me._image_12.ggParameter);
			}
			this._image_12.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_12);
			this._hstext2=document.createElement('div');
			this._hstext2__text=document.createElement('div');
			this._hstext2.className='ggskin ggskin_textdiv';
			this._hstext2.ggTextDiv=this._hstext2__text;
			this._hstext2.ggId="hstext";
			this._hstext2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext2.ggVisible=true;
			this._hstext2.className='ggskin ggskin_text ';
			this._hstext2.ggType='text';
			hs ='';
			hs+='height : 18px;';
			hs+='left : 2px;';
			hs+='position : absolute;';
			hs+='top : 17px;';
			hs+='visibility : inherit;';
			hs+='width : 96px;';
			hs+='pointer-events:auto;';
			this._hstext2.setAttribute('style',hs);
			this._hstext2.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.117647);';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: left;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext2__text.setAttribute('style',hs);
			this._hstext2__text.innerHTML="<span style=\"font-size: 9px;\">"+me.hotspot.title+"<\/span>";
			this._hstext2.appendChild(this._hstext2__text);
			me._hstext2.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext2.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext2.ggCurrentLogicStateVisible = -1;
			this._hstext2.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext2.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext2.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext2.style[domTransition]='';
					if (me._hstext2.ggCurrentLogicStateVisible == 0) {
						me._hstext2.style.visibility=(Number(me._hstext2.style.opacity)>0||!me._hstext2.style.opacity)?'inherit':'hidden';
						me._hstext2.ggVisible=true;
					}
					else {
						me._hstext2.style.visibility=(Number(me._hstext2.style.opacity)>0||!me._hstext2.style.opacity)?'inherit':'hidden';
						me._hstext2.ggVisible=true;
					}
				}
			}
			this._hstext2.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._hstext2);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext2.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_gallery-03') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_gallery-03";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 694px;';
			hs+='position : absolute;';
			hs+='top : 52px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.stopAutorotate();
				me.skin._screen_tint.style[domTransition]='none';
				me.skin._screen_tint.style.visibility=(Number(me.skin._screen_tint.style.opacity)>0||!me.skin._screen_tint.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint.ggVisible=true;
				me.skin._gallery_picture03.style[domTransition]='none';
				me.skin._gallery_picture03.style.visibility=(Number(me.skin._gallery_picture03.style.opacity)>0||!me.skin._gallery_picture03.style.opacity)?'inherit':'hidden';
				me.skin._gallery_picture03.ggVisible=true;
				me.skin._screen_tint2.style[domTransition]='none';
				me.skin._screen_tint2.style.visibility=(Number(me.skin._screen_tint2.style.opacity)>0||!me.skin._screen_tint2.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint2.ggVisible=true;
				ggSkinVars['gallery_pictures_1'] = Number("0");
				ggSkinVars['gallery_show_hide'] = true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.player.stopAutorotate();
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.player.startAutorotate("0.01");
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_11=document.createElement('div');
			this._image_11__img=document.createElement('img');
			this._image_11__img.className='ggskin ggskin_image';
			this._image_11__img.setAttribute('src',basePath + 'images/image_11.png');
			this._image_11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_11__img.className='ggskin ggskin_image';
			this._image_11__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_11__img);
			this._image_11.appendChild(this._image_11__img);
			this._image_11.ggId="Image 1";
			this._image_11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_11.ggVisible=true;
			this._image_11.className='ggskin ggskin_image ';
			this._image_11.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 40px;';
			hs+='left : -10px;';
			hs+='opacity : 0.9;';
			hs+='position : absolute;';
			hs+='top : -20px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._image_11.setAttribute('style',hs);
			this._image_11.style[domTransform + 'Origin']='50% 50%';
			me._image_11.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_11.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_11.onmouseover=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_11.style[domTransition]='none';
				} else {
					me._image_11.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_11.ggParameter.sx=1.25;me._image_11.ggParameter.sy=1.25;
				me._image_11.style[domTransform]=parameterToTransform(me._image_11.ggParameter);
			}
			this._image_11.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_11.style[domTransition]='none';
				} else {
					me._image_11.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_11.ggParameter.sx=1;me._image_11.ggParameter.sy=1;
				me._image_11.style[domTransform]=parameterToTransform(me._image_11.ggParameter);
			}
			this._image_11.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_11);
			this._hstext1=document.createElement('div');
			this._hstext1__text=document.createElement('div');
			this._hstext1.className='ggskin ggskin_textdiv';
			this._hstext1.ggTextDiv=this._hstext1__text;
			this._hstext1.ggId="hstext";
			this._hstext1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext1.ggVisible=true;
			this._hstext1.className='ggskin ggskin_text ';
			this._hstext1.ggType='text';
			hs ='';
			hs+='height : 18px;';
			hs+='left : 2px;';
			hs+='position : absolute;';
			hs+='top : 17px;';
			hs+='visibility : inherit;';
			hs+='width : 96px;';
			hs+='pointer-events:auto;';
			this._hstext1.setAttribute('style',hs);
			this._hstext1.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.117647);';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: left;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext1__text.setAttribute('style',hs);
			this._hstext1__text.innerHTML="<span style=\"font-size: 9px;\">"+me.hotspot.title+"<\/span>";
			this._hstext1.appendChild(this._hstext1__text);
			me._hstext1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext1.ggCurrentLogicStateVisible = -1;
			this._hstext1.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext1.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext1.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext1.style[domTransition]='';
					if (me._hstext1.ggCurrentLogicStateVisible == 0) {
						me._hstext1.style.visibility=(Number(me._hstext1.style.opacity)>0||!me._hstext1.style.opacity)?'inherit':'hidden';
						me._hstext1.ggVisible=true;
					}
					else {
						me._hstext1.style.visibility=(Number(me._hstext1.style.opacity)>0||!me._hstext1.style.opacity)?'inherit':'hidden';
						me._hstext1.ggVisible=true;
					}
				}
			}
			this._hstext1.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._hstext1);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext1.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_gallery-02') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_gallery-02";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 694px;';
			hs+='position : absolute;';
			hs+='top : 52px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.stopAutorotate();
				me.skin._screen_tint.style[domTransition]='none';
				me.skin._screen_tint.style.visibility=(Number(me.skin._screen_tint.style.opacity)>0||!me.skin._screen_tint.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint.ggVisible=true;
				me.skin._gallery_picture02.style[domTransition]='none';
				me.skin._gallery_picture02.style.visibility=(Number(me.skin._gallery_picture02.style.opacity)>0||!me.skin._gallery_picture02.style.opacity)?'inherit':'hidden';
				me.skin._gallery_picture02.ggVisible=true;
				me.skin._screen_tint2.style[domTransition]='none';
				me.skin._screen_tint2.style.visibility=(Number(me.skin._screen_tint2.style.opacity)>0||!me.skin._screen_tint2.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint2.ggVisible=true;
				ggSkinVars['gallery_pictures_1'] = Number("0");
				ggSkinVars['gallery_show_hide'] = true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.player.stopAutorotate();
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.player.startAutorotate("0.01");
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_10=document.createElement('div');
			this._image_10__img=document.createElement('img');
			this._image_10__img.className='ggskin ggskin_image';
			this._image_10__img.setAttribute('src',basePath + 'images/image_10.png');
			this._image_10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_10__img.className='ggskin ggskin_image';
			this._image_10__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_10__img);
			this._image_10.appendChild(this._image_10__img);
			this._image_10.ggId="Image 1";
			this._image_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_10.ggVisible=true;
			this._image_10.className='ggskin ggskin_image ';
			this._image_10.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 40px;';
			hs+='left : -10px;';
			hs+='opacity : 0.9;';
			hs+='position : absolute;';
			hs+='top : -20px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._image_10.setAttribute('style',hs);
			this._image_10.style[domTransform + 'Origin']='50% 50%';
			me._image_10.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_10.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_10.onmouseover=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_10.style[domTransition]='none';
				} else {
					me._image_10.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_10.ggParameter.sx=1.25;me._image_10.ggParameter.sy=1.25;
				me._image_10.style[domTransform]=parameterToTransform(me._image_10.ggParameter);
			}
			this._image_10.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_10.style[domTransition]='none';
				} else {
					me._image_10.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_10.ggParameter.sx=1;me._image_10.ggParameter.sy=1;
				me._image_10.style[domTransform]=parameterToTransform(me._image_10.ggParameter);
			}
			this._image_10.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_10);
			this._hstext0=document.createElement('div');
			this._hstext0__text=document.createElement('div');
			this._hstext0.className='ggskin ggskin_textdiv';
			this._hstext0.ggTextDiv=this._hstext0__text;
			this._hstext0.ggId="hstext";
			this._hstext0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext0.ggVisible=true;
			this._hstext0.className='ggskin ggskin_text ';
			this._hstext0.ggType='text';
			hs ='';
			hs+='height : 18px;';
			hs+='left : 8px;';
			hs+='position : absolute;';
			hs+='top : 11px;';
			hs+='visibility : inherit;';
			hs+='width : 96px;';
			hs+='pointer-events:auto;';
			this._hstext0.setAttribute('style',hs);
			this._hstext0.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.117647);';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: left;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext0__text.setAttribute('style',hs);
			this._hstext0__text.innerHTML="<span style=\"font-size: 9px;\">"+me.hotspot.title+"<\/span>";
			this._hstext0.appendChild(this._hstext0__text);
			me._hstext0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext0.ggCurrentLogicStateVisible = -1;
			this._hstext0.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext0.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext0.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext0.style[domTransition]='';
					if (me._hstext0.ggCurrentLogicStateVisible == 0) {
						me._hstext0.style.visibility=(Number(me._hstext0.style.opacity)>0||!me._hstext0.style.opacity)?'inherit':'hidden';
						me._hstext0.ggVisible=true;
					}
					else {
						me._hstext0.style.visibility=(Number(me._hstext0.style.opacity)>0||!me._hstext0.style.opacity)?'inherit':'hidden';
						me._hstext0.ggVisible=true;
					}
				}
			}
			this._hstext0.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._hstext0);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext0.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_gallery-01";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 694px;';
			hs+='position : absolute;';
			hs+='top : 52px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.stopAutorotate();
				me.skin._screen_tint.style[domTransition]='none';
				me.skin._screen_tint.style.visibility=(Number(me.skin._screen_tint.style.opacity)>0||!me.skin._screen_tint.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint.ggVisible=true;
				me.skin._screen_tint2.style[domTransition]='none';
				me.skin._screen_tint2.style.visibility=(Number(me.skin._screen_tint2.style.opacity)>0||!me.skin._screen_tint2.style.opacity)?'inherit':'hidden';
				me.skin._screen_tint2.ggVisible=true;
				me.skin._gallery_picture01.style[domTransition]='none';
				me.skin._gallery_picture01.style.visibility=(Number(me.skin._gallery_picture01.style.opacity)>0||!me.skin._gallery_picture01.style.opacity)?'inherit':'hidden';
				me.skin._gallery_picture01.ggVisible=true;
				ggSkinVars['gallery_pictures_1'] = Number("0");
				ggSkinVars['gallery_show_hide'] = true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.player.stopAutorotate();
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.player.startAutorotate("0.01");
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._image_1=document.createElement('div');
			this._image_1__img=document.createElement('img');
			this._image_1__img.className='ggskin ggskin_image';
			this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
			this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_1__img.className='ggskin ggskin_image';
			this._image_1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_1__img);
			this._image_1.appendChild(this._image_1__img);
			this._image_1.ggId="Image 1";
			this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_1.ggVisible=true;
			this._image_1.className='ggskin ggskin_image ';
			this._image_1.ggType='image';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 40px;';
			hs+='left : -12px;';
			hs+='opacity : 0.9;';
			hs+='position : absolute;';
			hs+='top : -21px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._image_1.setAttribute('style',hs);
			this._image_1.style[domTransform + 'Origin']='50% 50%';
			me._image_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_1.onmouseover=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_1.style[domTransition]='none';
				} else {
					me._image_1.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_1.ggParameter.sx=1.25;me._image_1.ggParameter.sy=1.25;
				me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
			}
			this._image_1.onmouseout=function (e) {
				if (me.player.transitionsDisabled) {
					me._image_1.style[domTransition]='none';
				} else {
					me._image_1.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_1.ggParameter.sx=1;me._image_1.ggParameter.sy=1;
				me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
			}
			this._image_1.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_1);
			this._hstext=document.createElement('div');
			this._hstext__text=document.createElement('div');
			this._hstext.className='ggskin ggskin_textdiv';
			this._hstext.ggTextDiv=this._hstext__text;
			this._hstext.ggId="hstext";
			this._hstext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext.ggVisible=true;
			this._hstext.className='ggskin ggskin_text ';
			this._hstext.ggType='text';
			hs ='';
			hs+='height : 18px;';
			hs+='left : -46px;';
			hs+='position : absolute;';
			hs+='top : 23px;';
			hs+='visibility : inherit;';
			hs+='width : 96px;';
			hs+='pointer-events:auto;';
			this._hstext.setAttribute('style',hs);
			this._hstext.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.117647);';
			hs+='border: 0px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext__text.setAttribute('style',hs);
			this._hstext__text.innerHTML="<span style=\"font-size: 9px;\">"+me.hotspot.title+"<\/span>";
			this._hstext.appendChild(this._hstext__text);
			me._hstext.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext.ggCurrentLogicStateVisible = -1;
			this._hstext.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext.style[domTransition]='';
					if (me._hstext.ggCurrentLogicStateVisible == 0) {
						me._hstext.style.visibility=(Number(me._hstext.style.opacity)>0||!me._hstext.style.opacity)?'inherit':'hidden';
						me._hstext.ggVisible=true;
					}
					else {
						me._hstext.style.visibility=(Number(me._hstext.style.opacity)>0||!me._hstext.style.opacity)?'inherit':'hidden';
						me._hstext.ggVisible=true;
					}
				}
			}
			this._hstext.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._hstext);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};