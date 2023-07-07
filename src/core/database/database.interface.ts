export type Where<T> = Partial<T>;
export type Patch<T> = Partial<T>;

/**
 * C - Create DTO
 * U - Update DTO
 * D - Domain model
 */

export interface IRepositoryCreate<C, D> {
    create (createDto: C): Promise<D>;
}

export interface IRepositoryUpdate<D, U> {
    update (where: Where<D>, updateDto: U): Promise<D>;
}

export interface IRepositoryDelete<D> {
    delete (where: Where<D>): number;
}

export interface IRepositoryFindOne<D> {
    findOne (where: Where<D>): Promise<D>;
}

export interface IRepositoryFindMany<D> {
    findMany (where: Where<D>): Promise<D[]>;
}