import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import styles from './Download.module.sass'

const items = [
	{
		title: 'Build Fast',
		content: '',
		image: '/images/content/currency/flash.svg',
		url: '/',
	},
	{
		title: 'Efficient Transactions',
		content: '',
		image: '/images/content/currency/transfer.svg',
		url: '/',
	},
	{
		title: 'Robust Metadata',
		content: '',
		image: '/images/content/currency/diamond.svg',
		url: '/',
	},
]

const Download = () => {
	return (
		<div className={cn('section-mb0', styles.download)}>
			<div className={cn('container', styles.container)}>
				<div className={styles.bg}>
					<img
						srcSet='/images/content/nft-machine.png 2x'
						src='/images/content/nft-machine.png'
						alt='Download'
					/>
				</div>
				<div className={styles.wrap}>
					<h2 className={cn('h2', styles.title)}>High Performance NFT APIs</h2>
					<div className={styles.info}>
						Anytime, anywhere. Trade crypto on your terms.
					</div>
					<div className={styles.list}>
						{items.map((x, index) => (
							<Link className={styles.item} key={index} to={x.url}>
								<div className={styles.icon}>
									<img src={x.image} alt='Logo' />
								</div>
								<div className={styles.details}>
									<div className={styles.content}>{x.content}</div>
									<div className={styles.subtitle}>{x.title}</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Download
