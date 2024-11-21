// pages/sports.js
import React from 'react';
import Image from 'next/image';

const SportsPage = () => {
  // スポーツのデータ
  const sportsData = [
    {
      id: 1,
      name: '中井 琢',
      university: '東北大学大学院',
      research: '酸素医学',
      achievements: '競輪',
      image: '/soccer.jpg',
    },
    {
      id: 2,
      name: '髙橋 健吾',
      university: '東北大学大学院',
      research: '放射線診断学、データサイエンス',
      achievements: 'ボディメイク',
      image: '/baseball.jpg',
    },
  ];

  return (
    <div>
      <br />
      <br />
      <ul>
        {sportsData.map((sport, index) => (
          <li key={sport.id}>
            <div className="flex items-center space-x-8">
              <div>
                <Image src={sport.image} alt={sport.name} width={300} height={200} />
              </div>
              <div>
                <h2 className="text-2xl">{sport.name}</h2>
                <p>出身大学: {sport.university}</p>
                <p>研究内容: {sport.research}</p>
                <p>スポーツ: {sport.achievements}</p>
              </div>
            </div>
            {index !== sportsData.length - 1 && <div className="my-10" />} {/* スペース */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SportsPage;
