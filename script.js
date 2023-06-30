let no = document.getElementById('no')
let text = document.getElementById("text")
let yes = document.getElementById("yes")
let container = document.querySelector(".buttons_container")
let height = window.innerHeight - 50
let width =  window.innerWidth - 50

no.addEventListener('click', ()=>{
    text.innerText = "Confirme sua resposta"
    no.addEventListener('click', ()=>{
        text.innerText = "Você clicou errado?"
        no.addEventListener('click', ()=>{
            text.innerText = "Por favor?🥺"
            no.addEventListener('click', ()=>{
                text.innerText = "Última chance"
                no.addEventListener('click', ()=>{
                    text.innerText = "Você quer ficar comigo?"
                    no.addEventListener('mouseover', ()=>{
                        no.style.position = 'absolute'
                        no.style.top = Math.random() * height + 'px'
                        no.style.left = Math.random() * width + 'px'
                    })
                })
            })
        })
    })
})

yes.addEventListener("click", ()=>{
    container.style.display = 'none'
    text.innerText = "..."
    let textos = ["Eu nunca cheguei nessa parte", "O que faço agora?", '...']
    let x = 0

    function showTexto(){
        let interval = setInterval(()=>{
            text.innerHTML += `<p>${textos[x]}</p>`
            x < 2 ? x += 1 : x = 2 ? x=2 && clearInterval(interval) : x=2
        },2500)
    }
    setTimeout(()=>{
        window.open("erro505.html",'_self')
    }, 7500)
    showTexto()
})