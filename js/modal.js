const menuIcon = document.querySelector(".menu-icon");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-btn");

menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("active");

  if (menuIcon.classList.contains("active")) {
    modal.classList.add("active"); // 모달이 열림
  } else {
    // X에서 =로 돌아가는 애니메이션에 딜레이 추가 후 모달 닫기
    setTimeout(function () {
      modal.classList.remove("active"); // 모달 닫기
    }, 300); // 애니메이션 후 300ms 뒤에 모달 닫기
  }
});

closeButton.addEventListener("click", function () {
  menuIcon.classList.remove("active"); // = 모양으로 변환
  setTimeout(function () {
    modal.classList.remove("active"); // 모달 닫기
  }, 300); // 애니메이션이 끝나고 300ms 뒤에 모달 닫기
});
