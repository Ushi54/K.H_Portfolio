/*■■■■■■■■■■page-linkスクロールイベント始■■■■■■■■■■■■■*/

/*
""内の値から始まる要素が選択される（href属性の値が#から始まる要素を取得する）
clickメソッド：取得した要素（idが#から始まるaタグ）をクリックした時にclick()内の処理を発動する
*/
$('#page-link a[href^="#"]').click(function () {
  /*ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  $(this)は'#page-link a[href^="#"]'を指す。
  attrメソッド：属性の値を取得する。'#page-link a[href^="#"]'のhref属性の値（#home,#profile,#skill,#portfolio）をelmHashにセットする
  */
  var elmHash = $(this).attr('href');
  /*idの上部の距離を取得
  offsetメソッド：要素の画面の左上からの距離をy軸x軸として取得する。y軸はtop、x軸はleftで取得できる。
  elmHashに格納されているidのx軸を取得してposにセットする
  */
  var pos = $(elmHash).offset().top;
  /*取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  animateメソッド：cssプロパティを連続して変化させることができる。
  body,html要素に対して、scrollTop（指定した数値（pos）までスクロールしてくれるメソッド）を500の速さで実行
  */
  $('body,html').animate({ scrollTop: pos }, 500);
  /*
  親要素のイベントを止める
  親（header要素）にクリックイベントが実装されている場合、return falseがないと、子（a要素）のクリックイベントが実行と同時に親のクリックイベントも実行されてしまう。
  */
  return false;
});

/*■■■■■■■■■■page-linkスクロールイベント終■■■■■■■■■■■■■*/

/*■■■■■■■■■■ヘッダー固定イベント始■■■■■■■■■■■■■*/

const nav = document.querySelector(".nav");
const menu = document.querySelector("#page-link");
const home = document.querySelector(".home");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= menu.offsetTop) {
    nav.classList.add("fxd");
    home.classList.add("add_hi");
  } else {
    nav.classList.remove("fxd");
    home.classList.remove("add_hi");
  }
});


/*■■■■■■■■■■ヘッダー固定イベント終■■■■■■■■■■■■■*/