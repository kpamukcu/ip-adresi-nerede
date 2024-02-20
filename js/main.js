form.addEventListener('submit',function(form){
    form.preventDefault()
    let ipYakala = document.getElementById('ipAdres').value
   
    fetch(`https://api.ip2location.io/?key=37E09DA56F736FFE3240EC8620854B25&ip=${ipYakala}`)
        .then(response => response.json())
        .then(veri => {
            let ulke = document.getElementById('sonuc')
            ulke.innerText = veri.ip
            console.log(veri.ip)
        })    
})