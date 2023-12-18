export type NexumeConfig = {
	// Metadata
	title: string,
	description: string,

	// Sidebar
	showSidebar: boolean,
	sidebarWidth: number,
	sidebarPadding: number[],
	sidebarBorder: boolean,
	sidebarColor: string,

	// Sidebar profile image
	profileImgUrl: string,
	profileImgSize: number,
	profileImgRadius: string,
}