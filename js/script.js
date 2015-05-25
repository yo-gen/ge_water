$(document).ready(function () {  
  //render the custom form elements
  if($(".form-container").length>0){
     $('.form-container').jqTransform({imgPath:'i/forms/'});
  }
  
  //style the custom scrollbar
  function renderScrollbar()
  {
    if($('.scroll-box .scroll-main').length>0)
    {
      //$('.scroll-box .scroll-main').scroll_absolute({arrows:false});
      $('.scroll-box .scroll-main').mCustomScrollbar("destroy");
      $('.scroll-box .scroll-main').mCustomScrollbar();
    }
  }
  
  //focus on search input box
  $(".search-box").click(function(){
    $(".alerts-contents").addClass("hide");
    $(".alerts-full-mode").addClass("hide");
    $(".sub-gray-nav").addClass("hide");
    $(".ordersubmenu").addClass("hide");
    
    $(this).find(".search-input").focus();
    $(".search-bar").addClass("search-current");
    
    if($(".search-input").val() !== "")
    {
      $(".search-tip").removeClass("hide");
    }
  })
  
  //leave focus on search input box
  $(".search-input").blur(function(){
    if($(".search-input").val() === "")
    $(".search-bar").removeClass("search-current");
  })
  
  //type on search input box
  $(".search-input").keyup(function(){
    if($(this).val() !== "")
      $(".search-tip").removeClass("hide");
    else
      $(".search-tip").addClass("hide");
  })
  
  //click on links in search tooltips
  $(".search-tip .blue-link a").click(function(){
    $(".search-tip").addClass("hide");
  })
  
  //click on search tooltips
  $(".search-tip,.search-box").click(function(event){
    event.stopPropagation();
  })
  
  //click on search button
  $(".btn-search").click(function(event){
    location.href = "search-result.html";
    event.stopPropagation();
  })
  
  //click on page body
  $("html").click(function(){
    $(".search-tip").addClass("hide");
    $(".alerts-contents").addClass("hide");
    $(".alerts-full-mode").addClass("hide");
    $(".sub-gray-nav").addClass("hide");
    $(".ordersubmenu").addClass("hide");
  })
  
  //click alert icon
  $(".icon-alerts").click(function(){
    $(".search-tip").addClass("hide");
    $(".alerts-full-mode").addClass("hide");
    $(".sub-gray-nav").addClass("hide");
    $(".ordersubmenu").addClass("hide");
    
    if($(this).next().hasClass("hide"))
    {
      //show alert
      $(this).next().removeClass("hide")
    }
    else
    {
      //hide alert
      $(this).next().addClass("hide")
    }
  })
  
  //click on alerts content popup
  $(".alerts-contents,.icon-alerts").click(function(event){
    event.stopPropagation();
  })
  
  //click View More button in alerts content popup
  $(".alerts-contents .view-more-alerts-button").click(function(){
    $(".alerts-contents").addClass("hide");
    
    $(".alerts-full-mode").removeClass("hide");
    
    $(".alerts-full-mode").height($(window).height()-$(".header").height());
    
    var scroll_height = $(".alerts-full-mode").height()-$(".alerts-full-mode .blue-bar").height()-$(".alerts-full-mode .titles").height();
    $(".alerts-full-mode .scroll-main").height(scroll_height);
    renderScrollbar();
  })
  
  //click on full mode alerts content popup
  $(".alerts-full-mode").click(function(event){
    event.stopPropagation();
  })
  
  //click close icon in full mode alerts content popup
  $(".icon-close-btn").click(function(){
    $(".alerts-full-mode").addClass("hide");
  })
  
  //click on menu item of left sidebar
  $(".nav-aside ul li a").click(function(){
    if($(this).hasClass("has-sub-nav"))
    {
      var index = $(this).parents("ul").find(".has-sub-nav").index($(this));
      if($(".sub-nav").eq(index).hasClass("hide"))
      {
        //show sub navigation
        $(".sub-nav").eq(index).removeClass("hide");
        
        $(this).parent().parent().find("li.current").removeClass("current").addClass("actived");
        $(this).parent().addClass("current");
      }
      else
      {
        //hide sub navigation
        $(".sub-nav").eq(index).addClass("hide");
        
        $(this).parent().removeClass("current");
        $(this).parent().parent().find("li.actived").removeClass("actived").addClass("current");
      }
    }
  })
  
  //click "5 items" link in gray-nav-bar
  $(".gray-nav-bar ul li .items_link").click(function(){
    $(".search-tip").addClass("hide");
    $(".alerts-contents").addClass("hide");
    $(".alerts-full-mode").addClass("hide");
    $(".ordersubmenu").addClass("hide");
    
    if($(".sub-gray-nav").hasClass("hide"))
    {
      //show sub gray nav
      $(".sub-gray-nav").removeClass("hide");
    }
    else
    {
      //hide sub gray nav
      $(".sub-gray-nav").addClass("hide");
    }
  })
  
  //click on gray-nav-bar
  $(".gray-nav-bar").click(function(event){
    event.stopPropagation();
  })
  
  //click on tabs
  $(".tab-nav li").click(function(){
    var tab_class = $(this).attr("data-tab-class");
    if(tab_class !== "")
    {
      //show tab content
      $(this).parent().find("li.current").removeClass("current");
      $(this).addClass("current");
      $(".tab-content-general").addClass("hide");
      $("."+tab_class).removeClass("hide");
      if(tab_class === "payment-history-contents" || tab_class === "open-invoices-contents")
      {
        $(".right-info-amount-detail").removeClass("hide");
      }
      else
      {
        $(".right-info-amount-detail").addClass("hide");
      }
      
      renderScrollbar();
    }
    else
    {
      //no tab content
      return;
    }
  })
  
  //click on sub tabs
  $(".sub-nav-bar li").click(function(){
    var tab_class = $(this).attr("data-sub-tab-class");
    if(tab_class !== "")
    {
      //show tab content
      $(this).parent().find("li.current").removeClass("current");
      $(this).addClass("current");
      $(this).parents(".tab-content-general").find(".sub-tab-content-general").addClass("hide");
      $("."+tab_class).removeClass("hide");
    }
    else
    {
      //no tab content
      return;
    }
  })
  
  //click on plus/minus icon in the Order History table rows
  $(".order-history-contents .icon-btn .plus,.order-history-contents .icon-btn .mimus").click(function(){
    if($(this).hasClass("plus"))
    {
      //expand the sub rows
      $(this).removeClass("plus").addClass("mimus");
      $(this).parents("dd").find(".sub-rows").removeClass("hide");
    }
    else
    {
      //close the sub rows
      $(this).removeClass("mimus").addClass("plus");
      $(this).parents("dd").find(".sub-rows").addClass("hide");
    }
  })
  
  //click on Setting icons
  $(".setting a").click(function(){
    var setting_popup = $(this).parent().next();
    if(setting_popup.hasClass("hide"))
    {
      //show popup
      $(".ordersubmenu").addClass("hide");
      setting_popup.removeClass("hide");
    }
    else
    {
      //hide popup
      $(".ordersubmenu").addClass("hide");
      setting_popup.addClass("hide");
    }
  })
  
  //click on buttons in setting popup
  $(".ordersubmenu li a").click(function(){
    $(this).parents(".ordersubmenu").addClass("hide");
  })
  
  //click on setting icon and setting popup
  $(".setting a,.ordersubmenu").click(function(event){
    $(".search-tip").addClass("hide");
    $(".alerts-contents").addClass("hide");
    $(".alerts-full-mode").addClass("hide");
    $(".sub-gray-nav").addClass("hide");
    
    event.stopPropagation();
  })
  
  //click on plus/minus icon in the Open Invoices table rows
  $(".open-invoices-contents .icon-btn a").click(function(){
    if($(this).parent().parent().hasClass("plus"))
    {
      //expand the sub rows
      $(this).parent().parent().removeClass("plus").addClass("minus");
      $(this).parent().parent().next().removeClass("hide");
    }
    else
    {
      //close the sub rows
      $(this).parent().parent().removeClass("minus").addClass("plus");
      $(this).parent().parent().next().addClass("hide");
    }
  })
  
  //click expand/close icon in Search result page
  $(".clo-info-title .up-arrow,.clo-info-title .down-arrow").click(function(){
    if($(this).hasClass("up-arrow"))
    {
      //hide detail
      $(this).removeClass("up-arrow").addClass("down-arrow");
      $(this).parent().next().addClass("hide");
    }
    else
    {
      //show detail
      $(this).removeClass("down-arrow").addClass("up-arrow");
      $(this).parent().next().removeClass("hide");
    }
  })
  
  //click Find Documents button
  $(".find-docuemts-button").click(function(){
    $(".results-data").removeClass("hide");
  })
  
  //click expand/close icon in My Profile page
  $(".titles .up-arrow,.titles .down-arrow").click(function(){
    if($(this).hasClass("up-arrow"))
    {
      //hide detail
      $(this).removeClass("up-arrow").addClass("down-arrow");
      $(this).parent().next().addClass("hide");
    }
    else
    {
      //show detail
      $(this).removeClass("down-arrow").addClass("up-arrow");
      $(this).parent().next().removeClass("hide");
    }
  })
  
  if($(".support-contents").length>0)
  {
    var sidebar_height = $(document).height()-$(".header").height()-$(".contents .titles").height();
    var scrollbar_height = sidebar_height - $(".support-contents .right-info .right-titles").height()-35;
    $(".support-contents .right-info").height(sidebar_height);
    
    $(".support-contents .right-info .scroll-main").height(scrollbar_height);
    renderScrollbar();
  }
  
  //navigate to specify tab
  function tabNavigation(){
    var params = "";
    var aParams = document.location.href.split('?');
    if(aParams.length === 1)
      return;
    params = aParams[1].split('=');
    if(params.length === 1)
      return;
    
    if(params[1] !== "")
    {
      var tabs = $(".tab-nav li");
      for(var i=0;i<tabs.length;i++)
      {
        if(tabs.eq(i).attr("data-tab-class") === params[1].toString())
        {
          tabs.eq(i).click();
        }
      }
    }
  }
  tabNavigation();
  
  //resize window
  $(window).resize(function(){
    $(".alerts-full-mode").height($(window).height()-$(".header").height());
    
    $(".alerts-full-mode .scroll-main").height(0);
    var scroll_height = $(".alerts-full-mode").height()-$(".alerts-full-mode .blue-bar").height()-$(".alerts-full-mode .titles").height();
    
    $(".alerts-full-mode .scroll-main").height(scroll_height);
    
    if($(".support-contents").length>0)
    {
      $(".support-contents .right-info").height(0);
      $(".support-contents .right-info .scroll-main").height(0);
      var sidebar_height = $(document).height()-$(".header").height()-$(".contents .titles").height();
      var scrollbar_height = sidebar_height - $(".support-contents .right-info .right-titles").height()-35;

      $(".support-contents .right-info").height(sidebar_height);
      $(".support-contents .right-info .scroll-main").height(scrollbar_height);
    }
    renderScrollbar();
  })
  
  //click sorting arrows of table
  $(".data-table-contents .sorting-dwon-btn,.data-table-contents .sorting-up-btn").click(function(){
    if($(this).hasClass("sorting-dwon-btn"))
    {
      //sort by ascending
      $(this).removeClass("sorting-dwon-btn").addClass("sorting-up-btn");
      var sort_column_index = $(this).parent().parent().find("span").index($(this).parent());
      
      var sorted_rows = $(this).parents(".data-table-contents").find("dd");
      var length = sorted_rows.length;
      
      for (var i=0;i<length;i++){
        for (var j=i+1;j<length;j++){
          if(!$(this).hasClass("status-sort"))
          {
            //sort by date
            var value_i = sorted_rows.eq(i).find("span").eq(sort_column_index).html();
            var value_j = sorted_rows.eq(j).find("span").eq(sort_column_index).html();
            var string_value_i = value_i.replace(",","").split(" ");
            var string_value_j = value_j.replace(",","").split(" ");
            switch(string_value_i[0])
            {
              case "Jan":
                string_value_i[0] = "1";
                break;
              case "Feb":
                string_value_i[0] = "2";
                break;
              case "Mar":
                string_value_i[0] = "3";
                break;
              case "Apr":
                string_value_i[0] = "4";
                break;
              case "May":
                string_value_i[0] = "5";
                break;
              case "June":
                string_value_i[0] = "6";
                break;
              case "July":
                string_value_i[0] = "7";
                break;
              case "Aug":
                string_value_i[0] = "8";
                break;
              case "Sept":
                string_value_i[0] = "9";
                break;
              case "Oct":
                string_value_i[0] = "10";
                break;
              case "Nov":
                string_value_i[0] = "11";
                break;
              case "Dec":
                string_value_i[0] = "12";
                break;
            }
            
            switch(string_value_j[0])
            {
              case "Jan":
                string_value_j[0] = "1";
                break;
              case "Feb":
                string_value_j[0] = "2";
                break;
              case "Mar":
                string_value_j[0] = "3";
                break;
              case "Apr":
                string_value_j[0] = "4";
                break;
              case "May":
                string_value_j[0] = "5";
                break;
              case "June":
                string_value_j[0] = "6";
                break;
              case "July":
                string_value_j[0] = "7";
                break;
              case "Aug":
                string_value_j[0] = "8";
                break;
              case "Sept":
                string_value_j[0] = "9";
                break;
              case "Oct":
                string_value_j[0] = "10";
                break;
              case "Nov":
                string_value_j[0] = "11";
                break;
              case "Dec":
                string_value_j[0] = "12";
                break;
            }
            
            
            if(parseInt(string_value_i[2]) > parseInt(string_value_j[2]))
            {
              //compare year value
              sorted_rows.eq(j).insertBefore(sorted_rows.eq(i));
              sorted_rows = $(this).parents(".data-table-contents").find("dd");
              continue;
            }
            else if(parseInt(string_value_i[2]) === parseInt(string_value_j[2]))
            {
              if(parseInt(string_value_i[0]) > parseInt(string_value_j[0]))
              {
                //compare month value
                sorted_rows.eq(j).insertBefore(sorted_rows.eq(i));
                sorted_rows = $(this).parents(".data-table-contents").find("dd");
                continue;
              }else if(parseInt(string_value_i[0]) === parseInt(string_value_j[0]))
              {
                if(parseInt(string_value_i[1]) > parseInt(string_value_j[1]))
                {
                  //compare date value
                  sorted_rows.eq(j).insertBefore(sorted_rows.eq(i));
                  sorted_rows = $(this).parents(".data-table-contents").find("dd");
                  continue;
                }
              }
            }
          }
          else
          {
            //sort by status
            var status_i = sorted_rows.eq(i).find("span").eq(sort_column_index).find("i").eq(0).html();
            var status_j = sorted_rows.eq(j).find("span").eq(sort_column_index).find("i").eq(0).html();
            
            if(status_i.localeCompare(status_j) === 1)
            {
              sorted_rows.eq(j).insertBefore(sorted_rows.eq(i));
              sorted_rows = $(this).parents(".data-table-contents").find("dd");
            }
          }
        }
      }
    }
    else
    {
      //sort by descending
      $(this).removeClass("sorting-up-btn").addClass("sorting-dwon-btn");
      var sort_column_index = $(this).parent().parent().find("span").index($(this).parent());
      
      var sorted_rows = $(this).parents(".data-table-contents").find("dd");
      var length = sorted_rows.length;
      
      for (var i=0;i<length;i++){
        for (var j=i+1;j<length;j++){
          if(!$(this).hasClass("status-sort"))
          {
            //sort by date
            var value_i = sorted_rows.eq(i).find("span").eq(sort_column_index).html();
            var value_j = sorted_rows.eq(j).find("span").eq(sort_column_index).html();
            var string_value_i = value_i.replace(",","").split(" ");
            var string_value_j = value_j.replace(",","").split(" ");
            switch(string_value_i[0])
            {
              case "Jan":
                string_value_i[0] = "1";
                break;
              case "Feb":
                string_value_i[0] = "2";
                break;
              case "Mar":
                string_value_i[0] = "3";
                break;
              case "Apr":
                string_value_i[0] = "4";
                break;
              case "May":
                string_value_i[0] = "5";
                break;
              case "June":
                string_value_i[0] = "6";
                break;
              case "July":
                string_value_i[0] = "7";
                break;
              case "Aug":
                string_value_i[0] = "8";
                break;
              case "Sept":
                string_value_i[0] = "9";
                break;
              case "Oct":
                string_value_i[0] = "10";
                break;
              case "Nov":
                string_value_i[0] = "11";
                break;
              case "Dec":
                string_value_i[0] = "12";
                break;
            }
            
            switch(string_value_j[0])
            {
              case "Jan":
                string_value_j[0] = "1";
                break;
              case "Feb":
                string_value_j[0] = "2";
                break;
              case "Mar":
                string_value_j[0] = "3";
                break;
              case "Apr":
                string_value_j[0] = "4";
                break;
              case "May":
                string_value_j[0] = "5";
                break;
              case "June":
                string_value_j[0] = "6";
                break;
              case "July":
                string_value_j[0] = "7";
                break;
              case "Aug":
                string_value_j[0] = "8";
                break;
              case "Sept":
                string_value_j[0] = "9";
                break;
              case "Oct":
                string_value_j[0] = "10";
                break;
              case "Nov":
                string_value_j[0] = "11";
                break;
              case "Dec":
                string_value_j[0] = "12";
                break;
            }
            
            
            if(parseInt(string_value_i[2]) < parseInt(string_value_j[2]))
            {
              //compare year value
              sorted_rows.eq(j).insertBefore(sorted_rows.eq(i));
              sorted_rows = $(this).parents(".data-table-contents").find("dd");
              continue;
            }
            else if(parseInt(string_value_i[2]) === parseInt(string_value_j[2]))
            {
              if(parseInt(string_value_i[0]) < parseInt(string_value_j[0]))
              {
                //compare month value
                sorted_rows.eq(j).insertBefore(sorted_rows.eq(i));
                sorted_rows = $(this).parents(".data-table-contents").find("dd");
                continue;
              }else if(parseInt(string_value_i[0]) === parseInt(string_value_j[0]))
              {
                if(parseInt(string_value_i[1]) < parseInt(string_value_j[1]))
                {
                  //compare date value
                  sorted_rows.eq(j).insertBefore(sorted_rows.eq(i));
                  sorted_rows = $(this).parents(".data-table-contents").find("dd");
                  continue;
                }
              }
            }
          }
          else
          {
            //sort by status
            var status_i = sorted_rows.eq(i).find("span").eq(sort_column_index).find("i").eq(0).html();
            var status_j = sorted_rows.eq(j).find("span").eq(sort_column_index).find("i").eq(0).html();
            
            if(status_i.localeCompare(status_j) === -1)
            {
              sorted_rows.eq(j).insertBefore(sorted_rows.eq(i));
              sorted_rows = $(this).parents(".data-table-contents").find("dd");
            }
          }
        }
      }
    }
  })
  
  //click on menu icon in mobile header
  $(".mobile-header .icon-btn-menu").click(function(){
    if($(".nav-aside").is(":hidden"))
    {
      //show menu in mobile
      $(".nav-aside").show();
      $(".wrapper").addClass("moving");
    }
    else
    {
      //hide menu in mobile
      $(".nav-aside").hide();
      $(".wrapper").removeClass("moving");
    }
  })
});