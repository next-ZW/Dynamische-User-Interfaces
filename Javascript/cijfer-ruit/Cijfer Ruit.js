let invoer = parseInt(prompt("Voer een getal in:"));
let uitkomst = ""; 

for (let a = 1; a <= invoer; a++){
    for(let b = 1; b<= a; b++){
        uitkomst += b.toString() + '-'
    }
    uitkomst = uitkomst.slice(0, -1)
    
    uitkomst += "<br>"
    console.log(uitkomst)
    document.getElementById("uitkomst").innerHTML += uitkomst ;
    uitkomst = ""
}

// for(let a = invoer -1; a >= 1; a--){
//     for(let b = 1; b <= a; b++){
//         uitkomst += b.toString() + '-'
//     }
//     uitkomst = uitkomst.slice(0, -1)

//     uitkomst += "<br>"
//     console.log(uitkomst)
//     document.getElementById("uitkomst").innerHTML += uitkomst ;
//     uitkomst = ""
// }

