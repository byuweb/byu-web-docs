var animate=function(){var n,a,l=(a=(n=[0,6e-5,24e-5,54e-5,97e-5,.00153,.00221,.00303,.00398,.00506,.00629,.00765,.00916,.01081,.0126,.01455,.01664,.01889,.0213,.02386,.02658,.02946,.0325,.03571,.03908,.04262,.04632,.05019,.05423,.05844,.06283,.06738,.0721,.07699,.08206,.0873,.0927,.09827,.104,.1099,.11597,.12219,.12857,.1351,.14179,.14861,.15559,.16271,.16995,.17734,.18484,.19247,.20021,.20805,.216,.22405,.23219,.24041,.24871,.25708,.26552,.27401,.28256,.29114,.29978,.30844,.31712,.32583,.33455,.34328,.352,.36073,.36945,.37815,.38682,.39548,.40411,.41269,.42126,.42977,.43824,.44666,.45502,.46334,.4716,.4798,.48793,.496,.50399,.51192,.51978,.52757,.53528,.54293,.55049,.55796,.56538,.5727,.57996,.58713,.59421,.60122,.60815,.615,.62175,.62844,.63504,.64157,.648,.65437,.66064,.66684,.67296,.679,.68496,.69084,.69665,.70238,.70803,.7136,.71911,.72452,.72988,.73515,.74036,.74549,.75054,.75554,.76045,.7653,.77007,.77479,.77942,.784,.78851,.79295,.79733,.80163,.80589,.81007,.81419,.81825,.82225,.82619,.83007,.83388,.83765,.84135,.845,.84858,.85211,.85559,.85902,.86239,.8657,.86895,.87217,.87532,.87842,.88149,.88448,.88743,.89034,.89319,.896,.89876,.90147,.90414,.90675,.90933,.91185,.91434,.91678,.91917,.92152,.92383,.92609,.92831,.93049,.93264,.93473,.9368,.93881,.94079,.94273,.94463,.9465,.94832,.95011,.95186,.95357,.95525,.95689,.95849,.96006,.9616,.96309,.96455,.96599,.96738,.96874,.97007,.97136,.97263,.97386,.97506,.97623,.97736,.97847,.97954,.98058,.98159,.98258,.98353,.98445,.98535,.98621,.98705,.98786,.98864,.98939,.99011,.99081,.99147,.99212,.99273,.99332,.99388,.99442,.99493,.99541,.99587,.9963,.99671,.99709,.99745,.99779,.9981,.99838,.99865,.99888,.9991,.99929,.99946,.9996,.99972,.99982,.9999,.99996,.99999,1]).length-1,function(t){var e=Math.round(t*a);return n[e]}),u="animating";return{animateHeight:function(e,t){var a,s,i,r,n=Object.assign({start:0,end:100,fadeIn:!0,duration:200,units:"px"},t),o=l;e.style.height=n.start+n.units,addClass(e,u),e.animation=(a={duration:n.duration,delta:o,step:function(t){e.style.height=n.start+(n.end-n.start)*t+n.units},finish:function(){removeClass(e,u),e.style.removeProperty("height"),"function"==typeof n.finish&&n.finish()},interrupt:function(){removeClass(e,u),e.style.removeProperty("height"),"function"==typeof n.interrupt&&n.interrupt()}},s=new Date,i=!1,r=function(){var t=new Date-s,e=t/a.duration;1<e&&(e=1);var n=a.delta(e);a.step(n),i&&a.interrupt?a.interrupt():e<1?window.requestAnimationFrame(r):a.finish&&a.finish()},window.requestAnimationFrame(r),{stop:function(){i=!0}})},getNaturalHeight:function(t){var e,n;return n=(e=function(t,e){var n=document.createElement(e);for(t.appendChild(n);t.firstChild&&t.firstChild!==n;)n.appendChild(t.firstChild);return n}(t,"div")).offsetHeight,function(t){for(var e=t.parentNode;t.firstChild;)e.insertBefore(t.firstChild,t);e.removeChild(t)}(e),n}}}(),byu_main=function(){var e=document;return HTMLElement.prototype.hasClass=function(t){return this.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))},HTMLElement.prototype.addClass=function(t){for(var e=t.split(","),n=0;n<e.length;n++)-1==(" "+this.className+" ").indexOf(" "+e[n]+" ")&&(this.className+=" "+e[n]);return this},HTMLElement.prototype.removeClass=function(t){if(this.hasClass(t)){var e=new RegExp("(\\s|^)"+t+"(\\s|$)");this.className=this.className.replace(e," ")}return this},{executeOnLoad:function(t){"loading"!=e.readyState?t():e.addEventListener?e.addEventListener("DOMContentLoaded",t):e.attachEvent("onreadystatechange",function(){"complete"==e.readyState&&t()})}}}(),byu_table=function(){"use strict";var a=document;function s(t){var e=t.offsetWidth,n=t.getElementsByTagName("table")[0],a=n.offsetWidth,s="table-wide",i="start-visible",r="end-visible";e<a?(t.hasClass(s)||t.addClass(s),0==n.scrollLeft?t.hasClass(i)||t.addClass(i):t.removeClass(i),a-n.scrollLeft==e?t.hasClass(r)||t.addClass(r):t.removeClass(r)):t.removeClass(s)}byu_main.executeOnLoad(function(){for(var t=a.getElementsByClassName("table-container"),e=0;e<t.length;e++){var n=t[e];s(n)}})}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGUuanMiLCJtYWluLmpzIiwiZm91bmRhdGlvbi90YWJsZS90YWJsZS5qcyJdLCJuYW1lcyI6WyJhbmltYXRlIiwieUNvb3JkaW5hdGVzIiwibGVuIiwiZWFzZUZ1bmN0aW9uIiwibGVuZ3RoIiwicHJvZ3Jlc3MiLCJwIiwiTWF0aCIsInJvdW5kIiwiYW5pbWF0aW5nQ2xhc3MiLCJhbmltYXRlSGVpZ2h0IiwiZWwiLCJzZXR0aW5nc09iaiIsIm9wdHMiLCJzdGFydCIsImludGVycnVwdCIsInJlbmRlciIsInMiLCJPYmplY3QiLCJhc3NpZ24iLCJlbmQiLCJmYWRlSW4iLCJkdXJhdGlvbiIsInVuaXRzIiwiZWFzZSIsInN0eWxlIiwiaGVpZ2h0IiwiYWRkQ2xhc3MiLCJhbmltYXRpb24iLCJkZWx0YSIsInN0ZXAiLCJmaW5pc2giLCJyZW1vdmVDbGFzcyIsInJlbW92ZVByb3BlcnR5IiwiRGF0ZSIsInRpbWVQYXNzZWQiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdG9wIiwiZ2V0TmF0dXJhbEhlaWdodCIsIndyYXBwZXIiLCJ3cmFwIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJmaXJzdENoaWxkIiwid3JhcElubmVyIiwib2Zmc2V0SGVpZ2h0IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsInJlbW92ZUNoaWxkIiwidW53cmFwIiwiYnl1X21haW4iLCJkb2MiLCJIVE1MRWxlbWVudCIsInByb3RvdHlwZSIsImhhc0NsYXNzIiwibmFtZSIsInRoaXMiLCJjbGFzc05hbWUiLCJtYXRjaCIsIlJlZ0V4cCIsIm5ld19jbGFzcyIsIm5jIiwic3BsaXQiLCJpIiwiaW5kZXhPZiIsInJlZyIsInJlcGxhY2UiLCJleGVjdXRlT25Mb2FkIiwiZnVuY3Rpb25OYW1lIiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsImJ5dV90YWJsZSIsInVwZGF0ZVRhYmxlIiwiY29udGFpbmVyIiwiY193aWR0aCIsIm9mZnNldFdpZHRoIiwidGFibGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInRfd2lkdGgiLCJ0YWJsZV93aWRlX2NsYXNzIiwic3RhcnRfdmlzaWJsZV9jbGFzcyIsImVuZF92aXNpYmxlX2NsYXNzIiwic2Nyb2xsTGVmdCIsImNvbnRhaW5lcnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFHQSxJQUFBQSxRQUFBLFdBRUEsSUE0SEFDLEVBQ0FDLEVBN0hBQyxHQTZIQUQsR0FEQUQsRUFBQSxDQUFBLEVBQUEsS0FBQSxNQUFBLE1BQUEsTUFBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxNQUFBLE9BQUEsT0FBQSxPQUFBLE1BQUEsT0FBQSxPQUFBLE9BQUEsTUFBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxNQUFBLE9BQUEsT0FBQSxNQUFBLE1BQUEsT0FBQSxLQUFBLE1BQUEsT0FBQSxPQUFBLE9BQUEsTUFBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLEtBQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsS0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE1BQUEsTUFBQSxPQUFBLEtBQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsTUFBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsS0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLEtBQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxLQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxNQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE1BQUEsT0FBQSxPQUFBLE9BQUEsS0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsS0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsTUFBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxLQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsTUFBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE1BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE1BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE9BQUEsTUFBQSxPQUFBLE9BQUEsT0FBQSxPQUFBLE1BQUEsT0FBQSxPQUFBLE9BQUEsTUFBQSxPQUFBLE9BQUEsTUFBQSxPQUFBLE9BQUEsTUFBQSxPQUFBLE9BQUEsSUFDQUcsT0FBQSxFQUdBLFNBQUFDLEdBQ0EsSUFBQUMsRUFBQUMsS0FBQUMsTUFBQUgsRUFBQUgsR0FDQSxPQUFBRCxFQUFBSyxLQWpJQUcsRUFBQSxZQThMQSxNQUFBLENBQ0FDLGNBckxBLFNBQUFDLEVBQUFDLEdBR0EsSUErQ0FDLEVBRUFDLEVBQ0FDLEVBSUFDLEVBdERBQyxFQUFBQyxPQUFBQyxPQUFBLENBQ0FMLE1BQUEsRUFDQU0sSUFBQSxJQUNBQyxRQUFBLEVBQ0FDLFNBQUEsSUFDQUMsTUFBQSxNQUNBWCxHQUVBWSxFQUFBckIsRUFFQVEsRUFBQWMsTUFBQUMsT0FBQVQsRUFB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SSxHQUdBTCxFQUFBcEIsU0FBQTBCLElBQ0FOLEVBQUFsRCxTQUFBd0QsR0FJQSxHQUFBSCxFQUFBTSxXQUNBVCxFQUFBcEIsU0FBQTJCLElBQ0FQLEVBQUFsRCxTQUFBeUQsR0FHQVAsRUFBQTdDLFlBQUFvRCxHQUlBRixFQUFBRixFQUFBTSxZQUFBUixFQUNBRCxFQUFBcEIsU0FBQTRCLElBQ0FSLEVBQUFsRCxTQUFBMEQsR0FHQVIsRUFBQTdDLFlBQUFxRCxJQU1BUixFQUFBN0MsWUFBQW1ELEdBNURBOUIsU0FBQWlCLGNBU0EsV0FHQSxJQUZBLElBQUFpQixFQUFBakMsRUFBQWtDLHVCQUFBLG1CQUVBdEIsRUFBQSxFQUFBQSxFQUFBcUIsRUFBQW5GLE9BQUE4RCxJQUFBLENBQ0EsSUFBQVcsRUFBQVUsRUFBQXJCLEdBQ0FVLEVBQUFDLE1BdEJBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKiovXG4vKiEgQW5pbWF0ZSAqL1xuXG52YXIgYW5pbWF0ZSA9IChmdW5jdGlvbigpIHtcblxuICAgIHZhciBlYXNlRnVuY3Rpb24gPSBjdWJpY0JlemllckRlZmluZWQoKTtcbiAgICB2YXIgYW5pbWF0aW5nQ2xhc3MgPSAnYW5pbWF0aW5nJztcblxuICAgIC8vIEFuaW1hdGlvblxuXG4gICAgLypcbiAgICAgKiBGdW5jOiBhbmltYXRlSGVpZ2h0XG4gICAgICogRGVzYzogQW5pbWF0ZSB0aGUgaGVpZ2h0IG9mIGFuIGl0ZW1cbiAgICAgKiBBcmdzOiBAZWwgLSBIVE1MIEVsZW1lbnQgLSBUaGUgSFRNTCBlbGVtZW50IHRvIGFuaW1hdGVcbiAgICAgKiAgICAgICBAc2V0dGluZ3NPYmogLSBPYmplY3QgLSBDb250YWlucyBwcm9wZXJ0aWVzIHRvIG92ZXJyaWRlIGRlZmF1bHQgc2V0dGluZ3NcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhbmltYXRlSGVpZ2h0KGVsLCBzZXR0aW5nc09iaikge1xuXG4gICAgICAgIC8vIFNldCBkZWZhdWx0cyBhbmQgb3ZlcndyaXRlIHdpdGggcGFzc2VkIG9iamVjdCAoc2V0dGluZ3NPYmopXG4gICAgICAgIHZhciBzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgIGVuZDogMTAwLFxuICAgICAgICAgICAgZmFkZUluOiB0cnVlLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgIHVuaXRzOiBcInB4XCIsXG4gICAgICAgIH0sIHNldHRpbmdzT2JqKTtcblxuICAgICAgICB2YXIgZWFzZSA9IGVhc2VGdW5jdGlvbjtcblxuICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSBzLnN0YXJ0ICsgcy51bml0cztcbiAgICAgICAgYWRkQ2xhc3MoZWwsIGFuaW1hdGluZ0NsYXNzKTtcblxuICAgICAgICAvLyBBbmltYXRlIGhlaWdodCBhdCBpbnB1dCByYXRlXG4gICAgICAgIGVsLmFuaW1hdGlvbiA9IGFuaW1hdGUoe1xuICAgICAgICAgICAgZHVyYXRpb246IHMuZHVyYXRpb24sXG4gICAgICAgICAgICBkZWx0YTogZWFzZSxcbiAgICAgICAgICAgIHN0ZXA6IGZ1bmN0aW9uKGRlbHRhKSB7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gcy5zdGFydCArICgocy5lbmQgLSBzLnN0YXJ0KSAqIGRlbHRhKSArIHMudW5pdHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmluaXNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzcyhlbCwgYW5pbWF0aW5nQ2xhc3MpO1xuICAgICAgICAgICAgICAgIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiaGVpZ2h0XCIpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygcy5maW5pc2ggPT0gXCJmdW5jdGlvblwiKSB7IHMuZmluaXNoKCk7IH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnRlcnJ1cHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsLCBhbmltYXRpbmdDbGFzcyk7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJoZWlnaHRcIik7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzLmludGVycnVwdCA9PSBcImZ1bmN0aW9uXCIpIHsgcy5pbnRlcnJ1cHQoKTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH0gLy8gYW5pbWF0ZUhlaWdodFxuXG5cbiAgICAvKlxuICAgICAqIEZ1bmM6IGFuaW1hdGVcbiAgICAgKiBEZXNjOiBBbmltYXRlIGZ1bmN0aW9uXG4gICAgICogU3JjOiAgaHR0cDovL2phdmFzY3JpcHQuaW5mby90dXRvcmlhbC9hbmltYXRpb24gKG1haW4gYW5pbWF0aW9uIGZ1bmN0aW9ucylcbiAgICAgKiAgICAgICBodHRwOi8vY3JlYXRpdmVqcy5jb20vcmVzb3VyY2VzL3JlcXVlc3RhbmltYXRpb25mcmFtZS8gKHJlcXVlc3RBbmltYXRpb25GcmFtZSlcbiAgICAgKiBBcmdzOiBAb3B0cyAtIE9iamVjdCAtIFRoZSBvcHRpb25zIG9iamVjdFxuICAgICAqICAgICAgICAgY29udGFpbnM6IEBkdXJhdGlvbiAtIE51bWJlciAtIE1pbGxpc2Vjb25kcyBmb3IgdG90YWwgYW5pbWF0aW9uXG4gICAgICogICAgICAgICAgICAgICAgICAgQGRlbHRhIC0gRnVuY3Rpb24gLSBFYXNpbmcgZnVuY3Rpb25cbiAgICAgKiAgICAgICAgICAgICAgICAgICBAc3RlcCAtIEZ1bmN0aW9uIC0gUmVzdWx0IGZ1bmN0aW9uICh3aGF0IHNob3VsZCBoYXBwZW4gb24gc2NyZWVuIGVhY2ggZnJhbWUpXG4gICAgICogICAgICAgICAgICAgICAgICAgQGZpbmlzaCAtIEZ1bmN0aW9uIC0gb3B0aW9uYWwtIEVuZCBmdW5jdGlvbiAod2hhdCBoYXBwZW5zIHdoZW4gYW5pbWF0aW9uIGZpbmlzaGVzKVxuICAgICAqICAgICAgICAgICAgICAgICAgIEBpbnRlcnJ1cHQgLSBGdW5jdGlvbiAtIG9wdGlvbmFsLSBFbmQgZnVuY3Rpb24gKHdoYXQgaGFwcGVucyBpZiBhbmltYXRpb24gaXMgaW50ZXJydXB0ZWQpXG4gICAgICovXG4gICAgZnVuY3Rpb24gYW5pbWF0ZShvcHRzKSB7XG5cbiAgICAgICAgdmFyIHN0YXJ0ID0gbmV3IERhdGUoKTsgLy8gR2V0IHRoZSBzdGFydCB0aW1lXG4gICAgICAgIHZhciBpbnRlcnJ1cHQgPSBmYWxzZTsgLy8gSWYgdGhpcyBpcyB0cnVlLCBhbmltYXRpb24gd2lsbCBzdG9wXG4gICAgICAgIHZhciBzdG9wID0gZnVuY3Rpb24oKSB7IGludGVycnVwdCA9IHRydWU7IH07IC8vIFN0b3BzIHRoaXMgYW5pbWF0aW9uXG5cbiAgICAgICAgLy8gVGhlIHJlbmRlciBmdW5jdGlvblxuICAgICAgICB2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdGltZVBhc3NlZCA9IG5ldyBEYXRlKCkgLSBzdGFydDsgLy8gVGhlIGFtb3VudCBvZiB0aW1lIGVsYXBzZWQgc2luY2Ugc3RhcnRcbiAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IHRpbWVQYXNzZWQgLyBvcHRzLmR1cmF0aW9uOyAvLyBQZXJjZW50YWdlIG9mIHRpbWUgcGFzc2VkIGluIGZ1bGwgZXhwZWN0ZWQgZHVyYXRpb25cblxuICAgICAgICAgICAgaWYgKHByb2dyZXNzID4gMSkgeyBwcm9ncmVzcyA9IDE7IH0gLy8gQ2FwIHBlcmNlbnRhZ2UgYXQgMSAoMTAwJSlcblxuICAgICAgICAgICAgdmFyIGRlbHRhID0gb3B0cy5kZWx0YShwcm9ncmVzcyk7IC8vIEFwcGx5IGVhc2luZyBmdW5jdGlvblxuICAgICAgICAgICAgb3B0cy5zdGVwKGRlbHRhKTsgLy8gQXBwbHkgdGhlIHN0ZXAgZnVjdGlvbiBmcm9tIHRoZSBvcHRpb25zIG9iamVjdCAocmVuZGVycyBhIGNoYW5nZSBvbiBzY3JlZW4pXG5cbiAgICAgICAgICAgIC8vIEludGVycnVwdCwgY29udGludWUsIG9yIGZpbmlzaCBkZXBlbmRpbmcgb24gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChpbnRlcnJ1cHQgJiYgb3B0cy5pbnRlcnJ1cHQpIHtcbiAgICAgICAgICAgICAgICBvcHRzLmludGVycnVwdCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9ncmVzcyA8IDEpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdHMuZmluaXNoKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5maW5pc2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBTdGFydCB0aGUgYW5pbWF0aW9uXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcblxuICAgICAgICByZXR1cm4geyBzdG9wOiBzdG9wIH07XG5cbiAgICB9IC8vIGFuaW1hdGVcblxuXG4gICAgLypcbiAgICAgKiBGdW5jOiBlYXNlSW5PdXRcbiAgICAgKiBEZXNjOiBFYXNpbmcgZnVuY3Rpb25cbiAgICAgKiBBcmdzOiBAcG93ZXIgLSBQb3NpdGl2ZSBJbnRlZ2VyIC0gTWF0aCBwb3dlciB0aGF0IHNwZWNpZmllcyBlYXNpbmcgY3VydmUgKGRlZmF1bHQgMylcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlYXNlSW5PdXQocG93ZXIpIHtcbiAgICAgICAgcG93ZXIgPSBwb3dlciA/IHBvd2VyIDogMztcbiAgICAgICAgdmFyIGRlbHRhID0gZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgcG93ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHByb2dyZXNzKSB7XG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPCAuNSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVsdGEoMiAqIHByb2dyZXNzKSAvIDJcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gKDIgLSBkZWx0YSgyICogKDEgLSBwcm9ncmVzcykpKSAvIDJcbiAgICAgICAgfVxuICAgIH0gLy8gZWFzZUluT3V0XG5cblxuICAgIC8qXG4gICAgICogRnVuYzogY3ViaWNCZXppZXJEZWZpbmVkXG4gICAgICogRGVzYzogRWFzaW5nIGZ1bmN0aW9uIGJhc2VkIG9uIENTUyBlYXNpbmc6IGN1YmljLWJlemllcigwLjMsIDAsIDAuMywgMSkuXG4gICAgICogICAgICAgeUNvb3JkaW5hdGVzIGdlbmVyYXRlZCBieSBydW5uaW5nIGEgY3ViaWMgYmV6aWVyIGZ1bmN0aW9uIChyZXR1cm5pbmcgWCBhbmQgWSBjb29yZGluYXRlcyBiYXNlZCBvbiB0aW1lKVxuICAgICAqICAgICAgIGFuZCBvdXRwdXR0aW5nIHRoZSBZIHZhbHVlcyBhc3NvY2lhdGVkIHdpdGggdGhlIFggdmFsdWVzIHRoYXQgZmFsbCBjbG9zZXN0IHRvIGVhY2ggaHVuZHJlZHRoICguMDEsIC4wMiwgLi4uKS5cbiAgICAgKiAgICAgICBUaGlzIGFsbG93cyBhIHF1aWNrIGxvb2t1cCBiYXNlZCBvbiBhbmltYXRpb24gcHJvZ3Jlc3MuIFByb2dyZXNzICglKSAqIGFycmF5IGxlbmd0aCBpcyB0aGUgaW5kZXggb2YgdGhlIFkgdmFsdWUuXG4gICAgICogQXJnczogbm9uZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGN1YmljQmV6aWVyRGVmaW5lZCgpIHtcbiAgICAgICAgdmFyIHlDb29yZGluYXRlcyA9IFswLCAwLjAwMDA2LCAwLjAwMDI0LCAwLjAwMDU0LCAwLjAwMDk3LCAwLjAwMTUzLCAwLjAwMjIxLCAwLjAwMzAzLCAwLjAwMzk4LCAwLjAwNTA2LCAwLjAwNjI5LCAwLjAwNzY1LCAwLjAwOTE2LCAwLjAxMDgxLCAwLjAxMjYsIDAuMDE0NTUsIDAuMDE2NjQsIDAuMDE4ODksIDAuMDIxMywgMC4wMjM4NiwgMC4wMjY1OCwgMC4wMjk0NiwgMC4wMzI1LCAwLjAzNTcxLCAwLjAzOTA4LCAwLjA0MjYyLCAwLjA0NjMyLCAwLjA1MDE5LCAwLjA1NDIzLCAwLjA1ODQ0LCAwLjA2MjgzLCAwLjA2NzM4LCAwLjA3MjEsIDAuMDc2OTksIDAuMDgyMDYsIDAuMDg3MywgMC4wOTI3LCAwLjA5ODI3LCAwLjEwNCwgMC4xMDk5LCAwLjExNTk3LCAwLjEyMjE5LCAwLjEyODU3LCAwLjEzNTEsIDAuMTQxNzksIDAuMTQ4NjEsIDAuMTU1NTksIDAuMTYyNzEsIDAuMTY5OTUsIDAuMTc3MzQsIDAuMTg0ODQsIDAuMTkyNDcsIDAuMjAwMjEsIDAuMjA4MDUsIDAuMjE2LCAwLjIyNDA1LCAwLjIzMjE5LCAwLjI0MDQxLCAwLjI0ODcxLCAwLjI1NzA4LCAwLjI2NTUyLCAwLjI3NDAxLCAwLjI4MjU2LCAwLjI5MTE0LCAwLjI5OTc4LCAwLjMwODQ0LCAwLjMxNzEyLCAwLjMyNTgzLCAwLjMzNDU1LCAwLjM0MzI4LCAwLjM1MiwgMC4zNjA3MywgMC4zNjk0NSwgMC4zNzgxNSwgMC4zODY4MiwgMC4zOTU0OCwgMC40MDQxMSwgMC40MTI2OSwgMC40MjEyNiwgMC40Mjk3NywgMC40MzgyNCwgMC40NDY2NiwgMC40NTUwMiwgMC40NjMzNCwgMC40NzE2LCAwLjQ3OTgsIDAuNDg3OTMsIDAuNDk2LCAwLjUwMzk5LCAwLjUxMTkyLCAwLjUxOTc4LCAwLjUyNzU3LCAwLjUzNTI4LCAwLjU0MjkzLCAwLjU1MDQ5LCAwLjU1Nzk2LCAwLjU2NTM4LCAwLjU3MjcsIDAuNTc5OTYsIDAuNTg3MTMsIDAuNTk0MjEsIDAuNjAxMjIsIDAuNjA4MTUsIDAuNjE1LCAwLjYyMTc1LCAwLjYyODQ0LCAwLjYzNTA0LCAwLjY0MTU3LCAwLjY0OCwgMC42NTQzNywgMC42NjA2NCwgMC42NjY4NCwgMC42NzI5NiwgMC42NzksIDAuNjg0OTYsIDAuNjkwODQsIDAuNjk2NjUsIDAuNzAyMzgsIDAuNzA4MDMsIDAuNzEzNiwgMC43MTkxMSwgMC43MjQ1MiwgMC43Mjk4OCwgMC43MzUxNSwgMC43NDAzNiwgMC43NDU0OSwgMC43NTA1NCwgMC43NTU1NCwgMC43NjA0NSwgMC43NjUzLCAwLjc3MDA3LCAwLjc3NDc5LCAwLjc3OTQyLCAwLjc4NCwgMC43ODg1MSwgMC43OTI5NSwgMC43OTczMywgMC44MDE2MywgMC44MDU4OSwgMC44MTAwNywgMC44MTQxOSwgMC44MTgyNSwgMC44MjIyNSwgMC44MjYxOSwgMC44MzAwNywgMC44MzM4OCwgMC44Mzc2NSwgMC44NDEzNSwgMC44NDUsIDAuODQ4NTgsIDAuODUyMTEsIDAuODU1NTksIDAuODU5MDIsIDAuODYyMzksIDAuODY1NywgMC44Njg5NSwgMC44NzIxNywgMC44NzUzMiwgMC44Nzg0MiwgMC44ODE0OSwgMC44ODQ0OCwgMC44ODc0MywgMC44OTAzNCwgMC44OTMxOSwgMC44OTYsIDAuODk4NzYsIDAuOTAxNDcsIDAuOTA0MTQsIDAuOTA2NzUsIDAuOTA5MzMsIDAuOTExODUsIDAuOTE0MzQsIDAuOTE2NzgsIDAuOTE5MTcsIDAuOTIxNTIsIDAuOTIzODMsIDAuOTI2MDksIDAuOTI4MzEsIDAuOTMwNDksIDAuOTMyNjQsIDAuOTM0NzMsIDAuOTM2OCwgMC45Mzg4MSwgMC45NDA3OSwgMC45NDI3MywgMC45NDQ2MywgMC45NDY1LCAwLjk0ODMyLCAwLjk1MDExLCAwLjk1MTg2LCAwLjk1MzU3LCAwLjk1NTI1LCAwLjk1Njg5LCAwLjk1ODQ5LCAwLjk2MDA2LCAwLjk2MTYsIDAuOTYzMDksIDAuOTY0NTUsIDAuOTY1OTksIDAuOTY3MzgsIDAuOTY4NzQsIDAuOTcwMDcsIDAuOTcxMzYsIDAuOTcyNjMsIDAuOTczODYsIDAuOTc1MDYsIDAuOTc2MjMsIDAuOTc3MzYsIDAuOTc4NDcsIDAuOTc5NTQsIDAuOTgwNTgsIDAuOTgxNTksIDAuOTgyNTgsIDAuOTgzNTMsIDAuOTg0NDUsIDAuOTg1MzUsIDAuOTg2MjEsIDAuOTg3MDUsIDAuOTg3ODYsIDAuOTg4NjQsIDAuOTg5MzksIDAuOTkwMTEsIDAuOTkwODEsIDAuOTkxNDcsIDAuOTkyMTIsIDAuOTkyNzMsIDAuOTkzMzIsIDAuOTkzODgsIDAuOTk0NDIsIDAuOTk0OTMsIDAuOTk1NDEsIDAuOTk1ODcsIDAuOTk2MywgMC45OTY3MSwgMC45OTcwOSwgMC45OTc0NSwgMC45OTc3OSwgMC45OTgxLCAwLjk5ODM4LCAwLjk5ODY1LCAwLjk5ODg4LCAwLjk5OTEsIDAuOTk5MjksIDAuOTk5NDYsIDAuOTk5NiwgMC45OTk3MiwgMC45OTk4MiwgMC45OTk5LCAwLjk5OTk2LCAwLjk5OTk5LCAxXTtcbiAgICAgICAgdmFyIGxlbiA9IHlDb29yZGluYXRlcy5sZW5ndGggLSAxO1xuXG4gICAgICAgIC8vIFJldHVybiB0aGUgZWFzZWluZyBmdW5jdGlvbiwgd2hpY2ggcmV0dXJucyBhbiBlYXNlZCB2YWx1ZSAoMOKAkzEpIGJhc2VkIG9uIHRoZSBwcm9ncmVzcyAoMOKAkzEsIGkuZSAwJS0xMDAlKVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHZhciBwID0gTWF0aC5yb3VuZChwcm9ncmVzcyAqIGxlbik7XG4gICAgICAgICAgICByZXR1cm4geUNvb3JkaW5hdGVzW3BdO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKlxuICAgICAqIEZ1bmM6IGdldE5hdHVyYWxIZWlnaHRcbiAgICAgKiBEZXNjOiBHZXQgdGhlIGhlaWdodCBvZiBhbiBlbGVtZW50IG9uIHRoZSBwYWdlIChiZWZvcmUgdmlzaWJseSByZW5kZXJpbmcgaXQgb24gdGhlIHBhZ2UpXG4gICAgICogQXJnczogQGVsIC0gSFRNTCBFbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gbWVhc3VyZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldE5hdHVyYWxIZWlnaHQoZWwpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIsIHRlc3REaXYsIGhlaWdodDtcblxuICAgICAgICB3cmFwcGVyID0gd3JhcElubmVyKGVsLCBcImRpdlwiKTtcbiAgICAgICAgaGVpZ2h0ID0gd3JhcHBlci5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgdW53cmFwKHdyYXBwZXIpO1xuXG4gICAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfVxuXG5cblxuXG4gICAgLypcbiAgICAgKiBGdW5jOiB3cmFwSW5uZXJcbiAgICAgKiBEZXNjOiBXcmFwIHRoZSBjb250ZW50cyBvZiBhbiBlbGVtZW50IGluIGEgbmV3IEhUTUwgZWxlbWVudFxuICAgICAqIEFyZ3M6IEBlbCAtIEhUTUxFbGVtZW50IC0gVGhlIGVsZW1lbnQgd2hvc2UgY29udGVudHMgc2hvdWxkIGJlIHdyYXBwZWRcbiAgICAgKiAgICAgICBAd3JhcHBlciAtIFN0cmluZyAtIFRoZSB0eXBlIG9mIEhUTUwgZWxlbWVudCB0aGF0IHNob3VsZCB3cmFwIHRoZSBjb250ZW50c1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHdyYXBJbm5lcihlbCwgd3JhcHBlcikge1xuICAgICAgICB2YXIgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQod3JhcHBlcik7XG5cbiAgICAgICAgLy8gQXBwZW5kIGEgd3JhcHBlciBub2RlXG4gICAgICAgIGVsLmFwcGVuZENoaWxkKHdyYXApO1xuXG4gICAgICAgIC8vIE1vdmUgYWxsIGNoaWxkcmVuIGludG8gdGhlIHdyYXBwZXIgZWxlbWVudFxuICAgICAgICB3aGlsZSAoZWwuZmlyc3RDaGlsZCAmJiBlbC5maXJzdENoaWxkICE9PSB3cmFwKSB3cmFwLmFwcGVuZENoaWxkKGVsLmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgIHJldHVybiB3cmFwO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogRnVuYzogdW53cmFwXG4gICAgICogRGVzYzogVW53cmFwIHRoZSBwYXJlbnQgZWxlbWVudCBvZiB0aGUgc3BlY2lmaWVkIERPTSBlbGVtZW50XG4gICAgICogU3JjOiAgaHR0cHM6Ly9wbGFpbmpzLmNvbS9qYXZhc2NyaXB0L21hbmlwdWxhdGlvbi91bndyYXAtYS1kb20tZWxlbWVudC0zNS9cbiAgICAgKiBBcmdzOiBAZWwgLSBIVE1MRWxlbWVudCAtIFRoZSBlbGVtZW50IHRvIGRlc3Ryb3lcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1bndyYXAoZWwpIHtcbiAgICAgICAgLy8gZ2V0IHRoZSBlbGVtZW50J3MgcGFyZW50IG5vZGVcbiAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XG5cbiAgICAgICAgLy8gbW92ZSBhbGwgY2hpbGRyZW4gb3V0IG9mIHRoZSB3cmFwcGVyIGVsZW1lbnRcbiAgICAgICAgd2hpbGUgKGVsLmZpcnN0Q2hpbGQpIHBhcmVudC5pbnNlcnRCZWZvcmUoZWwuZmlyc3RDaGlsZCwgZWwpO1xuXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgZW1wdHkgZWxlbWVudFxuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoZWwpO1xuICAgIH1cblxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhbmltYXRlSGVpZ2h0OiBhbmltYXRlSGVpZ2h0LFxuICAgICAgICBnZXROYXR1cmFsSGVpZ2h0OiBnZXROYXR1cmFsSGVpZ2h0XG4gICAgfVxuXG5cbn0pKCk7IiwiLypcbiAqIE1vZHVsZTogQllVIE1haW5cbiAqIERlc2M6ICAgRnVuY3Rpb25zIHRoYXQgYXBwbHkgdG8gYWxsIEJZVSBwYWdlcywgY29tcG9uZW50cywgb3Igc2NyaXB0c1xuICovXG5cbnZhciBieXVfbWFpbiA9IChmdW5jdGlvbigpe1xuXG5cdHZhciBkb2MgPSBkb2N1bWVudDtcblxuXHQvKlxuXHQgKiBIVE1MIFByb3RvdHlwZSBmdW5jdGlvbiBhc3NpZ25tZW50c1xuXHQgKiBEZXNjOiBNYWtlIGl0IGVhc3kgdG8gYWRkLCB0ZXN0LCBhbmQgcmVtb3ZlIEhUTUwgY2xhc3NlcyB2aWEgY29tcGF0aWJsZSwgcGxhaW4gSlNcblx0ICogU3JjOiAgaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9qYXZhc2NyaXB0L2FkZGNsYXNzLWZ1bmN0aW9uLyNjb21tZW50LTE2MTg0MDVcblx0ICovXG5cdFxuXHQvLyBIYXNDbGFzc1xuXHRIVE1MRWxlbWVudC5wcm90b3R5cGUuaGFzQ2xhc3MgPSBmdW5jdGlvbihuYW1lKSB7XG5cdCAgICByZXR1cm4gdGhpcy5jbGFzc05hbWUubWF0Y2gobmV3IFJlZ0V4cCgnKFxcXFxzfF4pJytuYW1lKycoXFxcXHN8JCknKSk7XG5cdH07XG5cblx0Ly8gQWRkQ2xhc3Ncblx0SFRNTEVsZW1lbnQucHJvdG90eXBlLmFkZENsYXNzID0gZnVuY3Rpb24obmV3X2NsYXNzKSB7ICAgXG5cdCAgICB2YXIgbmMgPSBuZXdfY2xhc3Muc3BsaXQoXCIsXCIpO1xuXG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5jLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgaWYgKChcIiBcIiArIHRoaXMuY2xhc3NOYW1lICsgXCIgXCIpLmluZGV4T2YoXCIgXCIgKyBuY1tpXSArIFwiIFwiKSA9PSAtMSkge1xuXHQgICAgICAgICAgICB0aGlzLmNsYXNzTmFtZSArPSBcIiBcIiArIG5jW2ldO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8vIFJlbW92ZUNsYXNzXG5cdEhUTUxFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0ICBpZiAodGhpcy5oYXNDbGFzcyhuYW1lKSkge1xuXHQgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoJyhcXFxcc3xeKScrbmFtZSsnKFxcXFxzfCQpJyk7XG5cdCAgICB0aGlzLmNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lLnJlcGxhY2UocmVnLCcgJyk7XG5cdCAgfVxuXHQgIHJldHVybiB0aGlzO1xuXHR9O1xuXG5cblx0Lypcblx0ICogRnVuYzogRXhlY3V0ZU9uTG9hZFxuXHQgKiBEZXNjOiBFeGVjdXRlIHNwZWNpZmllZCBmdW5jdGlvbiB3aGVuIHRoZSBET00gaXMgcmVhZHkuIEhhbmRsZSBcblx0ICogQXJnczogZnVuY3Rpb25OYW1lIC0gRnVuY3Rpb24gSWRlbnRpZmllciAtIE5hbWUgb2YgdGhlIGZ1bmN0aW9uIHRvIGV4ZWN1dGVcblx0ICovXG5cdGZ1bmN0aW9uIGV4ZWN1dGVPbkxvYWQoIGZ1bmN0aW9uTmFtZSApIHtcblx0XHQvLyBpbiBjYXNlIHRoZSBkb2N1bWVudCBpcyBhbHJlYWR5IHJlbmRlcmVkXG5cdFx0aWYgKGRvYy5yZWFkeVN0YXRlIT0nbG9hZGluZycpIGZ1bmN0aW9uTmFtZSgpO1xuXHRcdC8vIG1vZGVybiBicm93c2Vyc1xuXHRcdGVsc2UgaWYgKGRvYy5hZGRFdmVudExpc3RlbmVyKSBkb2MuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uTmFtZSk7XG5cdFx0Ly8gSUUgPD0gOFxuXHRcdGVsc2UgZG9jLmF0dGFjaEV2ZW50KCdvbnJlYWR5c3RhdGVjaGFuZ2UnLCBmdW5jdGlvbigpe1xuXHRcdCAgICBpZiAoZG9jLnJlYWR5U3RhdGU9PSdjb21wbGV0ZScpIGZ1bmN0aW9uTmFtZSgpO1xuXHRcdH0pO1xuXHR9XG5cblxuXHQvLyBFeHBvc2UgcHVibGljIG1ldGhvZHNcblx0cmV0dXJuIHtcblx0XHRleGVjdXRlT25Mb2FkOiBleGVjdXRlT25Mb2FkLFxuXHR9XG5cbn0pKCk7IiwiLypcbiAqIE1vZHVsZTogQllVIFRhYmxlXG4gKiBEZXNjOiAgIEhhbmRsZSB0YWJsZXMgdGhhdCBhcmUgd2lkZXIgdGhhbiB0aGllciBjb250YWluZXJcbiAqL1xuXG52YXIgYnl1X3RhYmxlID0gKGZ1bmN0aW9uKCl7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBkb2MgPSBkb2N1bWVudDtcblxuXG5cdC8vIEV4ZWN1dGUgdGhlIGZ1bmN0aW9uXG5cdGJ5dV9tYWluLmV4ZWN1dGVPbkxvYWQoIHVwZGF0ZVRhYmxlcyApO1xuXHRcblxuXHQvKlxuXHQgKiBGdW5jOiBVcGRhdGVUYWJsZXNcblx0ICogRGVzYzogRGV0ZWN0IGFuZCBoYW5kbGUgdGFibGVzIHRoYXQgYXJlIHdpZGVyIHRoYW4gdGhlaXIgY29udGFpbmVyLlxuXHQgKiBcdFx0IFdvcmtzIG9uIHRhYmxlcyBjb250YWluZWQgd2l0aGluIGFuIGVsZW1lbnQgb2YgY2xhc3MgXCJ0YWJsZS1jb250YWluZXJcIi5cblx0ICogQXJnczogbm9uZVxuXHQgKi9cblx0ZnVuY3Rpb24gdXBkYXRlVGFibGVzKCkge1xuXHRcdHZhciBjb250YWluZXJzID0gZG9jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJsZS1jb250YWluZXJcIik7XG5cblx0XHRmb3IgKHZhciBpPTA7IGkgPCBjb250YWluZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0ICAgIHZhciBjb250YWluZXIgPSBjb250YWluZXJzW2ldO1xuXHRcdCAgICB1cGRhdGVUYWJsZSggY29udGFpbmVyICk7XG5cdFx0fVxuXHR9XG5cblxuXHQvKlxuXHQgKiBGdW5jOiBVcGRhdGVUYWJsZVxuXHQgKiBEZXNjOiBDaGVjayBpZiBhIHRhYmxlIGlzIHdpZGVyIHRoYW4gaXRzIGNvbnRhaW5lciwgYW5kIG1hcmsgc2Nyb2xsaW5nIHBvc2l0aW9uIHdpdGhpbiBpdFxuXHQgKiBBcmdzOiBAY29udGFpbmVyIC0gSFRNTCBFbGVtZW50IC0gQSBjb250YWluZXIgZWxlbWVudCBmb3IgYSB0YWJsZSAocHJvYmFibHkgb2YgY2xhc3MgXCJ0YWJsZS1jb250YWluZXJcIilcblx0ICovXG5cdGZ1bmN0aW9uIHVwZGF0ZVRhYmxlKCBjb250YWluZXIgKSB7XG5cdFx0dmFyIGNfd2lkdGggPSBjb250YWluZXIub2Zmc2V0V2lkdGg7XG5cdCAgICB2YXIgdGFibGUgPSBjb250YWluZXIuIGdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGFibGVcIilbMF07XG5cdCAgICB2YXIgdF93aWR0aCA9IHRhYmxlLm9mZnNldFdpZHRoO1xuXHQgICAgdmFyIHRhYmxlX3dpZGVfY2xhc3MgPSBcInRhYmxlLXdpZGVcIjtcblx0ICAgIHZhciBzdGFydF92aXNpYmxlX2NsYXNzID0gXCJzdGFydC12aXNpYmxlXCI7XG5cdCAgICB2YXIgZW5kX3Zpc2libGVfY2xhc3MgPSBcImVuZC12aXNpYmxlXCI7XG5cblx0ICAgIGlmICggY193aWR0aCA8IHRfd2lkdGggKSB7XG5cblx0ICAgIFx0Ly8gQWRkIHRhYmxlIHdpZGUgY2xhc3MgaWYgaXQncyBub3QgYWxyZWFkeSB0aGVyZVxuXHQgICAgXHRpZiAoICFjb250YWluZXIuaGFzQ2xhc3MoIHRhYmxlX3dpZGVfY2xhc3MgKSApIHsgXG5cdFx0ICAgIFx0Y29udGFpbmVyLmFkZENsYXNzKCB0YWJsZV93aWRlX2NsYXNzICk7XG5cdFx0ICAgIH1cblxuXHQgICAgXHQvLyBDaGVjayBpZiB0aGUgc3RhcnQgb2YgdGhlIHRhYmxlIGlzIHZpc2libGUgYW5kIGhhbmRsZVxuXHQgICAgXHRpZiAoIHRhYmxlLnNjcm9sbExlZnQgPT0gMCApIHtcblx0ICAgIFx0XHRpZiAoICFjb250YWluZXIuaGFzQ2xhc3MoIHN0YXJ0X3Zpc2libGVfY2xhc3MgKSApIHtcblx0XHQgICAgXHRcdGNvbnRhaW5lci5hZGRDbGFzcyggc3RhcnRfdmlzaWJsZV9jbGFzcyApO1xuXHQgICAgXHRcdH1cblx0ICAgIFx0fSBlbHNlIHtcblx0ICAgIFx0XHRjb250YWluZXIucmVtb3ZlQ2xhc3MoIHN0YXJ0X3Zpc2libGVfY2xhc3MgKTtcblx0ICAgIFx0fVxuXG5cdCAgICBcdC8vIENoZWNrIGlmIHRoZSBlbmQgb2YgdGhlIHRhYmxlIGlzIHZpc2libGUgYW5kIGhhbmRsZVxuXHQgICAgXHRpZiAoIHRfd2lkdGggLSB0YWJsZS5zY3JvbGxMZWZ0ID09IGNfd2lkdGggKSB7XG5cdCAgICBcdFx0aWYgKCAhY29udGFpbmVyLmhhc0NsYXNzKCBlbmRfdmlzaWJsZV9jbGFzcyApICkge1xuXHRcdCAgICBcdFx0Y29udGFpbmVyLmFkZENsYXNzKCBlbmRfdmlzaWJsZV9jbGFzcyApO1xuXHQgICAgXHRcdH1cblx0ICAgIFx0fSBlbHNlIHtcblx0ICAgIFx0XHRjb250YWluZXIucmVtb3ZlQ2xhc3MoIGVuZF92aXNpYmxlX2NsYXNzICk7XG5cdCAgICBcdH1cblx0ICAgIH0gXG5cblx0ICAgIC8vIFRoZSB0YWJsZSBpcyBub3QgdG9vIHdpZGUgZm9yIGl0cyBjb250YWluZXJcblx0ICAgIGVsc2Uge1xuXHQgICAgXHRjb250YWluZXIucmVtb3ZlQ2xhc3MoIHRhYmxlX3dpZGVfY2xhc3MgKTtcblx0ICAgIH1cblx0fVxuXG59KSgpOyJdfQ==