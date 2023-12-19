const nexumeConfig = {
	/**
	 * Metadata
	 * 
	 * title:       string
	 * description: string
	 * icon:        string,
	 */
	title: "Jane Doe",
	description: "Jane Doe's resume",
	icon: '/favicon.ico',

	/**
	 * Body
	 * 
	 * bodyBgColor: string
	 */
	bodyBgColor: '#000000',

	/**
	 * Side
	 * 
	 * showSide:    boolean
	 * sideWidth:   number *Compatible only with tailwindCSS rem properties. Check out https://tailwindcss.com/docs/width for details.
	 * sidePadding: number[x, y] *Compatible only with tailwindCSS rem properties.
	 * sideBorder:  boolean *If true, sidebarColor will be applied as border color. If not, it will be applied as background color.
	 * sideColor:   string *If you don't want to apply color on sidebar, set it as 'transparent'.
	 */
	showSide: true,
	sideWidth: 72,
	sidePadding: [6, 12],
	sideBorder: true,
	sideColor: '#CED4DA',

	/**
	 * Side profile image
	 * 
	 * showProfileImg: 	 boolean
	 * profileImgUrl:	 string
	 * profileImgSize:	 number *Compatible only with tailwindCSS rem properties.
	 * profileImgRadius: string none|sm|md|lg|full *Compatible only with tailwindCSS rounded properties.
	 */
	profileImgUrl: '/profile_img.jpg',
	profileImgSize: 48,
	profileImgRadius: 'md',

	/**
	 * Sidebar profile name
	 * 
	 * profileNameWidth: 	number *Compatible only with tailwindCSS rem properties.
	 * profileNameColor: 	string
	 * profileNameFontSize: string *Compatible only with tailwindCSS font size properties. Check out https://tailwindcss.com/docs/font-size for details.
	 */
	profileNameWidth: 48,
	profileNameColor: '#212529',
	profileNameFontSize: 'xl',
	profileNameFontWeight: ''
}

module.exports = nexumeConfig