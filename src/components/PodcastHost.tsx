import { Card, CardContent } from "@/components/ui/card";
import type { ReactNode } from "react";

type Props = {
	name: string;
	handle: string;
	link: string;
	/* we use it for the astro image component */
	children: ReactNode;
};

export const PodcastHost = ({ name, handle, link, children }: Props) => (
	<a
		href={link}
		target="_blank"
		rel="noopener noreferrer"
		className="block transition-all duration-300 ease-in-out focus:outline-hidden focus:ring-2 focus:ring-primary focus:ring-offset-2"
	>
		<Card className="h-full hover:bg-accent">
			<CardContent className="p-4">
				<div className="flex items-start gap-x-3">
					<div className="h-10 w-10 sm:h-12 sm:w-12">{children}</div>

					<div className="text-left">
						<h3 className="font-semibold text-sm sm:text-base">{name}</h3>
						<div className="text-xs sm:text-sm text-muted-foreground">
							{handle}
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	</a>
);
