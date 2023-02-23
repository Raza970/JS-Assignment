function make_album(artist, album,tracks = 0) {
    let obj = {
        artist,
        album,
    }
    if(tracks){
        obj.tracks = tracks
    }
    return obj
}
console.log(make_album("metallica", "ride the lightning"))
console.log(make_album("beethoven", "ninth symphony"))
console.log(make_album("willie nelson", "red-headed stranger",8))