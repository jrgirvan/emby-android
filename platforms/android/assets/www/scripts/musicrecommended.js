define(["libraryBrowser","scrollStyles"],function(e){function t(){var e=window.innerWidth;return e>=1920?9:e>=1200?12:e>=1e3?10:8}function r(){return browserInfo.mobile&&AppInfo.enableAppLayouts}function a(){return r()?"overflowSquare":"square"}function n(r,n){Dashboard.showLoadingMsg();var i=Dashboard.getCurrentUserId(),s={IncludeItemTypes:"Audio",Limit:t(),Fields:"PrimaryImageAspectRatio,SyncInfo",ParentId:n,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};ApiClient.getJSON(ApiClient.getUrl("Users/"+i+"/Items/Latest",s)).then(function(t){var n=r.querySelector("#recentlyAddedSongs");n.innerHTML=e.getPosterViewHtml({items:t,showUnplayedIndicator:!1,showLatestItemsPopup:!1,shape:a(),showTitle:!0,showParentTitle:!0,lazy:!0,centerText:!0,overlayPlayButton:!0}),ImageLoader.lazyChildren(n),Dashboard.hideLoadingMsg()})}function i(r,n){var i={SortBy:"DatePlayed",SortOrder:"Descending",IncludeItemTypes:"Audio",Limit:t(),Recursive:!0,Fields:"PrimaryImageAspectRatio,AudioInfo,SyncInfo",Filters:"IsPlayed",ParentId:n,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};ApiClient.getItems(Dashboard.getCurrentUserId(),i).then(function(t){var n=r.querySelector("#recentlyPlayed");t.Items.length?n.classList.remove("hide"):n.classList.add("hide");var i=n.querySelector(".itemsContainer");i.innerHTML=e.getPosterViewHtml({items:t.Items,showUnplayedIndicator:!1,shape:a(),showTitle:!0,showParentTitle:!0,defaultAction:"instantmix",lazy:!0,centerText:!0,overlayMoreButton:!0}),ImageLoader.lazyChildren(i)})}function s(r,n){var i={SortBy:"PlayCount",SortOrder:"Descending",IncludeItemTypes:"Audio",Limit:t(),Recursive:!0,Fields:"PrimaryImageAspectRatio,AudioInfo,SyncInfo",Filters:"IsPlayed",ParentId:n,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};ApiClient.getItems(Dashboard.getCurrentUserId(),i).then(function(t){var n=r.querySelector("#topPlayed");t.Items.length?n.classList.remove("hide"):n.classList.add("hide");var i=n.querySelector(".itemsContainer");i.innerHTML=e.getPosterViewHtml({items:t.Items,showUnplayedIndicator:!1,shape:a(),showTitle:!0,showParentTitle:!0,defaultAction:"instantmix",lazy:!0,centerText:!0,overlayMoreButton:!0}),ImageLoader.lazyChildren(i)})}function o(r){var n={SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"Playlist",Recursive:!0,Fields:"PrimaryImageAspectRatio,SortName,CumulativeRunTimeTicks,CanDelete,SyncInfo",StartIndex:0,Limit:t(),EnableTotalRecordCount:!1};ApiClient.getItems(Dashboard.getCurrentUserId(),n).then(function(t){var n=r.querySelector("#playlists");t.Items.length?n.classList.remove("hide"):n.classList.add("hide");var i=n.querySelector(".itemsContainer");i.innerHTML=e.getPosterViewHtml({items:t.Items,shape:a(),showTitle:!0,lazy:!0,coverImage:!0,showItemCounts:!0,centerText:!0,overlayPlayButton:!0}),ImageLoader.lazyChildren(i)})}function l(e,t){var r=LibraryMenu.getTopParentId();n(t,r),o(t,r),i(t,r),s(t,r),require(["components/favoriteitems"],function(e){e.render(t,Dashboard.getCurrentUserId(),r,["favoriteArtists","favoriteAlbums","favoriteSongs"])})}return pageIdOn("pagebeforeshow","musicRecommendedPage",function(){var e=this;if(!e.getAttribute("data-title")){var t=LibraryMenu.getTopParentId();t?ApiClient.getItem(Dashboard.getCurrentUserId(),t).then(function(t){e.setAttribute("data-title",t.Name),LibraryMenu.setTitle(t.Name)}):(e.setAttribute("data-title",Globalize.translate("TabMusic")),LibraryMenu.setTitle(Globalize.translate("TabMusic")))}}),function(t,r){function a(){Dashboard.showLoadingMsg();var e=t.querySelector(".pageTabContent[data-index='0']");l(t,e)}function n(){return browserInfo.mobile&&AppInfo.enableAppLayouts}function i(e,a){var n=e.querySelector(".pageTabContent[data-index='"+a+"']"),i=[];switch(a){case 0:break;case 1:i.push("scripts/musicalbums");break;case 2:i.push("scripts/musicartists");break;case 3:i.push("scripts/musicartists");break;case 4:i.push("scripts/songs");break;case 5:i.push("scripts/musicgenres");break;case 6:i.push("scripts/musicfolders")}require(i,function(e){0==a&&(s.tabContent=n);var i=o[a];i||(i=a?new e(t,r,n):s,2==a?i.mode="albumartists":3==a&&(i.mode="artists"),o[a]=i,i.initTab&&i.initTab()),-1==d.indexOf(a)&&(d.push(a),i.renderTab())})}var s=this;s.initTab=function(){for(var e=t.querySelector(".pageTabContent[data-index='0']"),r=e.querySelectorAll(".itemsContainer"),a=0,i=r.length;i>a;a++)n()?r[a].classList.add("hiddenScrollX"):r[a].classList.remove("hiddenScrollX"),LibraryBrowser.createCardMenus(r[a])},s.renderTab=function(){a()};var o=[],d=[],c=t.querySelector(".libraryViewNav"),u="music.html",m=r.topParentId;m&&(u+="?topParentId="+m),e.configurePaperLibraryTabs(t,c,t.querySelectorAll(".pageTabContent"),[0,4,5,6]),c.addEventListener("tabchange",function(e){i(t,parseInt(e.detail.selectedTabIndex))}),t.addEventListener("viewdestroy",function(){o.forEach(function(e){e.destroy&&e.destroy()})})}});