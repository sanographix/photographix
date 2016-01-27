$(function(){
  $('#main').infinitescroll({

    navSelector  : ".pagenation-index",
    nextSelector : ".pagenation-index a.next",
    itemSelector : ".post",
    animate      : false,
    loading: {
        img: "http://static.tumblr.com/xlsgtjb/W5no1ir9f/loading.gif",
        msgText: "Loading...",
        finishedMsg: 'The End'
    }
  });

});