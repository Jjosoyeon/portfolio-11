const swiperSlides = document.querySelectorAll(".list, .list-two");

swiperSlides.forEach(function (element, index) {
  element.classList.add("list-" + index);
  // 여기에서 Swiper 초기화 대신 GSAP 등을 활용할 수 있음
  let swiper = new Swiper(".list-" + index, {
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    speed: 8000, // 속도 조정
    loop: true,
    slidesPerView: "auto",
    freeMode: true, // 자유롭게 슬라이드 이동
  });
});
