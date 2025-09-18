async function carregarFeriados() {
    const lista = document.getElementById('feriados')
    lista.innerHTML = '<li>Carregando...</li>'

    await new Promise((resolve) => setTimeout(resolve, 2000))

    try{
        const response = await fetch(
            'https://brasilapi.com.br/api/feriados/v1/2025'
        )

        const data = await response.json()
        lista.innerHTML = ''
        data.forEach((item) => {
            const li = document.createElement('li')
            li.innerHTML = `<span>${item.name}</span> <span class="date">${item.date}</span>`
            lista.appendChild(li)
        })

    } catch(error){
        lista.innerHTML = '<li>Erro ao carregar os feriados.</li>'
    }
}