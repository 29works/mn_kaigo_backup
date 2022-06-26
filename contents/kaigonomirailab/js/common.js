window.addEventListener('DOMContentLoaded', function() {
	var scroll = new SmoothScroll('a[href*="#"]');
},false)
    
$(function () {
  var tag_json_url = "/contents/kaigonomirailab/tag.json"
  var tag_data = "#tag_data"
  var tag_data_sp = "#tag_data_sp"
  var tag_dom = ".side_tags_list"
  var tag_dom_sp = ".side_tags_list_sp"
  var news_json_url = "/contents/kaigonomirailab/news/news.json"
  var news_data = "#news_data"
  var news_data_sp = "#news_data_sp"
  var news_dom = "#side_news_list"
  var news_dom_sp = "#side_news_list_sp"
  var ichimon_json_url = "/contents/kaigonomirailab/ichimon.json"
  var ichimon_data = "#ichimon_data"
  var ichimon_data_sp = ""
  var ichimon_dom = "#ichimon_bunner"
  var ichimon_dom_sp = ""

  //リストNEWアイコン追加
  $('.content_cassete').each(function(){
    // 現在日時
    var current = new Date();

    // 表示期間
    var period = 20;    
    var period_cn = current.getTime() - (period * 24 * 60 * 60 * 1000);

    // 投稿日
    var post = new Date($(this).attr('postdate'));
    var post_cn = post.getTime();

    if (period_cn < post_cn){
      $(this).append('<span class="c_new"><span>NEW</span></span>');
    }
  });

  function road_json_data(url,compile,compile_sp,dom,dom_sp,) {
    $.ajax({
    url: url,
    async : false,
    }).done(function(result, textStatus, xhr) {
      var compiled = _.template($(compile).html());
      if(ichimon_data_sp) {
        var compiled_sp = _.template($(compile_sp).html());
      }
      var new_icon = "<span class='s_new'><span>NEW</span></span>"
      for (var i = 0; i < result.length; i++) {
        $(dom).append(
          compiled({     
            "url": result[i].url,
            "name": result[i].name,
            "title": result[i].title,
            "date": result[i].date,
          }));

        if(compiled_sp) {
          $(dom_sp).append(
            compiled_sp({
              "url": result[i].url,
              "name": result[i].name,
              "title": result[i].title,
              "date": result[i].date,
          }));
        }
        
        if(dom == "#side_news_list" && i < 3){
          $("#side_news_list li").append(new_icon);
        }
      }

    }).fail(function(xhr, textStatus, error) {
      console.log(error);
    });

  }

  road_json_data(tag_json_url,tag_data,tag_data_sp,tag_dom,tag_dom_sp);
  road_json_data(news_json_url,news_data,news_data_sp,news_dom,news_dom_sp);
  road_json_data(ichimon_json_url,ichimon_data,ichimon_data_sp,ichimon_dom,ichimon_dom_sp);

  //サイドカラムタグ
  // $.ajax({
  //   url: "/contents/kaigonomirailab/tag.json",
  // }).done(function(result, textSstatus, xhr) {
  //   var compiled = _.template($("#tag_data").html());
  //   var compiled_sp = _.template($("#tag_data_sp").html());
  //   for (var i = 0; i < result.length; i++) {
  //     $(".side_tags_list").append(
  //       compiled({
  //         "name": result[i].name,
  //         "url": result[i].url,
  //       }));
  //     $(".side_tags_list_sp").append(
  //       compiled_sp({
  //         "name": result[i].name,
  //         "url": result[i].url,
  //       }));
  //   }

  // }).fail(function(xhr, textStatus, error) {
  //   console.log(error);
  // });


  //サイドカラムニュース
  // $.ajax({
  //   url: "/contents/kaigonomirailab/news/news.json",
  // }).done(function(result, textStatus, xhr) {
  //   var compiled = _.template($("#news_data").html());
  //   var compiled_sp = _.template($("#news_data_sp").html());
  //   var new_icon = "<span class='s_new'><span>NEW</span></span>"
  //   for (var i = 0; i < result.length; i++) {
  //     $("#side_news_list").append(
  //       compiled({
  //         "title": result[i].title,
  //         "date": result[i].date,
  //         "url": result[i].url,
  //       }));
    
      // if (i < 3) {
      //    $("#side_news_list li").append(new_icon);
      // }
    
  //     $("#side_news_list_sp").append(
  //       compiled_sp({
  //         "title": result[i].title,
  //         "date": result[i].date,
  //         "url": result[i].url,
  //     }));
  //   }

  // }).fail(function(xhr, textStatus, error) {
  //   console.log(error);
  // });



});