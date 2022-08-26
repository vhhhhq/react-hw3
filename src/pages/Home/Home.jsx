import React from 'react';
import './Home.css';
import Card from '../../components/Card/Card'


const products = [
	{
		title: 'Возвращение Героя',
		description: 'Манхва',
		img: 'https://api.remanga.org/media/titles/hero-returns/0f788cdbb4a795e145214175b46b294f.jpg',
	},

	{
		title: 'Поднятие уровня в одиночку',
		description: 'Манхва',
		img: 'https://api.remanga.org/media/titles/solo-leveling/3d99c504bdc727e34d12eb945f09e30a.jpg',
	},
	{
		title: 'Ветролом',
		description: 'Манхва',
		img: 'https://api.remanga.org/media/titles/wind_breaker/479506b907ce06487b91bcfbeb33b48d.jpg',
	},
  {
		title: 'Девушка из анонимного чата!',
		description: 'Манхва',
		img: 'https://api.remanga.org/media/titles/the-girl-from-random-chatting/41cf611d5762cd30d580c36367ef82a7.jpg',
	},

	{
		title: 'Расхититель гробниц',
		description: 'Манхва',
		img: 'https://api.remanga.org/media/titles/tomb-raider/7388f6c05631889e774c7881accb1226.jpg',
	},
	{
		title: 'Я стал графским ублюдком',
		description: 'Манхва',
		img: 'https://api.remanga.org/media/titles/trash-of-the-counts-family/5ebd3e49ee908427b7061b7c2249b7c3.jpg',
	},
  {
		title: 'Реинкарнация врача',
		description: 'Манхва',
		img: 'https://api.remanga.org/media/titles/medical-reincarnation/ad125a4552ce166c8852d0de57225392.jpg',
	},

	{
		title: 'Возрождение Хуашань',
		description: 'Манхва',
		img: 'https://api.remanga.org/media/titles/return-volcano/af4cae17d6b4dedb3480aa773d524151.jpg',
	},
	{
		title: 'Борьба в прямом эфире',
		description: 'Манхва',
		img: 'https://api.remanga.org/media/titles/how-to-fight/9310961eb51fb24ac77612c4bcadb681.jpg',
	},
  {
		title: 'Осколок времени',
		description: 'Манхва',
		img: 'https://api.remanga.org/media/titles/house-of-time/a58960b151f21a8d5685c95ab13f0097.jpg',
	},

	{
		title: 'Всеведущий читатель',
		description: 'Манхва',
		img: 'https://api.remanga.org/media/titles/omniscient-reader/86eab52daf59ea6ac45faa037ebc7029.jpg',
	},
	{
		title: 'Милый дом',
		description: 'Манхва',
		img: 'https://api.remanga.org/media/titles/sweet_home_hwang_youngchan/8526d40b663441e5189f6263cefca146.jpg',
	},
   {
		title: 'Прирожденный наёмник',
		description: 'Манхва',
		img: 'https://api.remanga.org/media/titles/the-strongest-mercenary/adae270223c08b384497549e5f3b02c5.jpg',
	},

	{
		title: 'Начало после конца',
		description: 'Манхва',
		img: 'https://api.remanga.org/media/titles/the_beginning_after_the_end/high_cover.jpg',
	},
	{
		title: 'Выживание с нуля',
		description: 'Манхва',
		img: 'https://api.remanga.org/media/titles/return-to-survive/859bbe2cb25fb7143bc2ed615c1b29d8.jpg',
	},
	{
		title: 'Мальчик с ружьем',
		description: 'Манхва',
		img: 'https://api.remanga.org/media/titles/hunting-rifle-boy/664a452d82ec1011a6e752209752aae8.jpg',
	},

]


function Home() {
  return (
    <section className='block-section'>
        <div className="card-sector">
            {products.map(product => (
                <Card 
                    img={product.img}
                    title={product.title} 
					description={product.description} />
			))}
        </div>
    </section>
  )
}

export default Home