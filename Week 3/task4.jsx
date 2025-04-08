const StyledButton = () => {
    const handleClick = () => {
      console.log('Button clicked!');
    };
  
    return (
      <button 
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded 
                  hover:bg-blue-700 transition duration-200"
      >
        Click Me
      </button>
    );
  };
  
  export default StyledButton;