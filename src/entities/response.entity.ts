export class ResponseEntity<T> {
      constructor(ok: boolean, data: T[] | T | null = null, message: string | null = null) {
            this.ok = ok;
            this.message = message;
            this.data = data;
      }

      ok: boolean = false;
      message: string | null = null;
      data: T[] | T | null = null;
}
