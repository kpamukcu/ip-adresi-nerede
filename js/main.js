form.addEventListener('submit', function (form) {
    form.preventDefault()
    let ipYakala = document.getElementById('ipAdres').value

    fetch(`https://api.ipapi.is?q=${ipYakala}`)
        .then(response => response.json())
        .then(veri => {
            let ulke = document.getElementById('country')
            let sehir = document.getElementById('city')
            ulke.innerText = veri.location.country
            sehir.innerText = veri.location.state
        })
})


/* 


form.addEventListener('submit', function (form) {
    form.preventDefault()
    let ipYakala = document.getElementById('ipAdres').value

    fetch(`http://ip-api.com/json/${ipYakala}`)
        .then(response => response.json())
        .then(veri => {
            let ulke = document.getElementById('country')
            ulke.innerText = `${veri.country} / ${veri.city}`
        })
})


*/




//https://api.ip2location.io/?key=37E09DA56F736FFE3240EC8620854B25&ip=${ipYakala}


