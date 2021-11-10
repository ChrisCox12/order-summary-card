import React from 'react';
//import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import MusicIcon from '../assets/images/icon-music.svg';
import IllustrationHero from '../assets/images/illustration-hero.svg';
import { Card, Container, Row, Col } from 'react-bootstrap';

import './OrderSummaryCard.css';

function OrderSummaryCard() {
    return (
        <div className='summaryCard'>
            <img src={IllustrationHero} alt='person dancing' />
            <div className='innerCard'>
                <h1>Order Summary</h1>
                <p>
                    You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like! 
                </p>
                <div className='innerInnerCard'>
                    <img src={MusicIcon} alt='music symbol' />
                    <div>
                        <h4>Annual Plan</h4>
                        <p>$59.99/year</p>
                    </div>
                    <p>Change</p>
                </div>
            </div>
            
        </div>
    )
}

export default OrderSummaryCard;
