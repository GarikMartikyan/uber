/// <reference types="nativewind/types" />

declare module '*.svg' {
  const value: any;
  export default value;
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.jpg' {
  const value: any;
  export default value;
}

declare module '*.jpeg' {
  const value: any;
  export default value;
}

declare module '*.gif' {
  const value: any;
  export default value;
}

declare module '@env' {
  export const DATABASE_URL: string;
  export const GEOAPIFY_API_KEY: string;
  export const YANDEX_MAPS_API_KEY: string;
}
