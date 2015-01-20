/*!
 * Title: Wintour Slide - Easy element banner using jQuery.
 * Author: jiabing@wintour.cn & sam.zeng@wintour.cn
 * Date: 9/11/2011
 * Rebuild: 15/03/2012 sam.zeng@wintour.cn
 */
$.fn.dossmSlide=function(o){return $(this).each(function(){o=$.extend($.fn.dossmSlide.defaults,o||{});var _self=$(this).children();var titleShow=function(alt){if(o.titleShow){$('.slide-title-text').html(alt);$('.slide-title-text, .slide-title-bg').show();}}
var createAlt=function(){var slideTitleBg=$('<div class="slide-title-bg"></div>'),slideTitleTxt=$('<div class="slide-title-text"></div>');_self.parent().append(slideTitleBg);_self.parent().append(slideTitleTxt);$('.slide-title-bg').css('opacity',o.opacity);var alt=_self.attr('alt');if(!alt){alt=_self.find('img').eq(0).attr('alt');}
if(alt){$('.slide-title-text').html(alt);$('.slide-title-text, .slide-title-bg').show();}else{$('.slide-title-text').hide();$('.slide-title-bg').show();}}
if(o.titleShow){createAlt();}
_self.css('position','absolute');var thumbObj;var size=_self.size();if(o.switchBtn){var str=' <div class="'+splitClass(o.switchBtnClass)+'">';str+=' <a href="javascript:;" class="'+splitClass(o.botPrev)+'" title="'+o.prevText+'">'+o.prevText+'</a>';if(o.pauseState&&o.autoPlay){str+=' <a href="javascript:;" class="'+splitClass(o.botPause)+'" title="'+o.pauseText+'">'+o.pauseText+'</a>';}
if(o.pauseState&&!o.autoPlay){str+=' <a href="javascript:;" class="'+splitClass(o.botPause)+' '+splitClass(o.botPlay)+'" title="'+o.playText+'">'+o.playText+'</a>';}
str+=' <a href="javascript:;" class="'+splitClass(o.botNext)+'" title="'+o.nextText+'">'+o.nextText+'</a>';str+='</div>';if(size>1){_self.parent().append(str);}
$(o.switchBtnClass+' > a').each(function(){$(this).hover(function(){$(this).addClass('hover');},function(){$(this).removeClass('hover');});});}
if(o.controlnaviThumbs){var str1='<div class="trigger-wrap"><div class="trigger-wrap-l"></div><div class="trigger-wrap-r"></div><div class="trigger-inner"><ul class="'+splitClass(o.thumbObj).split(' ')[0]+'">';for(var i=0;i<size;i++){if(_self.eq(i).is('a'))
str1+='<li><img src="'+_self.eq(i).find('img:first').attr("src").split(o.controlnaviThumbsSearch)[0]+o.controlnaviThumbsReplace+'" alt=""></li>';else
str1+='<li><img src="'+_self.eq(i).attr("src").split(o.controlnaviThumbsSearch)[0]+o.controlnaviThumbsReplace+'" alt=""></li>';}
str1+='</ul></div></div>';_self.parent().append(str1);}
if(o.controlnavi){var str2='<div class="trigger-wrap"><div class="trigger-wrap-l"></div><div class="trigger-wrap-r"></div><div class="trigger-inner"><ul class="'+splitClass(o.thumbObj).split(' ')[0]+'">';for(var i=1;i<=size;i++){str2+='<li><span>'+i+'</span></li>';}
str2+='</ul></div></div>';_self.parent().append(str2);}
var nowIndex=0;var index;var startRun;var delayRun;function splitClass(o){return o.substring(1,o.length);}
var fadeAB=function(){if(nowIndex!==index){if(o.thumbObj){$(o.thumbObj).removeClass(o.thumbNowClass).eq(index).addClass(o.thumbNowClass);}
if(o.slideTime<=0){_self.eq(nowIndex).hide();_self.eq(index).show();}else if(o.effect==='fade'){_self.eq(nowIndex).fadeOut(o.slideTime);_self.eq(index).fadeIn(o.slideTime);}else if(o.effect==='slide'){_self.css('position','static');_self.eq(nowIndex).slideUp(o.slideTime+400);_self.eq(index).slideDown(o.slideTime);}if(o.effect==='animateLR'){_self.eq(nowIndex).animate({left:_self.width()},o.slideTime+400,function(){$(this).hide()});_self.eq(index).show().animate({left:0},o.slideTime);}if(o.effect==='animate'){_self.eq(nowIndex).animate({top:_self.height()},o.slideTime+400,function(){$(this).hide()});_self.eq(index).show().animate({top:0},o.slideTime);}
clearTimeout(startRun);startRun=setTimeout(runNext,o.changeTime);nowIndex=index;if(o.explainImg){var alt=_self.eq(index).attr('alt');if(!alt){alt=_self.eq(index).find('img').eq(0).attr('alt');}
if(alt){titleShow(alt);}
else{$('.slide-title-text').hide();$('.slide-title-bg').show();}}}}
var runNext=function(){index=(nowIndex+1)%size;fadeAB();}
_self.hide().eq(0).show();if(o.thumbObj){thumbObj=$(o.thumbObj);thumbObj.removeClass(o.thumbNowClass).eq(0).addClass(o.thumbNowClass);thumbObj.click(function(){index=thumbObj.index($(this));fadeAB();if(o.clickFalse){return false;}});if(o.thumbOverEvent){thumbObj.hover(function(){index=thumbObj.index($(this));delayRun=setTimeout(fadeAB,o.delayTime);},function(){clearTimeout(delayRun);});}}
if(o.botNext){$(o.botNext).hover(function(){$(this).addClass('hover');},function(){$(this).removeClass('hover');}).click(function(){if(_self.queue().length<1){runNext();}
return false;});}
if(o.botPrev){$(o.botPrev).click(function(){if(_self.queue().length<1){index=(nowIndex+size-1)%size;fadeAB();}
return false;});}
var numIndex=o.autoPlay;var textPause=o.pauseText;if(o.botPause){$(o.botPause).click(function(){if(numIndex){numIndex=false;$(this).attr('title',o.playText).html(o.playText).addClass(splitClass(o.botPlay));clearTimeout(startRun);}else{numIndex=true;$(this).attr('title',o.pauseText).html(o.pauseText).removeClass(splitClass(o.botPlay));startRun=setTimeout(runNext,o.changeTime);}});}
if(o.switchState==='no'){$(o.switchBtnClass).hide();}
if(o.switchState==='hover'){$(o.switchBtnClass).hide();_self.parent().hover(function(){if($(o.switchBtnClass).length&&$(o.switchBtnClass).is(':hidden')){$(o.switchBtnClass).show();}},function(){if($(o.switchBtnClass).length&&!$(o.switchBtnClass).is(':hidden')){$(o.switchBtnClass).hide();}});}
if(o.autoPlay){startRun=setTimeout(runNext,o.changeTime);if(o.overStop){_self.hover(function(){clearTimeout(startRun);},function(){if(numIndex){startRun=setTimeout(runNext,o.changeTime);}});}
if(o.explainImg){$('.slide-title-text , '+o.switchBtnClass).hover(function(){clearTimeout(startRun);},function(){if(numIndex){startRun=setTimeout(runNext,o.changeTime);}});}}});}
$.fn.dossmSlide.defaults={thumbObj:'.trigger-list span',botPrev:'.slide-prev',botNext:'.slide-next',botPause:'.slide-pause',botPlay:'.slide-play',prevText:'Prev',nextText:'Next',pauseText:'Pause',playText:'Play',pauseState:false,switchBtnClass:'.btn-switch',switchState:null,explainImg:true,switchBtn:true,controlnavi:true,controlnaviThumbs:false,controlnaviThumbsSearch:'.jpg',controlnaviThumbsReplace:'-thumb.jpg',effect:'fade',thumbNowClass:'active',thumbOverEvent:false,slideTime:1000,autoPlay:true,clickFalse:true,overStop:true,titleShow:false,changeTime:5000,delayTime:300,opacity:0.7}