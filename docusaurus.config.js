module.exports = {
	title: 'Sapflow',
	tagline: 'Using the external heat ratio method',
	url: 'https://dotmote.github.io/',
	baseUrl: '/sapflow-docs/',
	favicon: 'img/icon.png',
	organizationName: 'dotmote', // Usually your GitHub org/user name.
	projectName: 'sapflow-docs', // Usually your repo name.
	plugins: ['@docusaurus/plugin-ideal-image'],
	themeConfig: {
		navbar: {
			title: 'Sapflow',
			logo: {
				alt: 'Dotmote Labs Logo',
				src: 'img/icon.png'
			},
			links: [
				{ to: 'docs/overview', label: 'Docs', position: 'left' },
				{ to: 'blog', label: 'Blog', position: 'left' },
				{
					href: 'https://github.com/dotmote/sapflow-docs',
					label: 'GitHub',
					position: 'right'
				}
			]
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Overview',
							to: 'docs/overview'
						},
						{
							label: 'References',
							to: 'docs/references'
						}
					]
				},
				// {
				// 	title: 'Community',
				// 	items: [
				// 		{
				// 			label: 'Stack Overflow',
				// 			href: 'https://stackoverflow.com/questions/tagged/docusaurus'
				// 		},
				// 		{
				// 			label: 'Discord',
				// 			href: 'https://discordapp.com/invite/docusaurus'
				// 		}
				// 	]
				// },
				{
					title: 'Social',
					items: [
						{
							label: 'Blog',
							to: 'blog'
						},
						{
							label: 'GitHub',
							href: 'https://github.com/dotmote'
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/dotmote'
						}
					]
				}
			],
			copyright: `Copyright © ${new Date().getFullYear()} Dotmote Labs. Built with Docusaurus.`
		}
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/dotmote/sapflow-docs/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			}
		]
	]
};
