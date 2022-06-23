import React from 'react';
import SHOWCASE from '../../SC2022';

const FIRST = SHOWCASE.first;
const SECOND = SHOWCASE.second;
const THIRD = SHOWCASE.third;
const FOURTH = SHOWCASE.fourth;
const FIFTH = SHOWCASE.fifth;

export default function TodayPage() {
  return (
    <div className='row gap-2'>

        <div className='col-12'>
            <div className='card'>
                <div className='card-header'>
                    Component 1
                </div>
                <div className='card-body'>
                    <div className='container-fluid align-items-center justify-content-center'>
                        {<FIRST>Sample Button</FIRST>}
                    </div>
                </div>
                <div className='card-footer'>
                    
                </div>
            </div>
        </div>

        <div className='col-12'>
            <div className='card'>
                <div className='card-header bg-primary text-white'>
                    Component 2
                </div>
                <div className='card-body'>
                    <div className='container-fluid align-items-center justify-content-center'>
                    {<SECOND></SECOND>}
                    </div>
                </div>
                <div className='card-footer'>
                    
                </div>
            </div>
        </div>

        <div className='col-12'>
            <div className='card'>
                <div className='card-header bg-success text-white'>
                    Component 3
                </div>
                <div className='card-body'>
                    <div className='container-fluid align-items-center justify-content-center'>
                        {<THIRD></THIRD>}
                    </div>
                </div>
                <div className='card-footer'>
                    
                </div>
            </div>
        </div>

        <div className='col-12'>
            <div className='card'>
                <div className='card-header bg-warning text-white'>
                    Component 4
                </div>
                <div className='card-body'>
                    <div className='container-fluid align-items-center justify-content-center'>
                        {<FOURTH></FOURTH>}
                    </div>
                </div>
                <div className='card-footer'>
                    
                </div>
            </div>
        </div>

        <div className='col-12'>
            <div className='card'>
                <div className='card-header bg-danger text-white'>
                    Component 5
                </div>
                <div className='card-body'>
                    <div className='container-fluid align-items-center justify-content-center'>
                        {<FIFTH></FIFTH>}
                    </div>
                </div>
                <div className='card-footer'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
