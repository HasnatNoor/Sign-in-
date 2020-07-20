function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 
 
 
 if(form.userid.value == "hasnatmalik7127@gmail.com"|| form.userid.value == "hasnat.7@gmail.com")
 
  {
    let new_tab =   document.getElementById("log")
    window.open(new_tab)
    /*opens the target page while Id & password matches*/
  }
 else
 {
  document.getElementById('error-message').innerHTML = "<span class='error'>You're not registered </span>";                  /*displays error message*/
  }
}
function password(form) 
{

  if(form.pswrd.value == "hasnat" || form.pswrd.value == "hasnat7"){
    window.open("http://thesciencepublishers.com/biomed_lett/v6i1abstract4.html")
  }
  else {
    document.getElementById('error-message').innerHTML = "<span class='error'>Wrong Password</span>";   
  }
}