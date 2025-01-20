import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'Se fazer algo dói, faça isso com mais frequência.',
    'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    'Otimização prematura é a raiz de todo o mal.',
    'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    'A única maneira de ir rápido é ir bem.'
  ]

  const [selected, setSelected] = useState(0)
  const [quantityVotes, setQuantityVotes] = useState(new Uint8Array(anecdotes.length))
  const selecionaAnedota = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const votarAnedota = () => {
    const copia = [...quantityVotes]
    copia[selected] += 1
    setQuantityVotes(copia)
  }


  const anecdoteMostVoted = (arr) => {
    if (!arr.length) {
      return null;
    }
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      if (current > arr[max]) {
        max = i;
      }
    }
    return { max };
  }
  const mostVoted = anecdoteMostVoted(quantityVotes)
  console.log(quantityVotes, 'quantityVotes')
  console.log(anecdoteMostVoted(quantityVotes), 'anecdoteMostVoted')

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]} <br />
      <p>Has {quantityVotes[selected]} votes</p>
      <button onClick={votarAnedota}>vote</button>
      <button onClick={selecionaAnedota}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      {anecdotes[mostVoted.max]}
      <p>Has {quantityVotes[mostVoted.max]} votes</p>
    </div>
  )
}

export default App