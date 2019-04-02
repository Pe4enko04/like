like = false
function likeclick() {
    if (like == true) {
        like = false
        document.getElementById("like").src="heart1.png"
        document.getElementById("numblikes").innerHTML=300
    } else
    if (like == false) {
        like = true
        document.getElementById("like").src="heart2.png"
        document.getElementById("numblikes").innerHTML=301
    }

}