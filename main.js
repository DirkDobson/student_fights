var loaded = false;
function pullStudents() {
  if (!loaded) {
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        var students = JSON.parse(xhr.responseText);
        var list = document.getElementById('students');
        students.forEach( function(student) {
          var li = document.createElement('li')
          li.innerText = student.name
          list.append(li);
        })
        loaded = true 
        document.getElementById('load_students').remove()
      }
    }
    xhr.open('GET', 'https://canvas-students.herokuapp.com/api/student_list/64', true)
    xhr.send(null)
  }
}

var button = document.getElementById('loading_zone')
button.addEventListener('click', pullStudents)
