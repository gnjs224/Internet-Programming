var http = require("http");
var express = require("express");
var app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.get("", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/me", function (req, res) {
  res.sendFile(__dirname + "/me.jpg");
});

app.get("/main", function (req, res) {
  res.sendFile(__dirname + "/main.png");
});

var diary = new Array(365);
var imformation = new Array();
var record = new Array();
var project = new Array();
var goal = new Array();
var plan = new Array();
imformation[0] = new Array();
imformation[0].push(
  "기본정보",
  { title: "이름", content: "김지훈" },
  { title: "생년월일", content: "1998/02/24" },
  { title: "성별", content: "남자" },
  { title: "최종학력", content: "명지대학교" },
  { title: "전공", content: "컴퓨터공학과" }
);
imformation[1] = new Array();
imformation[1].push(
  "연락처",
  { title: "Email", content: "ben224@naver.com" },
  { title: "전화번호", content: "010 7653 6434" },
  { title: "인스타그램", content: "j_h_kimm" }
);
imformation[2] = new Array();
imformation[2].push(
  "계정",
  { title: "github", content: "gnjs224" },
  { title: "백준", content: "ben224" },
  { title: "벨로그", content: "gnjs224" }
);
record[0] = new Array();
record[0].push("수상");
record[1] = new Array();
record[1].push("경력");
record[2] = new Array();
record[2].push("자격증 : 취득일자", {
  title: "운전면허증",
  content: "2021년 4월 7일",
});
record[3] = new Array();
record[3].push("어학점수", { title: "TEPS", content: "302점" });
record[4] = new Array();
record[4].push("학점", "3.9/4.5");
record[5] = new Array();
record[5].push(
  "학력",
  { title: "고등학교", content: "동안고등학교" },
  { title: "대학교", content: "명지대학교" }
);
project.push(
  {
    title: "공공데이터 분석",
    tag: "데이터 마이닝, 데이터 시각화, 파이썬",
    content:
      "공공데이터를 다운받아 파이썬으로 다양한 라이브러리를 사용하여 시각화하고 ~~(예시)",
    myRole: "팀장으로써 ~~ 팀들과의 ~~ (예시)",
  },
  {
    title: "이력 웹페이지 제작",
    tag: "javascript, jQuery, html, css",
    content: "개인프로젝트이고 왜 주제를 이걸로 선택했고 ~~(예시)",
    myRole: "개인프로젝트 였기때문에 ~~(예시)",
  }
);
goal.push(
  {
    title: "이 웹사이트 만들어서 배포하기",
    content:
      "이 프로젝트에 데이터베이스를 추가하여 더 다양한 기능을 구현하여 배포하고 싶다.예를 들어 로그인, 회원가입 등의 기능과 각 메뉴의 추가/수정/삭제 기능을 구현할 수 있고 회원은 자신의 내용만 건드릴 수 있으며 기업 쪽은 조회만 가능하게 하는 것이다. ",
  },
  {
    title: "장래 포부",
    content: "예시",
  }
);
plan.push({
  title: "자기계발을 꾸준히",
  content: "예시",
});
// # 5/23 142
diary[131] = new Array();
diary[131].push({
  title: "주제 정하기",
  content: "이 프로젝트의 주제를 정하고 구상했다.",
});
diary[135] = new Array();
diary[135].push({
  title: "네비게이션바, 홈화면 구현",
  content: "네비게이션바와 홈화면 구현을 완료했다.",
});
diary[132] = new Array();
diary[132].push({
  title: "initial commit",
  content: "Readme파일에 두 줄 정도 적고 커밋했다.",
});
diary[136] = new Array();
diary[136].push({
  title: "다이어리 페이지 중 달력 구현",
  content: "달력 구현이 제일 어려울 줄 알았다.",
});
diary[139] = new Array();
diary[139].push({
  title: "서버 구현",
  content: "server.js을 초기 구현했다.",
});
diary[142] = new Array();
diary[142].push({
  title: "Restful",
  content: "diary에 CRUD가 동작하게끔 구현했다",
});
diary[155] = new Array();
diary[155].push({
  title: "프로젝트 마무리",
  content: "보기좋게 꾸미기, 내용채우기, 보고서 작성 시작 등 ",
});
diary[156] = new Array();
diary[156].push({
  title: "과제 마감일",
  content: "인터넷프로그래밍 중간 프로젝트 마감",
});
//imformation 데이터 조회
app.get("/imformation/", function (req, res) {
  if (imformation != null) {
    res.send(imformation);
  }
});
app.get("/imformation/:index/:id", function (req, res) {
  var index = Number(req.params.index);
  var id = Number(req.params.id);
});
//record 데이터 조회
app.get("/record/", function (req, res) {
  if (record != null) {
    res.send(record);
  }
});
//project 데이터 조회
app.get("/project/", function (req, res) {
  if (project != null) res.send(project);
});

//goal 데이터 조회
app.get("/goal/", function (req, res) {
  if (goal != null) res.send(goal);
});

//plan 데이터 조회
app.get("/plan/", function (req, res) {
  if (plan != null) res.send(plan);
});

//diary데이터 조회
app.get("/diary/:index", function (req, res) {
  var index = Number(req.params.index);
  if (diary[index] == null || diary[index].length == 0) {
    res.send({
      error: "일정이 없습니다.",
    });
  } else {
    res.send(diary[index]);
  }
});
app.get("/diary/:index/:id", function (req, res) {
  var index = Number(req.params.index);
  var id = Number(req.params.id);
  res.send(diary[index][id]);
});

//diary데이터 추가, 수정
app.put("/diary/:index/:id", function (req, res) {
  var index = Number(req.params.index);
  var id = Number(req.params.id);
  var newtitle = req.body.title;
  var str = "일정을 추가했습니다.";
  if (newtitle.trim().length == 0) {
    res.send({ error: "제목을 입력하세요." });
  } else {
    var newcontent = req.body.content;

    if (diary[index] == null) {
      diary[index] = new Array();
    }
    if (isNaN(id)) {
      diary[index].push({ title: newtitle, content: newcontent });
    } else {
      diary[index][id].title = newtitle;
      diary[index][id].content = newcontent;
      str = "일정을 수정했습니다.";
    }
    res.send({ message: str });
  }
});

//diary데이터 삭제
app.delete("/diary/:index/:id", function (req, res) {
  var index = Number(req.params.index);
  var id = Number(req.params.id);
  diary[index].splice(id, 1);
  res.send({ message: "일정을 삭제했습니다." });
});
http.createServer(app).listen(52273, function () {
  console.log("Server Running at http://127.0.0.1:52273");
});
