const container2 = document.getElementsByClassName("container2")[0];
const container3 = document.getElementsByClassName("container3")[0];
const checkicon = document.getElementById("check-icon");
const crossicon = document.getElementById("cross-icon");
var i = 0;

// Toggle the note input form when the cross icon is clicked
crossicon.addEventListener('click', function(){
    typeNote();
})

// Create a note when the check icon is clicked
checkicon.addEventListener('click', function(){
    createNote();
})

// Function to show/hide the note form
function typeNote(){
    const displayStyle = window.getComputedStyle(container3).display;
    if (displayStyle === "none") {
        container3.style.display = "block";
    } else {
        container3.style.display = "none";
    }
}

// Function to create a note and append it to the container
function createNote(){
    var notetext = document.getElementById("note").value;  // Get note content
    if (notetext.trim() === "") {
        alert("Please write something in the note!");
        return;  // Prevent empty notes
    }

    var node1 = document.createElement("div");  // Create a div for the note
    var node2 = document.createElement("h1");   // Create an h1 for the note text 
    var deleteButton = document.createElement("button");  // Add a delete button
    node2.innerHTML = notetext;
    
    node2.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px overflow:auto ; word-wrap: break-word;  box-shadow: 0px 5px 10px 0px rgba(128, 128, 128, 0.3")

    // Apply random styling for margin, rotation, and color
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.backgroundColor = color();
    node1.appendChild(node2);

    container2.insertAdjacentElement("beforeend", node1);  // Add the note to container2

    document.getElementById("note").value = "";  // Clear textarea
    container3.style.display = "none";  // Hide the note form after note is created

    node1.addEventListener("mouseenter", function(){
          node1.style.transform = "scale(1.1)";
    })
    node1.addEventListener("mouseleave", function(){
          node1.style.transform = "scale(1)";
    })
    node1.addEventListener("dblclick", function(){
          node1.remove();
    })

    document.getElementById("note").value = '';
}

// Function to generate random margin
function margin(){
    var random_margin = ["-5px","1px","5px","10px","15px","20px"];
    return random_margin[Math.floor(Math.random()*random_margin.length)];
}

// Function to generate random rotation
function rotate(){
    var random_rotate = ["rotate(3deg)","rotate(1deg)","rotate(-1deg)","rotate(-3deg)","rotate(-5deg)","rotate(-10deg)"];
    return random_rotate[Math.floor(Math.random()*random_rotate.length)];


}

// Function to generate random background color
function color(){
    var random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#f4696b","#bad8eb"];
    if(i > random_colors.length - 1){
        i = 0;
    }
    return random_colors[i++];
}
console.log("Display style:", displayStyle);
console.log("Toggling display to:", container3.style.display);
