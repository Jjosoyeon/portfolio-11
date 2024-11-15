document.querySelectorAll(".project-list .p-img img").forEach((image) => {
  image.addEventListener("mouseenter", () => {
    // 현재 호버된 이미지에만 'active' 클래스를 추가
    image.classList.add("active");

    // 다른 이미지에서 'active' 클래스를 제거하여 원래 크기로 설정
    document
      .querySelectorAll(".project-list .p-img img")
      .forEach((otherImage) => {
        if (otherImage !== image) {
          otherImage.classList.remove("active");
        }
      });
  });
});
