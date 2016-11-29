import { Subscription } from 'rxjs/Subscription';
import { OnDestroy, Injectable, Optional, OpaqueToken, Inject } from '@angular/core';
import { merge } from 'rxjs/observable/merge';
import { Store } from './store';

declare var Reflect: any;
const EFFECTS_METADATA_KEY = 'ng-vcl/effects';

export const STORE_EFFECTS = new OpaqueToken('store.effects');


export function Effect(): PropertyDecorator {
  return function(target: any, propertyName: string) {
    if (!Reflect.hasOwnMetadata(EFFECTS_METADATA_KEY, target)) {
      Reflect.defineMetadata(EFFECTS_METADATA_KEY, [], target);
    }
    const effectProperties: string[] = Reflect.getOwnMetadata(EFFECTS_METADATA_KEY, target);
    Reflect.defineMetadata(EFFECTS_METADATA_KEY, [ ...effectProperties, propertyName ], target);
  };
}

export function getEffectsMetadata(instance: any): string[] {
  const target = Object.getPrototypeOf(instance);
  if (!Reflect.hasOwnMetadata(EFFECTS_METADATA_KEY, target)) {
    return [];
  }
  return Reflect.getOwnMetadata(EFFECTS_METADATA_KEY, target);
}


@Injectable()
export class Effects implements OnDestroy {

  private effectSubs: Subscription[] = [];

  constructor(
    private store: Store,
    @Optional()
    @Inject(STORE_EFFECTS)
    effects: any[]
  ) {
    this.addEffects(effects);
  }

  addEffects(effectInstances: any | any[]) {
    const eiArr: any[] = Array.isArray(effectInstances) ? effectInstances : [effectInstances];
    eiArr.forEach(instance => {
      if (instance) {
        const properties = getEffectsMetadata(instance);
        const effects$ = merge(...(properties.map(property => instance[property])));
        const sub = effects$.subscribe(this.store);
        this.effectSubs.push(sub);
      }
    });
  }

  ngOnDestroy() {
    [...this.effectSubs].filter(sub => sub && !sub.closed).forEach(sub => sub.unsubscribe());
  }
}