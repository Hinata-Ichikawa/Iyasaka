var options = {
    parallax: true
};

var mySwiper = new Swiper ('.swiper-container', {

    // オプションパラメータ(一部のみ抜粋)
    loop: true, // 最後のスライドまで到達した場合、最初に戻らずに続けてスライド可能にするか。
    centeredSlides: true,
    speed: 600, // スライドが切り替わるトランジション時間(ミリ秒)。
    slidesPerView: 4, // 何枚のスライドを表示するか
    spaceBetween: 10, // スライド間の余白サイズ(ピクセル)
    direction: 'horizontal', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
    effect: 'fade', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)
 
    // スライダーの自動再生
    // autoplay: true 　のみなら既定値での自動再生
    autoplay: {
      delay: 3000, // スライドが切り替わるまでの表示時間(ミリ秒)
      stopOnLast: false, // 最後のスライドまで表示されたら自動再生を中止するか
      disableOnInteraction: true // ユーザーのスワイプ操作を検出したら自動再生を中止するか
    },
 
    // レスポンシブ化条件
    breakpoints: {
      // 980ピクセル幅以下になったら
      980: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // 640ピクセル幅以下になったら
      640: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    },
 
    // ページネーションを表示する場合
    pagination: {
      el: '.swiper-pagination',　 // ページネーションを表示するセレクタ
    },
 
    // 前後スライドへのナビゲーションを表示する場合
    navigation: {
      nextEl: '.swiper-button-next', // 次のスライドボタンのセレクタ
      prevEl: '.swiper-button-prev', // 前のスライドボタンのセレクタ
    },
 
    // スクロールバーを表示する場合
    scrollbar: {
      el: '.swiper-scrollbar', // スクロールバーを表示するセレクタ
    }
  });

  $('.slider').slick({
    slidesToShow: 5,
    centerMode: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0, //待ち時間を０に
    speed: 10000, // スピードをゆっくり
    swipe: false, // 操作による切り替えはさせない
    cssEase: 'linear', // 切り替えイージングを'linear'に
    // 以下、操作後に止まってしまう仕様の対策
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
   
    // 以下、レスポンシブ
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // $('.Life_slider').slick({
  //   slidesToShow: 5,
  //   centerMode: true,
  //   arrows: false,
  //   autoplay: true,
  //   autoplaySpeed: 3000, //待ち時間を０に
  //   speed: 1000, // スピードをゆっくり
  //   swipe: false, // 操作による切り替えはさせない
  //   // 以下、操作後に止まってしまう仕様の対策
  //   pauseOnFocus: false,
  //   pauseOnHover: false,
  //   pauseOnDotsHover: false,
   
  //   // 以下、レスポンシブ
  //   responsive: [
  //     {
  //       breakpoint: 750,
  //       settings: {
  //         slidesToShow: 1,
  //       }
  //     }
  //   ]
  // });