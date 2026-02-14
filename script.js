var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var hasStarted = false; 

var music = document.getElementById("bgMusic");
music.volume = 0.5;

var startButton = document.getElementById("startButton");
startButton.disabled = true; 

music.addEventListener('canplaythrough', function() {
    startButton.textContent = "Valenbell ❤️";
    startButton.disabled = false;
    startButton.style.opacity = "1";
});

startButton.addEventListener("click", () => {
    music.play();
    frameNumber = 500;
    hasStarted = true;
    startButton.style.display = "none";
});



var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];

        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

// const button = document.getElementById("valentinesButton");

// button.addEventListener("click", () => {
//   if (button.textContent === "Nhấn Vào Đây! ❤") {
//     button.textContent = "Đang gửi...";
//     fetch('send_mail.php')
//       .then(response => {
//         if (response.ok) {
//           button.textContent = "Kiểm Tra Email Nhé 🙃";
//         } else {
//           console.error('Failed to send email');
//           button.textContent = "Lỗi 😞";
//         }
//       })
//       .catch(error => {
//         // Handle network errors or other issues
//         console.error('Error:', error);
//         button.textContent = "Lỗi 😞";
//       });
//   }
// });

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24); // Adjust font size based on screen width
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    // glow effect - changed to white
    context.shadowColor = "rgba(255, 255, 255, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    // if(frameNumber < 250){
    //     context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    //     context.fillText("Mỗi ngày anh đều không thể tin được mình may mắn đến thế nào", canvas.width/2, canvas.height/2);
    //     opacity = opacity + 0.01;
    // }
    // //fades out the text by decreasing the opacity
    // if(frameNumber >= 250 && frameNumber < 500){
    //     context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    //     context.fillText("Mỗi ngày anh đều không thể tin được mình may mắn đến thế nào", canvas.width/2, canvas.height/2);
    //     opacity = opacity - 0.01;
    // }

    //needs this if statement to reset the opacity before next statement on canvas
    if(frameNumber == 500){
        opacity = 0;
    }
    if(frameNumber > 500 && frameNumber < 750){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Giữa hàng nghìn tỷ vì sao,", "qua hàng tỷ năm"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Giữa hàng nghìn tỷ vì sao, qua hàng tỷ năm", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 750 && frameNumber < 1000){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Giữa hàng nghìn tỷ vì sao,", "qua hàng tỷ năm"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Giữa hàng nghìn tỷ vì sao, qua hàng tỷ năm", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }

    if(frameNumber == 1000){
        opacity = 0;
    }
    if(frameNumber > 1000 && frameNumber < 1250){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Được sống và được trải qua", "cuộc đời này bên em"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Được sống và được trải qua cuộc đời này bên em", canvas.width/2, canvas.height/2);
        }
        
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1250 && frameNumber < 1500){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Được sống và được trải qua", "cuộc đời này bên em"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Được sống và được trải qua cuộc đời này bên em", canvas.width/2, canvas.height/2);
        }
        
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1500){
        opacity = 0;
    }
    if(frameNumber > 1500 && frameNumber < 1750){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText("Là điều không thể tưởng tượng được", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1750 && frameNumber < 2000){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText("Là điều không thể tưởng tượng được", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2000){
        opacity = 0;
    }
    if(frameNumber > 2000 && frameNumber < 2250){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Và anh đã có cơ hội ", "để được hiểu em và yêu em"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Và anh đã có cơ hội để được hiểu em và yêu em", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2250 && frameNumber < 2500){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Và anh đã có cơ hội ", "để được hiểu em và yêu em"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Và anh đã có cơ hội để được hiểu em và yêu em", canvas.width/2, canvas.height/2);
        }
        
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2500){
        opacity = 0;
    }
    if(frameNumber > 2500 && frameNumber < 2750){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Anh yêu em rất nhiều Linh Bell,", "vượt qua cả không gian và thời gian"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Anh yêu em rất nhiều Linh Bell, vượt qua cả không gian và thời gian", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2750 && frameNumber < 3000){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Anh yêu em rất nhiều Linh Bell,", "vượt qua cả không gian và thời gian"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Anh yêu em rất nhiều Linh Bell, vượt qua cả không gian và thời gian", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }
    
    if(frameNumber == 3000){
        opacity = 0;
    }
    if(frameNumber > 3000 && frameNumber < 3250){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Và nhân ngày valentine anh muốn gửi tới em bài thơ này,", "mong em hiểu nỗi lòng của anh"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Và nhân ngày valentine, anh muốn gửi tới em bài thơ này, mong em hiểu nỗi lòng của anh", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 3250 && frameNumber < 3500){
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Và nhân ngày valentine anh muốn gửi tới em bài thơ này,", "mong em hiểu nỗi lòng của anh"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Và nhân ngày valentine, anh muốn gửi tới em bài thơ này, mong em hiểu nỗi lòng của anh", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }

    if(frameNumber == 3500){
        opacity = 0;
    }
    
    // Vietnamese poem section - line by line animation
    var poemFontSize = Math.min(26, window.innerWidth / 28);
    var poemLineHeight = 10;
    context.font = poemFontSize + "px Comic Sans MS";
    
    var poemLines = [
        "Khoảng cách chỉ đo bằng cây số,",
        "Chứ đâu đo được nhớ thương.",
        "Dẫu xa cách muôn trùng phương,",
        "Chốn anh về luôn là nơi em trông ngóng.",
        "",
        "Valentine này anh không ở cạnh,",
        "Nhưng yêu thương thì chẳng hề vơi.",
        "Tết này mình chung một bầu trời,",
        "Anh sẽ bù cho em cả nghìn cái ôm còn thiếu."
    ];
    
    var startY = window.innerWidth < 600 ? canvas.height / 2 - 120 : canvas.height / 2 - 100;
    var framesPerLine = 80; // Each line takes 80 frames to fade in
    var delayBetweenLines = 270;

    for (var i = 0; i < poemLines.length; i++) {
        var lineStartFrame = 3500 + (i * (framesPerLine + delayBetweenLines));
        var lineEndFrame = lineStartFrame + framesPerLine;
        var lineOpacity = 0;
        
        if (frameNumber >= lineStartFrame && frameNumber < 99999) {
            if (frameNumber < lineEndFrame) {
                // Fading in
                lineOpacity = (frameNumber - lineStartFrame) / framesPerLine;
            } else {
                // Fully visible
                lineOpacity = 1;
            }
            
            context.fillStyle = `rgba(255, 255, 255, ${lineOpacity})`;
            context.fillText(poemLines[i], canvas.width / 2, startY + i * (poemFontSize + poemLineHeight));
        }
    }

    // if(frameNumber >= 4300 && frameNumber < 99999){
    //     context.font = fontSize + "px Comic Sans MS";
    //     context.fillStyle = `rgba(255, 255, 255, ${secondOpacity})`;
    //     context.fillText("Chúc Mừng Ngày Valentine ❤", canvas.width/2, (canvas.height/2 + 160));
    //     secondOpacity = secondOpacity + 0.01;

    //     if(frameNumber >= 4400){
    //         button.style.display = "block";
    //     }
    // }   

     // Reset the shadow effect after drawing the text
     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999 && hasStarted)  {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);