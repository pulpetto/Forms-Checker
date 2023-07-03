import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

const materialComponents = [MatButtonModule];

@NgModule({
    declarations: [],
    imports: [CommonModule, materialComponents],
    exports: [materialComponents],
})
export class MaterialModule {}
