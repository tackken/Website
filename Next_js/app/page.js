'use client'
// npm run dev

import React, { useState, useRef } from 'react';
import { FadeIn } from './components/FadeIn';
import { Button } from './components/button.css';

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(null);
  const takuEmailRef = useRef(null);
  const kengoEmailRef = useRef(null);

  const handleCopy = (email) => {
    const emailRef = email === 'taku' ? takuEmailRef : kengoEmailRef;
    const range = document.createRange();
    range.selectNode(emailRef.current);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      document.execCommand('copy');
      setCopiedEmail(emailRef.current.innerText);
      setTimeout(() => setCopiedEmail(null), 1000); // 1 seconds timeout to reset the copied state
    } catch (error) {
      console.error('Copy failed:', error);
    }

    window.getSelection().removeAllRanges();
  };

  return (
    <div>
      <a href="https://tac-org-aitrainer.hf.space/?__theme=light&__sign=eyJhbGciOiJFZERTQSJ9.eyJpYXQiOjE2ODcwMDcyMzUsInN1YiI6IlRhYy1vcmcvQUl0cmFpbmVyIiwiZXhwIjoxNjg3MDkzNjM1LCJpc3MiOiJodHRwczovL2h1Z2dpbmdmYWNlLmNvIn0.XasjWb1ehQ1bCeiNgqeyXWYrLW4mz_WZBE9CtgyxRfac0XW-OffcVL9MSthQ2pHmuObGwED_LWYCzbeOsc7hCw" class="btn btn--orange btn--circle btn--shadow" style={{ zIndex: 1, fontWeight: 'bold'}}>準備中</a>
      <FadeIn>
      <main style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', marginBottom: '1rem', flexDirection: 'column', borderTop: '1px solid', borderBottom: '1px solid', marginTop: '1rem', marginBottom: '1rem', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <video autoPlay muted playsInline loop style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: '0.5' }}>
          <source src="./weight_training.mp4" type="video/mp4" />
        </video>
        <p style={{ fontSize: '2.0rem', marginBottom: '1rem', marginTop: '-4rem', color: '#FFF', zIndex: '1', textAlign: 'center', padding: '0 2rem'}}>
          明日からのスポーツをもっと知的に。
        </p>
        <div style={{ textAlign: 'center', position: 'relative', zIndex: '1', marginTop: '2rem' }}>
          <button style={{ background: 'linear-gradient(to right, #7F00FF, #E100FF)', border: 'none', borderRadius: '4px', color: '#FFF', padding: '16px 32px', fontSize: '1.4rem', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', cursor: 'pointer', transition: 'background 0.3s ease'}} onClick={() => window.open("https://tac-org-aitrainer.hf.space/?__theme=light&__sign=eyJhbGciOiJFZERTQSJ9.eyJpYXQiOjE2ODcwMDcyMzUsInN1YiI6IlRhYy1vcmcvQUl0cmFpbmVyIiwiZXhwIjoxNjg3MDkzNjM1LCJpc3MiOiJodHRwczovL2h1Z2dpbmdmYWNlLmNvIn0.XasjWb1ehQ1bCeiNgqeyXWYrLW4mz_WZBE9CtgyxRfac0XW-OffcVL9MSthQ2pHmuObGwED_LWYCzbeOsc7hCw")}>
            コーチングAIを起動<br />(準備中)
          </button>
        </div>
      </main>
      </FadeIn>
      
      <FadeIn>
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content', marginBottom: '1rem', flexDirection: 'column', borderTop: '', borderBottom: '', marginTop: '1rem', marginBottom: '1rem', paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '2rem', paddingRight: '2rem'}}>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '', marginBottom: '2rem'}}>コーチングAIとは</p>
        <p style={{ fontSize: '1.2rem' }}>コーチングAIとは、スポーツ医学に関する<span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>大規模な査読済論文</span>を学習した自然言語処理AIです。最先端の科学的トレーニングをもとにアドバイスします。<br /><br />過去30年分の論文を大規模に学習させています。 </p>
      </main>
      </FadeIn>

      <FadeIn>
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content', marginBottom: '1rem', flexDirection: 'column', borderTop: '1px solid', borderBottom: '', marginTop: '1rem', marginBottom: '1rem', paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '2rem', paddingRight: '2rem'}}>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '', marginBottom: '', textAlign: 'center'}}>挨拶</p>
        <img src="/nakai.JPG" alt="Image" style={{ width: '70%', marginTop: '2rem', marginBottom: '2rem', maxWidth: '300px'}} />
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '', marginBottom: '', textAlign: 'center'}}>中井 琢</p>
        <p style={{ fontSize: '1.2rem' }}><br />SNSの普及に伴い、様々な情報が出回っており、正しい情報か否かの取捨選択の重要性は増しています。フィットネス業界に対しても例外ではなく、インフルエンサーはYoutubeやtiktok、instagramなどのSNSを通して、様々なトレーニング情報や食事の取り方を発信しています。その際に、科学的に正しい情報かどうか個々人で取捨選択することは重要です。フィットネスに対する知識の”ベース”を築くことができれば、より豊かで深みのあるフィットネスライフが実現できると確信しています。</p>
      </main>
      </FadeIn>

      <FadeIn>
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content', marginBottom: '1rem', flexDirection: 'column', borderTop: '1px solid', borderBottom: '', marginTop: '1rem', marginBottom: '1rem', paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '2rem', paddingRight: '2rem'}}>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold'}}>使用例</p>
        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>特定の分野を選択し質問することで、コーチングAIがあなたに科学的にアドバイスします。<br /><br />＊トレーニング関連以外の質問には答えない仕様です。まさに、科学論文誌という最も正しい情報を元にしか回答しません。</p>
        <img src="/example.png" alt="Image" style={{ width: '120%', marginTop: '2rem', marginBottom: '0rem', maxWidth: '800px'}} />
      </main>
      </FadeIn>

      <FadeIn>
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content', marginBottom: '1rem', flexDirection: 'column', borderTop: '1px solid', borderBottom: '', marginTop: '1rem', marginBottom: '1rem', paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '2rem', paddingRight: '2rem'}}>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>実績</p>
        {/* <p style={{ fontSize: '1.5rem' }}>（トレーナーに検証中）</p> */}
        <div style={{ marginBottom: '10px' }}></div> {/* スペースを作るための空のdiv */}
        {/* <video video autoPlay muted playsInline style={{width: '80%', height: '80%', objectFit: 'cover', paddingTop: '3rem', paddingBottom: '3rem'}}>
          <source src="./count_paper.mp4" type="video/mp4" />
        </video> */}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
          <h1 style={{ fontSize: '1.2rem', marginRight: '4rem', textAlign: 'center' }}>
            ユーザー数
            <p style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', margin: '0' }}>  &nbsp;--&nbsp; </p>
          </h1>
          <h1 style={{ fontSize: '1.2rem', marginRight: '', textAlign: 'center' }}>
            提携団体数
            <p style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', margin: '0' }}>  &nbsp;--&nbsp;  </p>
          </h1>
        </div>
        {/* <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
          <h1 style={{ fontSize: '1.2rem', marginRight: '4rem', textAlign: 'center', marginTop: '2rem'}}>
            学習済み論文数
            <p style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', margin: '0' }}>500+</p>
          </h1>
          <h1 style={{ fontSize: '1.2rem', marginRight: '', textAlign: 'center', marginTop: '2rem'}}>
            資金
            <p style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', margin: '0' }}>  &nbsp;--&nbsp;  </p>
          </h1>
        </div>*/}
      </main>
      </FadeIn>
      
      <main style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'fit-content', marginBottom: '1rem', flexDirection: 'column', borderTop: '1px solid', borderBottom: '', marginTop: '1rem', marginBottom: '1rem', paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem'}}>
        <FadeIn>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>お問い合わせ</p>
        <p style={{ fontSize: '1rem' }}>
          <br />中井 琢（東北大学）<br />専門：酸素医学<br />
          <span ref={takuEmailRef}>taku.nakai.s6@dc.tohoku.ac.jp</span>
          <span onClick={() => handleCopy('taku')} style={{ textDecoration: '', cursor: 'pointer', color: copiedEmail === 'taku.nakai.s6@dc.tohoku.ac.jp' ? 'green' : 'inherit' }}>
            {copiedEmail === 'taku.nakai.s6@dc.tohoku.ac.jp' ? ' Copied!' : ' 【Copy】'}
          </span>
        </p>
        <p style={{ fontSize: '1rem', marginBottom: '3rem' }}>
          <br />髙橋 健吾（東北大学）<br />専門：画像診断学<br />
          <span ref={kengoEmailRef}>kengo.takahashi.p5@dc.tohoku.ac.jp</span>
          <span onClick={() => handleCopy('kengo')} style={{ textDecoration: '', cursor: 'pointer', color: copiedEmail === 'kengo.takahashi.p5@dc.tohoku.ac.jp' ? 'green' : 'inherit' }}>
            {copiedEmail === 'kengo.takahashi.p5@dc.tohoku.ac.jp' ? ' Copied!' : ' 【Copy】'}
          </span>
        </p>
        </FadeIn>
        <FadeIn>
        <div>
        <p style={{ fontSize: '1.2rem' }}>Follow us</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', marginBottom: '5rem' }}>
          <a href="https://twitter.com/spo_coaching_ai" target="_blank" rel="noopener noreferrer">
            <img src="/twitter_logo.png" alt="Twitter" style={{ width: '40px', height: '40px', marginRight: '1rem' }} />
          </a>
          <a href="https://instagram.com/spo_coaching_ai" target="_blank" rel="noopener noreferrer">
            <img src="/instagram_logo.png" alt="Instagram" style={{ width: '40px', height: '40px' }} />
          </a>
        </div>
        </FadeIn>
      </main>
      
    </div>
  );
}