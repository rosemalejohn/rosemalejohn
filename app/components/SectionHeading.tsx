/**
 * Section label, a rule, and a count. The count is always real data (how many
 * projects, how many roles) so the device carries information rather than
 * decorating the page.
 */
export default function SectionHeading({
	label,
	meta,
}: {
	label: string;
	meta?: string;
}) {
	return (
		<div className="flex items-center gap-5">
			<h2 className="font-display font-condensed text-[13px] font-bold uppercase tracking-label text-ink">
				{label}
			</h2>
			<span aria-hidden="true" className="h-px flex-1 bg-line" />
			{meta && (
				<span className="font-mono text-[11px] uppercase tracking-label text-muted">
					{meta}
				</span>
			)}
		</div>
	);
}
