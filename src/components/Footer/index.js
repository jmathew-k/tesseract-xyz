import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Form from "../Form";
import Icon from "../Icon";
import Image from "../Image";

const menu = [
	{
		title: 'Platform',
		url: '/exchange',
	},
	{
		title: 'Use Cases',
		url: '/buy-crypto',
	},
	{
		title: 'Pricing',
		url: '/market',
	},
	{
		title: 'Blog',
		url: '/learn-crypto',
	},
	{
		title: 'Contact',
		url: '/contact',
	},
]

const socials = [
	{
		title: 'facebook',
		size: '16',
		url: 'https://www.facebook.com/tesseractxyz/',
	},
	{
		title: 'twitter',
		size: '18',
		url: 'https://twitter.com/tesseract_xyz',
	},
	{
		title: 'linkedin',
		size: '16',
		url: 'https://www.linkedin.com/company/tesseractxyz/',
	},
	// {
	//   title: "dribbble",
	//   size: "16",
	//   url: "https://dribbble.com/tesseractxyz",
	// },
	// {
	//   title: "behance",
	//   size: "20",
	//   url: "https://www.behance.net/tesseractxyz",
	// },
]

const Footer = () => {
	const [visible, setVisible] = useState(false)
	const [email, setEmail] = useState('')

	const handleSubmit = (e) => {
		alert()
	}

	return (
		<footer className={styles.footer}>
			<div className={styles.body}>
				<div className={cn('container', styles.container)}>
					<div className={styles.col}>
						<Link className={styles.logo} to='/'>
							<img
								className={styles.picDesktop}
								src='images/tess-logo.png'
								alt='Tesseract'
							/>
							<Image
								className={styles.picMobile}
								src='/images/tess-logo.png'
								srcDark='/images/tess-logo.png'
								alt='Tesseract'
							/>
						</Link>
						<div className={cn(styles.item, { [styles.active]: visible })}>
							<div
								className={styles.category}
								onClick={() => setVisible(!visible)}
							>
								Links
								<Icon name='arrow-down' size='24' />
							</div>
							<div className={styles.menu}>
								{menu.map((x, index) => (
									<NavLink
										className={styles.link}
										activeClassName={styles.active}
										to={x.url}
										key={index}
									>
										{x.title}
									</NavLink>
								))}
							</div>
						</div>
					</div>
					<div className={styles.col}>
						<div className={styles.category}>contact</div>
						<div className={styles.info}>
							<p>WeWork, Prestige Atlanta</p>
							<p>Koramangala, Bangalore</p>
						</div>
					</div>
					<div className={styles.col}>
						<div className={styles.category}>newsletter</div>
						<div className={styles.info}>
							Subscribe our newsletter to get updated on NFT ecosystem
						</div>
						<Form
							className={styles.form}
							value={email}
							setValue={setEmail}
							onSubmit={() => handleSubmit()}
							placeholder='Enter your email'
							type='email'
							name='email'
							icon='arrow-next'
						/>
					</div>
				</div>
			</div>
			<div className={styles.foot}>
				<div className={cn('container', styles.container)}>
					<div className={styles.copyright}>
						Copyright © 2022 Tesseract XYZ. All rights reserved
					</div>
					<div className={styles.socials}>
						{socials.map((x, index) => (
							<a
								className={styles.social}
								href={x.url}
								target='_blank'
								rel='noopener noreferrer'
								key={index}
							>
								<Icon name={x.title} size={x.size} />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
