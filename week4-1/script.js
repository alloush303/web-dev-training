let gameContainer = document.querySelector(".game-container")
let cells = document.querySelectorAll(".game-container span")
let resultPlaceholder = document.querySelector(".result-placeholder")
let XpointsPlaceholder = document.querySelector(".x-points")
let OpointsPlaceholder = document.querySelector(".o-points")


let XTurn = true
let XArray = []
let OArray = []
let XOArray = []
let XPoints = 0
let OPoints = 0
let roundWin = false


let clickAudio = new Audio()
let backgroundMusic = new Audio()
backgroundMusic.src = "/Background music 1 minute _D.mp3"
backgroundMusic.volume = 0.1
backgroundMusic.loop = true
// backgroundMusic.play()

// winings states
let Wining = [
    [1,2,3] , [4,5,6] , [7,8,9],
    [1,4,7] , [2,5,8] , [3,6,9] , [3,5,7] , [1,5,9]
]

cells.forEach((cell , i)=>{
    cell.onclick = (e)=>{
        cell.classList.add("fullCell")
        clickaudio('/Menu Game Button Click Sound Effect.mp3')
        putSign(e)
    }
})


function putSign(e){
    if(XTurn){
        e.target.classList.add("redColor")
        XArray.push(+e.target.getAttribute('data-cell'))
        XOArray.push(+e.target.getAttribute('data-cell'))
        e.target.innerHTML = "X"
        XTurn = !XTurn
        checkWinner(XArray , "X")
    }
    else{
        e.target.classList.add("blueColor")
        OArray.push(+e.target.getAttribute('data-cell'))
        XOArray.push(+e.target.getAttribute('data-cell'))
        e.target.innerHTML = "O"
        XTurn = !XTurn
        checkWinner(OArray , "O")
    }
}


// PlayerArray = [1,2,5,7,4]
function checkWinner(PlayerArray , sign){
    roundWin = false // ارجاع حالة الفوز عند كل فحص 

    // ^ take the array of (X or O) and check all the wining arraies
    Wining.forEach((winArray)=>{

            // ^ for each winArray check if Xarray or Oarray has the 3 values
            // تم حذف حلقة for لمرة واحدة لأنها غير ضرورية

                if(PlayerArray.includes(winArray[0])  && PlayerArray.includes(winArray[1])&&            PlayerArray.includes(winArray[2])){
                    roundWin = true // حالة فوز أحد اللاعبين
                    removeXOArray()
                    if(sign === "X"){
                        XPoints++
                        XpointsPlaceholder.children[XPoints - 1].style.backgroundColor ="red"
                    }
                    else{
                        OPoints++
                        OpointsPlaceholder.children[OPoints - 1 ].style.backgroundColor ="blue"
                    }
                }
            

    })
    // شرط التعادل في حال امتلاء جميع الخانات ولا يوجد فائز في الجولة
    if (!roundWin && XOArray.length === 9){
        removeXOArray()
    }


    // ^ if player has 2 points end the game
    if(XPoints === 2 || OPoints ===2){
        gameContainer.style.pointerEvents = "none"
        resultPlaceholder.style.display="block"
        resultPlaceholder.firstElementChild.textContent = `${sign} wins`
        resultPlaceholder.classList.add("fadeToRight")

        //إضافة مؤقت 5 ثوان لتصفير اللعبة بالكامل والبدئ من جديد بعد فوز أحد اللاعبين بنقطتين
        setTimeout(() => {
            restFullGame()
        },5000)
    }


    function removeXOArray(){
        // ^ clear the cells and the pleayers arraies
        let i =0
        gameContainer.style.pointerEvents = "none"
        let remover = setInterval(()=>{
            cells[XOArray[i]-1].innerHTML = ""
            cells[XOArray[i]-1].classList.remove("fullCell", "redColor", "blueColor")
            if(i === XOArray.length-1){
                gameContainer.style.pointerEvents = "auto"
                clearInterval(remover)
                XOArray.length = 0
                XArray.length = 0
                OArray.length = 0
                XTurn = true
            }
            i++
        },400)
    }
}

// دالة التصفير الكامل
function restFullGame(){
    XTurn = true
    XArray = []
    OArray = []
    XOArray = []
    XPoints = 0
    OPoints = 0
    roundWin = false

    cells.forEach(cell => {
        cell.innerHTML = "";
        cell.classList.remove("fullCell", "redColor", "blueColor")
    })

    Array.from(XpointsPlaceholder.children).forEach(child => child.style.backgroundColor = "");
    Array.from(OpointsPlaceholder.children).forEach(child => child.style.backgroundColor = "");

    gameContainer.style.pointerEvents = "auto"
    resultPlaceholder.style.display="none"
    resultPlaceholder.classList.remove("fadeToRight")
}

function clickaudio(url) {
    clickAudio.src = url
    clickAudio.play()
}