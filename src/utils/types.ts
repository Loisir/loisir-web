import React from "react";

/**
 * Construct a type with the properties of T and P merged.
 */
export type Merge<T, P> = P & Omit<T, keyof P>;

/**
 * Construct a type with the properties of T except for those in type K.
 */
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;