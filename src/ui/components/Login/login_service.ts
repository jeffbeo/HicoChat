
export class LoginService
{
    submitLogin(_this:any,callBack:(s:boolean,t:string,u:string)=> any)
    {
        var loggedInStatus = false;
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "http://11.100.109.22:8080/api", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send("{\"username\":\"" + _this.state.user_name + "\", \"context\":\"NEWUSER\"}");

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("responseText=" + this.responseText);
                let responseText = JSON.parse(this.responseText);

                if (responseText.status == 1 && responseText.token)
                {
                    callBack(true,responseText.token,responseText.userName);
                }
                else
                {
                    callBack(false,'','');
                }
            }
        };
        return loggedInStatus
    }
}