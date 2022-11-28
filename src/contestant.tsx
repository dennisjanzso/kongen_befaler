import { useEffect, useState } from 'react';

const Contestant = ({player}: any) => {

    const [score, setScore] = useState(0);

    return (
        <div>
          <div className="flex flex-col w-[225px]">
            <img src={player.image} alt="" />
            <div className="flex justify-center">
              <div className="pointsContainer w-[143px] h-[130px] flex flex-col justify-center text-center">
                {score}
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-4"> 
              <div 
                className="bg-red w-[40px] h-[40px] rounded-full flex justify-center flex-col pluss-minus"
                onClick={() => {setScore(score + 1)}}
                role="button"
              > 
                +
              </div>
              <div 
                className="bg-red w-[40px] h-[40px] rounded-full flex justify-center flex-col pluss-minus"
                onClick={() => {setScore(score - 1)}}
                role="button"
              > 
                -
              </div>
            </div>
          </div>
        </div>
    );
}

export default Contestant;



