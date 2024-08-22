
const succesMessage = document.getElementById("successMessage");
succesMessage.style.display = 'none';

async function createDATA (){


  // values contain from index html form 
    
    var studentName = document.getElementById("studentName").value;
    var studentEmail = document.getElementById("studentEmail").value;
    var studentCourse = document.getElementById("studentCourse").value;




    // values validation

    if(!studentName || !studentEmail || !studentCourse ){
        succesMessage.style.display = 'block';
        succesMessage.classList = "alert alert-danger"
        succesMessage.innerText = "Kindly valid  values !! "
        window.location.href('index.html')
    }


  // creating object for api where this object keys must be similar to api object keys  

    const newUser = {
        name: studentName,
        email: studentEmail,
        course: studentCourse,
    }
       



    const Response = await fetch("https://66c46cafb026f3cc6cef4c3e.mockapi.io/aptech/NewAddmission",{

      method: 'POST',
      headers:{ 'Content-Type' : 'application/json'       },
      body: JSON.stringify(newUser)

 })


 succesMessage.style.display = 'block';
 succesMessage.classList = "alert alert-success"
 succesMessage.innerText = "Registration  Successfully Made !! "




}

var stdlist;
async function fetchdata(){
  var stdlist = await fetch("https://66c46cafb026f3cc6cef4c3e.mockapi.io/aptech/NewAddmission");
  var studentlist = await stdlist.json();
    console.log(studentlist);
    table(studentlist)
}
function table(apidata){
   
    
  for( var i=1 ; i <= apidata.length; i++){
  
      var TableRow = document.createElement('tr');
    
      var TableHeader = document.createElement('td');
      TableHeader.innerText = apidata[i].id;
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
      // console.log(TableRow);
      var tb = document.getElementById('tablebody');
      tb.append(TableRow);
    }
  }
  