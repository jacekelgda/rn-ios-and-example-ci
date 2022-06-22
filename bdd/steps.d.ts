/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.ts');

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    current: any;
  }
  interface Methods extends GraphQL, JSONResponse {}
  interface I
    extends ReturnType<steps_file>,
      WithTranslation<GraphQL>,
      WithTranslation<JSONResponse> {}
  namespace Translation {
    interface Actions {}
  }
}
