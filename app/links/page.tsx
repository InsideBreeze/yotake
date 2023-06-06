import Link from "next/link"

const items = [
	{
		topic: 'Blogs',
		links: [
			{
				name: 'Josh Comeau\'s blog',
				href: 'https://www.joshwcomeau.com/',
				description: ''
			},
			{
				name: 'Dan Abramov\'s blog',
				href: 'https://overreacted.io/',
				description: ''
			},
			{
				name: 'Developer Way',
				href: 'https://www.developerway.com/',
				description: 'advanced react contents'
			},
			{
				name: 'Modern CSS Challenges',
				href: 'https://moderncss.dev/',
				description: 'css'
			}
		]
	},
	{
		topic: 'Courses',
		links: [
			{
				name: 'FullStackOpen',
				href: 'https://fullstackopen.com/en/',
				description: ''
			},
			{
				name: 'how-to-learn-rust',
				href: 'https://learning.accelerant.dev/view/courses/how-to-learn-rust',
				description: ''
			}
		]
	},
	{
		topic: 'Youtube Channels',
		links: [
			{
				name: 'Jack Herrington',
				href: 'https://www.youtube.com/@jherr',
				description: 'Frontend videos from basic to very advanced;'
			},
			{
				name: 'Cali Castle',
				href: 'https://www.youtube.com/@calicastle',
				description: ''
			}
		]
	}
]
export default function Links() {
	return (
		<div>
			{
				items.map(item => (
					<div key={item.topic}>
						<h2 className='my-3 font-semibold'>{item.topic}</h2>
						<ul className='ml-4 '>
							{
								item.links.map(link => (
									<li key={link.name} className='before:content-["🍀"] before:mr-2 before:text-sm'>
										<Link href={link.href} className='text-sm'>
											{link.name}
										</Link>
									</li>
								))
							}
						</ul>
					</div>
				))
			}

		</div>
	)
}
