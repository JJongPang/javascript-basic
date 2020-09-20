var banner = document.getElementById("banner"),
  img = banner.getElementsByTagName("img"),
  toggle = document.getElementById("toggle"),
  sound_btn = document.getElementById("sound_btn");

//배너의 높이 값 변수
var banner_height = getComputedStyle(banner).height;
//풍선 스프라이트 객체를 정의할 배열
var cast = [];

//풍선 객체 생성 함수
function set_balloon(num) {
  //풍선의 속성 값을 랜덤으로 생성
  //10에서 500사이의 값
  var x = Math.floor(Math.random() * (500 - 10) + 10),
    y = Math.floor(Math.random() * (400 - 120) + 120),
    size = Math.floor(Math.random() * (200 - 100) + 100),
    angle = Math.floor(Math.random() * (360 - 0) + 0),
    speed = Math.random() * (2 - 0) + 0;

  //풍선의 객체
  cast[num] = {
    x: x, //풍선의 x좌표
    y: -y, //풍선의 y좌표
    size: size, // 풍선의 크기
    angle: angle, //풍선의 초기 회전 각도 값
    speed: speed, // 풍선이 떨어지는 속도
  };
}

//풍선의 객체 초기화
function ball_init() {
  for (var i = 0; i < img.length; i++) {
    set_balloon(i);
    img[i].style.left = "-9999px"; //풍선의 x의 좌표
    img[i].style.top = "-9999px"; //풍선의 y의 좌표
  }
}

//풍선 애니메이션 함수
function animate_ballon() {
  for (var i = 0; i < img.length; i++) {
    //풍선 송석 변경
    img[i].style.left = cast[i].x + "px"; //x좌표
    img[i].style.top = cast[i].y + "px"; //y좌표
    img[i].style.transform = "rotate(" + cast[i].angle + "deg)"; //회전
  }
}
ball_init();
