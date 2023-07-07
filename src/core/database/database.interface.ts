export type Where<T> = Partial<T>;
export type Patch<T> = Partial<T>;
export type Domain<T> = T | null;

/**
 * C - Create DTO
 * U - Update DTO
 * D - Domain model
 */

export interface IRepositoryCreate<D, C> {
    create (createDto: C): Promise<Domain<D>>;
}

export interface IRepositoryUpdate<D, U> {
    update (where: Where<D>, updateDto: U): Promise<Domain<D>>;
}

export interface IRepositoryDelete<D> {
    delete (where: Where<D>): Promise<number>;
}

export interface IRepositoryFindOne<D> {
    findOne (where: Where<D>): Promise<Domain<D>>;
}

export interface IRepositoryFindMany<D> {
    findMany (where: Where<D>): Promise<D[]>;
}