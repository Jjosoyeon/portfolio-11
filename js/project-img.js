window.addEventListener("load", () => {
  const projectOne = document.querySelector(".project-one");
  const projectTwo = document.querySelector(".project-two");
  const projectThr = document.querySelector(".project-thr");
  const projectOneimg = document.querySelector(".project-one img");

  projectTwo.addEventListener("mouseenter", () => {
    projectOne.style.flex = "1";
    projectTwo.style.flex = "2";
    projectThr.style.flex = "1";
  });

  projectTwo.addEventListener("mouseleave", () => {
    projectTwo.style.flex = "1";
    projectOne.style.flex = "2";
    projectThr.style.flex = "1";
  });
  projectThr.addEventListener("mouseenter", () => {
    projectOne.style.flex = "1";
    projectTwo.style.flex = "1";
    projectThr.style.flex = "2";
  });

  projectThr.addEventListener("mouseleave", () => {
    projectTwo.style.flex = "1";
    projectOne.style.flex = "2";
    projectThr.style.flex = "1";
  });

  const swichBox = document.querySelector(".project-one .swich");

  function moveSwichBox() {
    swichBox.style.transform = "translateX(100px)";
    swichBox.style.transition = "transform 0.7s ease"; // 부드러운 이동
  }

  function resetSwichBox() {
    swichBox.style.transform = "translateX(0)";
  }

  // .project-two와 .project-thr에 마우스가 들어올 때 swichBox 이동
  projectTwo.addEventListener("mouseenter", moveSwichBox);
  projectThr.addEventListener("mouseenter", moveSwichBox);

  // .project-two와 .project-thr에서 마우스가 나갈 때 swichBox 원래 위치로
  projectTwo.addEventListener("mouseleave", resetSwichBox);
  projectThr.addEventListener("mouseleave", resetSwichBox);

  // 두 번째와 세 번째 프로젝트에 마우스 진입 시 첫 번째 프로젝트 채도 낮춤
  [projectTwo, projectThr].forEach((project) => {
    project.addEventListener("mouseenter", () => {
      projectOneimg.style.filter = "saturate(0.3)";
    });

    project.addEventListener("mouseleave", () => {
      projectOneimg.style.filter = "saturate(1.2)"; // 기본 채도로 복원
    });
  });
});
