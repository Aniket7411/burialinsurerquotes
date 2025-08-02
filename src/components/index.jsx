import { useState } from 'react';
import CountdownTimer from './counttime';
import { FaLongArrowAltDown } from 'react-icons/fa';

const Home = () => {
    const [answeredFirstQuestion, setAnsweredFirstQuestion] = useState(false);
    const [qualified, setQualified] = useState(false);
    const [answeredSecondQuestion, setAnsweredSecondQuestion] = useState(false);

    const handleFirstQuestion = (answer) => {
        setAnsweredFirstQuestion(true);
        setQualified(answer === 'yes');
    };

    const handleSecondQuestion = () => {
        setAnsweredSecondQuestion(true);
    };

    const resetQuestions = () => {
        setAnsweredFirstQuestion(false);
        setQualified(false);
        setAnsweredSecondQuestion(false);
    };

    return (
        <div className="flex flex-col items-center px-4 py-8 min-h-screen">
            {!answeredFirstQuestion ? (
                // First Question Page
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl  md:text-4xl font-bold text-center max-w-2xl mb-6">
                        See If You Qualify For This <br /> <span className="text-[#fa0000]">Affordable</span>{' '}
                        <span className="bg-[#f7ff00]">$25,000</span> Cash Burial Plan For Seniors
                    </h1>

                    <p className="font-bold text-xl  sm:text-lg md:text-3xl text-center mb-4 px-2">
                        Answer 2 easy <span className="text-[#fa0000]">questions below</span> to{' '}
                        <span className="underline">check <br /> eligibility</span> in just 30 seconds
                    </p>
                    <div className="flex justify-center items-center gap-4 my-4">
                        {[1, 2, 3].map((_, index) => (
                            <div
                                key={index}
                                className="bg-[#94aaad] rounded-lg border-black p-2 shadow-lg w-12 h-12 flex items-center justify-center"
                            >
                                <FaLongArrowAltDown size={32} className="text-white text-2xl" />
                            </div>
                        ))}
                    </div>

                    <p className="text-center md:text-4xl font-bold text-2xl mb-4">Are you over 55?</p>

                    <div className="flex flex-col text-xl md:text-3xl md:flex-row gap-4 mb-8">
                        <button
                            onClick={() => handleFirstQuestion('yes')}
                            className="bg-[#2ecc71] text-white font-semibold rounded-md px-9 py-5 md:px-9 md:py-5 w-[200px]  hover:bg-green-600 transition"
                        >
                            Yes
                        </button>
                        <button
                            onClick={() => handleFirstQuestion('no')}
                            className="bg-[#ff0000] text-white font-semibold rounded-md px-9 py-5 w-[200px] md:px-9 md:py-5 hover:bg-red-700 transition"
                        >
                            No
                        </button>
                    </div>
                </div>
            ) : !qualified ? (
                // Not Qualified Page
                <div className="flex flex-col h-[100vh] justify-center items-center text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center max-w-2xl mb-6 text-red-600">
                        We're sorry you do not qualify at this time.
                    </h1>
                    {/* <button
                        onClick={resetQuestions}
                        className="bg-blue-500 text-white font-semibold rounded-md px-6 py-3 hover:bg-blue-600 transition mt-4"
                    >
                        Try Again
                    </button> */}
                </div>
            ) : !answeredSecondQuestion ? (
                // Second Question Page
                <div className="flex flex-col items-center">

                    <p className="text-center md:text-3xl font-bold text-lg mb-4">Who is your beneficiary?
                    </p>

                    <div className="flex flex-col w-full text-3xl max-w-md gap-4 mb-8">
                        <button
                            onClick={handleSecondQuestion}
                            className="bg-[#2ecc71] text-white font-semibold rounded-md px-8 py-4 w-[300px] hover:bg-green-600 transition"
                        >
                            Child/Children
                        </button>
                        <button
                            onClick={handleSecondQuestion}
                            className="bg-[#2ecc71] text-white font-semibold rounded-md px-8 py-4  w-[300px] hover:bg-green-600 transition"
                        >
                            Spouse
                        </button>
                        <button
                            onClick={handleSecondQuestion}
                            className="bg-[#2ecc71] text-white font-semibold rounded-md px-8 py-4  w-[300px] hover:bg-green-600 transition"
                        >
                            Family Member
                        </button>
                        <button
                            onClick={handleSecondQuestion}
                            className="bg-[#2ecc71] text-white font-semibold rounded-md px-8 py-4  w-[300px] hover:bg-green-600 transition"
                        >
                            Other
                        </button>
                    </div>
                </div>
            ) : (
                // Congratulations Page
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl text-[#2ecc71] sm:text-3xl md:text-4xl font-bold text-center max-w-2xl mb-6">
                        CONGRATULATIONS, YOU PRE QUALIFY!
                    </h1>

                    <p className="font-semibold text-base sm:text-lg md:text-4xl text-center mb-3 px-2">
                        Make a <span className="underline italic">Quick Call</span> to claim up to a{' '} <br />
                        <span className="text-[#fa0000]">$25,000 </span>
                        funeral benefit for as <br /> little as $1/day
                    </p>

                    <p className='bg-[#f7ff00] p-1 text-3xl mb-2'>Spots remaining: <span className="text-[#fa0000]"> 4</span></p>
                    <p className='mb-2 font-semibold text-center text-3xl'>Tap to call</p>

                    <a href="tel:8777000552">
                        <p className='bg-[#2ecc71] text-2xl md:text-4xl text-white px-6 rounded-md py-5 text-center cursor-pointer hover:bg-green-600 transition'>
                            CALL NOW: 877-700-0552
                        </p>
                    </a>

                    <p className="underline text-center text-xl mt-4">
                        <span className="text-[#fa0000] font-semibold">ACT FAST!</span> Due to high call demand, your hotline will <br /> remain available for the next:
                    </p>

                    <CountdownTimer className="mt-2" />
                    {/* <button 
            onClick={resetQuestions}
            className="bg-blue-500 text-white font-semibold rounded-md px-6 py-3 hover:bg-blue-600 transition mt-8"
          >
            Start Over
          </button> */}
                </div>
            )}

            {/* Footer - shown on all pages */}

            <div className="w-full text-center text-sm text-gray-600 border-t pt-4 mt-auto space-x-4">
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Privacy Policy
                </a>
                <span>|</span>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Terms and Conditions
                </a>
                <span>|</span>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Contact
                </a>
            </div>

        </div>
    );
};

export default Home;