function CheckMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('loginForm').value;
    var valid = re.test(myMail);
    if (!valid) {
        document.getElementById('wrongDataText').style.display = "block";
    }
    return valid;
}