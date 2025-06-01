export class Wait {
  static for(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
