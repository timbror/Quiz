function svar(){
    let total = 10;
    let poäng = 0;
    
    //Användar input
    let F1 = document.forms["fragor"]["F1"].value;
    let F2 = document.forms["fragor"]["F2"].value;
    let F3 = document.forms["fragor"]["F3"].value;
    let F4 = document.forms["fragor"]["F4"].value;
    let F5 = document.forms["fragor"]["F5"].value;
    let F6 = document.forms["fragor"]["F6"].value;
    let F7 = document.forms["fragor"]["F7"].value;
    let F8 = document.forms["fragor"]["F8"].value;
    let F9 = document.forms["fragor"]["F9"].value;
    let F10 = document.forms["fragor"]["F10"].value;
    

    //kollar så att alla frågor har ett svar
    for(i = 1;i <=total;i++){
        if (eval("F"+i) == null || eval("F"+i) == ""){
            alert("Du missade fråga " + i+"!");
            return false;
        }
    }
    
    let frågeSvar = ["c","b","c","a","b","c","a","c","a","a"]

    for(i = 1; i <= total;i++){
        if(eval("F"+i) == frågeSvar[i - 1]){
                poäng++;
        }
    }
    
    let resultat = document.getElementById("resultat");
    resultat.innerHTML = "<h3>You fick <span>"+poäng+"</span> av <span>"+total+"</span></h3>";
    
    alert ("du fick "+poäng+" av 10!, Bra jobbat!");
    
    return false;
}