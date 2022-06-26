import React from 'react';
import SHOWCASE from '../../SC2022';

const FIRST = SHOWCASE.first;
const SECOND = SHOWCASE.second;
const THIRD = SHOWCASE.third;
const FOURTH = SHOWCASE.fourth;
const FIFTH = SHOWCASE.fifth;

export default function TodayPage() {
  return (
    <>
        {<FIRST/>}
        {<SECOND/>}
        {<THIRD/>}
        {<FOURTH/>}
        {<FIFTH/>}
    </>
  )
}
