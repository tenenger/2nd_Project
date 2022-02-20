let slides = document.querySelector(".slides");
let slide = document.querySelectorAll(".slides li");
let currentIdx = 0;
let slideCount = slide.length;
let slideWidth = 720; // slide의 width값을 선언해준다.
let slideMargin = 30; // slide의 margin값을 선언해준다.
let oneSlideWidth = slideWidth + slideMargin;
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

function updateWidth() {
  // 클론태그를 포함한 이미지 슬라이드의 li태그를 모두 가져옵니다.(15)
  let currentSlides = document.querySelectorAll(".slides li");

  // 클론태그를 포함한 이미지 슬라이드의 개수를 측정합니다.(15)
  let newSlideCount = currentSlides.length;

  // 클론태그를 포함한 이미지 슬라이드의 가로길이를 측정하여 변수로 선언합니다.
  let newWidth = oneSlideWidth * newSlideCount - slideMargin + "px";

  // 슬라이드의 width style을 newWidth의 값으로 새로 지정합니다.
  slides.style.width = newWidth;
}
function setInitailPos() {
  // 현재 화면에 보이는 위치가 클론태그가 생성된 맨 앞이기 때문에, 중간으로 이동시켜야한다.
  // 기존 태그의 길이 * -(width+margin) 한만큼 x축을 움직여 준다.
  let initialPositionValue = -oneSlideWidth * slideCount;
  slides.style.transform = `translateX(${initialPositionValue}px)`;
}

// nextBtn과 prevBtn을 클릭하면, 슬라이드의 currentIdx값을 변경시켜준다.
nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
  nextBtn.style.pointerEvents = "none";
  setTimeout(() => {
    nextBtn.style.pointerEvents = "auto";
  }, 500);
});
prevBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
  prevBtn.style.pointerEvents = "none";
  setTimeout(() => {
    prevBtn.style.pointerEvents = "auto";
  }, 500);
});

function moveSlide(idx) {
  // idx값만큼 slides의 left값을 변경시켜준다.
  slides.style.left = -idx * oneSlideWidth + "px";

  // currentIdx를 입력받은 값으로 변경시켜준다.
  currentIdx = idx;

  console.log(`현재 인덱스 값: ${currentIdx}`, `슬라이드크기: ${slideCount}`);

  // 만약 인덱스가 현재 슬라이드의 인덱스값을 넘어갈경우에
  if (currentIdx == slideCount || currentIdx == -slideCount) {
    // css의 transtion값만큼 500ms초에 animate를 지워 사진을 이동시키고, 100ms만에 animate를 다시 넣어준다.
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  }
}

// 초기 slide 개수만큼 복사하기위함
function makeClone() {
  for (let i = 0; i < slideCount; i++) {
    // 초기에 생성된 silde개수만큼 복제한다.
    let cloneSlide = slide[i].cloneNode(true);

    // 복사한 cloneSlide에 clone 클래스명을 준다. 필요없는 내용이기도 하다.
    cloneSlide.classList.add("back_clone");

    // 초기 slides뒤에 클론복제한 cloneSlide를 붙여준다.
    slides.appendChild(cloneSlide);
  }
  console.log(slideCount);
  for (let i = slideCount - 1; i >= 0; i--) {
    // 초기에 생성된 silde개수만큼 복제한다. 여기서 중요한점은 복제한 클론태그는 앞에 붙이기때문에 뒤에서 부터 복제한다.
    let cloneSlide = slide[i].cloneNode(true);

    // 복사한 cloneSlide에 clone 클래스명을 준다. 필요없는 내용이기도 하다.
    cloneSlide.classList.add("front_clone");

    // 초기 slides앞에 클론복제한 cloneSlide를 붙여준다.
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitailPos();

  // 이미지가 중간으로 이동할때 animate가 있으면 이동하는게 보이니, 100ms초 후에 animate를 추가해준다.
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
}

makeClone();
