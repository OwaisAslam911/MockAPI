
const succesMessage = document.getElementById("successMessage");
succesMessage.style.display = 'none';


var userid;

async function createDATA() {


  // values contain from index html form 

  var studentName = document.getElementById("studentName").value;
  var studentEmail = document.getElementById("studentEmail").value;
  var studentCourse = document.getElementById("studentCourse").value;




  // values validation

  if (!studentName || !studentEmail || !studentCourse) {
    succesMessage.style.display = 'block';
    succesMessage.classList = "alert alert-danger"
    succesMessage.innerText = "Kindly valid  values !! "
    window.location.href='studentlist.html'
  }


  // creating object for api where this object keys must be similar to api object keys  

  const newUser = {
    name: studentName,
    email: studentEmail,
    course: studentCourse,
  }




  const Response = await fetch("https://66c46cafb026f3cc6cef4c3e.mockapi.io/aptech/NewAddmission", {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser)

  })


  succesMessage.style.display = 'block';
  succesMessage.classList = "alert alert-success"
  succesMessage.innerText = "Registration  Successfully Made !! "




}

var stdlist;
async function fetchdata() {
  var stdlist = await fetch("https://66c46cafb026f3cc6cef4c3e.mockapi.io/aptech/NewAddmission");
  var studentlist = await stdlist.json();

  table(studentlist)
}
function table(apidata) {


  for (var i = 0; i <= apidata.length; i++) {

    var apiDataSet = apidata;

    // console.log(apiDataSet)
    var TableRow = document.createElement('tr');

    var TableHeader = document.createElement('td');
    TableHeader.innerText = apiDataSet[i].id;
    userid=apiDataSet[i];



    TableRow.append(TableHeader);
    var TableData1 = document.createElement('td');
    TableData1.innerText = apidata[i].name;
    TableRow.append(TableData1);

    var TableData2 = document.createElement('td');
    TableData2.innerText = apidata[i].email
      ;
    TableRow.append(TableData2);

    var TableData3 = document.createElement('td');
    TableData3.innerText = apidata[i].course;
    TableRow.append(TableData3);


    // Create a single cell for links
    var ButtonCell = document.createElement('td');

    // Create and configure Edit button
    var EditButton = document.createElement('a');
    EditButton.innerText = 'Edit';
    EditButton.className = 'btn btn-primary';
    EditButton.dataset.id = apiDataSet.id
    EditButton.href = `update.html?userid=${userid.id}`;

    ButtonCell.append(EditButton);

    // Create and configure Delete button
    var DeleteButton = document.createElement('button');
    DeleteButton.innerText = 'Delete';
    DeleteButton.className = 'btn btn-danger';
    DeleteButton.dataset.id = apiDataSet[i].id
    DeleteButton.onclick = function () {
      deleteRecord(this.dataset.id)
    };
    ButtonCell.append(DeleteButton);

    // Append the button cell to the row
    TableRow.append(ButtonCell);

    var tb = document.getElementById('tablebody');
    tb.append(TableRow);
  }
}

async function deleteRecord(myuser) {
   console.log(myuser);
  const stdlist = await fetch(`https://66c46cafb026f3cc6cef4c3e.mockapi.io/aptech/NewAddmission/${myuser}`,{
    method:"DELETE"
  });
Window.location.href='studentlist.html';

}




async function updaterecord(){


  const searchParams = new URLSearchParams(window.location.search);

 
  var updateUser = searchParams.get('userid'); 


  var user = await fetch(`https://66c46cafb026f3cc6cef4c3e.mockapi.io/aptech/NewAddmission/${updateUser}`)


  console.log(user.json())

}