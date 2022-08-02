import './index.scss';

// Takes in 3 args The class we want, the array of letters and the index of the letters
const AnimatedLetters = ({letterClass, strArray, idx }) =>{
    return(
        <span>
            {
                // Takes in a character and the index 
                strArray.map((char,i)=>(
                    <span key={char+i} className={`${letterClass} _${i+idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters;