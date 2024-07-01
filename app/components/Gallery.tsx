import { twMerge } from "tailwind-merge";
import { Image } from "@nextui-org/image";

const images: { src: string; rotate: string }[] = [
	{ src: "https://picsum.photos/seed/picsum/200/300", rotate: "rotate-2" },
	{ src: "https://picsum.photos/id/871/200/300", rotate: "-rotate-2" },
	{ src: "https://picsum.photos/200/300?grayscale", rotate: "rotate-2" },
	{
		src: "https://picsum.photos/id/870/200/300",
		rotate: "rotate-2",
	},
	{ src: "https://picsum.photos/200/300", rotate: "-rotate-2" },
];

export default function Gallery() {
	return (
		<div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
			{images.map((image, index) => (
				<div
					key={index}
					className={twMerge(
						"relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-slate-100 sm:w-72 sm:rounded-2xl dark:bg-slate-800",
						image.rotate,
					)}
				>
					<Image
						alt="Gallery Image"
						loading="lazy"
						width="3744"
						height="5616"
						className="absolute inset-0 h-full w-full object-cover"
						sizes="(min-width: 640px) 18rem, 11rem"
						src={image.src}
					/>
				</div>
			))}
		</div>
	);
}
