// A Proxy Concept example

interface ISubject<T> {
  // An interface implemented by both the proxy & the real subject
  request(): T; // A method to implement
}

class RealSubject implements ISubject<number[]> {
  // The actual real object that the proxy is representing

  enormousData: number[];

  constructor() {
    // hypothetically enormous amounts of data
    this.enormousData = [1, 2, 3];
  }

  request() {
    return this.enormousData;
  }
}

class ProxySubject implements ISubject<number[]> {
  /**
   * In this case, the proxy will act as a cache for `enormous data`
   * and only populate the enormous data when it is actually necessary
   */

  enormousData: number[];
  realSubject: RealSubject;

  constructor() {
    this.enormousData = [];
    this.realSubject = new RealSubject();
  }

  request() {
    /**
     * Using the proxy as a cache, and loading data into it only if
     * it is needed
     */
    if (this.enormousData.length === 0) {
      console.log('Pulling data from real subject');
      this.enormousData = this.realSubject.request();
      return this.enormousData;
    }

    console.log('pulling data from proxy cache');
    return this.enormousData;
  }
}

// The Client
const PROXY_SUBJECT = new ProxySubject();

// Use the Subject. First time it will load the enormous amounts of data
console.log(PROXY_SUBJECT.request());

// Use the Subject again, but this time it retrieves it from the local cache
console.log(PROXY_SUBJECT.request());
