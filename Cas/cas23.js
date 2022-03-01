function job(){
    return "Hello world"
}
let mypromise = new Promise((tacno, netacno) => {
    setTimeout(() => {
        tacno(job())
    }, 2000)
})
mypromise.then((j) => {
    console.log(j)
})

job()