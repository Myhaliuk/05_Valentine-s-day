const arrayOfLoveWishe =[
"Нехай цей день принесе тобі море любові і тепла!",

"З Днем святого Валентина! Бажаю, щоб серце твоє було завжди переповнене щастям.",

"Нехай твоя душа розцвітає від кохання, а кожен день буде святом!",

"З найкращими побажаннями на День святого Валентина — любові, радості та гармонії!",

"Бажаю тобі знайти справжнє кохання і завжди відчувати його тепло поруч!",


]





document.gtElementByld("btn_love_wishes").addEventListener("click", () => {
    let index = Math.floor(Math.random() * arrayOfLoveWishe. length)
   document.getElementById("site-footer").innerText = arrayOfLoveWishe[index]
})
