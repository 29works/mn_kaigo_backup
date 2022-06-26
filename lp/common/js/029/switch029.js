var ua = navigator.userAgent;
if((ua.indexOf('Android') > 0 && ua.indexOf('Mobile') == -1) || ua.indexOf('iPad') > 0 || ua.indexOf('Kindle') > 0 || ua.indexOf('Silk') > 0)
{//タブレット
	document.write('<script src="/lp/common/js/029/owl.carousel_pc.js"></script>');
  document.write('<script src="/lp/common/js/029/application029_pc.js"></script>');
} else if ((ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) || ua.indexOf('iPhone') > 0 || ua.indexOf('Blackberry') > 0 || ua.indexOf('iPhone') > 0)
{//スマートフォン
  document.write('<script src="/lp/common/js/029/owl.carousel_sp.js"></script>');
	document.write('<script src="/lp/common/js/029/application029_sp.js"></script>');
} else
{//その他
  document.write('<script src="/lp/common/js/029/owl.carousel_pc.js"></script>');
	document.write('<script src="/lp/common/js/029/application029_pc.js"></script>');
}
