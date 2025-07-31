// Interface.
import { WrappedPropertyDescriptor } from '@typedly/descriptor';
/**
 * @description The interface defines the structure for a wrapped property descriptor controller that manages it and its associated metadata.
 * @export
 * @interface WrappedPropertyDescriptorController
 * @template [O=any] 
 * @template {keyof O} [K=keyof O] 
 * @template {K extends keyof O ? O[K] : any} [V=K extends keyof O ? O[K] : any] 
 * @template {boolean} [A=boolean] 
 * @template {boolean} [N=boolean] 
 * @template {boolean} [C=boolean] 
 * @template {boolean} [E=boolean] 
 * @template {WrappedPropertyDescriptor<O, K, V, A, N, C, E, D>} [D=WrappedPropertyDescriptor<O, K, V, A, N, C, E, any>] 
 * @extends {WrappedPropertyDescriptor<O, K, V, A, N, C, E, D>}
 */
export interface WrappedPropertyDescriptorController<
  // Object.
  O = any,
  // Key.
  K extends keyof O = keyof O,
  // Value.
  V extends K extends keyof O ? O[K] : any = K extends keyof O ? O[K] : any,
  // Active.
  A extends boolean = boolean,
  // Enabled.
  N extends boolean = boolean,
  // Configurable.
  C extends boolean = boolean,
  // Enumerable.
  E extends boolean = boolean,
  // The type of the previous and current descriptor.
  D extends WrappedPropertyDescriptor<O, K, V, A, N, C, E, D> = WrappedPropertyDescriptor<O, K, V, A, N, C, E, any>
> extends WrappedPropertyDescriptor<O, K, V, A, N, C, E, D> {
  /**
   * @description The required active in the property descriptor controller for activating/deactivating callbacks.
   * @readonly
   * @type {(A | { onGet?: boolean; onSet?: boolean })}
   */
  get active(): A | { onGet?: boolean; onSet?: boolean };

  /**
   * @description The required enabled in the property descriptor controller for disabling/enabling descriptors.
   * @readonly
   * @type {N}
   */
  get enabled(): N;

  /**
   * @description The required key in the property descriptor controller.
   * @readonly
   * @type {K}
   */
  get key(): K;

  /**
   * @inheritdoc
   */
  get privateKey(): PropertyKey;

  /**
   * @description Activates the callbacks `onGet` and `onSet`.
   * @param {('both' | 'onGet' | 'onSet')} callback 
   * @returns {this} 
   */
  
  activate(callback: 'both' | 'onGet' | 'onSet'): this;

  /**
   * @description Deactivates the callbacks `onGet` and `onSet`.
   * @param {('both' | 'onGet' | 'onSet')} callback 
   * @returns {this} 
   */
  deactivate(callback: 'both' | 'onGet' | 'onSet'): this;

  /**
   * @description Disables the descriptor.
   * @abstract
   * @returns {this} 
   */
  disable(): this;

  /**
   * @description Enables the descriptor.
   * @abstract
   * @returns {this} 
   */
  enable(): this;

  /**
   * @description Checks whether the descriptor callback `onGet` or `onSet` is active or 'both' are active.
   * @param {('both' | 'onGet' | 'onSet')} callback 
   * @returns {boolean} 
   */
  isActive(callback: 'both' | 'onGet' | 'onSet'): boolean;
}
