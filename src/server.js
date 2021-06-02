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
// # 5/26 142
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
//imformation 데이터 조회
app.get("/imformation/", function (req, res) {
  if (imformation != null) {
    res.send(imformation);
  }
});
app.get("/imformation/:index/:id", function (req, res) {});

//imformation 데이터 추가, 수정
app.put("/imformation/:index/:id", function (req, res) {});

//imformation 데이터 삭제
app.delete("/imformation/:index/:id", function (req, res) {});
//record 데이터 조회
app.get("/record/:index", function (req, res) {});
app.get("/record/:index/:id", function (req, res) {});

//record 데이터 추가, 수정
app.put("/record/:index/:id", function (req, res) {});

//record 데이터 삭제
app.delete("/record/:index/:id", function (req, res) {});
//project 데이터 조회
app.get("/project/:index", function (req, res) {});
app.get("/project/:index/:id", function (req, res) {});

//project 데이터 추가, 수정
app.put("/project/:index/:id", function (req, res) {});

//project 데이터 삭제
app.delete("/project/:index/:id", function (req, res) {});
//goal 데이터 조회
app.get("/goal/:index", function (req, res) {});
app.get("/goal/:index/:id", function (req, res) {});

//goal 데이터 추가, 수정
app.put("/goal/:index/:id", function (req, res) {});

//goal 데이터 삭제
app.delete("/goal/:index/:id", function (req, res) {});
//plan 데이터 조회
app.get("/plan/:index", function (req, res) {});
app.get("/plan/:index/:id", function (req, res) {});

//plan 데이터 추가, 수정
app.put("/plan/:index/:id", function (req, res) {});

//plan 데이터 삭제
app.delete("/plan/:index/:id", function (req, res) {});

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
