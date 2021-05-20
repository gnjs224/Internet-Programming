var diary = new Array(365);
var obj = { title: "asd", content: "asdgawd" };
if (diary[0] == null) {
  diary[0] = new Array();
  diary[0].push(obj);
}
console.log(diary[0][0]);
console.log(diary.length);
