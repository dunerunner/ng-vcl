import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { WormholeHost } from '../wormhole/index';

@Component({
  selector: 'vcl-notifier-content-component',
  templateUrl: 'notifier-content.component.html'
})
export class VCLNotifierContentComponent {

  @Input() wormholeComponentDetails: any;

  @ViewChild('wormholeHost', {read: ViewContainerRef})
  set target(vcRef: ViewContainerRef) {
    this.host = new WormholeHost(vcRef);
  }

  host: WormholeHost;

  ngAfterViewInit() {
    this.host.connectWormhole(this.wormholeComponentDetails.contentComponentClass, this.wormholeComponentDetails.attributes);
  }

}
