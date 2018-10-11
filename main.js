var loaded = false;
var students = [];

function renderStudents() {
  var list = document.getElementById('students')
  list.innerHTML = null;
  students.forEach( function(student) {
    var li = document.getElementById('li')
    li.innerText = student.name
    list.append(li)
  })
}

function sample() {
  var index = Math.floor(Math.random() * students.length)
  var student = students[index]
  students.splice(index, 1)
  return student
}

function selectStudents() {
  var left = sample();
  var right = sample();
  renderStudents();
  return [left, right]
}

function startFight() {
  loaded = true
  var left = document.getElementById('left')
  var right = document.getElementById('right')
  left.className = 'left fight-box';
  right.className = 'left fight-box';
  var fighting = selectStudents();
  console.log(fighting)
}
function pullStudents() {
  if (!loaded) {
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        students = JSON.parse(xhr.responseText);
        renderStudents();
        document.getElementById('load_students').remove();
        startFight();
      }
    }
    xhr.open('GET', 'https://canvas-students.herokuapp.com/api/student_list/64', true)
    xhr.send(null)
  }
}

var button = document.getElementById('loading_zone')
button.addEventListener('click', pullStudents)
