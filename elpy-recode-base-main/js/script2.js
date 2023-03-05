const modlar = [
    {
        ad: "beach"
    },
    {
        ad: "birds"
    },
    {
        ad: "cafe"
    },
    {
        ad: "campfire"
    },
    {
        ad: "city"
    },
    {
        ad: "fireplace"
    },
    {
        ad: "forest"
    },
    {
        ad: "heavy-rain"
    },
    {
        ad: "night-crickets"
    },
    {
        ad: "rain-camping"
    },
    {
        ad: "rain"
    },
    {
        ad: "rain-windshield"
    },
    {
        ad: "snow"
    },
    {
        ad: "thunder"
    },
    {
        ad: "train"
    }
]


const appElemani = document.querySelector("#app")

modlar.forEach( mod=>{
    let modCerceve = document.createElement("div")

    //görsel ekle
    let modGorsel = document.createElement("img")
    modGorsel.src = "img/" + mod.ad + ".jpg"
    modCerceve.append(modGorsel)

    //ses ekle
    let modSes = document.createElement("audio")
    modSes.src = "audio/" + mod.ad + "-sound.mp3"
    modSes.loop = true
    modCerceve.append(modSes)

    //olay statementları
    //img tıklandığında...
    modGorsel.addEventListener("click", olay=>{

        if( modSes.paused === true || modSes.paused === undefined ) {
            modSes.play()
        } else { //demek ki ses daha önce play edilmiş
            modSes.pause()
        }

        modCerceve.classList.toggle("mod-golge")
    })

    appElemani.append(modCerceve)
} )