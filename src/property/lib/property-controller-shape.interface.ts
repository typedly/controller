// Interface.
import { DescriptorsShape, PropertyDescriptorChainShape, WrappedPropertyDescriptor } from '@typedly/descriptor';
// Type.
import { GetterCallback } from '@typedly/callback';
import { SetterCallback } from '@typedly/callback';
/**
 * @description The interface defines the structure for a property controller that manages property descriptors and their associated metadata.
 * @export
 * @interface PropertyControllerShape
 * @template {Record<PropertyKey, any>} O
 * @template {keyof O} [K=keyof O] The key type of the object O.
 * @template {boolean} [A=boolean] The type of active state of the property.
 * @template {boolean} [F=boolean] The type of enabled state of the property.
 * @template {boolean} [C=boolean] The type of configurable state of the property.
 * @template {boolean} [E=boolean] The type of enumerable state of the property.
 * @template {WrappedPropertyDescriptor<O, K, A, F, C, E>} [D=WrappedPropertyDescriptor<O, K, A, F, C, E>]
 */
export interface PropertyControllerShape<
  O extends Record<PropertyKey, any>,
  K extends keyof O = keyof O,
  A extends boolean = boolean,
  F extends boolean = boolean,
  C extends boolean = boolean,
  E extends boolean = boolean,
  D extends WrappedPropertyDescriptor<O, K, A, F, C, E> = WrappedPropertyDescriptor<O, K, A, F, C, E>,
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
   * @type {(PropertyDescriptorChainShape<O, K, O[K], A, F, C, E> | undefined)}
   */
  get descriptorChain(): PropertyDescriptorChainShape<O, K, O[K], A, F, C, E, D> | undefined;

  /**
   * @description Gets the descriptors for the object properties.
   * @readonly
   * @type {(DescriptorsShape<O, K, O[K], A, F, C, E, D> | undefined)}
   */
  get descriptors(): DescriptorsShape<O, K, O[K], A, F, C, E, D> | undefined;

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

  //#region Descriptor.
  /**
   * @description Gets the getter function of the descriptor.
   * @type {(D['get'] | undefined)}
   */
  get: D['get'] | undefined;

  /**
   * @description Gets the setter function of the descriptor.
   * @type {(D['set'] | undefined)}
   */
  set: D['set'] | undefined;

  /**
   * @description Current `onGet` callback.
   * @type {(GetterCallback<O, K> | undefined)}
   */
  onGet: GetterCallback<O, K> | undefined;

  /**
   * @description Current `onSet` callback.
   * @type {(SetterCallback<O, K> | undefined)}
   */
  onSet: SetterCallback<O, K> | undefined;
  //#endregion Descriptor.

  // Active.
  /**
   * @description Checks if the descriptor at index is active.
   * @param {number} index - The index of the descriptor to check.
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
