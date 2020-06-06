import React from 'react';

const Header = () => {
    return (
        <div>
            <header>
                <div className="Group154Left">
                    <div className='f3'></div>
                    <div className='f1_2'></div>
                    <div className='f1_2_1'></div>
                    <div className='f2_2'></div>
                </div>
                <div className='inline-header'>
                    <div className="leftGirl"></div>
                    <div className="header-content-container">
                        <div className='logo-container'>
                            <div className='logo'></div>
                        </div>
                        <div className='form-container'>
                            <form>
                                <p className='login'>
                                    <input className='login-input' type='text' name='login'></input>
                                    <bdo className='login-text'>لماكلا كمسا</bdo>
                                </p>
                                <p  className='underLoginTextp'><bdo className='underLoginText'>كب صاخلا فتاهلا مقرو</bdo></p>
                                <div className='number-container'>
                                    <div className='number'>
                                        <input className='number-input' type='tel' name='tel' pattern="[0-9]{3}" maxlength="3"></input><span>-</span>
                                        <input className='number-input' type='tel' name='tel' pattern="[0-9]{2}" maxlength="2"></input><span>-</span>
                                        <input className='number-input' type='tel' name='tel' pattern="[0-9]{2}" maxlength="2"></input>
                                    </div>
                                    <div className='Rectangle'>
                                        <span className='Vector'></span>
                                        <span className='Vector-num'>+971</span>
                                        <span className='Vector-flag'></span>
                                    </div>
                                </div>
                                <div className='container18'>
                                    <bdo className='plus18'> * .اًمﺎﻋ 18 يﺮﻤﻋ ﻦﻣ ﺮﺜﻛأ ﺪﻴﻛﺄﺘﻟاو ﺔﻴﺻﻮﺼﺨﻟا ﺔﺳﺎﻴﺳو </bdo>
                                    <input type="checkbox" class="checkbox" id="checkbox" />
                                    <label for="checkbox"></label>
                                </div>
                                <div className='SendButtonBox'>
                                    <button className='SendButton'><bdo className='SendButtonText'>ناهر عض</bdo></button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                    <div className="rightGirl"></div>
                </div>
                <div className="Group154Right">
                    <div className='f2'></div>
                </div>
            </header>
        </div>
    )
}

export default Header