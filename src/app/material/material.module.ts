import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

const materialComponents = [MatButtonModule, MatInputModule];

@NgModule({
    declarations: [],
    imports: [CommonModule, materialComponents],
    exports: [materialComponents],
})
export class MaterialModule {}
