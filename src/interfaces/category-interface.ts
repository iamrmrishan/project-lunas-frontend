export interface ICategory {
  id: String;
  name: String;
  parentId: String;
  parent: ICategory[];
}

export interface ICategoriesRequset {
  categories: ICategory[];
}

export interface ICategoriesState {
  loading: boolean;
  categories: ICategory[];
}

export interface IFetchCategoriesFilterPayload {
  keyword: string;
}

export interface ICategoriesFilterAction {
  payload: IFetchCategoriesFilterPayload;
  type: string;
}
