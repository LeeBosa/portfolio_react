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
	 * Sidebar
	 * 
	 * showSidebar:    boolean
	 * sidebarWidth:	 number *Compatible only with tailwindCSS rem properties. Check out https://tailwindcss.com/docs/width for details.
	 * sidebarPadding: number[x, y] *Compatible only with tailwindCSS rem properties.
	 * sidebarBorder:  boolean *If true, sidebarColor will be applied as border color. If not, it will be applied as background color.
	 * sidebarColor:   string *If you don't want to apply color on sidebar, set it as 'transparent'.
	 */
	showSidebar: true,
	sidebarWidth: 72,
	sidebarPadding: [6, 12],
	sidebarBorder: true,
	sidebarColor: '#CED4DA',

	/**
	 * Sidebar profile image
	 * 
	 * showProfileImg: 	 boolean
	 * profileImgUrl:		 string
	 * profileImgSize:	 number *Compatible only with tailwindCSS rem properties.
	 * profileImgRadius: string none|sm|md|lg|full *Compatible only with tailwindCSS rounded properties.
	 */
	profileImgUrl: '/profile_img.jpg',
	profileImgSize: 48,
	profileImgRadius: 'md',

	/**
	 * Sidebar profile name
	 * 
	 * 
	 */
}

module.exports = nexumeConfig