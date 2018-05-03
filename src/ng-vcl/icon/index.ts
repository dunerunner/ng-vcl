import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { IconService } from './icon.service';

export { IconComponent, IconService };

export declare interface IconConfig {
  service?: any;
}

@NgModule({
  imports: [CommonModule],
  exports: [IconComponent],
  declarations: [IconComponent],
  providers: [IconService],
})
export class VCLIconModule {
  static forRoot(config: IconConfig): ModuleWithProviders {
    return {
      ngModule: VCLIconModule,
      providers: [
        {
          provide: IconService,
          useClass: config.service || IconService
        }
      ]
    };
  }
}
