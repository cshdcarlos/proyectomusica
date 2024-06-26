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

//antes de agregar el elemento
//agregarle la nteractividad

        div.addEventListener('click', () => {
//lo que yo escriba aca
//sucede cuando pase el evento

document.getElementById('portada').setAttribute('src', song.path.front)

document.getElementById('titulo').innerHTML = song.title


const audio = document.getElementById('audio')
audio.setAttribute('src', song.path.audio)


document.getElementById('paused').addEventListener('click', () => {

    if (audio.paused){
        audio.play()
    }
    else {audio.pause()}
})




        })

        trackList.appendChild(div)

    })

})