$(function(){

    $('a').each(function() {
      var a = this;
      if (a.origin !== location.origin) {
        $(a).attr('target', '_blank');
      }
    });

  $('#main').infinitescroll({

    navSelector  : ".pagenation-index",
    nextSelector : ".pagenation-index a.next",
    itemSelector : ".post",
    animate      : false,
    loading: {
        img: "//static.tumblr.com/xlsgtjb/V4Zne2alt/blank.gif",
        msgText: "<div class='spinner'><div class='rect1'></div><div class='rect2'></div><div class='rect3'></div><div class='rect4'></div><div class='rect5'></div></div>",
        finishedMsg: ''
    }
  });

  // 最近の記事出す
  $(function(){
    $("#related").jq_tumblrPostList({
      api_key:"Z8OAGgeUyNQUxnjJuKBF5pzZ54xSGAlBakWrqBoz7LhZOgIvnx",
      domain: location.host, //取得先となるTumblrサイトのドメイン
      limit:10 //記事の数
    });
  });

});