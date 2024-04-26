import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-accordion',
	standalone: true,
	imports: [NgIf],
	templateUrl: './accordion.component.html',
	styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
	@Input() item: any;
	
	toggleExpanded(event: MouseEvent): void {
		if (this.item.isPinned) return;
		this.item.expanded = !this.item.expanded;
		console.log('expand toggled', this.item.expanded);
	}

	pinItem(event: MouseEvent) {
		event.stopPropagation();
		this.item.isPinned = !this.item.isPinned;
		console.log('item pinned', this.item.isPinned);
	}
}
