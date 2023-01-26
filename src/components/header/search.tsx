
export default function Search({input, setInput}:{input:any ,setInput:any}) {

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setInput(e.currentTarget.value)
  }
  return (
    <>
   <input type="text"  className='search__input' placeholder='Поиск   ' value={input}  onChange={(e)=> handleChange(e)}></input>
    </>
  )
}
