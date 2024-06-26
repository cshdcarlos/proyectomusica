axios.get('https://leonardoapi.onrender.com/songs').then((res) => {
    
    //Guardo la lista de canciones
    const songlist = res.data.songs
    const trackList = document.getElementById('track-list')

    console.log(songlist)

    //Recorriendo la lista de Canciones
    songlist.map((song) => {
        //Por cada cancion


        const div = document.createElement('div')
        div.classList.add('imagen__canciones__padreA')
        div.innerHTML = `
            <img class="imagen__canciones__todas" src="${song.path.front}" alt="">
                <h4 class="titulo__cantante">${song.title}</h4>
        `
        trackList.appendChild(div)

    })

})