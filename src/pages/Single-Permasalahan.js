import React from 'react';

import ExampleImg from '../assets/images/example.jpg';

export default function SinglePermasalahan() {
    return (
        <div id="single-permasalahan">
            <div className="article-container">
                <img src={ExampleImg}/>
                <h1>Minimnya Aksi Dalam Pengelolaan Gabah</h1>
                <h6>12 Januari 2020</h6>
                <div>
                    <div className="profile-img"></div>
                    <div className="profile">
                        <p>Desa Tambaksari</p>
                        <h6>Kabupaten Malang - Jawa Timur</h6>
                    </div>
                </div>
                <p>
                    Marcus Rashford is not with the provisional Manchester United squad ahead of their Premier League trip to Liverpool tomorrow. 
                    Rashford was forced off against Wolves in the FA Cup third round replay at Old Trafford on Wednesday after just 16 minutes with a recurring back problem.
                    United manager Ole Gunnar Solskjaer had rested Rashford but, with the tie goalless, decided to bring on the 22-year-old just after the hour mark. 
                    Juan Mata secured United's progression to the fourth round but the Norwegian admitted the decision to bring Rashford on backfired after he went down clutching his back and had to be replaced by Jesse Lingard.
                    The United manager said in his pre-match press conference that it was going to be a last-minute decision on whether or not Rashford would travel to Merseyside. Rashford was not with the United squad that arrived 
                    at The Lowry Hotel on Saturday night, having reported at the club's Carrington training complex in the morning.
                </p>
                <a className="bt bt-primary-transparent">
                    Tawarkan Solusi
                </a>
            </div>
        </div>
    )
}