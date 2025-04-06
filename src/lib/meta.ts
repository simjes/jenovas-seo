import type { Person } from "schema-dts";

export const authors = [
	{
		"@type": "Person",
		name: "Jostein Hakestad",
		sameAs: "https://bsky.app/profile/jostein.radcrew.net",
	},
	{
		"@type": "Person",
		name: "Audun Rodem",
		sameAs: "https://bsky.app/profile/arodem.bsky.social",
	},
	{
		"@type": "Person",
		name: "Karl-Martin Hogsnes",
		sameAs: "https://bsky.app/profile/karl.lvup.no",
	},
] satisfies Person[];

export const slugify = (text: string) =>
	text
		.toLowerCase()
		.replace(/[^\w\s-]/g, "") // Remove non-word chars (except spaces and hyphens)
		.replace(/\s+/g, "-") // Replace spaces with hyphens
		.replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
		.trim(); /* Trim leading/trailing spaces and hyphens*/
