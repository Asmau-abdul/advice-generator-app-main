const url = 'https://api.adviceslip.com/advice?timestamp=${Date.now()}'


let adviceId = document.querySelector('.js-advice-id')
let quoteAdvice = document.querySelector('.js-quote-advice')

async function fetchData() {
    try {
        const response = await fetch(url)
        if(!response.status){
            throw new Error(
                'error'
            )
        }
        const data = await response.json()
        console.log(data)
        adviceId.innerHTML = data.slip.id
        quoteAdvice.innerHTML = data.slip.advice
    } catch (error) {
        console.error('Error fetching data', error)
    }
}

fetchData()

let diceButton = document.querySelector('.js-dice-button')
diceButton.addEventListener('click', () => {
    fetchData()
})