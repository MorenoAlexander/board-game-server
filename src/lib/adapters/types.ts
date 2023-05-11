export interface IAdapter {
  get<T>(key: string): Promise<string | null>
  set<T>(key: string, value: T): Promise<void>
}
