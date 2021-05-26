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

//데이터 조회
app.get("/diary/:index", function (req, res) {
  var index = Number(req.params.index);
  if (diary[index] == null) {
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

//데이터 추가, 수정
app.put("/diary/:index/:id", function (req, res) {
  var index = Number(req.params.index);
  var id = Number(req.params.id);
  var newtitle = req.body.title;
  var newcontent = req.body.content;
  var str = "일정을 추가했습니다.";
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
});

//데이터 삭제
app.delete("/diary/:index/:id", function (req, res) {
  var index = Number(req.params.index);
  var id = Number(req.params.id);
  diary[index].splice(id, 1);
  res.send({ message: "일정을 삭제했습니다." });
});
http.createServer(app).listen(52273, function () {
  console.log("Server Running at http://127.0.0.1:52273");
});
