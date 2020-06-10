import React from 'react';

const Main = () => {
    return (
        <div>
            <main>
                <div className='left-main'>
                    <div className='f3_2'></div>
                    <div className='f3_3'></div>
                </div>
                <div className='inline-main'>
                    <p>ACTIVATE <span>BONUS 100%</span></p>
                    <span className='bot-arr'></span>
                    <div className='pattern-container'>
                        <div className="block1">
                            <span className="block-text1">100 USD</span>
                        </div>
                        <div className="block">
                            <span className="block-text">100 USD</span>
                        </div>
                    </div>
                    <div className='SendButtonBox base'>
                        <button className='SendButton'><bdo className='SendButtonText'>التسجيل</bdo></button>
                    </div>
                </div>
                <div className='right-main'>
                    <div className='f4'></div>
                    <div className='f4_2'></div>
                </div>
            </main>
        </div>
    )
}

export default Main