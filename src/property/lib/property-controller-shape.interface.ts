// Interface.
import { PropertyDescriptorChainShape, WrappedPropertyDescriptor } from '@typedly/descriptor';
// Type.
import { GetterCallback } from '@typedly/callback';
import { SetterCallback } from '@typedly/callback';
/**
 * @description The interface defines the structure for a property controller that manages property descriptors and their associated metadata.
 * @export
 * @interface PropertyControllerShape
 * @template {Record<PropertyKey, any>} O 
 * @template {keyof O extends string | symbol ? keyof O : never} [K=keyof O extends string | symbol ? keyof O : never] 
 * @template {boolean} [A=boolean] 
 * @template {boolean} [F=boolean] 
 * @template {boolean} [C=boolean] 
 * @template {boolean} [E=boolean] 
 * @template {WrappedPropertyDescriptor<O, K, A, F, C, E>} [D=WrappedPropertyDescriptor<O, K, A, F, C, E>] 
 */
export interface PropertyControllerShape<
  O extends Record<PropertyKey, any>,
  K extends keyof O extends string | symbol ? keyof O : never = keyof O extends string | symbol ? keyof O : never,
  A extends boolean = boolean,
  F extends boolean = boolean,
  C extends boolean = boolean,
  E extends boolean = boolean,
  D extends WrappedPropertyDescriptor<O, K, A, F, C, E> = WrappedPropertyDescriptor<O, K, A, F, C, E>,
> {
  /**
   * @description
   * @readonly
   * @type {(A | undefined)}
   */
  get active(): A | undefined;

  /**
   * @description
   * @readonly
   * @type {D}
   */
  get descriptor(): D;

  /**
   * @description
   * @readonly
   * @type {(PropertyDescriptorChainShape<O, K, any, A, C, E> | undefined)}
   */
  get descriptorChain(): PropertyDescriptorChainShape<O, K, any, A, C, E> | undefined;

  /**
   * @description
   * @readonly
   * @type {(Set<PropertyDescriptor> | undefined)}
   */
  get descriptors(): Set<PropertyDescriptor> | undefined;

  /**
   * @description
   * @readonly
   * @type {K}
   */
  get key(): K;

  /**
   * @description
   * @readonly
   * @type {O}
   */
  get object(): O;

  /**
   * @description
   * @readonly
   * @type {PropertyDescriptor}
   */
  get previousDescriptor(): PropertyDescriptor;

  /**
   * @description
   * @readonly
   * @type {PropertyKey}
   */
  get privateKey(): PropertyKey;

  /**
   * @description
   * @returns {this} 
   */
  attach(): this;

  // Descriptors.
  addDescriptor(descriptor: PropertyDescriptor): this;
  getDescriptor(id: number): PropertyDescriptor;
  removeDescriptor(id: number): this;

  /**
   * @description
   * @type {(D['get'] | undefined)}
   */
  get: D['get'] | undefined;

  /**
   * @description
   * @type {(D['set'] | undefined)}
   */
  set: D['set'] | undefined;

  /**
   * @description
   * @type {(GetterCallback<O, K> | undefined)}
   */
  onGet: GetterCallback<O, K> | undefined;

  /**
   * @description
   * @type {(SetterCallback<O, K> | undefined)}
   */
  onSet: SetterCallback<O, K> | undefined;

  // Active.
  /**
   * @description
   * @returns {boolean} 
   */
  isActive(): boolean;

  /**
   * @description
   * @param {boolean} active 
   * @returns {this} 
   */
  setActive(active: boolean): this;
}
