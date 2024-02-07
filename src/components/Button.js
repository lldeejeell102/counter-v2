function Button({count, setCount}) {
    // console.log(count)

    return (
      <div>
        <button onClick={()=>{
            setCount(count + 1)
        }}>+</button>
        <button onClick={()=>{
            setCount(count - 1)
        }}>-</button>
      </div>
    );
  }
  
  export default Button;