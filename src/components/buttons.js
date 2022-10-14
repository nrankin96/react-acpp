import React, {useEffect, useState} from "react";

function Button() {
    const [display, setDisplay] = useState(0);

    const handleClick = () => {
        setDisplay()
    }
    return (
        <div className="container">
          <div className="display">{display}</div>
          <div className="buttons">
            <tr >
            <td><button onClick={handleClick}>AC</button></td>
            <td><button onClick={handleClick}>+/-</button></td>
            <td><button onClick={handleClick}>%</button></td>
            <td><button onClick={handleClick}>/</button></td>     
            </tr>
            <tr >
            <td><button value="7">7</button></td>
            <td><button value="8">8</button></td>
            <td><button value="9">9</button></td>
            <td><button value="">x</button></td>     
            </tr>
            <tr >
            <td><button>4</button></td>
            <td><button>5</button></td>
            <td><button>6</button></td>
            <td><button>-</button></td>     
            </tr>
            <tr >
            <td><button>1</button></td>
            <td><button>2</button></td>
            <td><button>3</button></td>
            <td><button>+</button></td>     
            </tr>
            <tr >
            <td><button>0</button></td>
            <td><button>.</button></td>
            <td><button>=</button></td>  
            </tr>
          </div>
    
        </div>
      );
}

export default Button;