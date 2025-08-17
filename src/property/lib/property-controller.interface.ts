// Interface.
import { PropertyDescriptorChain, PropertyDescriptors, WrappedPropertyDescriptor } from '@typedly/descriptor';
// Type.
import { GetterCallback } from '@typedly/callback';
import { SetterCallback } from '@typedly/callback';
/**
 * @description The interface defines the structure for a property controller that manages property descriptors and their associated metadata.
 * @export
 * @interface PropertyController
 * @template [O=any] 
 * @template {keyof O} [K=keyof O] 
 * @template {K extends keyof O ? O[K] : any} [V=K extends keyof O ? O[K] : any] 
 * @template {boolean} [A=boolean] 
 * @template {boolean} [N=boolean] 
 * @template {boolean} [C=boolean] 
 * @template {boolean} [E=boolean] 
 * @template {WrappedPropertyDescriptor<O, K, V, A, N, C, E, D> | PropertyDescriptor} [D=WrappedPropertyDescriptor<O, K, V, A, N, C, E, any>] 
 */
export interface PropertyController<
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
  // Descriptor.
  D extends WrappedPropertyDescriptor<O, K, V, A, N, C, E, D> | PropertyDescriptor = WrappedPropertyDescriptor<O, K, V, A, N, C, E, any>,
> {
  /**
   * @description Gets the active state of the property.
   * @readonly
   * @type {(A | undefined)}
   */
  get active(): A | undefined;

  /**
   * @description Gets the current descriptor.
   * @readonly
   * @type {D}
   */
  get descriptor(): D;

  /**
   * @description Gets the descriptor chain for the property.
   * @readonly
   * @type {(PropertyDescriptorChain<O, K, V, A, N, C, E, D> | undefined)}
   */
  get descriptorChain(): PropertyDescriptorChain<O, K, V, A, N, C, E, D> | undefined;

  /**
   * @description Gets the descriptors for the object properties.
   * @readonly
   * @type {(PropertyDescriptors<O, K, V, A, N, C, E, D> | undefined)}
   */
  get descriptors(): PropertyDescriptors<O, K, V, A, N, C, E, D> | undefined;

  /**
   * @description Gets the key of the property.
   * @readonly
   * @type {K}
   */
  get key(): K;

  /**
   * @description Gets the object that the property controller is managing.
   * @readonly
   * @type {O}
   */
  get object(): O;

  /**
   * @description Gets the previous descriptor.
   * @readonly
   * @type {D}
   */
  get previousDescriptor(): D;

  /**
   * @description Gets the private key of the property.
   * @readonly
   * @type {PropertyKey}
   */
  get privateKey(): PropertyKey;

  //#region Descriptor.
  /**
   * @description Gets the getter function of the descriptor.
   * @type {(D['get'] | undefined)}
   */
  get get(): D['get'] | undefined;

  /**
   * @description Gets the setter function of the descriptor.
   * @type {(D['set'] | undefined)}
   */
  get set(): D['set'] | undefined;

  /**
   * @description Current `onGet` callback.
   * @type {(GetterCallback<O, K> | undefined)}
   */
  get onGet(): GetterCallback<O, K> | undefined;

  /**
   * @description Current `onSet` callback.
   * @type {(SetterCallback<O, K> | undefined)}
   */
  get onSet(): SetterCallback<O, K> | undefined;
  //#endregion Descriptor.

  /**
   * @description Attaches the property controller to the object.
   * @returns {this} 
   */
  attach(): this;

  //#region Descriptors.
  /**
   * @description Adds a new descriptor.
   * @param {D} descriptor 
   * @returns {this} 
   */
  addDescriptor(descriptor: D): this;

  /**
   * @description Gets the descriptor at the specified index.
   * @param {number} index 
   * @returns {(D | undefined)} 
   */
  getDescriptor(index: number): D | undefined;

  /**
   * @description Removes the descriptor at the specified index.
   * @param {number} index 
   * @returns {this} 
   */
  removeDescriptor(index: number): this;
  //#endregion Descriptors.

  // Active.
  /**
   * @description Checks if the descriptor at index is active.
   * @param {number} index The index of the descriptor to check.
   * @returns {boolean} 
   */
  isActive(index: number): boolean;

  /**
   * @description Sets the active state of the descriptor at index.
   * @param {number} index The index of the descriptor to set active.
   * @param {boolean} active The active state to set.
   * @returns {this}
   */
  setActive(index: number, active: boolean): this;
}
