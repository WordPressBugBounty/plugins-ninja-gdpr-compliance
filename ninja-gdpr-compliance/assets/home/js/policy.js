!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=56)}({56:function(e,t,n){e.exports=n(57)},57:function(e,t){jQuery(document).ready((function(e){var t=jQuery("body").attr("class").match(/page-id-([0-9]+)/);t=null!=t&&void 0!==t[1]?t[1]:"",e.ajax({type:"POST",url:njt_gdpr.ajaxurl+"?lang="+njt_gdpr.current_lang,data:{action:"njt_gdpr_recheck_policy",nonce:njt_gdpr_policy.nonce,page_id:t},success:function(e){e.success&&""!=e.data.redirect_url&&location.replace(e.data.redirect_url)}}),e(".njt_gdpr_policy_accept_btn, .njt_gdpr_policy_decline_btn").on("click",(function(t){t.preventDefault();var n=e(this),r=n.hasClass("njt_gdpr_policy_accept_btn")?"1":"0";n.addClass("njt-btn-loading"),e.ajax({url:njt_gdpr_policy.ajaxurl+"?lang="+njt_gdpr.current_lang,type:"POST",data:{action:"njt_gdpr_accept_policy",nonce:njt_gdpr_policy.nonce,allow:r}}).done((function(e){n.removeClass("njt-btn-loading"),e.success&&(""!=e.data.redirect_url?location.replace(e.data.redirect_url):alert(e.data.mess))})).fail((function(){n.removeClass("njt-btn-loading"),alert("Please refresh and try again.")}))}))}))}});